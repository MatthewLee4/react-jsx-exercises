//done

let Header = () => {
    return (
    <header>
        <h1>Header</h1>
    </header>
    )
}
let Article = () => {
    return (
    <div>
        <h4>Words</h4>
    </div>
    )
}
let Footer = () => {
    return (
    <footer>
        <h3>Footer</h3>
    </footer>
    )
}

let Blog = () => {
    return (
    <div>
        <Header></Header>
        <Article></Article>
        <Footer></Footer>
    </div>
        )
}


ReactDOM.render(<Blog />, document.getElementById('root'))