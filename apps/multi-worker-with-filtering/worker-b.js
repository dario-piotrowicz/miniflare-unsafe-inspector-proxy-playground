export default {
    async fetch(req, env) {

        debugger;

        const workerCResp = await env['WORKER_C'].fetch(req);
        const workerCText = await workerCResp.text();

        console.log('- worker-b fetched from worker-c: ' + workerCText);

        debugger;

        return new Response(`worker-b says: ${workerCText}`);
    }
}