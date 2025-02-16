# 1.1.0/1.1.2

*The exact version number of the app is 1.1.2.*

After more than one year a big update is finally coming—even though you probably won’t notice it: Optolith got a completely new code. This is accompanied by an internal restructuring, so that features like groups will be possible in the future. This is the biggest change, but not the only one: All reported bugs are fixed and over the last two weeks my testers found several bugs, which are also fixed here.

You will probably notice that Optolith takes a few seconds longer to load than before. This is because I rebuilt Optolith with the basic idea that it runs more stable. So I do checks during loading to make sure that all data that is loaded really looks as expected and so that nothing unexpected and unintentional, caused by wrong tables or other wrong data in the program, happens. The start performance is definitely going to be improved, but for now I prefer a more stable program to a fast one; after all this is only about starting the program, the performance during use is not affected.

Last but not least a big thank you to you, for your patience and all your feedback and further help, without which I would not have been able to fix all those bugs. Although new rules have not yet made it into this version, and the next version won’t contain all new ones, Optolith will be able to get up to date more quickly than before.

But now it’s time for the changelog of this version:

## New Features

- Heroes can now be saved from the hero list.
- Avatars of heroes and pets can now be deleted.

## Enhancements

- Select option lists are now filtered by activated books. Previously, that only worked for main lists like special abilities, but now it works for all list, for example the list of trade secrets.
  - Wiki entry lists cannot be filtered by specific books, neither can the wiki entry text in opened heroes. This will be implemented later!
- Unfamiliar spells are now going to be highlighted in red (just like uncommon advantages).
- Searching for professions now includes profession variants.
- The space for languages on the character sheet is now twice as large.
- When adding advantages or disadvantages, AP spent on advantages as well as on disadvantages will always be shown.
- Shields on character sheet are now listed as a weapon as well as a shield.
- Wiki texts are now selectable.
- For *Tradition (Guild Mage)*, you need to set a specific unfamiliar spell. **For an already activated SA, you can to the via the *Rules* tab. Please set the spell, because it is needed for upcoming books!**
- To be able to better handle differences between languages in terms of rules, heroes are now saving the languages they were created in. **For already created heroes, the creation language will be set to the current UI language. To change that, you need to switch to the *Rules* tab! Please check it, because it is going to be relevant in future versions!**
- The term for generating random weight and size of the hero is now shown above the respective input field.
- The dialog shown on application quit if there are unsaved actions is now clearer and shows three buttons for all three possible options.
- Text on character sheet is now selectable. This option is not useful for copying the complete character sheet as the layout is not preserved properly.
- Added FAQ entry on how to add LP/AE/KP.
- If you open a wiki entry when a character is open, the respective list item is highlighted just like they are in the wiki.
- The maximum available AP that can be left when finishing hero creation phase is now always 10 AP, no matter whether you are in editing mode or not.
- Added *Uses* for skills.
- For skills where it is not 100% clear whether encumbrance is relevant or not, the full description when it is relevant and when it is not is now shown instead of „maybe“.
- The separate entries for advantage *Exceptional Sense* and disadvantage *Restricted Sense* are now joined.
- *Additional sources* lists sources from which the entry gets its select options. For example, SA *Trade Secrets* not only shows the source for the base SA, but also the different trade secret sources from all the different books.
- Analogous to the Raven’s Beaks blessed variant, there’s now a mundane variant available, too. It costs 90 S. There’s no difference between the two versions except for *blessed/mundane*.
- For Staff Enchantments, *Binding of the Staff* as a prerequisite is now hidden (because it is hidden in Core Rules, too).
- Finishing RCP selection can now be undone.

## Bug Fixes

