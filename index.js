#!/usr/bin/env node
'use strict';
const program = require('commander');
var storage = require('node-persist');
var ncp = require("copy-paste");

//you must first call storage.init or storage.initSync
storage.initSync();



let copyCatFunctions = (key,text) => {
  //some code here
  console.log(text)
  if (typeof text === 'undefined') {
    console.log("Value was not passed");
  } else{
    console.log("Value was also passed");
  }
}

function range(val) {
  return val.split(',').map(String);
}


program
  .version('0.0.1')
  .usage('test')
  .option('-a, --add <a>,<b>','Save text to copycat repository',range)
  .option('-g, --get <key>','Copy corresponding text to clipboard',range)
  .parse(process.argv);
  //.command('<key>', 'Copy corresponding text to clipboard')
  //.command('<key> <value>', 'Save text to copycat repository')
  /*.action(function (key, value, options) {
  console.log("Key " +key)
  console.log("Value " +value.add)
  console.log("Option " +options)
  /*  if (value == null) {
      console.log("Value was not passed");
    } else{
      console.log("Value was also passed");
    }
  })*/

  if(program.add){
    var key = program.add[0]
    var value = program.add[1]

    storage.setItem(key,value);
    console.log("Saved")

  }else if(program.get){
    var key =  program.get[0];
    var value = storage.getItem(key)
    ncp.copy(value, function () {
      console.log("Contents of System clipboard replaced")
    })
  }

// if program was called with no arguments, show help.
//if (program.args.length === 0) program.help();