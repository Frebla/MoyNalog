const NalogAPI = require('moy-nalog')

//const nalogAPI = new moyNalog({ username:'531004875086', password: 'VolgaSiber2010&' })

const nalog = new NalogAPI({autologin:false})

nalog.auth('531004875086','VolgaSiber2010&')

console.log('123')

//nalogAPI.addIncome({ name:'Предоставление информационных услуг', amount: 99.99 }).then( receipt => {
//  console.log(receipt.id, receipt.data)

  // ссылка на картинку с чеком
//  return receipt.printUrl
//}).catch(console.error)