- After switching from German to English, heroes could not be edited anymore.
- Special Abilities can now be sorted by group again.
- Liturgical chant traditions and aspects are now sorted alphabetically.
- Maxima of skills and combat techniques are now also influenced by skill check attributes or primary attributes during character creation phase.
- Yellow-highlighted advantages/disadvantages are now explained in the legend on the left.
- A spell or chant from a base profession removed by a profession variant now removes the entry entirely instead of activating it on SR 0.
- Images are now shown on Linux again.
- Automatic advantages cost 0 AP so that race AP cost are correct now.
- Sorting equipment by group does not result in an error anymore.
- Avatars of pets are now exported as well when exporting the character.
- Details of spells and chants are shown on character sheet again.
- The prerequisite Race, culture, or profession must have \[...] as an automatic or suggested \[advantage/disadvantage]“ now also includes automatic advantages if they are removed.
- Pet layout on character sheet should work again.
- The PDF does not include a scroll bar anymore.
- Protective/Warding circles are now shown on character sheet.
- Lowering attributes in editing mode takes added LP/AE/KP into account and restricts lowering if needed.
- Sometimes, instead of a value, for example in *Enforce Honor 6*, `null` was shown in the wiki entry for professions, so it was actually *Ehrenhaftigkeit null*.
- Sometimes, the value of a entry in a profession, changed by a profession variant, was increased by 6. For example, Knight: *Etiquette 2 instead of 12* actually is *Etiquette 2 instead of 6*.
- Combat Style Special Abilities now show their type (passive/base maneuver/special maneuver) in wiki again.
- Sorting spells by group now sorts the groups alphabetically.
- When EL *Inexperienced* is selected and you got SA *Tradition (Guild Mage)*, you can now also buy and increase the selected unfamiliar spell (which is not unfamiliar anymore).
- The select option list for SA *Tradition (Guild Mage)* does not list familiar spells anymore.
- Disadvantage *Negative Trait (Stinginess)* and *(Wastefulness)* were not mutually exclusive.
- Spells and chants are not included in disadvantage *Incompetent*. Heroes with those entries will get the disadvantage removed automatically.
- SA *Aspect Knowledge* can now be added as expected.
- SA *Property Knowledge* can now be added as expected.
- SA *Precise Shot/Throw* had wrong attribute prerequisites.
- Disadvantages *No Flying Balm* and *No Familiar* now correctly decrease the cost of SA *Tradition (Witch)* by 10 AP each.
- SA *Tradition (Guild Mage)* is now taken into account for restrictions concerning unfamiliar spells (see the change to the SA listed above also).
- *Disguise*, Encumbrance: Maybe → Yes.
- *Etiquette*, Encumbrance: Maybe → No.
- *Persuasion*: Skill check COU/INT/CHA → COU/SGC/CHA.
- Wrong skill checks of spells:
  - *Magical Melody*: COU/SGC/CHA → COU/INT/CHA
  - *Song of Piece*: COU/SGC/INT → COU/INT/CHA
  - *Song of Sorrow*: COU/CHA/CHA → COU/INT/INT
- Text missing which states that a special aspect of a spell cannot be modified:
  - MOTORICUS: Cost
  - WALL OF FOG: Cost
- Missing skill check modifiers (SPI/TOU) added to spells.
- ANALYZE ARCANE STRUCTURE: Casting time 2 actions → 32 actions.
- KLARUM PURUM, Cost: 8 AE.
- Wrong skill checks of liturgical chants:
  - *Minor Banishing Ray*: COU/SGC/CHA → COU/INT/CHA
  - *Enforce Honor*: COU/SGC/CHA → COU/INT/CHA
  - *Encourage*: COU/SGC/CHA → COU/INT/CHA
  - *Peaceful Aura*: COU/SGC/CHA → COU/INT/CHA
- *Hand mirror* now lists the corresponding rule.
- *Dog food, Horse feed, Pony feed*: Removed weight.
- *Rope, climbing* now has a correct price.

# 1.0.3

- Renamed Optolyth to Optolith to be in line with all other locations where the name occurs.

## Linux

- Fixed glibc-related issue.
- Moved from tar.gz to AppImage to provide auto-update support.

# 1.0.2

- Fixed issue with rendering list items of advantages/disadvantages/special abilities.
- Fixed shortcuts being global.
- Reloading a hero with `Stigma (Albino)` won’t change selected eye color anymore.

