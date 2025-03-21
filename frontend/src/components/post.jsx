import { useState } from "react"
import { users } from "../constants/testData"
import { comments } from "../constants/testData"
import Comment from "./comment"
export default function Post({id,userid,content})
{
    const [fav, setFav] = useState('none')
    async function tofav()
    {
        if(fav=='none')
        {
            setFav('#D22701')
        }
        if(fav=='#D22701')
        {
            setFav('none')
        }
    }
    return (
        <div style={{display:"flex"}}>
        <div className="post">
            <div className="postheader">
                <img src="./logos/user.svg" />
                <h1>{users[userid]}</h1>
            </div>
            <img src="./images/postimg.jpg" className="postimg"/>
            <h1>{content}</h1>
            <div className="interaction">
            <svg className="drop-shadow-2xl hover:w-[150px] hover:h-[75px]" width="50" height="50" viewBox="0 0 300 213"  fill={fav}xmlns="http://www.w3.org/2000/svg" onClick={tofav}  >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M119.5 26.9212C95.808 -0.689602 56.218 -9.22252 26.5332 16.0606C-3.15172 41.3438 -7.33096 83.6156 15.9808 113.518C35.3629 138.38 94.0199 190.816 113.245 207.788C115.395 209.686 116.47 210.636 117.725 211.008C118.819 211.334 120.018 211.334 121.113 211.008C122.368 210.636 123.442 209.686 125.594 207.788C144.818 190.816 203.475 138.38 222.857 113.518C246.169 83.6156 242.499 41.0778 212.304 16.0606C182.109 -8.95655 143.192 -0.689602 119.5 26.9212Z" stroke="#D22701" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <button><img src="./logos/comment.svg"/></button>
            </div>
            </div>
            <div style={{alignContent:"center"}}>
                {(comments[id] || []).map((comment, index) => (
                    <Comment userid={comment.useId} content={comment.content}/>
                ))}
            </div>
        </div>
    )
}