export default {
    async fetch(req, env) {

        debugger;

        const workerBResp = await env['WORKER_B'].fetch(req);
        const workerBText = await workerBResp.text();

        console.log('- worker-a fetched from worker-b: ' + workerBText);

        debugger;

        return new Response(`worker-a says: ${workerBText}`);
    }
}