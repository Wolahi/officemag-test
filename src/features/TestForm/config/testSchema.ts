import { z } from 'zod';

export const testFormSchema = z.object({
  name: z
    .string({ message: 'Имя обязательно' })
    .min(1, 'Имя обязательно')
    .max(50, 'Максимум 50 символов'),

  color: z.string().min(1, 'Цвет обязателен'),

  descr: z.string().optional(),

  radio: z
    .string({
      message: 'Выберите вариант',
    })
    .min(1, 'Выберите вариант'),

  checkbox: z.literal(true, {
    errorMap: () => ({
      message: 'Обязательно для продолжения',
    }),
  }),
});

export type TestFormType = z.infer<typeof testFormSchema>;
