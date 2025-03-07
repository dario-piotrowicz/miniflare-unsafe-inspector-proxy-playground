# Miniflare unsafe inspector proxy playground

To use the apps in this playground repo

install the various dependencies:
```
$ pnpm i
```

> [!NOTE]
> The miniflare prerelease comes from https://github.com/cloudflare/workers-sdk/pull/8357

Open vscode into one of the apps (e.g. `code apps/multi-worker`)

> [!NOTE]
> You need to open a new vscode instance in each app's directory so that vscode can pick up the app's `.vscode/launch.json` file

open a new terminal and run
```
$ pnpm start
```

See the debugger options that vscode offers and try them

Also visit `chrome://inspect` to check that workflow
