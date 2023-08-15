function convertCurrency() {
    amount = parseFloat(document.getElementById('amount').value);
    fromCurrency = document.getElementById('fromCurrency').value;
    toCurrency = document.getElementById('toCurrency').value;

    // Replace the following conversion rates with actual exchange rates.
    if(fromCurrency==null){
        alert("Enter From Box");
    }else if (toCurrency==null){
        alert("Enter To Box");
    } else {
        const exchangeRates = {
            USD: {
                USD: 1,
                EUR: 0.9,
                PHP:52.62,
                MYR: 4.52,
                TBH: 34.10,
                SGD: 1.32
            },
            EUR: {
                USD: 1.11,
                EUR: 1,
                PHP:60.81,
                MYR:5.03,
                TBH: 37.96,
                SGD: 1.47
            },
            PHP: {
                USD: 0.018,
                EUR: 0.016,
                PHP: 1,
                MYR: 0.083,
                TBH: 0.62,
                SGD: 0.024,
            },
            MYR: {
                USD: 0.22,
                EUR: 0.20,
                PHP: 12.07,
                MYR: 1,
                TBH: 7.54,
                SGD: 0.29,

            },
            TBH: {
                USD: 0.029,
                EUR: 0.026,
                PHP: 1.60,
                MYR: 0.13,
                TBH: 1,
                SGD: 0.039,

            },
            SGD: {
                USD: 0.76,
                EUR: 0.68,
                PHP: 41.28,
                MYR: 3.42,
                TBH: 25.78,
                SGD: 1,

            },
        };
    
        convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    
        resultElement = document.getElementById('result');
        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    }
}