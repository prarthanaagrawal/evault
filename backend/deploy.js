const fs = require('fs');
const Web3 = require('web3');

// const abi = JSON.parse(fs.readFileSync("/Users/virajchandra/Developer/Projects/MediVault/backend/contracts/Cruds.abi"));
// const bytecode = fs.readFileSync("/Users/virajchandra/Developer/Projects/MediVault/backend/contracts/Cruds.bin").toString();

const abi = JSON.parse(fs.readFileSync("C:\\Users\\dell\\OneDrive\\Desktop\\MediCare\\MediVault\\backend\\contracts\\Cruds.abi"));
const bytecode = fs.readFileSync("C:\\Users\\dell\\OneDrive\\Desktop\\MediCare\\MediVault\\backend\\contracts\\Cruds.bin").toString();

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://localhost:3000"));

async function deploy() {
    // const w3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(abi);
    contract = contract.deploy({data: bytecode});

    const deployContract = await contract.send({
        from: "0xc3367aa13e2e9d17586C4FF8b7A28d8D245C66Fa",
        gas: "6721975",
    })
    console.log(deployContract.options.address);
}

deploy();
