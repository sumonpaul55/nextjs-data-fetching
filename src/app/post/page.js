import Link from "next/link";

const PostPage = async () => {
    const res = await fetch("http://localhost:5000/post", {
        // cache: "force-cache"
        // next: {
        //     revalidate: 5,
        // }
        cache: "no-store"
    });
    const post = await res.json()

    return (
        <div>
            <h1 className="text-2xl">Total postsddsss {post.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:grid-cols-4">
                {
                    post.map((items, idx) => (
                        <div className="card card-compact bg-base-100 shadow-xl" key={idx}>
                            <div className="card-body">
                                <h2 className="card-title">{items.title}</h2>
                                <p>{items.description}</p>
                                <div className="card-actions justify-center items-center">
                                    <Link href={`/post/${items.id}`}><button className="btn btn-primary">See more</button></Link>
                                    <p className="py-2 bg-slate-300 text-center">{items.likes_count}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PostPage;