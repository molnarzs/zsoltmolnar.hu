import PostList from '@/components/PostList'
import Link from 'next/link'
import { PencilIcon } from '@/configs/icons'
import { ForwardArrowIcon } from '@/configs/icons'

const PostsSection = ({ posts }) => {
  return (
    <div>
      <span className="flex items-center mb-8">
        <div className="bg-back-subtle p-2 mr-4 rounded-full">
          <PencilIcon />
        </div>
        <h4 className="text-xl text-accent font-semibold">Posts</h4>
      </span>
      <PostList allPosts={posts} postType="posts" home={true} />
      <Link href="/posts">
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

export default PostsSection
