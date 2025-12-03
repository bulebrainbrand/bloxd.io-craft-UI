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

todo:write jsdoc

3.make onPlayerUseCraftUI

todo:writejsdoc
