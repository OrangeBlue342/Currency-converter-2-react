import React, { useState } from "react";

import {Clock} from  "./Clock";
import { Result } from "./Result";
import { LabelText, 
         Formfield, 
         Fieldset, 
         Legend, 
         Value, 
         Calcule } from "./styled";

import { useRatesData } from "./useRatesData";

export const Form = () => {
    const [result, setResult] = useState(null);
    const ratesData = useRatesData() 

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];


        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate[currency],
            currency,
        });
    };

    const [currency, setCurrency] = useState();
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };
        

    return (
    <Formfield onSubmit={onSubmit}>
    <Clock/>
        <Fieldset>
            <Legend>Kalkulator walut</Legend>
            <p>Poznaj aktualne kursy złotego</p>
            
            {ratesData.state === "loading" 
            ? (
                <p>
                 Seundka ...<br />Ładuję kursy walut z Europejskiego Banku Centralnego
                </p>
            )
        
            : ratesData.state === "error" ? (
                <p>
                    Hmmm... Coś poszło nie tak. Spróbuj ponownie później.
                </p>
            ) : (
             <>
            <p>
            <label>
                <LabelText>Kwota </LabelText>
                    <input 
                    value={amount}
                    placeholder="Wpisz kwotę w PLN"
                    type="number"
                    required 
                    step="any" 
                    min="1"
                    onChange={({ target }) => setAmount(target.value)}
                    />
                     <select
                     as="select"
                     value={currency}
                     onChange={({ target }) => setCurrency(target.value)}
                     >
                    {!!ratesData.rates && Object.keys(ratesData.rates).map(((currency) => (
                      
                       <option 
                        key={currency} 
                        value={currency}>
                            {currency}
                        </option>
                       
                    )))}
                     </select>
                    
                    </label>
                    </p>
                    <p>
                    <label> 
                        <Value>Waluta</Value>
                
            </label>
        </p>
        </>
         )}
    </Fieldset>
   
        <p>
            <Calcule type="submit">Przelicz</Calcule>
        </p>
        {result && <Result result={result} />}

</Formfield>); 
 
};

export default Form;


