import type {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from 'react';
import { createElement, forwardRef } from 'react';
import clsx from 'clsx';

import styles from './Typography.module.scss';
import type { TagComponent, TTypographyType } from '@/shared/lib/types';

export interface ITypographyProps {
  component?: TagComponent;
  type?: TTypographyType;
}

export const Typography = forwardRef<
  HTMLElement,
  PropsWithChildren<ITypographyProps> &
    DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
>(
  (
    {
      children,
      component = 'span',
      type = 'body',
      className: currentClassName,
      ...rest
    },
    ref
  ) => {
    const className = clsx(currentClassName, {
      [styles[`root_${type}`]]: type,
    });

    return createElement(component, { className, ref, ...rest }, children);
  }
);
