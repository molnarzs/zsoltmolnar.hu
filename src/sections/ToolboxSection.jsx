import { ToolboxIcon } from '@/configs/icons'
import React from 'react'
import DevIcon from '@/components/DevIcon'
import { getAllTechnologies } from '@/lib/cosmic'

const technologies = await getAllTechnologies()

const ToolboxSection = async () => {
  return (
    <div>
      <span className="flex items-center mb-8">
        <div className="bg-back-subtle p-2 mr-4 rounded-full">
          <ToolboxIcon />
        </div>
        <h4 className="text-xl text-accent font-semibold">Toolbox</h4>
      </span>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {technologies.map(icon => (
          <DevIcon
            name={icon.title}
            iconName={icon.metadata.data.devicon}
            key={icon.title}
          />
        ))}
      </ul>
    </div>
  )
}

export default ToolboxSection
