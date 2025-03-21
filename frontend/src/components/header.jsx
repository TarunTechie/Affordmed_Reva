export default function Header({page})
{
    return (
        <header className="header">
            <img src="./logos/react.svg" />
            <h1>{page}</h1>
            <img src="./logos/reva.png"/>
        </header>
    )
}