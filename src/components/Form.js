import React, {useState, useEffect} from "react"

function Form() {
    const [firstName, setFirstName] = useState("");
return(
    <form>
        <div>
            <label>First Name</label>
            <input type="text" onChange={(event) => setFirstName(event.target.value)} ></input>
        </div>
<button type="button" onClick={() => alert(firstName)}>Submit</button>

        <div>{firstName}</div>

    </form>
)

}

export default Form;