function Entry(props) {
    return (
        <div className="form-group floating">
            <input type={props.type} className="form-control floating inp1" id="Input1" value={props.value} required />
            <label for="Input1">{props.field}</label>
        </div>
    );
}

export default Entry;