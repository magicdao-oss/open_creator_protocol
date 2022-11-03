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
 * @category Close
 * @category generated
 */
export const closeStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'CloseInstructionArgs'
)
/**
 * Accounts required by the _close_ instruction
 *
 * @property [] mintManager
 * @property [_writable_] mint
 * @property [_writable_] holderTokenAccount
 * @property [**signer**] holder
 * @category Instructions
 * @category Close
 * @category generated
 */
export type CloseInstructionAccounts = {
  mintManager: web3.PublicKey
  mint: web3.PublicKey
  holderTokenAccount: web3.PublicKey
  holder: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const closeInstructionDiscriminator = [
  98, 165, 201, 177, 108, 65, 206, 96,
]

/**
 * Creates a _Close_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category Close
 * @category generated
 */
export function createCloseInstruction(
  accounts: CloseInstructionAccounts,
  programId = new web3.PublicKey('mtokYxNhZEihbDq3r6LX22pLKnpuQvXV5kwhgCDCWw4')
) {
  const [data] = closeStruct.serialize({
    instructionDiscriminator: closeInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.mintManager,
      isWritable: false,
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
