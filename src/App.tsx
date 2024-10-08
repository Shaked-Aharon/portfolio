import { useState } from 'react';
import './App.css'
import { Footer } from './components/footer';
import { Contact } from './components/contact-form';
import { Projects } from './components/projects';
import { Skills } from './components/skills';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';

function App() {

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>

  )
}

export default App
