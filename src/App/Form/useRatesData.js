import {useState, useEffect} from "react";


export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("currency-converter-2-react/public/currencies.json");
           
           if (!response.ok) {
            throw new Error(response.statusText);
           }

           const data = await response.json();
           console.log(data);

              setRatesData({
                state: "success",
                rates: value,
                date: data,
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


