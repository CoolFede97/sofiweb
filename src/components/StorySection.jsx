import Button from './Button'

function StorySection({
  id,
  title,
  paragraphs,
  imageSide = 'left',
  imageSrc = '/ruso.jpg',
  imageAlt,
  button,
  aside,
  tone = 'default',
}) {
  return (
    <section
      className={`story story--${tone} story--image-${imageSide} page-width`}
      id={id}
    >
      <div className="story-image-wrap">
        <img className="story-image" src={imageSrc} alt={imageAlt} />
        <span className="story-image-accent" aria-hidden="true" />
      </div>
      <div className="story-copy">
        <h2>{title}</h2>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {button && (
          <Button href={button.href}>
            {button.text} →
          </Button>
        )}
      </div>
      {aside && <aside className="story-aside">{aside}</aside>}
    </section>
  )
}

export default StorySection
