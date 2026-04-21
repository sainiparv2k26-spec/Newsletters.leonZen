const posts = [
  {
    id: 1,
    title: "YYC Cannabis Market Perspective: Chasing THC or Chasing Quality?",
    date: "2026-04-20",
    excerpt:
      "In Calgary’s growing cannabis scene, THC percentages dominate the conversation, but true quality goes far beyond potency alone.",
    content: `In Calgary’s growing cannabis scene, a clear trend has taken over: everyone’s chasing high THC numbers. Walk into almost any dispensary, and the first question you’ll hear is, “What’s the strongest you’ve got?” But in this rush for potency, something important is being overlooked: the quality and origin of the plant itself.

THC percentage has become a marketing tool, not necessarily a measure of a better experience. A higher number on the label doesn’t guarantee richer flavor, smoother smoke, or a more balanced effect. In fact, many high-THC products sacrifice terpene profiles — the compounds responsible for aroma, taste, and the nuanced effects that make each strain unique.

What Calgary consumers should be paying closer attention to is how the cannabis is grown. Sun-grown cannabis, cultivated outdoors under natural light, often develops more complex terpene profiles and a fuller expression of the plant’s natural characteristics. Unlike heavily controlled indoor environments focused on maximizing THC, sun-grown plants benefit from real soil, fresh air, and the natural rhythm of the seasons.

This isn’t just about taste — it’s about experience. A well-grown, terpene-rich strain with moderate THC can offer a more enjoyable, balanced high than a harsh, overly potent alternative. It’s similar to choosing quality coffee or wine; the story behind how it’s produced matters just as much as the final number on the label.

As YYC continues to build its cannabis culture, there’s an opportunity to shift the conversation. Instead of asking for the highest THC, ask about terpene profiles, growing methods, and overall quality. Support producers who prioritize craft, sustainability, and the natural integrity of the plant.

Because at the end of the day, cannabis isn’t just about getting “higher” — it’s about getting better.

— Leon Zen
YYC Writer`,
    image: "https://sainiparv2k26-spec.github.io/Blog.website/IMG_0079.jpeg"
  }

,
{
  id: 2,
  title: "YYC Tech Perspective: Calgary’s Rise as a Data and IT Hub",
  date: "2026-04-21",
  excerpt: "Calgary is quietly emerging as a growing tech and data hub, offering affordability, talent, and long-term potential in the digital economy.",
  content: `Something interesting is happening in Calgary right now. For years, this city has been known for oil, gas, and engineering. But quietly, another story is starting to take shape. Calgary is stepping into the world of tech, and more specifically, into the future of data.

Across North America, the demand for data is growing fast. Everything from streaming to artificial intelligence depends on massive data centres. Cities like Toronto and Vancouver have had a head start, but they are becoming expensive and crowded. That is where Calgary begins to stand out.

There are some simple reasons behind this shift. Land here is more affordable. Energy is reliable and easier to access. The climate also helps, since cooler temperatures reduce the cost of keeping data centres running. These are not flashy advantages, but they matter a lot to companies making long term investments.

At the same time, Calgary already has something valuable. A strong base of engineers and problem solvers. Many professionals from the energy sector are now moving into tech, bringing with them real world experience and technical thinking. This creates a unique kind of workforce that blends old industry knowledge with new digital skills.

It is important to be realistic though. Calgary is not the largest data centre hub in North America, and it is not trying to be overnight. What is happening is slower and more grounded. Companies are starting to look at Calgary as a place where they can build, grow, and scale without the pressure of bigger markets.

There is also a bigger conversation around sustainability. Data centres use a lot of energy, and the world is paying attention to that. Alberta is working toward cleaner energy solutions, and if Calgary can connect its tech growth with more sustainable power, it could become an attractive option for companies that care about their environmental impact.

For the city, this shift means more than just new buildings or infrastructure. It is about identity. Calgary is beginning to move from being only an energy city to becoming part of the digital economy. That transition will take time, but the foundation is already there.

In the coming years, Calgary may not try to compete directly with the biggest tech cities. Instead, it can build its own path. A place where growth is steady, costs are manageable, and opportunities are real.

Because the future of power is changing. It is no longer only about what comes from the ground. It is also about the data we create, store, and use every day.

— Leon Zen  
YYC Writer`,
  image: "https://sainiparv2k26-spec.github.io/Blog.website/IMG_0086.jpeg"
}
];

const postsGrid = document.getElementById("postsGrid");
const searchInput = document.getElementById("searchInput");
const resultsCount = document.getElementById("resultsCount");

const postModal = document.getElementById("postModal");
const modalArticle = document.getElementById("modalArticle");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");

let searchTerm = "";

function formatDisplayDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function getFilteredPosts() {
  return [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .filter((post) => {
      const searchableText = `
        ${post.title}
        ${post.excerpt}
        ${post.content}
      `.toLowerCase();

      return searchableText.includes(searchTerm.toLowerCase());
    });
}

function renderPosts() {
  const filteredPosts = getFilteredPosts();

  resultsCount.textContent = `${filteredPosts.length} newsletter${
    filteredPosts.length === 1 ? "" : "s"
  }`;

  if (filteredPosts.length === 0) {
    postsGrid.innerHTML = `
      <div class="empty-state">
        <h3>No newsletters found</h3>
        <p>Try a different search word.</p>
      </div>
    `;
    return;
  }

  postsGrid.innerHTML = filteredPosts
    .map((post) => {
      const imageMarkup = post.image
        ? `
          <div class="post-image-wrap">
            <img class="post-image" src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title)}" />
          </div>
        `
        : "";

      return `
        <article class="post-card">
          ${imageMarkup}
          <div class="post-body">
            <span class="post-label">Newsletter</span>

            <div class="post-meta">
              <span class="post-date">${formatDisplayDate(post.date)}</span>
            </div>

            <h3 class="post-title">${escapeHtml(post.title)}</h3>
            <p class="post-excerpt">${escapeHtml(post.excerpt)}</p>
            <button class="read-btn" data-post-id="${post.id}">Read Full Issue →</button>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".read-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const postId = Number(button.dataset.postId);
      openPostModal(postId);
    });
  });
}

function openPostModal(postId) {
  const post = posts.find((item) => item.id === postId);
  if (!post) return;

  const imageMarkup = post.image
    ? `
      <div class="modal-image-wrap">
        <img class="post-image" src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title)}" />
      </div>
    `
    : "";

  modalArticle.innerHTML = `
    <span class="modal-label">Newsletter</span>
    <h2 id="modalTitle" class="modal-title">${escapeHtml(post.title)}</h2>
    <p class="modal-date">${formatDisplayDate(post.date)}</p>
    ${imageMarkup}
    <div class="modal-content-text">${escapeHtml(post.content)}</div>
  `;

  postModal.classList.remove("hidden");
  postModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePostModal() {
  postModal.classList.add("hidden");
  postModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim();
    renderPosts();
  });
}

if (closeModalBtn) {
  closeModalBtn.addEventListener("click", closePostModal);
}

if (modalOverlay) {
  modalOverlay.addEventListener("click", closePostModal);
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !postModal.classList.contains("hidden")) {
    closePostModal();
  }
});

renderPosts();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/Blog.website/sw.js")
      .then(() => console.log("Service Worker Registered"))
      .catch((err) => console.log("SW failed:", err));
  });
}