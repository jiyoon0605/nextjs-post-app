import styles from "./PostForm.module.css";

const PostForm = () => {
  return (
    <form>
      <textarea className={styles.formContent}></textarea>
      <button className={styles.formButton}>Add New Post!</button>
    </form>
  );
};

export default PostForm;
