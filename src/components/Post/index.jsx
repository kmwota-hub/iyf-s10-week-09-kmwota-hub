import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Card, Button } from '../shared';
import styles from './Post.module.css';

export const PostCard = ({ post }) => {
    const [liked, setLiked] = useState(false);

    return (
        <Card hover className={styles.postCard}>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <p className={styles.postBody}>{post.body}</p>
            <div className={styles.postFooter}>
                <button
                    className={`${styles.likeButton} ${liked ? styles.liked : ''}`}
                    onClick={(e) => {
                        e.preventDefault();
                        setLiked(!liked);
                    }}
                >
                    <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
                    <span>{liked ? 'Liked' : 'Like'}</span>
                </button>
                <Link to={`/posts/${post.id}`}>
                    <Button variant="secondary">Read More</Button>
                </Link>
            </div>
        </Card>
    );
};

export const PostList = ({ posts, loading, error }) => {
    if (loading) return <div className={styles.loading}>Loading posts...</div>;
    if (error) return <div className={styles.error}>Error: {error}</div>;
    if (!posts || posts.length === 0) return <div className={styles.loading}>No posts found.</div>;

    return (
        <div className={styles.postList}>
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};
