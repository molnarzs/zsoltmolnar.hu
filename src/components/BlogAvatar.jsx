import { metadata } from 'app/layout'
import Image from 'next/image'

export const BlogAvatar = () => {
  return (
    <Image
      src={metadata.avatarUrl}
      width={42}
      height={42}
      alt="Zsolt Molnar"
      className="rounded-full"
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  )
}
