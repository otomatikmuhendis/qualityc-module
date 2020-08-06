const https = require('https')

exports.addCheckpoint = function (name, screenshot) {
    post('checkpoint',
        JSON.stringify({
            name: name,
            screenshot: screenshot
        }))
}

exports.addLog = function (message) {
    post('log',
        JSON.stringify({
            data: '  ' + message + ' ' 
        }))
}

function post(endpoint, data) {
    const options = {
        hostname: process.env.QUALITYC_REPORT_HOST,
        port: 443,
        path: `/report/${endpoint}/${process.env.GITHUB_SHA}`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }

    const req = https.request(options, (res) => {
        console.log(`${endpoint} is sent and ${res.statusCode} status code is returned.`)

        res.on('data', (d) => {
            process.stdout.write(d)
        })
    })

    req.on('error', (error) => {
        console.error(error)
    })

    req.write(data)
    req.end()
}