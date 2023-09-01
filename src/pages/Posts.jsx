import PostService from 'API/PostService'
import PostFilter from 'components/PostFilter'
import PostForm from 'components/PostForm'
import PostList from 'components/PostList'
import MyButton from 'components/UI/button/MyButton'
import MyLoader from 'components/UI/loader/MyLoader'
import MyModal from 'components/UI/modals/MyModal'
import MyPagination from 'components/UI/pagination/MyPagination'
import MySelect from 'components/UI/select/MySelect'
import { useFetching } from 'hooks/useFetching'
import { useObserver } from 'hooks/useObserver'
import { usePosts } from 'hooks/usePosts'
import { useEffect, useRef, useState } from 'react'
import { getPageCount } from 'utils/pages'

function Posts() {
    const [posts, setPosts] = useState([])
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState({ sort: '', query: '', limit: 2 })
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
        const responce = await PostService.getAll(filter.limit, page)
        setPosts([...posts, ...responce.data])
        const totalCount = responce.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, filter.limit))
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () =>
        setPage(page + 1)
    )

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (id) => {
        setPosts(posts.filter((x) => x.id !== id))
    }

    return (
        <div>
            <MyButton onClick={fetchPosts}>Подгрузить посты</MyButton>
            <MyButton
                style={{ marginTop: '30px' }}
                onClick={(e) => setModal(true)}
            >
                {' '}
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>

            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {postsError ? <div>{postsError}</div> : ''}
            <PostList
                posts={sortedAndSearchedPosts}
                title={'Посты по языкам'}
                remove={removePost}
            />
            {isPostsLoading ? <MyLoader /> : ''}
            <div
                style={{ height: '20px', backgroundColor: 'red' }}
                ref={lastElement}
            ></div>
            <MyPagination
                page={page}
                totalPages={totalPages}
                setPage={setPage}
            />
        </div>
    )
}

export default Posts
