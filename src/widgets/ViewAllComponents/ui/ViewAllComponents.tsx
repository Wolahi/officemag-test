import { Button, Typography } from '@/shared/ui';
import styles from './ViewAllComponents.module.scss';
import { TYPOGRAPHY_MAP } from '../config/typograpyConfig';
import { BUTTONS_MAP } from '../config/buttonConfig';
import { TestForm, TestSchema } from '@/features';

const ViewAllComponents = () => {
  return (
    <section className={styles.root}>
      <div className={styles.block}>
        <Typography type='h2'>Все возможные типы текста</Typography>
        {TYPOGRAPHY_MAP.map(typo => (
          <Typography
            key={typo.label}
            type={typo.type}
            component={typo.component}
          >
            {typo.text}
          </Typography>
        ))}
      </div>
      <div className={styles.blockButtons}>
        {BUTTONS_MAP.map((button, index) => (
          <Button {...button} key={`${button.label}-${index}`}>
            {button.children}
          </Button>
        ))}
      </div>
      <div className={styles.block}>
        <TestForm />
      </div>
      <div className={styles.block}>
        <TestSchema />
      </div>
    </section>
  );
};

export default ViewAllComponents;
