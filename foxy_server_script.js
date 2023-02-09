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




/*BlockEvents.rightClicked((event) => {
    const { block, item } = event

    // Test if item is a spawn egg
    if (!RegExp(/_spawn_egg/).test(item.id)) {
        return
    }

    // Check if block is a mob spawner
    if (block.id !== "minecraft:spawner") {
        event.cancel() // Prevent mob from spawning
    }
})
*/

onEvent('block.place', event => {
    const {block, player, level, item} = event
   	const minSpawnRange = 0
	const maxSpawnRange = 5
	
	
	
	let randomSpawnPos = generateRandomCoord;
	//let blockString = block.id
	
	//if (block.id == 'minecraft:white_banner' || block.id == 'minecraft:orange_banner_banner' || block.id == 'minecraft:magenta_banner' || block.id == 'minecraft:light_blue_banner' || block.id == 'minecraft:yellow_banner' || block.id == 'minecraft:lime_banner' || block.id == 'minecraft:pink_banner' || block.id == 'minecraft:gray_banner' || block.id == 'minecraft:light_gray_banner' || block.id == 'minecraft:cyan_banner' || block.id == 'minecraft:purple_banner' || block.id == 'minecraft:blue_banner' || block.id == 'minecraft:brown_banner' || block.id == 'minecraft:green_banner' || block.id == 'minecraft:red_banner' || block.id == 'minecraft:black_banner') {
	if (/minecraft:.+_banner/.test(block.id) == true){	
		event.server.tell(Text.green(event.getBlock().entityData))
		//let bannerPattern = event.server.runCommand(`/data get block ` + block.x + ' ' + block.y + ' ' + block.z + ` Patterns`)
		//event.server.tell(Text.green(bannerPattern))
		
		event.server.tell(Text.green(block.nbt()))
		
		switch (block.id) {
			case 'minecraft:orange_banner':
			//event.server.runCommand(`/summon fox ` + (block.x+randomSpawnPos()) + ' ' + block.y + ' ' + (block.z+randomSpawnPos()))
			event.server.tell(Text.green('Item.of(\'minecraft:white_banner\', \'{BlockEntityTag:{Patterns:[{Color:9,Pattern:\"mr\"},{Color:8,Pattern:\"bs\"},{Color:7,Pattern:\"cs\"},{Color:8,Pattern:"bo"},{Color:15,Pattern:\"ms\"},{Color:8,Pattern:\"hh\"},{Color:8,Pattern:\"mc\"},{Color:15,Pattern:\"bo\"}],id:\"minecraft:banner\"},HideFlags:32,display:{Name:\'{\"color\":\"gold\",\"translate\":\"block.minecraft.ominous_banner\"}\'}}\')'))
			break
			case 'minecraft:white_banner':
			//event.server.runCommand(`/summon fox ` + (block.x+randomSpawnPos()) + ' ' + block.y + ' ' + (block.z+randomSpawnPos()))
			
			//event.server.tell(Text.green(block.getEntityData()))
			break
			
			case 'Item.of(\'minecraft:white_banner\', \'{BlockEntityTag:{Patterns:[{Color:9,Pattern:\"mr\"},{Color:8,Pattern:\"bs\"},{Color:7,Pattern:\"cs\"},{Color:8,Pattern:"bo"},{Color:15,Pattern:\"ms\"},{Color:8,Pattern:\"hh\"},{Color:8,Pattern:\"mc\"},{Color:15,Pattern:\"bo\"}],id:\"minecraft:banner\"},HideFlags:32,display:{Name:\'{\"color\":\"gold\",\"translate\":\"block.minecraft.ominous_banner\"}\'}}\')':
			//event.server.runCommand(`/summon fox ` + (block.x+randomSpawnPos()) + ' ' + block.y + ' ' + (block.z+randomSpawnPos()))
			//case
			
		}
	}


		// Check if the placed block is Cobblestone
    /* if (block.id == placeCobblestone) {
        
        
		  event.server.runCommand(`/summon fox ` + (block.x+randomSpawnPos()) + ' ' + block.y + ' ' + (block.z+randomSpawnPos()))
		  console.log('Luciri2 /summon fox ' + (block.x+randomSpawnPos()) + ' ' + block.y + ' ' + (block.z+randomSpawnPos()))
		}
    */
})


const generateRandomCoord = () => {
		let random = Math.floor(Math.random()*maxSpawnRange);
		if(Math.round(Math.random())) {
			random = random*-1;
		}
		return random;
	};

//randomTick



onEvent("item.right_click", (event) => {
	if(event.item.id == "minecraft:trident"){
		event.server.tell(Text.green('right click detected'))
		event.server.scheduleInTicks(10, event.player, (callback) => {
		callback.server.tell(Text.green('callback'))
		createFlame(event, `minecraft:trident`)
		})
		
	}
	
})

function createFlame(event, hardItem) {
	
	let player = event.player
	let recursionItem = event.item.id
	//const hardItem
	event.server.tell(Text.green('recursionItem is ' + recursionItem + ' and hardItem is ' + hardItem))
	if(recursionItem != 'minecraft:trident') return
	event.server.tell(Text.green('Player position ' + Math.floor(player.x) + ' ' + Math.floor(player.y) + ' ' + Math.floor(player.z)))
	event.server.runCommandSilent(`/particle minecraft:soul_fire_flame ` + Math.floor(player.x) + ' ' + Math.floor(player.y) + ' ' + Math.floor(player.z) + ` 0.5 0.5 0.5 0.09 200 force @a`)
	event.server.scheduleInTicks(20, event.player, (callback) => {
		createFlame(event, hardItem)
	})
	
	
	//event.server.tell(Text.blue('player.x + ' ' + player.y + ' ' + player.z'))
	//event.server.runCommand('/summon fox ' + player.x + ' ' + player.y + ' ' + player.z)
	//event.server.tell(Text.green('dear lord'))
}


onEvent('player.chat', (event) => {
	if (event.message.trim().equalsIgnoreCase('fox')) {
	event.server.tell(Text.green('Kon Kon'))
	}
})


onEvent('item.entity_interact', event => {
  	if (event.item.id != "minecraft:bucket" || event.target.type != "minecraft:goat") return
    Utils.server.tell("Is a Goat and is Holding a Bucket")
	event.item.count--
	event.player.giveInHand('minecraft:milk_bucket')
	event.target.playSound('entity.cow.milk')
})
