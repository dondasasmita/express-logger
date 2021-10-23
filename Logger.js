class Logger {

    run(req, res) {
        console.log(`**** Logger Start ${Date()} *****\n`);
        const queryParams = req.query;
        for (const variable in queryParams) {
            console.log(`${variable} : ${queryParams[variable]}`);
        }
        console.log('\n**** Logger End ****\n');
        res.sendStatus(200);
    }

}

module.exports = Logger;