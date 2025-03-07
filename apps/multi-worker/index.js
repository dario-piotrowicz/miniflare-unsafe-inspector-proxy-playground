import { Miniflare } from "miniflare";

const mf = new Miniflare({
    inspectorPort: 9229,
    unsafeInspectorProxy: true,
    workers: [
        {
            name: 'worker-a',
            scriptPath: './worker-a.js',
            modules: true,
            compatibilityDate: "2025-01-21",
            serviceBindings: {
                "WORKER_B": 'worker-b'
            }
        },
        {
            name: 'worker-b',
            scriptPath: './worker-b.js',
            modules: true,
            compatibilityDate: "2025-01-21",
        },
    ],
});

for (let i = 0; i < 500; i++) {
    console.log(`\x1b[34m ${i}... \x1b[0m`)

    await new Promise((r) => setTimeout(r, 500));

    const resp = await mf.dispatchFetch("http://localhost");

    const text = await resp.text();

    console.log(`\nresponse from miniflare: ${text}\n`);

}


await mf.dispose();