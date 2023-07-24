import { ClientTag } from './ClientTag'
import DevIcon from './DevIcon'

export const WorkFooter = ({ technologies, client }) => {
  return (
    <div className="flex items-center mb-4 ml-4">
      {!!client ? (
        <div className="border-0 border-r pr-4">
          <ClientTag
            imageUrl={client?.metadata?.client_icon?.imgix_url}
            name={client.title}
            clientUrl={client.metadata.data?.url}
          />
        </div>
      ) : (
        <></>
      )}
      {!!technologies ? (
        <ul className="flex items-center gap-4 p-4 flex-wrap">
          {technologies.map(tech => (
            <DevIcon
              key={tech.title}
              name={tech.title}
              iconName={tech.metadata.data.devicon}
            />
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  )
}
