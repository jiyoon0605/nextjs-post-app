import styles from "./Post.module.css";
import { FaHeart, FaShareAlt } from "react-icons/fa";
const Post = ({ contents, date }) => {
  return (
    <div className={styles.postBox}>
      <p className={styles.postsContent}>{contents}</p>
      <p className={styles.postMetaData}>
        {new Intl.DateTimeFormat("ko-KR", {
          dateStyle: "short",
          timeStyle: "short",
        }).format(new Date(date))}
      </p>
    </div>
  );
};

export default Post;
