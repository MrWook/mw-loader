[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/MrWook/mw-alert/blob/master/LICENSE.txt)
[![codebeat badge](https://codebeat.co/badges/7586140d-0125-4933-bc7c-24f4bc849e91)](https://codebeat.co/projects/github-com-mrwook-mw-loader-master)
[![dependencies Status](https://david-dm.org/MrWook/mw-loader/status.svg)](https://david-dm.org/MrWook/mw-loader)
[![npm version](https://badge.fury.io/js/mw-loader.svg)](https://badge.fury.io/js/mw-loader)

# This repository is no longer maintained.
# mw-loader

AngularJS module that give you a cool loader animation on an element.


## Requirements (tested in)
- Angular (v1.6.9)

## Install

You can install this package either with `npm` or with `bower`.

### npm

```shell
npm install mw-loader --save
```

### bower

```shell
bower install mw-loader
```

## Usage

Once the script is included in your html file, simply include the module in your app:
```javascript
angular.module('myApp', ['mw-loader']);
```
    

And trigger a 'mw-loader-on' event thusly:
```javascript
$rootScope.$broadcast('mw-loader-on');
```

The Loader will be closed if you trigger the 'mw-loader-off' event:
```javascript
$rootScope.$broadcast('mw-loader-off');
```

You can pass the parameter 'timeout' to the event to hide the loader automaticly after a while
```javascript
$rootScope.$broadcast('mw-loader-on', {"timeout": 1000});
```

## Config

Name                    | Type      | Default 				| Description
----------------------- | --------- | --------------------- | ------------
parent_selector         | string    | body 					| set the parent selector for the alert
on_startup         		| int       | true 					| should the loader be active on startup
templateUrl           	| string    | mw-alert.html 		| set the template URL

## Demo

<a href='https://plnkr.co/edit/dS3jpBmmUW0LBaTVDA3t?p=preview' target='_blank'>View demo on Plunker</a>

## Example

![Loader example](https://github.com/MrWook/mw-loader/blob/master/public/gif/mw-loader.gif)

## Tasklist 
- [ ] fix spelling, grammar mistakes
