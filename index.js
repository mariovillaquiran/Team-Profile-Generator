const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");
const teammember = [];
const idarray = [];

function appmenu() {
  function createmanager() {
    inquirer
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
          answers.ManagerId,
          answers.ManagerEmail,
          answers.ManagerOffice
        );
        teammember.push(manager);
        idarray.push(answers.ManagerId);
        createteam()
      });
  }
  function createteam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "anyoneelse",
          message: "Do you want to add an additional member?",
          choices: ["Intern", "Engineer", "N/A"],
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

  function addengineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "EngineerName",
          message: "What is your name?",
        },

        { type: "input", name: "EngineerId", message: "What is your id?" },

        {
          type: "input",
          name: "EngineerEmail",
          message: "What is your email?",
        },

        {
          type: "input",
          name: "EngineerGitHub",
          message: "What is your GitHub?",
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.EngineerName,
          answers.EngineerId,
          answers.EngineerEmail,
          answers.EngineerGitHub
        );
        teammember.push(engineer);
        idarray.push(answers.EngineerId);
        createteam()
      });
  }
    function addintern() {
      inquirer
        .prompt([
          {
            type: "input",
            name: "InternName",
            message: "What is your name?",
          },

          { type: "input", name: "InternId", message: "What is your id?" },

          {
            type: "input",
            name: "InternEmail",
            message: "What is your email?",
          },

          {
            type: "input",
            name: "InternSchool",
            message: "What school do you go to?",
          },
        ])
        .then((answers) => {
          const intern = new Intern(
            answers.InternName,
            answers.InternId,
            answers.InternEmail,
            answers.InternSchool
          );
          teammember.push(intern);
          idarray.push(answers.InternId);
          createteam()
        });
    }
  
  function buildteam(){
      if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)  
      }
      fs.writeFileSync(outputPath, render(teammember), "utf-8")
  }
  createmanager()
}
appmenu()