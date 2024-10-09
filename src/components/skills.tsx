const skills = [
    { name: 'Languages', skills: ['JavaScript', 'TypeScript', 'C#', 'Python', 'Java', 'PHP', 'Dart'] },
    { name: 'Frameworks', skills: ['.Net Core', 'ASP.Net', 'Angular', 'React', 'React Native', 'NestJS', 'NextJS', 'ExpressJS', 'Django', 'Flask', 'Tkinter', 'Flutter', 'WordPress'] },
    { name: 'Databases', skills: ['MySQL', 'MariaDB', 'MongoDB', 'Redis'] },
    { name: 'Architecture', skills: ['Microservices', 'Monolithic', 'Event-Driven', 'Serverless', 'BFF', 'API Gateway', 'Onion'] },
    { name: 'DevOps', skills: ['Jenkins', 'CI/CD', 'AWS', 'Nginx', 'IIS', 'Virtualization'] },
    { name: 'Technologies', skills: ['Jest', 'ORM', 'Template Engine', 'Caching'] },
    { name: 'Tools', skills: ['Git', 'Github', 'BitBucket', 'Umbraco'] },
    { name: 'OS', skills: ['Linux', 'Windows'] },
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
                            {category.skills.map(skill => <li key={skill}>{skill}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}