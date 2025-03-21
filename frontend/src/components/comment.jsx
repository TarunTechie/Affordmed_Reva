import { users } from "../constants/testData"
export default function Comment({ userid, content })
{
    return (
        <div className="comments">
            <div>
                <img src="./logos/user.svg" />
                <h1>{users[userid]}</h1>
            </div>
            <h2>{content}</h2>
        </div>
    )
}