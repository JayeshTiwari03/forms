import React, {useState, useEffect} from 'react'

const Reddit = (subreddit) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const url = `https://www.reddit.com/r/${subreddit}.json`
        fetch(url)
        .then(res => res.json())
        .then(json => {
            setPosts(json.data.children.map(
                c => c.data
            ))
        })
    }, [subreddit, setPosts])

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}

export default Reddit
