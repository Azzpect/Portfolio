import Link from "next/link";
import Image from "next/image";
import { Poppins, Kanit } from "next/font/google";
import "./styles/projectCard.css";
import "./styles/home.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200"]
})

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["500"],
  style: ["italic"] 
})

export default function Home() {

  const projectData: {title: string, desc: string, img: string, repoLink: string}[] = [
    {title: "ChatAPP", desc: "A real-time chat application built using Node.js, Socket.io, and React.js. The application allows users to chat in real-time with other users also send friend requests and accept them.", img: "/chatApp.png", repoLink: "https://github.com/Azzpect/ChatAPP"},
    {title: "INotesApp", desc: "A note-taking application built using Node.js, Express.js, and React.js. The application allows users to create, edit, and delete notes, and also search for notes by title or content.", img: "/inotesApp.png", repoLink: "https://github.com/Azzpect/iNotes.github.io"}, 
    {title: "WeatherApp", desc: "A weather application built using React.js. The application allows users to search for weather information by city name.", img: "/weatherApp.png", repoLink: "https://github.com/Azzpect/WeatherApp"}
  ]

  return (
    <>
    <div id="main" className="w-screen h-screen flex items-center justify-center mb-28">
      <div id="intro" className="relative w-4/5 h-[90%]">
        <div className="absolute top-5 right-10 flex items-center justify-around z-10 w-28">
          <Link href="mailto:azzpect6571@gmail.com">
            <Image 
              src="/gmail.svg"
              width={40}
              height={40}
              alt="Gmail logo"
              className="cursor-pointer"
            />
          </Link>
          <Link href="https://github.com/Azzpect">
            <Image 
              src="/github.svg"
              width={30}
              height={30}
              alt="Gmail logo"
              className="cursor-pointer"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/atanu-ghosh-698649294/">
            <Image 
              src="/linkedin.svg"
              width={30}
              height={30}
              alt="Gmail logo"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="w-[12rem] h-[12rem] absolute -top-3 -left-3 bg-gradient-to-br from-[#c7b85b] from-0% to-[#68646b] to-50% rounded-xl corner"></div>
        <div className="w-[12rem] h-[12rem] absolute -bottom-3 -right-3 bg-gradient-to-tl from-[#c7b85b] from-0% to-[#68646b] to-50% rounded-xl corner"></div>
        <div className="absolute flex items-center justify-around w-full h-full bg-primaryBgColor">
          <div className="p-5 w-3/5 h-2/5 flex flex-col justify-between">
            <h1 className={`text-white font-bold text-7xl px-3 ${poppins.className}`}>Welcome</h1>
            <div className="py-3 px-2 relative w-full h-2/3">
              <div className="absolute top-1/2 -translate-y-1/2 -left-[3px] w-10 h-4/5 bg-gradient-to-b from-[#68646b] from-30% to-[#c7b85b]"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-primaryBgColor">
                <p className={`text-[#9b9b9b] text-xs py-2 px-5 ${kanit.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga architecto reiciendis quasi aut, cum rem saepe. Repellat, voluptatibus rem porro repellendus omnis dolorem consequuntur aut nulla necessitatibus quo, aspernatur maiores vero quis voluptate labore blanditiis! 
                </p>
                <p className={`text-[#9b9b9b] text-xs py-2 px-5 ${kanit.className}`}>mnis dolorem consequuntur aut nulla necessitatibus quo, aspernatur maiores vero quis voluptate labore blanditiis! Eum fugiat, ab perferendis nam labore, et non nihil sed inventore, provident ea deserunt maiores?
                </p>
              </div>
            </div>
          </div>
          <div id="index" className="w-1/3">
            <h2 className={`text-[#9b9b9b] text-xl ${poppins.className}`}>Navigate</h2>
            <div className="relative w-full mt-5">
              <div className="absolute w-12 h-12 -top-1 -left-1 bg-gradient-to-br from-[#68646b] from-10% to-[#c7b85b] to-55% rounded-lg"></div>
              <div className="w-2/6 flex flex-col justify-around p-5 absolute bg-primaryBgColor">
                <div className="relative w-full h-5 mb-2">
                  <Link href="#projects" className={`absolute w-full h-full bg-primaryBgColor z-10 text-[#9b9b9b] text-sm ${kanit.className}`}>Projects</Link>
                  <div className="absolute w-full h-2 -bottom-[2px] bg-gradient-to-r from-[#68646b] from-30% to-[#c7b85b]"></div>
                </div>
                <div className="relative w-full h-5 mb-2">
                  <Link href="/resume" className={`absolute w-full h-full bg-primaryBgColor z-10 text-[#9b9b9b] text-sm ${kanit.className}`}>Resume</Link>
                  <div className="absolute w-[90%] h-2 -bottom-[2px] bg-gradient-to-r from-[#68646b] from-30% to-[#c7b85b]"></div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
    <div id="projects" className="w-screen border-solid mb-28 flex flex-col flex-wrap items-center underline decoration-white relative">
      <h1 className={`text-white text-3xl font-bold ${poppins.className} p-10`}>Projects</h1>
      <div className="flex justify-around w-full">
        {projectData.map((project, index) => {
          return <ProjectCard key={index} title={project.title} desc={project.desc} img={project.img} repoLink={project.repoLink} />
        })}
      </div>
      <Link href="#main" className="absolute -bottom-14 right-20 rounded-full z-20">
        <div className="rotater"></div>
        <div className="bg-primaryBgColor rounded-full">
          <Image src="/upArrow.svg" alt="Up arrow" width={50} height={50}/>
        </div>
      </Link>
    </div>
    </>
  );
}


function ProjectCard({title, desc, img, repoLink}: {title: string, desc: string, img: string, repoLink: string}) {
  return (
    <div className="w-[25vw] h-[40vh] project-card relative">
        <div className="rotater"></div>
        <div className="rotater"></div>
      <div className="absolute w-full h-full bg-primaryBgColor p-3 flex flex-col">
        <h1 className={`text-white text-2xl font-semibold ${poppins.className} py-2`}>{title}</h1>
        <Link href={img} className="self-center"><Image src={img} alt={title} width={200} height={200} /></Link>
        <p className={`text-[#9b9b9b] text-xs ${kanit.className} py-2`}>{desc}</p>
        <Link href={repoLink} className={`text-white text-sm font-semibold ${kanit.className} self-end`}>Visit Repository&gt;&gt;</Link>
      </div>
    </div>
  )
}