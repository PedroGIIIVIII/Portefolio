import { GetTranslationFromKey } from './language_system.js';
import { PROJECTS } from './constants.js';
import { MODELS} from './constants.js';

export const AcademicStrings = { logs: [], i: 0 };

export function InitAcademicPath() {
    const container = document.querySelector('.aboutme_content');
    const logs = GetTranslationFromKey("academic_path_logs");

    AcademicStrings.logs = logs;
    AcademicStrings.i = 0;

    container.innerHTML = `
        <h1 data-translations="on">Academic Path</h1>
        <div class="timeline_container">
            <div class="timeline">
            <div class = "log_text"> 2019-2023 | Soares dos Reis Art School</div>
            <div class = "log_text"> 2023-2026 | Lusofona University | Porto Center</div>
            </div>
        </div>
    `;
}


export function InitSkills() {
    const container = document.querySelector('.aboutme_content');
    container.innerHTML = 
    `
    <h1 data-translations="on">Skills</h1>
    <div class="skill_category">
            <h2>Programming Related</h2>

        <div class="skill">
            <div class="skill_header">
                <div class="skill_left">
                    <div class="skill_meter">
                        <span class="dot active"></span>
                        <span class="dot active"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>

                    <div class="skill_title">
                        <img class="skill_icon" src="../assets/cpp_icon.png">
                        <span class="skill_name">C++</span>
                    </div>
                    <p class="skill_desc">
                    |   Basic Memory Managnment, Unreal Engine´s C++, Macros, Basic Gameplay Systems, Polymorphism
                    </p>
                </div>
                <span class="skill_level can_do">Can Do</span>
            </div>
        </div>
        <div class="skill">
            <div class="skill_header">
                <div class="skill_left">
                    <div class="skill_meter">
                        <span class="dot active"></span>
                        <span class="dot active"></span>
                        <span class="dot active"></span>
                        <span class="dot"></span>
                    </div>

                    <div class="skill_title">
                        <img class="skill_icon" src="../assets/csharp_icon.png">
                        <span class="skill_name">C#</span>
                    </div>
                    <p class="skill_desc">
                    |   Core Gameplay Systems, Primitive AI Behavior, State Machines, Basic Shading, Basic Scripting Tools,
                    </p>
                </div>
                <span class="skill_level comfortable">Comfortable</span>
                </div>
        </div>
        <div class="skill">
            <div class="skill_header">
                <div class="skill_left">
                    <div class="skill_meter">
                        <span class="dot active"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>

                    <div class="skill_title">
                        <img class="skill_icon" src="../assets/c_icon.png">
                        <span class="skill_name">C</span>
                    </div>
                    <p class="skill_desc">
                    |   Basic Programs, Memory Managnment, Procedural Logic
                    </p>
                </div>
                <span class="skill_level experimental">experimental</span>
                </div>
        </div>
        <div class="skill">
            <div class="skill_header">
                <div class="skill_left">
                    <div class="skill_meter">
                        <span class="dot active"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>

                    <div class="skill_title">
                        <img class="skill_icon" src="../assets/java_icon.png">
                        <span class="skill_name">Java</span>
                    </div>
                    <p class="skill_desc">
                    |   OOP, Basic Programs, Polymorphism
                    </p>
                </div>
                <span class="skill_level experimental">experimental</span>
                </div>
        </div>
        <div class="skill">
            <div class="skill_header">
                <div class="skill_left">
                    <div class="skill_meter">
                        <span class="dot active"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>

                    <div class="skill_title">
                        <img class="skill_icon" src="../assets/python_icon.png">
                        <span class="skill_name">Python</span>
                    </div>
                    <p class="skill_desc">
                    |   Scripting
                    </p>
                </div>
                <span class="skill_level experimental">experimental</span>
                </div>
        </div>
    </div>
    <div class="skill_category">
            <h2>3D Related</h2>
        <div class="skill">
            <div class="skill_header">
                <div class="skill_left">
                    <div class="skill_meter">
                        <span class="dot active"></span>
                        <span class="dot active"></span>
                        <span class="dot active"></span>
                        <span class="dot"></span>
                    </div>

                    <div class="skill_title">
                        <img class="skill_icon" src="../assets/blender_icon.png">
                        <span class="skill_name">Blender</span>
                    </div>
                    <p class="skill_desc">
                    |   Character Creation, Environment Asset Creation, Rigging, Texturing, Material Creation, UV Unwrapping
                    </p>
                </div>
                <span class="skill_level comfortable">Comfortable</span>
                </div>
        </div>

        <div class="skill">
            <div class="skill_header">
                <div class="skill_left">
                    <div class="skill_meter">
                        <span class="dot active"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>

                    <div class="skill_title">
                        <img class="skill_icon" src="../assets/3ds_icon.png">
                        <span class="skill_name">3DS Max</span>
                    </div>
                    <p class="skill_desc">
                    |   Basic 3D Modelling
                    </p>
                </div>
                <span class="skill_level experimental">Experimental</span>
                </div>
        </div>

        <div class="skill">
            <div class="skill_header">
                <div class="skill_left">
                    <div class="skill_meter">
                        <span class="dot active"></span>
                        <span class="dot active"></span>
                        <span class="dot active"></span>
                        <span class="dot active"></span>
                    </div>

                    <div class="skill_title">
                        <img class="skill_icon" src="../assets/sfm_icon.png">
                        <span class="skill_name">Source Filmmaker</span>
                    </div>
                    <p class="skill_desc">
                    |   Motion Based Animation, Graph Based Animation, Modelling Decompression, Model Optimization for the Source Engine
                    </p>
                </div>
                <span class="skill_level capable">Capable</span>
                </div>
        </div>
        <div class="skill">
            <div class="skill_header">
                <div class="skill_left">
                    <div class="skill_meter">
                        <span class="dot active"></span>
                        <span class="dot active"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>

                    <div class="skill_title">
                        <img class="skill_icon" src="../assets/substancepainter_icon.png">
                        <span class="skill_name">Substance Painter</span>
                    </div>
                    <p class="skill_desc">
                    |   Material Creation, Mapping
                    </p>
                </div>
                <span class="skill_level can_do">Can Do</span>
                </div>
        </div>
    </div>
    `;
}

