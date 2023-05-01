import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";
import Resume from "./Resume";

function Body({selectedTitle}) {

    switch(selectedTitle){
        case 'About Me':
            return  <AboutMe />
        case 'Portfolio':
            return <Portfolio />
        case 'Contact Me':
            return <ContactMe />
        case 'Resume':
            return <Resume />
        default:
            return <AboutMe />
    }
};

export default Body