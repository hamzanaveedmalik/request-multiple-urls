'use strict'

const fetch = require('node-fetch')

module.exports = function requestMultipleUrls(urls) {
    let data = Promise.all(
        urls.map(url => {
            fetch(url)
                .then(checkStatus)
                .then(parseJSON)
                .catch(err => `The following error has occurred; ${err}`)
        })
    )
    return data;
}

const checkStatus = (res) => {
    if (res.ok) {
        return Promise.resolve(res)
    }
    else {
        return Promise.reject(new Error(res.statusText))
    }
}

const parseJSON = (res) => { return res.json() }