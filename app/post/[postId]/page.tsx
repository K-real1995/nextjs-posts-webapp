import React from "react";
import Post from "@/app/components/Post";

export async function generateMetadata({params, searchParams} : any) {
    const post: any = await fetchData(params.postId)
    return {
        title: post.title + ' - Статья на сайте',
        description: post.body
    }
}

async function fetchData(id: number) {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    return await res.json()
}

export default async function PagePost({params}: any) {
    const posts = await fetchData(params.postId)

    return (
        <div className='post'>
            <Post title={posts.title} body={posts.body} userId={posts.userId}/>
        </div>
    )
}
