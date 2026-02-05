import { GetTranslationFromKey } from './language_system.js';

export const AcademicStrings = { logs: [], i: 0 };

const projects = [
    {
        id: 'huddle',
        title: 'Huddle',
        genre: 'Third Person Arcade Horror',
        status: 'completed',
        roles: ['3D Artist', '3D Environment Artist'],
        year: '2025',
        description: 'A thrilling third-person arcade horror experience where teamwork is key.',
        fulldescription: 'Huddle is a third-person horror game focused on avoiding a murderer seal that plans on eating you alive. My Roles were as 3D Artist and Environment Artist, with that, i was responsible for crafting the visual identity of the game world from character models to the environments.',
        technologies: ['Unity', 'Blender', 'Fmod'],
        teamsize: '6 people',
        images: ['../assets/placeholder_banner.png', '../assets/placeholder_banner.png'],
        links: { github: '#', }
    },
    {
        id: 'geozoo',
        title: 'GeoZoo',
        genre: 'Edutainment Game',
        status: 'in development',
        roles: ['2D Animator'],
        year: '2024-Present',
        description: 'An educational game about learning animals.',
        fulldescription: 'GeoZoo is an edutainment project designed to make learning animals and its associated environments engaging and fun. I performed the role of 2D Animator which involves creating smooth, captivating animations for the animals.',
        technologies: ['Unity', 'Photoshop', 'Adobe After Effects', 'Adobe Illustrator'],
        teamsize: '5 people',
        images: ['../assets/placeholder_banner.png', '../assets/placeholder_banner.png'],
        links: { github: '#',}
    },
    {
        id: 'blue-glow',
        title: 'Project Blue Glow',
        genre: 'First Person Thriller Shooter',
        status: 'halted',
        roles: ['Sole Developer'],
        year: '2025-Present',
        description: 'A solo project exploring first-person shooter mechanics with thriller elements.',
        fulldescription: 'Project Blue Glow is a solo development effort where I handle all aspects of the development of the game while making a FPS combined with psychological thriller elements with it being currently halted to focus on other projects.',
        technologies: ['Unity', 'C#'],
        teamsize: '1 (Solo)',
        images: ['../assets/placeholder_banner.png', '../assets/placeholder_banner.png'],
        links: { github: '#',}
    },
    {
        id: 'frutiger-wiki',
        title: 'FrutigerSpace Wiki',
        genre: 'Custom Wiki Platform',
        status: 'canceled',
        roles: ['Designer', 'Web Developer'],
        year: '2023',
        description: 'A specialized wiki platform for a video game community.',
        fulldescription: 'FrutigerSpace Wiki was a web-based project aimed at creating a comprehensive wiki for a gaming community as part of the community of the game FrutigerSpace. Unfortunaly, the project was canceled to pursue other opportunities but served as valuable experience in web development and the architecture.',
        technologies: ['HTML', 'PHP', 'CSS'],
        teamsize: '2 people',
        images: ['../assets/placeholder_banner.png', '../assets/placeholder_banner.png'],
        links: { github: '#',}
    }
];

export function InitAcademicPath() {
    const container = document.querySelector('.aboutme_content');
    const logs = GetTranslationFromKey("academic_path_logs");

    AcademicStrings.logs = logs;
    AcademicStrings.i = 0;

    container.innerHTML = `
        <h1 data-translations="academic_path">${GetTranslationFromKey("academic_path")}</h1>
        <div class="timeline_container">
            <div class="timeline" id="output"></div>
        </div>
    `;

    const content = document.getElementById('output')
    logs.forEach((log, i) => {
        const each = document.createElement('div');
        each.classList.add('timeline_enter');

        const logcontainer = document.createElement('div');
        logcontainer.classList.add('log_text');
        logcontainer.classList.add('typestyle');
        each.innerHTML = `<div class="dot"></div>`;
        each.appendChild(logcontainer);

        content.appendChild(each);

        setTimeout(() => {each.classList.add('visible'); typeindividualstrings(logcontainer, log);}, i * 800);
    });

}

