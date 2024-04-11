

let showData = (data) => { 
    document.getElementById('box').innerHTML = `
    <div>
    <h2>${Math.round(data.main.temp)}</h2>
    <p>${data.name}, ${data.sys.country}</p>
    </div>`
}



let getData = async (city) => { 
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=8cad9935800e8b71f613e6dfa1d5acdb&q=${city}&units=metric`)
    let data = await response.json()
    console.log(data)
    showData(data)
}
const handleSearch = (e) => { 
    e.preventDefault();
    let val = document.getElementById("searchInput").value
    // console.log(val)
    getData(val)

}


document.getElementById('form').addEventListener('submit', handleSearch)







