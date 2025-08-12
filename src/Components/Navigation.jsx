import { NavLink } from "react-router"
import './navigation.css'

export default function Navigation() {

    return (
        <nav className="">
            <NavLink to="#">Boliger til salg</NavLink>
            <NavLink to="#">Mæglere</NavLink>
            <NavLink to="#">Mine Favoritter</NavLink>
            <NavLink to="#">Kontakt Os</NavLink>
        </nav>
    )
}