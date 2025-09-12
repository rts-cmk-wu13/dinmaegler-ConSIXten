import { Fa0 } from "react-icons/fa6";
import "./CardsContact.css";
import { FaPaperPlane, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function CardsContact() {
    return (
        <div className='white-background flex-column cards-contact_container grid-columns-1 margin-1'>
            <div className="flex"> 
                <figure>
                    <FaPhone />
                </figure>
                <div className="flex-column">
                    <p>ring til os</p>
                    <p>+45 7070 4000</p>
                </div>
            </div>
            <div className="flex">
                <figure>
                   <FaPaperPlane />
                </figure>
                <div className="flex-column">
                    <p>send en mail</p>
                    <p>4000@dinmaegler.com</p>
                </div>
            </div>
            <div className="flex">
                <figure>
                    <FaMapMarkerAlt />
                </figure>
                <div className="flex.column">
                    <p>butik</p>
                    <p>Stændertorvet 78, 4000 Roskilde</p>
                </div>
            </div>
            <p>Din Mægler Roskilde, er din boligibutik i lokalområdet.</p>
           </div>
    );
}