"use strict";

const fetch = require("node-fetch");

module.exports = function requestMultipleUrls(urls) {
    var data = Promise.all(
        urls.map(url => (
            fetch(url)
                .then(checkStatus)
                .then(parseJSON)
                .catch(error => { console.log(`The following error has occurred: ${error}`) })
        ))
    )
    return data;
}

const checkStatus = (res) => {
    if (res.ok) { return Promise.resolve(res); }
    else { return Promise.reject(new Error(res.statusText)); }
}

const parseJSON = (res) => {
    return {
        url: res.url,
        status: res.statusText,
        body: res.json()
    }
}