## macOS

- App now quits automatically on close.

## English Specific

- Fixed list of professions.

## German Specific

- Fixed typo in failed check description of skill "Driving".
- Fixed attribute adjustment in attributes tab.
- Fixed levels of required instances of `Principles` and `Obligations` of `Blessed One of Kor`.

# 1.0.1

- Fixed special abilities tab.

# 1.0.0

### New Features / Breaking Changes

- New app name: Optolyth (long version: Optolyth Character Generator)
- Linux 32-bit build available.
- Applications that can be purchased using advantages or special abilities can be used for a skill specialization. They are listed in the wiki below *New Applications*, too.

### Rules/Crunch

- Language Specializations can be activated as an Optional Rule in the Rules tab.
- Added missing entries for *Immunity to [poison/disease]* from **Core Rules** and **Aventuria Almanach**.

### Bug Fixes / Other

- Multiline texts are now multiline on character sheet.
- If advantage *Stigma (Albino)* is purchased the (lists of available) hair and eye colors change.
- AP cost for race are now shown in AP tooltip. AP cost for profession are shown only when RCP selection has not been approved.
- Fixed converting older heroes to new version.
- The text fields for size and weight are both updated on generating size or weight.
- In profile overview now always shows the start EL. Before, the EL was calculated based on AP total.
- Now you can select the source books to use in the very beginning of character creation.
- Fixed prerequisites of *Cartography*.
- Fixed list of liturgical chants.
- Ignoring changes on close now closes the app. Before nothing happened ...
- Fixed calculation of minimum/maximum liturgical chant SR.
- Shortcuts!
  - `Ctrl+Z` => Undo
  - `Ctrl+Y` or `Ctrl+Shift+Z` => Redo
  - `Ctrl+O` => Show settings (only when dedicated button is available, too)
  - `Ctrl+S` => Save hero
  - `Ctrl+W` => Switches to list of heroes if a hero is currently opened (similar to the back button in the top left corner)
  - `Cmd+Q` => Close app (macOS)
- Abbreviations for related source books are shown in the list of professions again.
- Fixed importing heroes with images encoded in `jpg`.
- Fixed editing automatic Area Knowledge in profile overview.
- Fixed calculation total AP for disadvantage *Bad Habit*.
- The *About ...* menu element is disabled if there is an open dialog window (macOS).
- The AP cost for profession variants are now considered when calculating AP spent.
- Activating spells is now disabled the limits of EL are reached.
- Fixed showing separators when sorting spells or liturgical chants by group.
- Fixed text fields in animal section of the character sheet breaking layout or showing up twice.
- Fixed AP used for dis/advantages shown in window used for adding them. Remaining parts of the old AP system have been removed.
- Fixed saving heroes (previously saved heroes are not currupted).
- Fixed filters for list of races and list of professions.
- Fixed calculating AP total for *Obligations/Priciples*.
- Fixed showing damage info for weapons in wiki (if a weapon has no flat damage 1W6 instead of 1W60 is shown now).

## German Specific (in German)

### New Features / Breaking Changes

- Unter Profil > Pakt kann nun ein Feenpakt eingetragen werden. Die Eingabe richtet sich genau nach den Regeln aus **Die Siebenwindküste** zu Feenpakten. Die Eingabe dort schaltet auch unter erfüllten Voraussetzungen Paktgeschenke frei.

### Rules/Crunch

- Professionen aus **Aventurisches Götterwirken** und **Die Siebenwindküste** hinzugefügt.
- Fehlende Berufsgeheimnisse aus **Rüstkammer der Streitenden Königreiche** und **Rüstkammer der Siebendwindküste** sowie **Aventurisches Bestiarium** hinzugefügt.
- Fehlende Einträge für *Immunität gegen [Gift/Krankheit]* aus **Aventurisches Bestiarium**, **Aventurische Magie I** und **Kneipen & Tavernen** hinzugefügt.

### Bug Fixes / Other

