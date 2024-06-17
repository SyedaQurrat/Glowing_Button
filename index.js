import inquirer from 'inquirer';
import fs from 'fs';
async function askName() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
    ]);
    const upperCaseName = answers.name.toUpperCase();
    const message = `EID MUBARAK, ${upperCaseName}!`;
    const scriptContent = `
        document.getElementById('greeting-button').innerText = "${message}";
    `;
    fs.writeFileSync('message.js', scriptContent);
    console.log('message.js file has been generated with your name.');
}
askName();
