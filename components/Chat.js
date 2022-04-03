import styles from '../styles/Chat.module.css';

const Chat = ({ message, type, total, current, refer }) => {
  return (
    <div
      className={`${styles.chat} ${type === 'bot' && styles.botMessage}`}
      ref={current === total - 1 ? refer : null}
    >
      <div className={styles.innerChat}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Chat;
