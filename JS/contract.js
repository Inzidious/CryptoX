if (typeof web3 !== 'undefined')
{
    window.web3 = new Web3(web3.currentProvider);
    var contractAddress = "0xDBe9Ad3CD85ab7fcEA60dD88B0E12b364c680360";

    //initiate contract for an address
    var MyContract = web3.eth.contract(contractAbi);
    var myContractInstance = MyContract.at(contractAddress);

    function handle(result)
    {
        console.log('Res: ' + result);
    }
    
    function getTokens(callbackFunction)
    {
        var address = web3.eth.accounts[0];
        myContractInstance.tokensOfOwner(address,
            function(err, res)
            {
                callbackFunction(res);
            }); 
    }
    
    function createRandomToken(callbackFunction)
    {
        var address = web3.eth.accounts[0];
        myContractInstance.createRandomCat(address,
            function(err, res)
            {
                callbackFunction(res)
            });
    }

    function getTokenInfo(token, callbackFunction)
    {
        myContractInstance.getTokenX(token,
            function(err, res)
            {
                callbackFunction(res);
            }); 
    }
}