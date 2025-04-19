import { useState, useEffect } from "react";
import './Project.css';

const API = import.meta.env.VITE_API_BASE;

export default function Project() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch(`https://localhost:5173/projects/api/list`);
            const data = await response.json();
            setProjects(data);
        };
        fetchProjects();
    }, []);

    return (
        <section id="projects">
            <h2 className="section-title">My Projects</h2>
            <div className="project-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-header">
                            <h3>{project.name}</h3>
                            <a href={project.URL} target="_blank" rel="noopener noreferrer" className="project-link">
                                GitHub ↗
                            </a>
                        </div>

                        <p className="project-summary">{project.summary}</p>

                        <div className="tech-stack">
                            {project.technology.split(',').map((tech, i) => (
                                <span key={i} className="tech-badge">{tech.trim()}</span>
                            ))}
                        </div>

                        <div className="project-footer">
                            <span className={`status ${project.status === 'Completed' ? 'done' : 'in-progress'}`}>
                                {project.status}
                            </span>
                            <span className="duration">{project.timespan}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
