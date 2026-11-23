# pcb-lens for DeepSeek Harness

Connects the `pcb-lens` MCP server in a DeepSeek Harness profile, so its tools
reach the model as `mcp__pcb-lens__*`, and mounts the package's skill beside
them. This is the DeepSeek Harness manifest of the plugin, next to the Claude,
Codex and Cursor ones in this directory.

Like the other manifests here, it connects the **installed binary**: install
`pcb-lens` first (see the repository README), the plugin finds it on `PATH`.

## Install

```sh
dsh plugin --profile web add dsh-pcb-lens
```

Restart the profile if your host does not reload bundles in place. Then ask for
anything about a layout, or call the tools directly:

```
mcp__pcb-lens__get_pcb_metadata   file=/path/to/board.brd
mcp__pcb-lens__get_pcb_net        file=/path/to/board.brd name=DDR_D0
mcp__pcb-lens__get_pcb_drc        file=/path/to/board.brd
mcp__pcb-lens__get_constraints    file=/path/to/board.brd
```

## Requirements

- DeepSeek Harness `0.2.1` or newer (declared in `engines.dsh`)
- Node.js 22.15 or newer
- `pcb-lens` on `PATH`

> The upstream package declares Node.js 24 in its `engines`, but the server runs
> on Node 22 (tested on 22.22.2). The host requirement above is what this plugin
> needs.

## Configuration

Both inserted rows are editable under **Plugins** in the DSH Web UI, or in the
profile's `cordis.patch.yml`:

| Field | Default | Meaning |
|---|---|---|
| `serverName` | `pcb-lens` | Namespace of the tool names: `mcp__<serverName>__<tool>` |
| `toolCallTimeoutMs` | `120000` | Per-call timeout |
| `failOnStartupError` | `false` | Leave unset so a missing binary never blocks DSH startup |

## Remove

```sh
dsh plugin --profile web remove dsh-pcb-lens
```

## License

Apache-2.0, same as the rest of this repository.
