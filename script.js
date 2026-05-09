const videos = [
  {
    title: "Grab2Win vs. dz",
    event: "Cream City Convergence 2025",
    note: "A 3-1 Ice Climbers win built on control, patience, and clean confirms.",
    youtubeId: "2hISXKQmFIw",
    link: "https://liquipedia.net/smash/Cream_City_Convergence/2025/Melee/Singles_Bracket"
  },
  {
    title: "Lord English vs. Grab2Win",
    event: "Cream City Convergence 2025",
    note: "A tough Milwaukee set that shows the pressure and volatility around the Grab2Win game plan.",
    youtubeId: "uYqgdVlCO-c",
    link: "https://liquipedia.net/smash/Cream_City_Convergence/2025/Melee/Singles_Bracket"
  },
  {
    title: "Grab2Win vs. Peanutphobia",
    event: "Riptide 2023",
    note: "A national-major set against Peanutphobia from the Riptide 2023 run.",
    youtubeId: "R8T7dxavAaw",
    link: "https://liquipedia.net/smash/Peanutphobia/VODs"
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
            Confirm Riptide VOD
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

function activateHeader() {
  const header = document.querySelector("[data-header]");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

renderVideos();
activateHeader();
