import {useState, useEffect} from "react";
import CurrencyAPI from '@everapi/currencyapi-js';

const currencyapi = new CurrencyAPI('http://api.currencyapi.com/v3/latest?apikey=cur_live_wAhEQSa3g3gSNXiEYw0mOOAajAjYdsUhj7ENhJkS&currencies=EUR%2CUSD%2CCHF%2CGBP&base_currency=PLN');


export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch('http://api.currencyapi.com/v3/latest?apikey=cur_live_wAhEQSa3g3gSNXiEYw0mOOAajAjYdsUhj7ENhJkS&currencies=EUR%2CUSD%2CCHF%2CGBP&base_currency=PLN');
           
           if (!response.ok) {
            throw new Error(response.statusText);
           }

           const {rates, date} = await response.json();

              setRatesData({
                state: "success",
                rates,
                date,
              });

            } catch {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};
