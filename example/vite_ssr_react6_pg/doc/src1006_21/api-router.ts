import testRouter from './routes/test';

//
const router = {
    route: async function(vite, url, req, res) {
        let data = null; 
        try {
//console.log(req);
            if(url === "/api/test2") {
//              const apis = import.meta.glob('./router/test.ts', { eager: true });
//              const apis = import.meta.glob('./router/test.ts', { eager: true });
//console.log(apis);
              data = await testRouter.test2();
//              router = (await vite.ssrLoadModule('/src/router/test.ts')).default;
              //@ts-ignore
//              const d = await router.test2();
console.log(data);
              return (data);
            }
            return ({ret: "route", path: url});
        } catch (error) {
          console.error(error)
            throw new Error("error, router.route()");
        }
    },
}

export default router;
