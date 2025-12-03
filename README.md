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
*/
CraftUIUtils.setCraftKey(id,craftKey)
```

3.make onPlayerUseCraftUI

todo:writejsdoc
