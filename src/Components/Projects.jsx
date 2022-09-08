import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <>
            <div id="projects">
                <h2>PROJECTS</h2>
                <section className="projects">
                    <a href="https://abhicoder9.github.io/Clock/">
                        <div className="project">
                            <h3 className='pr'>CLOCK</h3>
                        </div>
                    </a>
                    <a href="https://abhicoder9.github.io/StopWatch/">
                        <div className="project">
                            <h3 className='pr'>STOPWATCH</h3>
                        </div>
                    </a>
                </section>
            </div>
        </>
    )
}

export default Projects;