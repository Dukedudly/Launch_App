/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('launch_vehicles').del()
  await knex('launch_vehicles').insert([
    {
      lsp_user_id: 8,
      launch_vehicle:'Falcon 9',
      cost:67,
      meo_weight:14000,
      leo_weight:22800,
      geo_weight:8300,
      heo_weight:10200,
      booked_status: 'launched',
      launch_pad_id: 1,
      picture: '/falcon_9.jpg',
      description: `Falcon 9 is a partially reusable heavy-lift launch vehicle that can carry cargo and crew into Earth orbit, produced by American aerospace company SpaceX.

      The rocket has two stages. The first (booster) stage carries the second stage and payload to a certain altitude, after which the second stage lifts the payload to its ultimate destination. The rocket evolved through several versions. V1.0 flew from 2010–2013, V1.1 flew from 2013–2016, while V1.2 Full Thrust first launched in 2015, encompassing the Block 5 variant, flying since May 2018.`,
      link: 'https://www.spacex.com/vehicles/falcon-9/'
    },
    {
      lsp_user_id: 8,
      launch_vehicle:'Falcon 9',
      cost:70,
      meo_weight:14000,
      leo_weight:22800,
      geo_weight:8300,
      heo_weight:10200,
      booked_status: 'available',
      launch_pad_id: 5,
      picture: '/falcon_9.jpg',
      description: `Falcon 9 is a partially reusable heavy-lift launch vehicle that can carry cargo and crew into Earth orbit, produced by American aerospace company SpaceX.

      The rocket has two stages. The first (booster) stage carries the second stage and payload to a certain altitude, after which the second stage lifts the payload to its ultimate destination. The rocket evolved through several versions. V1.0 flew from 2010–2013, V1.1 flew from 2013–2016, while V1.2 Full Thrust first launched in 2015, encompassing the Block 5 variant, flying since May 2018.`,
      link: 'https://www.spacex.com/vehicles/falcon-9/'
    },
    {
      lsp_user_id: 8,
      launch_vehicle:'Falcon 9',
      cost:67,
      meo_weight:14000,
      leo_weight:22800,
      geo_weight:8300,
      heo_weight:10200,
      booked_status: 'available',
      launch_pad_id: 12,
      picture: '/falcon_9.jpg',
      description: `Falcon 9 is a partially reusable heavy-lift launch vehicle that can carry cargo and crew into Earth orbit, produced by American aerospace company SpaceX.

      The rocket has two stages. The first (booster) stage carries the second stage and payload to a certain altitude, after which the second stage lifts the payload to its ultimate destination. The rocket evolved through several versions. V1.0 flew from 2010–2013, V1.1 flew from 2013–2016, while V1.2 Full Thrust first launched in 2015, encompassing the Block 5 variant, flying since May 2018.`,
      link: 'https://www.spacex.com/vehicles/falcon-9/'
    },
    {
      lsp_user_id: 8,
      launch_vehicle:'Falcon 9',
      cost:65,
      meo_weight:14000,
      leo_weight:22800,
      geo_weight:8300,
      heo_weight:10200,
      booked_status: 'available',
      launch_pad_id: 12,
      picture: '/falcon_9.jpg',
      description: `Falcon 9 is a partially reusable heavy-lift launch vehicle that can carry cargo and crew into Earth orbit, produced by American aerospace company SpaceX.

      The rocket has two stages. The first (booster) stage carries the second stage and payload to a certain altitude, after which the second stage lifts the payload to its ultimate destination. The rocket evolved through several versions. V1.0 flew from 2010–2013, V1.1 flew from 2013–2016, while V1.2 Full Thrust first launched in 2015, encompassing the Block 5 variant, flying since May 2018.`,
      link: 'https://www.spacex.com/vehicles/falcon-9/'
    },
    {
      lsp_user_id: 8,
      launch_vehicle:'Falcon 9',
      cost:68,
      meo_weight:14000,
      leo_weight:22800,
      geo_weight:8300,
      heo_weight:10200,
      booked_status: 'booked',
      launch_pad_id: 1,
      picture: '/falcon_9.jpg',
      description: `Falcon 9 is a partially reusable heavy-lift launch vehicle that can carry cargo and crew into Earth orbit, produced by American aerospace company SpaceX.

      The rocket has two stages. The first (booster) stage carries the second stage and payload to a certain altitude, after which the second stage lifts the payload to its ultimate destination. The rocket evolved through several versions. V1.0 flew from 2010–2013, V1.1 flew from 2013–2016, while V1.2 Full Thrust first launched in 2015, encompassing the Block 5 variant, flying since May 2018.`,
      link: 'https://www.spacex.com/vehicles/falcon-9/'
    },
    {
      lsp_user_id: 8,
      launch_vehicle:'Falcon 9',
      cost:70,
      meo_weight:14000,
      leo_weight:22800,
      geo_weight:8300,
      heo_weight:10200,
      booked_status: 'available',
      launch_pad_id: 5,
      picture: '/falcon_9.jpg',
      description: `Falcon 9 is a partially reusable heavy-lift launch vehicle that can carry cargo and crew into Earth orbit, produced by American aerospace company SpaceX.

      The rocket has two stages. The first (booster) stage carries the second stage and payload to a certain altitude, after which the second stage lifts the payload to its ultimate destination. The rocket evolved through several versions. V1.0 flew from 2010–2013, V1.1 flew from 2013–2016, while V1.2 Full Thrust first launched in 2015, encompassing the Block 5 variant, flying since May 2018.`,
      link: 'https://www.spacex.com/vehicles/falcon-9/'
    },
    {
      lsp_user_id: 8,
      launch_vehicle:'Falcon 9',
      cost:68,
      meo_weight:14000,
      leo_weight:22800,
      geo_weight:8300,
      heo_weight:10200,
      booked_status: 'available',
      launch_pad_id: 12,
      picture: '/falcon_9.jpg',
      description: `Falcon 9 is a partially reusable heavy-lift launch vehicle that can carry cargo and crew into Earth orbit, produced by American aerospace company SpaceX.

      The rocket has two stages. The first (booster) stage carries the second stage and payload to a certain altitude, after which the second stage lifts the payload to its ultimate destination. The rocket evolved through several versions. V1.0 flew from 2010–2013, V1.1 flew from 2013–2016, while V1.2 Full Thrust first launched in 2015, encompassing the Block 5 variant, flying since May 2018.`,
      link: 'https://www.spacex.com/vehicles/falcon-9/'
    },
    {
      lsp_user_id: 4,
      launch_vehicle:'Atlas V',
      cost:105,
      meo_weight:8700,
      leo_weight:10500,
      geo_weight:6000,
      heo_weight:8500,
      booked_status: 'available',
      launch_pad_id: 13,
      picture: '/atlas_v.jpg',
      description: `Atlas V is an expendable launch system and the fifth major version in the Atlas launch vehicle family. It was originally designed by Lockheed Martin, now being operated by United Launch Alliance (ULA), a joint venture between Lockheed Martin and Boeing. Atlas V is also a major NASA launch vehicle. It is America's longest-serving active rocket.`,
      link: 'https://www.ulalaunch.com/rockets/atlas-v'
    },
    {
      lsp_user_id: 4,
      launch_vehicle:'Atlas V',
      cost:109,
      meo_weight:8700,
      leo_weight:10500,
      geo_weight:6000,
      heo_weight:8500,
      booked_status: 'launched',
      launch_pad_id: 13,
      picture: '/atlas_v.jpg',
      description: `Atlas V is an expendable launch system and the fifth major version in the Atlas launch vehicle family. It was originally designed by Lockheed Martin, now being operated by United Launch Alliance (ULA), a joint venture between Lockheed Martin and Boeing. Atlas V is also a major NASA launch vehicle. It is America's longest-serving active rocket.`,
      link: 'https://www.ulalaunch.com/rockets/atlas-v'
    },
    {
      lsp_user_id: 8,
      launch_vehicle:'Falcon Heavy',
      cost:90,
      meo_weight:17000,
      leo_weight:54400,
      geo_weight:22200,
      heo_weight:16700,
      booked_status: 'available',
      launch_pad_id: 1,
      picture: '/falcon_heavy.jpg',
      description: `Falcon Heavy is a partially reusable super heavy-lift launch vehicle produced by SpaceX, an American aerospace manufacturer. The rocket consists of a center core on which two Falcon 9 boosters are attached, and a second stage on top of the center core.[8] Falcon Heavy has the second highest payload capacity of any currently operational launch vehicle behind NASA's Space Launch System, and the fourth-highest capacity of any rocket to reach orbit, trailing behind SLS, Energia and the Saturn V.`,
      link: 'https://www.spacex.com/vehicles/falcon-heavy/'
    },
    {
      lsp_user_id: 8,
      launch_vehicle:'Falcon 9',
      cost:65,
      meo_weight:14000,
      leo_weight:22800,
      geo_weight:8300,
      heo_weight:10200,
      booked_status: 'available',
      launch_pad_id: 1,
      picture: '/falcon_9.jpg',
      description: `Falcon 9 is a partially reusable heavy-lift launch vehicle that can carry cargo and crew into Earth orbit, produced by American aerospace company SpaceX.

      The rocket has two stages. The first (booster) stage carries the second stage and payload to a certain altitude, after which the second stage lifts the payload to its ultimate destination. The rocket evolved through several versions. V1.0 flew from 2010–2013, V1.1 flew from 2013–2016, while V1.2 Full Thrust first launched in 2015, encompassing the Block 5 variant, flying since May 2018.`,
      link: 'https://www.spacex.com/vehicles/falcon-9/'
    },
    {
      lsp_user_id: 8,
      launch_vehicle:'Falcon Heavy',
      cost:90,
      meo_weight:17000,
      leo_weight:54400,
      geo_weight:22200,
      heo_weight:16700,
      booked_status: 'booked',
      launch_pad_id: 1,
      picture: '/falcon_heavy.jpg',
      description: `Falcon Heavy is a partially reusable super heavy-lift launch vehicle produced by SpaceX, an American aerospace manufacturer. The rocket consists of a center core on which two Falcon 9 boosters are attached, and a second stage on top of the center core.[8] Falcon Heavy has the second highest payload capacity of any currently operational launch vehicle behind NASA's Space Launch System, and the fourth-highest capacity of any rocket to reach orbit, trailing behind SLS, Energia and the Saturn V.`,
      link: 'https://www.spacex.com/vehicles/falcon-heavy/'
    },
    {
      lsp_user_id: 8,
      launch_vehicle:'Falcon Heavy',
      cost:91,
      meo_weight:17000,
      leo_weight:54400,
      geo_weight:22200,
      heo_weight:16700,
      booked_status: 'available',
      launch_pad_id: 1,
      picture: '/falcon_heavy.jpg',
      description: `Falcon Heavy is a partially reusable super heavy-lift launch vehicle produced by SpaceX, an American aerospace manufacturer. The rocket consists of a center core on which two Falcon 9 boosters are attached, and a second stage on top of the center core.[8] Falcon Heavy has the second highest payload capacity of any currently operational launch vehicle behind NASA's Space Launch System, and the fourth-highest capacity of any rocket to reach orbit, trailing behind SLS, Energia and the Saturn V.`,
      link: 'https://www.spacex.com/vehicles/falcon-heavy/'
    },
    {
      lsp_user_id: 8,
      launch_vehicle:'Falcon Heavy',
      cost:94,
      meo_weight:17000,
      leo_weight:54400,
      geo_weight:22200,
      heo_weight:16700,
      booked_status: 'available',
      launch_pad_id: 1,
      picture: '/falcon_heavy.jpg',
      description: `Falcon Heavy is a partially reusable super heavy-lift launch vehicle produced by SpaceX, an American aerospace manufacturer. The rocket consists of a center core on which two Falcon 9 boosters are attached, and a second stage on top of the center core.[8] Falcon Heavy has the second highest payload capacity of any currently operational launch vehicle behind NASA's Space Launch System, and the fourth-highest capacity of any rocket to reach orbit, trailing behind SLS, Energia and the Saturn V.`,
      link: 'https://www.spacex.com/vehicles/falcon-heavy/'
    },
    {
      lsp_user_id: 4,
      launch_vehicle:'Atlas V',
      cost:107,
      meo_weight:8700,
      leo_weight:10500,
      geo_weight:6000,
      heo_weight:8500,
      booked_status: 'available',
      launch_pad_id: 13,
      picture: '/atlas_v.jpg',
      description: `Atlas V is an expendable launch system and the fifth major version in the Atlas launch vehicle family. It was originally designed by Lockheed Martin, now being operated by United Launch Alliance (ULA), a joint venture between Lockheed Martin and Boeing. Atlas V is also a major NASA launch vehicle. It is America's longest-serving active rocket.`,
      link: 'https://www.ulalaunch.com/rockets/atlas-v'
    },
    {
      lsp_user_id: 4,
      launch_vehicle:'Atlas V',
      cost:108,
      meo_weight:8700,
      leo_weight:10500,
      geo_weight:6000,
      heo_weight:8500,
      booked_status: 'available',
      launch_pad_id: 6,
      picture: '/atlas_v.jpg',
      description: `Atlas V is an expendable launch system and the fifth major version in the Atlas launch vehicle family. It was originally designed by Lockheed Martin, now being operated by United Launch Alliance (ULA), a joint venture between Lockheed Martin and Boeing. Atlas V is also a major NASA launch vehicle. It is America's longest-serving active rocket.`,
      link: 'https://www.ulalaunch.com/rockets/atlas-v'
    },
    {
      lsp_user_id: 4,
      launch_vehicle:'Atlas V',
      cost:109,
      meo_weight:8700,
      leo_weight:10500,
      geo_weight:6000,
      heo_weight:8500,
      booked_status: 'available',
      launch_pad_id: 7,
      picture: '/atlas_v.jpg',
      description: `Atlas V is an expendable launch system and the fifth major version in the Atlas launch vehicle family. It was originally designed by Lockheed Martin, now being operated by United Launch Alliance (ULA), a joint venture between Lockheed Martin and Boeing. Atlas V is also a major NASA launch vehicle. It is America's longest-serving active rocket.`,
      link: 'https://www.ulalaunch.com/rockets/atlas-v'
    },
    {
      lsp_user_id: 5,
      launch_vehicle:'Electron',
      cost:8,
      meo_weight: null,
      leo_weight: 550,
      geo_weight: null,
      heo_weight: null,
      booked_status: 'booked',
      launch_pad_id: 14,
      picture: '/electron.jfif',
      description: `Electron is a two-stage, partially recoverable orbital launch vehicle developed by Rocket Lab, an American aerospace company with a wholly owned New Zealand subsidiary.[15][16] Electron was developed to service the commercial small satellite launch market.[17] Its Rutherford engines are the first electric-pump-fed engine to power an orbital-class rocket.[18] Electron is often flown with a kickstage or Rocket Lab's Photon spacecraft. Although the rocket was designed to be expendable, Rocket Lab has recovered the first stage twice and is working towards the capability of reusing the booster.[19] The Flight 26 (F26) booster has featured the first helicopter catch recovery attempt.`,
      link: 'https://www.rocketlabusa.com/launch/electron/'
    },
    {
      lsp_user_id: 5,
      launch_vehicle:'Electron',
      cost:8,
      meo_weight: null,
      leo_weight: 750,
      geo_weight: null,
      heo_weight: null,
      booked_status: 'available',
      launch_pad_id: 14,
      picture: '/electron.jfif',
      description: `Electron is a two-stage, partially recoverable orbital launch vehicle developed by Rocket Lab, an American aerospace company with a wholly owned New Zealand subsidiary.[15][16] Electron was developed to service the commercial small satellite launch market.[17] Its Rutherford engines are the first electric-pump-fed engine to power an orbital-class rocket.[18] Electron is often flown with a kickstage or Rocket Lab's Photon spacecraft. Although the rocket was designed to be expendable, Rocket Lab has recovered the first stage twice and is working towards the capability of reusing the booster.[19] The Flight 26 (F26) booster has featured the first helicopter catch recovery attempt.`,
      link: 'https://www.rocketlabusa.com/launch/electron/'
    },
    {
      lsp_user_id: 7,
      launch_vehicle:'Firefly Alpha',
      cost:15,
      meo_weight:870,
      leo_weight:1170,
      geo_weight:null,
      heo_weight:null,
      booked_status: 'booked',
      launch_pad_id: 8,
      picture: '/firefly_alpha.jpg',
      description: `Firefly Alpha (Firefly α) is a two-stage orbital expendable launch vehicle developed by the American company Firefly Aerospace to compete in the commercial small satellite launch market. Alpha is intended to provide launch options for both full vehicle and rideshare customers.`,
      link: 'https://fireflyspace.com/alpha/'
    },
    {
      lsp_user_id: 7,
      launch_vehicle:'Firefly Alpha',
      cost:17,
      meo_weight:870,
      leo_weight:1170,
      geo_weight:null,
      heo_weight:null,
      booked_status: 'available',
      launch_pad_id: 8,
      picture: '/firefly_alpha.jpg',
      description: `Firefly Alpha (Firefly α) is a two-stage orbital expendable launch vehicle developed by the American company Firefly Aerospace to compete in the commercial small satellite launch market. Alpha is intended to provide launch options for both full vehicle and rideshare customers.`,
      link: 'https://fireflyspace.com/alpha/'
    },
    {
      lsp_user_id: 7,
      launch_vehicle:'Firefly Alpha',
      cost:16,
      meo_weight:870,
      leo_weight:1170,
      geo_weight:null,
      heo_weight:null,
      booked_status: 'available',
      launch_pad_id: 8,
      picture: '/firefly_alpha.jpg',
      description: `Firefly Alpha (Firefly α) is a two-stage orbital expendable launch vehicle developed by the American company Firefly Aerospace to compete in the commercial small satellite launch market. Alpha is intended to provide launch options for both full vehicle and rideshare customers.`,
      link: 'https://fireflyspace.com/alpha/'
    },
    {
      lsp_user_id: 6,
      launch_vehicle:'New Glenn',
      cost:95,
      meo_weight:32500,
      leo_weight:41000,
      geo_weight:13000,
      heo_weight:32000,
      booked_status: 'available',
      launch_pad_id: 9,
      picture: '/new_glenn.png',
      description: `New Glenn is a heavy-lift orbital launch vehicle in development by Blue Origin, named after NASA astronaut John Glenn, the first American to orbit Earth. Design work on the vehicle began in 2012; illustrations of the vehicle, and the high-level specifications, were initially publicly unveiled in September 2016. New Glenn is a two-stage rocket with a diameter of 7 m (23 ft). Its first stage will be powered by seven BE-4 engines that are also being designed and manufactured by Blue Origin.`,
      link: 'https://www.blueorigin.com/new-glenn/'
    },
    {
      lsp_user_id: 6,
      launch_vehicle:'New Glenn',
      cost:95,
      meo_weight:32500,
      leo_weight:41000,
      geo_weight:13000,
      heo_weight:32000,
      booked_status: 'available',
      launch_pad_id: 8,
      picture: '/new_glenn.png',
      description: `New Glenn is a heavy-lift orbital launch vehicle in development by Blue Origin, named after NASA astronaut John Glenn, the first American to orbit Earth. Design work on the vehicle began in 2012; illustrations of the vehicle, and the high-level specifications, were initially publicly unveiled in September 2016. New Glenn is a two-stage rocket with a diameter of 7 m (23 ft). Its first stage will be powered by seven BE-4 engines that are also being designed and manufactured by Blue Origin.`,
      link: 'https://www.blueorigin.com/new-glenn/'
    },
    {
      lsp_user_id: 6,
      launch_vehicle:'New Glenn',
      cost:90,
      meo_weight:32500,
      leo_weight:41000,
      geo_weight:13000,
      heo_weight:32000,
      booked_status: 'available',
      launch_pad_id: 9,
      picture: '/new_glenn.png',
      description: `New Glenn is a heavy-lift orbital launch vehicle in development by Blue Origin, named after NASA astronaut John Glenn, the first American to orbit Earth. Design work on the vehicle began in 2012; illustrations of the vehicle, and the high-level specifications, were initially publicly unveiled in September 2016. New Glenn is a two-stage rocket with a diameter of 7 m (23 ft). Its first stage will be powered by seven BE-4 engines that are also being designed and manufactured by Blue Origin.`,
      link: 'https://www.blueorigin.com/new-glenn/'
    },
    {
      lsp_user_id: 6,
      launch_vehicle:'New Glenn',
      cost:94,
      meo_weight:32500,
      leo_weight:41000,
      geo_weight:13000,
      heo_weight:32000,
      booked_status: 'available',
      launch_pad_id: 8,
      picture: '/new_glenn.png',
      description: `New Glenn is a heavy-lift orbital launch vehicle in development by Blue Origin, named after NASA astronaut John Glenn, the first American to orbit Earth. Design work on the vehicle began in 2012; illustrations of the vehicle, and the high-level specifications, were initially publicly unveiled in September 2016. New Glenn is a two-stage rocket with a diameter of 7 m (23 ft). Its first stage will be powered by seven BE-4 engines that are also being designed and manufactured by Blue Origin.`,
      link: 'https://www.blueorigin.com/new-glenn/'
    },
    {
      lsp_user_id: 10,
      launch_vehicle:'Rocket 2.0',
      cost:3,
      meo_weight:null,
      leo_weight:600,
      geo_weight:null,
      heo_weight:null,
      booked_status: 'available',
      launch_pad_id: 7,
      picture: '/rocket3.0.jpg',
      description: `Rocket 2 was launched at 30 November 2018 at 03:00 UTC (20:00 PST on 29 November 2018) from Pacific Spaceport Complex – Alaska, Launch Pad 2, the same used for Rocket 1. After approximately 30 seconds of powered flight, the vehicle aborted, resulting in the vehicle falling to the ground and crashing. Sources observing the launch reported the vehicle landed slightly outside the perimeter fence, south of the launch pad, but on spaceport property.`,
      link: 'https://astra.com/news/launch-system-2-update/'
    },
    {
      lsp_user_id: 10,
      launch_vehicle:'Rocket 2.0',
      cost:3,
      meo_weight:null,
      leo_weight:600,
      geo_weight:null,
      heo_weight:null,
      booked_status: 'available',
      launch_pad_id: 7,
      picture: '/rocket3.0.jpg',
      description: `Rocket 2 was launched at 30 November 2018 at 03:00 UTC (20:00 PST on 29 November 2018) from Pacific Spaceport Complex – Alaska, Launch Pad 2, the same used for Rocket 1. After approximately 30 seconds of powered flight, the vehicle aborted, resulting in the vehicle falling to the ground and crashing. Sources observing the launch reported the vehicle landed slightly outside the perimeter fence, south of the launch pad, but on spaceport property.`,
      link: 'https://astra.com/news/launch-system-2-update/'
    },
    {
      lsp_user_id: 10,
      launch_vehicle:'Rocket 2.0',
      cost:4,
      meo_weight:null,
      leo_weight:610,
      geo_weight:null,
      heo_weight:null,
      booked_status: 'available',
      launch_pad_id: 7,
      picture: '/rocket3.0.jpg',
      description: `Rocket 2 was launched at 30 November 2018 at 03:00 UTC (20:00 PST on 29 November 2018) from Pacific Spaceport Complex – Alaska, Launch Pad 2, the same used for Rocket 1. After approximately 30 seconds of powered flight, the vehicle aborted, resulting in the vehicle falling to the ground and crashing. Sources observing the launch reported the vehicle landed slightly outside the perimeter fence, south of the launch pad, but on spaceport property.`,
      link: 'https://astra.com/news/launch-system-2-update/'
    },
    {
      lsp_user_id: 10,
      launch_vehicle:'Rocket 2.0',
      cost:3,
      meo_weight:null,
      leo_weight:670,
      geo_weight:null,
      heo_weight:null,
      booked_status: 'available',
      launch_pad_id: 7,
      picture: '/rocket3.0.jpg',
      description: `Rocket 2 was launched at 30 November 2018 at 03:00 UTC (20:00 PST on 29 November 2018) from Pacific Spaceport Complex – Alaska, Launch Pad 2, the same used for Rocket 1. After approximately 30 seconds of powered flight, the vehicle aborted, resulting in the vehicle falling to the ground and crashing. Sources observing the launch reported the vehicle landed slightly outside the perimeter fence, south of the launch pad, but on spaceport property.`,
      link: 'https://astra.com/news/launch-system-2-update/'
    },
    {
      lsp_user_id: 9,
      launch_vehicle:'Terran R',
      cost:12,
      meo_weight:16500,
      leo_weight:23000,
      geo_weight:12000,
      heo_weight:16000,
      booked_status: 'available',
      launch_pad_id: 3,
      picture: '/terran_r.png',
      description: `Terran R is a heavy-lift two-stage, partially reusable launch vehicle under development by Relativity Space. The vehicle is partially constructed with 3D printing technologies, much like its predecessor, the small-lift Terran 1.`,
      link: 'https://www.relativityspace.com/terran-r'
    },
    {
      lsp_user_id: 9,
      launch_vehicle:'Terran R',
      cost:12,
      meo_weight:16500,
      leo_weight:23000,
      geo_weight:12000,
      heo_weight:16000,
      booked_status: 'available',
      launch_pad_id: 3,
      picture: '/terran_r.png',
      description: `Terran R is a heavy-lift two-stage, partially reusable launch vehicle under development by Relativity Space. The vehicle is partially constructed with 3D printing technologies, much like its predecessor, the small-lift Terran 1.`,
      link: 'https://www.relativityspace.com/terran-r'
    },
    {
      lsp_user_id: 9,
      launch_vehicle:'Terran R',
      cost:12,
      meo_weight:16500,
      leo_weight:23000,
      geo_weight:12000,
      heo_weight:16000,
      booked_status: 'available',
      launch_pad_id: 3,
      picture: '/terran_r.png',
      description: `Terran R is a heavy-lift two-stage, partially reusable launch vehicle under development by Relativity Space. The vehicle is partially constructed with 3D printing technologies, much like its predecessor, the small-lift Terran 1.`,
      link: 'https://www.relativityspace.com/terran-r'
    },
    {
      lsp_user_id: 9,
      launch_vehicle:'Terran R',
      cost:14,
      meo_weight:16500,
      leo_weight:23000,
      geo_weight:12000,
      heo_weight:16000,
      booked_status: 'available',
      launch_pad_id: 3,
      picture: '/terran_r.png',
      description: `Terran R is a heavy-lift two-stage, partially reusable launch vehicle under development by Relativity Space. The vehicle is partially constructed with 3D printing technologies, much like its predecessor, the small-lift Terran 1.`,
      link: 'https://www.relativityspace.com/terran-r'
    },
    {
      lsp_user_id: 9,
      launch_vehicle:'Terran R',
      cost:13,
      meo_weight:16500,
      leo_weight:23000,
      geo_weight:12000,
      heo_weight:16000,
      booked_status: 'available',
      launch_pad_id: 3,
      picture: '/terran_r.png',
      description: `Terran R is a heavy-lift two-stage, partially reusable launch vehicle under development by Relativity Space. The vehicle is partially constructed with 3D printing technologies, much like its predecessor, the small-lift Terran 1.`,
      link: 'https://www.relativityspace.com/terran-r'
    },
    {
      lsp_user_id: 9,
      launch_vehicle:'Terran R',
      cost:12,
      meo_weight:16500,
      leo_weight:23000,
      geo_weight:12000,
      heo_weight:16000,
      booked_status: 'available',
      launch_pad_id: 3,
      picture: '/terran_r.png',
      description: `Terran R is a heavy-lift two-stage, partially reusable launch vehicle under development by Relativity Space. The vehicle is partially constructed with 3D printing technologies, much like its predecessor, the small-lift Terran 1.`,
      link: 'https://www.relativityspace.com/terran-r'
    },
  ]);
};
