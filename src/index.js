import "./styles.css";

const dataTable = document.querySelector("table tbody")

async function getData() {
  const url1 = "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff"
  const url2 = "https://statfin.stat.fi/PxWeb/sq/5e288b40-f8c8-4f1e-b3b0-61b86ce5c065"
  const dataPromise1 = await fetch(url1)
  const dataJSON1 = await dataPromise1.json()

  const dataPromise2 = await fetch(url2)
  const dataJSON2 = await dataPromise2.json()

  //console.log(dataJSON2.dataset.value)
  let index = 0
  for (let key in dataJSON1.dataset.dimension.Alue.category.label) {
    // Municipality
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    td.innerText = dataJSON1.dataset.dimension.Alue.category.label[key]
    tr.appendChild(td)

    // Population
    let td2 = document.createElement("td")
    td2.innerText = dataJSON1.dataset.value[index]
    tr.appendChild(td2)

    // Employment
    let td3 = document.createElement("td")
    td3.innerText = dataJSON2.dataset.value[index]
    tr.appendChild(td3)

    // Employment-%
    let td4 = document.createElement("td")
    td4.innerText = (dataJSON2.dataset.value[index] / dataJSON1.dataset.value[index] * 100 ).toFixed(2)
    // The rows with over 45% employment should have a background color of “#abffbd”
    if (td4.innerText > 45) {
      tr.style.backgroundColor = "#abffbd"
    }
    // The rows with under 25% employment should have a background color of “#ff9e9e”
    if (td4.innerText < 25) {
      tr.style.backgroundColor = "#ff9e9e"
    }
    tr.appendChild(td4)

    dataTable.appendChild(tr)
    index += 1

    //console.log(dataJSON1.dataset.dimension.Alue.category.label[key])
  }

  /*
  dataJSON1.dataset.dimension.Alue.category.label.forEach( (country, index) => {
    console.log(country)
    console.log(dataJSON1.dataset.value[index])
  })
  */
}

getData()