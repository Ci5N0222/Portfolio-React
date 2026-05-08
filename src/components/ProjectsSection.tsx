import { useEffect, useState } from "react"
import { apiCall } from "../services/api"
import ProjectModal from "./ProjectModal"
import type { Project } from "../types/project"

export default function ProjectsSection() {
    const [ projects, setProjects ] = useState<Project[]>([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState<string | null>(null);
    const [ activeNav, setActiveNav ] = useState("works");
    const [ selectedProject, setSelectedProject ] = useState<any>(null);
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    useEffect(() => {
        apiCall<Project[]>(
            '/data/projects.json',
            (data) => setProjects(data),
            () => setError('프로젝트 데이터를 불러오지 못했습니다.'),
            () => setLoading(false)
        );
    }, []);

    const openProjectModal = (project: any) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.classList.add('modal-open');
    };

    const closeProjectModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        document.body.classList.remove('modal-open');
    };

    const filteredProjects = projects.filter(p => p.nav === activeNav);

    return (
        <>
            <div className="container">
                <section id="projects">
                    <h2 className="section-title">Projects</h2>
                    <div className="project-nav">
                        <div 
                            id="works-btn" 
                            className={activeNav === "works" ? "active" : ""}
                            onClick={() => setActiveNav("works")}
                        >
                            Works
                        </div>
                        <div 
                            id="education-btn" 
                            className={activeNav === "education" ? "active" : ""}
                            onClick={() => setActiveNav("education")}
                        >
                            Education
                        </div>
                        <div 
                            id="study-btn" 
                            className={activeNav === "study" ? "active" : ""}
                            onClick={() => setActiveNav("study")}
                        >
                            Study
                        </div>
                    </div>
                    
                    { loading && <p>Loading...</p> }
                    { error && <p>{ error }</p> }
                    
                    {!loading && !error && (
                        <div className="project-grid">
                            {filteredProjects.map((project: any) => (
                                <div 
                                    key={project.id}
                                    className="project-card"
                                    data-nav={project.nav}
                                    data-idx={project.idx}
                                    onClick={() => openProjectModal(project)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            openProjectModal(project);
                                        }
                                    }}
                                >
                                    <div className="project-info">
                                        <h3>[{project.company}] {project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className="project-tags">
                                            {project.techStack.map((tech: string, idx: number) => (
                                                <span key={idx} className="tag">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>

            <ProjectModal 
                isOpen={isModalOpen} 
                project={selectedProject} 
                onClose={closeProjectModal}
            />
        </>
    );
}