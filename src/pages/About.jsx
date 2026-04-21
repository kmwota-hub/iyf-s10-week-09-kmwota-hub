import React from "react";
import { Layout } from "../components/Layout";
import { Card } from "../components/shared";
import styles from "./Pages.module.css";

const About = () => {
  return (
    <Layout>
      <Card className={styles.aboutContent}>
        <h1>About CommunityHub</h1>
        <p>
          CommunityHub is a space where developers come together to share ideas,
          learn faster, and grow through collaboration. Whether you're just
          starting out or refining advanced skills, you'll find a community that
          supports your journey.
        </p>
        <h2>Our Vision</h2>
        <p>
          We believe that knowledge should be accessible and that community is
          the key to becoming a better developer. By sharing our experiences,
          challenges, and successes, we all move forward.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Browse hundreds of posts on various topics.</li>
          <li>Engage with the community through likes and comments.</li>
          <li>Share your own knowledge by creating new posts.</li>
          <li>Persist your contributions locally as you learn.</li>
        </ul>

        <h2>Tech Stack</h2>
        <p>This application is built with modern web technologies:</p>
        <ul>
          <li>
            <strong>React:</strong> For building a dynamic user interface.
          </li>
          <li>
            <strong>React Router:</strong> For seamless navigation between
            pages.
          </li>
          <li>
            <strong>CSS Modules:</strong> For modular and maintainable styling.
          </li>
          <li>
            <strong>JSONPlaceholder API:</strong> For fetching community data.
          </li>
        </ul>
      </Card>
    </Layout>
  );
};

export default About;
