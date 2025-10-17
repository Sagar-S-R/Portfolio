import React, { useState } from "react";
import "./Home.css";
import Header from "./Header";

function Home() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const projects = [
    {
      id: 1,
      title: "JurisFind",
      image: "/projects/jurisfind.jpg",
      shortDesc: "AI-Powered Legal Case Retrieval System with 50k+ PDFs",
      fullDesc: "JurisFind is an advanced AI-powered legal case retrieval system that processes and indexes over 50,000 legal documents. Built with RAG (Retrieval Augmented Generation) architecture, it enables lawyers and legal professionals to quickly find relevant case laws and precedents. The system uses FAISS for efficient vector similarity search and FastAPI for high-performance backend operations.",
      tags: ["FastAPI", "React", "FAISS", "RAG"],
      features: [
        "Semantic search across 50k+ legal documents",
        "RAG-based context-aware retrieval",
        "Advanced filtering and categorization",
        "Fast response times with FAISS indexing"
      ],
      links: [
        { type: "GitHub", url: "https://github.com/Sagar-S-R/JurisFind" }
      ]
    },
    {
      id: 2,
      title: "VocalCanvas",
      image: "/projects/vocalcanvas.jpg",
      shortDesc: "AI-Powered Voice & Art Exhibition Platform",
      fullDesc: "VocalCanvas is an innovative platform that combines voice technology with art curation. It allows artists to showcase their work with voice-guided tours and enables visitors to explore exhibitions through an interactive, AI-powered experience. Built with Flutter for cross-platform compatibility and integrated with Gemini API for intelligent voice interactions.",
      tags: ["Flutter", "Firebase", "Gemini API", "Vercel"],
      features: [
        "Voice-guided art exhibition tours",
        "AI-powered artwork descriptions",
        "Real-time Firebase synchronization",
        "Cross-platform mobile and web support"
      ],
      links: [
        { type: "Live", url: "https://vocal-canvas.vercel.app/" },
        { type: "GitHub", url: "https://github.com/Sagar-S-R/VocalCanvas" }
      ]
    },
    {
      id: 3,
      title: "Auris",
      image: "/projects/auris.jpg",
      shortDesc: "Location-Based Anonymous Whisper Sharing App",
      fullDesc: "Auris is a location-based social platform where users can share anonymous thoughts and messages tied to specific geographical locations. Using advanced geospatial indexing with MongoDB, users can discover whispers left by others in nearby areas, creating a unique digital layer over the physical world. Built with React Native for a seamless mobile experience.",
      tags: ["React Native", "Node.js", "MongoDB", "Geospatial"],
      features: [
        "Location-based anonymous messaging",
        "Geospatial search with MongoDB",
        "Real-time whisper discovery",
        "Privacy-focused architecture"
      ],
      links: [
        { type: "Live", url: "https://whisper-walls.vercel.app/" },
        { type: "GitHub", url: "https://github.com/Sagar-S-R/Whisper-Walls" },
        { type: "Download APK", url: "https://github.com/Sagar-S-R/Whisper-Walls/releases/download/v1.0.1/app-release.apk" }
      ]
    },
    {
      id: 4,
      title: "TheVoidTalks",
      image: "/projects/thevoidtalks.jpg",
      shortDesc: "Anonymous Message Sender Web App",
      fullDesc: "TheVoidTalks is a web application that enables anonymous communication through a simple and secure interface. Users can send and receive messages without revealing their identity, fostering honest and open conversations. Built with Next.js for optimal performance and SEO, using MongoDB for reliable message storage, and styled with ShadCN UI components for a modern, clean interface.",
      tags: ["Next.js", "MongoDB", "ShadCN", "Vercel"],
      features: [
        "Complete anonymity for users",
        "Secure message encryption",
        "Clean and intuitive UI with ShadCN",
        "Fast performance with Next.js"
      ],
      links: [
        { type: "GitHub", url: "https://github.com/Sagar-S-R/TheVoidTalks" }
      ]
    },
    {
      id: 5,
      title: "MediCircl",
      image: "/projects/medicircle.jpg",
      shortDesc: "Healthcare platform connecting patients with doctors through video calls",
      fullDesc: "MediCircl is a comprehensive telemedicine platform that bridges the gap between patients and healthcare providers. It features real-time video consultations using WebRTC technology, appointment scheduling, medical record management, and secure communication channels. The platform ensures HIPAA-compliant data handling and provides a seamless experience for both patients seeking care and doctors managing their practice.",
      tags: ["React", "Node.js", "MongoDB", "WebRTC", "Express"],
      features: [
        "Real-time video consultations with WebRTC",
        "Appointment scheduling and management",
        "Secure medical record storage",
        "Multi-user role management (patients, doctors, admins)"
      ],
      links: [
        { type: "GitHub", url: "https://github.com/Sagar-S-R/MediCircl" }
      ]
    }
  ];

  return (
    <div className="portfolio-container">
      <Header />
      <div className="decorative-background">
        <div className="dots-grid dots-grid-1" />
        <div className="dots-grid dots-grid-2" />
        <div className="border-box border-box-1" />
        <div className="border-box border-box-2" />
        <div className="border-box border-box-3" />
      </div>

      <section id="home" className="hero-section">
        <div className="content-wrapper">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                <span className="title-normal">Sagar, a </span>
                <span className="title-accent">Full Stack Developer </span>
                <span className="title-normal">and </span>
                <span className="title-accent">AI/ML Engineer</span>
              </h1>
              <p className="hero-description">
                Building intelligent systems with RAG, multimodal AI, and scalable full-stack solutions
              </p>
              <button className="btn-primary" onClick={() => window.location.href='#contacts'}>Contact me!!</button>
            </div>
            <div className="hero-image-wrapper">
              <img
                src="/profile-photo.jpg"
                alt="Sagar S R profile"
                className="hero-image"
              />
              <div className="dots-grid hero-dots" />
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">
                <span className="title-hash">#</span>
                <span className="title-text">experience</span>
              </h2>
              <div className="title-line" />
            </div>
          </div>

          <div className="experience-timeline">
            <div className="experience-card">
              <div className="experience-header">
                <img src="/samsung_research.jpg" alt="Samsung R&D" className="company-logo" />
                <div className="experience-title-group">
                  <h3 className="experience-role">Research Intern</h3>
                  <h4 className="experience-company">Samsung R&D Institute India – Bangalore</h4>
                  <p className="experience-date">May 2025 – Present</p>
                </div>
              </div>
              <ul className="experience-points">
                <li className="experience-point">
                  Developed multimodal retrieval system using RAG techniques with FAISS and CLIP embeddings for efficient image and video search
                </li>
                <li className="experience-point">
                  Enhanced datastore performance by implementing scalable retrieval pipelines tailored for NextGen AI applications
                </li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <img src="/rit_acm.jpg" alt="ACM RIT" className="company-logo" />
                <div className="experience-title-group">
                  <h3 className="experience-role">Technical Team Member</h3>
                  <h4 className="experience-company">ACM RIT – MS Ramaiah Institute of Technology</h4>
                  <p className="experience-date">Nov 2024 – Present</p>
                </div>
              </div>
              <ul className="experience-points">
                <li className="experience-point">
                  Organized and hosted a hackathon and CodeGolf event under ACM-RIT
                </li>
                <li className="experience-point">
                  Contributed as Technical Team member and developed the official ACM-RIT student chapter website
                </li>
              </ul>
            </div>
          </div>

          <div className="education-section">
            <h3 className="education-title">Education</h3>
            
            <div className="education-card">
              <div className="education-header">
                <div className="education-title-group">
                  <h4 className="education-degree">B.E - Computer Science and Engineering</h4>
                  <p className="education-institution">MS Ramaiah Institute of Technology</p>
                  <p className="education-date">Oct 2023 – Present</p>
                </div>
                <div className="education-gpa">
                  <span className="gpa-label">GPA</span>
                  <span className="gpa-value">9.58/10.0</span>
                </div>
              </div>
              <p className="education-location">Bangalore, India</p>
            </div>

            <div className="education-card">
              <div className="education-header">
                <div className="education-title-group">
                  <h4 className="education-degree">12th PCMB</h4>
                  <p className="education-institution">Sri Siddaganga Pre-Graduate Science College</p>
                  <p className="education-date">March 2023</p>
                </div>
                <div className="education-gpa">
                  <span className="gpa-label">Percentage</span>
                  <span className="gpa-value">97.1%</span>
                </div>
              </div>
              <p className="education-location">Davanagere, India</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">
                <span className="title-hash">#</span>
                <span className="title-text">projects</span>
              </h2>
              <div className="title-line" />
            </div>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="project-card"
                onClick={() => toggleProject(project.id)}
              >
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="project-image"
                />
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.shortDesc}</p>
                  <div className="project-buttons">
                    {project.links.map((link, index) => (
                      <a 
                        key={index}
                        className="btn-primary btn-small" 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {link.type} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {expandedProject && (
            <div className="project-modal-overlay" onClick={() => setExpandedProject(null)}>
              <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setExpandedProject(null)}>✕</button>
                {projects.find(p => p.id === expandedProject) && (
                  <>
                    <img
                      src={projects.find(p => p.id === expandedProject).image}
                      alt={projects.find(p => p.id === expandedProject).title}
                      className="modal-image"
                    />
                    <div className="modal-content">
                      <h2 className="modal-title">{projects.find(p => p.id === expandedProject).title}</h2>
                      
                      <div className="modal-tags">
                        {projects.find(p => p.id === expandedProject).tags.map((tag, index) => (
                          <span key={index} className="modal-tag">{tag}</span>
                        ))}
                      </div>

                      <p className="modal-description">{projects.find(p => p.id === expandedProject).fullDesc}</p>

                      <div className="modal-features">
                        <h3 className="modal-features-title">Key Features</h3>
                        <ul className="modal-features-list">
                          {projects.find(p => p.id === expandedProject).features.map((feature, index) => (
                            <li key={index} className="modal-feature-item">{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="modal-links">
                        {projects.find(p => p.id === expandedProject).links.map((link, index) => (
                          <a 
                            key={index}
                            className="modal-link-btn" 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            {link.type} ↗
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">
                <span className="title-hash">#</span>
                <span className="title-text">skills</span>
              </h2>
              <div className="title-line" />
            </div>
          </div>

          <div className="skills-grid">
            <div className="skills-decorative">
              <div className="dots-grid skills-dots-1" />
              <div className="dots-grid skills-dots-2" />
              <div className="border-box skills-box-1" />
              <div className="border-box skills-box-2" />
              <div className="logo-large">
                <div className="logo-large-part logo-large-left">
                  <div className="logo-large-square" style={{ left: "0px", top: "0px" }} />
                  <div className="logo-large-square" style={{ left: "28px", top: "57px" }} />
                  <div className="logo-large-square" style={{ left: "28px", top: "28px" }} />
                  <div className="logo-large-square" style={{ left: "28px", top: "0px" }} />
                  <div className="logo-large-square" style={{ left: "0px", top: "57px" }} />
                </div>
                <div className="logo-large-part logo-large-right">
                  <div className="logo-large-square" style={{ left: "28px", top: "0px" }} />
                  <div className="logo-large-square" style={{ left: "0px", top: "0px" }} />
                  <div className="logo-large-square" style={{ left: "0px", top: "28px" }} />
                  <div className="logo-large-square" style={{ left: "0px", top: "57px" }} />
                  <div className="logo-large-square" style={{ left: "28px", top: "57px" }} />
                </div>
              </div>
            </div>

            <div className="skills-blocks">
              <div className="skill-block">
                <div className="skill-header">Languages</div>
                <div className="skill-divider" />
                <ul className="skill-list">
                  <li className="skill-item">C++</li>
                  <li className="skill-item">JavaScript</li>
                  <li className="skill-item">Python</li>
                  <li className="skill-item">C</li>
                  <li className="skill-item">Java</li>
                  <li className="skill-item">TypeScript</li>
                </ul>
              </div>

              <div className="skill-block">
                <div className="skill-header">Databases</div>
                <div className="skill-divider" />
                <ul className="skill-list">
                  <li className="skill-item">MongoDB</li>
                  <li className="skill-item">Neo4j</li>
                  <li className="skill-item">SQL</li>
                  <li className="skill-item">FAISS</li>
                </ul>
              </div>

              <div className="skill-block">
                <div className="skill-header">AI/ML</div>
                <div className="skill-divider" />
                <ul className="skill-list">
                  <li className="skill-item">Machine Learning</li>
                  <li className="skill-item">Deep Learning</li>
                  <li className="skill-item">NLP</li>
                  <li className="skill-item">GenAI</li>
                  <li className="skill-item">RAG</li>
                  <li className="skill-item">Multimodal AI</li>
                </ul>
              </div>

              <div className="skill-block">
                <div className="skill-header">ML Tools</div>
                <div className="skill-divider" />
                <ul className="skill-list">
                  <li className="skill-item">LangChain</li>
                  <li className="skill-item">HuggingFace</li>
                  <li className="skill-item">PyTorch</li>
                  <li className="skill-item">TensorFlow</li>
                </ul>
              </div>

              <div className="skill-block">
                <div className="skill-header">Dev Tools & Cloud</div>
                <div className="skill-divider" />
                <ul className="skill-list">
                  <li className="skill-item">Git</li>
                  <li className="skill-item">Docker</li>
                  <li className="skill-item">VS Code</li>
                  <li className="skill-item">Postman</li>
                  <li className="skill-item">Azure</li>
                  <li className="skill-item">Google Cloud</li>
                  <li className="skill-item">Firebase</li>
                </ul>
              </div>

              <div className="skill-block">
                <div className="skill-header">Frameworks</div>
                <div className="skill-divider" />
                <ul className="skill-list">
                  <li className="skill-item">Next.js</li>
                  <li className="skill-item">React</li>
                  <li className="skill-item">Express.js</li>
                  <li className="skill-item">Flutter</li>
                  <li className="skill-item">React Native</li>
                </ul>
              </div>

              <div className="skill-block">
                <div className="skill-header">Technical Concepts</div>
                <div className="skill-divider" />
                <ul className="skill-list">
                  <li className="skill-item">Problem Solving</li>
                  <li className="skill-item">OOPs</li>
                  <li className="skill-item">Computer Networks</li>
                  <li className="skill-item">Operating Systems</li>
                  <li className="skill-item">System Design</li>
                  <li className="skill-item">Software Engineering</li>
                  <li className="skill-item">Database Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="achievements-section-wrapper">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">
                <span className="title-hash">#</span>
                <span className="title-text">achievements</span>
              </h2>
              <div className="title-line" />
            </div>
          </div>

          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-content">
                <h4 className="achievement-name">SIH Top 25</h4>
                <p className="achievement-desc">Smart India Hackathon 2025 - Top 25 from College</p>
              </div>
            </div>

            <div className="achievement-card">
              <div className="achievement-icon">🎓</div>
              <div className="achievement-content">
                <h4 className="achievement-name">CGPA - 9.58</h4>
                <p className="achievement-desc">B.E - Computer Science and Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-me" className="about-section">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">
                <span className="title-hash">#</span>
                <span className="title-text">about-me</span>
              </h2>
              <div className="title-line" />
            </div>
          </div>

          <div className="about-grid">
            <div className="about-content">
              <p className="about-text">
                Hello, I'm Sagar S R! I'm a Computer Science student at MS Ramaiah Institute of Technology with a 9.58 GPA. 
                Currently working as a Research Intern at Samsung R&D, I specialize in building intelligent systems using RAG 
                architecture, multimodal AI, and scalable full-stack solutions. I've developed AI-powered legal retrieval systems, 
                location-based apps, and voice-art platforms. Passionate about leveraging cutting-edge technologies like FAISS, 
                LangChain, and CLIP embeddings to solve real-world problems. When I'm not coding, I'm organizing hackathons 
                with ACM-RIT or exploring new ML frameworks.
              </p>
              <button className="btn-primary" onClick={() => window.location.href='https://www.linkedin.com/in/sagar-s-r'}>LinkedIn -&gt;</button>
            </div>
            <div className="about-image-wrapper">
              <img
                src="/about-photo.jpg"
                alt="About Sagar S R"
                className="about-image"
              />
              <div className="dots-grid about-dots-1" />
              <div className="dots-grid about-dots-2" />
              <div className="about-line" />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="contact-section">
        <div className="content-wrapper">
          <div className="section-header">
            <div className="section-title-wrapper">
              <h2 className="section-title">
                <span className="title-hash">#</span>
                <span className="title-text">contacts</span>
              </h2>
              <div className="title-line" />
            </div>
          </div>

          <div className="contact-grid">
            <p className="contact-description">
              I'm open to internship and full-time opportunities in Full Stack Development and AI/ML. 
              Feel free to reach out for collaborations, projects, or just a tech chat!
            </p>
            
            <div className="contact-container">
              <div className="contact-box social-links-box">
                <h3 className="contact-box-title">Social Links</h3>
                <div className="contact-links">
                  <a href="https://github.com/Sagar-S-R" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M15.5 6C9.69875 6 5 10.5882 5 16.2529C5 20.7899 8.00562 24.6219 12.1794 25.9804C12.7044 26.0701 12.9012 25.7625 12.9012 25.4934C12.9012 25.2499 12.8881 24.4425 12.8881 23.5838C10.25 24.058 9.5675 22.9558 9.3575 22.3791C9.23938 22.0843 8.7275 21.1743 8.28125 20.9308C7.91375 20.7386 7.38875 20.2644 8.26813 20.2516C9.095 20.2388 9.68563 20.9949 9.8825 21.3025C10.8275 22.8533 12.3369 22.4175 12.9406 22.1484C13.0325 21.4819 13.3081 21.0334 13.61 20.777C11.2737 20.5207 8.8325 19.6364 8.8325 15.7147C8.8325 14.5997 9.23938 13.6769 9.90875 12.9592C9.80375 12.7029 9.43625 11.6519 10.0138 10.2422C10.0138 10.2422 10.8931 9.97301 12.9012 11.2931C13.7413 11.0624 14.6338 10.947 15.5263 10.947C16.4188 10.947 17.3113 11.0624 18.1513 11.2931C20.1594 9.9602 21.0387 10.2422 21.0387 10.2422C21.6163 11.6519 21.2488 12.7029 21.1438 12.9592C21.8131 13.6769 22.22 14.5868 22.22 15.7147C22.22 19.6492 19.7656 20.5207 17.4294 20.777C17.81 21.0975 18.1381 21.7126 18.1381 22.6738C18.1381 24.0452 18.125 25.1474 18.125 25.4934C18.125 25.7625 18.3219 26.0829 18.8469 25.9804C20.9314 25.2935 22.7428 23.9854 24.026 22.2403C25.3092 20.4953 25.9996 18.4012 26 16.2529C26 10.5882 21.3013 6 15.5 6Z" fill="#ABB2BF"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/sagarsr/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M8.64 11.36H4V26h4.64V11.36zM6.32 9.6c1.48 0 2.68-1.2 2.68-2.68C9 5.44 7.8 4.24 6.32 4.24c-1.48 0-2.68 1.2-2.68 2.68C3.64 8.4 4.84 9.6 6.32 9.6zM27.36 26h.04V17.8c0-4.16-.9-7.36-5.76-7.36-2.34 0-3.92 1.28-4.56 2.5h-.06v-2.1h-4.64V26h4.64v-7.3c0-1.94.36-3.82 2.78-3.82 2.38 0 2.42 2.22 2.42 3.94V26h4.64z" fill="#ABB2BF"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://leetcode.com/u/SagarSR/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M21.469 23.907l-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485 0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.704 1.125 1.659 1.125 2.693 0 1.034-.438 1.989-1.125 2.693l-3.595 3.473zm-2.432-9.285l-5.76 5.844c-.235.235-.235.672 0 .907l5.776 5.812c.234.235.624.235.859 0l3.595-3.473c.234-.235.234-.672 0-.907l-3.611-3.473c-.234-.234-.624-.234-.859 0zm-8.192 9.285l-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485 0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.704 1.125 1.659 1.125 2.693 0 1.034-.438 1.989-1.125 2.693z" fill="#ABB2BF"/>
                    </svg>
                    <span>LeetCode</span>
                  </a>
                  <a href="mailto:sagarsr2006@gmail.com" className="contact-link">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M5.07187 9.20292C5.2168 8.57709 5.57307 8.01832 6.08232 7.6181C6.59158 7.21789 7.22365 6.99996 7.875 7H25.125C25.7764 6.99996 26.4084 7.21789 26.9177 7.6181C27.4269 8.01832 27.7832 8.57709 27.9281 9.20292L16.5 16.0865L5.07187 9.20292ZM5 10.8207V20.8847L13.3418 15.8442L5 10.8207ZM14.7189 16.6758L5.27456 22.3807C5.50791 22.8657 5.87619 23.2753 6.33656 23.5619C6.79693 23.8486 7.33044 24.0005 7.875 24H25.125C25.6695 24.0001 26.2028 23.8479 26.6629 23.561C27.123 23.274 27.491 22.8643 27.724 22.3793L18.2796 16.6744L16.5 17.7468L14.7189 16.6744V16.6758ZM19.6582 15.8457L28 20.8847V10.8207L19.6582 15.8442V15.8457Z" fill="#ABB2BF"/>
                    </svg>
                    <span>sagarsr2006@gmail.com</span>
                  </a>
                </div>
              </div>

              <div className="contact-box contact-form-box">
                <h3 className="contact-box-title">Reach Me Out</h3>
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Your name"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="your.email@example.com"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-divider" />
        <div className="content-wrapper">
          <div className="footer-content">
            <div className="footer-info">
              <div className="footer-brand">
                <div className="footer-logo">
                  <div className="logo-small-square" />
                  <div className="logo-small-square" />
                  <div className="logo-small-square" />
                  <div className="logo-small-square" />
                  <div className="logo-small-square" />
                </div>
                <span className="footer-name">Sagar S R</span>
                <span className="footer-email">sagarsr2006@gmail.com</span>
              </div>
              <p className="footer-tagline">Full Stack Developer and AI/ML Engineer</p>
            </div>
            <div className="footer-media">
              <h3 className="footer-media-title">Connect</h3>
              <div className="social-icons">
                <a href="https://github.com/Sagar-S-R" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M15.5 6C9.69875 6 5 10.5882 5 16.2529C5 20.7899 8.00562 24.6219 12.1794 25.9804C12.7044 26.0701 12.9012 25.7625 12.9012 25.4934C12.9012 25.2499 12.8881 24.4425 12.8881 23.5838C10.25 24.058 9.5675 22.9558 9.3575 22.3791C9.23938 22.0843 8.7275 21.1743 8.28125 20.9308C7.91375 20.7386 7.38875 20.2644 8.26813 20.2516C9.095 20.2388 9.68563 20.9949 9.8825 21.3025C10.8275 22.8533 12.3369 22.4175 12.9406 22.1484C13.0325 21.4819 13.3081 21.0334 13.61 20.777C11.2737 20.5207 8.8325 19.6364 8.8325 15.7147C8.8325 14.5997 9.23938 13.6769 9.90875 12.9592C9.80375 12.7029 9.43625 11.6519 10.0138 10.2422C10.0138 10.2422 10.8931 9.97301 12.9012 11.2931C13.7413 11.0624 14.6338 10.947 15.5263 10.947C16.4188 10.947 17.3113 11.0624 18.1513 11.2931C20.1594 9.9602 21.0387 10.2422 21.0387 10.2422C21.6163 11.6519 21.2488 12.7029 21.1438 12.9592C21.8131 13.6769 22.22 14.5868 22.22 15.7147C22.22 19.6492 19.7656 20.5207 17.4294 20.777C17.81 21.0975 18.1381 21.7126 18.1381 22.6738C18.1381 24.0452 18.125 25.1474 18.125 25.4934C18.125 25.7625 18.3219 26.0829 18.8469 25.9804C20.9314 25.2935 22.7428 23.9854 24.026 22.2403C25.3092 20.4953 25.9996 18.4012 26 16.2529C26 10.5882 21.3013 6 15.5 6Z" fill="#ABB2BF"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/sagarsr/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M8.64 11.36H4V26h4.64V11.36zM6.32 9.6c1.48 0 2.68-1.2 2.68-2.68C9 5.44 7.8 4.24 6.32 4.24c-1.48 0-2.68 1.2-2.68 2.68C3.64 8.4 4.84 9.6 6.32 9.6zM27.36 26h.04V17.8c0-4.16-.9-7.36-5.76-7.36-2.34 0-3.92 1.28-4.56 2.5h-.06v-2.1h-4.64V26h4.64v-7.3c0-1.94.36-3.82 2.78-3.82 2.38 0 2.42 2.22 2.42 3.94V26h4.64z" fill="#ABB2BF"/>
                  </svg>
                </a>
                <a href="https://leetcode.com/u/SagarSR/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LeetCode">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M21.469 23.907l-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485 0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.704 1.125 1.659 1.125 2.693 0 1.034-.438 1.989-1.125 2.693l-3.595 3.473zm-2.432-9.285l-5.76 5.844c-.235.235-.235.672 0 .907l5.776 5.812c.234.235.624.235.859 0l3.595-3.473c.234-.235.234-.672 0-.907l-3.611-3.473c-.234-.234-.624-.234-.859 0zm-8.192 9.285l-3.595 3.473c-.624.625-1.484.885-2.432.885s-1.807-.26-2.432-.885l-5.776-5.812c-.62-.625-.937-1.537-.937-2.485 0-.952.317-1.812.937-2.432l5.76-5.844c.62-.619 1.5-.859 2.448-.859s1.808.26 2.432.885l3.595 3.473c.687.704 1.125 1.659 1.125 2.693 0 1.034-.438 1.989-1.125 2.693z" fill="#ABB2BF"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="footer-copyright">© Copyright 2025. Made by Sagar S R</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
