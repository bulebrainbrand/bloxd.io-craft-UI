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



3.make onPlayerUseCraftUI

todo:writejsdoc
