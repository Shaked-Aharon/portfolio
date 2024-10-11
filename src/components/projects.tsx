import { useTranslation } from "react-i18next"
import backgroundImage from '../assets/card-background-image.png';

const projects = [
    {
        title: "Synca", description: `Created an automation solution for inventory and eCommerce synchronization.
        Increased efficiency by 40% through automated updates and order processing.`,
        link: 'https://synca.co.il'
    },
    {
        title: "AskBot", description: `
        Enabled tailored responses, adaptable workflows, and personalized experiences
        suitable for various industries.
        Improved customer engagement by 35% for users of the platform.
        `,
        link: 'https://askbot.co.il'
    },
    {
        title: "WordPress Products Feed", description: `WordPress plugin that adds XML products feed functionality, featuring an admin interface to securely generate tokens for protected feed access. 
        It also provides a simple copyable URL for integrating the feed with other platforms, enhancing both security and usability.`,
        link: 'https://app.askbot.co.il/askbot-xml-feed-generator.zip'
    },
    {
        title: "Trello Agile Kit", description: `
        Trello Power-Up that adds agile features like tagging cards (e.g., 'bug', 'task'), prioritizing tasks, and managing card templates.
        This tool streamlines workflows and enhances task management for agile development teams.`,
        link: 'https://shaked-aharon.github.io/Card-Tag-Trello-PowerUp/'
    },
]
export function Projects() {
    const { t } = useTranslation();
    return (
        <section id="projects" className="projects-section py-20 px-6 md:px-20 bg-gray-800 relative">
            <div
                className="absolute bg-center bg-cover w-full h-full top-0 right-0 opacity-5"
                style={{
                    // boxShadow: `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset`,
                    // boxShadow: `rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset`,
                    boxShadow: `inset -4px 35px 40px 0 #ffffff`,
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
            </div>
            <h2 className="text-4xl font-semibold text-center mb-10">{t('Projects.Title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-700 p-6 rounded-lg flex flex-col z-10"
                    >
                        {/* <img
                            src="/assets/project-placeholder.png"
                            alt={project.title}
                            className="mb-4 rounded-md"
                        /> */}
                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-300">
                            {t(`Projects.${project.title}`)}
                            {/* {project.description} */}
                        </p>
                        <span className="flex-1"></span>
                        {project.link ? <a href={project.link} target="_blank" className="inline-block mt-2 font-bold hover:opacity-100">{t('Projects.Visit')}</a> : <></>}
                    </div>
                ))}
            </div>
            <a href="https://github.com/Shaked-Aharon" target="_blank" className="border border-white rounded px-6 py-2 mt-4 inline-block">{t('Projects.More')}</a>
        </section>
    )
}