import React, { useState, useMemo } from 'react';
import { Layout } from '../components/Layout';
import { Input, Card } from '../components/shared';
import { PostList } from '../components/Post';
import useFetch from '../hooks/useFetch';
import styles from './Pages.module.css';

const Posts = ({ localPosts = [] }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const { data: apiPosts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

    const allPosts = useMemo(() => {
        const combined = [...localPosts, ...(apiPosts || [])];
        if (!searchQuery) return combined;

        return combined.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.body.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [apiPosts, localPosts, searchQuery]);

    return (
        <Layout>
            <div className={styles.sectionHeader}>
                <h1 className={styles.sectionTitle}>Community Posts</h1>
                <span>{allPosts.length} posts found</span>
            </div>

            <div className={styles.searchBar}>
                <Input
                    type="text"
                    placeholder="Search posts by title or content..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <PostList posts={allPosts} loading={loading} error={error} />
        </Layout>
    );
};

export default Posts;
