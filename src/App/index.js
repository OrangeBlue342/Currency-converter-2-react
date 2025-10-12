
import './index.css';
import { WrapperApp } from './styled';
import {GlobalStyle} from './GlobalStyle';
import { Form } from './Form';
import { Clock } from './Form/Clock';

function App() {
    return (
       
        <WrapperApp>
             <GlobalStyle />
                  <Form>
                    <Clock  />
                  </Form> 
        </WrapperApp>
        
    );
}

export default App;