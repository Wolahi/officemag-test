import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './RadioGroup.module.scss';

export type RadioOption = {
  label: string;
  value: string;
};

type RadioGroupProps = {
  value?: string;
  onChange: (value: string) => void;
  options: RadioOption[];
  name: string;
  error?: boolean;
  label?: string;
};

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ value, onChange, options, name, error, label }, ref) => {
    return (
      <div ref={ref} className={styles.wrapper}>
        {label && <div className={styles.label}>{label}</div>}

        <div className={styles.group}>
          {options.map(option => (
            <label key={option.value} className={styles.item}>
              <input
                type='radio'
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={() => onChange(option.value)}
                className={clsx(styles.radio, {
                  [styles.error]: error,
                })}
              />

              <span className={styles.dot} />
              <span className={styles.text}>{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    );
  }
);
