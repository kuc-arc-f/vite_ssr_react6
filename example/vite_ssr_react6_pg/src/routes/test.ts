import Config from '../../config';
//
const router = {
    /**
     *
     * @param
     *
     * @return
     */     
    test2: async function(): Promise<any>
    {
        try {
            return ({ret: "test2", data:[3,4,5,6]});
        } catch (error) {
            throw new Error("error, test2");
        }
    },
    /**
     *
     * @param
     *
     * @return
     */     
    test3: async function(): Promise<any>
    {
        try {
            return ({ret: "test3", data:[3,4,5,6]});
        } catch (error) {
            throw new Error("error, test3");
        }
    },
    /**
     *
     * @param
     *
     * @return
     */
    de_test: async function(client: any, req: any, res: any): Promise<any>
    {
        let item = {};
        let result: any = {}; 
        const retObj = {ret: "NG", data: [], message: ''};
        try {
            if (req) {
                const text = `
                SELECT * FROM public."Task" ORDER BY id DESC LIMIT 100
                `;
                result = await client.query(text);            
                //console.log(resulte);
                if(result.rows.length< 1) {
                    console.error("Error, results.length < 1");
                    throw new Error('Error , get');
                }              
            } 
            client.end();
            return ({ret: Config.OK_CODE, data: result.rows});
        } catch (error) {
            throw new Error("error, de_test");
        }
    },
}

export default router;
