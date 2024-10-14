import { useTranslation } from "react-i18next"
import backgroundImage from '../assets/card-background-image.png';

const articles = [
    {
        title: "Jenkins CI/CD",
        description: `Created an automation solution for inventory and eCommerce synchronization.
        Increased efficiency by 40% through automated updates and order processing.`,
        link: 'https://synca.co.il'
    }
]
export function Articles() {
    const { t } = useTranslation();
    return (
        <section id="articles" className="projects-section py-20 px-6 md:px-20 bg-gray-800 relative">
            <div
                className="absolute bg-center bg-cover w-full h-full top-0 right-0 opacity-5"
                style={{
                    // boxShadow: `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset`,
                    // boxShadow: `rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset`,
                    boxShadow: `inset -4px 35px 40px 0 #ffffff`,
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
            </div>
            <h2 className="text-4xl font-semibold text-center mb-10">{t('Articles.Title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                    <div
                        key={index}
                        className="bg-gray-700 p-6 rounded-lg flex flex-col z-10"
                    >
                        {/* <img
                            src="/assets/project-placeholder.png"
                            alt={project.title}
                            className="mb-4 rounded-md"
                        /> */}
                        <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
                        <p className="text-gray-300">
                            {t(`Articles.${article.title}`)}
                            {/* {article.description} */}
                        </p>
                        <span className="flex-1"></span>
                        {article.link ? <a href={article.link} target="_blank" className="inline-block mt-2 font-bold hover:opacity-100">{t('Articles.Read')}</a> : <></>}
                    </div>
                ))}
            </div>
        </section>
    )
}