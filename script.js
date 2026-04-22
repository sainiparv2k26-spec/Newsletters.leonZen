const posts = [
  {
    id: 1,
    title: "YYC Cannabis Market Perspective: Chasing THC or Chasing Quality?",
    date: "2026-04-20",
    excerpt:
      "In Calgary’s growing cannabis scene, THC percentages dominate the conversation, but true quality goes far beyond potency alone.",
    content: `In Calgary’s growing cannabis scene, a clear trend has taken over: everyone’s chasing high THC numbers. Walk into almost any dispensary, and the first question you’ll hear is, “What’s the strongest you’ve got?” But in this rush for potency, something important is being overlooked: the quality and origin of the plant itself.

THC percentage has become a marketing tool, not necessarily a measure of a better experience. A higher number on the label doesn’t guarantee richer flavor, smoother smoke, or a more balanced effect. In fact, many high THC products sacrifice terpene profiles, the compounds responsible for aroma, taste, and the nuanced effects that make each strain unique.

What Calgary consumers should be paying closer attention to is how the cannabis is grown. Sun grown cannabis, cultivated outdoors under natural light, often develops more complex terpene profiles and a fuller expression of the plant’s natural characteristics. Unlike heavily controlled indoor environments focused on maximizing THC, sun grown plants benefit from real soil, fresh air, and the natural rhythm of the seasons.

This is not just about taste. It is about experience. A well grown, terpene rich strain with moderate THC can offer a more enjoyable, balanced high than a harsh, overly potent alternative. It is similar to choosing quality coffee or wine; the story behind how it is produced matters just as much as the final number on the label.

As YYC continues to build its cannabis culture, there is an opportunity to shift the conversation. Instead of asking for the highest THC, ask about terpene profiles, growing methods, and overall quality. Support producers who prioritize craft, sustainability, and the natural integrity of the plant.

Because at the end of the day, cannabis is not just about getting higher. It is about getting better.

Leon Zen
YYC Writer`,
    image: "IMG_0079.jpeg"
  },
  {
    id: 2,
    title: "YYC Tech Perspective: Calgary’s Rise as a Data and IT Hub",
    date: "2026-04-21",
    excerpt:
      "Calgary is quietly emerging as a growing tech and data hub, offering affordability, talent, and long term potential in the digital economy.",
    content: `Something interesting is happening in Calgary right now. For years, this city has been known for oil, gas, and engineering. But quietly, another story is starting to take shape. Calgary is stepping into the world of tech, and more specifically, into the future of data.

Across North America, the demand for data is growing fast. Everything from streaming to artificial intelligence depends on massive data centres. Cities like Toronto and Vancouver have had a head start, but they are becoming expensive and crowded. That is where Calgary begins to stand out.

There are some simple reasons behind this shift. Land here is more affordable. Energy is reliable and easier to access. The climate also helps, since cooler temperatures reduce the cost of keeping data centres running. These are not flashy advantages, but they matter a lot to companies making long term investments.

At the same time, Calgary already has something valuable. A strong base of engineers and problem solvers. Many professionals from the energy sector are now moving into tech, bringing with them real world experience and technical thinking. This creates a unique kind of workforce that blends old industry knowledge with new digital skills.

It is important to be realistic though. Calgary is not the largest data centre hub in North America, and it is not trying to be overnight. What is happening is slower and more grounded. Companies are starting to look at Calgary as a place where they can build, grow, and scale without the pressure of bigger markets.

There is also a bigger conversation around sustainability. Data centres use a lot of energy, and the world is paying attention to that. Alberta is working toward cleaner energy solutions, and if Calgary can connect its tech growth with more sustainable power, it could become an attractive option for companies that care about their environmental impact.

For the city, this shift means more than just new buildings or infrastructure. It is about identity. Calgary is beginning to move from being only an energy city to becoming part of the digital economy. That transition will take time, but the foundation is already there.

In the coming years, Calgary may not try to compete directly with the biggest tech cities. Instead, it can build its own path. A place where growth is steady, costs are manageable, and opportunities are real.

Because the future of power is changing. It is no longer only about what comes from the ground. It is also about the data we create, store, and use every day.

Leon Zen
YYC Writer`,
    image: "IMG_0086.jpeg"
  },
  {
    id: 3,
    title: "YYC Street Life Perspective: Patio Season Returns and Summer Is Calling",
    date: "2026-04-22",
    excerpt:
      "As patios return to Calgary’s streets, the city begins to shift into its summer rhythm, with energy building ahead of festival season and the Stampede.",
    content: `YYC Street Life Perspective: Patio Season Returns and Summer Is Calling

April 22, 2026

There is a small change happening across Calgary that says a lot more than it seems. Cafes are setting their chairs back outside, and just like that, the city feels alive again.

After months of winter routines, people are slowing down. Sidewalks are no longer just for passing through. Coffee is being enjoyed under the sun, conversations are stretching, and there is a noticeable shift in energy. Calgary is stepping into its summer rhythm.

But this year, it feels like more than just warmer weather. It feels like the start of something bigger. As patios fill up in areas like Kensington and 17th Ave, there is a growing sense of anticipation. Summer in Calgary is never quiet, and the city is already preparing for it.

With major events like the Calgary Stampede returning in full force, along with a packed calendar of local markets, live music, and cultural festivals, the momentum is building. According to Tourism Calgary, the city sees a significant rise in visitors and local activity during the summer months, with the Stampede alone drawing over a million attendees each year. That kind of energy does not stay contained, it spreads across neighborhoods, businesses, and everyday life.

For local cafes, putting chairs outside is more than a seasonal habit. It is a signal. It means they are ready for the crowds, the longer days, and the steady flow of people exploring the city. Outdoor seating brings visibility and creates those small moments that turn into lasting habits for customers.

For Calgarians, it is a reminder to step back into the city. To take advantage of the short but vibrant season. To be part of the atmosphere instead of just passing through it.

Because in YYC, summer is not just about the weather. It is about the feeling. The buildup before the Stampede, the busy streets, the music, the late evenings, and the sense that the city is fully awake again.

And it all starts with something simple. A chair outside, waiting to be used.

Leon Zen
YYC Writer`,
    image: "IMG_0093.jpeg"
  }
];

