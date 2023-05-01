function Project({projectName, image, deployLink, repoLink}) {

    return (
        <div className="project">
            <div className="project-container" id={projectName}>
                <img
                    className="project-img"
                    src={image}
                    alt={projectName} 
                />
                <div className="project-img-text">
                    <a href={deployLink} className="btn btn-just-icon btn-link btn-github"><i className="fa fa-code"></i></a>
                    <a href={repoLink} className="btn btn-just-icon btn-link btn-github"><i className="fa fa-github"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Project;