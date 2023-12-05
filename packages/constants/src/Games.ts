import { ChainId } from "./Chains";
import { Collections } from "./Collections";
import { Tokens } from "./Tokens";

interface Link {
  mainnet?: string;
  testnet?: string;
  discord?: string;
  twitter?: string;
  whitepaper?: string;
  homepage?: string;
}
export interface Game {
  name: string; // Display name of the game
  id: string; // Game ID (used for URL must be kebab-case)
  color: string;
  status: string;
  developer: string;
  genres?: string[];
  description: string;
  longform: string;
  links: Link;
  operatingSystems?: string[];
  lords?: string; // How the Lords Token is used in the game
  chains: ChainId[];
  collections?: Collections[];
  tokens?: Tokens[];
  screenshotLength?: number;
}

export const games: Game[] = [
  {
    name: "Realms: Eternum",
    id: "realms-eternum",
    developer: "BiblioDAO",
    genres: ["Economic Strategy", "PvP", "Raiding"],
    color: "#f5f5f5",
    status: "alpha",
    description: "Conquer the Realms",
    longform:
      "Eternum is a strategy game that is built on StarkNet. It is a game of management and conquest, where players must build and defend their Realm to thrive. The game is governed by a set of rules that are enforced by the game's smart contracts.",
    links: {
      homepage: "https://eternum.realms.world/",
      discord: "https://discord.gg/uQnjZhZPfu",
      twitter: "https://twitter.com/LootRealms",
      whitepaper: "https://scroll.bibliothecadao.xyz/",
    },
    operatingSystems: ["Web Browser"],
    lords: "Trade for resources",
    chains: [ChainId.SN_GOERLI],
    collections: [Collections.REALMS],
    tokens: [Tokens.LORDS],
    screenshotLength: 1,
  },
  {
    name: "Loot Survivor",
    id: "loot-survivor",
    developer: "BiblioDAO",
    genres: ["Play to Die", "Roguelike"],
    color: "#f5f5f5",
    status: "beta",
    description: "Play to Die",
    longform:
      "Survivors is the first Loot adventure game exploring the Play2Die mechanic. It is a game of onchain survival where you must defeat beasts and collect gear in the fight to stay alive and make it to the top of the leaderboard.",
    links: {
      mainnet: "https://survivor.realms.world/",
      testnet: "https://beta-survivor.realms.world/",
      discord: "https://discord.gg/realmsworld",
      twitter: "https://twitter.com/LootRealms",
    },
    operatingSystems: ["Web Browser"],
    lords: "25 Per Adventurer",
    chains: [ChainId.SN_MAIN],
    collections: [Collections.GOLDEN_TOKEN],
    tokens: [Tokens.LORDS],
    screenshotLength: 4,
  },
  {
    name: "Loot Auto Chess",
    id: "loot-auto-chess",
    developer: "HelheimLabs",
    genres: ["PvP", "Auto Battle"],
    color: "#f5f5f8",
    status: "In development",
    description: "Auto Chess Battle",
    longform:
      "Players can strategically select and upgrade heroes to form powerful combinations, manage their in-game economy wisely to optimize their team, and position their heroes effectively on the board to outlast their opponents in automated battles.",
    links: {},
    operatingSystems: ["Web Browser"],
    lords: "For ticket",
    chains: [],
    collections: [Collections.GOLDEN_TOKEN, Collections.BEASTS],
    tokens: [Tokens.LORDS],
    screenshotLength: 1,
  },
  {
    name: "Mississippi",
    id: "mississippi",
    developer: "Mississippi Team",
    genres: ["SLG", "PVP", "Roguelike"],
    color: "#6F391E",
    status: "beta",
    description: "Fully on-chain PVP roguelike game",
    longform:
      'Mississippi is a fully on-chain PVP roguelike game. We hope to create an expansive cavern space, containing abundant resources, which players need to explore and exploit as many resources from the cavern as possible within a fixed time limit. Besides, we will integrate with the Lootverse, such as by "extracting" equipment and resources from Loot Bags and Realms, which can give players specific attributes for each round.',
    links: {
      mainnet: "https://0xMssp.xyz/",
      testnet: "https://test.0xMssp.xyz/",
      discord: "https://discord.com/invite/rg9V8J49",
      twitter: "https://twitter.com/0xMississippi",
    },
    operatingSystems: ["Web Browser"],
    lords: "N/A",
    chains: [ChainId.MISSISSIPPI_TESTNET],
    collections: [Collections.REALMS],
    tokens: [Tokens.LORDS],
    screenshotLength: 4,
  },
  {
    name: "StarkLand",
    id: "stark-land",
    developer: "VivaLabs",
    genres: ["SLG", "PvP"],
    color: "#f5f5f5",
    status: "alpha",
    description: "Full on chain SLG",
    longform:
      "Realm holders can create their Realm World, where players can mine, war, explore in your world, also invade other World.",
    links: {
      homepage: "https://app.starkland.xyz/",
      twitter: "https://twitter.com/starkland_xyz",
      whitepaper: "https://starknopoly.gitbook.io/starkland/",
    },
    operatingSystems: ["Web Browser"],
    lords: "Trade for resources",
    chains: [ChainId.SN_MAIN],
    collections: [Collections.GOLDEN_TOKEN],
    tokens: [Tokens.LORDS],
    screenshotLength: 3,
  },
];