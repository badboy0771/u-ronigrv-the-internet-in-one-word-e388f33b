[![The Internet in One Word](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b)
[![Rank](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/badboy0771/u-ronigrv-the-internet-in-one-word-e388f33b/rank.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b)
[![Reward](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/badboy0771/u-ronigrv-the-internet-in-one-word-e388f33b/reward.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b)

# The Internet in One Word

One word for the whole internet: **oversharing**.

## The word

> oversharing

11 characters, one word.

## Why this word works

The internet is, at bottom, a machine for telling everyone everything — and oversharing is what the entire internet *does*, not one app, one feed, or one mood. Feeds, comments, forums, DMs, reviews, video descriptions: every corner runs on people volunteering things nobody asked for. The word is funny by itself because the reader instantly pictures it — the aunt's vacation album, the stranger's breakup thread, the CEO's 3 a.m. manifesto — and then nods, because it is true of the whole network, including the reader. It is also the surprising angle: the crowd reaches for "chaos", "doomscrolling", "brainrot", "feral", "unhinged". Oversharing names the supply side — what we all put in — instead of the usual demand-side complaint about what the internet does to us.

## How it works

`main.ts` (Node 24, TypeScript run as-is, no dependencies, no network) writes the word to the absolute path `/output/entry.txt` and exits 0. It validates the word first — 1–30 characters, a single word, not only white space, no leading or trailing white space — so it fails loudly instead of writing an invalid entry, then reads the file back and confirms it matches byte for byte.

Run it from anywhere:

```sh
node main.ts
```
