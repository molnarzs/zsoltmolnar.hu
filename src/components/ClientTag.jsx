import Image from 'next/image'

export const ClientTag = ({ imageUrl, name, clientUrl }) => {
  return (
    <a href={clientUrl} target="_blank">
      <div className="flex items-center" key={name}>
        {imageUrl ? (
          <div className="w-10 h-10 relative">
            <Image
              src={imageUrl}
              alt={`Image for ${name}`}
              fill
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        ) : undefined}
        <span className="ml-2">{name}</span>
      </div>
    </a>
  )
}
