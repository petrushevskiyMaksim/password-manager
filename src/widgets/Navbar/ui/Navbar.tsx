import { memo, useCallback, useState } from 'react';
import cls from './Navbar.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { GenerateModal } from 'features/generatePassword/ui/GenerateModal/GenerateModal';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                size={ButtonSize.L}
                className={cls.links}
                onClick={onShowModal}
            >
                Сгенерировать новый пароль
            </Button>

            {/* {isAuthModal && ( */}
            <GenerateModal isOpen={isAuthModal} onClose={onCloseModal} />
            {/* // )} */}
        </header>
    );
});
