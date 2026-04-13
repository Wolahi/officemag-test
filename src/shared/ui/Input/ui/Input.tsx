import clsx from 'clsx';
import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import styles from './Input.module.scss';

export interface IInputProps {
  view?: 'primary' | 'secondary' | 'tertiary';
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
  error?: boolean;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & IInputProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { view = 'primary', className, prefixIcon, suffixIcon, error, ...props },
    ref
  ) => {
    const classNameClsx = clsx(
      styles.input,
      styles[view],
      {
        [styles.error]: error,
      },
      className
    );

    return (
      <div className={styles.wrapper}>
        {prefixIcon && <span className={styles.prefix}>{prefixIcon}</span>}

        <input {...props} ref={ref} className={classNameClsx} />

        {suffixIcon && <span className={styles.suffix}>{suffixIcon}</span>}
      </div>
    );
  }
);
