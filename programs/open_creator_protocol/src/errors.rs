use anchor_lang::prelude::*;

#[error_code]
pub enum OCPErrorCode {
    #[msg("Invalid mint")]
    InvalidMint,
    #[msg("Invalid metadata")]
    InvalidMetadata,
    #[msg("Invalid token account")]
    InvalidTokenAccount,
    #[msg("Invalid authority address")]
    InvalidAuthority,
    #[msg("Invalid policy creation")]
    InvalidPolicyCreation,
    #[msg("Invalid policy evaluation")]
    InvalidPolicyEvaluation,
    #[msg("Invalid policy mint association")]
    InvalidPolicyMintAssociation,
    #[msg("Invalid locked by")]
    InvalidLockedBy,
    #[msg("Mint state is locked")]
    MintStateLocked,
    #[msg("Unknown account found in instruction")]
    UnknownAccount,
    #[msg("Account not found in instruction")]
    AccountNotFound,
    #[msg("Invalid dynamic royalty")]
    InvalidDynamicRoyalty,
    #[msg("Numerical overflow")]
    NumericalOverflow,
    #[msg("Not Implemented")]
    NotImplemented,
    #[msg("Invalid metadata update_authority")]
    InvalidMetadataUpdateAuthority,
}
