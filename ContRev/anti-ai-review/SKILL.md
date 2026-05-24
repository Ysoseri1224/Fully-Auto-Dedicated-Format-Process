---
name: anti-ai-review
description: Review and revise Chinese academic prose to reduce AI writing traces and keep an objective scholarly tone. Use when Codex needs to audit wording for exaggeration, empty evaluative phrases, AI-flavored sentence templates, logic drift, terminology inconsistency, or other issues defined by the local anti-AI writing standard.
---

# Anti-AI Review

Review academic writing for tone, logic, and stylistic artifacts that read like AI-generated prose.

## Purpose

Use this file **before writing** and **after drafting**.

Before writing:

- read this file once
- avoid the banned patterns on the first pass

After writing:

- review the draft once using this file
- explicitly ask: `Review this once against anti-ai-writing-style.md`

This file is not asking for slang, jokes, or fake human messiness. The goal is simple: write normally, then remove machine-like signals.

## Core rule

AI writing is most exposed when it sounds:

- abstract instead of specific
- balanced instead of committed
- smooth instead of observed
- symmetrical instead of natural
- polished without evidence

If a sentence can be made more concrete, shorter, or less performatively clever, do that.

## High-risk words

These words are not always wrong. They become a problem when they appear often, appear in clusters, or replace actual content.

### Priority watchlist

- `key`
- `core`
- `critical`
- `crucial`
- `fundamental`
- `essential`
- `important`
- `central`
- `major`
- `significant`
- `vital`
- `primary`
- `main`
- `meaningful`
- `powerful`
- `robust`
- `effective`
- `efficient`
- `clear`
- `compelling`

### Why these are risky

They often let the writer sound analytical without proving anything.

Bad:

- `This is a key mechanism.`
- `The model reveals a core dynamic.`
- `This is a robust explanation.`

Better:

- `This mechanism links smoking rate to nicotine demand through the substitution effect.`
- `The model adds one balancing pathway through public health awareness.`
- `The explanation fits the BoT pattern in Figure 4, where the vaping stock rises first and then declines.`

### Replacement rule

If you use one of these words, test the sentence:

1. Can the word be deleted with no loss of information?
2. Can it be replaced with the actual variable, trend, mechanism, or figure?
3. Does the sentence still work if you remove the evaluation?

If yes, delete it.

## Banned words and phrases

Avoid these unless the text truly requires them and you can defend them.

### Banned buzzwords

- `delve`
- `unlock`
- `leverage`
- `harness`
- `tapestry`
- `paradigm`
- `cutting-edge`
- `seamless`
- `robust`
- `empower`
- `streamline`
- `revolutionize`
- `transformative`
- `innovative`
- `groundbreaking`
- `game-changing`
- `state-of-the-art`
- `holistic`
- `comprehensive`
- `dynamic landscape`
- `synergy`
- `multifaceted`
- `framework` when you only mean `structure` or `model`
- `journey`
- `ecosystem` when you only mean `system`
- `thoughtfully`
- `carefully curated`
- `deeply`
- `meaningfully`
- `powerful lens`
- `rich insight`
- `timely topic`
- `resonates`
- `underscores`
- `highlights the importance of`
- `serves as`
- `plays a role in`
- `helps to`
- `allows us to`
- `provides a clearer understanding of`

### Replace with

- name the variable
- name the relation
- name the result
- name the figure
- name the limitation

## Banned sentence patterns

### 1. Negation parallelism

This is the biggest AI tell.

Avoid all forms of:

- `This is not X. It is Y.`
- `Not X, but Y.`
- `Less X, more Y.`
- `It is not merely X; it is Y.`
- `This is no longer X. It is now Y.`
- `X is not the issue. Y is the issue.`
- `The point is not X, but rather Y.`
- `Not because X, but because Y.`
- `The model is not about X. It is about Y.`
- `This is not simply X. It is fundamentally Y.`
- `The system does not do X. It instead does Y.`
- `This does not mean X. It means Y.`
- `Rather than X, Y.`
- `No longer X, but Y.`
- `X is dead. Y is the future.`

### Softened versions to watch

- `While X may seem ...`
- `Sure, X works. But Y ...`
- `Although X is important, Y ...`
- `At first glance, X ... however, Y ...`

### Why this is bad

It creates a synthetic sense of contrast. Human writers use contrast, but AI overuses clean mirror structures because they sound persuasive with little effort.

