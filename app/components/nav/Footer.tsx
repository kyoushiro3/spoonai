import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer(){
    const icon_size = {
        small: 20,
        medium: 24,
        large: 32,
      };
    
      const links = {
        instagram: "https://www.instagram.com/kimdarren.ig",
        twitter: "https://www.twitter.com/kimdarren.ig",
        linkedin: "https://linkedin.com/in/kim-darren-peralta",
        github: "https://github.com/kyoushiro3",
      };
      

      const nav_footer = [
        {
            name:"Documentation", 
            link:"#"
        },
        {
            name:"Resources", 
            link:"#"
        },
        {
            name:"Bogs", 
            link:"#"
        },
        {
            name:"Support", 
            link:"#"
        }
    ];

return(
<footer className="w-full py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <a href="kimdarren.vercel.app" className="flex justify-center text-muted">
                    kim darren
                </a>
                    <ul className="text-lg flex items-center justify-center flex-col gap-5 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
                    {nav_footer.map((item, index)=>(
                        <li key={index}><a href={item.link} className="text-sm md:text-base hover:text-gray-900 font-medium text-muted">{item.name}</a></li>
                    
                    ))}
                    </ul>
                    <div className="flex space-x-9 justify-center items-center mb-14">
                        <a href={links.github} target = "_blank" rel = "noopener noreferrer" className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
                          <FaGithub size={icon_size.medium}/>
                        </a>
                        <a href={links.instagram} className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
                        <FaInstagram size={icon_size.medium}/>
                                
                        </a>
                        <a href={links.twitter} className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
                           <FaTwitter size={icon_size.medium}/>     
                        </a>
                        <a href={links.linkedin} className="block  text-gray-900 transition-all duration-500 hover:text-indigo-600 ">
                           <FaLinkedin size={icon_size.medium}/>
                        </a>
                    </div>
                    <span className="text-sm md:text-base text-gray-500 text-center block">©<a href="kimdarren.vercel.app">SpoonAI</a> 2024, All rights reserved.</span>
            </div>
        </div>
    </footer>
);
}