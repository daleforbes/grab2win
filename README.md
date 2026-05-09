# Grab2Win

Static fan site for `grab2win.com`.

## Local preview

Open `index.html` directly in a browser, or run a static server:

```powershell
npx serve . -l 4173
```

## Add match videos

The match-film section is driven by `script.js`. Replace each empty `youtubeId` with the verified YouTube video ID:

```js
youtubeId: "VIDEO_ID_HERE"
```

The current cards point to the public Liquipedia Riptide 2023 VOD list until exact YouTube URLs are confirmed.

## Suggested GitHub and Netlify setup

1. Create a GitHub repo under `daleforbes`, for example `daleforbes/grab2win`.
2. Push these files to the repo's default branch.
3. In Netlify, choose **Add new site** then **Import an existing project**.
4. Pick the GitHub repo.
5. Use these Netlify settings:
   - Build command: leave blank
   - Publish directory: `.`
6. In Netlify, open **Domain management** and add `grab2win.com`.
7. At the domain registrar, point DNS to Netlify using the exact records Netlify gives you.

## Claims to verify

Public sources found during setup currently support:

- Grab2Win is a Melee Ice Climbers main from Kenosha, Wisconsin.
- Public records list Wisconsin Power Ranking appearances.
- SmashWiki currently lists a best documented Wisconsin Power Ranking of 2nd and a most recent ranking of 3rd.
- Riptide 2023 lists a 25th / 477 result.

If you have a source for a Wisconsin #1 ranking season, update the copy in `index.html` and add the source link in the results section.
