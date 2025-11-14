import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import GenerateForm from '../GenerateForm/GenerateForm';

interface GenerateModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const GenerateModal = ({
    className,
    isOpen,
    onClose,
}: GenerateModalProps) => {
    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            {/* <Suspense fallback={<Loader />}> */}
            <GenerateForm onSuccess={onClose} />
            {/* </Suspense> */}
        </Modal>
    );
};
