
import './index.css';
import { WrapperApp } from './styled';
import { Form } from './Form';
import { Clock } from './Form/Clock';

function App() {
    return (
        
        <WrapperApp>
           <Form>
            <Clock  />
            </Form> 
        </WrapperApp>
        
    );
}

export default App;