### Fix

Write the actual point directly.

Bad:

- `This is not a full-system model. It is a focused dynamic core.`

Better:

- `This model covers one sub-system from the GP2 CLD: vaping accumulation, nicotine addiction, smoking substitution, and public health awareness.`

## Other common AI tells

### 2. Triadic lists

AI loves three-item lists, especially abstract ones.

Examples:

- `clarity, consistency, and coherence`
- `supply, demand, and diffusion`
- `technical, social, and policy dimensions`

This is not forbidden. It is suspicious when repeated often.

Fix:

- use two items if that is enough
- use four if the evidence really has four
- break the list into a sentence with actual content

### 3. Inflated evaluation

Avoid:

- `pivotal`
- `critically important`
- `highly significant`
- `deeply revealing`
- `especially important`
- `remarkably`
- `notably`
- `importantly`

Only keep them if the sentence becomes false without them.

### 4. Fake scope inflation

Avoid:

- `from ancient times to modern systems`
- `across contexts and disciplines`
- `from individuals to institutions`

If the draft is about one case, keep it at one case.

### 5. Elegant variation

Do not rename the same thing repeatedly just to sound polished.

Bad:

- `Claude`
- `the assistant`
- `the model`
- `the system`

Pick one term for one thing and stay with it.

### 6. Copula avoidance

AI often dodges simple verbs and writes:

- `serves as`
- `functions as`
- `acts as`
- `operates as`

Often `is` is better.

Bad:

- `Smoking substitution serves as a balancing pathway.`

Better:

- `Smoking substitution is a balancing pathway.`

### 7. Title Case overload

Do not over-capitalize headings or concepts in normal prose.

Bad:

- `The Dynamic Relationship Between Smoking Substitution And Public Health Awareness`

Better:

- `The dynamic relationship between smoking substitution and public health awareness`

### 8. Metronome rhythm

If every sentence is about the same length, the text sounds machine-made.

Fix:

- mix short and medium sentences
- use 1-2 sentence paragraphs when useful
- let a dense sentence be followed by a short one

Do not swing to the other extreme. Avoid writing everything as clipped fragments.

### 9. Dash dependence

Do not lean on em dashes as a style crutch.

Prefer:

- full stops
- commas
- short follow-up sentences

## Style rules

### Sentence rhythm

- alternate short and medium sentences
- avoid four long sentences in a row
- avoid four short sentences in a row
- one dense sentence is fine if the next one is simpler

### Paragraph rhythm

- 1-2 sentence paragraphs are allowed
- one paragraph should do one job
- if the paragraph shifts from structure to interpretation, split it

### Default wording preference

Prefer:

- `shows`
- `indicates`
- `suggests`
- `includes`
- `adds`
- `reduces`
- `increases`
- `links`
- `depends on`

Use with caution:

- `demonstrates`
- `reveals`
- `establishes`
- `confirms`

## Anti-overfitting rule

Do not try to sound human by forcing:

- sarcasm
- slang
- fragments everywhere
- fake personal voice
- random informality

Write a normal draft first. Then remove the machine smell.

## Fast self-check

Before finalizing, check the draft for:

1. Any `not X, but Y` contrast?
2. Too many `key/core/critical/important` words?
3. Too many three-item lists?
4. Too many abstract summary sentences?
5. Repeated `serves as` or `acts as`?
6. Same concept renamed multiple ways?
7. Every sentence about the same length?
8. Any sentence that sounds persuasive but names no variable, figure, or result?

If yes, revise.

## Review Priorities

1. Remove promotional or self-deprecating evaluation that does not add factual content.
2. Reduce unsupported degree words and empty emphasis.
3. Eliminate AI-heavy punctuation and stock sentence templates when they weaken the prose.
4. Check logic continuity, terminology consistency, and numerical consistency.
5. Preserve technical accuracy and an appropriate scholarly register.

## One-line prompt for self-review

Use this after drafting:

`Review this once against anti-ai-writing-style.md. Remove negation-parallel contrast, buzzwords, elegant variation, metronome rhythm, and empty evaluative words. Keep the content specific and plain.`

## Working Style

- Prefer concrete edits over vague advice.
- Keep criticism tied to wording, logic, or evidence.
- Preserve valid structured expressions used for technical explanation.

## Reference

Read [references/source.md](references/source.md) for the full review standard, banned patterns, and the post-edit checklist.
