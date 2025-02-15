import React from "react";
import Link from "next/link";

export type Posts = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await res.json()
}

export default async function Home(): Promise<React.JSX.Element> {
  const posts = await fetchData()

  return (
      <div>
        <h1>Главна страница</h1>
        {posts.map(((el:Posts) =>
            (
                <div key={el.id} className="post">
                    <h2>{el.title}</h2>
                    <p>{el.body}</p>
                    <Link href={`/post/` + el.id}>Детальнее</Link>
                </div>
            )))}
      </div>

  );
}
