import R from 'ramda';
import { IdPrefixes } from '../constants/IdPrefixes';
import { Dependent, HeroDependent } from '../types/data.d';
import { EntryWithGroup } from '../types/wiki';
import { List, Maybe, OrderedMap, Record, RecordKey } from './dataUtils';
import { getIdPrefix } from './IDUtils';
import { match } from './match';

export type HeroStateListKey =
  'advantages' |
  'attributes' |
  'blessings' |
  'cantrips' |
  'combatTechniques' |
  'disadvantages' |
  'liturgicalChants' |
  'skills' |
  'specialAbilities' |
  'spells';

export type HeroStateMapKey =
  'advantages' |
  'attributes' |
  'combatTechniques' |
  'disadvantages' |
  'liturgicalChants' |
  'skills' |
  'specialAbilities' |
  'spells';

export const getHeroStateListKeyById = (
  id: string,
): Maybe<HeroStateListKey> => {
  return match<IdPrefixes, Maybe<HeroStateListKey>>(getIdPrefix(id))
    .on(IdPrefixes.ADVANTAGES, () =>
      Maybe.Just<HeroStateListKey>('advantages')
    )
    .on(IdPrefixes.ATTRIBUTES, () =>
      Maybe.Just<HeroStateListKey>('attributes')
    )
    .on(IdPrefixes.BLESSINGS, () =>
      Maybe.Just<HeroStateListKey>('blessings')
    )
    .on(IdPrefixes.CANTRIPS, () =>
      Maybe.Just<HeroStateListKey>('cantrips')
    )
    .on(IdPrefixes.COMBAT_TECHNIQUES, () =>
      Maybe.Just<HeroStateListKey>('combatTechniques')
    )
    .on(IdPrefixes.DISADVANTAGES, () =>
      Maybe.Just<HeroStateListKey>('disadvantages')
    )
    .on(IdPrefixes.LITURGIES, () =>
      Maybe.Just<HeroStateListKey>('liturgicalChants')
    )
    .on(IdPrefixes.SPECIAL_ABILITIES, () =>
      Maybe.Just<HeroStateListKey>('specialAbilities')
    )
    .on(IdPrefixes.SPELLS, () =>
      Maybe.Just<HeroStateListKey>('spells')
    )
    .on(IdPrefixes.TALENTS, () =>
      Maybe.Just<HeroStateListKey>('skills')
    )
    .otherwise(Maybe.Nothing);
};

export const getHeroStateListItem =
  <D extends Dependent = Dependent>(id: string) =>
    (state: Record<HeroDependent>): Maybe<D> =>
      getHeroStateListKeyById(id)
        .bind(state.lookup)
        .bind(slice => slice instanceof OrderedMap
          ? slice.lookup(id) as any
          : Maybe.Nothing()
        );

export const getHeroStateListItemOr = <D extends Dependent = Dependent>(
  id: string,
  create: (id: string) => D
) =>
  (state: Record<HeroDependent>): D =>
    Maybe.fromMaybe(create(id), getHeroStateListItem<D>(id)(state));

export const setHeroListStateItem =
  (id: string) => (item: Dependent) =>
    (state: Record<HeroDependent>): Maybe<Record<HeroDependent>> =>
      getHeroStateListKeyById(id)
        .map(state.alter(slice => slice.map(slice =>
          (slice as OrderedMap<string, Dependent>)
            .insert(id, item)
        ) as RecordKey<HeroStateListKey, HeroDependent>));

export const removeHeroListStateItem = (id: string) =>
  (state: Record<HeroDependent>): Maybe<Record<HeroDependent>> =>
    getHeroStateListKeyById(id)
      .map(state.alter(slice => slice.map(slice =>
        slice.delete(id)
      ) as RecordKey<HeroStateListKey, HeroDependent>));

export const adjustHeroSlice = <K extends HeroStateListKey>(
  adjustFn: (slice: RecordKey<K, HeroDependent>) => RecordKey<K, HeroDependent>,
  key: K,
) => (state: Record<HeroDependent>) => {
  return state.alter(adjustFn, key);
};

export const adjustHeroListStateItemOr = <D extends Dependent>(
  createFn: (id: string) => D,
  adjustFn: (value: D) => Maybe<D>,
  id: string,
) => (
  state: HeroDependent,
) => getHeroStateListKeyById(id)
  .map(key => ({
    ...state,
    [key]: (state[key] as any as OrderedMap<string, D>).alter(R.pipe(
      Maybe.fromMaybe(createFn(id)),
      adjustFn
    ), id),
  }));

export const getAllEntriesByGroup =
  <I extends Dependent = Dependent, T extends EntryWithGroup = EntryWithGroup>(
    wiki: OrderedMap<string, T>,
    list: OrderedMap<string, I>,
    ...groups: number[]
  ): List<I> => list.elems().filter(R.pipe(
    e => e.lookup('id').bind(wiki.lookup),
    e => Maybe.isJust(e) && groups.includes(
      Maybe.fromJust(e.bind(e => e.lookup('gr')))
    )
  ));