export function InitProjects() {
    const container = document.querySelector('.aboutme_content');
    container.innerHTML = 
    `
        <h1 data-translations="projects">Projects</h1>
        <div class="projects_container" id="projects_list"></div>
        <div id="project_modal" class="project_modal"></div>
    `;

    const projectslist = document.getElementById('projects_list');
    
        PROJECTS.forEach(projects=> {
        const statuslabel = projects.status.charAt(0).toUpperCase() + projects.status.slice(1);
        const card = document.createElement('div');
        card.className = 'game_card';
        card.innerHTML = `
            <div class="status ${projects.status}"><span>${statuslabel}</span></div>
            <img src="${projects.images[0]}" class="game_image" alt="${projects.title}">
            <div class="game_info">
                <h2 class="game_title">${projects.title}</h2>
                <p class="game_genre">${projects.genre}</p>
                <p class="game_role">My Roles: ${projects.roles.join(', ')}</p>
            </div>
        `;
        
        card.addEventListener('click', () => ShowProjectDetail(projects));
        projectslist.appendChild(card);
    });
}

export function ShowProjectDetail(PROJECTS) { //Modular DIV for display of projects
    const modal = document.getElementById('project_modal');
    const roleslist = PROJECTS.roles.map(role => `<li>${role}</li>`);
    const techlist = PROJECTS.technologies.map(tech => `<span class="tech_badge">${tech}</span>`);
    
    modal.innerHTML = `
        <div class="modal_overlay"></div>
        <div class="modal_content">
            <button class="modal_close" aria-label="Close">×</button>
            
            <div class="modal_header">
                <div class="modal_status status ${PROJECTS.status}">
                    <span>${PROJECTS.status}</span>
                </div>
                <h1>${PROJECTS.title}</h1>
                <p class="modal_meta">${PROJECTS.year} , ${PROJECTS.teamsize}</p>
            </div>

            <div class="modal_body">
                <div class="modal_gallery">
                    <img src="${PROJECTS.images[0]}" alt="${PROJECTS.title}" class="modal_main_image">
                </div>

                <div class="modal_info">
                    <section class="info_section">
                        <h3>Overview</h3>
                        <p>${PROJECTS.fulldescription}</p>
                    </section>

                    <section class="info_section">
                        <h3>My Roles</h3>
                        <ul class="roles_list">
                            ${roleslist}
                        </ul>
                    </section>

                    <section class="info_section">
                        <h3>Technologies</h3>
                        <div class="tech_container">
                            ${techlist}
                        </div>
                    </section>

                    <section class="info_section">
                        <h3>Links</h3>
                        <div class="project_links">
                            <a href="${PROJECTS.links.github}" class="link_button" target="_blank">GitHub</a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    
    const close = modal.querySelector('.modal_close');
    const overlay = modal.querySelector('.modal_overlay');
    
    close.addEventListener('click', CloseProjectDetail);
    overlay.addEventListener('click', CloseProjectDetail);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') CloseProjectDetail();
    });
}

export function ShowModelDetail(MODELS) { //Modular DIV for display of models
    const modal = document.getElementsByClassName('models_modal');

    MODELS.forEach(models => {
        
    })


    modal.innerHTML = `
        <div class="modal_overlay"></div>
        <div class="models_modal_content">
            <button class="modal_close" aria-label="Close">×</button>
            <h2>${MODELS.name}</h2>
        </div>
    `;
    modal.classList.add('active');
}

export function CloseProjectDetail() {
    const modal = document.getElementById('project_modal');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.innerHTML = '';
    }, 300);
}

export function InitGoals() {
    const container = document.querySelector('.aboutme_content');
    container.innerHTML = 
    `
        <h1 data-translations="goals">${GetTranslationFromKey('goals')}</h1>
        <div>
            <h2>Something is being worked on...</h2>
        </div>
    `;
}
