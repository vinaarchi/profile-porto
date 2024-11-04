"use client"

import React from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Portfolio from "@/components/Projects"
import TechStack from "@/components/TechStack"
import Contactme from "@/components/Contactme"

const App = () => {
  return(
    <div>
      <Navbar />
      <Hero />
      <Portfolio />
      <TechStack />
      <Contactme />
    </div>
  )
}

export default App;