const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = require(__dirname, "output");
const outputPath = require(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");
const { create } = require("domain");
const teammember = [];
const idarray = [];

function appmenu() {
  function createmanager() {
    inquire
      .prompt([
        {
          type: "input",
          name: "ManagerName",
          message: "What is your name?",
        },

        { type: "input", name: "ManagerId", message: "What is your id?" },

        { type: "input", name: "ManagerEmail", message: "What is your email?" },

        {
          type: "input",
          name: "ManagerOffice",
          message: "What is your office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.ManagerName,
          ManagerID,
          ManagerEmail,
          ManagerOffice
        );
        teammember.push(manager);
        idarray.push(answers.managerid);
      });
  }
  function createteam() {
    inquire
      .prompt([
        {
          type: "list",
          name: "anyoneelse",
          message: "Do you want to add an additional member?",
          choices: ["Intern", "Engineer", "no"],
        },
      ])
      .then((userchoice) => {
        switch (userchoice.anyoneelse) {
          case "Intern":
            addintern();
            break;
          case "Engineer":
            addengineer();
            break;
          default:
            buildteam();
        }
      });
  }

  // insert new function (see above)
}
