export function Skills() {
    return (
        <section id="skills" className="skills-section py-20 px-6 md:px-20">
            <h2 className="text-4xl font-semibold text-center mb-10">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {["React", "Node.js", "TypeScript", "CSS", "HTML"].map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center transition-transform hover:scale-105"
                    >
                        <img
                            src="/assets/skill-icon.png"
                            alt={skill}
                            className="w-16 h-16 mb-4"
                        />
                        <p className="text-lg">{skill}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}