export const TechTag = ({ name }) => {
  return (
    <div className="flex items-center" key={name}>
      <span className="ml-2 text-xs uppercase">{name}</span>
    </div>
  )
}
