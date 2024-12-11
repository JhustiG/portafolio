import { BellPlus, BookText, GraduationCap, Brush, Code2, CodeSquare, Home, Inbox, Mail, PanelsTopLeft, Phone, UserRound, BookMarked, Wrench } from "lucide-react";

export const dataAboutMe = [
    {
        id: 1,
        name: "Universidad",
        icon: <GraduationCap />,
        description: "Universidad Tecnológica del Perú",
    },
    {
        id: 2,
        name: "Cursos",
        icon: <BookMarked />,
        description: "Dibujo para Ingeniería",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <Home size={20} />,
        link: "#home",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={20} />,
        link: "#about-me",
    },
    
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={20} />,
        link: "#portafolio",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={20} />,
        link: "#services",
    },
    {
        id: 5,
        title: "Home",
        icon: <Mail size={20} />,
        link: "#contact",
    },
];

export const dataSlider = [
    {
        id: 1,
        url: "/slider1.jpg",
    },
    {
        id: 2,
        url: "/slider.jpg",
    },
    // {
    //     id: 3,
    //     url: "/slider-3.jpg",
    // },
    // {
    //     id: 4,
    //     url: "/slider-4.jpg",
    // },
]

export const dataPortfolio = [
    {
        id: 1,
        title: "Semana 2",
        image: "/semana2.pdf",  // Ruta del archivo PDF
        Ingresa: "/semana2.pdf", // Si tienes un repositorio de GitHub
    },
    {
        id: 2,
        title: "Semana 3",
        image: "semana3.pdf",  // Ruta del archivo PDF
        Ingresa: "/semana3.pdf",
    },
    {
        id: 3,
        title: "Semana 4",
        image: "/semana4.pdf",  // Ruta del archivo PDF
        Ingresa: "/semana4.pdf",
    },
    {
        id: 4,
        title: "Semana 5",
        image: "/semana5.pdf",  // Ruta del archivo PDF
        Ingresa: "/semana5.pdf",
    },
    {
        id: 5,
        title: "Semana 6",
        image: "/semana6.pdf",  // Ruta del archivo PDF
        Ingresa: "/semana6.pdf",
    },
    {
        id: 6,
        title: "Semana 7",
        image: "/semana7.pdf",  // Ruta del archivo PDF
        Ingresa: "/semana7.pdf",
    },
    {
        id: 7,
        title: "Semana 8",
        image: "/semana8.pdf",  // Ruta del archivo PDF
        Ingresa: "/semana8.pdf",
    },
    {
        id: 8,
        title: "Semana 9",
        image: "/semana9.pdf",  // Ruta del archivo PDF
        Ingresa: "/semana9.pdf",
    },{
        id: 15,
        title: "Semana 10",
        image: "/semana10.pdf",  // Ruta del archivo PDF
        Ingresa: "/semana10.pdf",
    },
    {
        id: 13,
        title: "Semana 11",
        image: "/semana11.pdf",  // Ruta del archivo PDF
        Ingresa: "/semana11.pdf",
    },
    {
        id: 14,
        title: "Semana 12",
        image: "/semana12.pdf",  // Ruta del archivo PDF
        Ingresa: "/semana12.pdf",
    },
    {
        id: 9,
        title: "Semana 13",
        image: "/semana13.pdf",  // Ruta del archivo PDF
        Ingresa: "/semana13.pdf",
    },
    {
        id: 10,
        title: "Semana 14",
        image: "/semana14.pdf",  // Ruta del archivo PDF
        Ingresa: "/semana14.pdf",
    },
    {
        id: 11,
        title: "Semana 15",
        image: "/semana15.pdf",  // Ruta del archivo PDF
        Ingresa: "/semana15.pdf",
    },
    {
        id: 12,
        title: "Semana 16",
        image: "/semana16.pdf",  // Ruta del archivo PDF
        Ingresa: "/semana16.pdf",
    },
    {
        id: 16,
        title: "IMG 1",
        image: "/img1.jpeg",  // Ruta del archivo PDF
        Ingresa: "/img1.jpeg",
    },
    {
        id: 17,
        title: "IMG 2",
        image: "/img2.jpeg",  // Ruta del archivo PDF
        Ingresa: "/img2.jpeg",
    },
];



export const dataContact = [
    {
        id: 1,
        title: "Teléfono",
        subtitle: "+51 932 596 142",
        link: "tel:+51 932 596 142",
        icon: <Phone />,
    },
    // {
    //     id: 2,
    //     title: "Github",
    //     subtitle: "github.com/ratasi",
    //     link: "github.com/ratasi",
    //     icon: <Code2 />,
    // },
    {
        id: 2,
        title: "Email",
        subtitle: "U24216777@utp.edu.pe",
        link: "U24216777@utp.edu.pe",
        icon: <Inbox />,
    },
];

export const dataServices = [
    {
        id: 1,
        title: "Desarrollo Web",
        icon: <PanelsTopLeft />,
        features: [
            {
                name: "Desarrollo de sitios web personalizados",
            },
            {
                name: "Diseño y desarrollo responsive",
            },
            {
                name: "Optimización SEO",
            },
            {
                name: "Desarrollo de aplicaciones web",
            },
            {
                name: "Gestión de contenido",
            },
            {
                name: "Comercio electrónico",
            },
            {
                name: "Mantenimiento y soporte continuo",
            },
        ],
    },
    {
        id: 2,
        title: "Creación de contenido",
        icon: <BellPlus />,
        features: [
            {
                name: "Redacción de contenido original y de calidad",
            },
            {
                name: "Creación de vídeos atractivos y dinámicos",
            },
            {
                name: "Diseño gráfico para una imagen impactante",
            },
            {
                name: "Edición profesional de textos y materiales visuales",
            },
            {
                name: "Estrategias de marketing de contenidos efectivas",
            },
            {
                name: "Producción de podcasts informativos y entretenidos",
            },
            {
                name: "Generación de infografías claras y visualmente atractivas",
            },
            {
                name: "Fotografía profesional para capturar momentos excepcionales",
            },
        ],
    },
    {
        id: 3,
        title: "UI/UX Design",
        icon: <Brush />,
        features: [
            {
                name: "Diseño intuitivo para una experiencia de usuario fluida",
            },
            {
                name: "Prototipado interactivo para visualizar la interfaz",
            },
            {
                name: "Investigación de usuarios para comprender necesidades y expectativas",
            },
            {
                name: "Optimización de la usabilidad para mejorar la accesibilidad",
            },
            {
                name: "Pruebas de usabilidad para evaluar la experiencia",
            },
            {
                name: "Diseño responsive para adaptarse a diferentes dispositivos",
            },
        ],
    },
];
