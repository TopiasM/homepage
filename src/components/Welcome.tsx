import React from "react"

export default function Welcome() {
  const handPath = "M188,88a27.75,27.75,0,0,0-12,2.71V60a28,28,0,0,0-41.36-24.6A28,28,0,0,0,80,44v6.71A27.75,27.75,0,0,0,68,48,28,28,0,0,0,40,76v76a88,88,0,0,0,176,0V116A28,28,0,0,0,188,88Zm12,64a72,72,0,0,1-144,0V76a12,12,0,0,1,24,0v44a8,8,0,0,0,16,0V44a12,12,0,0,1,24,0v68a8,8,0,0,0,16,0V60a12,12,0,0,1,24,0v68.67A48.08,48.08,0,0,0,120,176a8,8,0,0,0,16,0,32,32,0,0,1,32-32,8,8,0,0,0,8-8V116a12,12,0,0,1,24,0Z"

  return (
    <div className="p-[4vw]">
      <div className="flex items-center mb-2">
        <h1 className="font-semibold text-7xl tracking-wide" id="hello-heading">Hello!</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#ffffff" id="hello-wave" viewBox="0 0 256 256">
          <clipPath id="hello-wave-path">
            <path d={handPath}></path>
          </clipPath>
        </svg>
      </div>
      <h2 className="pl-2 py-1 text-4xl font-bold text-zinc-900 rounded" id="iam-heading">
        I'm Topias
      </h2>
      <h3 className="pl-2 mt-4 text-4xl font-semibold text-[var(--main-orange)] max-w-4xl">
        I'm a Software Engineer, who enjoys creating performant and usable web experiences.
      </h3>
    </div>
  )
}