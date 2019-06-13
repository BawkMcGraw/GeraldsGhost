const http = require('http');
const director = require('director');
const Bot = require('./bot');

class Server {
    constructor(router, port) {
        this.server = http.createServer(function(req, res) {
            req.chunks = [];
            req.on('data', function(chunk) {
                req.chunks.push(chunk.toString());
            });

            router.dispatch(req, res, function(err) {
                res.writeHead(err.status, { "Content-Type": 'text/plain' });
                res.end(err.message);
            });
        });

        this.port = Number(process.env.PORT || 3000);
    };

    serve() {
        this.server.listen(this.port);
        console.log('Running on port: ' + this.port);
    };

    static getResponse() {
        this.res.end('');
    };

    static postResponse() {
        const reqMessage = JSON.parse(this.req.chunks[0]);

        this.res.writeHead(200);
        this.res.end();
        Bot.Functions.load(reqMessage.group_id);
        function send() {
            console.log('g at send '+g);
            console.log("starting send");
            const resMessage = Bot.Bot.checkMessage(reqMessage);
            if (resMessage) {
                console.log('g at send '+g);
                Bot.Bot.sendMessage(resMessage);
            }
        }
        console.log('reached timeout');
        setTimeout(send, 200);
    };
};

const router = new director.http.Router({
    '/': {
        post: Server.postResponse,
        get: Server.getResponse
    }
});

const server = new Server(router);
server.serve();