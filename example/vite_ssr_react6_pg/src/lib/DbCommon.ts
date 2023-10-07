
import { Client } from "pg";
import Config from '../../config';
//import Common from './Common';
//
const DbCommon = {
    /**
     *
     * @param
     *
     * @return
     */   
    getClient: async function (): Promise<any>
    {
        try{
            const client = new Client({
                user: Config.DB_USERNAME,
                password: Config.DB_PASSWORD,
                host: Config.DB_HOST,
                port: Config.DB_PORT,
                database: Config.DB_NAME
            })
            await client.connect();            
            return client;
        } catch (e) {
            console.error(e);
            throw new Error('Error , getClient');
        }    
    },
   
}
export default DbCommon;
