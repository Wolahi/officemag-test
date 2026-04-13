import clsx from 'clsx';
import { forwardRef, type InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.scss';

type CheckboxView = 'primary' | 'secondary' | 'tertiary';

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  view?: CheckboxView;
  label?: string;
  error?: boolean;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ view = 'primary', className, label, error, ...props }, ref) => {
    return (
      <label className={styles.wrapper}>
        <input
          {...props}
          ref={ref}
          type='checkbox'
          className={clsx(
            styles.checkbox,
            styles[view],
            {
              [styles.error]: error,
            },
            className
          )}
        />

        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  }
);
