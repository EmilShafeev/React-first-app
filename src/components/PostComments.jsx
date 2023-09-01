import PostService from 'API/PostService'
import { useFetching } from 'hooks/useFetching'
import React, { useEffect, useState } from 'react'
import MyLoader from './UI/loader/MyLoader'

const PostComments = ({ postId }) => {
    const [comments, setComments] = useState([])

    const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
        const responce = await PostService.getPostComments(postId)
        setComments(responce.data)
    })

    useEffect(() => {
        fetchPosts()
        console.log(123)
    }, [])

    return (
        <div>
            {!isPostsLoading ? (
                comments.map((c) => (
                    <div className="post__comment" key={c.id}>
                        <div>
                            <span>ID: {c.id}</span>
                            <span>EMAIL: {c.email}</span>
                        </div>
                        <span style={{ fontStyle: 'oblique' }}>
                            <b>NAME</b>: {c.name}
                        </span>
                        <span style={{ fontStyle: 'oblique' }}>
                            <b>COMMENT</b>: <br />
                            {c.body}
                        </span>
                    </div>
                ))
            ) : (
                <MyLoader />
            )}
        </div>
    )
}

export default PostComments
