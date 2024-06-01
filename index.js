const ethers = require("ethers");
const config = require("./config");
const extractValuation = require("./helpers/extractValuation");
const getS3Urls = require("./helpers/getS3Urls");

async function main() {
  const provider = new ethers.JsonRpcProvider(config.rpcUrl);
  const contract = new ethers.Contract(
    config.contractAddress,
    config.abi,
    provider
  );

  console.log(`Connected to contract at address: ${config.contractAddress}`);
  console.log(`Listening for events with name: ${config.eventName}`);
  console.log(`Using RPC URL: ${config.rpcUrl}`);

  // `contract.on` is called once for each existing event, then again for each new event
  // `contract.once` is called for each new event
  contract.on(config.eventName, (...args) => {
    console.log("args received: ", args);
    const recipientAddress = args[0];
    console.log(`recipientAddress received: ${recipientAddress}`);
    const chatId = args[1];
    console.log(`chatId received: ${chatId}`);
    const success = args[2];
    console.log(`success received: ${success}`);
    const response = args[3];
    console.log(`response received: ${response}`);
    const imageUrls = args[4];
    console.log(`imageUrls received: ${imageUrls}`);

    const valuation = extractValuation(response);
    console.log(`Valuation extracted: ${valuation}`);
    if (valuation === 0) {
      console.log("Valuation is zero, rejecting...");
      // Need to respond to the lambda with a rejection
      return;
    }
    console.log("non-zero valuation, continuing...");

    // Store on filecoin
    // - image urls
    // - valuation
    // - recipientAddress
    // - taskId

    // Send recipientAddress and valuation to lambda
  });

  console.log(`Listening for ${config.eventName} events...`);
}

main().catch((error) => {
  console.error("Error in main:", error);
});
