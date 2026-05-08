import type { Project } from "../types/project";

interface ProjectModalProps {
    isOpen: boolean;
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({ isOpen, project, onClose }: ProjectModalProps) {
    return (
        <div className={`project-modal ${isOpen ? 'is-open' : ''}`} id="project-modal" aria-hidden={!isOpen}>
            <div className="project-modal__backdrop" onClick={onClose}></div>
            <div className="project-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
                <button 
                    type="button" 
                    className="project-modal__close" 
                    aria-label="닫기"
                    onClick={onClose}
                >
                    ×
                </button>
                <p className="project-modal__label">PROJECT DETAIL</p>
                
                {project && (
                    <>
                        <h3 className="project-modal__title" id="project-modal-title">{project.title}</h3>
                        <p className="project-modal__summary">{project.description}</p>
                        <ul className="project-modal__details">
                            {project.details && project.details.length > 0 ? (
                                project.details.map((detail: string, idx: number) => (
                                    <li key={idx}>{detail}</li>
                                ))
                            ) : (
                                <li>상세 내용 준비 중</li>
                            )}
                        </ul>
                        <div className="project-modal__stack">
                            {project.techStack && project.techStack.map((tech: string, idx: number) => (
                                <span key={idx} className="tag">{tech}</span>
                            ))}
                        </div>
                        {project.link && (
                            <a 
                                className="project-modal__link" 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                프로젝트 자세히보기
                            </a>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}
