import NavItem
 from "./NavItem";
function Header({selectedTitle = "About Me"}) {
    const setHighlighted = (e) => {

        console.log('clicked a thing');
        let old = document.getElementById("selected-title");
        old.removeAttribute("id");

        e.target.setAttribute("id", "selected-title");
        console.log(e.target);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">My My Tang</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavItem
                                name="About Me"
                                selected={selectedTitle === "About Me"}
                            />
                        </li>
                        <li className="nav-item">
                            <NavItem
                                name="Portfolio"
                            />
                        </li>
                        <li className="nav-item">
                            <NavItem
                                name="Contact Me"
                            />
                        </li>
                        <li className="nav-item">
                            <NavItem
                                name="Resume"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;