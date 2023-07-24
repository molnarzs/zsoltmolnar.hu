import Link from 'next/link'
import React from 'react'
import PostList from '@/components/PostList'
import { FlaskIcon, ForwardArrowIcon } from '@/configs/icons'

const WorksSection = ({ posts }) => {
  return (
    <div>
      <span className="flex items-center mb-8">
        <div className="bg-back-subtle p-2 mr-4 rounded-full">
          <FlaskIcon />
        </div>
        <h4 className="text-xl text-accent font-semibold">Works</h4>
      </span>
      <PostList allPosts={posts} postType="works" home={true} />
      <Link href="/works">
        <p className="flex items-center text-fore-subtle text-sm">
          Read more
          <span className="ml-2">
            <ForwardArrowIcon />
          </span>
        </p>
      </Link>
    </div>
  )
}

export default WorksSection
