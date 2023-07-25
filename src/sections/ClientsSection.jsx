import { ToolboxIcon } from '@/configs/icons'
import React from 'react'
import { getAllClients } from '@/lib/cosmic'
import { ClientTag } from '@/components/ClientTag'

const clients = await getAllClients()

export const ClientsSection = async () => {
  return (
    <div>
      <span className="flex items-center mb-8">
        <div className="bg-back-subtle p-2 mr-4 rounded-full">
          <ToolboxIcon />
        </div>
        <h4 className="text-xl text-accent font-semibold">
          Clients & Employers
        </h4>
      </span>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {clients.map(client => (
          <ClientTag
            key={client.slug}
            imageUrl={client?.metadata?.client_icon?.imgix_url}
            name={client.title}
            clientUrl={client.metadata.data?.url}
          />
        ))}
      </ul>
    </div>
  )
}
