import styles from "./Post.module.css";
import { FaHeart, FaShareAlt } from "react-icons/fa";
const Post = ({ contents, date }) => {
  return (
    <>
      <p className={styles.postsContent}>{contents}</p>
      <ul className={styles.postMeta}>
        <li>
          <p className={styles.postMetaData}>
            <FaHeart />
            num
          </p>
        </li>
        <li>
          <p className={styles.postMetaData}>
            <FaShareAlt /> share
          </p>
        </li>
        <li>
          <p className={styles.postMetaData}>
            {new Intl.DateTimeFormat("ko-KR", {
              dateStyle: "short",
              timeStyle: "short",
            }).format(new Date(date))}
          </p>
        </li>
      </ul>
    </>
  );
};

export default Post;
