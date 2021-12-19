const generateteam = team => {
const generatemanager = manager => {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.getname()}</h5>
    //fill in with questions below 
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
}
// create one for each based on above ^^
const html = []
html.push(team
    .filter(employee => employee.getrole()==="Manager")
    .map(manager => generatemanager(manager))
    )
return html.join("")
}
    // do the same above for the rest of HTML 
module.export = team => {
    return `
    // create HTML page with proper bootstrap 
    `
}