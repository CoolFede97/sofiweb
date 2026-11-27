function Hero() {
  return (
    <section className="hero page-width" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow">Fotógrafa · Diseñadora UX/UI</p>
        <h1>
          Sofía
          <br />
          Grance
        </h1>
        <a className="scroll-link" href="#portfolio" aria-label="Ver portfolio">
          ↓
        </a>
        <span className="hero-shape hero-shape--yellow" aria-hidden="true" />
      </div>
      <div className="hero-image-wrap">
        <img src="/sofi.png" alt="Retrato de Sofía" className="hero-image" />
        <span className="hero-shape hero-shape--pink" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Hero
