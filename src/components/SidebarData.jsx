import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faHome, faLink, faProjectDiagram, faTrophy } from '@fortawesome/free-solid-svg-icons'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FontAwesomeIcon icon={faHome} />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <FontAwesomeIcon icon={faProjectDiagram} />,
        cName: 'nav-text'
    },
    {
        title: 'Skills & Achievements',
        path: '/skills-and-achievements',
        icon: <FontAwesomeIcon icon={faTrophy} />,
        cName: 'nav-text'
    },
    {
        title: 'Work Experience',
        path: '/work-exp',
        icon: <FontAwesomeIcon icon={faBriefcase} />,
        cName: 'nav-text'
    },
    {
        title: 'Connect',
        path: '/connect',
        icon: <FontAwesomeIcon icon={faLink} />,
        cName: 'nav-text'
    },
]