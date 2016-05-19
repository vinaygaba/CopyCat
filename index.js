#!/usr/bin/env node
'use strict';
const program = require('commander');
var storage = require('node-persist');
var ncp = require("copy-paste");

//Initializing Local Storage
storage.initSync();

//Function to split key value pair passed as arguments
function range(val) {
  return val.split(',').map(String);
}

//Parse commands passed to copycat
program
  .version('0.0.1')
  .usage('test')
  .option('-a, --add <key>,<value>','Save text to copyct repository',range)
  .option('-g, --get <key>','Copy corresponding text to clipboard',range)
  .parse(process.argv);


  //Logic to detect if user is trying to save key value pair
  if(program.add){
    var key = program.add[0]
    var value = program.add[1]
    if(!key){
      program.help();
    }
    if(value){
      storage.setItem(key,value);
      console.log(key + " saved!")
    }else{
      console.log("Value is Missing")
    }
  }else if(program.get){
    //Logic to detect whether user is trying to replace the clipboard
    var key =  program.get[0];
    var value = storage.getItem(key)
    if(value){
      ncp.copy(value, function () {
      console.log("Contents of the system clipboard replaced by " + key)
      })
    } else{
    console.log("That key does not exist!")
    }
  }

// if program was called with no arguments, show help.
//if (program.args.length === 0) program.help();
