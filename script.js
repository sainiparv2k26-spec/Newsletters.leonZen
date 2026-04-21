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