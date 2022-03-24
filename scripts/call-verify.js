const { executeTransaction } = require('@algo-builder/algob');
const { types } = require('@algo-builder/web');
// const { mkParam } = require('./transfer/common');

async function run (runtimeEnv, deployer) {

  const master = deployer.accountsByName.get('master');
  console.log(master.addr)

  const fee = 1000;

  const txParams = {
    type: types.TransactionType.CallApp,
    sign: types.SignType.SecretKey,
    fromAccount: master,
    // fromAccountAddr: master.addr,
    appID: 32,
    payFlags: { totalFee: fee },
    appArgs: ['str:verify', 
    // new Uint8Array(Buffer.from('29536a49ce78f60237850de716a56f7b93b669f629771a7d1f374fa192f1917f150f2ea07470bfe694b1c1bb65bf4fd88c3f4b026b17c87677999748c8e664c216e9bf0d75150d58e2b3d02b5df1dd3c63dc14528a2f4b8e5c1a41d3ecab01df0b66c674784048dd73c7c307ad224e778d13a7bc11591e8418e63c58881f5542', 'hex')),
    // new Uint8Array(Buffer.from('29536a49ce78f60237850de716a56f7b93b669f629771a7d1f374fa192f1917f150f2ea07470bfe694b1c1bb65bf4fd88c3f4b026b17c87677999748c8e664c216e9bf0d75150d58e2b3d02b5df1dd3c63dc14528a2f4b8e5c1a41d3ecab01df0b66c674784048dd73c7c307ad224e778d13a7bc11591e8418e63c58881f5542', 'hex')),
    // new Uint8Array(Buffer.from('29536a49ce78f60237850de716a56f7b93b669f629771a7d1f374fa192f1917f150f2ea07470bfe694b1c1bb65bf4fd88c3f4b026b17c87677999748c8e664c216e9bf0d75150d58e2b3d02b5df1dd3c63dc14528a2f4b8e5c1a41d3ecab01df0b66c674784048dd73c7c307ad224e778d13a7bc11591e8418e63c58881f5542', 'hex')),
    // new Uint8Array(Buffer.from('29536a49ce78f60237850de716a56f7b93b669f629771a7d1f374fa192f1917f150f2ea07470bfe694b1c1bb65bf4fd88c3f4b026b17c87677999748c8e664c216e9bf0d75150d58e2b3d02b5df1dd3c63dc14528a2f4b8e5c1a41d3ecab01df0b66c674784048dd73c7c307ad224e778d13a7bc11591e8418e63c58881f5542', 'hex')),

              new Uint8Array(Buffer.from('00000001cdbb6b0c2e65cf2a4d4f2f0873f006232325e680a91af29cb1a45ba025a82b55', 'hex')),
              new Uint8Array(Buffer.from('0d285e8d61dc26f734faeebf58d61cfd1257e8ec3bab354b7c92c2172c5a6ccc0d36e2d99645bc02ad8524f9f5c830e9f3440729026756214a868dd49b4e5146', 'hex')),
              new Uint8Array(Buffer.from('29536a49ce78f60237850de716a56f7b93b669f629771a7d1f374fa192f1917f150f2ea07470bfe694b1c1bb65bf4fd88c3f4b026b17c87677999748c8e664c216e9bf0d75150d58e2b3d02b5df1dd3c63dc14528a2f4b8e5c1a41d3ecab01df0b66c674784048dd73c7c307ad224e778d13a7bc11591e8418e63c58881f5542', 'hex')),
              new Uint8Array(Buffer.from('01f5ae49470f2339ba2e73d7e7888fa1b1608ea811b9f31123158167f9137d5710e0a8d01c768868b2175903fe36449ace8d36b5e3fff682cdaa0a6c6aab4a83', 'hex'))]
  };

  const txEmpty = {
    type: types.TransactionType.CallApp,
    sign: types.SignType.SecretKey,
    fromAccount: master,
    // fromAccountAddr: master.addr,
    appID: 9,
    payFlags: { totalFee: fee },
    appArgs: [],
  }

  function groupTx(txParams) {
    txEmpty.appID = txParams.appID
    let ret = [txParams]
    for (i = 0; i < 15; i++) {
      ret.push(txEmpty)
    }
    return ret
  }

  let res = await executeTransaction(deployer, txParams);
  console.log(res)
}


module.exports = { default: run };