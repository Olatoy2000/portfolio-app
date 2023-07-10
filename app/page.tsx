import React from 'react'
import {aboutMeData} from "./data/data"
import Image from "next/image";
const AboutMePage = () => {
  return (
    <main className="flex flex-col items-center">
      <section className="flex items-center w-10/12 mt-10 mb-6">
        <div className="w-1/3"> 
            <Image height={960} width={640} arial-label={"image of the profile"} src={"/images/olalekan.png"} priority={false} alt={"image of the profile"} className="profileImage" />
        </div>
        <div className="w-2/3 ml-20"> 
            <h2 className="">{aboutMeData.title}</h2>    
            <p className="text-base">{aboutMeData.body}</p>
        </div>
      </section>
      <section className="w-full h-full p-10 my-8 bg-blue-light">
        <p> {aboutMeData.highlightedBody} </p>
      </section>
      <section>
        <div> text</div>
        <div> Image</div>
      </section>
    </main>
  )
}

export default AboutMePage
