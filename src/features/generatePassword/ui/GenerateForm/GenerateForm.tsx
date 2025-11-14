import cls from './GenerateForm.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { ChangeEvent, useCallback } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';

export interface GenerateFormProps {
    className?: string;
    onSuccess: () => void;
}

const GenerateForm = ({ className, onSuccess }: GenerateFormProps) => {
    // const username = useSelector(getLoginUsername);
    // const password = useSelector(getLoginPassword);
    // const isLoading = useSelector(getLoginIsLoading);
    // const error = useSelector(getLoginError);

    // const onChangeUsername = useCallback(
    //     (value: string) => {
    //         dispatch(loginActions.setUsername(value));
    //     },
    //     [dispatch]
    // );

    // const onChangePassword = useCallback(
    //     (event: ChangeEvent<HTMLInputElement>) => {
    //         dispatch(loginActions.setPassword(event.target.value));
    //     },
    //     [dispatch]
    // );

    // const onLoginClick = useCallback(async () => {
    //     const result = await dispatch(loginByUsername({ username, password }));

    //     if (result.meta.requestStatus === 'fulfilled') {
    //         onSuccess();
    //     }
    // }, [dispatch, username, password, onSuccess]);

    return (
        <div className={classNames(cls.GenerateForm, {}, [className])}>
            <Text title={'Генерация пароля'} />
            {/* {error && (
                <div>
                    {
                        <Text
                            text={t('Вы ввели неверный логин или пароль')}
                            theme={TextTheme.ERROR}
                        />
                    }
                </div>
            )} */}

            <Input
                autofocus
                type='text'
                className={cls.input}
                placeholder={'Введите username'}
                onChange={() => {}}
                value={''}
            />
            <Input
                type='text'
                className={cls.input}
                placeholder={'Введите password'}
                onChange={() => {}}
                value={''}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={() => {}}
                disabled={false}
            >
                Войти
            </Button>
        </div>
    );
};

export default GenerateForm;
