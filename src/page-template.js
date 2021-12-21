const generateteam = (team) => {
  const generatemanager = (manager) => {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.getname()}</h5>
    <p class="card-text">${manager.getid()}</p>
    <p class="card-text">${manager.getemail()}</p>
    <p class="card-text">${manager.getrole()}</p>
    <p class="card-text">${manager.getofficenumber()}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `;
  };
  const generateengineer = (engineer) => {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.getname()}</h5>
    <p class="card-text">${engineer.getid()}</p>
    <p class="card-text">${engineer.getemail()}</p>
    <p class="card-text">${engineer.getrole()}</p>
    <p class="card-text">${engineer.getgithub()}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `;
  };
  const generateintern = (intern) => {
    return `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.getname()}</h5>
    <p class="card-text">${intern.getid()}</p>
    <p class="card-text">${intern.getemail()}</p>
    <p class="card-text">${intern.getrole()}</p>
    <p class="card-text">${intern.getschool()}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `;
  };


  // create one for each based on above ^^
  const html = [];
  html.push(
    team
      .filter((employee) => employee.getrole() === "Manager")
      .map((manager) => generatemanager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getrole() === "Engineer")
      .map((engineer) => generateengineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getrole() === "Intern")
      .map((intern) => generateintern(intern))
      .join("")
  );

  return html.join("");
};
// do the same above for the rest of HTML
module.exports = (team) => {
  return `

    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css"/>
        </head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading redTheme">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
            ${generateteam(team)}
            </div>
        </div>
    </div>
</body>

</html>


    `;
};
