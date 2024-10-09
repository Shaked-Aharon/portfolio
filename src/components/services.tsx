const services = [
    {
        name: 'Web Development',
        description: 'Building responsive and modern web applications using the latest technologies like Vanila, React, Angular, WordPress and more.',
        icon: '/public/web-icon.svg'
    },
    {
        name: 'Mobile Development',
        description: 'Creating mobile applications for iOS and Android platforms with React Native and Ionic frameworks.',
        icon: '/public/mobile-icon.svg'
    },
    {
        name: 'API Development',
        description: 'Designing and building secure RESTful and GraphQL APIs to support front-end and mobile applications.',
        icon: '/public/api-icon.svg'
    },
    {
        name: 'DevOps',
        description: 'Setting up cloud infrastructure using AWS, Azure, or Google Cloud for scalable and secure deployments. This includes configuring CI/CD pipelines to automate deployments and manage applications efficiently.',
        icon: '/public/devops-icon.svg'
    },
    {
        name: 'Plugin and Extension Development',
        description: 'Developing custom plugins or extensions for platforms like WordPress, Shopify, or Trello to extend their capabilities according to client requirements. This includes API integrations, custom functionalities, and providing user-friendly admin interfaces for ease of use.',
        icon: '/public/plugin-icon.svg'
    },
    {
        name: 'Automation and Scripting Solutions',
        description: 'Automating repetitive tasks and processes using scripting languages like Python or JavaScript. This includes building bots, data scraping tools, and automation scripts for infrastructure management and deployment.',
        icon: '/public/automation-icon.svg'
    },

]
export function Services() {
    return (
        < section id="services" className="services-section py-20 px-6 md:px-20 bg-gray-900" >
            <div className="container mx-auto">
                <h2 className="text-4xl font-semibold text-center mb-10">Services Offered</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map(service => (
                        <div key={service.name} className="bg-gray-800 p-6 rounded-lg transition-transform hover:scale-105">
                            <div className="flex justify-center mb-4">
                                <img src={service.icon} alt={service.name} className="w-16 h-16" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-2 text-center">{service.name}</h3>
                            <p className="text-gray-300 text-center">
                                {service.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section >
    )
}