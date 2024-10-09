const skills = [
    [
        { name: 'Languages', skills: ['JavaScript', 'TypeScript', 'C#', 'Python', 'Java', 'PHP', 'Dart'] },
        { name: 'Frameworks', skills: ['.Net Core', 'ASP.Net', 'Angular', 'React', 'React Native', 'NestJS', 'NextJS', 'ExpressJS', 'Django', 'Flask', 'Tkinter', 'Flutter', 'WordPress'] },
    ],
    [
        { name: 'Databases', skills: ['MySQL', 'MariaDB', 'MongoDB', 'Redis'] },
        { name: 'Architecture', skills: ['Microservices', 'Monolithic', 'Event-Driven', 'Serverless', 'BFF', 'API Gateway', 'Onion'] },
    ],
    [
        { name: 'DevOps', skills: ['Jenkins', 'CI/CD', 'AWS', 'Nginx', 'IIS', 'Virtualization'] },
        { name: 'Technologies', skills: ['Jest', 'ORM', 'Template Engine', 'Caching'] },
    ],
    [
        { name: 'Tools', skills: ['Git', 'Github', 'BitBucket', 'Umbraco'] },
        { name: 'OS', skills: ['Linux', 'Windows'] },
    ]
]

export function SkillsTreeView() {
    return (
        <section id="skills" className="skills-section py-20 px-6 md:px-20">
            <h2 className="text-4xl font-semibold text-center mb-10">Skills</h2>

            <div className="flex flex-col items-center mb-6">
                {/* Tree Trunk */}
                <div className="w-1 bg-gray-500 h-12"></div>

                {/* First Level - Categories */}
                {skills.map((row, i) => (
                    <div key={'row-' + i} className="flex justify-between w-full md:w-3/4 lg:w-2/3 mb-2">
                        {/* Left Branch */}
                        {
                            <div className="flex flex-col items-end">
                                <div className="flex items-center">
                                    <div className="bg-gray-800 px-4 py-2 rounded-lg">
                                        <h3 className="text-xl font-semibold text-white">{row[0].name}</h3>
                                    </div>
                                    <div className="hidden md:block w-12 h-1 bg-gray-500"></div>
                                </div>
                                {/* Second Level - Skills */}
                                <ul className="mt-2 w-full">
                                    {row[0].skills.map(skill => <li key={'skill-' + skill} className="text-gray-300">{skill}</li>)}
                                </ul>
                            </div>
                        }

                        {/* Center Trunk */}
                        <div className="w-1 bg-gray-500 h-full"></div>

                        {/* Right Branch */}
                        {
                            <div className="flex flex-col items-end">
                                <div className="flex items-center flex-row-reverse">
                                    <div className="bg-gray-800 px-4 py-2 rounded-lg">
                                        <h3 className="text-xl font-semibold text-white">{row[1].name}</h3>
                                    </div>
                                    <div className="hidden md:block w-12 h-1 bg-gray-500"></div>
                                </div>
                                {/* Second Level - Skills */}
                                <ul className="mt-2">
                                    {row[1].skills.map(skill => <li key={'skill-' + skill} className="text-gray-300">{skill}</li>)}
                                </ul>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </section>
    )
}