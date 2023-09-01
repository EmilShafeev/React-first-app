import { useMemo } from 'react'

export const useSortedPosts = (posts, sort) =>
    useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) =>
            post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        )
    }, [query, sortedPosts])

    return sortedAndSearchedPosts
}