function typeindividualstrings(element, text, speed = 50) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) { element.textContent += text.charAt(i); i++; } else { clearInterval(interval); } 
    }, speed);  /* Get every char of a element and displays it one by one */
}

export function InitSkills() {
    const container = document.querySelector('.aboutme_content');
    container.innerHTML = `
        <h1 data-translations="skills">${GetTranslationFromKey('skills')}</h1>
    <div>
        <div class="skill_container">
            <div class="skill_category">
            <h2>Programming Related</h2>
            <ul>
                <li> C# / C / C-Style C++ / Java</li>
                <li>Unity, Unreal, Godot Engine</li>
            </ul>
            </div>
            <div class="skill_category">
                    <h2>Art Related</h2>
                <ul>
                    <li>3D Artist</li>
                    <li>Blender, 3ds Max</li>
                </ul>
            </div>
            <div class="skill_category">
                    <h2>Design Related</h2>
                <ul>
                    <li>#</li>
                    <li>#</li>
                </ul>
            </div>
        </div>
    </div>
    `;
}

export function InitProjects() {
    const container = document.querySelector('.aboutme_content');
    container.innerHTML = 
    `
        <h1 data-translations="projects">${GetTranslationFromKey('projects')}</h1>
        <div class="projects_container" id="projects_list">
        </div>
        <div id="project_modal" class="project_modal"></div>
    `;

    const projectslist = document.getElementById('projects_list');
    
        projects.forEach(project => {
        const statuslabel = project.status.charAt(0).toUpperCase() + project.status.slice(1);
        const card = document.createElement('div');
        card.className = 'game_card';
        card.innerHTML = `
            <div class="status ${project.status}"><span>${statuslabel}</span></div>
            <img src="${project.images[0]}" class="game_image" alt="${project.title}">
            <div class="game_info">
                <h2 class="game_title">${project.title}</h2>
                <p class="game_genre">${project.genre}</p>
                <p class="game_role">My Roles: ${project.roles.join(', ')}</p>
            </div>
        `;
        
        card.addEventListener('click', () => ShowProjectDetail(project));
        projectslist.appendChild(card);
    });
}

export function ShowProjectDetail(project) {
    const modal = document.getElementById('project_modal');
    const roleslist = project.roles.map(role => `<li>${role}</li>`).join('');
    const techlist = project.technologies.map(tech => `<span class="tech_badge">${tech}</span>`).join('');
    
    modal.innerHTML = `
        <div class="modal_overlay"></div>
        <div class="modal_content">
            <button class="modal_close" aria-label="Close">×</button>
            
            <div class="modal_header">
                <div class="modal_status status ${project.status}">
                    <span>${project.status.charAt(0).toUpperCase() + project.status.slice(1)}</span>
                </div>
                <h1>${project.title}</h1>
                <p class="modal_meta">${project.year} , ${project.teamsize}</p>
            </div>

            <div class="modal_body">
                <div class="modal_gallery">
                    <img src="${project.images[0]}" alt="${project.title}" class="modal_main_image">
                </div>

                <div class="modal_info">
                    <section class="info_section">
                        <h3>Overview</h3>
                        <p>${project.fulldescription}</p>
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
                            <a href="${project.links.github}" class="link_button" target="_blank">GitHub</a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    
    const closeBtn = modal.querySelector('.modal_close');
    const overlay = modal.querySelector('.modal_overlay');
    
    closeBtn.addEventListener('click', CloseProjectDetail);
    overlay.addEventListener('click', CloseProjectDetail);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') CloseProjectDetail();
    });
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

export function GenerateGenericModelInfoPanel() {
    const container = document.querySelector('.gallery_grid');
    if (!container) return;
    
    container.innerHTML = `
        <div>
            <img src="../assets/cute_cat.jpg" alt="Gallery Item">
        </div>
    `;
}