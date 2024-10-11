import { useTranslation } from "react-i18next"

const skills = [
    { name: 'Languages', skills: ['JavaScript', 'TypeScript', 'C#', 'Python', 'Java', 'PHP', 'Dart', 'SQL', 'Bash', 'HTML', 'CSS'] },
    { name: 'Frameworks', skills: ['.Net Core', 'ASP.Net', 'Angular', 'React', 'React Native', 'NestJS', 'NextJS', 'ElectronJS', 'ExpressJS', 'Django', 'Flask', 'Tkinter', 'Flutter', 'WordPress'] },
    { name: 'Databases', skills: ['MySQL', 'MariaDB', 'SQLite', 'MongoDB', 'Redis', 'Firebase Realtime'] },
    { name: 'Architecture', skills: ['Microservices', 'Monolithic', 'Event-Driven', 'Serverless', 'BFF', 'API Gateway', 'Onion', 'Modular Architecture'] },
    { name: 'DevOps', skills: ['Jenkins', 'CI/CD', 'AWS', 'GCP', 'Nginx', 'IIS', 'Virtualization'] },
    { name: 'Testing', skills: ['Unit Testing', 'Integration Testing', 'API Testing', 'TDD', 'Selenium'] },
    { name: 'Technologies', skills: ['Jest', 'ORM', 'Template Engine', 'Caching', 'WebSockets', 'RESTful APIs', 'Service Workers', 'TypeORM', 'SASS/SCSS', 'PWA', 'Webpack', 'Babel'] },
    { name: 'Tools', skills: ['Git', 'Github', 'BitBucket', 'Umbraco', 'JIRA', 'Trello', 'Postman', 'Figma'] },
    { name: 'OS', skills: ['Linux', 'Windows'] },
]

export function Skills() {
    const {t} = useTranslation();
    return (
        <section id="skills" className="skills-section py-20 px-6 md:px-20">
            <h2 className="text-4xl font-semibold text-center mb-10">{t('Skills.Title')}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                {skills.map(category => (
                    <div key={category.name}>
                        <p className="font-bold bg-gray-700 px-2 py-1 rounded-t">{category.name}</p>
                        <ul className="p-2">
                            {category.skills.map(skill => <li key={skill}>{skill}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}