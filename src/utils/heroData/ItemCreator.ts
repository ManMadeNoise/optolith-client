import { ItemInstance } from '../../types/data';
import { Nothing } from '../structures/Maybe';
import { fromDefault, makeGetters } from '../structures/Record';

export const ItemCreator =
  fromDefault<ItemInstance> ({
    id: '',
    name: '',
    ammunition: Nothing,
    combatTechnique: Nothing,
    damageDiceSides: Nothing,
    gr: 0,
    isParryingWeapon: Nothing,
    isTemplateLocked: false,
    reach: Nothing,
    template: Nothing,
    where: Nothing,
    isTwoHandedWeapon: Nothing,
    improvisedWeaponGroup: Nothing,
    loss: Nothing,
    forArmorZoneOnly: Nothing,
    addPenalties: Nothing,
    armorType: Nothing,
    at: Nothing,
    iniMod: Nothing,
    movMod: Nothing,
    damageBonus: Nothing,
    damageDiceNumber: Nothing,
    damageFlat: Nothing,
    enc: Nothing,
    length: Nothing,
    amount: 1,
    pa: Nothing,
    price: 0,
    pro: Nothing,
    range: Nothing,
    reloadTime: Nothing,
    stp: Nothing,
    weight: 0,
    stabilityMod: Nothing,
    note: Nothing,
    rules: Nothing,
    advantage: Nothing,
    disadvantage: Nothing,
    src: Nothing,
  })

export const ItemG = makeGetters (ItemCreator)