import Developer from "./capstone/Developer"
import Self from "./capstone/Self"
import User from "./capstone/User"

export default function Capstone() {
    return (
        <div>
            <h1>My Capstone.</h1>

            <User />
            <Developer />
            <Self />
        </div>
    )
}