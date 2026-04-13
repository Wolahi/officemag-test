import { Controller, useForm } from 'react-hook-form';
import { testFormSchema, type TestFormType } from '../config/testSchema';
import {
  Button,
  Checkbox,
  ColorPicker,
  Input,
  RadioGroup,
  TextArea,
  Typography,
} from '@/shared/ui';
import styles from './TestForm.module.scss';
import { zodResolver } from '@hookform/resolvers/zod';

const TestForm = () => {
  const { handleSubmit, control } = useForm<TestFormType>({
    resolver: zodResolver(testFormSchema),
    defaultValues: {
      name: '',
      color: '',
      radio: '',
    },
  });

  const onSubmit = (data: TestFormType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
      <Typography type='h2'>Заполните поля</Typography>
      <Controller
        name='name'
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <div className={styles.field}>
            <Typography>Имя</Typography>
            <Input
              value={value}
              onChange={e => onChange(e.target.value)}
              error={!!error?.message}
            />
            {error?.message && (
              <Typography type='error'>{error?.message}</Typography>
            )}
          </div>
        )}
      />
      <Controller
        name='color'
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <div className={styles.field}>
            <Typography>Цвет вашего настроения</Typography>
            <ColorPicker
              value={value}
              onChange={e => onChange(e.target.value)}
              error={!!error?.message}
            />
            {error?.message && (
              <Typography type='error'>{error?.message}</Typography>
            )}
          </div>
        )}
      />
      <Controller
        name='descr'
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <div className={styles.field}>
            <Typography>Коментарий</Typography>
            <TextArea
              value={value}
              onChange={e => onChange(e.target.value)}
              error={!!error?.message}
            />
            {error?.message && (
              <Typography type='error'>{error?.message}</Typography>
            )}
          </div>
        )}
      />
      <Controller
        name='radio'
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <div className={styles.field}>
            <Typography>Выберите вариант:</Typography>
            <RadioGroup
              value={value}
              name='radio'
              onChange={onChange}
              options={[
                {
                  label: 'Да',
                  value: 'Да',
                },
                {
                  label: 'Нет',
                  value: 'Нет',
                },
              ]}
              error={!!error?.message}
            />
            {error?.message && (
              <Typography type='error'>{error?.message}</Typography>
            )}
          </div>
        )}
      />
      <Controller
        name='checkbox'
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <div className={styles.field}>
            <Checkbox
              checked={value}
              onChange={onChange}
              error={!!error?.message}
              label={'Я готов на все'}
            />
            {error?.message && (
              <Typography type='error'>{error?.message}</Typography>
            )}
          </div>
        )}
      />
      <Button type='submit'>Сохранить</Button>
    </form>
  );
};

export default TestForm;
