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
    return (
        <section id="projects" className="projects-section py-20 px-6 md:px-20 bg-gray-800">
            <h2 className="text-4xl font-semibold text-center mb-10">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-700 p-6 rounded-lg transition-transform hover:scale-105 flex flex-col"
                    >
                        {/* <img
                            src="/assets/project-placeholder.png"
                            alt={project.title}
                            className="mb-4 rounded-md"
                        /> */}
                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-300">{project.description}</p>
                        <span className="flex-1"></span>
                        {project.link ? <a href={project.link} target="_blank" className="inline-block mt-2 font-bold">visit</a> : <></>}
                    </div>
                ))}
            </div>
                <a href="https://github.com/Shaked-Aharon" target="_blank" className="border border-white rounded px-6 py-2 mt-4 inline-block">More</a>
        </section>
    )
}