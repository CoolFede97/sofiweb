function SkillIcons() {
  return (
    <div className="skill-icons" aria-label="Herramientas creativas">
      <span className="skill-icon" role="img" aria-label="Fotografía">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M7 10h4l2-3h6l2 3h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2Z" />
          <circle cx="16" cy="17" r="5" />
          <circle cx="23" cy="13" r="1" />
        </svg>
      </span>
      <span className="skill-icon" role="img" aria-label="Figma">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 16a5 5 0 1 1 5-5h-5v5Zm0 0h5a5 5 0 1 1-5 5v-5Zm0 0a5 5 0 1 1-5 5h5v-5Zm0-10v10h-5a5 5 0 1 1 0-10h5Zm0 0h5a5 5 0 1 1-5 5V6Z" />
        </svg>
      </span>
      <span className="skill-icon" role="img" aria-label="Adobe Photoshop">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <rect x="4" y="5" width="24" height="22" rx="4" />
          <path d="M10 22V10h4.2a3.4 3.4 0 0 1 0 6.8H10m8-1.2c.7-.7 1.5-1 2.4-1 1.3 0 2.2.6 2.2 1.5 0 2.1-4.8 1.1-4.8 3.7 0 1 .9 1.7 2.3 1.7 1 0 1.9-.3 2.7-1" />
        </svg>
      </span>
    </div>
  )
}

export default SkillIcons
