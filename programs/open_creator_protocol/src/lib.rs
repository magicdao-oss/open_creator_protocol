#![allow(clippy::result_large_err)]

pub mod action;
pub mod errors;
pub mod instructions;
pub mod royalty;
pub mod state;

use anchor_lang::prelude::*;
use instructions::*;

solana_program::declare_id!("ocp4vWUzA2z2XMYJ3QhM9vWdyoyoQwAFJhRdVTbvo9E");

#[program]
pub mod open_creator_protocol {
    use super::*;

    pub fn init_policy(ctx: Context<InitPolicyCtx>, arg: InitPolicyArg) -> Result<()> {
        policy::init_policy::handler(ctx, arg)
    }

    pub fn update_policy(ctx: Context<UpdatePolicyCtx>, arg: UpdatePolicyArg) -> Result<()> {
        policy::update_policy::handler(ctx, arg)
    }

    pub fn wrap<'info>(ctx: Context<'_, '_, '_, 'info, WrapCtx<'info>>) -> Result<()> {
        nft_proxy::wrap::handler(ctx)
    }

    pub fn init_account<'info>(ctx: Context<'_, '_, '_, 'info, InitAccountCtx<'info>>) -> Result<()> {
        nft_proxy::init_account::handler(ctx)
    }

    pub fn approve<'info>(ctx: Context<'_, '_, '_, 'info, ApproveCtx<'info>>) -> Result<()> {
        nft_proxy::approve::handler(ctx)
    }

    pub fn revoke<'info>(ctx: Context<'_, '_, '_, 'info, RevokeCtx<'info>>) -> Result<()> {
        nft_proxy::revoke::handler(ctx)
    }

    pub fn burn<'info>(ctx: Context<'_, '_, '_, 'info, BurnCtx<'info>>) -> Result<()> {
        nft_proxy::burn::handler(ctx)
    }

    pub fn close<'info>(ctx: Context<'_, '_, '_, 'info, CloseCtx<'info>>) -> Result<()> {
        nft_proxy::close::handler(ctx)
    }

    pub fn transfer<'info>(ctx: Context<'_, '_, '_, 'info, TransferCtx<'info>>) -> Result<()> {
        nft_proxy::transfer::handler(ctx)
    }

    pub fn lock<'info>(ctx: Context<'_, '_, '_, 'info, LockCtx<'info>>) -> Result<()> {
        nft_proxy::lock::handler(ctx)
    }

    pub fn unlock<'info>(ctx: Context<'_, '_, '_, 'info, UnlockCtx<'info>>) -> Result<()> {
        nft_proxy::unlock::handler(ctx)
    }

    pub fn mint_to<'info>(ctx: Context<'_, '_, '_, 'info, MintToCtx<'info>>) -> Result<()> {
        nft_proxy::mint_to::handler(ctx)
    }

    pub fn migrate_to_mpl<'info>(ctx: Context<'_, '_, '_, 'info, MigrateToMplCtx<'info>>) -> Result<()> {
        nft_proxy::migrate_to_mpl::handler(ctx)
    }
}
