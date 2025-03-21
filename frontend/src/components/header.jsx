import { useNavigate } from "react-router-dom"
export default function Header({ page })
{
    const nav=useNavigate()
    return (
        <header className="header">
            <img src="./logos/react.svg" onClick={()=>{nav('/')}}/>
            <h1>{page}</h1>
            <img src="./logos/reva.png"/>
        </header>
    )
}