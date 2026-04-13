import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './ColorPicker.module.scss';

type ColorPickerProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: boolean;
};

export const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        {label && <div className={styles.label}>{label}</div>}

        <input
          {...props}
          ref={ref}
          type='color'
          className={clsx(styles.picker, className, {
            [styles.error]: error,
          })}
        />
      </div>
    );
  }
);
