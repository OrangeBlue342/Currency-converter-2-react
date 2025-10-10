
import './index.css';
import { WrapperApp } from './styled';
import { Form } from './Form';
import { Clock } from './Clock';

function App() {
    return (
        
        <WrapperApp>
            <Clock />
            <Form /> 
        </WrapperApp>
        
    );
}

export default App;