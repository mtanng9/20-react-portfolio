import Project from "./Project";

function Portfolio() {

    return (
        <div id="portfolio-container">
            <h2>Portfolio</h2>
            <Project
                projectName="mvc-tech-blog"
                image="https://user-images.githubusercontent.com/118089627/235112068-7e8a95d9-f936-4061-b937-cd303a37687b.png"
                deployLink="https://mvc-tech-blog.herokuapp.com/"
                repoLink="https://github.com/mtanng9/14-mvc-tech-blog"
            />
        </div>
    );
};

export default Portfolio;