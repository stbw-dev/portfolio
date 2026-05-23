import { HashLink } from "react-router-hash-link"
import './Capstone.css'
import CapNav from "./CapNav"
import Developer from "./capstone/Developer"
import Self from "./capstone/Self"
import User from "./capstone/User"

export default function Capstone() {
    return (
        <div id="main">
            <h1>Capstone Case Study</h1>
            <CapNav />
            
            <HashLink smooth to="#root" className="back-top">Back to top</HashLink>

            <User />
            <Developer />
            <Self />
        </div>
    )
}