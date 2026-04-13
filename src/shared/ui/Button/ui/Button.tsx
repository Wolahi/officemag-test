import type { ButtonView } from '@/shared/lib/types';
import clsx from 'clsx';
import { forwardRef, type ReactNode } from 'react';
import styles from './Button.module.scss';

export interface IButtonProps {
  view?: ButtonView;
  prefixIcon?: ReactNode;
}

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & IButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ view = 'primary', className, prefixIcon, children, ...props }, ref) => {
    const classNameClsx = clsx(styles.button, styles[view], className);

    return (
      <button {...props} className={classNameClsx} ref={ref}>
        {prefixIcon && <span className={styles.icon}>{prefixIcon}</span>}
        {children}
      </button>
    );
  }
);
