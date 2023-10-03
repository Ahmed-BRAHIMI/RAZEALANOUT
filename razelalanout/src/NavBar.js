function NavBar(props){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#">RAZE AL ANOUT: {props.title}</a>
        </div>
        </nav>

    )
}

export default NavBar;