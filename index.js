fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
.then(response => response.json())
.then(data => {
    console.log(data);
    let tbody = document.getElementById('tbody');
    let changeCell = document.createElement('td');
    for(let i = 0; i < data.length; i++){
        let tr = `<tr>
                
                    <td><img src="${data[i].image}" width="25px" height="25px">  ${data[i].name}</td>
                    <td>${data[i].symbol}</td>
                    <td>$ ${data[i].current_price}</td>
                    <td>$ ${data[i].total_volume}</td>
                    <td class="${data[i].price_change_percentage_24h > 0 ? "text-success" : "text-danger"}">${parseFloat(
                        data[i].price_change_percentage_24h    ).toFixed(2)}%</td>
                        <td> Mkt Cap : $ ${data[i].market_cap} </td>
                </tr>`;
        tbody.innerHTML += tr;
      
    }
})