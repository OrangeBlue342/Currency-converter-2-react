 import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { LabelText, Formfield, Fieldset, Legend, Value, Calcule } from "./styled";

export const Form = () => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null); 

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ short }) => short === currency)?.rate;

        if (!rate) {
            console.error("Nie znaleziono kursu dla wybranej waluty.");
            return;
        }

        if (amount <= 0) {
            console.error("Kwota musi być większa niż zero.");
            return;
        }

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (
    <Formfield onSubmit={onSubmit}>
    
        <Fieldset>
            <Legend>Kalkulator walut</Legend>
            <p>Poznaj aktualne kursy złotego</p>
            <p>
            <label>
                <LabelText>Kwota</LabelText>
                    <input 
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    className="Numbertoconverse" 
                    placeholder="Wpisz kwotę w PLN"
                    type="number"
                    required 
                    step="any" 
                    min="1"/>
                    </label>
                    </p>
                    <p>
                    <label> 
                        <Value>Waluta</Value>
                <select  
                value={currency}
                        onChange={({ target }) => setCurrency(target.value)}>
                     {currencies.map((currency) => (
                            <option key={currency.short} value={currency.short}>
                                {currency.name}
                            </option>
                        ))}
                </select>
            </label>
        </p>
    </Fieldset>
        <p>
            <Calcule type="submit">Przelicz</Calcule>
        </p>
        {result && <Result result={result} />}

</Formfield>); 
};

export default Form;