// import the http module

const http = require("http")
const os = require("os")

// create http server

const server = http.createServer((req, res) => {
    console.log('Server has been created')
    res.appendHeader("Access-Control-Allow-Origin", "*");
    res.appendHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method == 'OPTIONS'){
        res.appendHeader('Access-Cntrol-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.statusCode = 200
    }
    const route = req.url
    if (route == '/'){
        res.setTimeout(Math.floor(Math.random() * 5001), () => res.end('Welcome to the landing page\n You may access other endpoints using:\n About (/about)\n Contact us (/contact)\n Home (/home)\n System information (/system-info)'))
    }
    else if (route == '/home'){
        res.end('Welcome to the home page! \n Other available pages include:\n About (/about)\n Contact us (/contact) \n System information (/system-info)')
    }
    else if (route == '/about'){
        res.end('Welcome to about page! \n Other available pages include:\n Home (/home)\n Contact us (/contact) \n System information (/system-info)')
    }
    else if (route == '/contact'){
        res.end('You may contact us here \n Othe available pages include:\n About (/about)\n Home (/Home) \n System information (/system-info)')
    }
    else if (route == '/system-info' && req.method == 'GET'){
    res.end(
        JSON.stringify({'CPU': os.cpus()[0], 'Operating system' : os.platform(), 'hostName': os.hostname(), 'Archi' : os.arch()}))
    }
    else{
        res.statusCode = 404
        res.statusMessage ='Page not found'
        res.end('Page not available \n\n\n\n\ You may access available endpoints using:\n About (/about)\n Contact us (/contact)\n Home (/home)\n System information (/system-info)')
    }

})

// initialize a port

const PORT = 5000

// listen to server

server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server is up and running on port ${PORT}`)
})


// const process = require('process')

// console.log(process)