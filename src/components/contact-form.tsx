import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import EmailSentModal from './email-send-modal';

export function Contact() {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const form = useRef<HTMLFormElement>();

    const sendEmail = (e: any) => {
        e.preventDefault();
        if (!form.current) return;
        emailjs
            .sendForm('service_pb4tkie', 'template_h1p1ugm', form.current, {
                publicKey: '9jwGM10UmkC9qFQ-w',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current?.reset();
                    setIsModalOpen(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section id="contact" className="contact-section pt-10 px-6 md:px-20">
            <EmailSentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
            <h2 className="text-4xl font-semibold text-center mb-10">{t('Contact.Title')}</h2>
            <form className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg" ref={form as any} onSubmit={sendEmail}>
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="name">
                        {t('Contact.Name')}
                    </label>
                    <input
                        required
                        minLength={3}
                        type="text"
                        id="name"
                        name="user_name"
                        className="w-full p-2 bg-gray-700 rounded-md border border-gray-600"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="email">
                        {t('Contact.Email')}
                    </label>
                    <input
                        required
                        type="email"
                        id="email"
                        name="user_email"
                        className="w-full p-2 bg-gray-700 rounded-md border border-gray-600"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="message">
                        {t('Contact.Message')}
                    </label>
                    <textarea
                        minLength={8}
                        required
                        id="message"
                        rows={4}
                        name="message"
                        className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 resize-none"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 mt-4 bg-teal-500 rounded-md hover:bg-teal-600"
                >
                    {t('Contact.Submit')}
                </button>
            </form>
        </section>
    )
}