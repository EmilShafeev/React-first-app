import React from 'react'
import MyButton from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'

const PostItem = (props) => {
    const navigate = useNavigate()
    return (
        <div className="post">
            <div className="post__content">
                <strong>
                    {props.number}. {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => navigate(props.post.id.toString())}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.post.id)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

export default PostItem
