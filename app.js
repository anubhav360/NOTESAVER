const fs= require('fs')
const name =require("./helper.js")
const notes=require("./notes.js")

const chalk=require('chalk')
const yargs=require('yargs')
yargs.command (
{
    command:'add',
   describe: "Add a note",
   builder : {
      title:
      {
          describe:"Note title",
          demandOption: true,
          type:'string',
      },
      body:
      {
          describe:"Note body",
          demandOption: true,
          type:'string',
      }

   },
   handler: function(argv)
   {
       name.addnote(argv.title,argv.body)
   }

}
)
yargs.command(
    {
        command:"remove",
        describe:"Removes a note",
        builder:{
            title:
            {
                describe:'Note title',
                demandOption:true,
                type:'string'
            }
        },
        handler: function(argv)
        { 
            name.removenote(argv.title)
        }
    }
)
yargs.command(
    {
        command:"list",
        describe:"Lists all notes",
        
        handler: function()
        { 
        name.listnotes()
        }
    }
)
yargs.command(
    {
        command:"read",
        describe:"Reads a note",
        handler: function(argv)
        { 
         name.readnote(argv.title)
        }
    }
)
yargs.parse()