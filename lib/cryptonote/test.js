// establish a connection with neroWallet
var cryptonoteWallet = require('./wallet');
var Wallet = new cryptonoteWallet();
// checkers for timing 
// integer checkers
var checkBalance = 0;
// boolean checkers 
var serveAddress = false;
var serveBalance = false;
// default balance, address 
var balance = 0;
var address = '';
// examples
// 
function serveAddressFunction(){
Wallet.address().then((result) => {
    if(result){
      serveAddress = true
      address =  result.address;
      addressText = "Electronero Address: " + address + '\n';
      if(serveAddress == true){
          // do something !  
      console.log(address);
      console.log("Address Trigger: "+serveAddress);
      console.log(addressText);
      };
    };
});
};

function serveBalanceFunction(){
Wallet.balance().then((result) => {
    if(result){
      // checker should equal 3
      checkBalance++
      balance =  result.balance;
      balanceText = "Electronero Balance: " + balance +" ETNX" + '\n';
      if(checkBalance == 3){
        // trigger balance actions at this stage
        serveBalance = true;
        console.log("Balance Counter: "+checkBalance);
        console.log(balanceText);
      };
      if(serveBalance = true){
        // log balance, or serve it, store it, move it, great..
        console.log("Balance Trigger: " +serveBalance);
        console.log("Electronero Balance: "+balance);
        // do something else !  
        serveAddressFunction();
      };
    };
});
};

function storeBalanceFunction(){
Wallet.store().then((result) => {
    if(result){
      // checker should equal 2
      checkBalance++
      if(checkBalance == 2){        
        console.log("Balance Counter: "+checkBalance);
        // blockchain was scanned, then balance was stored, let's serve it
        // since we scanned and stored, lets run the serve balance function above
        serveBalanceFunction();
      };
    };
});
};

function balanceFunction(){
Wallet.rescan().then((result) => {
    if(result){
      // checker should equal 1
      checkBalance++
      if(checkBalance == 1){
        console.log("First to log"+"\n"+"Balance Counter: "+checkBalance);
        // I want to serve balance, so I will rescan first, then store, then serve balance
        // since we scanned, lets run the store function above
        storeBalanceFunction();
      };
    };
});
};

function openWalletFunction(){
// remember to adjust this parameter in production, this is for example purposes
// the below command would open a passwordless Electronero wallet cache string called 'nero_wallet'
Wallet.open_wallet('nero_wallet', '').then((result) => {
  if (result)
    {
      // ok we opened the wallet, so let's run the balance function and start scanning first
      balanceFunction()
      console.log(result);
    }; 
});
}

function startFunction(){
// on initial run, this will create wallet if not exists
// remember to adjust this parameter in production, this is for example purposes
// the below command would generate a passwordless Electronero wallet cache string called 'nero_wallet'
Wallet.create_wallet('nero_wallet').then(function(result){
  console.log(result);
});
// now that we created a wallet, lets open it
openWalletFunction();
}
startFunction(); 
// Test this Cryptonote-RPC NodeJS wrapper
// Must have an ACTIVE cryptonote-wallet-RPC connection 
// Deploy test with startFunction. 
// test will follow these steps 
// 1) call 'Wallet.create_wallet' and generate a passwordless 'nero_wallet' 
// (to skip step 1) comment out entire Wallet.create_wallet function, and enter a wallet name as a string in 'Wallet.open_wallet' under openWalletFunction)
// 2) call 'Wallet.open_wallet' and open a passwordless 'nero_wallet', 
// 3) call 'Wallet.rescan' to scan the blockchain for 'nero_wallet' UTXO
// 4) call 'Wallet.store' to save 'nero_wallet' state in wallet cache 
// 5) call 'Wallet.balance' to retrieve and serve balance 
// 6) call 'Wallet.address' to retrieve and serve address
// Since node is asynchronous this function will run first... 

