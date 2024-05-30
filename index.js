const ethers = require("ethers");
const config = require("./config");
const extractValuation = require("./helpers/extractValuation");

const myString = "Some text Valuation: 123.456 some more text";
const result = extractValuation(myString);
console.log(`Extracted valuation: ${result}`); // Output: Extracted valuation: 123.456

async function main() {
  const provider = new ethers.JsonRpcProvider(config.rpcUrl);
  const contract = new ethers.Contract(
    config.contractAddress,
    config.abi,
    provider
  );

  contract.on(config.eventName, (...args) => {
    const event = args[args.length - 1];
    console.log(`Event received: ${JSON.stringify(event)}`);
    console.log(args);
    // Extract the valuation from the event data
    // If data has zero value, reject
    // If data has a value, continue
    // Extract the recipient address from the event data
    // Store on filecoin
  });

  console.log(`Listening for ${config.eventName} events...`);
}

main().catch((error) => {
  console.error("Error in main:", error);
});
