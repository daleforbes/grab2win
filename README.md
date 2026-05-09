# Grab2Win

Static fan site for `grab2win.com`.

## Local preview

Run a static server:

```powershell
npx serve . -l 4173
```

## Second-pass changes

- Replaced the original SVG hero with a generated, original icy esports hero image at `assets/hero-ice-duo.png`.
- Added the Melee Magazine Wisconsin Edition 2025 No. 1 debut recognition.
- Added public research from SmashWiki, Liquipedia, EventHubs, Melee Stats, and start.gg-indexed bracket pages.
- Embedded verified Cream City Convergence 2025 and Riptide 2023 YouTube VODs from Liquipedia metadata.

## Add or update match videos

The match-film section is driven by `script.js`. For each video, set:

```js
youtubeId: "VIDEO_ID_HERE"
```

Current embedded VODs include Grab2Win vs. dz, Lord English vs. Grab2Win, and Grab2Win vs. Peanutphobia.

## Suggested Netlify setup

This repo is ready for Netlify as a static site. The deployment details are in
[`docs/netlify-setup.md`](docs/netlify-setup.md).

Use these Netlify settings:

- Build command: leave blank
- Publish directory: `.`
- Base directory: leave blank

Use the Google login for `dale@cgcowboy.com`, connect the GitHub repo, then add
`grab2win.com` and `www.grab2win.com` under Netlify domain management. If DNS
stays at GoDaddy, point `@` to Netlify and point `www` to the assigned
`*.netlify.app` site name.

## Source notes

Public sources used:

- SmashWiki Grab2Win profile.
- Liquipedia Cream City Convergence 2024 results.
- Liquipedia Cream City Convergence 2025 bracket.
- Liquipedia Riptide 2023 overview and VOD list.
- Melee Stats Nouns Bowl 2025 entrant listing.
- EventHubs Cream City Convergence 2024 results.

Private source:

- Melee Magazine Wisconsin Edition 2025 cover showing "Grab2Win's No. 1 Debut."