- Die Profession *Sangara* funktioniert wieder ordnungsgemäß.
- Die AP-Kosten für *Tradition (Zauberbarde)* und *Tradition (Zaubertänzer)* werden beim Hinzufügen wieder korrekt angezeigt.
- Liturgiestilsonderfertigkeiten, die es ermöglichen, Liturgien anderer Gottheiten zu erlernen, ermöglichen dieses Feature nun auch.
- Die Tradition des Namenlosen Kultes wird im Wiki nun korrekt angezeigt.
- Die Abhängigkeiten der Beschwörungs/Herbeirufungszauber werden nun in den FAQ behandelt.
- Die Berechnung der Wundschwelle funktioniert wieder ordnungsgemäß.
- Stilsonderfertigkeiten und dazugehörige Erweiterte SF können nun wieder ordnungsgemäß hinzugefügt und gelöscht werden.
- Die Wundschwelle wird nun nur angezeit, wenn **Aventurisches Kompendium** verfügbar und aktiviert ist.
- Die Reichweite für Waffen der Streitenden Königreiche wurde ergänzt.
- Vor- und Nachteile für *Intuitive Zauberer* können wieder ordnungsgemäß erworben und verkauft werden.
- Bei einigen Zaubern wurde die druidische oder scharlatanische Tradition ergänzt.

# 0.51.9

- The AP tooltip (if you hover over the available AP of the currently opened character) now show how many AP you spent on which category of entries - how much you spent on spells, on special abilities, on disadvantages, on cantrips, on energies (LP, AE, KP) and so on.
- I build a new AP system which dynamically calculates the AP. This means if there were or will be issues with calculated AP they will be fixed automatically by installing the patch that fixes this issue. (You still have to open the character and save it, though).
- Fixed AP value calculation of *Skill Specialization (Skill)*.
- Lists belonging to a hero (active special abilities, inactive special abilities, skills, professions and so on) now show a placeholder element when the respective list is empty.
- Slightly improved performance.
- Improved displaying numbers in some areas.
- You can now activate or deactivate if you want to see animations or not throught the settings window.
- Wiki lists now display levels if available (example: `Rich I-X` instead of `Rich`).

## German Specific

- Fixed prerequisites of *Abrollen*.
- Blessings are now tradition-aware: If you select a tradition of a demigod you will not be able to select the unavailable blessings (as specified by tradition special ability) anymore.

## English Specific

- There are full wiki entries available for *all* currently implemented entries.

# 0.51.8

- Fixed AP cost for languages.
- Fixed generating random values for size and weight of a character.
- Added error binding to content, so that if an error occurs you can still access the navigation bar.
- Fixed crashes of wiki box in English version.

# 0.51.7

- Tweaked some colors to improve UI readability.
- Error messages (the ones that contain "error" and "component stack") can be selected and thus copied.
- After creating a hero (temporary name, sex, experience level) you will be in the "rules" tab, which is a main tab in this phase of character creation. You can select race, culture and profession by switching to the respective tab.
- You can now check for updates manually via the Settings window.
- The wiki, which is shown if you switch to the "wiki" tab, is now complete - regarding functionality. Contents still vary depending on the selected language.
- If race Elf is selected the app will no longer warn you to not use the selected profession because the calculated AP would be incorrect.
- *Cendrash Style* is fixed and can be added to your character(s) again.

## German Specific

- Zone armor tab will only be shown if *Aventuria Armory* or *All rule books* are activated in "rules" tab.
- ENC is now correctly calculated for zone armor.
- Fixed *Brevier der zwölfgöttlichen Unterweisung*.
- Fixed magical styles.

## English Specific

- App will no longer crash all the time.

# 0.51.6

- Added sort option to inventory to sort by weight (in descending order).
- *Slow* is now considered when calculating MOV value.
- Fixed magical and blessed professions.

# 0.51.5

- Fixed hidden liturgical chants tab.

# 0.51.4

