# request-multiple-urls
![npm](https://img.shields.io/github/license/hamzanaveedmalik/request-multiple-urls)
![npm](https://img.shields.io/github/issues/hamzanaveedmalik/request-multiple-urls)
![npm](https://img.shields.io/github/forks/hamzanaveedmalik/request-multiple-urls)
![npm](https://img.shields.io/github/stars/hamzanaveedmalik/request-multiple-url)

A JavaScript package that is able to:&nbsp
● fetch an array of URLs which contain JSON data&nbsp
● return their contents in a promise&nbsp

# Install
Run the the below command in the terminal
```
npm install ft-request-multiple-urls 

```

# Example Usage
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

# Dependencies

## node-fetch

```node-fetch ``` makes use of minimal code for a window.fetch compatible API on Node.js runtime. It uses native Node streams for body, on both request and response. Also, it uses native promise, but allow substituting it with [insert your favorite promise library].


```


# Tests
