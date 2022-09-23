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
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    td.innerText = dataJSON1.dataset.dimension.Alue.category.label[key]
    tr.appendChild(td)

    let td2 = document.createElement("td")
    td2.innerText = dataJSON1.dataset.value[index]
    tr.appendChild(td2)

    let td3 = document.createElement("td")
    td3.innerText = dataJSON2.dataset.value[index]
    tr.appendChild(td3)

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