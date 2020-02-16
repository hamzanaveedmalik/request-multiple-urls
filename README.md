# request-multiple-urls

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/cb41022f62ba4f4388d563c895a662d0)](https://app.codacy.com/manual/hamzanaveedmalik/request-multiple-urls?utm_source=github.com&utm_medium=referral&utm_content=hamzanaveedmalik/request-multiple-urls&utm_campaign=Badge_Grade_Dashboard)

![npm](https://img.shields.io/github/license/hamzanaveedmalik/request-multiple-urls)
![npm](https://img.shields.io/github/issues/hamzanaveedmalik/request-multiple-urls)
![npm](https://img.shields.io/github/forks/hamzanaveedmalik/request-multiple-urls)
![npm](https://img.shields.io/github/stars/hamzanaveedmalik/request-multiple-url)

A JavaScript package that is able to  
● fetch an array of URLs which contain JSON data  
● return their contents in a promise  

## Install
Run the the below command in the terminal
```
npm install ft-request-multiple-urls 

```

## Example Usage
```
const requestMultipleUrls = require('request-multiple-urls')

const urls = [
'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json', 
'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json', 
'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
]

const getData = () => {
    const data = requestMultipleUrls(urls)
        .then(data => console.log(data))
        .catch(error => console.error(error))
}

getData()

```

## Dependencies

### node-fetch

```node-fetch ``` makes use of minimal code for a window.fetch compatible API on Node.js runtime. It uses native Node streams for body, on both request and response. Also, it uses native promise, but allow substituting it with [insert your favorite promise library].