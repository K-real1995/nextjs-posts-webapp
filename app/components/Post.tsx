import Link from "next/link";
import React from "react";


const Post: React.FC<{ title: string; body: string; userId: string }> = ({ title, body, userId }) => {
    return (
        <div>
            <Link href="/">Назад</Link>
            <h2>{title}</h2>
            <p>{body}</p>
            <strong>Author ID:{userId}</strong>
        </div>
    )
}

export default Post;
