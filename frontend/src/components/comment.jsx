export default function Comment({ id })
{
    return (
        <div className="comments">
            <div>
                <img src="./logos/user.svg" />
                <h1>{comments[id]}</h1>
            </div>
            <h6>{comments[id][content]}</h6>
        </div>
    )
}