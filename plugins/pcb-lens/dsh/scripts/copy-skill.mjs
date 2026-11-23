// npm prepack step: copy the repository's single generated skill into this
// package, so the dsh package ships the same SKILL.md as the other agents'
// plugins instead of keeping a second copy in git.
import { copyFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const src = join(here, '..', '..', 'skills', 'pcb-lens', 'SKILL.md')
const dest = join(here, '..', 'skills', 'pcb-lens', 'SKILL.md')

await mkdir(dirname(dest), { recursive: true })
await copyFile(src, dest)
console.log(`[dsh] skill -> ${dest}`)
