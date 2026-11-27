import Button from './Button'

function ContactSection() {
  return (
    <section className="contact page-width" id="contacto">
      <div className="contact-copy">
        <p className="eyebrow">¿Tenés un proyecto en mente?</p>
        <h2>¿Hablamos?</h2>
        <p>
          Estoy abierta a nuevos proyectos,
          <br />
          colaboraciones y propuestas.
        </p>
        <Button href="mailto:hola@sofiagrance.com">Escribime →</Button>
      </div>
      <img src="/hablamos.png" alt="Imagen de un proyecto creativo" />
    </section>
  )
}

export default ContactSection
