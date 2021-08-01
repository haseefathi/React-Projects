import React from 'react'
import projects from './projectList'

const Projects = () => {
    return (
        <div className = 'projectList'>
            {
                projects.map((project) => {
                    return <Project project = {project} key = {project.id}/>
                })
            }
        </div>
    )
}

const Project = ({project}) => {
    const {image, url, name} = project;
    return (
        <section className = 'project fade-in'>
            <a href= {url} >
                <img src= {image}alt={name} />
                <h4 className = 'projectName'>{name}</h4>
            </a>
            
        </section>
    );

}

export default Projects
