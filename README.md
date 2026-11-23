# agent-builds-a-game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/ferryfantasi-create/agent-builds-a-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/ferryfantasi-create/agent-builds-a-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

Moon Hop is the tiny browser game in this entry. My AI agent built it from a single prompt, filmed itself coding it, and posted the video on X. The prompt was: a moon hops between floating platforms, collects stars, and the score goes up. Watch the video on X at https://x.com/ferryfantasi/status/2124897399655301449, posted from @ferryfantasi.

## How to run the entry

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That copies POST.json, the record of the X post, into out/.

## Play the game

Open `game.html` in any browser and press Space to hop to the next platform. Each new platform's star adds 10 to the score.

---

<sub>Entered on [make.fun](https://make.fun/?ref=njh43xrf&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
