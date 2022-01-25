/*
This Codepen is in the Public Domain.
You can use it for whatever purpose you like, except evil.

This Pen uses highlight.js (https://highlightjs.org) for code highlighting and list.js (http://listjs.com) for searching and sorting.

*/

hljs.initHighlightingOnLoad();

var listOptions = {
  valueNames: ['name', 'lang', 'code']
};

var snippetList = new List('repo', listOptions);

 snippetList.on('updated', function (list) {
   var items = document.querySelectorAll('.snippet');
   items.forEach(function(item){
     item.style.opacity = 0;
   });
   setTimeout(function(){
     items.forEach(function(item){
       item.style.opacity = 1;
     });
   },150);
 });