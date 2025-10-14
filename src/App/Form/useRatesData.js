import {useState, useEffect} from "react";


export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("currency-converter-2-react/currencies.json");
           
           if (!response.ok) {
            throw new Error(response.statusText);
           }

           const {data, meta} = await response.json();
           console.log(data);

              setRatesData({
                state: "success",
                rates: data,
                date: meta,
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


