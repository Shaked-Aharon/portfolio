import { useState } from "react";
import myResumeFile from '../assets/Resume - Shaked Aharon.pdf';
import logo from '../assets/Shaked Aharon Logo.webp';
import LanguageSelector from "./language-selector";
import { useTranslation } from "react-i18next";

export function Navbar() {
    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav className="bg-gray-800 fixed w-full z-10 shadow-lg">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <a href="#hero" className="text-white">
                        <img
                            src={logo} // Replace with your own image
                            alt="About Me"
                            className="rounded-lg shadow-lg w-8"
                        />
                        {/* Shaked Aharon */}
                    </a>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-300 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
                <div className={`hidden md:flex items-center `}>
                    <a href="#hero" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700">{t('Navbar.Home')}</a>
                    <a href="#about" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700">{t('Navbar.AboutMe')}</a>
                    <a href="#skills" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700">{t('Navbar.Skills')}</a>
                    <a href="#projects" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700">{t('Navbar.Projects')}</a>
                    <a href="#contact" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700">{t('Navbar.Contact')}</a>
                    <a
                        href={myResumeFile} // Replace with the path to your resume file
                        download
                        className="px-6 py-2 border border-2 border-green-700 text-white rounded-md hover:bg-green-800 transition"
                    >
                        {t('Navbar.MyResume')}
                    </a>
                    <LanguageSelector />
                </div>
            </div>
            <div className={`md:hidden md:flex items-center ${isOpen ? "block" : "hidden"}`}>
                <a onClick={toggleMenu} href="#hero" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700">{t('Navbar.Home')}</a>
                <a onClick={toggleMenu} href="#about" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700">{t('Navbar.AboutMe')}</a>
                <a onClick={toggleMenu} href="#skills" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700">{t('Navbar.Skills')}</a>
                <a onClick={toggleMenu} href="#projects" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700">{t('Navbar.Projects')}</a>
                <a onClick={toggleMenu} href="#contact" className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700">{t('Navbar.Contact')}</a>
                <a
                    href={myResumeFile} // Replace with the path to your resume file
                    download
                    className="inline-block m-2 px-6 py-2 border border-2 border-green-700 text-white rounded-md hover:bg-green-800 transition"
                >
                    {t('Navbar.MyResume')}
                </a>
                <LanguageSelector />
            </div>
        </nav>

    )
}