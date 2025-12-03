# bloxd.io-craft-UI
use craft tab to custom UI.Framework
## how to use
1.set ```CRAFT_DATA```.
look this
```js
type CRAFT_DATA = Record<string,CraftKey>

type CraftKey = {recipe:recipe,canCraft:Boolean,station:string|string[]}

type recipe = Record<craftItemName,{cost:cost,amt:number}>

type cost = Record<item,number>
```
2.use CraftUIUtils

```js
/**
* set player recipe 
*
* @param {playerId} id - change recipe id
* @param {craftKey} craftKey - set recipe type.need CRAFT_DATA key
* @returns {void}
*/
CraftUIUtils.setCraft(id,craftKey)

/**
* remove player recipe
*
* @param {playerId} id - remove recipe id
* @returns {void}
*/
CraftUIUtils.removeCraft(id)
```



3.write onPlayerUseCraftUI
onPlayerUseCraftUI is callback.
```js
/**
* @param {playerId} id - craft player
* @param {string} craftKey - player using craft recipe key
* @param {string} item - craft item
* @param {boolean} willReject - if true,auto return "preventCraft"
* @returns {void}
*/
onPlayerUseCraftUI(id,craftKey,item,willReject)
```
