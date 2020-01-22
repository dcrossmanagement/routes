import React from "react"
import projects from '../data/projects.json';
import Project from "./Project"

const Projects = props => {
    return(
        <div id="projects">
            <div>Projects</div>
            {
                projects.allProjects.map((project) => {
                    return(
                        <Project title={project.title} imgName={project.imgName} description={project.description}/>
                    )
                })
            }
        </div>
    )
}

export default Projects