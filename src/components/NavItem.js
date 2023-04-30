function NavItem( {name, selected = false} ) {

    if (selected) {
        return <p className="nav-link active" aria-current="page" id="selected-title">{name}</p>
    } else {
        return <p className="nav-link active" aria-current="page">{name}</p>
    }
};

export default NavItem;