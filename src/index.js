const fs = require('fs')
const fetch = require('node-fetch').default
const FormData = require('form-data');

const upload = (job, settings, src, params) => {
    if (!params.callback) throw new Error("Callback url not provided.");

    return new Promise((resolve, reject) => {
        console.log(src);
        let file = fs.createReadStream(src);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('uid', job.uid);
        console.log(file);
        console.log(params.callback);
        fetch(params.callback, {
            method: 'POST',
            body: formData
        }).then(resolve).catch(reject);
    });
}

module.exports = {
    upload,
}
