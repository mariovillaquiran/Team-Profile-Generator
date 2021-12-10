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

          type: "input",
          name: "ManagerId",
          message: "What is your id?",

          type: "input",
          name: "ManagerEmail",
          message: "What is your email?",

          type: "input",
          name: "ManagerOffice",
          message: "What is your office number?",
        },
        // create the rest of the objects based on above
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
        createteam();
        //finish
        addengineer();
        //finish
        addintern();
        buildateam();
      });
  }
}
