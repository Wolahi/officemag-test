import clsx from 'clsx';
import { forwardRef, type TextareaHTMLAttributes } from 'react';
import styles from './TextArea.module.scss';

type TextAreaView = 'primary' | 'secondary' | 'tertiary';

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  view?: TextAreaView;
  error?: boolean;
  label?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ view = 'primary', className, error, label, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        {label && <div className={styles.label}>{label}</div>}

        <textarea
          {...props}
          ref={ref}
          className={clsx(
            styles.textarea,
            styles[view],
            {
              [styles.error]: error,
            },
            className
          )}
        />
      </div>
    );
  }
);
