import testRouter from './routes/test';
import Config from '../config';
import DbCommon from './lib/DbCommon';

//
const router = {
    route: async function(url, req, res) {
        let data = null; 
        try {
//console.log(req);
            const client = await DbCommon.getClient();
            if(url === "/api/test2") {
              data = await testRouter.test2();
//console.log(data);
              return (data);
            }
            if(url === "/api/test3") {
              data = await testRouter.test3();
//console.log(data);
              return (data);
            }
            if(url === "/api/de_test") {
              data = await testRouter.de_test(client, req, res);
console.log("DB_NAME=", Config.DB_NAME);
              return (data);
            }
            client.end()
            return ({ret: "route", message:"error, no routes" });
        } catch (error) {
          console.error(error)
            throw new Error("error, router.route()");
        }
    },
}

export default router;
