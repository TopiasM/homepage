import { PaintBrush } from "@phosphor-icons/react"
import { BracketsCurly, HardDrives, PaintBrushBroad, TerminalWindow } from "@phosphor-icons/react/dist/ssr"

export default function Welcome () {
  const handPath = "M188,88a27.75,27.75,0,0,0-12,2.71V60a28,28,0,0,0-41.36-24.6A28,28,0,0,0,80,44v6.71A27.75,27.75,0,0,0,68,48,28,28,0,0,0,40,76v76a88,88,0,0,0,176,0V116A28,28,0,0,0,188,88Zm12,64a72,72,0,0,1-144,0V76a12,12,0,0,1,24,0v44a8,8,0,0,0,16,0V44a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V60a12,12,0,0,1,24,0v68.67A48.08,48.08,0,0,0,120,176a8,8,0,0,0,16,0,32,32,0,0,1,32-32,8,8,0,0,0,8-8V116a12,12,0,0,1,24,0Z"

  const linkClasses = "underline decoration-[var(--main-green)] font-bold decoration-4 my-0.5 hover:underline-offset-0"
  const linkedInUrl = import.meta.env.PUBLIC_LINKEDIN_URL
  const moreExp = 
    <div className="flex flex-col align-middle font-semibold text-zinc-300 text-xl text-center">
      For more info check my 
      <div>
        <a href="/resume" className={linkClasses}>Resume</a> & <a href={linkedInUrl} target="_blank" className={linkClasses}>LinkedIn</a>
      </div>
    </div>

  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center justify-between">
        <div className="flex" >
          <h1 className="font-semibold text-7xl tracking-wide gradient-heading">Hello!</h1>
          <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="64" height="64" id="hello-wave">
            <clipPath id="hello-wave-path">
              <path d={handPath}></path>
            </clipPath>
          </svg>
        </div>
      </div>
      <h2 className="pl-2 py-1 text-4xl font-bold text-zinc-950 rounded text" id="iam-heading">
        I'm Topias
      </h2>
      <h3 className="mt-6 text-3xl text-zinc-300 max-w-3xl text-pretty">
        I'm a Software Engineer, who enjoys developing performant and well-designed web experiences.
      </h3>
      <div className="bg-zinc-300 text-zinc-950 font-bold mt-6 py-1 px-2 rounded w-fit text-2xl">
        Looking for work!
      </div>
      <div className="mt-6">
        <span className="flex">
        <h4 className="text-3xl font-bold gradient-heading mb-4">
          My Expertise. 
        </h4>
        </span>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 border border-neutral-800 rounded">
          <div className="w-full sm:px-5 p-3">
            <h5 className="flex flex-row text-2xl text-zinc-300 font-semibold items-center">
              <TerminalWindow weight="bold" className="mt-1 bg-[var(--main-green)] rounded p-0.5" />
              <span className="ml-2 gradient-heading mt-1">
                Dev Fundamentals
              </span>
            </h5>
            <p className="text-zinc-300 text-lg mt-1 text-pretty pr-4">
              I have a great understanding of the fundamentals of software engineering, such as software configuration management, testing, dev tooling, and CLI.
            </p>
          </div>
          <div className="w-full sm:px-5 p-3 sm:border-l lg:border-x border-neutral-800 border-dashed">
            <h5 className="flex flex-row text-2xl text-zinc-300 font-semibold items-center">
              <PaintBrush weight="bold" className="mt-1 bg-[var(--main-green)] rounded p-0.5" />
              <span className="ml-2 gradient-heading">
                Frontend Dev
              </span>
            </h5>
            <p className="text-zinc-300 text-lg mt-1 text-pretty pr-4">
              I'm enthusiastic about creating modern and responsive web interfaces, emphasizing performance and usability.
              For this task, I love to use <span className="underline decoration-cyan-500">React</span> and <span className="underline decoration-orange-600">Svelte</span>.
            </p>
          </div>
          <div className="w-full sm:px-5 p-3 sm:border-t lg:border-none border-neutral-800 border-dashed">
            <h5 className="flex flex-row text-2xl text-zinc-300 font-semibold items-center">
              <HardDrives weight="bold" className="mt-1 bg-[var(--main-green)] rounded p-0.5" />
              <span className="ml-2 gradient-heading">
                Backend Dev
              </span>
            </h5>
            <p className="text-zinc-300 text-lg mt-1 text-pretty pr-4">
              I'm experienced in developing robust backend services, from designing and managing databases to creating complex APIs.
            </p>
          </div>
          <div className="w-full p-2 hidden sm:block lg:hidden sm:border-t sm:border-l border-neutral-800 border-dashed content-center">
            {moreExp}
          </div>
        </div>
        <div className="w-full p-2 mt-2 block sm:hidden lg:block">
          {moreExp}
        </div>
      </div>
      <div className="mt-8">
        <h4 className="text-3xl font-bold gradient-heading">
          My Projects. 
        </h4>
        <br/>
      </div>
      
    </div>
  )
}
