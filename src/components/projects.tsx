export function Projects() {
    return (
        <section id="projects" className="projects-section py-20 px-6 md:px-20 bg-gray-800">
            <h2 className="text-4xl font-semibold text-center mb-10">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Project 1", description: "Description of project 1" },
                    { title: "Project 2", description: "Description of project 2" },
                    { title: "Project 3", description: "Description of project 3" },
                ].map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-700 p-6 rounded-lg transition-transform hover:scale-105"
                    >
                        <img
                            src="./assets/project-placeholder.png"
                            alt={project.title}
                            className="mb-4 rounded-md"
                        />
                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-300">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}