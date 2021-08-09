import Head from "next/head";
import { Post } from "../components/Posts";
import { PostForm } from "../components/PostForm";
import { Bio } from "../components/Bio";
import styles from "../styles/Home.module.scss";
import avatar from "../res/avatar.png";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import { getAllPosts, createPost } from "../lib/post";

export default function Home({ posts: defaultPosts }) {
  const [posts, updatedPost] = useState(defaultPosts);
  const { user, logIn, logOut } = useAuth();

  async function handleOnSubmit(data, e) {
    e.preventDefault();
    await createPost(data);
    const posts = await getAllPosts();
    updatedPost(posts);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user ? (
        <p>
          <button onClick={logOut}>logout</button>
        </p>
      ) : (
        <p>
          <button onClick={logIn}>login</button>
        </p>
      )}

      <main className={styles.main}>
        <Bio
          handshot={avatar.src}
          name="JiYoon Lee"
          tagline="learning nextJS"
          role="frone-end"
        />
        <h1 className={styles.title}>My Post</h1>
        <ul className={styles.posts}>
          {posts.map((post) => (
            <li key={post.id}>
              <Post contents={post.content} date={post.date} />
            </li>
          ))}
        </ul>
        {!user && <PostForm onSubmit={handleOnSubmit} />}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
