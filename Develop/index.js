// TODO: Include packages needed for this application
//inquirer is a module(file ) of node that allows you to use functions to create prompts and interact with user//
//remember require is like adding a script tag? and think import when you see require//

const inquirer = require('inquirer');//inthis case what we put in require should match the const name



// TODO: Create an array of questions for user input
//question object is part of inquirer module//it is hass, meanig it has KEY-VALUE pairs
const questions = [
{
    type:'input',
    name:'title',
    message:'What is the title of your application?'
},
{
    type:'input',
    name:'description',
    message:'Provide a description of your application',
},
{
    type:'input',
    name:'installation',
    message:'How should users install your application?',
},
{
    type:'input',
    name:'usage',
    message:'Provide instructions on how your application can be used?',
},
{
    type:'list',//chose list bc there are various licenses to choose from//
    name:'license',
    message:'Choose a license for your application: ',
    choices:['MIT','Apache-2.0','GPL-3.0','None']//Choices array or a function returning a choices array. If defined as a function, the first parameter will be the current inquirer session answers. //
},
{
    type:'input',
    name:'contributing',
    message:'How can others contribute to you appication?',
},
{
    type:'input',
    name:'tests',
    message:'How should users run tests for you application?',
    default:'You can run tests by executing the following command: npm test',
},
];
    
    

// TODO: Create a function to write README file
// remember prior to function we have to bring in the fs module of node to use writeTo
//this function takes in two arguments, fileName and Data
const fs= require('fs');
const generateMarkdown = require('./utilis/generateMarkdown');

//const { default: inquirer } = require('inquirer');
//the parameters are fileName: name of file to write to and data:the data to be written into the file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err)=> {//remember writeFile takes in 3 parameters)
    err? console.log('Error writing README file:',err): console.log('README file was created successfully!');
     });
}

// TODO: Create a function to initialize app
function init() {
 inquirer
 //prompt initiates the process of prompting the user with question defined in 'questions' array
 .prompt(questions)//.prompt is a method of inquirer that is being applied ot questioin object(this is a object of inquirer!)
 //remeber the prompt method returns a PROMISE object. a promise is made b/w prompt and then!
//.then is method called when user has answered all questions.//it recieves the user's answers as a parameter(answers), then you can proceed to handle these answers
 .then(answers=>{//markdown content for READme is generated based on users' answers to the questions
    const readmeContent= generateMarkdown(answers);
    writeToFile('README.md',readmeContent);//calling the writeToFile func f/o earlier to write genrated content to a file named 'README.md'
 })
 .catch(error=>{
    console.log('Error',error);
 });

}
// Function call to initialize app
init(); //that starts to ask the questions 
