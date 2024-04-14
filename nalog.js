const NalogAPI = require('moy-nalog')

//const nalogAPI = new moyNalog({ username:'531004875086', password: 'VolgaSiber2010&' })

const nalog = new NalogAPI({autologin:false})

nalog.auth('531004875086','VolgaSiber2010&')

console.log('123')

nalog.call('incomes?from=2024-03-01T00:00:00.690%2B03:00&to=2024-04-14T23:59:59.690%2B03:00').then(response => {
  console.log(response)
 return 
}).catch(console.error)

  //const response = await nalog.call('incomes', {
   // from: new Date('2024-01-01 00:00'),
 //   to: new Date('2024-03-01 00:00')
 // }).catch(console.error)

  //console.log(response)

//nalog.addIncome({ name:'Предоставление информационных услуг', amount: 99.99 }).then( receipt => {
  //console.log(receipt.id, receipt.data)

  // ссылка на картинку с чеком
  //return receipt.printUrl
//}).catch(console.error)
