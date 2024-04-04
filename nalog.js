const nalog = NalogAPI({autologin:false})

nalog.auth('531004875086','VolgaSiber2010&')

console.log(authPromise)

await nalog.userInfo()

console.log(authPromise)
