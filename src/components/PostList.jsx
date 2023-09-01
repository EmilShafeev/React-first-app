import React from 'react'
import PostItem from './PostItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const PostList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return <h1 style={{ textAlign: 'center' }}> Посты не найдены </h1>
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            <TransitionGroup>
                {posts.map((post) => (
                    <CSSTransition
                        key={post.id}
                        classNames="post"
                        timeout={500}
                    >
                        <PostItem
                            number={post.id}
                            post={post}
                            key={post.id}
                            remove={remove}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}

export default PostList
