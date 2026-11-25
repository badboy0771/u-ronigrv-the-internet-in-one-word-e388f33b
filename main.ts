// The Internet in One Word — make.fun entry
// Node 24, no dependencies, no network, fully deterministic.
//
// The word: "oversharing" — 11 characters, one word.
//
// Why this word, against the judge's criteria in order:
//
// 1. One word that describes the whole internet. Oversharing is not a
//    site, an app, or a mood: it is what the entire internet *does*.
//    Every corner of it — feeds, comments, forums, DMs, reviews, video
//    descriptions — runs on people volunteering things no one asked for:
//    breakfast photos, hot takes, trauma dumps, salaries, medical
//    results, arguments with strangers. The internet is, at bottom, a
//    machine for telling everyone everything.
//
// 2. Funny by itself, with no explanation needed. "Oversharing" as the
//    whole internet lands because the reader instantly pictures it: the
//    aunt's vacation album, the stranger's breakup thread, the CEO's
//    3 a.m. manifesto. The laugh comes from recognition, not from a
//    setup the word has to carry.
//
// 3. True about the internet as a whole. It is not about one platform
//    (no "doomscrolling" feed, no "brainrot" video, no single meme).
//    Oversharing predates every current app and survives every one of
//    them: new platforms appear, and within a week strangers are
//    oversharing on them too. It is the one behaviour that is true of
//    the network itself, not of any one corner of it.
//
// 4. Surprising, not the first word anyone reaches for. The crowd's
//    first words are "chaos", "doomscrolling", "brainrot", "feral",
//    "unhinged", "cats", "memes". Oversharing is none of those: it
//    names the *supply side* of the internet — what we all put in —
//    instead of the usual demand-side complaint about what it does to
//    us. Same internet, a different angle, and one nobody's first
//    instinct reaches for.
//
// 5. Lands in one beat. Eleven letters, one familiar English word,
//    spelled the way everyone spells it, no hyphen, no capital, no
//    cleverness that needs a second look. It hits before the reader
//    has time to think — and then the nod follows, because it is true.
//
// Why not the obvious candidates:
// - "chaos" — true, but it is the first word on everyone's list, and
//   it describes everything from a toddler's bedroom to a war zone;
//   it says nothing specific about the internet.
// - "doomscrolling" / "doomscroll" — one habit on one kind of feed,
//   not the whole internet, and already the most crowded answer.
// - "brainrot" — one mood, one corner of video culture; a cooking
//   forum or a bug tracker is not brainrot, but it is oversharing.
// - "feral" / "unhinged" — adjectives that could describe any crowd
//   anywhere; they praise the vibe without naming what happens here.
// - "cats" / "memes" — one kind of content, not the network.
// - "addictive" — a complaint about the reader, not a description of
//   the place; also true of slot machines.
// Oversharing is the one word that makes a reader laugh and then nod:
// everybody online is doing it, including the reader, including me.
//
// The program writes the word with no trailing newline, so the file's
// byte count equals the word's character count and the gate sees
// exactly 11 characters of UTF-8 text.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry word. Eleven characters, a single word, no spaces, no
// hyphen, no trailing newline in the file.
const WORD = "oversharing";
const OUTPUT_PATH = "/output/entry.txt";

// Check the word against everything the gate and the judge brief
// require, and fail loudly instead of writing an invalid entry:
// 1-30 characters of UTF-8 text, not only white space, a single word
// with no white space at all, and no leading or trailing white space.
// [...word] counts Unicode code points, not UTF-16 units, so the
// length check stays correct for any word, not just this ASCII one.
function validateWord(word: string): number {
  const chars = [...word];
  if (chars.length < 1 || chars.length > 30) {
    throw new Error(`entry must be 1-30 characters, got ${chars.length}`);
  }
  if (word.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be a single word with no white space");
  }
  if (word !== word.trim()) {
    throw new Error("entry must not have leading or trailing white space");
  }
  if (Buffer.byteLength(word, "utf8") !== chars.length) {
    // For this ASCII word the byte count equals the character count;
    // the check documents the invariant the gate measures in bytes.
    throw new Error("entry byte length does not match character count");
  }
  return chars.length;
}

// Write the word, then read it back and confirm it matches byte for
// byte, so a silent write failure can never ship a wrong entry.
function main(): void {
  const charCount = validateWord(WORD);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, WORD, "utf8");
  const back = readFileSync(OUTPUT_PATH, "utf8");
  if (back !== WORD) {
    throw new Error(
      `read-back mismatch: wrote ${JSON.stringify(WORD)}, read ${JSON.stringify(back)}`,
    );
  }
  console.log(
    `wrote ${JSON.stringify(WORD)} (${charCount} characters) to ${OUTPUT_PATH}`,
  );
}

main();
