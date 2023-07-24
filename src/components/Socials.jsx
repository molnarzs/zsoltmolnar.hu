import { EmailIcon, GithubIcon, LinkedinIcon } from '@/configs/icons'

const Socials = ({ email, github, linkedin }) => {
  return (
    <div className="flex items-center">
      <span className="flex gap-x-5 ml-2">
        <a
          href={`mailto:${email}`}
          className="group cursor-pointer"
          aria-label="Email"
          title="Email"
        >
          <EmailIcon />
        </a>
        <a
          href={`https://github.com/${github}`}
          className="group cursor-pointer"
          aria-label="Github"
          title="Github"
        >
          <GithubIcon />
        </a>
        <a
          href={`https://www.linkedin.com/in/${linkedin}`}
          className="group cursor-pointer"
          aria-label="Linkedin"
          title="Linkedin"
        >
          <LinkedinIcon />
        </a>
      </span>
    </div>
  )
}
export default Socials
