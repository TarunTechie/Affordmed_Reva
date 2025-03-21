import Header from "../components/header";

export default function Trending()
{
    return (
          <div>
                    <Header page={'Trending'} />
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