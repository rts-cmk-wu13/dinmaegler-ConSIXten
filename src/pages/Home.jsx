import { Link, NavLink } from "react-router"
import Hero from "../Components/Hero/Hero"
import Card from "../Components/Cards/Cards"


export default function Home() {

    return (
        <>
            <Hero />
            <section className="margin-block-2">
                <div className="half">
                    <img src="Image.png" alt="Velkommen" />
                </div>
                <div className="half margin-2">
                    <h1>Vi har fulgt danskerne hjem i snart 4 årtier</h1>
                    <h2 className="margin-top-2">Det synes vi siger noget om os!</h2>
                    <p className="margin-top-1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        The point of using Lorem Ipsum is that it has normal distribution.</p>
                        <p className="margin-top-1">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <div className="flex margin-top-4 ">
                        <figure >
                            <img src="332+.png" alt="" />
                        </figure>
                        <figure className="margin-inline-1">
                            <img src="158+.png" alt="" />
                        </figure>
                    </div>
                </div>
            </section>
           
        </>
    )
}