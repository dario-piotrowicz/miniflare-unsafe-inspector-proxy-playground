import { Miniflare } from "miniflare";

const mf = new Miniflare({
    inspectorPort: 9229,
    unsafeInspectorProxy: true,
    workers: [
        {
            scriptPath: './worker.js',
            modules: true,
            compatibilityDate: "2025-01-21",
            unsafeInspectorProxy: true,
        },
    ],
});

for (let i = 0; i < 50; i++) {
    console.log(`\x1b[34m ${i}... \x1b[0m`)

    await new Promise((r) => setTimeout(r, 500));

    const resp = await mf.dispatchFetch("http://localhost");
    
    const text = await resp.text();
    
    console.log(`response from worker: ${text}`);
    
    console.log('');
}


await mf.dispose();