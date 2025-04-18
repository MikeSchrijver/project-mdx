import React from "react";

import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";
import { getBlogPostList } from "@/helpers/file-helpers";

async function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      <div className={styles.blogList}>
        {await getBlogPostList().then((posts) =>
          posts.map((post) => (
            <BlogSummaryCard
              key={post.slug}
              title={post.title}
              description={post.description}
              publishedOn={post.publishedOn}
              slug={post.slug}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
