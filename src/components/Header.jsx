import Button from './Button'

const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Fotografía', modal: true },
  { label: 'Diseño Gráfico', modal: true },
  { label: 'UX/UI', modal: true },
  { label: 'Sobre mí', href: '#sobre-mi' },
]

function Header({ onCategoryClick }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#inicio" aria-label="Sofía Grance, inicio">
        Sofía Grance
      </a>
      <span className="header-rule" aria-hidden="true" />
      <nav className="main-nav" aria-label="Navegación principal">
        {navigation.map((item) => (
          item.modal ? (
            <button
              type="button"
              onClick={() => onCategoryClick(item.label)}
              key={item.label}
            >
              {item.label}
            </button>
          ) : (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          )
        ))}
      </nav>
      <Button href="#contacto" variant="outline" className="header-contact">
        Contacto ↗
      </Button>
    </header>
  )
}

export default Header
