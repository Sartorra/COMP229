/* 
    Finds the page within the file system that matches the given url.
*/

import fs from 'fs'

let noPage = fs.readFileSync("./src/Pages/404.html", "utf8")

let sanitizeUrl = (url) => {
    // Sanitize any form of ../ to prevent directory traversal
    url = url.replace(/\.\.\//g, '')

    // Sanitize any form of // to prevent directory traversal
    url = url.replace(/\/\//g, '/')

    // Sanitize any form of /./ to prevent directory traversal
    url = url.replace(/\/\.\//g, '/')

    return url
};

/*
    @method hasFileExtension
    @description Checks if the url has a file extension, if not, add .html
    @param {string} url - The url to check for a file extension

    @returns {string} - The url with a file extension if it didn't have one
*/
let hasFileExtension = (url) => {
    // Check if there is a file extension, if not add .html
    if (!url.includes(".")) {
        url += ".html"
    }

    return url
}

/*
    @method isRootDirectory
    @description Checks if the url is the root directory, if so, return index.html
    @param {string} url - The url to check

    @returns {boolean} - Returns true if the url is the root directory
*/
let isRootDirectory = (url) => {
    // Check if the url is the root directory
    if (url === "/") {
        url = "/index.html"
    }

    return url
}

/* 
    @method FindPage
    @description Finds the page within the file system that matches the given url.
    @param {string} url - The url to find the page for

    @returns {object} - An object containing the page contents, the page path, and a boolean indicating if the page was found
*/
let FindPage = (url) => {
    // Sanitize the url
    url = sanitizeUrl(url)
    let result = {
        pageContents: noPage,
        pagePath: "",
        pageFound: false
    }

    // Check for edge cases
    url = isRootDirectory(url)
    url = hasFileExtension(url)

    // Check if the file exists
    if (fs.existsSync(`./src/Pages/${url}`)) {
        result.pageContents = fs.readFileSync(`./src/Pages/${url}`, 'utf8')
        result.pagePath = `./src/Pages/${url}`
        result.pageFound = true
        return result
    } else {
        return result
    }
}

export { FindPage }