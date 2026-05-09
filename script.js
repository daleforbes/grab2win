const videos = [
  {
    title: "Riptide 2023: Grab2Win vs. Peanutphobia",
    event: "Riptide 2023",
    note: "Public VOD listed on Liquipedia. Add the YouTube ID when confirmed.",
    youtubeId: "",
    link: "https://liquipedia.net/smash/Riptide/2023/Melee"
  },
  {
    title: "Riptide 2023: Grab2Win vs. Flash",
    event: "Riptide 2023",
    note: "Winner-side set from the public VOD list.",
    youtubeId: "",
    link: "https://liquipedia.net/smash/Riptide/2023/Melee"
  },
  {
    title: "Riptide 2023: n0ne vs. Grab2Win",
    event: "Riptide 2023",
    note: "Losers-side set from the public VOD list.",
    youtubeId: "",
    link: "https://liquipedia.net/smash/Riptide/2023/Melee"
  }
];

function renderVideos() {
  const grid = document.querySelector("[data-video-grid]");
  if (!grid) return;

  grid.innerHTML = videos
    .map((video) => {
      const media = video.youtubeId
        ? `<iframe
            src="https://www.youtube-nocookie.com/embed/${video.youtubeId}"
            title="${video.title}"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>`
        : `<a class="video-placeholder" href="${video.link}" target="_blank" rel="noreferrer">
            Add verified YouTube link
          </a>`;

      return `
        <article class="video-card">
          <div class="video-frame">${media}</div>
          <div>
            <h3>${video.title}</h3>
            <p>${video.note}</p>
          </div>
          <div class="video-meta">
            <span class="pill">${video.event}</span>
            <span class="pill">Ice Climbers</span>
          </div>
        </article>
      `;
    })
    .join("");
}

renderVideos();
