(function() {
//
const BUNDLES = {
  weekend_warrior: {
    name: "4WD Weekend Warrior",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/4wd-weekend-warrior",
    tagline: "Fridge cold, beer colder. 1-3 nights sorted with a 100Ah battery and portable panel  --  keep it simple, keep it light.",
    compulsory: ["AllSpark 100Ah Prime Lithium (BT)", "200W Quad Fold Solar Panel"],
    optional: ["DCDC Charger 25A", "20A Solar Controller", "50A Anderson Cable 30cm", "50A Anderson Cable 50cm"],
    whyItWorks: "A 100Ah lithium will run a 40-50L fridge for 2+ nights without solar input. Add the 200W panel and you can stay out longer or in one spot  --  the panel tops up the battery during the day so your fridge keeps running at night. The Bluetooth battery monitor built in means you never guess your state of charge.",
    alts: ["long_weekend", "latte_weekend"],
  },
  long_weekend: {
    name: "The Long-Weekend Warrior",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/the-long-weekend-warrior",
    tagline: "3-4 nights, big fridge, no stress. The 150Ah slim paired with the 250W blanket is built for the ones who stay a little longer.",
    compulsory: ["AllSpark 150Ah Slimline Lithium (BT)", "AllSpark 250W Solar Blanket"],
    optional: ["DCDC Charger 40A", "20A Solar Controller", "50A Anderson Cable 30cm", "50A Anderson Cable 50cm"],
    whyItWorks: "A large 90L fridge draws roughly 4-5A/hr average  --  over 24 hours that is 96-120Ah. The 150Ah lithium (with 80% usable capacity = ~120Ah) keeps you safe for a full day before the solar tops you back up. The 250W solar blanket produces ~15-18A in good sun, meaning 4-5 hours of sun covers your whole daily fridge load.",
    alts: ["weekend_warrior", "latte_weekend"],
  },
  latte_weekend: {
    name: "The Latte Drinking Long-Weekend Warrior",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/the-latte-drinking-long-weekend-warrior",
    tagline: "Coffee machine, induction cooktop, real food. 200Ah + inverter + solar  --  because roughing it should not mean bad coffee.",
    compulsory: ["AllSpark 200Ah Slimline Lithium (BT)", "AllSpark 250W Solar Blanket", "AllSpark 2000W Pro Inverter + Remote"],
    optional: ["DCDC Charger 40A", "20A Solar Controller", "50A Anderson Cable 30cm", "50A Anderson Cable 50cm"],
    whyItWorks: "A coffee machine draws ~1400W  --  at 12V that is ~128A for the minutes it runs, plus conversion losses. Your 200Ah battery handles this easily. The inverter ultra-low 0.8A idle draw means leaving it on will not kill your battery. The remote panel means it is tucked away but you can hit the power button from where you are cooking. Add solar to replenish what you cook with.",
    alts: ["long_weekend", "tourer_pack"],
  },
  quick_caravan_upgrade: {
    name: "The Quick Caravan Power Upgrade",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/the-quick-caravan-power-upgrade",
    tagline: "Your existing system is letting you down. A 200Ah battery + 200W fixed panel is the fastest way to go from 2 nights to 4+.",
    compulsory: ["AllSpark 200Ah Lithium (BT)", "2 x 200W Glass Panel"],
    optional: ["200W Quad Fold Solar Panel", "DCDC Charger 40A", "20A Solar Controller", "50A Anderson Cable 30cm", "50A Anderson Cable 50cm"],
    whyItWorks: "If your system depletes in 48 hours, you likely have an undersized battery or underperforming solar (or both). Upgrading to a proper 200Ah lithium and adding 200W of fixed glass means you have real storage AND real solar input. The portable panel is the smart add-on for overcast days or when staying extra long.",
    alts: ["caravan_redo", "solar_400w"],
  },
  caravan_redo: {
    name: "The Caravan Power Re-Do",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/the-caravan-power-re-do-upgrade",
    tagline: "Full system reset. 400Ah of lithium, 400W of panels, 2500W inverter. Coffee machine AND the milk frother at the same time.",
    compulsory: ["2 x AllSpark 200Ah Lithium (BT)", "2 x 200W Glass Panel", "400W Quad Fold Solar Panel", "AllSpark 2500W Pro Inverter", "DCDC Charger 50A"],
    optional: ["50A Anderson Cable 30cm", "50A Anderson Cable 50cm", "LED Canopy Connectors"],
    whyItWorks: "400Ah of lithium (320Ah usable) means 2+ days of heavy use  --  fridge, lights, multiple phone charges, and daily coffee  --  before you even think about solar. The 400W portable can pump back 25-28A in good sun, replacing a big meal worth of power in a few hours. Two days reserve + solar input = genuinely off-grid comfortable for a week or more.",
    alts: ["quick_caravan_upgrade", "appliance_2500"],
  },
  tradie_pack: {
    name: "The Tradie Power Pack",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/the-tradie-power-pack",
    tagline: "Fridge cold, tools charged, lunch not soggy. The 100Ah + 70W panel is the ute power setup that just works.",
    compulsory: ["AllSpark 100Ah Prime Lithium (BT)", "AllSpark 70W Glass Panel"],
    optional: ["DCDC Charger 25A", "LED Strip 90cm Plug-n-Play"],
    whyItWorks: "A 70W fixed panel on the ute canopy roof produces ~5A in reasonable sun  --  enough to keep a 40L fridge ticking over while at a job. The 100Ah lithium means you are not killing your starter battery, and the Bluetooth monitor tells you exactly where you are at throughout the day.",
    alts: ["latte_tradie", "charging_station"],
  },
  latte_tradie: {
    name: "The Latte Drinking Tradie Power Pack",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/the-latte-drinking-tradie-power-pack",
    tagline: "Coffee on the job, cold lunch, tools always charged. The 150Ah + inverter setup for tradies who refuse to suffer.",
    compulsory: ["AllSpark 150Ah Slimline Lithium (BT)", "AllSpark 70W Glass Panel", "AllSpark 2000W Pro Inverter + Remote"],
    optional: ["DCDC Charger 40A", "LED Strip 90cm Plug-n-Play"],
    whyItWorks: "Tradies with a coffee machine on-site need an inverter that handles a 1300-1500W surge without shutting down. The 2000W Pro handles it comfortably  --  and its 0.8A idle draw means leaving it on throughout the day is no big deal. The 150Ah lithium means you can run tools, fridge AND coffee without watching the battery anxiously.",
    alts: ["tradie_pack", "appliance_2000"],
  },
  canopy_tri: {
    name: "Canopy Upgrade Pack  --  Tri Colour",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/canopy-upgrade-pack-tri-colour",
    tagline: "Power where you need it, hands-free lighting that sets the vibe. Blue mood lighting + powerboard = canopy sorted.",
    compulsory: ["AllSpark Dual Plug & Play Power Board", "2 x 90cm LED Strip (RWB)"],
    optional: ["2 x 60cm LED Strip (RWB)", "2 x 30cm LED Strip (RWB)"],
    whyItWorks: "If you have battery, solar and an inverter sorted, the next step is getting power accessible and your lighting permanent. The power board plugs straight into your inverter  --  no electrician needed. The tri-colour RWB strips give you red for night vision, white for working, and blue for evening vibe. No more headtorches with flat batteries.",
    alts: ["canopy_dual", "charging_station"],
  },
  canopy_dual: {
    name: "Canopy Upgrade Pack  --  Dual Colour",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/canopy-upgrade-pack-dual-colour",
    tagline: "Clean white and work light  --  the no-fuss canopy lighting and power upgrade.",
    compulsory: ["AllSpark Dual Plug & Play Power Board", "2 x 90cm LED Strip Dimmable"],
    optional: ["60cm LED Strip Dimmable", "30cm LED Strip Dimmable"],
    whyItWorks: "Same logic as the tri-colour but simpler  --  dimmable white and work-focused. Powerboard plugs into your existing inverter. Strips are weatherproof and permanent so you just open the canopy and they are on.",
    alts: ["canopy_tri", "charging_station"],
  },
  campervan_upgrade: {
    name: "Camper Van Upgrade Pack",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/camper-van-upgrade-pack",
    tagline: "White, sleek, Starlink-ready. The white power board + PD100 socket combo for the aesthetic van build.",
    compulsory: ["AllSpark Dual Plug & Play Board (White)", "AllSpark PD100W Socket (White)", "QC3/QC4 USB Socket (White)", "Cig Socket (White)"],
    optional: [],
    whyItWorks: "Van life is about having power where you need it without it looking like a marine electrical install. The flush-mount white boards just need a hole saw  --  no electrician, no mess. The PD100 is perfect for running Starlink Mini. USB sockets keep devices charged throughout the van.",
    alts: ["easy_lighting", "charging_station"],
  },
  tourer_pack: {
    name: "The Tourer Pack",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/the-tourer-pack",
    tagline: "You drive every day  --  big battery, 2500W inverter, portable panel as backup. Built for the journey, not the campsite.",
    compulsory: ["AllSpark 200Ah Slimline Lithium (BT)", "AllSpark 2500W Pro Inverter"],
    optional: ["DCDC Charger 40A", "200W Quad Fold Solar Panel", "250W Solar Blanket", "50A Circuit Breaker"],
    whyItWorks: "If you are driving daily, your DCDC charger is your primary charging source  --  it keeps the battery topped up on the road. You do not need massive roof solar. The 2500W inverter handles everything  --  coffee machine, induction, air fryer  --  running one at a time. The portable panel is just insurance for rest days.",
    alts: ["latte_weekend", "caravan_redo"],
  },
  scared_dark_nodim: {
    name: "Scared of the Dark Pack  --  Non-Dimmable",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/the-scared-of-the-dark-pack-non-dimmable",
    tagline: "Constant full brightness, zero fuss. Perfect if you want maximum light or plan to wire in your own switch or dimmer.",
    compulsory: ["30cm LED Strip", "60cm LED Strip", "90cm LED Strip"],
    optional: ["2 x AllSpark 2000 Lumen Head Torch", "Head Torch (Blue/Camo)", "Head Torch (Pink/Camo)"],
    whyItWorks: "Non-dimmable strips are ideal when you want consistent, full-brightness light every time. They are also the right choice if you are planning to install your own inline on/off or dimmer switch  --  so you get control where it suits you. IP67 weatherproof and built for permanent install.",
    alts: ["scared_dark_dimmable", "scared_dark_tri"],
  },
  scared_dark_dimmable: {
    name: "Scared of the Dark Pack  --  Dimmable",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/the-scared-of-the-dark-pack-dimmable",
    tagline: "Weatherproof. Permanent. Set and forget. Dimmable strips for your 4WD, camper or van.",
    compulsory: ["30cm LED Strip Dimmable", "60cm LED Strip Dimmable", "90cm LED Strip Dimmable"],
    optional: ["2 x AllSpark 2000 Lumen Head Torch", "Head Torch (Blue/Camo)", "Head Torch (Pink/Camo)"],
    whyItWorks: "These strips are IP67 weatherproof and designed for permanent install. Dimmable means you can run them low for ambience or full brightness for cooking. Way better than a bunch of battery-powered lights you have to set up and pack away every time.",
    alts: ["scared_dark_tri", "scared_dark_nodim"],
  },
  scared_dark_tri: {
    name: "Scared of the Dark Pack  --  Dimmable Tri Colour",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/the-scared-of-the-dark-pack-dimmable-tri",
    tagline: "Red for night vision, white for work, blue for the vibe. The full three-colour permanent lighting upgrade.",
    compulsory: ["30cm LED Strip (RWB)", "60cm LED Strip (RWB)", "90cm LED Strip (RWB)"],
    optional: ["2 x AllSpark 2000 Lumen Head Torch", "Head Torch (Blue/Camo)", "Head Torch (Pink/Camo)"],
    whyItWorks: "Tri-colour strips give you genuine flexibility  --  red at night so you do not kill your night vision, white when you need to see what you are doing, blue for ambience. Weatherproof IP67 so they handle rain and dust. These are permanent installs  --  once they are in, they are in.",
    alts: ["scared_dark_dimmable", "scared_dark_nodim"],
  },
  solar_200w: {
    name: "The 200W Solar Upgrade Pack",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/the-200w-solar-upgrade-pack",
    tagline: "Small system, weekend trips. Two 100W glass panels is the right-sized solar fix for lighter setups.",
    compulsory: ["2 x 100W Glass Panel"],
    optional: ["200W Quad Fold Solar Panel", "250W Solar Blanket"],
    whyItWorks: "If you are running a 100Ah battery on weekend trips with a 40-50L fridge and basic charging, you do not need 400W on the roof. Two 100W panels give you roughly 10-12A in good sun  --  enough to recover a day fridge draw in 4-5 hours.",
    alts: ["solar_270w", "quick_caravan_upgrade"],
  },
  solar_270w: {
    name: "The 270W Solar Upgrade Pack",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/the-270w-solar-upgrade-pack",
    tagline: "Mid-sized system, mixed trips. Two 135W panels hits the sweet spot for 100-150Ah setups.",
    compulsory: ["2 x 135W Glass Panel"],
    optional: ["200W Quad Fold Solar Panel", "250W Solar Blanket"],
    whyItWorks: "For a 100-150Ah battery running a fridge plus some charging and the occasional coffee, two 135W panels produce around 15-18A in good sun  --  enough to stay comfortably ahead of your daily usage on most days.",
    alts: ["solar_200w", "solar_340w"],
  },
  solar_340w: {
    name: "The 340W Solar Upgrade Pack",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/the-340w-solar-upgrade-pack",
    tagline: "Larger system, longer stays. Two 170W panels for 150-200Ah setups that work hard.",
    compulsory: ["2 x 170W Glass Panel"],
    optional: ["200W Quad Fold Solar Panel", "250W Solar Blanket", "400W Quad Fold Solar Panel (LV)"],
    whyItWorks: "A 150-200Ah battery running a large fridge, appliances, and staying 5+ nights needs serious solar input to stay ahead. Two 170W panels produce ~20-22A in good conditions  --  meaningful daily recovery even in shoulder season.",
    alts: ["solar_270w", "solar_400w"],
  },
  solar_400w: {
    name: "The 400W Solar Upgrade Pack",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/the-400w-solar-upgrade-pack",
    tagline: "Your roof solar is not keeping up. Two 200W glass panels + portable backup = properly sorted.",
    compulsory: ["2 x 200W Glass Panel"],
    optional: ["200W Quad Fold Solar Panel", "250W Solar Blanket", "400W Quad Fold Solar Panel (LV)", "400W Quad Fold Solar Panel (HV)"],
    whyItWorks: "Old or underperforming roof solar is one of the most common reasons people run out of power. Two fresh 200W glass panels in parallel give you a meaningful improvement. Add a portable panel with its own controller as your safety net for overcast days or longer stays.",
    alts: ["solar_340w", "quick_caravan_upgrade"],
  },
  appliance_2000: {
    name: "Appliance Upgrade Kit  --  2000W",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/appliance-upgrade-kit-2000w",
    tagline: "Got battery and solar but no inverter? Fix that. Coffee machine, induction, air fryer  --  one at a time, no drama.",
    compulsory: ["AllSpark 2000W Pro Inverter + Remote", "Dual Plug & Play Power Board", "200A Circuit Breaker"],
    optional: ["PD100W Socket + LED Light Bar Kit", "Cig Socket (Black)", "Dual USB Socket"],
    whyItWorks: "The most common upgrade  --  people have a good battery but have not added an inverter yet. The 2000W Pro handles a coffee machine (1300-1500W surge) comfortably. Pair it with the power board to bring a 240V socket to where you need it without running extension cords everywhere.",
    alts: ["appliance_2500", "latte_weekend"],
  },
  appliance_2500: {
    name: "Appliance Upgrade Kit  --  2500W",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/appliance-upgrade-kit-2500w",
    tagline: "When 2000W is not quite enough. Coffee AND the milk frother. Bigger loads, same clean install.",
    compulsory: ["Dual Plug & Play Power Board", "250A Circuit Breaker", "AllSpark 2500W Pro Inverter"],
    optional: ["PD100W Socket + LED Light Bar Kit", "Cig Socket (Black)", "Dual USB Socket"],
    whyItWorks: "If you want to run a coffee machine and charge tools at the same time, or have an air fryer and an induction cooktop and do not want to think about which one is on, the 2500W gives you that headroom. Same ultra-low idle draw as the 2000W so no waste when not in use.",
    alts: ["appliance_2000", "caravan_redo"],
  },
  easy_lighting: {
    name: "Easy Lighting Pack",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/easy-lighting-pack",
    tagline: "No permanent install needed. USB-C powered LED bars + PD100 socket = plug-and-play camp lighting that does not suck.",
    compulsory: ["PD100W Socket + LED Light Bar Kit"],
    optional: ["Cig Socket (Black)", "Dual USB Socket"],
    whyItWorks: "For setups where you cannot (or do not want to) permanently fix lighting. The USB-C powered LED bars are powered directly from the PD100 socket  --  no separate wiring run needed. Bright, adjustable, and you can reposition them as needed.",
    alts: ["scared_dark_dimmable", "charging_station"],
  },
  charging_station: {
    name: "Charging Station Kit",
    url: "https://www.offroadliving.com.au/easter-bundle-sale/charging-station-kit",
    tagline: "Put power exactly where you need it  --  240V, cig socket, USB, and PD100. One spot for everything.",
    compulsory: ["Dual Plug & Play Power Board", "Cig Socket (Black)", "Dual USB Socket", "PD100W Socket + LED Light Bar Kit"],
    optional: ["LED Light Bar Kit (4 Bar)"],
    whyItWorks: "Cords running everywhere, jamming them in the door when you close it  --  this fixes that. One clean install, one spot that has 240V from your inverter, 12V cig socket, USB charging and PD100 for Starlink or rapid charging.",
    alts: ["appliance_2000", "campervan_upgrade"],
  },
};

const NEED_OPTIONS_4WD_VAN = [
  { value: "starting_fresh", icon: "", title: "Starting fresh", desc: "I do not have a proper aux power setup yet\" },
  { value: \"upgrade_battery\", icon: \"\", title: \"My battery lets me down\", desc: \"I lose power after a night or two\" },
  { value: \"upgrade_solar\", icon: \"\", title: \"My solar is not keeping up", desc: "Batteries do not recover fast enough\" },
  { value: \"add_inverter\", icon: \"\", title: \"I want to run 240V appliances\", desc: \"I have got battery/solar but no inverter yet" },
  { value: "lighting_power", icon: "", title: "Lighting & canopy power", desc: "I want proper lights and power points sorted" },
];

const NEED_OPTIONS_CARAVAN = [
  { value: "upgrade_small", icon: "", title: "My system runs out too soon", desc: "Can do 2 nights but not 4+" },
  { value: "full_redo", icon: "", title: "My whole system needs replacing", desc: "Ready for a proper upgrade from scratch" },
  { value: "upgrade_solar", icon: "", title: "My solar panels are underperforming", desc: "Old, inefficient, or just not enough" },
  { value: "add_inverter", icon: "", title: "I want to run 240V appliances", desc: "Coffee, induction, air fryer etc" },
  { value: "lighting_power", icon: "", title: "Power points & lighting", desc: "Want 240V sockets and/or permanent lighting" },
];

const NEED_OPTIONS_WORK = [
  { value: "basic_work", icon: "", title: "Fridge and charging only", desc: "Keep lunch cold, charge my phone and tools" },
  { value: "latte_work", icon: "", title: "Coffee machine too", desc: "I want proper coffee on the job, not servo rubbish" },
  { value: "lighting_power", icon: "", title: "Canopy lighting and sockets", desc: "Hands-free lighting and easier access to power" },
];

const LUXURY_OPTIONS_BASIC = [
  { value: "basic",  icon: "", title: "Fridge cold, phone charged", desc: "That is genuinely all I need\" },
  { value: \"latte\",  icon: \"\", title: \"Plus proper coffee & toast\", desc: \"Coffee machine, maybe a toastie maker\" },
  { value: \"full\",   icon: \"\", title: \"Full kitchen off-grid\", desc: \"Coffee, induction, air fryer  --  I want it all\" },
];

const LUXURY_OPTIONS_LIGHTING = [
  { value: \"nodim\",  icon: \"\", title: \"Constant bright light\", desc: \"Always-on brightness  --  I will control it with my own switch" },
  { value: "basic",  icon: "", title: "Dimmable white", desc: "Adjustable brightness, simple and clean" },
  { value: "latte",  icon: "", title: "Dimmable dual colour", desc: "Blue/white, dimmable  --  good vibes and good light" },
  { value: "full",   icon: "", title: "Full tri-colour (R/W/B)", desc: "Red for night vision, white for work, blue for vibe" },
];

const SOLAR_SIZE_OPTIONS = [
  { value: "solar_s",  icon: "", title: "Small system, shorter trips", desc: "100Ah battery or less, mostly weekends, light power use" },
  { value: "solar_m",  icon: "", title: "Medium system, mixed trips", desc: "100-150Ah battery, fridge + charging, 3-5 nights" },
  { value: "solar_l",  icon: "", title: "Larger system, longer stays", desc: "150-200Ah battery, run appliances, 5+ nights" },
  { value: "solar_xl", icon: "camper", title: "Big system, extended trips", desc: "200Ah+ battery, heavy use, week+ off-grid" },
];

let answers = {};
let history = [];

function getCurrentQuestion() {
  const stepCount = Object.keys(answers).length;
  if (stepCount === 0) return {
    key: "vehicle",
    number: "Question 1 of 3",
    text: "What is your setup?\",
    sub: \"What are you trying to power?\",
    cols: 2,
    options: [
      { value: \"4wd\",    icon: \"\", title: \"4WD / Ute\",        desc: \"Canopy, fridge in the back, weekend trips\" },
      { value: \"caravan\",icon: \"\", title: \"Caravan / Camper\",  desc: \"Towed setup, dedicated van power system\" },
      { value: \"van\",    icon: \"\", title: \"Camper Van\",        desc: \"Van conversion or pop-top setup\" },
      { value: \"work\",   icon: \"\", title: \"Work Ute / Tradie\", desc: \"On the tools, need power at the job\" },
    ]
  };
  if (stepCount === 1) {
    let options;
    if (answers.vehicle === \"work\") options = NEED_OPTIONS_WORK;
    else if (answers.vehicle === \"caravan\") options = NEED_OPTIONS_CARAVAN;
    else options = NEED_OPTIONS_4WD_VAN;
    return {
      key: \"need\",
      number: \"Question 2 of 3\",
      text: \"What is your actual situation?",
      sub: "Be honest  --  what does your setup look like right now?",
      cols: 1,
      options
    };
  }
  if (stepCount === 2 && answers.need === "upgrade_solar") return {
    key: "solar_size",
    number: "Question 3 of 3",
    text: "How big is your current setup?",
    sub: "This helps us match the right panel wattage to your battery size and how you travel.",
    cols: 2,
    options: SOLAR_SIZE_OPTIONS
  };
  if (stepCount === 2 && answers.need === "lighting_power") return {
    key: "luxury",
    number: "Question 3 of 3",
    text: "What kind of lighting are you after?",
    sub: "Pick the option that suits how you use your setup.",
    cols: 2,
    options: LUXURY_OPTIONS_LIGHTING
  };
  if (stepCount === 2) return {
    key: "luxury",
    number: "Question 3 of 3",
    text: "What do you actually want to run?",
    sub: "Pick your vibe  --  this is about what matters to you off-grid.",
    cols: 2,
    options: LUXURY_OPTIONS_BASIC
  };
  return null;
}

function isComplete() { return Object.keys(answers).length >= 3; }

function resolveSolarBundle(s) {
  if (s === "solar_s") return "solar_200w";
  if (s === "solar_m") return "solar_270w";
  if (s === "solar_l") return "solar_340w";
  return "solar_400w";
}

function resolveBundle(a) {
  const { vehicle, need, luxury, solar_size } = a;
  if (vehicle === "work") {
    if (need === "basic_work") return "tradie_pack";
    if (need === "latte_work") return "latte_tradie";
    if (need === "lighting_power") {
      if (luxury === "full")  return "canopy_tri";
      if (luxury === "latte") return "canopy_dual";
      if (luxury === "nodim") return "scared_dark_nodim";
      return "canopy_dual";
    }
    return "charging_station";
  }
  if (need === "upgrade_solar") return resolveSolarBundle(solar_size);
  if (need === "lighting_power") {
    if (vehicle === "van") return "campervan_upgrade";
    if (luxury === "full")  return "scared_dark_tri";
    if (luxury === "latte") return "scared_dark_dimmable";
    if (luxury === "nodim") return "scared_dark_nodim";
    if (luxury === "basic") return vehicle === "4wd" ? "canopy_dual" : "scared_dark_dimmable";
    return "easy_lighting";
  }
  if (need === "add_inverter") return luxury === "full" ? "appliance_2500" : "appliance_2000";
  if (vehicle === "caravan") {
    if (need === "full_redo")    return "caravan_redo";
    if (need === "upgrade_small") return "quick_caravan_upgrade";
    return "quick_caravan_upgrade";
  }
  if (vehicle === "van") {
    if (need === "starting_fresh" || need === "upgrade_battery") {
      return (luxury === "full" || luxury === "latte") ? "tourer_pack" : "long_weekend";
    }
  }
  if (need === "starting_fresh" || need === "upgrade_battery") {
    return (luxury === "full" || luxury === "latte") ? "latte_weekend" : "weekend_warrior";
  }
  return "weekend_warrior";
}

function getProgress() {
  if (isComplete()) return 100;
  const step = Object.keys(answers).length;
  return step === 0 ? 10 : step === 1 ? 40 : 70;
}

function renderProgress(label) {
  const pct = getProgress();
  return "<div class=\"progress-label\"><span>" + label + "</span><span>" + pct + "%</span></div>" +
    "<div class=\"progress-bar\"><div class=\"progress-fill\" style=\"width:" + pct + "%\"></div></div>";
}

function renderQuestion() {
  const q = getCurrentQuestion();
  if (!q) return "";
  const stepNum = Object.keys(answers).length;
  const backBtn = stepNum > 0 ? "<button class=\"back-btn\" onclick=\"orlGoBack()\">&larr; Back</button>" : "";
  const optionsHtml = q.options.map(function(opt) {
    return "<button class=\"option-btn\" onclick=\"orlSelect(\'" + q.key + "\',\'" + opt.value + "\')\">" +
      "<span class=\"option-icon\">" + opt.icon + "</span>" +
      "<div class=\"option-title\">" + opt.title + "</div>" +
      (opt.desc ? "<div class=\"option-desc\">" + opt.desc + "</div>" : "") +
      "</button>";
  }).join("");
  return renderProgress(q.number) + backBtn +
    "<div class=\"question-card\">" +
      "<div class=\"question-number\">" + q.number + "</div>" +
      "<div class=\"question-text\">" + q.text + "</div>" +
      (q.sub ? "<div class=\"question-sub\">" + q.sub + "</div>" : "") +
      "<div class=\"options" + (q.cols === 2 ? " cols-2" : "") + "\">" + optionsHtml + "</div>" +
    "</div>";
}

function renderResult(bundleKey) {
  const bundle = BUNDLES[bundleKey];
  if (!bundle) return "<p style=\"color:#D4B483\">Something went wrong. Please try again.</p>";
  const alts = (bundle.alts || []).map(function(k) { return BUNDLES[k] ? Object.assign({key:k}, BUNDLES[k]) : null; }).filter(Boolean).slice(0,2);
  const compItems = bundle.compulsory.map(function(i) { return "<span class=\"item-chip\">" + i + "</span>"; }).join("");
  const optItems = (bundle.optional && bundle.optional.length)
    ? bundle.optional.map(function(i) { return "<span class=\"item-chip optional\">" + i + "</span>"; }).join("") : "";
  const altHtml = alts.length ? "<div class=\"also-consider\"><div class=\"result-section-title\">Also worth considering</div>" +
    alts.map(function(alt) {
      return "<div class=\"alt-bundle\" onclick=\"orlShowBundle(\'" + alt.key + "\')\">" +
        "<div><div class=\"alt-bundle-name\">" + alt.name + "</div>" +
        "<div class=\"alt-bundle-why\">" + alt.tagline + "</div></div>" +
        "<span class=\"alt-arrow\">&rarr;</span></div>";
    }).join("") + "</div>" : "";

  return renderProgress("Done!") +
    "<button class=\"back-btn\" onclick=\"orlGoBack()\">&larr; Change my answers</button>" +
    "<div class=\"result-card\">" +
      "<div class=\"result-header\">" +
        "<div class=\"result-badge\"> Easter Bundle Match</div>" +
        "<div class=\"result-name\">" + bundle.name + "</div>" +
        "<div class=\"result-tagline\">" + bundle.tagline + "</div>" +
      "</div>" +
      "<div class=\"result-body\">" +
        "<div class=\"what-you-get\">" +
          "<div class=\"result-section-title\">What is in this bundle</div>" +
          "<div class=\"item-grid\">" + compItems + "</div>" +
          (optItems ? "<div class=\"item-grid\" style=\"margin-top:8px\">" + optItems + "</div><div class=\"optional-note\">&uarr; Optional add-ons (dashed border)</div>" : "") +
        "</div>" +
        "<div class=\"why-this-works\">" +
          "<div class=\"result-section-title\" style=\"margin-bottom:8px\">Why this works for you</div>" +
          "<p>" + bundle.whyItWorks + "</p>" +
        "</div>" +
        "<div class=\"result-section-title\">Ready to grab this?</div>" +
        "<div class=\"cta-row\">" +
          "<a class=\"cta-primary\" href=\"" + bundle.url + "\"> Shop Easter Bundle</a>" +
          "<button class=\"cta-secondary\" onclick=\"orlRestart()\">Start over</button>" +
        "</div>" +
        altHtml +
      "</div>" +
    "</div>";
}

function orlRender() {
  const area = document.getElementById("orl-quiz-area");
  if (!area) return;
  area.innerHTML = isComplete() ? renderResult(resolveBundle(answers)) : renderQuestion();
}

window.orlSelect = function(key, value) {
  history.push({ answers: Object.assign({}, answers) });
  answers[key] = value;
  orlRender();
  document.querySelector(".orl-quiz").scrollIntoView({ behavior: "smooth", block: "start" });
};

window.orlGoBack = function() {
  if (history.length > 0) {
    answers = history.pop().answers;
    orlRender();
    document.querySelector(".orl-quiz").scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

window.orlShowBundle = function(bundleKey) {
  history.push({ answers: Object.assign({}, answers) });
  if (!isComplete()) answers._override = true;
  const area = document.getElementById("orl-quiz-area");
  area.innerHTML = renderResult(bundleKey);
  document.querySelector(".orl-quiz").scrollIntoView({ behavior: "smooth", block: "start" });
};

window.orlRestart = function() {
  answers = {};
  history = [];
  orlRender();
  document.querySelector(".orl-quiz").scrollIntoView({ behavior: "smooth", block: "start" });
};

orlRender();
})();