import Header from "../components/header";
import Post from "../components/post";
export default function Feed()
{
    return (
        <div>
            <Header page={'YOUR FEED'} />
            <div className="postcontainer">
            <Post
                userid={1}
                id={1970}
                content={"Post about Ocean"}
                />
            </div>
        </div>
    )
}