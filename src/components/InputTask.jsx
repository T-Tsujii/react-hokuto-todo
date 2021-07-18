import styles from './InputTask.module.scss';

export const InputTask = () => {
  return (
    <div className={styles.input_group}>
      <input className={styles.form_control} type="text" />
      <button className={styles.input_group_append}>登場</button>
    </div>
  );
};