- Fixed MOV modificators.
- Splitted tradition special abilties to be able to provide wiki texts for them.
- Fixed some profession and profession variant values.
- Moved item infos to the wiki box on the right; removed the tooltip shown on hover before.
- Fixed resetting AP on changing race variant.
- Selection lists for disadvantages *Principles* and *Obligations* are not filtered by selected level anymore. This means, you can select *Code of the Church of Peraine* for all three levels of *Principles* instead of typing in the optional input field.

## German Specific

- Added **ALL** missing texts to complete the offline wiki.
- Joined the different `Bindung des Bannschwerts` special abilties.
- Additional item texts are only shown for templates and locked entries.
- Added missing armory from regional armory books.

## English/Dutch Specific

- Wiki boxes will show the entries that can be generated safely. Their full functionality will be enabled once the needed texts are added.

# 0.51.3

- Fixed issues with prerequisites for races.
- Fixed profession list filter.
- Fixed showing levels multiple times on character sheet and in profile overview.
- Ignores auto updater on Linux.
- Small tweaks to the light theme.
- Some fixes for items regarding price and weight.
- There are now additional infos about an update available in the download progress dialog.
- The Enter key should work as usual after closing the app.

## German Specific

- Added filtering by activated rule books and wiki entries for combat techniques, advantages, disadvantages and special abilities. Prerequisite texts for advantages, disadvantages and special abilities are missing, though.
- Removed special ability *Magischer Gedankenschutz* as this the exact same special ability as *Gedankenschutz*, the only difference is the name and this seems to be a issue with consistent naming.

# 0.51.2

- Fixed calculating AP for *activated* special ability entries where you have to buy each tier separately (e.g. *Feint I-III*). Previously, only the cost for the highest bought tier were shown.
- Removing bought energy points now correctly lowers AP spent. Previously, it did not change the current AP spent.

## German Specific

- Fixed *Lederüstung* typo.

# 0.51.1

- Fixed Auto Updater.
- Added FAQ page.
- It is now possible to change attribute adjustment selection from selected race during character creation.
- Fixed shown special ability groups on character sheet.
- Fixed displayed aspects of liturgical chants.
- Fixed calculating PA on character sheet.
- You can now select the rule books you want to include in the Profile > Rules tab. Inactive book entries will not be displayed (only Races, Cultures, Professions, Skills, Spells and Liturgical Chants).
- Displaying races now corresponds with the Core Rules.
- Fixed inactive Advantages/Disadvantages/Special Abilities list’s layout (temporarily).

## macOS

- Added custom titlebar.
- Added *About ...* app menu option.

## German Specific

- Fixed *Visions* and *Sermons* for Blessed Ones.
- Fixed profession *Graumagier (Schule der Verformungen zu Lowangen)*.

# 0.51.0

- Auto-Updater for Windows and macOS.
- Installer for Windows.
- New icon set.
- You can now edit heroes after character creation phase if you check the respective box in the settings.
- Enabled filtering of item templates by combat technique.
- Exported characters will now include the avatar image.
- Added support for permanent LP loss.
- Source book abbreviations will now appear in profession list.
- All lists of skills (skills, spells, liturgical chants) will now show the attribute values if you hover over an list item.
- Fixed calculations of AP spent on **active** advantages/disadvantages/special abiltiies (AP for buying them were still calculated correctly).
- Fixed calculations based on size value (meter-based size entry allowed).
- Fixed surplus page in character sheet PDF.
- Added placeholder wiki boxes for advantages, disadvantages, special abilities and items.
- Fixed available hair colors for some races.

## German Specific

- Added spell and liturgical chant extensions to wiki boxes.
- Fixed text of *magical professions* for culture *Ore Dwarf*.

## Dutch Specific

- Started localization work.

# 0.50.0

- Custom AP cost possible for advantages and disadvantages.
- Fixed ItemEditor’s and ArmorZonesEditor’s theming and layout.
- Slightly brightened the color for disabled elements.

# 0.49.6

- Fixed dis/advantages from **Aventurian Magic I**.
- Fixed alerts after selecting RCP.
- Alerts might be a bit more responsive (internal rework).
- Fixed *Last Changes* page.

