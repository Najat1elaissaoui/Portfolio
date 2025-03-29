//links
import Link from "next/link";
//icons
import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiWhatsappLine,
  RiGithubLine

} from 'react-icons/ri'

const Socials = () => {
  return(
     <div className="flex items-center gap-x-5 text-lg">
    <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiInstagramLine/>
    </Link>
    <Link href={'https://wa.me/0658526426'}  className="hover:text-accent transition-all duration-300">
    <RiWhatsappLine/>
    </Link>
    <Link href={'https://www.linkedin.com/in/najat-elaissaoui-61a44b282 '} className="hover:text-accent transition-all duration-300">
    <RiLinkedinBoxLine/>
    </Link>
    <Link href={'https://github.com/Najat1elaissaoui'} className="hover:text-accent transition-all duration-300">
    <RiGithubLine/>
    </Link>

  </div>);
};

export default Socials;
