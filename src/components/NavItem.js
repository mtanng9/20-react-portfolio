function NavItem( {name, selected = false, setSelectedTitle} ) {

    if (selected) {
        return <p className="nav-link active" aria-current="page" id="selected-title" onClick={() => setSelectedTitle(name)}>{name}</p>
    } else {
        return <p className="nav-link active" aria-current="page" onClick={() => setSelectedTitle(name)}>{name}</p>
    }
};

export default NavItem;