## German Specific

- Added wiki info for cultures.

# 0.49.5

- Special abilities with tiers do not have separate entries anymore.
- RCP costs are now entirely calculated by the app.
- Changed ItemEditor layout from one-column to two-column layout.
- Extended P+T functionality and fixed items based on that.
- Now allows negative AP left during character creation phase.
- Fixed search fields (it unintentionally converted text into a regular expression - thus some strange results).
- Fixed filtering magical tradition’s selection objects (previously, having more than 25 AP spent/received for magical advantages/disadvantages adding a tradition was completely disabled).
- Fixed professions requiring specific cultures.
- Fixed *Exceptional Skill/Combat Technique*
- Fixed calculating TOU.
- Fixed showing Own Profession without having extension books in profession list.
- Added prerquisites and special abilities entries for professions’ wiki info.
- Fixed disabling to add AE instead of to add permanently lost AE when more than one permanent AE point is lost.
- Wiki test page added.
- Added *Last Changes* tab in *About* section.
- Some further redesign work.
- A short message is now shown in Settings dialog informing about you need to restart the app when changing the language.

## German Specific

- Added (missing) wiki info for skills, cantrips, blessings, spells and liturgical chants (excluding extensions).
- Added special abilities, liturgical chant extensions and dis-/advantages from **Aventurian Work of the Gods**.

# 0.49.4

- Fixed character portrait selection.
- Heaps of stuff for the new design.
- Added theme selection to Settings modal (although the light theme is not finished yet; modals and tooltips are still dark ...).
- Deleting a character must be confirmed now (and cannot be undone after that).
- Now shrinks text in specific fields on character sheet.
- Fixed routine check modifiers on character sheet.
- Unified RCP views.
- Added RCP info views, although a lot of text is still missing.

## German Specific

- Fixed newer items.
- Fixed combat technique values of newer professions.

# 0.49.3

- Fixed AP limits for advantages/disadvantages.
- Removes existing equipment from item templates search results.
- New icon.
- New background.
- Updated titlebar icons on Windows and Linux.

## German Specific

- Fixed Skills selection for *Meistertalentierte*.

## English Specific

- Fixed RCP view issue(s).
- Fixed Equipment view.

# 0.49.2

- Fixed the addition of adventure points.
- Fixed second combat technique selection for professions.
- Fixed Settings modal.
- Fixed small issue concerning `alert`s.
- Item templates are no longer cleared after a new hero has been created.

## German Specific

- Fixed problems with displaying AE for *Intuitiver Zauberer*.

## English Specific

- Fixed race/professions list.

# 0.49.1

- Fixed issue with lists for advantages, disadvantages and special abilities containing skills/spells/liturgical chants.
- Fixed issue with RCP skill specialization selection.
- Fixed exporting heroes as JSON.
- Fixed equipment view.
- Professions are now sorted by name and them by subname (e.g. the academy name). Previously, professions with subnames were sorted randomly (changing from render to render).

## English Specific

- Added translation for skill name separation in RCP skill specialization selection.

# 0.49.0

- *Smash* does not require *Rundumschlag I* anymore.
- Protective/Warding Circles now require *Magical Signs*.
- Added missing *Ancestor Glyphs* from The Warring Kingdoms. They require *Magical Signs* as well.
- *Nimble* now increases MOV by 1.
- *Immunity to (Disease/Poison)* now correctly adds the selected entry.
- Derived characteristics are now correctly calculated on character sheet.
- Item templates have floating number values (again). This **won’t** affect non-locked item templates in items.
- Requiring Spells now correctly disables the decrease button if the SR hits the required value.
- Invalid avatar paths will no longer result in a colored border with black background and an invalid file error in the console.
- Now filters Aspect Knowledge selection by active tradition.
- Now sorts lists properly depending on the selected locale (e.g. ä, ö and ü in German are basically treated as a, o and u respectively).
- Items now correcly reset if you load a character after you opened/created a character with items.
- Item weights are now correctly displayed.
- Item PA mods do not use the AT mod value anymore.
- *Improved Dodge I-III* now increases DO value.
- Profession *Spy* now correctly increases *Commerce* by 3.
- The used attributes for the skill check of ODEM ARCANUM are SGC/INT/INT now (following the German Regel-Wiki).
- *Combat Reflexes I-III* now increases INI value.
- Window is maximizable, unmaximizable and resizable.
  - Added a title bar on Windows and Linux, providing buttons in Windows 10 UWP style to minimize, (un)maximize and close the app. This bar is also the draggable area of the window.
