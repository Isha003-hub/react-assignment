import { useState, useEffect } from "react";
import './Experience.css';

const API = import.meta.env.VITE_API_BASE;

export default function Experience() {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        const getExperience = async () => {
            const response = await fetch(`https://localhost:5173/experiences/api/list`);
                const data = await response.json();
                setExperience(data);
            
        };
        getExperience();
    }, []);
    

    return (
        <section id="e_content" className="e_section">
            <h2>Experience</h2>
            <div className="e_container">
                {experience.map((item, index) => (
                    <div key={index} className="e_card">
                    <h3>{item.title}</h3>
                    
                    <div className="experiences">
                        <span className="company">{item.company}</span>
     
                        <span className="location">{item.location}</span>
        
                        <span className="duration">{item.startYear} - {item.endYear}</span>
                    </div>

                    <p className="description">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}