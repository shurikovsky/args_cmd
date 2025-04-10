#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const args = yargs(hideBin(process.argv))
      .option('params1', {
        alias: "current",
        type: "boolean",
        description: "current data",
        default: "true"
      })
      .option('params 2', {
        alias: "year" || "y",
        type: "boolean",
        description: "current year",
      })
      .option('params 3', {
        alias: "month",
        type: "boolean",
        description: "current month",
      })
      .option('params 4', {
        alias: "date",
        type: "boolean",
        description: "current date",
      })
      .option('params 5', {
        alias: "add",
        type: "boolean",
        description: "add",
      })
      .option('params 6', {
        alias: "sub",
        type: "boolean",
        description: "sub",
      })
      .argv;

      let now = new Date();
      if (args.add) {
        if (args.year) {
          now = now.getFullYear() + Number(args._);
          console.log(now);
        } else if (args.month) {
          now = now.getMonts() + Number(args._) + 1;
          console.log(now);
        } else if (args.date) {
          now = now.getDate() + Number(args._);
          console.log(now); 
        }
      } else if (args.sub){
        if (args.year) {
            now = now.getFullYear() - Number(args._);
            console.log(now);
          } else if (args.month){
            now = now.getMonts() - Number(args._) + 1;
            console.log(now);
          } else if (args.date) {
            now = now.getDate() - Number(args._);
            console.log(now); 
          }
        } else {
      
         if (args.year) {
           console.log(now.getFullYear())
         } else if (args.month){
           console.log(now.getMonth()+1) 
         } else if (args.date) {
           console.log(now.getDate())
         } else {
           console.log(now.toISOString());
         }
        }