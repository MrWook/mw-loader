# mw-loader

AngularJS module that give you a cool loader animation on an element.
![Loader example](https://github.com/MrWook/mw-loader/blob/master/public/gif/mw-loader.gif)


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


## Tasklist 
- [ ] fix spelling, grammar mistakes
