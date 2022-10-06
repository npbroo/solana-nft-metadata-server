import { Connection, PublicKey } from "@solana/web3.js";
import { Metadata } from "@metaplex-foundation/mpl-token-metadata";

// This page allows you to find the metadata of a solana token

// NFT is a mint. just like SRM, USDC ..., the only different is that NFT's supply is 1
//
// if we want to get NFT's metadata, first we need to know what is the mint address.
// here I take a random DAPE as an example
// https://explorer.solana.com/address/9MwGzSyuQRqmBHqmYwE6wbP3vzRBj4WWiYxWns3rkR7A
//
// tokenmeta is a PDA a which derived by mint address
// the formula is ['metadata', metadata_program_id, mint_id]
// is it totally fine to forget it because sdk already wrapped it for us


export default function GetMetadata() {
    const connection = new Connection("https://api.mainnet-beta.solana.com");

    async function print_metadata() {
        var mint_account = document.getElementById('mint-account').value
        console.log(mint_account)
        if (mint_account!='') {
            let mintPubkey = new PublicKey(mint_account);
            let tokenmetaPubkey = await Metadata.getPDA(mintPubkey);
            const tokenmeta = await Metadata.load(connection, tokenmetaPubkey);
            console.log(tokenmeta);
        }
    }

    return (
        <div>
            <input placeholder={'mint account'} className='mr-5 p-2 bg-gray-200 rounded-lg' type='string' id='mint-account' />
            <button onClick={()=>print_metadata()}>Get Metadata</button>
        </div>
    )
}