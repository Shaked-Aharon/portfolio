export function Contact() {
    return (
        <section id="contact" className="contact-section pt-10 px-6 md:px-20">
            <h2 className="text-4xl font-semibold text-center mb-10">Contact Me</h2>
            <form className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg">
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-2 bg-gray-700 rounded-md border border-gray-600"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 bg-gray-700 rounded-md border border-gray-600"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        className="w-full p-2 bg-gray-700 rounded-md border border-gray-600 resize-none"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 mt-4 bg-blue-500 rounded-md hover:bg-blue-600"
                >
                    Send Message
                </button>
            </form>
        </section>
    )
}