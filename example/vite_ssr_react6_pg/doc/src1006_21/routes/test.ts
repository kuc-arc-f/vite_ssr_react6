//
const router = {
    test2: async function(): Promise<any>
    {
        try {
            return ({ret: "test2", data:[2,3,4,5,6]});
        } catch (error) {
            throw new Error("error, test2");
        }
    },
}

export default router;
