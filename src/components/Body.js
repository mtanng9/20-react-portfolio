import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

function Body({selectedTitle}) {

    switch(selectedTitle){
        case 'About Me':
            return  <AboutMe />
        case 'Portfolio':
            return <Portfolio />
        default:
            return <AboutMe />
    }
};

export default Body