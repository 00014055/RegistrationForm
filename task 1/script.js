document.addEventListener('DOMContentLoaded', () => {
//fetch() инициирует запрос к указанному URL -> API CoinGecko
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1')
        .then(response => response.json())
        .then(data => displayTable(data))
        .catch(error => console.error('Error fetching data:', error));
});

//функция displayTable() создает строки таблицы и добавляет их в тело таблицы
function displayTable(data) {
    const tableBody = document.querySelector('#crypto-table tbody');

    data.forEach((coin, index) => {
        const row = document.createElement('tr');

        if (index < 5) {
            row.classList.add('blue-background');
        }
        if (coin.symbol === 'usdt') {
            row.classList.add('green-background');
        }

//созданы ячейки <td> для каждой строки(id,symbol,name)
        const idCell = document.createElement('td');
        idCell.textContent = coin.id;
        row.appendChild(idCell);

        const symbolCell = document.createElement('td');
        symbolCell.textContent = coin.symbol;
        row.appendChild(symbolCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = coin.name;
        row.appendChild(nameCell);

        tableBody.appendChild(row);
    });
}