const dom = {
  postsGrid: document.getElementById("postsGrid"),
  searchInput: document.getElementById("searchInput"),
  resultsCount: document.getElementById("resultsCount"),
  postModal: document.getElementById("postModal"),
  modalArticle: document.getElementById("modalArticle"),
  closeModalBtn: document.getElementById("closeModalBtn"),
  modalOverlay: document.getElementById("modalOverlay")
};

const state = {
  searchTerm: "",
  filteredPosts: [],
  activePostId: null
};

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = String(value ?? "");
  return div.innerHTML;
}

function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function formatDisplayDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return dateString;

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function getReadingTime(text) {
  const wordCount = normalizeText(text).split(" ").filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 220));
  return `${minutes} min read`;
}

function sanitizePosts(rawPosts) {
  if (!Array.isArray(rawPosts)) return [];

  return rawPosts
    .filter((post) => post && typeof post === "object")
    .map((post, index) => ({
      id: Number(post.id) || index + 1,
      title: String(post.title ?? "Untitled Newsletter").trim(),
      date: String(post.date ?? "").trim(),
      excerpt: String(post.excerpt ?? "").trim(),
      content: String(post.content ?? "").trim(),
      image: String(post.image ?? "").trim()
    }))
    .filter((post) => post.title && post.content)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

const stablePosts = sanitizePosts(posts);

function getFilteredPosts() {
  const term = normalizeText(state.searchTerm);

  if (!term) {
    return [...stablePosts];
  }

  return stablePosts.filter((post) => {
    const searchableText = normalizeText(`
      ${post.title}
      ${post.excerpt}
      ${post.content}
      ${post.date}
    `);

    return searchableText.includes(term);
  });
}

function createImageMarkup(src, alt, wrapperClass = "post-image-wrap") {
  if (!src) return "";

  const safeSrc = escapeHtml(src);
  const safeAlt = escapeHtml(alt);

  return `
    <div class="${wrapperClass}">
      <img
        class="post-image"
        src="${safeSrc}"
        alt="${safeAlt}"
        loading="lazy"
        decoding="async"
        onerror="this.closest('.${wrapperClass}')?.remove();"
      />
    </div>
  `;
}

function renderPosts() {
  if (!dom.postsGrid || !dom.resultsCount) return;

  state.filteredPosts = getFilteredPosts();

  dom.resultsCount.textContent = `${state.filteredPosts.length} newsletter${
    state.filteredPosts.length === 1 ? "" : "s"
  }`;

  if (state.filteredPosts.length === 0) {
    dom.postsGrid.innerHTML = `
      <div class="empty-state">
        <h3>No newsletters found</h3>
        <p>Try a different search word.</p>
      </div>
    `;
    return;
  }

  dom.postsGrid.innerHTML = state.filteredPosts
    .map((post) => {
      const imageMarkup = createImageMarkup(post.image, post.title);
      const readingTime = getReadingTime(post.content);

      return `
        <article class="post-card" data-post-id="${post.id}">
          ${imageMarkup}
          <div class="post-body">
            <span class="post-label">Newsletter</span>

            <div class="post-meta">
              <span class="post-date">${escapeHtml(formatDisplayDate(post.date))}</span>
              <span class="post-date">${escapeHtml(readingTime)}</span>
            </div>

            <h3 class="post-title">${escapeHtml(post.title)}</h3>
            <p class="post-excerpt">${escapeHtml(post.excerpt)}</p>
            <button class="read-btn" type="button" data-post-id="${post.id}">
              Read Full Issue →
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function getPostById(postId) {
  return stablePosts.find((post) => post.id === Number(postId)) || null;
}

function openPostModal(postId) {
  if (!dom.postModal || !dom.modalArticle) return;

  const post = getPostById(postId);
  if (!post) return;

  state.activePostId = post.id;

  const imageMarkup = createImageMarkup(
    post.image,
    post.title,
    "modal-image-wrap"
  );

  dom.modalArticle.innerHTML = `
    <span class="modal-label">Newsletter</span>
    <h2 id="modalTitle" class="modal-title">${escapeHtml(post.title)}</h2>
    <p class="modal-date">
      ${escapeHtml(formatDisplayDate(post.date))} · ${escapeHtml(getReadingTime(post.content))}
    </p>
    ${imageMarkup}
    <div class="modal-content-text">${escapeHtml(post.content)}</div>
  `;

  dom.postModal.classList.remove("hidden");
  dom.postModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (dom.closeModalBtn) {
    dom.closeModalBtn.focus();
  }
}

function closePostModal() {
  if (!dom.postModal) return;

  dom.postModal.classList.add("hidden");
  dom.postModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  state.activePostId = null;
}

function handleGridClick(event) {
  const trigger = event.target.closest("[data-post-id]");
  if (!trigger) return;

  const postId = trigger.getAttribute("data-post-id");
  if (!postId) return;

  openPostModal(postId);
}

function handleSearchInput(event) {
  state.searchTerm = event.target.value || "";
  renderPosts();
}

function registerEvents() {
  if (dom.searchInput) {
    dom.searchInput.addEventListener("input", handleSearchInput);
  }

  if (dom.postsGrid) {
    dom.postsGrid.addEventListener("click", handleGridClick);
  }

  if (dom.closeModalBtn) {
    dom.closeModalBtn.addEventListener("click", closePostModal);
  }

  if (dom.modalOverlay) {
    dom.modalOverlay.addEventListener("click", closePostModal);
  }

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dom.postModal && !dom.postModal.classList.contains("hidden")) {
      closePostModal();
    }
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/Newsletters.leonZen/sw.js")
      .then(() => console.log("Service Worker registered"))
      .catch((error) => console.log("Service Worker failed:", error));
  });
}

function init() {
  renderPosts();
  registerEvents();
  registerServiceWorker();
}

init();