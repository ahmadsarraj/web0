fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json()) 
.then(json =>{
    var content = `
    <div class="card" style="width: 18rem;">
  <img src="e765" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Ahmad</h5>
    <p class="card-text">capital</p>
    population
  </div>
</div>
    `
     for(let i = 0; i < json.length; i++){
var x = document.createElement('div')
var z = content.replace('e765',json[i].flag)
z = z.replace('Ahmad',json[i].name)
z = z.replace('capital',json[i].capital)
z = z.replace('population',json[i].population)
x.innerHTML = z
document.getElementById('ahmad').appendChild(x)
}
})
fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(json => {
  for (let i = 0; i < json.length; i++) {

    let x = document.createElement("option")
    x.innerHTML = json[i].name
    document.getElementById("countryNames").appendChild(x)

  }
})


//working flag and country name card function without covid info
function asia() {
  if(json[i].region == "Asia"){

  }
}
