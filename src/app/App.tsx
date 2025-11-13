import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTheme } from './providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar/ui/Navbar';

function App() {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
        </div>
    );
}

export default App;
