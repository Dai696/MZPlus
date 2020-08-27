# MZPlus
 MZPlus is the core library that most plugins use.
 
 Accessing plugin params: 
 
 To access plugins params use the code MZPlus.getParams(id)
 
 The id is a way to make plugins not depend on the file name. In your plugins @plugindesc you can put a easy to look up ID name. 
 
Example: 

```js
/*
 *@target MZ
 *@plugindesc <PluginTest> This plugin allows for layered parallax maps and infinite fog layers.
 */
 
 MZPlus.getParams('<PluginTest>')
 ```


Default Params: 

You can pass a default object in and set default params for properties set.

Example: 
```js
/*
 *@param testVariable
 *@text TestVariable
 *@desc A test variable
 */

MZPlus.getParams('<PluginTest>', {
testVariable: 'insertDataHere'
})
```

