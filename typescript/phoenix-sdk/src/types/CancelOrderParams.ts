/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";
import { Side, sideBeet } from "./Side";
export type CancelOrderParams = {
  side: Side;
  priceInTicks: beet.bignum;
  orderSequenceNumber: beet.bignum;
};

/**
 * @category userTypes
 * @category generated
 */
export const cancelOrderParamsBeet = new beet.BeetArgsStruct<CancelOrderParams>(
  [
    ["side", sideBeet],
    ["priceInTicks", beet.u64],
    ["orderSequenceNumber", beet.u64],
  ],
  "CancelOrderParams"
);
