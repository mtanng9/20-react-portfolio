import AboutMe from "./AboutMe"

function Body({selectedTitle}) {
    if (selectedTitle === "About Me") {
        return <AboutMe />
    }
};

export default Body