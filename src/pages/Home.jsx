import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Card, Button } from '../components/shared';
import { PostList } from '../components/Post';
import useFetch from '../hooks/useFetch';
import styles from './Pages.module.css';

const Home = () => {
    const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=4');

    const SidebarContent = (
        <>
            <Card>
                <h3>Community Stats</h3>
                <p>1,234 Active Members</p>
                <p>567 Posts Today</p>
            </Card>
            <Card>
                <h3>Trending Topics</h3>
                <ul>
                    <li>#ReactJS</li>
                    <li>#WebDev</li>
                    <li>#Community</li>
                </ul>
            </Card>
        </>
    );

    return (
        <Layout sidebar={SidebarContent}>
            <section className={styles.hero}>
                <h1>Welcome to CommunityHub</h1>
                <p>Discover ideas, level up your skills, and collaborate with developers pushing boundaries worldwide.</p>
                <div style={{ marginTop: '2rem' }}>
                    <Link to="/posts">
                        <Button size="lg">Explore Posts</Button>
                    </Link>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Recent Posts</h2>
                    <Link to="/posts" className={styles.link}>View All</Link>
                </div>
                <PostList posts={posts} loading={loading} error={error} />
            </section>
        </Layout>
    );
};

export default Home;
