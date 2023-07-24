import PostList from '@/components/PostList'
import { PencilIcon } from '@/configs/icons'

const WorksSection = ({ posts }) => {
  return (
    <div>
      <span className="flex items-center mb-8">
        <div className="bg-back-subtle p-2 mr-4 rounded-full">
          <PencilIcon />
        </div>
        <h4 className="text-xl text-accent font-semibold">Posts</h4>
      </span>
      <PostList allPosts={posts} postType="posts" home={true} />
    </div>
  )
}

export default WorksSection
