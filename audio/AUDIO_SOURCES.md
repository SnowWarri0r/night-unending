# Audio sources

Most sound effects here come from a public sound library under CC0 1.0 (no attribution required; credited anyway).
The music (music/) and the vehicle, boss and events sheets, the engine and car alarm loops and the passing pack were made for the game with Stable
Audio 3 Medium (Stability AI); see the end of this file. The rest of the game's sounds are synthesised at runtime in
src/game/audio.ts: the loot chimes, grenade pins, the ring after a close blast, the roar of burning petrol and the UI
ticks.
Every file is re-encoded to AAC (.m4a), which every browser plays,
iPhone Safari included.

The sheets (mech, reloads, impacts, zombie-vox, voice, melee, build, blast, ui) hold several clips one after another with
silence between: each clip was cut out, its leading silence trimmed, cut where it falls quiet, faded and
peak-normalised, mono 44.1 kHz AAC. The slices are in src/game/sheetsAudio.ts. The gun-*.m4a files are one shot each.

- `gun-pistol.m4a`: "9mm pistol shot" by michorvath, Freesound, CC0 1.0. https://freesound.org/people/michorvath/sounds/427592/
- `gun-revolver.m4a`: "357 Magnum Revolver Gunshot" by Shark_Anthony, Freesound, CC0 1.0. https://freesound.org/people/Shark_Anthony/sounds/683186/
- `gun-smg.m4a`: "An automatic rifle being shot once // punchy sounding" by serøutōnin--deprivəd, Freesound, CC0 1.0. https://freesound.org/people/ser%C3%B8ut%C5%8Dnin--depriv%C9%99d/sounds/855654/
- `gun-rifle.m4a`: "AR15 rifle shot" by michorvath, Freesound, CC0 1.0. https://freesound.org/people/michorvath/sounds/427596/
- `gun-lmg.m4a`: "An AK-47 being shot // has distinctive metallic kalashnikov-esque report" by serøutōnin--deprivəd, Freesound, CC0 1.0. https://freesound.org/people/ser%C3%B8ut%C5%8Dnin--depriv%C9%99d/sounds/855841/
- `gun-sniper.m4a`: "Sniper Rifle" by SuperPhat, Freesound, CC0 1.0. https://freesound.org/people/SuperPhat/sounds/514228/
- `gun-shotgun.m4a`: "20 gauge shotgun gunshot" by michorvath, Freesound, CC0 1.0. https://freesound.org/people/michorvath/sounds/427595/
- `mech.m4a` (a magazine out, one in and the charge, a pump, a bolt action, a dry fire): "AK-47 Assault Rifle being unloaded and reloaded" by serøutōnin--deprivəd, Freesound, CC0 1.0. https://freesound.org/people/ser%C3%B8ut%C5%8Dnin--depriv%C9%99d/sounds/674742/; "Shotgun Rack Sample.wav" by Krovi, Freesound, CC0 1.0. https://freesound.org/people/Krovi/sounds/613801/; "22 Bolt.wav" by Danwardvs, Freesound, CC0 1.0. https://freesound.org/people/Danwardvs/sounds/204204/; "9mm Handgun Being Dry Fired" by serøutōnin--deprivəd, Freesound, CC0 1.0. https://freesound.org/people/ser%C3%B8ut%C5%8Dnin--depriv%C9%99d/sounds/674568/
- `reloads.m4a` (whole reloads of a pistol, a revolver, a submachine gun and a machine gun with their pauses squeezed; a bolt opened and closed, a round pressed in, three shotgun shells): "PistolReloadSound.wav" by MaximBomba, Freesound, CC0 1.0. https://freesound.org/people/MaximBomba/sounds/432139/; "Clean Revolver Reload" by Dredile, Freesound, CC0 1.0. https://freesound.org/people/Dredile/sounds/177863/; "Uzi submachine gun being reloaded while empty. Full sequence" by serøutōnin--deprivəd, Freesound, CC0 1.0. https://freesound.org/people/ser%C3%B8ut%C5%8Dnin--depriv%C9%99d/sounds/677160/; "Machine_Gun_Reload.wav" by ken788, Freesound, CC0 1.0. https://freesound.org/people/ken788/sounds/386777/; "Mauser 98k - bolt-action mechanism sound" by Walking.With.Microphones, Freesound, CC0 1.0. https://freesound.org/people/Walking.With.Microphones/sounds/802673/; "Pushing 50 Cal BMG Round into Magazine" by qubodup, Freesound, CC0 1.0. https://freesound.org/people/qubodup/sounds/855580/; "shell load.ogg" by CeebFrack, Freesound, CC0 1.0. https://freesound.org/people/CeebFrack/sounds/108793/; "Shotgun Shell Load" by Bratish, Freesound, CC0 1.0. https://freesound.org/people/Bratish/sounds/500293/
- `impacts.m4a` (four bullet hits cut from one take, two gore bursts, a ricochet, a body fall): "VisceralBulletImpacts.wav" by u1769092, Freesound, CC0 1.0. https://freesound.org/people/u1769092/sounds/423301/; "Gore Impact - "LOT OF HEART"" by magnuswaker, Freesound, CC0 1.0. https://freesound.org/people/magnuswaker/sounds/641046/; "Wet Splat 1.mp3" by nebulasnails, Freesound, CC0 1.0. https://freesound.org/people/nebulasnails/sounds/495118/; "Ricochet 2.wav" by morganpurkis, Freesound, CC0 1.0. https://freesound.org/people/morganpurkis/sounds/392975/; "BODY FALL - V HVY - DIRT" by leonelmail, Freesound, CC0 1.0. https://freesound.org/people/leonelmail/sounds/504626/
- `zombie-vox.m4a` (24 voices from "Zombies Sound Pack" by artisticdude, OpenGameArt, CC0 1.0, https://opengameart.org/content/zombies-sound-pack, then a bite): "Zombie Bite" by Lukeo135, Freesound, CC0 1.0. https://freesound.org/people/Lukeo135/sounds/518155/
- `voice.m4a`: "Voice_AdultMale_PainGrunts_09.wav" by MrFossy, Freesound, CC0 1.0. https://freesound.org/people/MrFossy/sounds/547209/; "Male Grunting In Pain" by elynch0901, Freesound, CC0 1.0. https://freesound.org/people/elynch0901/sounds/464486/; "male_hurt9.ogg" by micahlg, Freesound, CC0 1.0. https://freesound.org/people/micahlg/sounds/413186/
- `melee.m4a`: "Woosh (stick swung in the air)" by Dalesome, Freesound, CC0 1.0. https://freesound.org/people/Dalesome/sounds/352719/; "Bat_hit2" by hashtagsmcgee, Freesound, CC0 1.0. https://freesound.org/people/hashtagsmcgee/sounds/851452/
- `build.m4a` (four hammer blows cut from one take, two wood breaks): "Hammer on Wood" by L.i.Z.e.L.l.E_+, Freesound, CC0 1.0. https://freesound.org/people/L.i.Z.e.L.l.E_+/sounds/707864/; "Wood Break.wav" by Deathscyp, Freesound, CC0 1.0. https://freesound.org/people/Deathscyp/sounds/443293/; "Crate Break 4.wav" by kevinkace, Freesound, CC0 1.0. https://freesound.org/people/kevinkace/sounds/66780/
- `blast.m4a` (a grenade in layers: the close crack, the body, a sub-bass boom, a distant one, grit falling, the can landing; a bottle breaking, petrol catching): "Grenade Explosion SFX (medium-sized, meaty, realistic)" by unfa, Freesound, CC0 1.0. https://freesound.org/people/unfa/sounds/609587/; "Explosion" by FlashTrauma, Freesound, CC0 1.0. https://freesound.org/people/FlashTrauma/sounds/398283/; "boom 1 bassest.wav" by Logicogonist, Freesound, CC0 1.0. https://freesound.org/people/Logicogonist/sounds/239954/; "low mid afar explosion 1.wav" by Logicogonist, Freesound, CC0 1.0. https://freesound.org/people/Logicogonist/sounds/264031/; "Gravel Stone Dirt Debris Falling Small 1 13" by Sheyvan, Freesound, CC0 1.0. https://freesound.org/people/Sheyvan/sounds/569746/; "small metal object fall" by nicktermer, Freesound, CC0 1.0. https://freesound.org/people/nicktermer/sounds/259553/; "Glass Break 1.wav" by mccormick_iain, Freesound, CC0 1.0. https://freesound.org/people/mccormick_iain/sounds/371094/; "Basic Fire whoosh" by LookIMadeAThing, Freesound, CC0 1.0. https://freesound.org/people/LookIMadeAThing/sounds/260554/
- `ui.m4a`: "Cash Register Purchase" by Zott820, Freesound, CC0 1.0. https://freesound.org/people/Zott820/sounds/209578/; "UI Button Click" by benzix2, Freesound, CC0 1.0. https://freesound.org/people/benzix2/sounds/467951/
- `foley.m4a` (brass on the ground, shotgun hulls, a gun coming up, a round into a vest, the plates giving way, a heartbeat, the shop's bell, coins, picking up rounds and things): "Shell Casing 7.wav" by NicJonesAudio, Freesound, CC0 1.0. https://freesound.org/people/NicJonesAudio/sounds/347603/; "empty shotgun shells/casings hitting ground bouncing" by Metrolynn, Freesound, CC0 1.0. https://freesound.org/people/Metrolynn/sounds/620929/; "Rifle_Equip1" by BaggoNotes, Freesound, CC0 1.0. https://freesound.org/people/BaggoNotes/sounds/784753/; "HeavyBulletPing.mp3" by wilhellboy, Freesound, CC0 1.0. https://freesound.org/people/wilhellboy/sounds/351371/; "clank.wav" by Empiremonkey, Freesound, CC0 1.0. https://freesound.org/people/Empiremonkey/sounds/616492/; "Heartbeat.wav" by morganpurkis, Freesound, CC0 1.0. https://freesound.org/people/morganpurkis/sounds/384662/; "Ryuuzan_shop_door_bell00.wav" by ryuuzan, Freesound, CC0 1.0. https://freesound.org/people/ryuuzan/sounds/192761/; "Coins" by Mateusz_Chenc, Freesound, CC0 1.0. https://freesound.org/people/Mateusz_Chenc/sounds/512216/; "Pickup Ammo" by unfa, Freesound, CC0 1.0. https://freesound.org/people/unfa/sounds/193428/; "item-pickup-v2.wav" by DeltaCode, Freesound, CC0 1.0. https://freesound.org/people/DeltaCode/sounds/678385/
- `loop-rain.m4a` (11 s of it, looped with its own tail faded over the start): "rain_loop.wav" by Krokulator, Freesound, CC0 1.0. https://freesound.org/people/Krokulator/sounds/679176/
- `loop-fire.m4a` (12 s, looped the same way): "Crackling Flames (loop)" by NickTayloe, Freesound, CC0 1.0. https://freesound.org/people/NickTayloe/sounds/813328/
- `loop-birds.m4a` (20 s, looped the same way): "morning_birds_ambience.wav" by vibe_crc, Freesound, CC0 1.0. https://freesound.org/people/vibe_crc/sounds/50619/
- `loop-wind.m4a` (15 s, looped the same way): "WIND_loop" by kevinklang, Freesound, CC0 1.0. https://freesound.org/people/kevinklang/sounds/841982/
- `loop-generator.m4a` (8 s, looped the same way): "Diesel engine idling" by chungus43A, Freesound, CC0 1.0. https://freesound.org/people/chungus43A/sounds/705386/
- `search-rustle.m4a`: "Bag Rustle.wav" by binxa, Freesound, CC0 1.0. https://freesound.org/people/binxa/sounds/595827/
- `craft-metal.m4a`: "Hammer, metal" by 16GPanskaToman_Kristian, Freesound, CC0 1.0. https://freesound.org/people/16GPanskaToman_Kristian/sounds/496263/
- `security-alarm.m4a`: "Alarm" by Frenchyboy, OpenGameArt, CC0 1.0 (re-encoded to AAC). https://opengameart.org/content/alarm-2
- `zombie-moans.m4a`: "Zombie Moans" by Darsycho, OpenGameArt, CC0 1.0. https://opengameart.org/content/zombie-moans
- `zombie-death.m4a`: "Zombie Groan 0" by OwNathan, Freesound, CC0 1.0. https://freesound.org/people/OwNathan/sounds/754438/
- `zombie-steps.m4a`: "footsteps pavement street" by Yuval, Freesound, CC0 1.0. https://freesound.org/people/Yuval/sounds/205817/
- `horror-ambience.m4a`: "Ambient horror" by techiew, OpenGameArt, CC0 1.0. https://opengameart.org/content/ambient-horror
- `thunder.m4a`: the first 7 s of "Thunder2" by Yoyodaman234, Freesound, CC0 1.0 (trimmed, faded, re-encoded to AAC). https://freesound.org/people/Yoyodaman234/sounds/267551/

## Music

`music/*.m4a` (menu, day, dusk, night, boss, dawn, gameover) were generated for this game from text prompts with
Stable Audio 3 Medium (Stability AI, 2026), each picked by ear from three takes, then re-encoded to AAC 96 kbit/s.
The model is under the Stability AI Community License (https://stability.ai/license): its outputs belong to whoever
made them, and use is free for anyone below US $1M in annual revenue. The prompts:

- `menu.m4a`: dark cinematic main menu theme for a zombie survival game, slow piano melody over warm strings, a hopeful undertone, 70 BPM
- `day.m4a`: post-apocalyptic daytime exploration music, lonely clean electric guitar, soft ambient pads, light brushed drums, calm and open, 90 BPM
- `dusk.m4a`: tense build-up music as night falls, ticking hi-hats, pulsing synth bass, rising strings, suspense growing, 110 BPM
- `night.m4a`: intense zombie horde combat music, pounding drums, distorted guitar riffs, aggressive synth bass, adrenaline, 150 BPM
- `boss.m4a`: epic boss battle music, massive taiko drums and orchestral hits, heavy metal guitars, dark choir, 160 BPM
- `dawn.m4a`: triumphant sunrise theme after surviving the night, uplifting strings and piano, warm brass swell, relief and hope
- `gameover.m4a`: somber game over music, solo piano, fading strings, quiet and short

## Generated sound effects

`vehicle.m4a`, `boss.m4a`, `events.m4a`, `loop-engine.m4a`, `loop-car-alarm.m4a` and `pack-pass.m4a` were generated for this game from text prompts with
Stable Audio 3 Medium (Stability AI, 2026), each picked by ear from four takes, under the same licence as the music
above. Every prompt ended with ", sound effect, isolated, close, dry, high quality recording", with the negative prompt
"music, melody, song, background music, speech". Each take was cut to where it sounds, faded and peak-normalised, mono
44.1 kHz AAC; the bloater's swell is its first second, and the engine is looped with its tail faded over its start.
The clips:

- `vehicle.m4a` horn: a car horn honking once, a short honk of an old sedan's horn
- `vehicle.m4a` start: a car engine starting: the starter motor cranks, then the petrol engine catches and idles
- `vehicle.m4a` stop: a car engine being switched off, the engine shuts down and dies
- `vehicle.m4a` crash: a car crashing into a wall, crunching metal impact and breaking glass
- `vehicle.m4a` fire: a car catching fire, gasoline igniting with a loud whoosh, flames bursting
- `boss.m4a` brace: a huge monster snorting and growling deeply, about to charge
- `boss.m4a` charge: a giant running with heavy thundering footsteps, the ground shaking
- `boss.m4a` smash: a giant smashing through a wooden barricade, splintering wood and debris
- `boss.m4a` daze: a giant crashing head first into a concrete wall, a crunch and a dull ringing
- `boss.m4a` wind: a heavy butcher's cleaver raised up, a metal scrape and a slow whoosh
- `boss.m4a` slam: a huge cleaver slammed into the ground, a deep heavy thud and a metal clang
- `events.m4a` throw: a quick whoosh of an object thrown hard through the air
- `events.m4a` spit: a monster spitting, a wet gross hawk and a gob of spit flying
- `events.m4a` acid: acid splashing on the ground and sizzling, corrosive hissing liquid
- `events.m4a` fuse: a bloated monster swelling up, wet gurgling and a rising hiss before it bursts
- `events.m4a` zap: an electric shock, high voltage spark crackling and zapping
- `events.m4a` shock: a sharp electrical discharge, a single heavy electric thump and crackle
- `events.m4a` decoy: an old alarm clock ringing loudly, shrill metal bell
- `events.m4a` flare: a signal flare fired into the sky, a whooshing launch and a distant pop
- `events.m4a` plane: a cargo plane flying low overhead, propeller engines droning past
- `events.m4a` radio: a walkie talkie radio, squelch, static and a garbled voice transmission
- `events.m4a` radioSet: a heavy radio set put down on a metal truck bed, a clunk and a switch click
- `events.m4a` surge: war drums approaching in the distance, getting louder and faster, ominous
- `events.m4a` nightfall: a deep ominous horn drone as night falls, dark and low
- `events.m4a` dawn: a few birds chirping at dawn, short bird calls in a quiet morning
- `events.m4a` down: a man collapsing to the ground, body fall and a pained groan
- `events.m4a` levelUp: a short bright triumphant game level up sting
- `events.m4a` legendary: a magical shimmering treasure found chime, a game reward jingle
- `loop-engine.m4a` loop: a petrol car engine idling steadily, constant even rumble
- `loop-car-alarm.m4a` (looped the same way): a car alarm going off in a city street, a loud repeating siren wail and horn beeps
- `pack-pass.m4a`: a large crowd of zombies groaning and shuffling past in the distance, many moaning voices

## Voice

- `intro-zh.m4a`, `intro-en.m4a`: the opening's radio call (the lines `intro.1`–`intro.4`), spoken by CosyVoice 2 (FunAudioLLM/CosyVoice2-0.5B, Apache-2.0) in the voice of the woman in CosyVoice's own prompt clip (asset/zero_shot_prompt.wav, Apache-2.0), asked for "a low, tired but steady voice, like a soldier on a field radio"; each line the best of a few takes by how closely Whisper heard the script. Put through a radio's band, a little overdrive and a squelch either side of each line, over static (ffmpeg).
- `help-<m|f>-<lang>.m4a`: the call for help, three lines each ("救命啊！救命！", "有人吗？救命啊！", "快来人啊！救救我！"; "Help! Somebody, help!", "Is anyone there? Help me!", "Help! Please, help me!"), spoken by CosyVoice 2 (FunAudioLLM/CosyVoice2-0.5B, Apache-2.0) asked to scream for help in terror, a man's voice (the SFT model's own 中文男 / 英文男 as the clone's prompt) and a woman's (CosyVoice's own prompt clip, asset/zero_shot_prompt.wav, Apache-2.0); each the best of three by how closely Whisper heard the script (the man's second and third Chinese lines the best of eight, heard again once processed), trimmed, pressed and given a street's echo (ffmpeg).
- `radio-<line>-<lang>.m4a` (`why-battery`, `why-tower`, `why-codes`, `why-pilot`, `why-relay`, `called`; `zh`, `en`): the rescue team's lines on the way out (`radio.*`), in the opening's voice and tone, each the best of up to three takes by Whisper, through the same radio treatment.
