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
            <Project 
                projectName="marketing-agency-webpage"
                image="https://github.com/mtanng9/01-marketing-agency-webpage/raw/main/README-Screenshot.png?raw=true"
                deployLink="https://mtanng9.github.io/01-marketing-agency-webpage/"
                repoLink="https://github.com/mtanng9/01-marketing-agency-webpage"
            />
            <Project 
                projectName="work-day-scheduler"
                image="https://github.com/mtanng9/05-work-day-scheduler/blob/main/screen-shot.png?raw=true"
                deployLink="https://mtanng9.github.io/05-work-day-scheduler/"
                repoLink="https://github.com/mtanng9/05-work-day-scheduler"
            />
            <Project 
                projectName="weather-dashboard"
                image="https://github.com/mtanng9/06-weather-dashboard/blob/main/README-Screenshot.png?raw=true"
                deployLink="https://mtanng9.github.io/06-weather-dashboard/"
                repoLink="https://github.com/mtanng9/06-weather-dashboard"
            />
            <Project 
                projectName="javascript-password-generator"
                image="https://github.com/mtanng9/03-javascript-password-generator/raw/main/Password-Generator-Screenshot.png"
                deployLink="https://mtanng9.github.io/03-javascript-password-generator/"
                repoLink="https://github.com/mtanng9/03-javascript-password-generator"
            />
            <Project 
                projectName="Code-Quiz"
                image="https://github.com/mtanng9/04-Code-Quiz/blob/main/sceen-shot.png?raw=true"
                deployLink="https://mtanng9.github.io/04-Code-Quiz/"
                repoLink="https://github.com/mtanng9/04-Code-Quiz"
            />
            <Project
                projectName="Music-Match"
                image="https://github.com/mtanng9/20-react-portfolio/assets/118089627/c48edc77-7ddc-4c97-97d3-0c1077c0bf7a"
                deployLink="https://enigmatic-woodland-26963.herokuapp.com"
                repoLink="hhttps://github.com/rapperthedabber/Musician-Match"
            />
        </div>
    );
};

export default Portfolio;
