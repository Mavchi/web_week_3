import "./styles.css";

const dataTable = document.querySelector("table tbody")

async function getData() {
  const url1 = "https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff"
  const dataPromise = await fetch(url1)
  const dataJSON = await dataPromise.json()

  //console.log(dataJSON.dataset.dimension.Alue.category.label)
  let index = 0
  for (let key in dataJSON.dataset.dimension.Alue.category.label) {
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    td.innerText = dataJSON.dataset.dimension.Alue.category.label[key]
    tr.appendChild(td)

    let td2 = document.createElement("td")
    td2.innerText = dataJSON.dataset.value[index]
    tr.appendChild(td2)

    dataTable.appendChild(tr)
    index += 1

    //console.log(dataJSON.dataset.dimension.Alue.category.label[key])
  }

  /*
  dataJSON.dataset.dimension.Alue.category.label.forEach( (country, index) => {
    console.log(country)
    console.log(dataJSON.dataset.value[index])
  })
  */
}

getData()