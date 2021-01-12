//done

let TextInput = () => {
    return(
    <div>
    <input type="text" style={{color:"red"}} placeholder="Text" />
    </div>
    )
}

let YesNoRadio = () => {
    return(
    <div>
        <input type= "radio" value="Yes"/> Yes
        <input type= "radio" value="No"/> No
    </div>
    )
}

let SubmitButton = () => {
    return(
    <div>
    <button type="submit">Submit</button>
    </div>
    )
}

let Form = () => {
    return(
    <div>
    <form>
        <TextInput />
        <YesNoRadio />
        <SubmitButton />
    </form>
    </div>
    )
}


ReactDOM.render(<Form />, document.getElementById('root'))