- Removed the Start tab.
- Improved general performance.
- In *Profile Overview* and *Character Sheet* tabs, entries such as `Skill Specialization (Climbing: Trees), Skill Specialization (Survival: Find Campsite)` are now written as `Skill Specialization (Climbing: Trees, Survival: Find Campsite)`, providing a better overview and readability in addition to more space.
- A new Redo button is added to the Navigation Bar. History resets after saving, finishing RCP selection and finishing character creation as well as switching to another character.
- Fixed *Property Knowledge*’s and *Aspect Knowledge*’s AP cost and effects.
- Fixed Languages and Scripts selection texts in RCP selections window.
- Fixed loading characters with active Blessings.

## German Specific

- Includes new traditions, aspects and liturgcal chants from **Aventurisches Götterwirken I**.
- Added info for selected race in Races tab.
- CON instead of COU now increases WS value.
- Fixed *Intuitive Caster*’s spell limit and AE value.

## English Specific

- Added info box for selected race in Races tab, but (most of the) texts are still missing.

# 0.48.1

- Undo function is working again for advantages, disadvantages and special abilities.
- Spells can now be de/activated as intended.
- Cantrips/Blessing are now sorted on the character sheet.
- The total attribute maximum is shown on the attribute page during character creation.

# 0.48.0

- Heaps of bugs fixed. I lost sight of all bugs, so I won’t provide a detailed list this time.
- Added a funtion to duplicate heroes.
- New interface for managing permanent AE/KP loss.
- Windows x86 support. (I am sorry for all the macOS users out there; I am still searching for a good way to build for Mac as I do not have a Mac at home.)
- Removed support for heroes created with app version lower than 0.45.0.
- If advantage/disadvantage list is empty, a placeholder will be shown. This is to ensure that having an empty list is intentional - and not a bug.

## German Specific

- Aventurian Names, Inns & Taverns, Aventurian Bestiary and The Warring Kingdoms are fully implemented (they should be). All entries from Aventurian Magic I are available. Optional Rules from AMI are not (yet) available.
- AMI is now basically complete. During reworking the entries some issues occured that might cause your characters to not work properly.
  - Selecting *Meistertalentierte*, *Zauberbarden* or *Zaubertänzer* as your magical tradition requires a second selection. *Meistertalentierte* choose their *Meistertalent*, *Zauberbarden* or *Zaubertänzer* choose their music/dance tradition (Ceoladir etc). If the affected characters are in character creation phase, you will be able to remove the existing tradition special ability and reactivate it with the correct selection. If character creation is finished, you have to create the respective character(s) again.
  - *Exorzist I* and *Meistertrick I* were missing selection options. Now they are included. The selection options do not affect the AP cost, so you can try to fix it the same way as you did for the magical tradition above.

# 0.47.3

- The requirement *Manifesto 10* for Elemental Servant referred to Wall of Fog instead of Manifesto.

# 0.47.2

- The calculations of total weight and total price in equipment tab should work again. Armor is excluded from the total weight calculation, because armor is excluded from carrying capacity if its in use.
- Character Sheet is working again.
- The skills tab contains a pane on the right side. If you click on the "i" buttons, it will show you additional information about the respective skill. Well, it will show you in the future: Currently, there is not much data available to show.
- The item list now properly resets for every new character.

# 0.47.1

- Fixed an issue with a race or a culture as a requirement. This issue caused some professions to never appear in the list.

# 0.47.0

Initial English release.
