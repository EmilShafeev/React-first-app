import PostComments from 'components/PostComments'
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Post = () => {
    const loadData = useLoaderData()

    return (
        <div>
            <div
                className="post"
                style={{
                    flexDirection: 'column',
                    alignItems: 'start',
                    backgroundColor: 'lightgray',
                }}
            >
                <h1>
                    {loadData.id}. {loadData.title}
                </h1>
                <h3>{loadData.body}</h3>
            </div>
            <PostComments postId={loadData.id} />
        </div>
    )
}

export default Post
