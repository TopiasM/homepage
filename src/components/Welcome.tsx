
export default function Welcome () {
  const handPath = "M188,88a27.75,27.75,0,0,0-12,2.71V60a28,28,0,0,0-41.36-24.6A28,28,0,0,0,80,44v6.71A27.75,27.75,0,0,0,68,48,28,28,0,0,0,40,76v76a88,88,0,0,0,176,0V116A28,28,0,0,0,188,88Zm12,64a72,72,0,0,1-144,0V76a12,12,0,0,1,24,0v44a8,8,0,0,0,16,0V44a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V60a12,12,0,0,1,24,0v68.67A48.08,48.08,0,0,0,120,176a8,8,0,0,0,16,0,32,32,0,0,1,32-32,8,8,0,0,0,8-8V116a12,12,0,0,1,24,0Z"

  const linkClasses = "underline decoration-[var(--main-green)] font-semibold"
  const linkedInUrl = import.meta.env.PUBLIC_LINKEDIN_URL
  const moreExp = 
    <div className="m-auto font-semibold text-zinc-300 text-center text-lg">
      For more info check my <a href="/resume" className={linkClasses}>resume</a> and <a href={linkedInUrl} target="_blank" className={linkClasses}>LinkedIn</a>
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
      <h2 className="pl-2 py-1 text-4xl font-bold text-zinc-900 rounded text" id="iam-heading">
        I'm Topias
      </h2>
      <h3 className="mt-6 text-3xl font-semibold text-zinc-300 max-w-4xl text-pretty">
        I'm a Software Engineer, who enjoys creating performant and usable web experiences.
      </h3>
      <div className="mt-8">
        <span className="flex">
        <h4 className="text-3xl font-bold gradient-heading mb-4">
          My Expertise. 
        </h4>
        </span>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 border border-neutral-700 rounded">
          <div className="w-full p-2">
            <h5 className="text-2xl text-zinc-300 font-semibold gradient-heading text-center">Dev Fundamentals</h5>
          </div>
          <div className="w-full p-2">
            <h5 className="text-2xl text-zinc-300 font-semibold gradient-heading text-center">Frontend Dev</h5>
          </div>
          <div className="w-full p-2">
            <h5 className="text-2xl text-zinc-300 font-semibold gradient-heading text-center">Backend Dev</h5>
          </div>
          <div className="w-full p-2 lg:hidden">
            {moreExp}
          </div>
        </div>
        <div className="w-full p-2 hidden lg:block">
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
