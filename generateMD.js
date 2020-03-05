function generateMarkdown(answers) {
  return `# ${answers.Project}
    ## Description 
    /n
    ${answers.Description} 
    /n
    ## Installation
    /n 
    ${answers.installation}
  /n /n 
  ## Usage
  /n 
  ${answers.Usage}
  /n
  ## Contributors
  /n
  ${answers.Contributors}
  /n /n
  ##License
  ${answers.license} 
  /n  
  ${answers.Test}

  
  `;
}

exports.generateMarkdown = generateMarkdown;
