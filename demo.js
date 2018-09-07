const Git = require('nodegit')

const bitBucketUrl = 'https://bitbucket.org/Freewind/java-hello-world-demo.git'
const localPath = './local-repo/java-hello-world-demo'

console.log('-------- args ---------')
console.log(process.argv)

const username = process.argv[2]
const password = process.argv[3]

console.log('Using username: ' + username + ', password: ' + password)

const cloneOptions = {
    fetchOpts: {
        callbacks: {
            credentials: function (url, userName) {
                console.log('---------- credentials -------------')
                return Git.Cred.userpassPlaintextNew(username, password)
            }
        }
    }
}

Git.Clone(bitBucketUrl, localPath, cloneOptions)
    .then(function (repo) {
        console.log('clone to local-repo')
    })
    .catch(function (error) {
        console.error(error)
    })