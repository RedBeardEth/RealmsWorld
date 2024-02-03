/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Collections, Game } from "@realms-world/constants";
import { CollectionAddresses } from "@realms-world/constants";

export const getGamesByContract = (games: Game[], contractAddress: string) => {
  return games.filter((game: any) => {
    return game.collections.some(
      (collection: Collections) => collection === contractAddress,
    );
  });
};

export function findCollectionKeyByAddress(
  address: string,
): keyof Collections | null {
  for (const collectionKey in CollectionAddresses) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const chainAddresses = (CollectionAddresses as any)[collectionKey];
    for (const chainId in chainAddresses) {
      if (chainAddresses[chainId] === address) {
        return collectionKey as keyof Collections;
      }
    }
  }
  return null; // Address not found in any collection
}
