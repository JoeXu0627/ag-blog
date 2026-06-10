---
title: "Livestream Recap: How AI Agents Earn a Seat at the Table"
pubDatetime: 2026-06-11T01:30:00+08:00
featured: true
description: "In late April I joined Yuki for a livestream about what an AI-rebuilt workflow actually looks like: voice-only input, no more hand-written docs, the harness engineering philosophy, organizational shifts, and where the startup opportunities are. Here's the written recap."
tags:
  - llm
  - agents
  - livestream
---

On the evening of April 24th, I joined Yuki for a ninety-minute livestream on "how ordinary people actually use AI" — a live look at what my "barely touch the keyboard" working style really looks like. This post is a recap compiled from the recording.

## Background: why my workflow got rebuilt so fast

Two forces converged.

First, **the sheer density of model progress**. Since the second half of last year, major models have been shipping at a much faster cadence, and every big release brings a step change in the coding tools built on top of them. Our team sets aside a full day after each release just to adapt our product to the new model.

Second, **my own career change**. I used to run a data team of a dozen people at Dedao, where collaboration meant PMs writing PRDs, holding reviews, and engineers re-negotiating priorities. After going founder-mode, collaboration looks nothing like that.

A real example: one of our ops colleagues — who can't code at all — handed a read replica of our production database to AI, which then designed the GTM metrics system, built the dashboard, and deployed it live. Her only job was stating requirements; the whole thing took one to two hours. When something breaks, a fix goes back live in minutes.

Which leads to the point I kept hammering during the stream: **for startups, agility beats precision**. Even if the output ships with a few mistakes, fixing them costs minutes — vastly more efficient than a traditional dev cycle. Ops can take a website from build to launch single-handedly, no CMS required; when an SEO issue shows up, they throw it at the AI and the fix is live in minutes.

## Voice-only input: 4–6x faster than typing

During the stream I demoed my voice-only workflow for delegating tasks to AI.

Large models are remarkably tolerant of voice input — accents and misread words don't matter, because context carries the meaning. By my count, dictating instructions runs 4–6x faster than typing, and it feels like at least 4x in practice. On a normal day I keep around five AI windows open, processing tasks asynchronously.

The more radical change: **since the start of this year, I no longer write documents by hand at all**. I carry a recorder, AI turns discussions into documents automatically, and those docs go straight to colleagues — or straight to an AI for execution. Our internal wiki has quietly devolved into plain cloud storage.

## The organizational shockwave

Once AI absorbs the bulk of execution work, organizations change faster than you'd expect:

- **Product managers get squeezed.** One person with AI can now cover what used to take several people, alignment meetings drop off sharply, and a dedicated PM role becomes optional.
- **Designers are transitioning.** Top designers abroad already push code straight from design to production, doing GTM-driven development — one person eating chunks of the design, product, and engineering roles. Ironically, the designer's seat is now safer than the PM's.
- **Testing is the bottleneck.** AI writes code faster than humans can test it, and the whole industry is scrambling for test automation.
- **Leaders feel the decision pressure.** Delivery cycles collapsed from days to tens of minutes, so decisions pile up at the top. No AI today will own a decision for you — the final call, and the accountability, still belong to a human.

## Harness: give AI reins, not flowcharts

A big segment of the stream was about the harness engineering philosophy.

A harness is what you put on a horse. The core idea: **fence the agent in with your domain knowledge, but don't micromanage each step** — let the AI run freely inside the constraints and squeeze the most out of the model.

The contrast with traditional agent workflows is stark: the old way chains nodes together with explicit if/else logic at every step, so intelligence only lives inside single nodes. The harness approach makes the whole pipeline intelligent — you design the guardrails, AI does the rest.

Example: to generate a video, you only constrain it like a director would — story genre, number of acts, transition rules — and leave the creativity entirely to the AI. **The fewer the constraints, the better the output.**

## Disposable code and multi-model division of labor

Image generation recently crossed the commercial-grade threshold: detail fidelity, texture, even photographically correct depth of field. Images a non-designer generates casually are now good enough for posters and hero banners.

To study prompts for the new image model, I had AI build me a local web tool for searching and filtering prompts — used it, tossed it, never maintained it. **Code is becoming a disposable, single-use asset**, and that pattern has massively sped up my research loops.

On model division of labor, my current best practice: Codex writes the code logic, Claude handles front-end design, linked together through an open-source plugin so each model plays to its strength. The bill: close to ¥3,000 a month on AI. Also, strongly consider carrying two models — on launch day, when one provider goes down, the other is your productivity insurance.

## Startup opportunities in the AI era

We also talked industry landscape:

- **The mainstream opportunity right now is the information gap.** Model capability hasn't been democratized — most practitioners simply don't know the latest techniques. That's why AI coaching and AI consulting are booming; consulting wasn't killed by AI, it's growing because of it.
- **Vertical windows.** Foundation model vendors keep swallowing vertical use cases (healthcare is already open). The short-term play for startups is information-gap products that monetize fast, then move to the next window.
- **A hedge, half-joking but sincere:** every AI founder should own some NVIDIA. If the startup works, the company is your biggest asset; if it fails, the stock run-up cushions the loss.

## Why we still hold weekly meetings

If nobody writes documents anymore, should the weekly all-hands die too? My answer: keep it — but for a different reason.

Its value is no longer syncing progress (AI syncs faster than you do). It's **the ritual that holds a team together** and keeps the survival pressure tangible. It's closer to a startup's team-building exercise — a deliberately irrational way to preserve cohesion.

## Artisanal coding, and the widening gap

Two closing takes from the stream:

One, **the future of hand-written code**. Just as photography pushed realist painters off the stage and gave rise to impressionism, only the very best engineers will retain the craft of writing code by hand. Most programming will become assembly-line throughput — and artisanal coding will turn into a heritage craft, like intangible cultural heritage.

Two, **AI makes the strong stronger**. The more capable you are, the more AI amplifies your output. The gap between people won't be flattened by AI — it will widen.

---

*Compiled by AI from the 2026-04-24 livestream recording and edited by hand. Thanks to Yuki for hosting.*
