import type { TagComponent, TTypographyType } from '@/shared/lib/types';

export const TYPOGRAPHY_MAP: {
  label: string;
  type: TTypographyType;
  component: TagComponent;
  text: string;
}[] = [
  {
    label: 'H1',
    type: 'h1',
    component: 'h1',
    text: 'Heading 1',
  },
  {
    label: 'H2',
    type: 'h2',
    component: 'h2',
    text: 'Heading 2',
  },
  {
    label: 'H3',
    type: 'h3',
    component: 'h3',
    text: 'Heading 3',
  },
  {
    label: 'H4',
    type: 'h4',
    component: 'h4',
    text: 'Heading 4',
  },
  {
    label: 'H5',
    type: 'h5',
    component: 'h5',
    text: 'Heading 5',
  },
  {
    label: 'H6',
    type: 'h6',
    component: 'h6',
    text: 'Heading 6',
  },
  {
    label: 'Body',
    type: 'body',
    component: 'p',
    text: 'Regular body text',
  },
  {
    label: 'Body Bold',
    type: 'bodyBold',
    component: 'strong',
    text: 'Bold body text',
  },
  {
    label: 'Error',
    type: 'error',
    component: 'span',
    text: 'Error message',
  },
];
