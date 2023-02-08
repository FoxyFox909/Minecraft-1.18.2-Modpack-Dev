// priorty: 0


console.info('Hello from fox')
//This is a script with the purpose of unifying the modpack, allowing more mod interactions, and overall increasing quality of life and experience.

/* 

onEvent('recipes', event => {
//	event.shapeless("minecraft:sand", ["minecraft:gravel", "minecraft:gravel", "minecraft:gravel"])
})

*/



//Set of fixes to item tags that will help them be compatible and interactabible with other mods
onEvent('item.tags', tagfixes => {
	
	/*Allows stripped logs from Better End mod to be used with Create
	Formerly held the following item ids prior to regex
	betterend:mossy_glowshroom_stripped_log
	betterend:pythadendron_stripped_log
	betterend:end_lotus_stripped_log
	betterend:end_lotus_stripped_log
	betterend:lacugrove_stripped_log
	betterend:dragon_tree_stripped_log
	betterend:tenanea_stripped_log
	betterend:helix_tree_stripped_log
	betterend:umbrella_tree_stripped_log
	betterend:jellyshroom_stripped_log
	betterend:lucernia_stripped_log*/
	tagfixes.add('c:stripped_logs', /betterend:.+_stripped_log/)
	
	
	/*Allows stripped logs from Better Nether mod to be used with Create
	Formerly held the following item ids prior to regex
	betternether:stalagnate_stripped_log
	betternether:willow_stripped_log
	betternether:rubeus_stripped_log
	betternether:wart_stripped_log
	betternether:mushroom_fir_stripped_log
	betternether:anchor_tree_stripped_log
	betternether:stalagnate_stripped_log
	betternether:nether_sakura_stripped_log*/
	tagfixes.add('c:stripped_logs', /betternether:.+_stripped_log/)
	
	
	/*Allows stripped logs from Bewitchment mod to be used with Create
	Formerly held the following item ids prior to regex
	bewitchment:stripped_juniper_log
	bewitchment:stripped_cypress_log
	bewitchment:stripped_elder_log
	bewitchment:stripped_dragons_blood_log*/
	tagfixes.add('c:stripped_logs', /bewitchment:stripped.+_log/)
	tagfixes.add('c:stripped_logs', 'bwplus:stripped_yew_log')
	
	
	/*Allows stripped logs from Charm mod to be used with Create
	Formerly held the following item ids prior to regex
	charm:stripped_azalea_log
	charm:stripped_azalea_wood
	charm:stripped_ebony_log
	charm:stripped_ebony_wood
	*/
	tagfixes.add('c:stripped_logs', /charm:stripped.+(_log|_wood)/)
		
})


