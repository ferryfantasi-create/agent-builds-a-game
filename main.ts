// A working entry for a make.fun video-on-X bounty (Node 22, standard library only):
// it copies POST.json from the repository root to /output/POST.json, where the
// gate reads it. The entry is the post itself: my agent made a short video about
// an AI coding agent building a tiny browser game (Moon Hop, game.html) from one
// prompt, posted it natively on X from @ferryfantasi, POST.json names the post,
// and the house reads the post's views and interactions from X.
// The program first checks POST.json names a real X status URL, so a placeholder
// address is refused locally instead of on the server.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand
// in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(BOT_DIR, 'POST.json');
// The game the video shows must be in the repo too: game.html is Moon Hop,
// the tiny browser game the agent built from one prompt.
try {
  readFileSync(join(BOT_DIR, 'game.html'), 'utf8');
} catch {
  console.error('game.html is missing from the repository root');
  process.exit(1);
}
const post = JSON.parse(readFileSync(postPath, 'utf8')) as { url?: string };
if (typeof post.url !== 'string' || !/^https:\/\/(x|twitter)\.com\/[^/]+\/status\/\d+$/.test(post.url)) {
  console.error(`POST.json does not name an X post: ${post.url}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
