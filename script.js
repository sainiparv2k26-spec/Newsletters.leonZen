(() => {
  "use strict";

  if (window.__YYC_DAILY_APP_INITIALIZED__) return;
  window.__YYC_DAILY_APP_INITIALIZED__ = true;

  const CONFIG = {
    appName: "YYC Daily",
    locale: "en-CA",
    timeZone: "America/Edmonton",
    wordsPerMinute: 220,
    searchDebounceMs: 180,
    statusResetMs: 2600,
    submitCooldownMs: 1400,
    backToTopOffset: 500,
    stickyCtaOffset: 700,
    focusableSelector:
      'a[href], area[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    storageKeys: {
      theme: "yyc-theme",
      bookmarks: "yyc-bookmarks",
      announcementDismissed: "yyc-announcement-dismissed",
      signupPrefs: "yyc-signup-prefs-v2"
    },
    selectors: {
      progressBar: "#progressBar",
      announcementBar: "#announcementBar",
      announcementCloseBtn: "#announcementCloseBtn",
      themeToggle: "#themeToggle",
      featuredStory: "#featuredStory",
      trendingList: "#trendingList",
      postsGrid: "#postsGrid",
      searchInput: "#searchInput",
      topicFilters: "#topicFilters",
      resultsCount: "#resultsCount",
      archiveMeta: "#archiveMeta",
      newsletterForm: "#newsletterForm",
      formStatus: "#formStatus",
      stickyCta: "#stickyCta",
      backToTopBtn: "#backToTopBtn",
      postModal: "#postModal",
      modalOverlay: "#modalOverlay",
      modalArticle: "#modalArticle",
      closeModalBtn: "#closeModalBtn"
    },
    topicAliasMap: {
      local: "Calgary News",
      "calgary news": "Calgary News",
      calgary: "Calgary News",
      alberta: "Alberta",
      canada: "Canada",
      events: "Events",
      event: "Events",
      business: "Business",
      lifestyle: "Lifestyle",
      deals: "Deals",
      tech: "Tech",
      technology: "Tech",
      culture: "Culture"
    }
  };

  const RAW_POSTS = [
    {
      id: 1,
      title: "YYC Cannabis Market Perspective: Chasing THC or Chasing Quality?",
      date: "2026-04-20",
      topic: "Culture",
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
      image: "IMG_0079.jpeg",
      featured: false
    },
    {
      id: 2,
      title: "YYC Tech Perspective: Calgary’s Rise as a Data and IT Hub",
      date: "2026-04-21",
      topic: "Tech",
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
      image: "IMG_0086.jpeg",
      featured: false
    },
    {
      id: 3,
      title: "YYC Street Life Perspective: Patio Season Returns and Summer Is Calling",
      date: "2026-04-22",
      topic: "Local",
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
      image: "IMG_0093.jpeg",
      featured: true
    }
  ];

  const dom = Object.create(null);

  const state = {
    posts: [],
    filteredPosts: [],
    activeTopic: "All",
    searchTerm: "",
    activePost: null,
    lastFocusedElement: null,
    bookmarks: new Set(),
    theme: "dark",
    statusTimer: 0,
    searchTimer: 0,
    submitTimer: 0,
    scrollTicking: false,
    listenersAbortController: null,
    reducedMotion:
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  };

  const safeStorage = {
    get(key, fallback) {
      try {
        const raw = window.localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch {
        return false;
      }
    },
    remove(key) {
      try {
        window.localStorage.removeItem(key);
        return true;
      } catch {
        return false;
      }
    }
  };

  function qs(selector, root = document) {
    if (!selector || !root || typeof root.querySelector !== "function") return null;
    try {
      return root.querySelector(selector);
    } catch {
      return null;
    }
  }

  function qsa(selector, root = document) {
    if (!selector || !root || typeof root.querySelectorAll !== "function") return [];
    try {
      return Array.from(root.querySelectorAll(selector));
    } catch {
      return [];
    }
  }

  function isHTMLElement(value) {
    return value instanceof HTMLElement;
  }

  function normalizeText(value) {
    return String(value ?? "")
      .normalize("NFKC")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function normalizeWhitespace(value) {
    return String(value ?? "").replace(/\s+/g, " ").trim();
  }

  function slugify(value) {
    return String(value ?? "")
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80);
  }

  function canonicalTopic(value) {
    const raw = normalizeWhitespace(value);
    const mapped = CONFIG.topicAliasMap[normalizeText(raw)];
    return mapped || raw || "Calgary News";
  }

  function formatDateCA(dateString) {
    const date = new Date(`${String(dateString)}T12:00:00`);
    if (Number.isNaN(date.getTime())) return String(dateString || "");
    try {
      return new Intl.DateTimeFormat(CONFIG.locale, {
        timeZone: CONFIG.timeZone,
        month: "short",
        day: "numeric",
        year: "numeric"
      }).format(date);
    } catch {
      return String(dateString || "");
    }
  }

  function formatCalgaryTime(date = new Date()) {
    try {
      const formatter = new Intl.DateTimeFormat(CONFIG.locale, {
        timeZone: CONFIG.timeZone,
        hour: "numeric",
        minute: "2-digit",
        timeZoneName: "short"
      });
      return `Calgary time: ${formatter.format(date)}`;
    } catch {
      return "Calgary time";
    }
  }

  function getReadingTime(text) {
    const wordCount = normalizeWhitespace(text).split(" ").filter(Boolean).length;
    return `${Math.max(1, Math.ceil(wordCount / CONFIG.wordsPerMinute))} min read`;
  }

  function sanitizePosts(posts) {
    if (!Array.isArray(posts)) return [];

    return posts
      .filter((post) => post && typeof post === "object")
      .map((post, index) => {
        const clean = {
          id: Number(post.id) || index + 1,
          title: normalizeWhitespace(post.title || "Untitled Story"),
          date: normalizeWhitespace(post.date || ""),
          topic: canonicalTopic(post.topic || "Calgary News"),
          excerpt: normalizeWhitespace(post.excerpt || ""),
          content: String(post.content || "").trim(),
          image: normalizeWhitespace(post.image || ""),
          featured: Boolean(post.featured)
        };

        clean.slug = slugify(`${clean.id}-${clean.title}`) || `post-${clean.id}`;
        clean.readingTime = getReadingTime(clean.content);
        clean.searchText = normalizeText(
          `${clean.title} ${clean.excerpt} ${clean.content} ${clean.topic} ${clean.date}`
        );

        return clean;
      })
      .filter((post) => post.title && post.content)
      .sort((a, b) => {
        const aTime = new Date(`${a.date}T12:00:00`).getTime() || 0;
        const bTime = new Date(`${b.date}T12:00:00`).getTime() || 0;
        return bTime - aTime;
      });
  }

  function cacheDom() {
    Object.entries(CONFIG.selectors).forEach(([key, selector]) => {
      dom[key] = qs(selector);
    });
  }

  function ensureProgressFill() {
    if (!dom.progressBar) return null;
    let fill = qs(".progress-bar__fill", dom.progressBar);
    if (!fill) {
      fill = document.createElement("div");
      fill.className = "progress-bar__fill";
      dom.progressBar.appendChild(fill);
    }
    return fill;
  }

  function getPostUrl(post) {
    try {
      const url = new URL(window.location.href);
      url.hash = post.slug;
      return url.toString();
    } catch {
      return `${window.location.pathname}${window.location.search}#${post.slug}`;
    }
  }

  function getTopics(posts) {
    const topics = new Set(["All"]);
    posts.forEach((post) => {
      if (post && post.topic) topics.add(post.topic);
    });
    return Array.from(topics);
  }

  function makeButton(className, text, attrs = {}) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.textContent = text;

    Object.entries(attrs).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      button.setAttribute(key, String(value));
    });

    return button;
  }

  function buildImage(src, alt, wrapperClass) {
    const cleanSrc = normalizeWhitespace(src);
    if (!cleanSrc) return null;

    const wrapper = document.createElement("div");
    wrapper.className = wrapperClass;

    const image = document.createElement("img");
    image.className = "post-image";
    image.src = cleanSrc;
    image.alt = alt || "";
    image.loading = "lazy";
    image.decoding = "async";
    image.referrerPolicy = "no-referrer";

    image.addEventListener(
      "error",
      () => {
        wrapper.remove();
      },
      { once: true }
    );

    wrapper.appendChild(image);
    return wrapper;
  }

  function createReadButton(post) {
    return makeButton("read-btn", "Read full issue →", {
      "data-action": "read",
      "data-post-id": post.id,
      "aria-label": `Read ${post.title}`
    });
  }

  function createBookmarkButton(post) {
    const isSaved = state.bookmarks.has(post.id);
    return makeButton(
      `post-card__action${isSaved ? " is-active" : ""}`,
      isSaved ? "Saved" : "Save",
      {
        "data-action": "bookmark",
        "data-post-id": post.id,
        "aria-pressed": String(isSaved),
        "aria-label": isSaved ? `Remove saved story: ${post.title}` : `Save story: ${post.title}`
      }
    );
  }

  function createShareButton(post) {
    return makeButton("post-card__action", "Share", {
      "data-action": "share",
      "data-post-id": post.id,
      "aria-label": `Copy share link for ${post.title}`
    });
  }

  function createCardActions(post) {
    const actions = document.createElement("div");
    actions.className = "post-card__actions";
    actions.append(createReadButton(post), createBookmarkButton(post), createShareButton(post));
    return actions;
  }

  function createFeaturedStory(post) {
    const article = document.createElement("article");
    article.className = "featured-story";

    const media = buildImage(post.image, post.title, "featured-story__media");

    const content = document.createElement("div");
    content.className = "featured-story__content";

    const topic = document.createElement("span");
    topic.className = "post-label";
    topic.textContent = post.topic;

    const title = document.createElement("h3");
    title.className = "featured-story__title";
    title.textContent = post.title;

    const meta = document.createElement("p");
    meta.className = "featured-story__meta";
    meta.textContent = `${formatDateCA(post.date)} · ${post.readingTime}`;

    const excerpt = document.createElement("p");
    excerpt.className = "post-excerpt";
    excerpt.textContent = post.excerpt;

    content.append(topic, title, meta, excerpt, createCardActions(post));

    if (media) article.appendChild(media);
    article.appendChild(content);
    return article;
  }

  function createTrendingItem(post) {
    const article = document.createElement("article");
    article.className = "trending-item";

    const topic = document.createElement("span");
    topic.className = "post-label";
    topic.textContent = post.topic;

    const title = document.createElement("h3");
    title.className = "featured-story__title";
    title.textContent = post.title;
    title.style.margin = "0";
    title.style.fontSize = "1.3rem";

    const meta = document.createElement("p");
    meta.className = "featured-story__meta";
    meta.textContent = `${formatDateCA(post.date)} · ${post.readingTime}`;

    article.append(topic, title, meta, createCardActions(post));
    return article;
  }

  function createPostCard(post) {
    const article = document.createElement("article");
    article.className = "post-card";

    const media = buildImage(post.image, post.title, "post-image-wrap");

    const body = document.createElement("div");
    body.className = "post-body";

    const topic = document.createElement("span");
    topic.className = "post-label";
    topic.textContent = post.topic;

    const meta = document.createElement("div");
    meta.className = "post-meta";

    const date = document.createElement("span");
    date.className = "post-date";
    date.textContent = formatDateCA(post.date);

    const reading = document.createElement("span");
    reading.className = "post-date";
    reading.textContent = post.readingTime;

    meta.append(date, reading);

    const title = document.createElement("h3");
    title.className = "post-title";
    title.textContent = post.title;

    const excerpt = document.createElement("p");
    excerpt.className = "post-excerpt";
    excerpt.textContent = post.excerpt;

    body.append(topic, meta, title, excerpt, createCardActions(post));

    if (media) article.appendChild(media);
    article.appendChild(body);

    return article;
  }

  function createEmptyState() {
    const wrapper = document.createElement("div");
    wrapper.className = "empty-state";

    const title = document.createElement("h3");
    title.textContent = "No newsletters found";

    const text = document.createElement("p");
    text.textContent = "Try another search term or choose a different topic.";

    wrapper.append(title, text);
    return wrapper;
  }

  function renderFeatured() {
    if (!dom.featuredStory) return;
    dom.featuredStory.replaceChildren();

    const featured = state.posts.find((post) => post.featured) || state.posts[0];
    if (!featured) {
      const fallback = document.createElement("p");
      fallback.textContent = "Featured story will appear here.";
      dom.featuredStory.appendChild(fallback);
      return;
    }

    dom.featuredStory.appendChild(createFeaturedStory(featured));
  }

  function renderTrending() {
    if (!dom.trendingList) return;
    dom.trendingList.replaceChildren();

    const items = state.posts.slice(0, 3);
    if (!items.length) {
      const fallback = document.createElement("p");
      fallback.textContent = "Trending stories will appear here.";
      dom.trendingList.appendChild(fallback);
      return;
    }

    items.forEach((post) => dom.trendingList.appendChild(createTrendingItem(post)));
  }

  function renderTopicFilters() {
    if (!dom.topicFilters) return;
    dom.topicFilters.replaceChildren();

    getTopics(state.posts).forEach((topic) => {
      const isActive = state.activeTopic === topic;
      const button = makeButton(
        `post-card__action${isActive ? " is-active" : ""}`,
        topic,
        {
          "data-action": "filter",
          "data-topic": topic,
          "aria-pressed": String(isActive),
          "aria-label": `Filter by ${topic}`
        }
      );

      dom.topicFilters.appendChild(button);
    });
  }

  function filterPosts() {
    const term = normalizeText(state.searchTerm);

    state.filteredPosts = state.posts.filter((post) => {
      const topicMatch = state.activeTopic === "All" || post.topic === state.activeTopic;
      if (!topicMatch) return false;
      if (!term) return true;
      return post.searchText.includes(term);
    });
  }

  function getArchiveMetaText() {
    const filterText =
      state.activeTopic === "All" ? "Sorted by newest" : `Filtered by ${state.activeTopic}`;
    return `${filterText} · ${formatCalgaryTime()}`;
  }

  function renderPosts() {
    if (!dom.postsGrid) return;

    filterPosts();
    dom.postsGrid.replaceChildren();

    if (dom.resultsCount) {
      const count = state.filteredPosts.length;
      dom.resultsCount.textContent = `${count} newsletter${count === 1 ? "" : "s"}`;
    }

    if (dom.archiveMeta) {
      dom.archiveMeta.textContent = getArchiveMetaText();
    }

    if (!state.filteredPosts.length) {
      dom.postsGrid.appendChild(createEmptyState());
      return;
    }

    state.filteredPosts.forEach((post) => {
      dom.postsGrid.appendChild(createPostCard(post));
    });
  }

  function findPostById(id) {
    const numericId = Number(id);
    if (!Number.isFinite(numericId)) return null;
    return state.posts.find((post) => post.id === numericId) || null;
  }

  function findPostBySlug(slug) {
    const cleanSlug = normalizeWhitespace(slug);
    if (!cleanSlug) return null;
    return state.posts.find((post) => post.slug === cleanSlug) || null;
  }

  function getFocusableElements(root) {
    return qsa(CONFIG.focusableSelector, root).filter((element) => {
      if (!isHTMLElement(element)) return false;
      if (element.hasAttribute("hidden")) return false;
      if (element.getAttribute("aria-hidden") === "true") return false;
      return element.tabIndex >= 0 && (element.offsetParent !== null || element === document.activeElement);
    });
  }

  function openModal(post, updateHash = true) {
    if (!post || !dom.postModal || !dom.modalArticle) return;

    state.activePost = post;
    state.lastFocusedElement = isHTMLElement(document.activeElement) ? document.activeElement : null;

    dom.modalArticle.replaceChildren();

    const header = document.createElement("div");
    header.className = "modal-header";

    const topic = document.createElement("span");
    topic.className = "modal-label";
    topic.textContent = post.topic;

    const title = document.createElement("h2");
    title.className = "modal-title";
    title.id = "modalTitle";
    title.textContent = post.title;

    const meta = document.createElement("p");
    meta.className = "modal-date";
    meta.textContent = `${formatDateCA(post.date)} · ${post.readingTime}`;

    const actions = document.createElement("div");
    actions.className = "post-card__actions";
    actions.append(createBookmarkButton(post), createShareButton(post));

    header.append(topic, title, meta, actions);
    dom.modalArticle.appendChild(header);

    const image = buildImage(post.image, post.title, "modal-image-wrap");
    if (image) dom.modalArticle.appendChild(image);

    const body = document.createElement("div");
    body.className = "modal-content-text";
    body.id = "modalBody";
    body.textContent = post.content;
    dom.modalArticle.appendChild(body);

    dom.postModal.classList.remove("hidden");
    dom.postModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    if (updateHash) {
      try {
        history.replaceState(null, "", `#${post.slug}`);
      } catch {
        window.location.hash = post.slug;
      }
    }

    const focusTarget = dom.closeModalBtn || title;
    if (isHTMLElement(focusTarget)) focusTarget.focus();
  }

  function closeModal({ resetHash = true } = {}) {
    if (!dom.postModal) return;

    dom.postModal.classList.add("hidden");
    dom.postModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (resetHash && window.location.hash) {
      try {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      } catch {
        window.location.hash = "";
      }
    }

    if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
      state.lastFocusedElement.focus();
    }

    state.activePost = null;
  }

  function trapModalFocus(event) {
    if (!state.activePost || !dom.postModal || dom.postModal.classList.contains("hidden")) return;
    if (event.key !== "Tab") return;

    const focusable = getFocusableElements(dom.postModal);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  async function copyText(text) {
    const value = String(text || "");
    if (!value) return false;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
        return true;
      }
    } catch {
      /* continue to fallback */
    }

    try {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.top = "-9999px";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      return Boolean(copied);
    } catch {
      return false;
    }
  }

  function updateArchiveMetaTemporary(message) {
    if (!dom.archiveMeta) return;

    dom.archiveMeta.textContent = String(message || "");
    window.clearTimeout(state.statusTimer);

    state.statusTimer = window.setTimeout(() => {
      if (dom.archiveMeta) {
        dom.archiveMeta.textContent = getArchiveMetaText();
      }
    }, CONFIG.statusResetMs);
  }

  async function handleShare(post) {
    if (!post) return;

    const url = getPostUrl(post);

    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url
        });
        updateArchiveMetaTemporary("Share dialog opened.");
        return;
      } catch {
        /* fallback to copy */
      }
    }

    const copied = await copyText(url);
    updateArchiveMetaTemporary(copied ? "Story link copied." : "Unable to copy link.");
  }

  function persistBookmarks() {
    safeStorage.set(CONFIG.storageKeys.bookmarks, Array.from(state.bookmarks));
  }

  function toggleBookmark(postId) {
    if (!Number.isFinite(postId)) return;

    if (state.bookmarks.has(postId)) {
      state.bookmarks.delete(postId);
      updateArchiveMetaTemporary("Story removed from saved items.");
    } else {
      state.bookmarks.add(postId);
      updateArchiveMetaTemporary("Story saved on this device.");
    }

    persistBookmarks();
    renderFeatured();
    renderTrending();
    renderTopicFilters();
    renderPosts();

    if (state.activePost && state.activePost.id === postId) {
      const freshPost = findPostById(postId);
      if (freshPost) openModal(freshPost, false);
    }
  }

  function restoreBookmarks() {
    const saved = safeStorage.get(CONFIG.storageKeys.bookmarks, []);
    if (!Array.isArray(saved)) {
      state.bookmarks = new Set();
      return;
    }

    state.bookmarks = new Set(
      saved
        .map((value) => Number(value))
        .filter((value) => Number.isFinite(value))
    );
  }

  function dismissAnnouncement() {
    if (!dom.announcementBar) return;
    dom.announcementBar.hidden = true;
    safeStorage.set(CONFIG.storageKeys.announcementDismissed, true);
  }

  function restoreAnnouncementState() {
    const dismissed = safeStorage.get(CONFIG.storageKeys.announcementDismissed, false);
    if (dismissed && dom.announcementBar) {
      dom.announcementBar.hidden = true;
    }
  }

  function applyTheme(themeValue) {
    const theme = themeValue === "light" ? "light" : "dark";
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);

    if (dom.themeToggle) {
      const isLight = theme === "light";
      dom.themeToggle.setAttribute("aria-pressed", String(isLight));
      dom.themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
      );
      const textNode = qs(".theme-toggle__text", dom.themeToggle);
      if (textNode) {
        textNode.textContent = isLight ? "Light" : "Dark";
      }
    }
  }

  function restoreTheme() {
    const stored = safeStorage.get(CONFIG.storageKeys.theme, "dark");
    applyTheme(stored);
  }

  function toggleTheme() {
    const nextTheme = state.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    safeStorage.set(CONFIG.storageKeys.theme, nextTheme);
  }

  function updateProgressBar() {
    const fill = ensureProgressFill();
    if (!fill) return;

    const scrollTop = window.scrollY || window.pageYOffset || 0;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? Math.min(100, (scrollTop / maxScroll) * 100) : 0;
    fill.style.width = `${progress}%`;
  }

  function updateBackToTop() {
    if (!dom.backToTopBtn) return;
    dom.backToTopBtn.classList.toggle("is-visible", (window.scrollY || 0) > CONFIG.backToTopOffset);
  }

  function updateStickyCta() {
    if (!dom.stickyCta) return;
    dom.stickyCta.classList.toggle("is-visible", (window.scrollY || 0) > CONFIG.stickyCtaOffset);
  }

  function runScrollEffects() {
    state.scrollTicking = false;
    updateProgressBar();
    updateBackToTop();
    updateStickyCta();
  }

  function onScroll() {
    if (state.scrollTicking) return;
    state.scrollTicking = true;
    window.requestAnimationFrame(runScrollEffects);
  }

  function clearFieldErrors(form) {
    if (!(form instanceof HTMLFormElement)) return;

    qsa(".field-error", form).forEach((node) => {
      node.hidden = true;
      node.textContent = "";
    });

    qsa("input, select, textarea", form).forEach((field) => {
      field.removeAttribute("aria-invalid");
      field.classList.remove("is-invalid", "is-valid");

      const describedBy = normalizeWhitespace(field.getAttribute("aria-describedby") || "");
      if (!describedBy) return;

      const filteredIds = describedBy
        .split(/\s+/)
        .filter((id) => id && !id.endsWith("Error"));

      if (filteredIds.length) {
        field.setAttribute("aria-describedby", filteredIds.join(" "));
      } else {
        field.removeAttribute("aria-describedby");
      }
    });
  }

  function setFieldError(field, errorId, message) {
    if (!isHTMLElement(field)) return null;

    field.setAttribute("aria-invalid", "true");
    field.classList.remove("is-valid");
    field.classList.add("is-invalid");

    const errorNode = document.getElementById(errorId);
    if (errorNode) {
      errorNode.hidden = false;
      errorNode.textContent = String(message || "");

      const existing = normalizeWhitespace(field.getAttribute("aria-describedby") || "");
      const ids = new Set(existing ? existing.split(/\s+/) : []);
      ids.add(errorId);
      field.setAttribute("aria-describedby", Array.from(ids).join(" "));
    }

    return field;
  }

  function setFieldValid(field) {
    if (!isHTMLElement(field)) return;
    field.classList.remove("is-invalid");
    field.classList.add("is-valid");
    field.removeAttribute("aria-invalid");
  }

  function validateEmail(value) {
    const email = normalizeWhitespace(value);
    if (!email || email.length > 254) return false;
    return /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/i.test(email);
  }

  function normalizePostalCode(value) {
    const compact = normalizeText(value).replace(/[^a-z0-9]/g, "").toUpperCase();
    if (compact.length !== 6) return normalizeWhitespace(value).toUpperCase();
    return `${compact.slice(0, 3)} ${compact.slice(3)}`;
  }

  function validateCanadianPostalCode(value) {
    if (!value) return true;
    const normalized = normalizePostalCode(value);
    return /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z]\s?\d[ABCEGHJ-NPRSTV-Z]\d$/i.test(normalized);
  }

  function showFormStatus(message, type = "") {
    if (!dom.formStatus) return;

    dom.formStatus.textContent = String(message || "");
    dom.formStatus.className = "form-status";

    if (type) {
      dom.formStatus.classList.add(`is-${type}`);
    }

    dom.formStatus.setAttribute("role", "status");
    dom.formStatus.setAttribute("aria-live", type === "error" ? "assertive" : "polite");
  }

  function getFormFields(form) {
    return {
      firstName: qs("#firstName", form),
      email: qs("#email", form),
      zipCode: qs("#zipCode", form),
      stateSelect: qs("#stateSelect", form),
      consent: qs("#consent", form),
      submitButton: qs('button[type="submit"]', form)
    };
  }

  function saveSignupPreferences(preferences) {
    const safePrefs = {
      firstName: preferences.firstName || "",
      postalCode: preferences.postalCode || "",
      province: preferences.province || "",
      edition: preferences.edition || "Morning Brief",
      topics: Array.isArray(preferences.topics) ? preferences.topics.slice(0, 8) : [],
      confirmedAt: new Date().toISOString()
    };

    return safeStorage.set(CONFIG.storageKeys.signupPrefs, safePrefs);
  }

  function restoreSignupPreferences() {
    if (!dom.newsletterForm) return;

    const saved = safeStorage.get(CONFIG.storageKeys.signupPrefs, null);
    if (!saved || typeof saved !== "object") return;

    const fields = getFormFields(dom.newsletterForm);

    if (fields.firstName && typeof saved.firstName === "string") {
      fields.firstName.value = saved.firstName;
    }

    if (fields.zipCode && typeof saved.postalCode === "string") {
      fields.zipCode.value = saved.postalCode;
    }

    if (fields.stateSelect && typeof saved.province === "string") {
      const matchingOption = Array.from(fields.stateSelect.options || []).find(
        (option) => normalizeText(option.value || option.textContent) === normalizeText(saved.province)
      );
      if (matchingOption) {
        fields.stateSelect.value = matchingOption.value;
      }
    }

    if (dom.newsletterForm && Array.isArray(saved.topics)) {
      qsa('input[name="topics"]', dom.newsletterForm).forEach((checkbox) => {
        if (checkbox instanceof HTMLInputElement) {
          checkbox.checked = saved.topics.includes(checkbox.value);
        }
      });
    }

    if (dom.newsletterForm && typeof saved.edition === "string") {
      const editionField = qs(
        `input[name="edition"][value="${CSS && CSS.escape ? CSS.escape(saved.edition) : saved.edition}"]`,
        dom.newsletterForm
      );
      if (editionField instanceof HTMLInputElement) {
        editionField.checked = true;
      }
    }
  }

  function getFriendlyEditionName(value) {
    return value === "Evening Roundup" ? "Evening Roundup" : "Morning Brief";
  }

  function lockSubmitButton(button) {
    if (!(button instanceof HTMLButtonElement)) return;
    button.disabled = true;
    button.setAttribute("aria-disabled", "true");
  }

  function unlockSubmitButton(button) {
    if (!(button instanceof HTMLButtonElement)) return;
    button.disabled = false;
    button.setAttribute("aria-disabled", "false");
  }

  function handleNewsletterSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) return;

    const fields = getFormFields(form);
    clearFieldErrors(form);
    showFormStatus("");

    const formData = new FormData(form);

    const firstName = normalizeWhitespace(formData.get("firstName") || "");
    const email = normalizeWhitespace(formData.get("email") || "");
    const postalCodeRaw = normalizeWhitespace(formData.get("zipCode") || "");
    const postalCode = normalizePostalCode(postalCodeRaw);
    const province = normalizeWhitespace(formData.get("state") || "");
    const edition = getFriendlyEditionName(String(formData.get("edition") || "Morning Brief"));
    const topics = formData.getAll("topics").map((value) => normalizeWhitespace(value)).filter(Boolean);
    const consent = formData.get("consent") === "on";

    let firstInvalidField = null;
    let valid = true;

    if (fields.firstName && firstName) {
      if (firstName.length < 2 || firstName.length > 50 || /[^a-zA-ZÀ-ÿ' -]/.test(firstName)) {
        valid = false;
        firstInvalidField =
          firstInvalidField ||
          setFieldError(
            fields.firstName,
            "firstNameError",
            "Please enter a valid first name, or leave it blank."
          );
      } else {
        setFieldValid(fields.firstName);
      }
    }

    if (!email || !validateEmail(email)) {
      valid = false;
      firstInvalidField =
        firstInvalidField ||
        setFieldError(fields.email, "emailError", "Please enter a valid email address.");
    } else {
      setFieldValid(fields.email);
    }

    if (postalCodeRaw) {
      if (!validateCanadianPostalCode(postalCodeRaw)) {
        valid = false;
        firstInvalidField =
          firstInvalidField ||
          setFieldError(
            fields.zipCode,
            "zipCodeError",
            "Please enter a valid Canadian postal code, like T2P 1J9."
          );
      } else {
        if (fields.zipCode instanceof HTMLInputElement) {
          fields.zipCode.value = postalCode;
        }
        setFieldValid(fields.zipCode);
      }
    }

    if (!consent) {
      valid = false;
      firstInvalidField =
        firstInvalidField ||
        setFieldError(
          fields.consent,
          "consentError",
          "Please confirm that you agree to receive newsletter updates."
        );
    }

    if (!valid) {
      showFormStatus("Please correct the highlighted fields and try again.", "error");
      if (firstInvalidField && typeof firstInvalidField.focus === "function") {
        firstInvalidField.focus();
      }
      return;
    }

    lockSubmitButton(fields.submitButton);

    const saved = saveSignupPreferences({
      firstName,
      postalCode,
      province,
      edition,
      topics
    });

    if (!saved) {
      unlockSubmitButton(fields.submitButton);
      showFormStatus(
        "Your preferences could not be saved in this browser. Please try again.",
        "error"
      );
      return;
    }

    form.reset();

    if (fields.zipCode instanceof HTMLInputElement) {
      fields.zipCode.value = "";
    }

    showFormStatus(
      `${firstName ? `Thanks, ${firstName}. ` : "Thanks. "}You’re set for the ${edition}. Preferences were saved locally on this device.`,
      "success"
    );

    window.clearTimeout(state.submitTimer);
    state.submitTimer = window.setTimeout(() => {
      unlockSubmitButton(fields.submitButton);
    }, CONFIG.submitCooldownMs);
  }

  function handleHashOpen() {
    const slug = window.location.hash.replace(/^#/, "");
    if (!slug) return;

    const post = findPostBySlug(slug);
    if (post) {
      openModal(post, false);
    }
  }

  function handleDocumentClick(event) {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const actionEl = target.closest("[data-action]");
    if (!actionEl) return;

    const action = actionEl.getAttribute("data-action");

    if (action === "filter") {
      const topic = actionEl.getAttribute("data-topic") || "All";
      state.activeTopic = topic;
      renderTopicFilters();
      renderPosts();
      return;
    }

    const postId = Number(actionEl.getAttribute("data-post-id"));
    if (!Number.isFinite(postId)) return;

    const post = findPostById(postId);
    if (!post) return;

    if (action === "read") {
      openModal(post, true);
      return;
    }

    if (action === "bookmark") {
      toggleBookmark(post.id);
      return;
    }

    if (action === "share") {
      void handleShare(post);
    }
  }

  function handleSearchInput(event) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;

    const nextValue = target.value || "";
    window.clearTimeout(state.searchTimer);

    state.searchTimer = window.setTimeout(() => {
      state.searchTerm = nextValue;
      renderPosts();
    }, CONFIG.searchDebounceMs);
  }

  function handlePostalCodeInput(event) {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;

    const raw = target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
    if (raw.length > 3) {
      target.value = `${raw.slice(0, 3)} ${raw.slice(3)}`;
    } else {
      target.value = raw;
    }
  }

  function handleKeydown(event) {
    if (event.key === "Escape" && state.activePost) {
      closeModal();
      return;
    }

    trapModalFocus(event);
  }

  function handleHashChange() {
    const slug = window.location.hash.replace(/^#/, "");

    if (!slug && state.activePost) {
      closeModal({ resetHash: false });
      return;
    }

    if (slug) {
      const post = findPostBySlug(slug);
      if (post) openModal(post, false);
    }
  }

  function scrollToTop() {
    const behavior = state.reducedMotion ? "auto" : "smooth";
    window.scrollTo({ top: 0, behavior });
  }

  function bindEvents() {
    if (state.listenersAbortController) {
      state.listenersAbortController.abort();
    }

    state.listenersAbortController = new AbortController();
    const { signal } = state.listenersAbortController;

    document.addEventListener("click", handleDocumentClick, { signal });

    dom.searchInput?.addEventListener("input", handleSearchInput, { signal });
    dom.closeModalBtn?.addEventListener("click", () => closeModal(), { signal });
    dom.modalOverlay?.addEventListener("click", () => closeModal(), { signal });
    dom.themeToggle?.addEventListener("click", toggleTheme, { signal });
    dom.backToTopBtn?.addEventListener("click", scrollToTop, { signal });
    dom.announcementCloseBtn?.addEventListener("click", dismissAnnouncement, { signal });
    dom.newsletterForm?.addEventListener("submit", handleNewsletterSubmit, { signal });

    const zipField = dom.newsletterForm ? qs("#zipCode", dom.newsletterForm) : null;
    zipField?.addEventListener("input", handlePostalCodeInput, { signal });

    window.addEventListener("scroll", onScroll, { passive: true, signal });
    window.addEventListener("keydown", handleKeydown, { signal });
    window.addEventListener("hashchange", handleHashChange, { signal });
    window.addEventListener(
      "resize",
      () => {
        onScroll();
      },
      { passive: true, signal }
    );
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return;

    window.addEventListener(
      "load",
      () => {
        navigator.serviceWorker.register("./sw.js").catch(() => {
          /* ignore safely */
        });
      },
      { once: true }
    );
  }

  function init() {
    cacheDom();
    ensureProgressFill();

    state.posts = sanitizePosts(RAW_POSTS);
    restoreBookmarks();
    restoreAnnouncementState();
    restoreTheme();
    restoreSignupPreferences();

    renderFeatured();
    renderTrending();
    renderTopicFilters();
    renderPosts();

    bindEvents();
    handleHashOpen();
    updateProgressBar();
    updateBackToTop();
    updateStickyCta();
    registerServiceWorker();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();