onEvent('recipes', recipefixes => {
	
	
	//Allows crushing of Bewitchment mod ores
	recipefixes.recipes.createCrushing([
	'bewitchment:raw_silver',
	Item.of('bewitchment:raw_silver').withChance(0.75),
	Item.of('create:experience_nugget').withChance(0.75),
	Item.of('minecraft:cobblestone').withChance(0.12)
	], 'bewitchment:silver_ore')
	
	recipefixes.recipes.createCrushing([
	'2x bewitchment:raw_silver',
	Item.of('bewitchment:raw_silver').withChance(0.75),
	Item.of('create:experience_nugget').withChance(0.75),
	Item.of('minecraft:cobbled_deepslate').withChance(0.12)
	], 'bewitchment:deepslate_silver_ore')
	
	recipefixes.recipes.createCrushing([
	'81x bewitchment:silver_nugget',
	Item.of('27x bewitchment:silver_nugget').withChance(0.75),
	Item.of('9x create:experience_nugget').withChance(0.75)
	], 'bewitchment:raw_silver_block')
	
	recipefixes.recipes.createCrushing([
	'9x bewitchment:silver_nugget',
	Item.of('3x bewitchment:silver_nugget').withChance(0.75),
	Item.of('create:experience_nugget').withChance(0.75)
	], 'bewitchment:raw_silver')
	
	recipefixes.recipes.createCrushing([
	'3x bewitchment:salt',
	Item.of('3x bewitchment:salt').withChance(0.75),
	Item.of('create:experience_nugget').withChance(0.75),
	Item.of('minecraft:cobblestone').withChance(0.12)
	], 'bewitchment:salt_ore')
	
	recipefixes.recipes.createCrushing([
	'6x bewitchment:salt',
	Item.of('6x bewitchment:salt').withChance(0.75),
	Item.of('create:experience_nugget').withChance(0.75),
	Item.of('minecraft:cobbled_deepslate').withChance(0.12)
	], 'bewitchment:deepslate_salt_ore')
	
	
	//Allows crushign of Better End mod ores
	recipefixes.recipes.createCrushing([
	'betterend:thallasium_raw',
	Item.of('betterend:thallasium_raw').withChance(0.75),
	Item.of('create:experience_nugget').withChance(0.75),
	Item.of('minecraft:end_stone').withChance(0.12)
	], 'betterend:thallasium_ore')
			
	recipefixes.recipes.createCrushing([
	'9x betterend:thallasium_nugget',
	Item.of('3x betterend:thallasium_nugget').withChance(0.75),
	Item.of('create:experience_nugget').withChance(0.75)
	], 'betterend:thallasium_raw')
	
	recipefixes.recipes.createCrushing([
	'3x betterend:ender_shard',
	Item.of('2x betterend:ender_shard').withChance(0.75),
	Item.of('2x create:experience_nugget').withChance(0.75)
	], 'betterend:ender_ore')
	
	
	//Allows crushing and milling of Better Nether mod blocks
	recipefixes.recipes.createCrushing([
	'4x minecraft:bone',
	Item.of('2x minecraft:bone').withChance(0.75)
	], 'betternether:bone_block')
	
	recipefixes.recipes.createMilling([
	'minecraft:bone_meal',
	Item.of('minecraft:bone_meal').withChance(0.50),
	Item.of('minecraft:bone').withChance(0.12)
	], 'betternether:bone_stalactite')
	
	recipefixes.recipes.createCrushing([
	'minecraft:lapis_lazuli',
	Item.of('6x betternether:lapis_pile').withChance(0.75),
	Item.of('create:experience_nugget').withChance(0.75),
	Item.of('minecraft:neterrack').withChance(0.12)
	], 'betternether:nether_lapis_ore')
	
		
	//Allows crushign of Biomes You'll Go mod items
		recipefixes.recipes.createCrushing([
	'4x minecraft:quartz',
	Item.of('2x minecraft:quartz').withChance(0.75)
	], 'byg:raw_quartz_block')
	
		recipefixes.recipes.createCrushing([
	'9x byg:pendorite_scraps',
	Item.of('9x byg:pendorite_scraps').withChance(0.25),
	Item.of('9x create:experience_nugget').withChance(0.75)	
	], 'byg:raw_pendorite_block')
	
	recipefixes.remove({id:'createplus:byg/crushing/pendorite_ore'})
	
	recipefixes.remove({id:'things:hardening_catalyst'})
	
	recipefixes.remove({id:'fantasyorigins:traveler_stone'})
	
	recipefixes.remove({id:'genesis:orb_of_origin'})
		
	recipefixes.recipes.createCrushing([
	'byg:raw_pendorite',
	Item.of('byg:raw_pendorite').withChance(0.25),
	Item.of('create:experience_nugget').withChance(0.75),
	Item.of('byg:blue_netherrack').withChance(0.12)	
	], 'byg:pendorite_ore')
	
	
	//Allows crushing of Things mod's gleaming ore
	recipefixes.recipes.createCrushing([
	'things:gleaming_powder',
	Item.of('things:gleaming_powder').withChance(0.50),
	Item.of('create:experience_nugget').withChance(0.75),
	Item.of('minecraft:cobblestone').withChance(0.12)
	], 'things:gleaming_ore')
	
	recipefixes.recipes.createCrushing([
	'2x things:gleaming_powder',
	Item.of('things:gleaming_powder').withChance(0.75),
	Item.of('create:experience_nugget').withChance(0.75),
	Item.of('minecraft:cobbled_deepslate').withChance(0.12)
	], 'things:deepslate_gleaming_ore')
	
	
	/*recipefixes.shapeless(Item.of('things:hardening_catalyst'), [
    'BDS',
    'NAN',
    'VDO'
  ], {
    D: 'minecraft:dragon_egg',
    B: 'bosses_of_mass_destruction:blazing_eye',
	N: 'blockus:nether_stars_block',
	O: 'bosses_of_mass_destruction:obsidian_heart',
	A: Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 3),
	V: 'bosses_of_mass_destruction:void_thorn',
	S:	'bosses_of_mass_destruction:ancient_anima'
	
	
  })*/
	
	/*recipefixes.shapeless(Item.of('things:hardening_catalyst'),
	[
		'minecraft:dragon_egg',
		'bosses_of_mass_destruction:blazing_eye',
		'blockus:nether_stars_block',
		'bosses_of_mass_destruction:obsidian_heart',
		Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 3),
		'bosses_of_mass_destruction:void_thorn',
		'bosses_of_mass_destruction:ancient_anima'
	
	]
  )
	*/
	
	recipefixes.recipes.createMechanicalCrafting('things:hardening_catalyst', [
    'BDS',
    'NAN',
    'VDO'
  ], {
    D: 'minecraft:dragon_egg',
    B: 'bosses_of_mass_destruction:blazing_eye',
	N: 'blockus:nether_stars_block',
	O: 'bosses_of_mass_destruction:obsidian_heart',
	A: Item.of('minecraft:enchanted_book').enchant('minecraft:unbreaking', 3),
	V: 'bosses_of_mass_destruction:void_thorn',
	S:	'bosses_of_mass_destruction:ancient_anima'
	
	
  })
  
        
	
})










