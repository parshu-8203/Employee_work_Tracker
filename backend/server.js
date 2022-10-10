//imports
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

//using
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

//connecting to mongodb Atlas
mongoose.connect("mongodb+srv://mongo:mongo@cluster0.0i6xzbq.mongodb.net/EmpDatabase", { useNewUrlParser: true });

let payload = { name: 'John Doe', occupation: 'gardener' };

//Schema
const empSchema = new mongoose.Schema({
    name: String,
    Mail: String,
    Contact: Number,
    Department: String,
    Joining_Date: String,
    Password: String,
    Work:
        [
            {
                date: String,
                Tasks: [{ Task_description: String, Task_type: String, Start_time: String, duration: Number }]
            }
        ]

})

const sch = new mongoose.Schema({
    name : String,
    Mail : String,
    Contact : Number,
    Department : String,
    Joining_Date : String,
    Password : String,
    Work : 
    [
        {
            date : String,
            Tasks : {Task_description : String,Task_type : String,Start_time : String,duration : Number}
        }
    ]
    
})
//model
const emp = mongoose.model("Employee", empSchema, "Employees");
// const emp1 = mongoose.model("Employee2", sch,"Employees2");
// const agg = [
//     {
//         '$match': {
//             'Mail': 'Employee1@flipr.com'
//         }
//     }, {
//         '$unwind': '$Work'
//     }, {
//         '$project': {
//             '_id': 0,
//             'date': '$Work.date',
//             'Task_type': '$Work.Tasks.Task_type',
//             'duration': '$Work.Tasks.duration'
//         }
//     }, {
//         '$group': {
//             '_id': {
//                 'Task_type': '$Task_type',
//                 'date': '$date'
//             },
//             'duration': {
//                 '$sum': '$duration'
//             }
//         }
//     }, {
//         '$group': {
//             '_id': '$_id.date',
//             'WorkDuration': {
//                 '$sum': {
//                     '$cond': [
//                         {
//                             '$eq': [
//                                 '$_id.Task_type', 'Work'
//                             ]
//                         }, '$duration', 0
//                     ]
//                 }
//             },
//             'MeetingDuration': {
//                 '$sum': {
//                     '$cond': [
//                         {
//                             '$eq': [
//                                 '$_id.Task_type', 'Meeting'
//                             ]
//                         }, '$duration', 0
//                     ]
//                 }
//             },
//             'BreakDuration': {
//                 '$sum': {
//                     '$cond': [
//                         {
//                             '$eq': [
//                                 '$_id.Task_type', 'Break'
//                             ]
//                         }, '$duration', 0
//                     ]
//                 }
//             }
//         }
//     }, {
//         '$sort': {
//             '_id': -1
//         }
//     }, {
//         '$limit': 7
//     }
// ];
// const cursor = emp1.aggregate(agg);
// console.log(cursor);
// const result = cursor.toArray();

app.get("/", function (req, res) {
    res.send("<h1>home</h1>");
});
app.post("/", function (req, res) {
    console.log("Got in home post");
    console.log(res.body);
    res.send(payload)
})

app.get("/admin", function (req, res) {
    emp.find(function (err, result) {
        if (!err) {
            res.send({ result });
        }
        else {
            console.log(err);
        }
    })
});
app.delete("/admin/:id", function (req, res) {
    // console.log("Delete running");
    // console.log(req.params.id);
    const it = req.params.id;
    emp.deleteOne({ Email: it }).then(function () {
        console.log("Data deleted");
        res.send(req.params);
    }).catch(function (error) {
        console.log(error);
    });
})
app.post("/addemp", function (req, res) {
    const dt = req.body;
    if (req.body !== undefined) {
        var Emp = new emp(dt);
        Emp.save(function (err, result) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(result);
                res.send(dt);
            }
        });
    }
});

app.put("/admin", function (req, res) {
    console.log("IN put");
    emp.updateOne(
        { Mail: "kaify@gmail.com" },
        {
            $push: {
                Work: {
                    date: "2022-10-10",
                    Tasks:
                    {
                        Task_description: "Demo project",
                        Task_type: "Work",
                        Start_time: "11:30:00",
                        duration: 20
                    }
                }
            }

        },
        function (err, docs) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(docs);
            }
        }
    )
});
// {
//     $push: {
//         Work: {
//             $each: [
//                 {
//                     date: "2022-10-08",
//                     Tasks:

//                     {
//                         "Task_description": "New abraar project",
//                         "Task_type": "Work",
//                         "Start_time": "11:30:00",
//                         duration: 20
//                     }

//                 }
//             ],
//             $sort: { date: -1 }
//         },
//     },
// }


//         // $push: {
//         //     Work: {
//         //         $each: [
//         //             {
//         //                 date: "2022-10-08",
//         //                 Tasks:
//         //                 {
//         //                     "Task_description": "New abraar project",
//         //                     "Task_type": "Work",
//         //                     "Start_time": "11:30:00",
//         //                     duration: 20
//         //                 }

//         //             }
//         //         ],
//         //         $sort: { date: -1 }
//         //     },
//         // },
// );





//Starting Server
let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, function () {
    console.log("Server is started at port 3000");
})