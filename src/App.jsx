import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import StorySection from './components/StorySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import SkillIcons from './components/SkillIcons'
import ProjectModal from './components/ProjectModal'
import './App.css'

const portfolioItems = [
  { id: 'fotografia', title: 'Fotografía', color: 'yellow', href: '#fotografia', image: 'fotografia.png'},
  { id: 'diseno-grafico', title: 'Diseño Gráfico', color: 'pink', href: '#diseno-grafico', image: 'dg.png'},
  { id: 'ux-ui', title: 'UX/UI', color: 'purple', href: '#ux-ui', image: 'uxui.png'},
]

const categoryImages = {
  Fotografía: ['/f1.png', '/f2.png', '/f3.png', '/f4.png', '/f5.png', '/f6.png', '/f7.png'],
  'Diseño Gráfico': ['/dg.png'],
  'UX/UI': ['/uxui.png'],
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')

  return (
    <>
      <Header onCategoryClick={setSelectedCategory} />
      <main>
        <Hero />
        <Portfolio items={portfolioItems} />
        <StorySection
          id="sobre-mi"
          title="Sobre mí"
          paragraphs={[
            'Soy Sofía, una fotógrafa y diseñadora apasionada por la estética, la creatividad y los detalles.',
            'Me interesa explorar nuevas formas de contar historias, ya sea a través de una imagen, un diseño o una experiencia digital.',
          ]}
          imageSide="left"
          imageSrc="/cpg.png"
          imageAlt="Sofía, fotógrafa y diseñadora"
          aside={
            <>
              <div className="skill-list">
                <span>Fotografía</span>
                <span>Diseño Gráfico</span>
                <span>UX/UI</span>
              </div>
              <SkillIcons />
            </>
          }
        />
        <ContactSection />
      </main>
      <Footer />
      {selectedCategory && (
        <ProjectModal
          title={selectedCategory}
          images={categoryImages[selectedCategory]}
          onClose={() => setSelectedCategory('')}
        />
      )}
    </>
  )
}

export default App
