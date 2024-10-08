const skills = [
    {name: 'Languages', skills: ['JavaScript', 'TypeScript', 'C#', 'Python', 'Java', 'Dart']},
    {name: 'Frameworks', skills: ['.Net Core', 'ASP.Net', 'Angular', 'React', 'NestJS', 'NextJS', 'ExpressJS', 'Django', 'Flask', 'Tkinter', 'Flutter']},
    {name: 'Databases', skills: ['MySQL', 'MariaDB', 'MongoDB', 'Redis']},
    {name: 'DevOps', skills: ['Jenkins', 'CI/CD', 'AWS', 'Nginx', 'Virtualization']},
    {name: 'Technologies', skills: ['Jest', 'ORM', 'Template Engine', 'Caching']},
    {name: 'Tools', skills: ['Git', 'Github', 'BitBucket']},
    {name: 'OS', skills: ['Linux', 'Windows']},
]

export function Skills() {
    return (
        <section id="skills" className="skills-section py-20 px-6 md:px-20">
            <h2 className="text-4xl font-semibold text-center mb-10">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {skills.map(category => (
                    <div key={category.name}>
                        <p className="font-bold bg-gray-700 px-2 py-1 rounded-t">{category.name}</p>
                        <ul className="border border-gray-700 p-2">
                            {category.skills.map(skill => <li>{skill}</li>)}
                        </ul>
                    </div>
                    // <div
                    //     key={index}
                    //     className="flex flex-col items-center transition-transform hover:scale-105"
                    // >
                    //     <img
                    //         src="/assets/skill-icon.png"
                    //         alt={skill}
                    //         className="w-16 h-16 mb-4"
                    //     />
                    //     <p className="text-lg">{skill}</p>
                    // </div>
                ))}
            </div>
        </section>
    )
}