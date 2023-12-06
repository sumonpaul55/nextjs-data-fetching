import Link from "next/link";

export async function generateStaticParams() {
    const res = await fetch("http://localhost:5000/post");
    const post = await res.json();
    const ids = post.slice(0, 4).map(post => {
        return { id: post.id + "" }

    })
    return ids
    // console.log(ids)
}
const DetailPage = async ({ params }) => {
    // console.log(params.id)
    const res = await fetch(`http://localhost:5000/post/${params.id}`)
    const post = await res.json();
    // console.log(data)
    return (
        <div className="m-6">
            <div className="card card-compact bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.description}</p>
                    <div className="card-actions justify-center items-center">
                        <p className="py-2 bg-slate-300 text-center">{post.likes_count}</p>
                    </div>
                </div>
                <Link href="/post">go Back</Link>
            </div>
        </div>
    );
};

export default DetailPage;