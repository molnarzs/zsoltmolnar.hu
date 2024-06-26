import Date from './Date'
import CoverImage from './CoverImage'
import PostTitle from './PostTitle'
import { ExternalLinkIcon } from '@/configs/icons'
import { BlogAvatar } from './BlogAvatar'

const PostHeader = ({ post }) => {
  return (
    <>
      <PostTitle>{post.title}</PostTitle>
      <div className="flex items-center mb-8">
        <div className="flex items-center relative">
          <BlogAvatar />
          <span className="ml-2 text-sm">
            Zsolt Molnar |{' '}
            <Date dateString={post.created_at} formatStyle="LLLL dd, yyyy" /> |{' '}
            {post.metadata.category?.title}
          </span>
        </div>
      </div>
      {post.metadata.cover_image?.imgix_url ? (
        <CoverImage
          title={post.title}
          url={post.metadata.cover_image.imgix_url}
        />
      ) : undefined}
      <div className="flex flex-row justify-between sm:items-center pb-8 border-b">
        <div className="sm:flex items-center gap-x-2">
          {post.metadata.live_url ? (
            <a
              href={post.metadata.live_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-accent hover:text-gray-500 text-sm md:ml-4 w-fit"
            >
              Project Site
              <span>
                <ExternalLinkIcon />
              </span>
            </a>
          ) : undefined}
          {post.metadata.repo_url ? (
            <a
              href={post.metadata.repo_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-accent hover:text-gray-500 text-sm"
            >
              Project Repo
              <span>
                <ExternalLinkIcon />
              </span>
            </a>
          ) : undefined}
        </div>
      </div>
    </>
  )
}
export default PostHeader
