

function ShowEmp() {
    return (
        <div>
            <div className="bg-white ml-3 mr-3 mt-4 box">
                <center><p className="heading">Add Employee</p></center>
                <form>
                    <div className="form-group floating">
                        <input type="text" name="name" className="form-control floating inp1" id="Input1" value="Parashuram" readOnly />
                        <label for="Input1">NAME</label>
                    </div>
                    <div className="form-group floating">
                        <input type="email" name="Mail" className="form-control floating inp1" id="Input2" value="parshu.yer@gmail.com" readOnly />
                        <label for="Input2">MAIL</label>
                    </div>
                    <div className="form-group floating">
                        <input type="tel" name="Contact" className="form-control floating inp1" id="Input3" value="987654328" readOnly />
                        <label for="Input3">CONTACT NO</label>
                    </div>
                    <div className="form-group floating">
                        <input type="text" name="Department" className="form-control floating inp1" value="parashuram"  id="Input4" readOnly />
                        <label for="Input4">PASSWORD</label>
                    </div>
                    <div className="form-group floating">
                        <input type="text" name="Password" className="form-control floating inp1" value="Software"  id="Input5" readOnly />
                        <label for="Input5">DEPARTMENT</label>
                    </div>
                    <div className="form-group floating">
                        <input type="date" name="JoiningDate" className="form-control floating inp1" id="Input36"   value="2014-02-09" readOnly/>
                        <label for="Input6">JOINING DATE</label>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ShowEmp;