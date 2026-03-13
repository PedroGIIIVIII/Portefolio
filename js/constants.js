export const BASE_PATH = window.location.pathname.includes('/pages/') ? '../' : './'; //Verifies if script is being called from inside the pages directory
export const BASE_PATH_CSS = BASE_PATH + 'css/'
export const BASE_PATH_JS = BASE_PATH + 'js/'
export const BASE_PATH_COMPONENTS = BASE_PATH + 'components/';

export const LANGUAGES_FORMATTING = 
{   
    PORTUGUESE: 'pt', 
    ENGLISH: 'en', 
    JAPANESE: 'jp', 
    SPANISH: 'es'
};

export const PROJECTS = 
[
    {
        id: 'huddle',
        title: 'Huddle',
        genre: 'Third Person Arcade Horror',
        status: 'completed',
        roles: ['3D Artist', '3D Environment Artist'],
        year: '2025',
        description: 'A thrilling third-person arcade horror experience where teamwork is key.',
        fulldescription: 'Huddle is a third-person horror game focused on avoiding a murderer seal that plans on eating you alive. My Roles were as 3D Artist and Environment Artist, with that, i was responsible for crafting the visual identity of the game world from character models to the environments.',
        technologies: ['Unity', 'Blender', 'FMOD'],
        teamsize: '5 people',
        images: ['../assets/placeholder_banner.png'],
        vids: ['../assets/vids/Trailer_Huddle1.mp4'],
        links: { github: 'https://github.com/PedroGIIIVIII/Huddle'}
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
        images: ['../assets/placeholder_banner.png'],
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
        images: ['../assets/placeholder_banner.png'],
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
        images: ['../assets/placeholder_banner.png'],
        links: { github: '#',}
    }
];

export const MODELS = 
[
    {
        id: 'seal_huddle',
        name: 'Seal Model',
        description: 'Stylized low-poly model of a seal for the videogame Huddle.',
        software: ['Blender'],
        polygoncount: '1,482 quads',
        enginereadiness: 'Unreal Engine',
        modellingstyle: 'Retopology from Sculpted Figure',
        img_assets: ['../assets/model_img/seal/seal_material.jpg', '../assets/model_img/seal/seal_material_2.jpg', '../assets/model_img/seal/seal_material_3.jpg'],
    },
    {
        id: 'penguin',
        name: 'Penguin Model',
        description: 'Stylized Low-Poly Model of the main protagonist for the videogame Huddle.',
        software: ['Blender'],
        polygoncount: '1,054 quads',
        enginereadiness: 'Unreal Engine',
        modellingstyle: 'Retopology from Sculpted Figure',
        img_assets: ['../assets/placeholder_banner.png', '../assets/placeholder_banner.png', '../assets/placeholder_banner.png'],
    },
    {
        id: 'queen',
        name: 'Penguin Queen Model',
        description: 'Stylized Low-Poly Model of a character for the videogame Huddle.',
        software: ['Blender'],
        polygoncount: '1,622 quads',
        enginereadiness: 'Unreal Engine',
        modellingstyle: 'Retopology from Sculpted Figure',
        img_assets: ['../assets/model_img/queen/queen_material.jpg', '../assets/model_img/queen/queen_material_2.jpg', '../assets/model_img/queen/queen_material_3.jpg'],
    },
        {
        id: 'sword',
        name: 'Sword Model',
        description: 'A custom sword made for animation purposes in SourceFilmmaker.',
        software: ['Blender'],
        polygoncount: '0 quads',
        enginereadiness: 'Source Engine',
        modellingstyle: 'Primitive form Modelling',
        img_assets: ['../assets/placeholder_banner.png', '../assets/placeholder_banner.png', '../assets/placeholder_banner.png'],
    },
    {
        id: 'spacecraft',
        name: 'Spacecraft Model',
        description: 'Exercise to transformed an item used in everyday life into something else.',
        software: ['Blender', 'Substance Painter'],
        polygoncount: '116,064 quads',
        enginereadiness: 'None',
        modellingstyle: 'Primitive Form Modelling',
        img_assets: ['../assets/model_img/spaceship/high_poly_material_ship.jpg', '../assets/model_img/spaceship/high_poly_material_ship_2.jpg', '../assets/model_img/spaceship/high_poly_material_ship_3.jpg'],
    },
    {
        id: 'envassets',
        name: 'Environment Pack',
        description: 'Group of assets used to create the environments in Huddle',
        software: ['Blender', 'Photoshop'],
        polygoncount: '0 quads',
        enginereadiness: 'Unreal Engine',
        modellingstyle: 'Primitive Form Modelling',
        img_assets: ['../assets/placeholder_banner.png', '../assets/placeholder_banner.png', '../assets/placeholder_banner.png'],
    }
] 