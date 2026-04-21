import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Layout } from '../components/Layout';
import { Card, Button } from '../components/shared';
import useFetch from '../hooks/useFetch';
import styles from './Pages.module.css';

const PostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Check if it's a local post (ID might be a string or large number)
    // For simplicity, we'll try fetching from API first, if fail, we might check local store
    // but JSONPlaceholder IDs are 1-100.
    const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const { data: comments, loading: commentsLoading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

    if (loading) return <Layout><div className={styles.loading}>Loading post content...</div></Layout>;
    if (error) return (
        <Layout>
            <Card className={styles.error}>
                <h2>Post Not Found</h2>
                <p>We couldn't find the post you're looking for. It might have been deleted or never existed.</p>
                <Button onClick={() => navigate('/posts')}>Go Back to Posts</Button>
            </Card>
        </Layout>
    );

    return (
        <Layout>
            <div style={{ marginBottom: '2rem' }}>
                <Button variant="secondary" onClick={() => navigate(-1)} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ArrowLeft size={18} /> Back
                </Button>
            </div>

            <article className={styles.detailCard}>
                <div className={styles.detailHeader}>
                    <h1>{post.title}</h1>
                    <div className={styles.detailMeta}>
                        <span>Post ID: {post.id}</span>
                        <span>•</span>
                        <span>Author ID: {post.userId}</span>
                    </div>
                </div>

                <div className={styles.detailBody}>
                    <p>{post.body}</p>
                </div>

                <section className={styles.commentsSection}>
                    <h2>Comments</h2>
                    {commentsLoading ? (
                        <p>Loading comments...</p>
                    ) : (
                        comments?.map(comment => (
                            <Card key={comment.id} className={styles.commentCard}>
                                <p className={styles.commentName}>{comment.name}</p>
                                <p className={styles.commentEmail}>{comment.email}</p>
                                <p>{comment.body}</p>
                            </Card>
                        ))
                    )}
                </section>
            </article>
        </Layout>
    );
};

export default PostDetail;
