"use client"

import React from "react"

const TechStack = () => {
    const list = [
        {name: 'HTML', image:'https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png'},
        {name: 'CSS', image:'https://cdn.worldvectorlogo.com/logos/css-3.svg'},
        {name: 'TypeScript', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'},
        {name: 'Next.js', image:'https://cdn.worldvectorlogo.com/logos/next-js.svg'},
        {name: 'Tailwind CSS', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png'},
    ]

    return (
        <div>
            <div className="pl-10 pt-5">
            <h1 className="text-3xl font-rafeny">
                TechStack
            </h1>
            <h3 className="font-helvetica">
                Tools and Framework i&apos;ve used
            </h3>
            </div>
        <div className="flex flex-wrap justify-center p-4">
            {list.map((tech) =>(
                <div key={tech.name} className="m-4 p-4 border rounded-lg shadow-lg bg-white w-30 md:w-40 flex flex-col items-center
                transform transition-transform duration-300 hover:scale-105">
                    <img src={tech.image} alt= {`${tech.name} logo`} className="w-16 h-16 mb-2"/>
                    <h2 className="text-lg font-bold">{tech.name}</h2>
                    </div>
            ))}
        </div>
        </div>
    )

}

export default TechStack;