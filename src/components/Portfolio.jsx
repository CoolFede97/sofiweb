import Button from './Button'

function Portfolio({ items }) {
  return (
    <section className="portfolio page-width" id="portfolio">
      <div className="section-heading">
        <h2>Mi Portfolio</h2>
        <span className="heading-rule" aria-hidden="true" />
        <a className="text-link" href="#fotografia">
          Ver todos →
        </a>
      </div>
      <div className="portfolio-grid">
        {items.map((item) => (
          <article
            className={`portfolio-card portfolio-card--${item.color}`}
            id={item.id}
            key={item.title}
            image={item.image}
          >
            <img src={`${item.image}`} alt={`Proyecto de ${item.title}`} />
            <Button href={item.href} variant={item.color}>
              {item.title} ↗
            </Button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
