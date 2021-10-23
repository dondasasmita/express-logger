# LOGGING EXPRESS

## Overview
This is a simple debugging tool created to enable development work for a specific case where  
console logging is not available i.e. development for TV (eg. [HBBTV](https://www.hbbtv.org)).


## Prerequisite
* Node.js 
* NPM
* Reverse Proxy

## How to clone and run the program
* Download this repo to your server

* Run the following commands
```
$ npm install
$ npm start
```
* From your application Make a HTTP request to your server on port 3000
e.g http://*YOUR_IP_OR_DOMAIN*/?key1=value1&key2=value2

* You can expect the program to print out below
```
**** Logger Start <TIME> *****

key1 : value1
key2 : value2

**** Logger End ****
``` 
