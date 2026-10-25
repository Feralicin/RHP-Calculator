const GameData = {
  Coins: [
    { Name: "Penny", Rarity: "Common", BaseEarn: 10, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "DalgonaCoin", Rarity: "Common", BaseEarn: 15, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "PlushToyCoin", Rarity: "Common", BaseEarn: 20, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "GearCoin", Rarity: "Uncommon", BaseEarn: 25, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "SlimeCoin", Rarity: "Uncommon", BaseEarn: 30, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "CloverCoin", Rarity: "Uncommon", BaseEarn: 40, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "SkaterCoin", Rarity: "Uncommon", BaseEarn: 65, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "SeaweedCoin", Rarity: "Rare", BaseEarn: 100, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "FriendshipCoin", Rarity: "Rare", BaseEarn: 150, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "GraphCoin", Rarity: "Rare", BaseEarn: 200, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "RhythmCoin", Rarity: "Rare", BaseEarn: 250, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "DreamCoin", Rarity: "Epic", BaseEarn: 500, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "ZoneCoin", Rarity: "Epic", BaseEarn: 550, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "LevelingCoin", Rarity: "Epic", BaseEarn: 650, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "LockCoin", Rarity: "Legendary", BaseEarn: 1000, HeadMultiplier: 1.3, TailMultiplier: 1.3 },
    { Name: "BlackRoseCoin", Rarity: "Legendary", BaseEarn: 1100, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "OverdriveCoin", Rarity: "Legendary", BaseEarn: 1200, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "CalendarCoin", Rarity: "Mythic", BaseEarn: 2500, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "GambleCoreCoin", Rarity: "Mythic", BaseEarn: 2800, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "GlitchPopCoin", Rarity: "Mythic", BaseEarn: 3000, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "KrakenCoin", Rarity: "Godly", BaseEarn: 3500, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "TrinityCoin", Rarity: "Godly", BaseEarn: 4250, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "ChronosCoin", Rarity: "Godly", BaseEarn: 5000, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
    { Name: "HeadlessLordCoin", Rarity: "Godly", BaseEarn: 100, HeadMultiplier: 1.3, TailMultiplier: 0.5 },
  ],

  Belts: {
    TrainEngineer: { FlipSpeed: 3, Exp: 3, Luck: 3 },
    Police: { HeadChance: 2, MoneyEarn: 3, Exp: 3 },
    Cloth: { FlipSpeed: 3, CriticalChance: 3, Luck: 3 },
    Librarian: { Luck: 5, FlipSpeed: 5, CriticalMultiply: 10, HeadChance: 5 },
    Skater: { FlipSpeed: 5, Exp: 2, MoneyEarn: 5 },
    Employee: { MoneyEarn: 5, Exp: 5, HeadChance: 5, Luck: 10 },
    Artist: { FlipSpeed: 5, Luck: 10, CriticalChance: 10, Exp: 5 },
    Exercise: { MoneyEarn: 10, CriticalChance: 20, Exp: 30, CriticalMultiply: 10 },
    VIP: { FlipSpeed: 10, CriticalChance: 10, Luck: 10, HeadChance: 10 },
    Magical: { MoneyEarn: 10, HeadChance: 10, Luck: 10, CriticalChance: 10 },
    Thief: { Luck: 10, FlipSpeed: 10, MoneyEarn: 10 },
    Vacation: { FlipSpeed: 10, CriticalMultiply: 25, Exp: 25, HeadChance: 10 },
    Photographer: { CriticalChance: 20, FlipSpeed: 15, CriticalMultiply: 20 },
    Jewel: { Luck: 30, MoneyEarn: 10, CriticalMultiply: 15, CriticalChance: 20 },
    Alchemist: { MoneyEarn: 10, FlipSpeed: 10, Exp: 20, CriticalChance: 10 },
    WaterPlay: { HeadChance: 10, Exp: 25, FlipSpeed: 15 },
    Survivor: { Luck: 30, MoneyEarn: 10, CriticalChance: 15, Exp: 30 },
    Sleepingbeauty: { MoneyEarn: 20, HeadChance: 15, Exp: 30, Luck: 20 },
    BlackRose: { FlipSpeed: 20, CriticalChance: 20, CriticalMultiply: 35, Luck: 20 },
    Miner: { MiningFlipSpeed: 15, MiningLuck: 15 },
    Blacksmith: { CoinResetChance: -12, UpgradeCost: -10 },
    Hacker: { MoneyEarn: 20, FlipSpeed: 20, Exp: 25, Luck: 10 },
    DeepWeb: { FlipSpeed: 25, HeadChance: 20, Luck: 20, CriticalMultiply: 35 },
    Seraphim: { FlipSpeed: 50, Luck: 35, CriticalMultiply: 35, Exp: 35 },
    Void: { MoneyEarn: 45, HeadChance: 25, CriticalChance: 35 },
    SteamPunk: { FlipSpeed: 35, CriticalChance: 40, CriticalMultiply: 55 },
    TrickorTreater: { EventCurrencyMultiply: 5, Luck: 10, MoneyEarn: 10 },
    Clown: { WalkSpeed: 3, HeadChance: 5, FlipSpeed: 5, Exp: 10 },
    Mummy: { EventCurrencyMultiply: 6, WalkSpeed: 3, Luck: 15, MoneyEarn: 15 },
    Frankenstein: { FlipSpeed: 15, Exp: 10, CriticalMultiply: 10, CriticalChance: 10 },
    JackoLantern: { EventCurrencyMultiply: 7.5, WalkSpeed: 4, Luck: 20, FlipSpeed: 10 },
    Wizard: { EnchantBookChance: 5 },
    Jason: { CriticalChance: 13, CriticalMultiply: 13, Luck: 13, MoneyEarn: 13 },
    Witch: { MiningPotionDuration: 25, MiningPotionEffect: 10, EventCurrencyMultiply: 10, Luck: 30 },
    Vampire: { EventCurrencyMultiply: 15, Luck: 30, FlipSpeed: 20, MoneyEarn: 20 },
    Beelzebub: { EventCurrencyMultiply: 25, Luck: 40, Exp: 50, FlipSpeed: 25 },
    ContentCreator: { FlipSpeed: 20, MoneyEarn: 20, CriticalChance: 10, CriticalMultiply: 20 },
  },

  Necklaces: {
    TrainEngineer: { FlipSpeed: 3, Exp: 3, Luck: 3 },
    Police: { HeadChance: 2, MoneyEarn: 3, Exp: 3 },
    Cloth: { FlipSpeed: 3, CriticalChance: 3, Luck: 3 },
    Librarian: { Luck: 5, FlipSpeed: 5, CriticalMultiply: 10, HeadChance: 5 },
    Skater: { FlipSpeed: 5, Exp: 2, MoneyEarn: 5 },
    Employee: { MoneyEarn: 5, Exp: 5, HeadChance: 5, Luck: 10 },
    Artist: { FlipSpeed: 5, Luck: 10, CriticalChance: 10, Exp: 5 },
    Exercise: { MoneyEarn: 10, CriticalChance: 20, Exp: 30, CriticalMultiply: 10 },
    VIP: { FlipSpeed: 10, CriticalChance: 10, Luck: 10, HeadChance: 10 },
    Magical: { MoneyEarn: 10, HeadChance: 10, Luck: 10, CriticalChance: 10 },
    Thief: { Luck: 10, FlipSpeed: 10, MoneyEarn: 10 },
    Vacation: { FlipSpeed: 10, CriticalMultiply: 25, Exp: 25, HeadChance: 10 },
    Photographer: { CriticalChance: 20, FlipSpeed: 15, CriticalMultiply: 20 },
    Jewel: { Luck: 30, MoneyEarn: 10, CriticalMultiply: 15, CriticalChance: 20 },
    Alchemist: { MoneyEarn: 10, FlipSpeed: 10, Exp: 20, CriticalChance: 10 },
    WaterPlay: { HeadChance: 10, Exp: 25, FlipSpeed: 15 },
    Survivor: { Luck: 30, MoneyEarn: 10, CriticalChance: 15, Exp: 30 },
    Sleepingbeauty: { MoneyEarn: 20, HeadChance: 15, Exp: 30, Luck: 20 },
    BlackRose: { FlipSpeed: 20, CriticalChance: 20, CriticalMultiply: 35, Luck: 20 },
    Miner: { MiningFlipSpeed: 20, MiningLuck: 20 },
    Blacksmith: { CoinResetChance: -12, UpgradeCost: -10 },
    Hacker: { MoneyEarn: 20, FlipSpeed: 20, Exp: 25, Luck: 25 },
    DeepWeb: { FlipSpeed: 25, HeadChance: 20, Luck: 20, CriticalMultiply: 35 },
    Seraphim: { FlipSpeed: 50, Luck: 35, CriticalMultiply: 35, Exp: 35 },
    Void: { MoneyEarn: 45, HeadChance: 25, CriticalChance: 35 },
    SteamPunk: { FlipSpeed: 20, CriticalChance: 40, CriticalMultiply: 45 },
    TrickorTreater: { EventCurrencyMultiply: 5, Luck: 10, MoneyEarn: 10 },
    Clown: { WalkSpeed: 3, HeadChance: 5, FlipSpeed: 5, Exp: 10 },
    Mummy: { EventCurrencyMultiply: 6, WalkSpeed: 3, Luck: 15, MoneyEarn: 15 },
    Frankenstein: { FlipSpeed: 15, Exp: 10, CriticalMultiply: 10, CriticalChance: 10 },
    JackoLantern: { EventCurrencyMultiply: 7.5, WalkSpeed: 4, Luck: 20, FlipSpeed: 10 },
    Wizard: { EnchantBookChance: 5 },
    Jason: { CriticalChance: 13, CriticalMultiply: 13, Luck: 13, MoneyEarn: 13 },
    Witch: { MiningPotionDuration: 25, MiningPotionEffect: 10, EventCurrencyMultiply: 10, Luck: 30 },
    Vampire: { EventCurrencyMultiply: 15, Luck: 30, FlipSpeed: 20, MoneyEarn: 20 },
    Beelzebub: { EventCurrencyMultiply: 25, Luck: 40, Exp: 50, FlipSpeed: 25 },
    ContentCreator: { FlipSpeed: 20, MoneyEarn: 20, CriticalChance: 10, CriticalMultiply: 20 },
  },

  Enchants: {
    Flash: {
      I: { FlipSpeed: 5 },
      II: { FlipSpeed: 10 },
      III: { FlipSpeed: 15 },
      IV: { FlipSpeed: 20 },
    },
    Heads: {
      I: { HeadChance: 3 },
      II: { HeadChance: 6 },
      III: { HeadChance: 10 },
      IV: { HeadChance: 15 },
    },
    Luck: {
      I: { Luck: 5 },
      II: { Luck: 10 },
      III: { Luck: 15 },
      IV: { Luck: 20 },
    },
    Walk: {
      I: { WalkSpeed: 2 },
      II: { WalkSpeed: 5 },
      III: { WalkSpeed: 10 },
      IV: { WalkSpeed: 15 },
    },
    Wealth: {
      I: { MoneyEarn: 5 },
      II: { MoneyEarn: 10 },
      III: { MoneyEarn: 15 },
      IV: { MoneyEarn: 20 },
    },
    Heavy: {
      I: { FlipSpeed: -2, MoneyEarn: 5 },
      II: { FlipSpeed: -5, MoneyEarn: 10 },
      III: { FlipSpeed: -10, MoneyEarn: 25 },
      IV: { FlipSpeed: -15, MoneyEarn: 40 },
    },
    Critical: {
      I: { CriticalChance: 3, CriticalMultiply: 5 },
      II: { CriticalChance: 6, CriticalMultiply: 10 },
      III: { CriticalChance: 12, CriticalMultiply: 20 },
      IV: { CriticalChance: 18, CriticalMultiply: 30 },
    },
  },
};

const Images = {
  Coins: {
    Penny: "images/coins/Penny.png",
    DalgonaCoin: "images/coins/DalgonaCoin.png",
    PlushToyCoin: "images/coins/PlushToyCoin.png",
    GearCoin: "images/coins/GearCoin.png",
    SlimeCoin: "images/coins/SlimeCoin.png",
    CloverCoin: "images/coins/CloverCoin.png",
    SkaterCoin: "images/coins/SkaterCoin.png",
    SeaweedCoin: "images/coins/SeaweedCoin.png",
    FriendshipCoin: "images/coins/FriendshipCoin.png",
    GraphCoin: "images/coins/GraphCoin.png",
    RhythmCoin: "images/coins/RhythmCoin.png",
    DreamCoin: "images/coins/DreamCoin.png",
    ZoneCoin: "images/coins/ZoneCoin.png",
    LevelingCoin: "images/coins/LevelingCoin.png",
    LockCoin: "images/coins/LockCoin.png",
    BlackRoseCoin: "images/coins/BlackRoseCoin.png",
    OverdriveCoin: "images/coins/OverdriveCoin.png",
    CalendarCoin: "images/coins/CalendarCoin.png",
    GambleCoreCoin: "images/coins/GambleCoreCoin.png",
    GlitchPopCoin: "images/coins/GlitchPopCoin.png",
    KrakenCoin: "images/coins/KrakenCoin.png",
    TrinityCoin: "images/coins/TrinityCoin.png",
    ChronosCoin: "images/coins/ChronosCoin.png",
    HeadlessLordCoin: "images/coins/HeadlessLord1.png",
  },

  Belts: {
    Miner: "images/belts/Miner.png",
    JackoLantern: "images/belts/JackoLantern.png",
    WaterPlay: "images/belts/WaterPlay.png",
    Seraphim: "images/belts/Seraphim.png",
    VIP: "images/belts/VIP.png",
    Mummy: "images/belts/Mummy.png",
    Witch: "images/belts/Witch.png",
    Survivor: "images/belts/Survivor.png",
    Skater: "images/belts/Skater.png",
    SteamPunk: "images/belts/SteamPunk.png",
    Jewel: "images/belts/Jewel.png",
    Librarian: "images/belts/Librarian.png",
    TrickorTreater: "images/belts/TrickorTreater.png",
    Sleepingbeauty: "images/belts/Sleepingbeauty.png",
    BlackRose: "images/belts/BlackRose.png",
    Alchemist: "images/belts/Alchemist.png",
    Frankenstein: "images/belts/Frankenstein.png",
    ContentCreator: "images/belts/ContentCreator.png",
    Hacker: "images/belts/Hacker.png",
    Beelzebub: "images/belts/Beelzebub.png",
    Magical: "images/belts/Magical.png",
    Wizard: "images/belts/Wizard.png",
    Blacksmith: "images/belts/Blacksmith.png",
    TrainEngineer: "images/belts/TrainEngineer.png",
    Exercise: "images/belts/Exercise.png",
    Void: "images/belts/Void.png",
    Vampire: "images/belts/Vampire.png",
    Vacation: "images/belts/Vacation.png",
    Jason: "images/belts/Jason.png",
    Thief: "images/belts/Thief.png",
    Police: "images/belts/Police.png",
    Photographer: "images/belts/Photographer.png",
    Clown: "images/belts/Clown.png",
    Cloth: "images/belts/Cloth.png",
    Artist: "images/belts/Artist.png",
    Employee: "images/belts/Employee.png",
    DeepWeb: "images/belts/DeepWeb.png",
  },

  Necklaces: {
    Sleepingbeauty: "images/necklaces/Sleepingbeauty.png",
    DeepWeb: "images/necklaces/DeepWeb.png",
    Void: "images/necklaces/Void.png",
    Miner: "images/necklaces/Miner.png",
    Blacksmith: "images/necklaces/Blacksmith.png",
    Seraphim: "images/necklaces/Seraphim.png",
    Alchemist: "images/necklaces/Alchemist.png",
    Mummy: "images/necklaces/Mummy.png",
    Hacker: "images/necklaces/Hacker.png",
    Photographer: "images/necklaces/Photographer.png",
    Jason: "images/necklaces/Jason.png",
    Vacation: "images/necklaces/Vacation.png",
    Thief: "images/necklaces/Thief.png",
    Librarian: "images/necklaces/Librarian.png",
    ContentCreator: "images/necklaces/ContentCreator.png",
    Magical: "images/necklaces/Magical.png",
    Jewel: "images/necklaces/Jewel.png",
    Survivor: "images/necklaces/Survivor.png",
    VIP: "images/necklaces/VIP.png",
    Wizard: "images/necklaces/Wizard.png",
    JackoLantern: "images/necklaces/JackoLantern.png",
    Employee: "images/necklaces/Employee.png",
    TrainEngineer: "images/necklaces/TrainEngineer.png",
    WaterPlay: "images/necklaces/WaterPlay.png",
    BlackRose: "images/necklaces/BlackRose.png",
    Skater: "images/necklaces/Skater.png",
    Beelzebub: "images/necklaces/Beelzebub.png",
    Cloth: "images/necklaces/Cloth.png",
    Artist: "images/necklaces/Artist.png",
    Clown: "images/necklaces/Clown.png",
    Police: "images/necklaces/Police.png",
    Frankenstein: "images/necklaces/Frankenstein.png",
    Vampire: "images/necklaces/Vampire.png",
    TrickorTreater: "images/necklaces/TrickorTreater.png",
    SteamPunk: "images/necklaces/SteamPunk.png",
    Witch: "images/necklaces/Witch.png",
    Exercise: "images/necklaces/Exercise.png",
  },

  Enchants: {
    Flash: "images/enchants/Flash.png",
    Heads: "images/enchants/Heads.png",
    Critical: "images/enchants/Critical.png",
    Wealth: "images/enchants/Wealth.png",
    Heavy: "images/enchants/Heavy.png",
    Walk: "images/enchants/Walk.png",
    Luck: "images/enchants/Luck.png",
  },

  HeadlessLordTiers: [
    "images/coins/HeadlessLord1.png",
    "images/coins/HeadlessLord2.png",
    "images/coins/HeadlessLord3.png",
    "images/coins/HeadlessLord4.png",
    "images/coins/HeadlessLord5.png",
    "images/coins/HeadlessLord6.png",
    "images/coins/HeadlessLord7.png",
  ],
};

const Engravings = [
  "None",
  "Graph",
  "Rhythm",
  "Zone",
  "Lock",
  "Leveling",
  "Overdrive",
  "Friendship",
  "Skater",
  "HeadStreak",
  "Jackpot",
  "RandomCrits",
  "TrickOrTreat",
];

const InnateAbilities = {
  GraphCoin: "Graph",
  RhythmCoin: "Rhythm",
  ZoneCoin: "Zone",
  LockCoin: "Lock",
  LevelingCoin: "Leveling",
  OverdriveCoin: "Overdrive",
  FriendshipCoin: "Friendship",
  SkaterCoin: "Skater",
};

const CoinFlipsPerSecond = { KrakenCoin: 0.997, ChronosCoin: 0.775 };

const BaseSecondsPerFlip = 1.667;
const BaseCritChance = 1;
const BaseCritMultiplier = 1.02;
const BaseExpPerFlip = 5;
const LockPenaltySeconds = 1;
const CritChancePerPoint = 0.1;
const ZoneFlipSpeedBonus = 25;
const ZoneMoneyBonus = 25;
const OverdriveFlipCount = 25;
const OverdriveDurationSeconds = 10;
const OverdriveFlipSpeedBonus = 50;
const AbilityMoneyMultipliers = { Graph: 1.25, Rhythm: 1.3, Skater: 1.5, Leveling: 1.15 };
const SessionBoostMoneyPerTier = 10;
const FriendshipStep = 0.03;
const FriendshipCap = 1.3;

const SetBonusNames = [
  "Seraphim",
  "SteamPunk",
  "Void",
  "Hacker",
  "DeepWeb",
  "Beelzebub",
  "Vampire",
  "Clown",
];

const HeadlessLordCandyPerFlip = [10, 15, 25, 50, 75, 85, 95];

const StatNames = [
  "MoneyEarn",
  "FlipSpeed",
  "HeadChance",
  "CriticalChance",
  "CriticalMultiply",
  "Luck",
  "Exp",
  "EventCurrencyMultiply",
];

const GetElement = (ElementId) => document.getElementById(ElementId);
const GetNumber = (ElementId) => Number(GetElement(ElementId).value) || 0;
const IsChecked = (ElementId) => GetElement(ElementId).checked;

const FillSelect = (SelectId, Items) => {
  GetElement(SelectId).innerHTML = Items.map((Item) => `<option>${Item}</option>`).join("");
};

FillSelect("SelectedCoin", GameData.Coins.map((Coin) => Coin.Name));
FillSelect("SelectedBelt", ["None"].concat(Object.keys(GameData.Belts)));
FillSelect("SelectedNecklace", ["None"].concat(Object.keys(GameData.Necklaces)));
FillSelect("SelectedEnchant", ["None"].concat(Object.keys(GameData.Enchants)));
FillSelect("Engraving", Engravings);

GetElement("SelectedCoin").value = "Penny";

const RarityColors = {
  Common: "#9aa0a6",
  Uncommon: "#5bd16b",
  Rare: "#4aa3ff",
  Epic: "#b36bff",
  Legendary: "#ffb02e",
  Mythic: "#ff5d5d",
  Godly: "linear-gradient(90deg, #ff708f 0%, #ffae74 25.9%, #5affcd 51.2%, #7e9eda 74.9%, #bd6dff 100%)",
};

const TierColors = { I: "#ffffff", II: "#ffff7f", III: "#aaffff", IV: "#dcaaff" };

const DisplayNames = {
  TrickorTreater: "Trick-or-Treater",
  JackoLantern: "Jack-o’Lantern",
  HeadlessLordCoin: "Headless Lord",
};

const PrettyName = (Name) =>
  DisplayNames[Name] || Name.replace(/Coin$/, "").replace(/([a-z])([A-Z])/g, "$1 $2");

const BuildTileGrid = (GridId, SelectId, Items, ImageGroup) => {
  const Grid = GetElement(GridId);
  Grid.innerHTML = Items.map(
    (Item) =>
      `<button type="button" class="Tile" data-value="${Item}" title="${PrettyName(Item)}">${Item === "None" ? "<i></i>" : `<img src="${Images[ImageGroup][Item] || ""}" alt="">`}<span>${PrettyName(Item)}</span></button>`,
  ).join("");
  Grid.onclick = (ClickEvent) => {
    const TileButton = ClickEvent.target.closest(".Tile");
    if (!TileButton) return;
    GetElement(SelectId).value = TileButton.dataset.value;
    RenderAll();
  };
};

const HighlightSelected = (GridId, SelectedValue) =>
  document
    .querySelectorAll("#" + GridId + " .Tile")
    .forEach((TileButton) =>
      TileButton.classList.toggle("Selected", TileButton.dataset.value === SelectedValue),
    );

BuildTileGrid("CoinGrid", "SelectedCoin", GameData.Coins.map((Coin) => Coin.Name), "Coins");
BuildTileGrid("BeltGrid", "SelectedBelt", ["None"].concat(Object.keys(GameData.Belts)), "Belts");
BuildTileGrid("NeckGrid", "SelectedNecklace", ["None"].concat(Object.keys(GameData.Necklaces)), "Necklaces");
BuildTileGrid("EnchantGrid", "SelectedEnchant", ["None"].concat(Object.keys(GameData.Enchants)), "Enchants");

GetElement("TierButtons").innerHTML = ["I", "II", "III", "IV"]
  .map(
    (Tier) =>
      `<button type="button" data-value="${Tier}" style="--TierColor:${TierColors[Tier]}">${Tier}</button>`,
  )
  .join("");

GetElement("TierButtons").onclick = (ClickEvent) => {
  const TierButton = ClickEvent.target.closest("button");
  if (!TierButton) return;
  GetElement("SelectedEnchantTier").value = TierButton.dataset.value;
  RenderAll();
};

const BuildSlot = (ImageSource, Title, Subtitle, ExtraClass) =>
  `<div class="EquipmentSlot ${ExtraClass || ""}">${ImageSource ? `<img src="${ImageSource}" alt="">` : "<i></i>"}<b>${Title}</b><span>${Subtitle}</span></div>`;

const RenderHero = (Result, Settings, CoinName) => {
  const CoinImage =
    CoinName === "HeadlessLordCoin"
      ? Images.HeadlessLordTiers[Settings.HeadlessLordTier - 1]
      : Images.Coins[CoinName];
  const HasEnchant = Settings.Enchant !== "None";
  GetElement("HeroSummary").innerHTML =
    BuildSlot(CoinImage, PrettyName(CoinName), Result.CoinData.Rarity, "MainSlot") +
    BuildSlot(Images.Belts[Settings.Belt], PrettyName(Settings.Belt), "Belt") +
    BuildSlot(Images.Necklaces[Settings.Neck], PrettyName(Settings.Neck), "Necklace") +
    BuildSlot(
      HasEnchant ? Images.Enchants[Settings.Enchant] : "",
      HasEnchant ? Settings.Enchant : "No enchant",
      HasEnchant ? "Tier " + Settings.EnchantTier : "Enchant",
      HasEnchant ? "DarkBackground" : "",
    ) +
    `<div class="HeroInfo"><h3>${PrettyName(CoinName)}</h3><span class="Badge" style="background:${RarityColors[Result.CoinData.Rarity]}">${Result.CoinData.Rarity}</span><span class="Badge" style="background:var(--BorderColor);color:var(--TextColor)">${Result.Ability === "None" ? "No ability" : Result.Ability}</span>${Result.ActiveSet !== "None" ? `<span class="Badge" style="background:var(--AccentColor)">${PrettyName(Result.ActiveSet)} set</span>` : ""}<div class="Note" style="margin-top:6px">${FormatNumber(Result.FlipsPerHour)} flips/hr, ${FormatNumber(Result.MoneyPerHour)} money/hr${CoinName === "HeadlessLordCoin" ? ", " + FormatNumber(Result.CandyPerHour) + " candy/hr" : ""}</div></div>`;
};

const ExpRequiredForLevel = (Level) =>
  Level < 0
    ? 0
    : Math.floor((Level * 50 + 100) * Math.max(1, Math.log(Math.max(Level, 1) * 3.5)));

const FormatNumber = (Value) => {
  if (!isFinite(Value)) return "-";
  const AbsoluteValue = Math.abs(Value);
  const Units = [
    [1e12, "t"],
    [1e9, "b"],
    [1e6, "m"],
    [1e3, "k"],
  ];
  for (const [Threshold, Suffix] of Units) {
    if (AbsoluteValue >= Threshold)
      return (Value / Threshold).toFixed(2).replace(/\.?0+$/, "") + Suffix;
  }
  return AbsoluteValue >= 100
    ? Value.toFixed(0)
    : AbsoluteValue >= 1
      ? Value.toFixed(2).replace(/\.?0+$/, "")
      : Value.toFixed(3).replace(/\.?0+$/, "");
};

const FormatDuration = (Seconds) => {
  if (!isFinite(Seconds)) return "-";
  if (Seconds < 90) return Seconds.toFixed(0) + "s";
  if (Seconds < 5400) return (Seconds / 60).toFixed(1) + "m";
  if (Seconds < 172800) return (Seconds / 3600).toFixed(1) + "h";
  return (Seconds / 86400).toFixed(1) + "d";
};

const StreakDistribution = (HeadProbability, MaxStreak) => {
  let Probabilities = [];
  let Remaining = 1;
  for (let StreakLength = 0; StreakLength < MaxStreak; StreakLength++) {
    Probabilities.push((1 - HeadProbability) * Math.pow(HeadProbability, StreakLength));
    Remaining -= Probabilities[StreakLength];
  }
  Probabilities.push(Math.max(Remaining, 0));
  return Probabilities;
};

const AverageFlipMultiplier = (CoinData) =>
  0.5 * CoinData.HeadMultiplier + 0.5 * CoinData.TailMultiplier;

const CalculateBuild = (CoinName, Settings) => {
  const CoinData = GameData.Coins.find((Coin) => Coin.Name === CoinName);
  const StatTotals = {};
  StatNames.forEach((StatName) => (StatTotals[StatName] = 0));
  const StatSources = [];
  const AddStat = (Source, Stat, Value) => {
    if (!Value) return;
    StatTotals[Stat] = (StatTotals[Stat] || 0) + Value;
    StatSources.push([Source, Stat, Value]);
  };
  const AddAllStats = (Source, StatObject) => {
    for (const Stat in StatObject || {}) AddStat(Source, Stat, StatObject[Stat]);
  };

  if (Settings.HasVip) AddStat("VIP", "MoneyEarn", 20);
  AddAllStats("Belt " + Settings.Belt, GameData.Belts[Settings.Belt]);
  AddAllStats("Necklace " + Settings.Neck, GameData.Necklaces[Settings.Neck]);
  if (Settings.Enchant !== "None")
    AddAllStats(
      "Enchant " + Settings.Enchant + " " + Settings.EnchantTier,
      GameData.Enchants[Settings.Enchant][Settings.EnchantTier],
    );
  if (Settings.WealthSoda === "1") AddStat("Rich Soda", "MoneyEarn", 25);
  if (Settings.WealthSoda === "2") AddStat("Super Rich Soda", "MoneyEarn", 30);
  if (Settings.SpeedSoda === "1") AddStat("Flip Energy Drink", "FlipSpeed", 25);
  if (Settings.SpeedSoda === "2") AddStat("Super Flip Energy Drink", "FlipSpeed", 30);
  if (Settings.MoneyCharm) AddStat("Money Wealth", "MoneyEarn", 15);
  if (Settings.CandapaloozaMoney) AddStat("Candapalooza personal", "MoneyEarn", 10);
  if (Settings.CandapaloozaGlobalMoney) AddStat("Candapalooza global", "MoneyEarn", 50);
  AddStat("Session boost", "MoneyEarn", Settings.SessionBoost * SessionBoostMoneyPerTier);

  AddStat("Skill points", "MoneyEarn", Settings.SkillMoney);
  AddStat("Skill points", "FlipSpeed", Settings.SkillFlipSpeed);
  AddStat("Skill points", "CriticalChance", Settings.SkillCritChance * 5);
  AddStat("Skill points", "CriticalMultiply", Settings.SkillCritMultiplier * 2.5);
  AddStat("Skill points", "Luck", Settings.SkillLuck * 0.5);
  AddStat("Skill points", "Exp", Settings.SkillExp);
  AddStat("Coin upgrade", "MoneyEarn", Settings.UpgradeMoney);
  AddStat("Coin upgrade", "FlipSpeed", Settings.UpgradeFlipSpeed);
  AddStat("Coin upgrade", "CriticalChance", Settings.UpgradeCritChance);
  AddStat("Coin upgrade", "CriticalMultiply", Settings.UpgradeCritMultiplier * 2.5);
  AddStat("Coin upgrade", "HeadChance", Settings.UpgradeHeadChance);

  const Ability = Settings.Engraving !== "None" ? Settings.Engraving : InnateAbilities[CoinName] || "None";
  if (Ability === "RandomCrits") {
    AddStat("Random Crits", "CriticalChance", 90);
    AddStat("Random Crits", "CriticalMultiply", 50);
  }
  const ActiveSet =
    Settings.Belt === Settings.Neck && SetBonusNames.includes(Settings.Belt) ? Settings.Belt : "None";
  let AbilityFlipSpeed = 0;
  let AbilityMoney = 0;
  let LockTimePenalty = 0;
  let AbilityMultiplier = 1;
  if (Ability === "Lock") {
    AbilityFlipSpeed += 15;
    LockTimePenalty = 0.05 * LockPenaltySeconds;
  }
  if (Ability === "Zone") {
    AbilityFlipSpeed += ZoneFlipSpeedBonus;
    AbilityMoney += ZoneMoneyBonus;
  }
  if (AbilityMoneyMultipliers[Ability]) AbilityMultiplier = AbilityMoneyMultipliers[Ability];
  if (Ability === "Friendship")
    AbilityMultiplier = Math.min(FriendshipCap, 1 + FriendshipStep * Settings.FriendsInServer);

  const LevelMultiplier = Math.min(1.35, Settings.CoinLevel * 0.01 + 1);
  const PrestigeMultiplier = Math.min(5, Settings.PrestigeLevel) * 0.05 + 1;
  let HeadProbability = Math.min(1, Math.max(0, 0.5 * (1 + StatTotals.HeadChance / 100)));
  const SideProbability = ActiveSet === "Beelzebub" ? 0.33 : 0;
  const HeadOutcomeProbability = HeadProbability * (1 - SideProbability);
  const TailOutcomeProbability = (1 - HeadProbability) * (1 - SideProbability);
  let HeadMultiplier = CoinData.HeadMultiplier;
  if (ActiveSet === "DeepWeb")
    HeadMultiplier += 0.05 * ((1 - HeadProbability) / Math.max(HeadProbability, 0.001));

  const StreakProbabilities = StreakDistribution(HeadProbability, 10);
  let AverageStreak = 0;
  StreakProbabilities.forEach(
    (Probability, StreakLength) => (AverageStreak += Probability * StreakLength),
  );
  let HeadStreakMultiplier = 1;
  if (Ability === "HeadStreak") {
    HeadStreakMultiplier = 0;
    StreakProbabilities.forEach(
      (Probability, StreakLength) =>
        (HeadStreakMultiplier += Probability * (1 + 0.05 * Math.min(StreakLength + 1, 10))),
    );
  }
  let VampireUptime = 0;
  if (ActiveSet === "Vampire") {
    const VampireTriggerRate =
      ((1 - HeadProbability) * Math.pow(HeadProbability, 4)) / BaseSecondsPerFlip;
    VampireUptime = (VampireTriggerRate * 10) / (1 + VampireTriggerRate * 10);
    AbilityFlipSpeed += 25 * VampireUptime;
    AbilityMoney += 25 * VampireUptime;
  }

  const CritChance =
    BaseCritChance +
    CritChancePerPoint *
      (StatTotals.CriticalChance + (ActiveSet === "SteamPunk" ? 2 * AverageStreak : 0));
  const CritMultiplier = BaseCritMultiplier * (1 + StatTotals.CriticalMultiply / 100);
  const CritFactor = 1 + (CritChance / 100) * (CritMultiplier - 1);
  const CoinBaseSeconds = CoinFlipsPerSecond[CoinName]
    ? 1 / CoinFlipsPerSecond[CoinName]
    : BaseSecondsPerFlip;
  const SpeedWithExtraBonus = (ExtraFlipSpeed) =>
    Math.min(2.5, 1 + (StatTotals.FlipSpeed + AbilityFlipSpeed + ExtraFlipSpeed) / 100);
  let FlipSpeedMultiplier = SpeedWithExtraBonus(0);
  let SecondsPerFlip = CoinBaseSeconds / FlipSpeedMultiplier + LockTimePenalty;
  if (Ability === "Overdrive") {
    const SecondsWhileOverdriveActive =
      CoinBaseSeconds / SpeedWithExtraBonus(OverdriveFlipSpeedBonus) + LockTimePenalty;
    const SecondsWhileOverdriveInactive = CoinBaseSeconds / SpeedWithExtraBonus(0) + LockTimePenalty;
    const FlipsDuringOverdrive = Math.min(
      OverdriveFlipCount,
      OverdriveDurationSeconds / SecondsWhileOverdriveActive,
    );
    if (FlipsDuringOverdrive >= OverdriveFlipCount) {
      SecondsPerFlip = SecondsWhileOverdriveActive;
    } else {
      SecondsPerFlip =
        (OverdriveDurationSeconds +
          (OverdriveFlipCount - FlipsDuringOverdrive) * SecondsWhileOverdriveInactive) /
        OverdriveFlipCount;
    }
    FlipSpeedMultiplier = CoinBaseSeconds / (SecondsPerFlip - LockTimePenalty);
  }
  const FlipsPerHour = 3600 / SecondsPerFlip;

  const ProcMultiplier =
    (Ability === "Jackpot" ? 1.16 : 1) *
    (Ability === "TrickOrTreat" ? 1.15 : 1) *
    (ActiveSet === "Seraphim" ? 12 / 11 : 1) *
    (ActiveSet === "Void" ? 1.075 : 1) *
    (ActiveSet === "Hacker" ? 1 + 0.25 * 2 * HeadProbability * (1 - HeadProbability) : 1);
  const RawFlipValue =
    HeadOutcomeProbability * HeadMultiplier * HeadStreakMultiplier +
    TailOutcomeProbability * CoinData.TailMultiplier +
    SideProbability;
  const MoneyMultiplier =
    (1 + (StatTotals.MoneyEarn + AbilityMoney) / 100) *
    PrestigeMultiplier *
    LevelMultiplier *
    AbilityMultiplier *
    ProcMultiplier *
    CritFactor;

  const IsHeadlessLord = CoinName === "HeadlessLordCoin";
  let MoneyPerFlip = 0;
  let CandyPerFlip = 0;

  if (IsHeadlessLord) {
    const CandyMultiplier =
      1 +
      (StatTotals.EventCurrencyMultiply +
        (Settings.CandyCharm ? 15 : 0) +
        (Settings.CandapaloozaCandy10 ? 10 : 0) +
        (Settings.CandapaloozaCandy20 ? 10 : 0) +
        (Settings.CandapaloozaGlobalCandy ? 10 : 0) +
        (Settings.WeekendBoost ? 10 : 0)) /
        100;

    CandyPerFlip =
      HeadlessLordCandyPerFlip[Settings.HeadlessLordTier - 1] *
      (RawFlipValue / AverageFlipMultiplier(CoinData)) *
      LevelMultiplier *
      PrestigeMultiplier *
      AbilityMultiplier *
      ProcMultiplier *
      CandyMultiplier *
      (Settings.MoneyStatsOnCandy === "1"
        ? 1 + (Settings.SkillMoney + Settings.UpgradeMoney) / 100
        : 1);
  } else {
    MoneyPerFlip = CoinData.BaseEarn * RawFlipValue * MoneyMultiplier;
  }

  const ExpPerFlip = BaseExpPerFlip * (1 + StatTotals.Exp / 100);
  return {
    CoinData,
    StatTotals,
    StatSources,
    Ability,
    ActiveSet,
    HeadProbability,
    FlipSpeedMultiplier,
    SecondsPerFlip,
    FlipsPerHour,
    MoneyPerFlip,
    CandyPerFlip,
    ExpPerFlip,
    CritChance,
    CritMultiplier,
    CritFactor,
    MoneyMultiplier,
    AverageStreak,
    VampireUptime,
    MoneyPerHour: MoneyPerFlip * FlipsPerHour,
    CandyPerHour: CandyPerFlip * FlipsPerHour,
    ExpPerHour: ExpPerFlip * FlipsPerHour,
    CritsPerHour: (FlipsPerHour * CritChance) / 100,
    HeadsPerHour: FlipsPerHour * HeadProbability,
  };
};

const ReadSettings = () => ({
  Belt: GetElement("SelectedBelt").value,
  Neck: GetElement("SelectedNecklace").value,
  Enchant: GetElement("SelectedEnchant").value,
  EnchantTier: GetElement("SelectedEnchantTier").value,
  Engraving: GetElement("Engraving").value,
  HasVip: IsChecked("VipGamepass"),
  CoinLevel: GetNumber("CoinLevel"),
  PrestigeLevel: GetNumber("PrestigeLevel"),
  SkillMoney: GetNumber("SkillMoney"),
  SkillFlipSpeed: GetNumber("SkillFlipSpeed"),
  SkillCritChance: GetNumber("SkillCritChance"),
  SkillCritMultiplier: GetNumber("SkillCritMultiplier"),
  SkillExp: GetNumber("SkillExp"),
  SkillLuck: GetNumber("SkillLuck"),
  UpgradeMoney: GetNumber("UpgradeMoney"),
  UpgradeFlipSpeed: GetNumber("UpgradeFlipSpeed"),
  UpgradeCritChance: GetNumber("UpgradeCritChance"),
  UpgradeCritMultiplier: GetNumber("UpgradeCritMultiplier"),
  UpgradeHeadChance: GetNumber("UpgradeHeadChance"),
  WealthSoda: GetElement("WealthSoda").value,
  SpeedSoda: GetElement("SpeedSoda").value,
  SessionBoost: GetNumber("SessionBoost"),
  MoneyCharm: IsChecked("MoneyCharm"),
  CandyCharm: IsChecked("CandyCharm"),
  CandapaloozaMoney: IsChecked("CandapaloozaMoney"),
  CandapaloozaCandy10: IsChecked("CandapaloozaCandy10"),
  CandapaloozaCandy20: IsChecked("CandapaloozaCandy20"),
  CandapaloozaGlobalCandy: IsChecked("CandapaloozaGlobalCandy"),
  CandapaloozaGlobalMoney: IsChecked("CandapaloozaGlobalMoney"),
  WeekendBoost: IsChecked("WeekendBoost"),
  HeadlessLordTier: GetNumber("HeadlessLordTier"),
  MoneyStatsOnCandy: 0,
  FriendsInServer: GetNumber("FriendsInServer"),
});

const FormatDecimal = (Value, MaxDecimals = 2) => Number(Value.toFixed(MaxDecimals)).toString();
const StatCell = (Label, Value) => `<div class="StatCell"><b>${Value}</b><span>${Label}</span></div>`;

GetElement("CoinComparisonTable").onclick = (ClickEvent) => {
  const CoinRow = ClickEvent.target.closest("tr[data-coin-name]");
  if (!CoinRow) return;
  GetElement("SelectedCoin").value = CoinRow.dataset.coinName;
  RenderAll();
};

const RenderAll = () => {
  const Settings = ReadSettings();
  Images.Coins.HeadlessLordCoin =
    Images.HeadlessLordTiers[Settings.HeadlessLordTier - 1] || Images.HeadlessLordTiers[0];
  const HeadlessLordTileImage = document.querySelector(
    '#CoinGrid .Tile[data-value="HeadlessLordCoin"] img',
  );
  if (HeadlessLordTileImage) HeadlessLordTileImage.src = Images.Coins.HeadlessLordCoin;
  document.querySelectorAll("input[type=range]").forEach((Slider) => {
    GetElement(Slider.id + "Value").textContent = Slider.value;
  });
  const CoinName = GetElement("SelectedCoin").value;
  const Result = CalculateBuild(CoinName, Settings);
  RenderHero(Result, Settings, CoinName);
  HighlightSelected("CoinGrid", CoinName);
  HighlightSelected("BeltGrid", Settings.Belt);
  HighlightSelected("NeckGrid", Settings.Neck);
  HighlightSelected("EnchantGrid", Settings.Enchant);
  document
    .querySelectorAll("#TierButtons button")
    .forEach((TierButton) =>
      TierButton.classList.toggle("Selected", TierButton.dataset.value === Settings.EnchantTier),
    );

  const HourlyCells = [
    StatCell("Flips", FormatNumber(Result.FlipsPerHour)),
    StatCell("Money", FormatNumber(Result.MoneyPerHour)),
    StatCell("Exp", FormatNumber(Result.ExpPerHour)),
    StatCell("Crits", FormatNumber(Result.CritsPerHour)),
    StatCell("Heads", FormatNumber(Result.HeadsPerHour)),
  ];
  if (CoinName === "HeadlessLordCoin")
    HourlyCells.splice(2, 0, StatCell("Halloween candy / hour", FormatNumber(Result.CandyPerHour)));
  GetElement("HourlyStats").innerHTML = HourlyCells.join("");

  const CurrentLevel = Math.floor(Settings.CoinLevel);
  const ExpToNextLevel = Math.max(0, ExpRequiredForLevel(CurrentLevel));
  let ExpToMaxLevel = 0;
  for (let Level = CurrentLevel; Level < 125; Level++) ExpToMaxLevel += ExpRequiredForLevel(Level);
  const ExpPerSecond = Result.ExpPerHour / 3600;

  GetElement("PerFlipStats").innerHTML = [
    StatCell("Seconds", FormatDecimal(Result.SecondsPerFlip, 3)),
    StatCell(
      "Flip speed multiplier",
      FormatDecimal(Result.FlipSpeedMultiplier) + "x" + (Result.FlipSpeedMultiplier >= 2.5 ? " (cap)" : ""),
    ),
    StatCell("Head chance", FormatDecimal(Result.HeadProbability * 100, 1) + "%"),
    StatCell("Money", FormatNumber(Result.MoneyPerFlip)),
    StatCell("Candy", FormatNumber(Result.CandyPerFlip)),
    StatCell(
      "Crit chance / mult",
      FormatDecimal(Result.CritChance, 1) + "% / " + FormatDecimal(Result.CritMultiplier) + "x",
    ),
    StatCell("Money multiplier", FormatDecimal(Result.MoneyMultiplier) + "x"),
    StatCell("Exp", FormatDecimal(Result.ExpPerFlip)),
    StatCell("Time to next level", FormatDuration(ExpPerSecond ? ExpToNextLevel / ExpPerSecond : Infinity)),
    StatCell("Time to prestige", FormatDuration(ExpPerSecond ? ExpToMaxLevel / ExpPerSecond : Infinity)),
  ].join("");

  const StatRows = Object.keys(Result.StatTotals).map(
    (StatName) =>
      `<tr><td>${StatName}</td><td>${Result.StatTotals[StatName] ? (Result.StatTotals[StatName] > 0 ? "+" : "") + Result.StatTotals[StatName].toFixed(1) + "%" : "0"}</td></tr>`,
  );
  GetElement("StatTotalsTable").innerHTML =
    "<tr><th>Stat</th><th>Total</th></tr>" +
    StatRows.join("") +
    "<tr><th colspan=2>Sources</th></tr>" +
    Result.StatSources.map(
      ([Source, Stat, Value]) =>
        `<tr><td>${Source}</td><td>${Stat} ${Value > 0 ? "+" : ""}${Value}</td></tr>`,
    ).join("");

  const EffectLines = [];
  EffectLines.push(
    "Coin ability: " +
      Result.Ability +
      (Settings.Engraving === "None" && Result.Ability !== "None" ? " (innate)" : ""),
  );

  EffectLines.push(
    "Set bonus: " +
      (Result.ActiveSet !== "None"
        ? Result.ActiveSet + " pair active"
        : "None"),
  );

  if (Result.ActiveSet === "Vampire")
    EffectLines.push("Eternal Hunger estimated uptime " + (Result.VampireUptime * 100).toFixed(1) + "%");

  if (Result.ActiveSet === "SteamPunk")
    EffectLines.push(
      "Pressure adds " + (2 * Result.AverageStreak).toFixed(2) + "% average crit chance",
    );

  GetElement("ActiveEffects").innerHTML = EffectLines.join("<br>");

  const AllCoinResults = GameData.Coins.map((Coin) => ({
    CoinName: Coin.Name,
    Result: CalculateBuild(Coin.Name, Settings),
  })).sort((A, B) => B.Result.MoneyPerHour - A.Result.MoneyPerHour);

  GetElement("CoinComparisonTable").innerHTML =
    "<tr><th>Coin</th><th>Money / hr</th><th>Candy / hr</th><th>Money / flip</th></tr>" +
    AllCoinResults.map(
      (Entry) =>
        `<tr data-coin-name="${Entry.CoinName}" class="${Entry.CoinName === CoinName ? "SelectedRow" : ""}"><td><img class="MiniIcon" src="${Images.Coins[Entry.CoinName]}" alt="">${PrettyName(Entry.CoinName)}</td><td>${FormatNumber(Entry.Result.MoneyPerHour)}</td><td>${Entry.CoinName === "HeadlessLordCoin" ? FormatNumber(Entry.Result.CandyPerHour) : "-"}</td><td>${FormatNumber(Entry.Result.MoneyPerFlip)}</td></tr>`,
    ).join("");

  try {
    localStorage.setItem(
      "RHPCalculator",
      JSON.stringify(
        Array.from(document.querySelectorAll("select,input")).map((Field) => [
          Field.id,
          Field.type === "checkbox" ? Field.checked : Field.value,
        ]),
      ),
    );
  } catch (Error) {}
};

try {
  const SavedFields = JSON.parse(localStorage.getItem("RHPCalculator") || "[]");
  SavedFields.forEach(([FieldId, SavedValue]) => {
    const Field = GetElement(FieldId);
    if (Field) {
      if (Field.type === "checkbox") Field.checked = SavedValue;
      else Field.value = SavedValue;
    }
  });
} catch (Error) {}

document.querySelectorAll("select,input").forEach((Field) => {
  Field.addEventListener("input", RenderAll);
  Field.addEventListener("change", RenderAll);
});

document.getElementById("ClearStorage").addEventListener("click", () => {
    localStorage.removeItem("RHPCalculator");
    location.reload();
});

RenderAll();