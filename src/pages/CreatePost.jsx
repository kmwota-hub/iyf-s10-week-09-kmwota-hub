import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Card, Button, Input } from '../components/shared';
import styles from './Pages.module.css';

const CreatePost = ({ onAddPost }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !body) return;

        setIsSubmitting(true);

        // Simulate API delay
        setTimeout(() => {
            const newPost = {
                id: Date.now(), // Local unique ID
                title,
                body,
                userId: 1, // Default user
            };

            onAddPost(newPost);
            setIsSubmitting(false);
            navigate('/posts');
        }, 800);
    };

    return (
        <Layout>
            <Card className={styles.detailCard}>
                <div className={styles.detailHeader}>
                    <h1>Create New Post</h1>
                    <p>Share your thoughts with the CommunityHub members.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Post Title</label>
                        <Input
                            placeholder="Give your post a catchy title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Post Content</label>
                        <textarea
                            className={styles.textarea}
                            placeholder="What's on your mind?"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            required
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Creating...' : 'Publish Post'}
                        </Button>
                        <Button type="button" variant="secondary" onClick={() => navigate(-1)}>
                            Cancel
                        </Button>
                    </div>
                </form>
            </Card>
        </Layout>
    );
};

export default CreatePost;
