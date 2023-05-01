import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import ContactMe from "./ContactMe";

function Body({selectedTitle}) {

    switch(selectedTitle){
        case 'About Me':
            return  <AboutMe />
        case 'Portfolio':
            return <Portfolio />
        case 'Contact Me':
            return <ContactMe />
        default:
            return <AboutMe />
    }
};

export default Body