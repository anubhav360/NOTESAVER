const fs = require('fs')
const ch=require('chalk')
const addnote=function(title,body){
const l =loadnotes()
const e=l.filter( function (note)
{
    return note.title===title
})
if (e.length==0)
{l.push({ title:title,body:body})
savenotes(l)
console.log(ch.green(title + " is saved now "))}
else
{
    console.log(ch.red("THIS TITLE ALREADY EXISTS!"))
}
return
}
const savenotes=function(notes)
{
const r=JSON.stringify(notes)
fs.writeFileSync("Notes.JSON",r)
}
const removenote=function(title)
{
    const r=loadnotes();
    const e=r.filter(function(k)
    {
        if (k.title==title)
        return false
        else
       return true
    })
    if (r.length==e.length)
   { ch
    console.log( ch.red(" No such file exists"))
   }else
    console.log(ch.green(title + " is now removed "))
    savenotes(e);
}
const loadnotes=function(){
try{const e=fs.readFileSync("Notes.JSON")
const db=e.toString()
const w=JSON.parse(db)
return w}
catch(e)
{
    return [];
}}
const listnotes=function()
{
    const f=loadnotes()
    console.log(ch.red.inverse("YOUR NOTES"))
    w=1
    f.forEach((r) => {
        console.log(ch.blue("The title of file " + w + " is "+ r.title))
        w++
    })
return
}
const readnote=function(title)
{
const w=loadnotes()
const e=w.find((r) => { return r.title===title})
if (e ==undefined)
console.log(ch.red("NO SUCH FILE EXISTS"))
else
console.log(ch.yellow(e.body))
return
}

module.exports={
    addnote:addnote, loadnotes:loadnotes, removenote:removenote, listnotes:listnotes, readnote:readnote
}