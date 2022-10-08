class Logger {

    run(req, res) {
        console.log(`**** Logger Start ${Date()} *****\n`);
        const queryParams = req.query;
        const userAgent = req.headers['user-agent'];
        console.log(`User-Agent: ${userAgent} \n`);
        for (const variable in queryParams) {
            console.log(`${variable} : ${queryParams[variable]}`);
        }
        console.log('\n**** Logger End ****\n');
        res.sendStatus(200);
    }

}

module.exports = Logger;