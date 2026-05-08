export default function HeroSection() {
    return (
        <section id="home">
            <div className="container">
                <div className="terminal-shell">
                    <div className="terminal-topbar">
                        <div className="lights">
                            <span className="light l1"></span>
                            <span className="light l2"></span>
                            <span className="light l3"></span>
                        </div>
                        <span className="terminal-url">dev-portfolio://noh-sion/index</span>
                    </div>
                    <div className="hero-content">
                        <p className="command-line">$ initialize profile --mode production</p>
                        <p className="command-line">$ load career --from 2023 --to now</p>
                        <p className="command-line">$ show projects --featured all</p>
                        <h1>안녕하세요, 개발자 노시온입니다.</h1>
                        <p className="hero-subtitle">중복과 비효율을 지양하고, 재사용성과 유지보수의 편의성을 지향하는 개발자</p>
                        <span className="hero-tag">Full Stack Developer</span>
                    </div>
                </div>
            </div>
        </section>
    );
}