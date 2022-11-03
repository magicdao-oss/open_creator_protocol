/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category Burn
 * @category generated
 */
export const burnStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'BurnInstructionArgs'
)
/**
 * Accounts required by the _burn_ instruction
 *
 * @property [_writable_] mintManager
 * @property [_writable_] mint
 * @property [_writable_] holderTokenAccount
 * @property [**signer**] holder
 * @category Instructions
 * @category Burn
 * @category generated
 */
export type BurnInstructionAccounts = {
  mintManager: web3.PublicKey
  mint: web3.PublicKey
  holderTokenAccount: web3.PublicKey
  holder: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const burnInstructionDiscriminator = [116, 110, 29, 56, 107, 219, 42, 93]

/**
 * Creates a _Burn_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category Burn
 * @category generated
 */
export function createBurnInstruction(
  accounts: BurnInstructionAccounts,
  programId = new web3.PublicKey('mtokYxNhZEihbDq3r6LX22pLKnpuQvXV5kwhgCDCWw4')
) {
  const [data] = burnStruct.serialize({
    instructionDiscriminator: burnInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.mintManager,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.holderTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.holder,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
