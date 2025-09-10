import { Link, NavLink } from "react-router"
import Hero from "../Components/Hero/Hero"
import HpSection1 from "../Components/Sections/HpSection-1"
import InfoCards from "../Components/Cards/infoCards"
import SectionGrid3 from "../Components/Sections/SectionGrid3"
import SectionHeadliner from "../Components/Sections/SectionHeadliner"
import HomeCards from "../Components/Cards/HomeCards"
import SectionHero from "../Components/section-hero/SectionHero"
import AgentCards from "../Components/Cards/AgentCards"





export default function Home() {
    return (
        <>
            <Hero />

            <HpSection1 />
            <SectionGrid3>
                <InfoCards />
            </SectionGrid3>
                <HomeCards />
                <SectionHero />
                <AgentCards />
                <SectionHero />
                
        </>
    )
}