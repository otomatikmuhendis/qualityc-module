# Qualityc NPM Module

[![npm](https://img.shields.io/npm/v/qualityc.svg?style=flat-square)](http://www.npmjs.com/package/qualityc)

Helper methods for [qualityc.app](https://qualityc.app/)

## Install

`npm i qualityc --save-dev`

## Usage

```js
const qualityc = require('qualityc')
```

### addCheckpoint

The Add Checkpoint command creates a checkpoint on qualityc.app with a screenshot.

| Name | Type | Details |
|-|-|-|
| `name` | string | Checkpoint name to be displayed |
| `screenshot` | string | The base64-encoded PNG image data comprising the screenshot. |

```js
driver.takeScreenshot().then(function(screenshot) {
    qualityc.addCheckpoint('Checkpoint name', screenshot)
})
```

### addLog

The Add Log command creates a log message on qualityc.app.

| Name | Type | Details |
|-|-|-|
| `message` | string | Log message to be displayed |

```js
qualityc.addLog('Log message')
```
