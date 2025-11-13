import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTheme } from './providers/ThemeProvider';

function App() {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Button size={ButtonSize.L}>Сгенерировать новый пароль</Button>
        </div>
    );
}

export default App;
