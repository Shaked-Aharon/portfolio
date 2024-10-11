import { useTranslation } from 'react-i18next';
import logo from '../assets/Shaked Aharon Logo.webp';
export function AboutMe() {
    const { t } = useTranslation();

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
                    <h2 className="text-4xl font-semibold mb-6">{t('AboutMe.Title')}</h2>
                    <p className="text-gray-300 leading-relaxed">
                        {t('AboutMe.Start')}
                        <br />
                        {t('AboutMe.Description')}
                    </p>
                    <p className="text-gray-300 mt-4 leading-relaxed">
                        {t('AboutMe.Extra')}
                    </p>
                </div>
            </div>
        </section>
    )
}