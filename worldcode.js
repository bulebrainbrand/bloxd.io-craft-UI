const CRAFT_DATA = {
"b":{recipe:{"Sand":{amt:1,cost:{Diamond:1}}},canCraft:false,station:"Workbench"}
}

const onPlayerUseCraftUI = (id,craftKey,item,willReject) => {
  
  }

{
const CraftSettingUtils = class{

  static apply(id,item,amt,cost,station){
    api.editItemCraftingRecipes(id,item,[{
        requires:Object.entries(cost).map(([name,amt]) => ({items:[name],amt})),
        produces:amt,
        station,
        isStarterRecipe:true,
    }])
    }

  static clear(id){
    api.removeItemCraftingRecipes(id,null)
    }
  }

const setCraftRecipe = (id,craftKey) => {
  if(!Object.hasOwn(CRAFT_DATA,craftKey))throw new TypeError(`unexpected craftKey:${craftKey}`);
  CraftSettingUtils.clear(id)
  const station = CRAFT_DATA[craftKey].station
  for(const [item,{amt,cost}] of Object.entries(CRAFT_DATA[craftKey].recipe)){
    CraftSettingUtils.apply(id,item,amt,cost,station)
    }
  }

const PlayerUsingCraftKeyManager = class{
  static #instance
  #data
  constructor(){
    if(PlayerUsingCraftKeyManager.#instance)throw new Error("dont make 2 PlayerUsingCraftKeyManager instance ")
    this.#data = new Map()
    }

  static getInstance(){
    return PlayerUsingCraftKeyManager.#instance??(PlayerUsingCraftKeyManager.#instance = new PlayerUsingCraftKeyManager)
    }

  setCraftKey(id,craftKey){
    if(!api.checkValid(id))throw new TypeError(`unexpected id:${id}`);
    if(!Object.hasOwn(CRAFT_DATA,craftKey))throw new TypeError(`unexpected craftKey:${craftKey}`);
    this.#data.set(id,craftKey)
    }

  getCraftKey(id){
    return this.#data.get(id)
    }

  deleteId(id){
    this.#data.delete(id)
    }
  }

const CraftUIUtils = class{
  static setCraft(id,craftKey){
    PlayerUsingCraftKeyManager.getInstance().setCraftKey(id,craftKey)
    setCraftRecipe(id,craftKey)
    }

  static removeCraft(id){
    PlayerUsingCraftKeyManager.getInstance().deleteId(id)
    CraftSettingUtils.clear(id)
    }

  static getNowCraftKey(id){
    return PlayerUsingCraftKeyManager.getInstance().getCraftKey(id)
    }
  } 

globalThis.CraftUIUtils = CraftUIUtils

const callOnPlayerUseCraftUI = (id,item) => {
  const key = CraftUIUtils.getNowCraftKey(id)
  if(Object.hasOwn(CRAFT_DATA,key)){
    const canCraft = CRAFT_DATA[key].canCraft
    const willReject = !canCraft
    try{
      onPlayerUseCraftUI(id,key,item,willReject)
      }catch(e){
      api.log("onPlayerUseCraftUIError:",String(e))
      }finally{return canCraft?true:"preventCraft"}
    }
  return true
  }

globalThis.callOnPlayerUseCraftUI = callOnPlayerUseCraftUI

}

onPlayerAttemptCraft = (id,item, craftingIdx, craftTimes) => {
  return callOnPlayerUseCraftUI(id,item)
  }


