const apiKey = '723655eeeb825c7de5409fbf';
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

document.addEventListener('DOMContentLoaded', () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const currencyKeys = Object.keys(data.conversion_rates);
            const fromCurrency = document.getElementById('fromCurrency');
            const toCurrency = document.getElementById('toCurrency');

            currencyKeys.forEach(currency => {
                const option1 = document.createElement('option');
                option1.value = currency;
                option1.textContent = currency;
                fromCurrency.appendChild(option1);

                const option2 = document.createElement('option');
                option2.value = currency;
                option2.textContent = currency;
                toCurrency.appendChild(option2);
            });
        })
        .catch(error => console.error('Error fetching exchange rates:', error));
});

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (!amount || isNaN(amount)) {
        alert('Please enter a valid amount');
        return;
    }

    const queryUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

    fetch(queryUrl)
        .then(response => response.json())
        .then(data => {
            const rate = data.conversion_rate;
            const result = amount * rate;
            document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => console.error('Error converting currency:', error));
}
