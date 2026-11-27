import { useEffect, useRef } from 'react'

function ProjectModal({ title, images, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus()
    }
  }, [onClose])

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          className="modal-close"
          type="button"
          aria-label="Cerrar ventana"
          onClick={onClose}
          ref={closeButtonRef}
        >
          ×
        </button>
        <h2 id="project-modal-title">{title}</h2>
        <div className="project-modal-gallery">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${title}, foto ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProjectModal
