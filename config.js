module.exports = {
  rpcUrl: "https://devnet.galadriel.com",
  contractAddress: "0x815482f3CdD716F6dBefa7FF7E5050a79e841dE9", //Galadriel vision contract
  eventName: "ResponseReceived",
  abi: [
    {
      type: "constructor",
      inputs: [
        {
          name: "initialOracleAddress",
          type: "address",
          internalType: "address",
        },
        { name: "manager", type: "address", internalType: "address" },
      ],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "addMessage",
      inputs: [
        { name: "chatOwner", type: "address", internalType: "address" },
        { name: "message", type: "string", internalType: "string" },
        { name: "runId", type: "uint256", internalType: "uint256" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "chatRuns",
      inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      outputs: [
        { name: "owner", type: "address", internalType: "address" },
        { name: "messagesCount", type: "uint256", internalType: "uint256" },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "getMessageHistory",
      inputs: [{ name: "chatId", type: "uint256", internalType: "uint256" }],
      outputs: [
        {
          name: "",
          type: "tuple[]",
          internalType: "struct IOracle.Message[]",
          components: [
            { name: "role", type: "string", internalType: "string" },
            {
              name: "content",
              type: "tuple[]",
              internalType: "struct IOracle.Content[]",
              components: [
                { name: "contentType", type: "string", internalType: "string" },
                { name: "value", type: "string", internalType: "string" },
              ],
            },
          ],
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "onOracleOpenAiLlmResponse",
      inputs: [
        { name: "runId", type: "uint256", internalType: "uint256" },
        {
          name: "response",
          type: "tuple",
          internalType: "struct IOracle.OpenAiResponse",
          components: [
            { name: "id", type: "string", internalType: "string" },
            { name: "content", type: "string", internalType: "string" },
            { name: "functionName", type: "string", internalType: "string" },
            {
              name: "functionArguments",
              type: "string",
              internalType: "string",
            },
            { name: "created", type: "uint64", internalType: "uint64" },
            { name: "model", type: "string", internalType: "string" },
            {
              name: "systemFingerprint",
              type: "string",
              internalType: "string",
            },
            { name: "object", type: "string", internalType: "string" },
            {
              name: "completionTokens",
              type: "uint32",
              internalType: "uint32",
            },
            { name: "promptTokens", type: "uint32", internalType: "uint32" },
            { name: "totalTokens", type: "uint32", internalType: "uint32" },
          ],
        },
        { name: "errorMessage", type: "string", internalType: "string" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "oracleAddress",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "oracleManager",
      inputs: [],
      outputs: [{ name: "", type: "address", internalType: "address" }],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "responses",
      inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      outputs: [
        { name: "owner", type: "address", internalType: "address" },
        { name: "success", type: "bool", internalType: "bool" },
        { name: "response", type: "string", internalType: "string" },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "setOracleAddress",
      inputs: [
        { name: "newOracleAddress", type: "address", internalType: "address" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "setOracleManager",
      inputs: [
        { name: "newOracleManager", type: "address", internalType: "address" },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "startChat",
      inputs: [
        { name: "chatOwner", type: "address", internalType: "address" },
        { name: "systemMessage", type: "string", internalType: "string" },
        { name: "message", type: "string", internalType: "string" },
        { name: "imageUrls", type: "string[]", internalType: "string[]" },
      ],
      outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "ChatCreated",
      inputs: [
        {
          name: "owner",
          type: "address",
          indexed: true,
          internalType: "address",
        },
        {
          name: "chatId",
          type: "uint256",
          indexed: true,
          internalType: "uint256",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "OracleAddressUpdated",
      inputs: [
        {
          name: "newOracleAddress",
          type: "address",
          indexed: true,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "OracleManagerUpdated",
      inputs: [
        {
          name: "newOracleManager",
          type: "address",
          indexed: true,
          internalType: "address",
        },
      ],
      anonymous: false,
    },
    {
      type: "event",
      name: "ResponseReceived",
      inputs: [
        {
          name: "owner",
          type: "address",
          indexed: false,
          internalType: "address",
        },
        {
          name: "chatId",
          type: "uint256",
          indexed: true,
          internalType: "uint256",
        },
        { name: "success", type: "bool", indexed: true, internalType: "bool" },
        {
          name: "response",
          type: "string",
          indexed: false,
          internalType: "string",
        },
      ],
      anonymous: false,
    },
  ],
};
