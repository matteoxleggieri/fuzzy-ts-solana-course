import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

try {

    const suppliedPublicKey = process.argv[2];
    if (!suppliedPublicKey) {
        throw new Error("Provide a public key to check the balance of!");
    }

    const publicKey = new PublicKey("8ZkVzEePMVKnLYnsdqB4Xma8GRxeDszb8S54cBUXD89q");
    const connection = new Connection("https://api.mainnet.solana.com", "confirmed");

    const balanceInLamports = await connection.getBalance(publicKey);

    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

    console.log(
        `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
    );
} catch (error) {
    console.log(error)
}




