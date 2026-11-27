function Button({ children, href, variant = 'dark', className = '' }) {
  return (
    <a className={`button button--${variant} ${className}`} href={href}>
      {children}
    </a>
  )
}

export default Button
