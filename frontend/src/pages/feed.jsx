import Header from "../components/header";
import Post from "../components/post";
import { posts } from "../constants/testData";
export default function Feed()
{
    return (
        <div>
            <Header page={'YOUR FEED'} />
            <div className="postcontainer">
                {
                    posts.map((p) => (
                        <Post
                            id={p.id}
                            userid={p.userid}
                            content={p.content}
                        />
                    ))
            }
            </div>
        </div>
    )
}