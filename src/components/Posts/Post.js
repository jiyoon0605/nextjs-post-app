import styles from "./Post.module.css";
const Post = ({ contents, date }) => {
  console.log(styles.postsContent);
  return (
    <>
      <p className={styles.postsContent}>{contents}</p>
      <p className={styles.postsDate}>{date}</p>
    </>
  );
};

export default Post;
