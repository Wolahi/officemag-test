import type { ButtonView } from '@/shared/lib/types';
import type { ReactNode } from 'react';
import TestIcon from '@/shared/assets/icons/TEST.svg?react';

export interface IButtonPreviewConfig {
  label: string;
  view: ButtonView;
  prefixIcon?: ReactNode;
  children: string;
  disabled?: boolean;
}

export const BUTTONS_MAP: IButtonPreviewConfig[] = [
  // PRIMARY (зелёные)
  {
    label: 'Primary',
    view: 'primary',
    children: 'Просмотреть',
  },
  {
    label: 'Primary Disabled',
    view: 'primary',
    children: 'Просмотреть',
    prefixIcon: <TestIcon />,
  },
  {
    label: 'Primary Disabled',
    view: 'primary',
    children: 'Просмотреть',
    disabled: true,
  },

  // SECONDARY (серые)
  {
    label: 'Secondary',
    view: 'secondary',
    children: 'Просмотреть',
  },
  {
    label: 'Secondary',
    view: 'secondary',
    children: 'Просмотреть',
    prefixIcon: <TestIcon />,
  },
  {
    label: 'Secondary Disabled',
    view: 'secondary',
    children: 'Просмотреть',
    disabled: true,
  },

  // DANGER (красные)
  {
    label: 'Danger',
    view: 'danger',
    children: 'Просмотреть',
  },
  {
    label: 'Danger',
    view: 'danger',
    children: 'Просмотреть',
    prefixIcon: <TestIcon />,
  },
  {
    label: 'Danger Disabled',
    view: 'danger',
    children: 'Просмотреть',
    disabled: true,
  },

  // TERTIARY
  {
    label: 'Tertiary',
    view: 'tertiary',
    children: 'Просмотреть',
  },
  {
    label: 'Tertiary',
    view: 'tertiary',
    children: 'Просмотреть',
    prefixIcon: <TestIcon />,
  },
  {
    label: 'Tertiary',
    view: 'tertiary',
    children: 'Просмотреть',
    disabled: true,
  },

  // BORDERED PRIMARY
  {
    label: 'Bordered Primary',
    view: 'bordered-primary',
    children: 'Просмотреть',
  },
  {
    label: 'Bordered Primary',
    view: 'bordered-primary',
    children: 'Просмотреть',
    prefixIcon: <TestIcon />,
  },
  {
    label: 'Bordered Primary',
    view: 'bordered-primary',
    children: 'Просмотреть',
    disabled: true,
  },

  // BORDERED DANGER
  {
    label: 'Bordered Danger',
    view: 'bordered-danger',
    children: 'Просмотреть',
  },
  {
    label: 'Bordered Danger',
    view: 'bordered-danger',
    children: 'Просмотреть',
    prefixIcon: <TestIcon />,
  },
  {
    label: 'Bordered Danger',
    view: 'bordered-danger',
    children: 'Просмотреть',
    disabled: true,
  },
];
