import logo from '../assets/Shaked Aharon Logo.webp';
export function AboutMe() {
    return (
        <section id="about" className="about-section py-20 px-6 md:px-20 bg-gray-900">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                {/* About Image */}
                <div className="md:w-1/3 mb-8 md:mb-0">
                    <img
                        src={logo} // Replace with your own image
                        alt="About Me"
                        className="rounded-lg shadow-lg w-32 md:w-64"
                    />
                </div>

                {/* About Content */}
                <div className="md:w-2/3 md:ml-10">
                    <h2 className="text-4xl font-semibold mb-6">About Me</h2>
                    <p className="text-gray-300 leading-relaxed">
                        I am a dedicated Tech Lead | Full-Stack Developer <br/>
                        with over 5 years of experience in software
                        development. My passion for learning and tackling new challenges has
                        allowed me to lead teams effectively and deliver high-quality, scalable
                        solutions. As a quick learner and autodidact, I continuously seek
                        opportunities to innovate and drive success
                    </p>
                    <p className="text-gray-300 mt-4 leading-relaxed">
                        I believe in the power of clean code and efficient solutions, and I'm constantly learning new techniques and frameworks to improve my skill set. When I'm not coding and I love exploring new technologies.
                    </p>
                </div>
            </div>
        </section>
    )
}