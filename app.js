const I18N = {
  ar: {
    title: "قارن مصر",
    tagline: "أسعار ومراجعات من متاجر مصر فقط",
    searchLabel: "اسم المنتج",
    placeholder: "ايفون 15 أو air fryer أو غسالة",
    search: "بحث",
    hint: "اكتب عربي أو إنجليزي. البحث يشمل جوميا، أمازون مصر، نون، بي تك، تو بي، رنين، كارفور والمزيد داخل مصر.",
    storesTitle: "افتح البحث مباشرة في المتاجر",
    disclaimer: "الأسعار من نتائج بحث عامة داخل مصر. راجع المتجر قبل الشراء. غير تابع لأي منصة.",
    addHome: "على الآيفون: Safari ← مشاركة ← إضافة إلى الشاشة الرئيسية",
    searching: "جاري البحث في المتاجر المصرية…",
    enriching: "قراءة صفحات المنتجات لاستخراج السعر والتقييم…",
    found: (n) => `تم العثور على ${n} عرض داخل مصر`,
    none: "لم يُستخرج سعر مباشر. استخدم أزرار المتاجر بالأسفل — تفتح في سفاري وتعمل على الآيفون.",
    error: "تعذر جلب بعض المواقع بسبب الحماية. المتاجر أدناه ما زالت تعمل.",
    cheapest: "الأرخص",
    median: "المتوسط",
    highest: "الأعلى",
    sortPrice: "السعر",
    sortRating: "التقييم",
    sortReviews: "عدد المراجعات",
    open: "فتح المنتج",
    used: "مستعمل",
    best: "أفضل سعر",
    reviews: (n) => `${n} مراجعة`,
    noRating: "بدون تقييم ظاهر",
    egp: "ج.م",
  },
  en: {
    title: "Egypt Scout",
    tagline: "Prices & reviews from Egypt stores only",
    searchLabel: "Product name",
    placeholder: "iPhone 15 or ايفون 15 or air fryer",
    search: "Search",
    hint: "Arabic or English. Covers Jumia, Amazon.eg, Noon Egypt, B.TECH, 2B, Raneen, Carrefour and more — Egypt only.",
    storesTitle: "Open the search in each store",
    disclaimer: "Prices come from public Egypt listings. Confirm on the store before buying. Not affiliated with any marketplace.",
    addHome: "On iPhone: Safari → Share → Add to Home Screen",
    searching: "Searching Egyptian stores…",
    enriching: "Reading product pages for price and reviews…",
    found: (n) => `Found ${n} Egypt listings`,
    none: "No live prices extracted. Use the store buttons below — they open in Safari and work on iPhone.",
    error: "Some sites blocked automated reads. The store buttons below still work.",
    cheapest: "Lowest",
    median: "Median",
    highest: "Highest",
    sortPrice: "Price",
    sortRating: "Rating",
    sortReviews: "Reviews",
    open: "Open listing",
    used: "Used",
    best: "Best price",
    reviews: (n) => `${n} reviews`,
    noRating: "No public rating",
    egp: "EGP",
  },
};

const STORES = [
  { id: "jumia", name: "Jumia", nameAr: "جوميا", hosts: ["jumia.com.eg"], search: (q) => `https://www.jumia.com.eg/catalog/?q=${encodeURIComponent(q)}` },
  { id: "amazon", name: "Amazon.eg", nameAr: "أمازون مصر", hosts: ["amazon.eg"], search: (q) => `https://www.amazon.eg/s?k=${encodeURIComponent(q)}` },
  { id: "noon", name: "Noon Egypt", nameAr: "نون مصر", hosts: ["noon.com"], pathIncludes: ["/egypt"], search: (q) => `https://www.noon.com/egypt-en/search/?q=${encodeURIComponent(q)}` },
  { id: "btech", name: "B.TECH", nameAr: "بي تك", hosts: ["btech.com"], search: (q) => `https://btech.com/en/catalogsearch/result/?q=${encodeURIComponent(q)}` },
  { id: "twob", name: "2B", nameAr: "تو بي", hosts: ["2b.com.eg"], search: (q) => `https://2b.com.eg/en/catalogsearch/result/?q=${encodeURIComponent(q)}` },
  { id: "raneen", name: "Raneen", nameAr: "رنين", hosts: ["raneen.com"], search: (q) => `https://www.raneen.com/en/catalogsearch/result/?q=${encodeURIComponent(q)}` },
  { id: "carrefour", name: "Carrefour", nameAr: "كارفور", hosts: ["carrefouregypt.com"], search: (q) => `https://www.carrefouregypt.com/mafegy/en/search?q=${encodeURIComponent(q)}` },
  { id: "tradeline", name: "Tradeline", nameAr: "تريدلاين", hosts: ["tradelinestores.com"], search: (q) => `https://www.tradelinestores.com/catalogsearch/result/?q=${encodeURIComponent(q)}` },
  { id: "raya", name: "Raya Shop", nameAr: "راية", hosts: ["rayashop.com", "raya.shop"], search: (q) => `https://rayashop.com/search?q=${encodeURIComponent(q)}` },
  { id: "homzmart", name: "Homzmart", nameAr: "هومزمارت", hosts: ["homzmart.com"], search: (q) => `https://homzmart.com/en/search/${encodeURIComponent(q)}` },
  { id: "vodafone", name: "Vodafone", nameAr: "فودافون", hosts: ["vodafone.com.eg", "eshop.vodafone.com.eg"], search: (q) => `https://eshop.vodafone.com.eg/en/search/${encodeURIComponent(q)}` },
  { id: "pricena", name: "Pricena EG", nameAr: "برايسينا", hosts: ["eg.pricena.com", "pricena.com"], search: (q) => `https://eg.pricena.com/en/search?q=${encodeURIComponent(q)}` },
  { id: "primetech", name: "Prime Tech", nameAr: "برايم تك", hosts: ["primetecheg.com"], search: (q) => `https://primetecheg.com/?s=${encodeURIComponent(q)}` },
  { id: "dubizzle", name: "Dubizzle", nameAr: "دوبيزل", hosts: ["dubizzle.com.eg", "olx.com.eg"], used: true, search: (q) => `https://www.dubizzle.com.eg/en/q/?search=${encodeURIComponent(q)}` },
];

const BLOCKED_HOSTS = [
  "temu.com", "aliexpress.com", "shein.com", "amazon.com", "amazon.sa",
  "amazon.ae", "amazon.co.uk", "noon.com/uae", "noon.com/saudi",
  "jumia.com.ng", "jumia.co.ke", "walmart.com", "ebay.com",
];

const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";

let lang = localStorage.getItem("qaren-lang") || "ar";
let listings = [];
let sortKey = "price";

const $ = (id) => document.getElementById(id);

function t() {
  return I18N[lang];
}

function applyI18n() {
  const dict = t();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (typeof dict[key] === "string") el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = dict[el.getAttribute("data-i18n-placeholder")];
  });
  $("langBtn").textContent = lang === "ar" ? "EN" : "عربي";
  const chips = document.querySelectorAll("[data-sort]");
  chips[0].textContent = dict.sortPrice;
  chips[1].textContent = dict.sortRating;
  chips[2].textContent = dict.sortReviews;
  renderStores($("q").value.trim() || "iPhone 15");
}

function westernizeDigits(text) {
  return String(text).replace(/[٠-٩]/g, (d) => String(ARABIC_DIGITS.indexOf(d)));
}

function decodeDuckLink(href) {
  try {
    const url = new URL(href, "https://duckduckgo.com");
    const uddg = url.searchParams.get("uddg");
    return uddg ? decodeURIComponent(uddg) : href;
  } catch {
    return href;
  }
}

function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return "";
  }
}

function matchStore(url) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }
  const host = parsed.hostname.replace(/^www\./, "").toLowerCase();
  const path = parsed.pathname.toLowerCase();
  const href = parsed.href.toLowerCase();
  if (BLOCKED_HOSTS.some((blocked) => href.includes(blocked))) return null;
  return STORES.find((store) => {
    const hostOk = store.hosts.some((h) => host === h || host.endsWith(`.${h}`));
    if (!hostOk) return false;
    if (store.pathIncludes && !store.pathIncludes.some((p) => path.includes(p) || href.includes(p))) {
      if (host === "noon.com") return false;
    }
    if (host.includes("pricena") && !href.includes("eg.pricena") && !path.includes("egypt")) return false;
    return true;
  }) || null;
}

function extractPrice(text) {
  const cleaned = westernizeDigits(text).replace(/\u00a0/g, " ");
  const patterns = [
    /(?:EGP|E£|LE|ج\.?\s*م\.?|جنيه(?:\s*مصري)?)\s*([0-9]{1,3}(?:[.,\s][0-9]{3})*(?:[.,][0-9]{1,2})?|[0-9]+(?:[.,][0-9]{1,2})?)/i,
    /([0-9]{1,3}(?:[.,][0-9]{3})+|[0-9]{4,7})(?:\.\d{1,2})?\s*(?:EGP|E£|LE|ج\.?\s*م\.?|جنيه)/i,
  ];
  for (const pattern of patterns) {
    const match = cleaned.match(pattern);
    if (!match) continue;
    let raw = match[1].replace(/\s/g, "");
    if (raw.includes(",") && raw.includes(".")) raw = raw.replace(/,/g, "");
    else if ((raw.match(/,/g) || []).length > 1) raw = raw.replace(/,/g, "");
    else if (/,\d{3}$/.test(raw) || /,\d{3},/.test(raw)) raw = raw.replace(/,/g, "");
    else raw = raw.replace(",", ".");
    const value = Number(raw);
    if (value >= 20 && value <= 5000000) return value;
  }
  return null;
}

function extractRating(text) {
  const cleaned = westernizeDigits(text);
  const star = cleaned.match(/([0-5](?:\.\d)?)\s*(?:\/\s*5|out of 5|نجوم|نجمة|stars?)/i);
  if (star) {
    const value = Number(star[1]);
    if (value > 0 && value <= 5) return value;
  }
  const compact = cleaned.match(/\b([0-5]\.\d)\s*(?:\(|\/)/);
  if (compact) return Number(compact[1]);
  return null;
}

function extractReviewCount(text) {
  const cleaned = westernizeDigits(text);
  const match = cleaned.match(/(\d[\d,]*)\s*(?:reviews?|ratings?|تقييم|مراجعة|آراء)/i);
  if (!match) return null;
  const value = Number(match[1].replace(/,/g, ""));
  return value >= 0 && value < 5000000 ? value : null;
}

function looksLikeProduct(url) {
  const href = url.toLowerCase();
  if (/[?&](q|k|search|s)=/.test(href) && !/\/dp\/|\/gp\/product/.test(href)) return false;
  if (/\/(catalog|search|slp)\/?\?/.test(href)) return false;
  return /(\.html|\/dp\/|\/gp\/product|\/p\/|product\/|\/egypt-en\/[^?]+|\/egypt-ar\/[^?]+)/.test(href);
}

async function fetchText(url, timeoutMs = 12000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: "text/plain, text/html, application/json;q=0.9,*/*;q=0.8" },
    });
    if (!res.ok) throw new Error(String(res.status));
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

async function readUrl(targetUrl) {
  const encoded = encodeURIComponent(targetUrl);
  const sources = [
    `https://r.jina.ai/${targetUrl}`,
    `https://api.allorigins.win/raw?url=${encoded}`,
    `https://corsproxy.io/?${encoded}`,
    `https://api.codetabs.com/v1/proxy?quest=${encoded}`,
  ];
  let lastError = null;
  for (const source of sources) {
    try {
      const text = await fetchText(source);
      if (text && text.length > 80 && !/anomaly-modal|Select all squares containing a duck/i.test(text)) {
        return text;
      }
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("blocked");
}

function parseSearchResults(text) {
  const found = [];
  const blocks = [...text.matchAll(/\d+\.\s*\[([^\]]+)\]\((https?:[^)\s]+)\)([\s\S]*?)(?=\n\d+\.\s*\[|$)/g)];
  if (blocks.length) {
    for (const match of blocks) {
      found.push({
        title: match[1].replace(/\*\*/g, "").trim(),
        url: decodeDuckLink(match[2]),
        snippet: match[3].replace(/\*\*/g, " ").replace(/\s+/g, " ").trim(),
      });
    }
    return found;
  }
  const markdownLinks = [...text.matchAll(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g)];
  for (const match of markdownLinks) {
    found.push({ title: match[1].replace(/\*\*/g, "").trim(), url: decodeDuckLink(match[2]) });
  }
  const html = document.createElement("div");
  html.innerHTML = text;
  html.querySelectorAll("a.result-link, a.result-title, a").forEach((anchor) => {
    const href = decodeDuckLink(anchor.href || anchor.getAttribute("href") || "");
    const title = (anchor.textContent || "").trim();
    if (href.startsWith("http") && title.length > 4) found.push({ title, url: href });
  });
  const snippets = [...text.matchAll(/result-snippet[^>]*>([\s\S]*?)<\/td>/gi)].map((m) =>
    m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
  );
  return found.map((item, index) => ({
    ...item,
    snippet: snippets[index] || "",
  }));
}

function toListing(item, extraText = "") {
  const store = matchStore(item.url);
  if (!store) return null;
  const blob = `${item.title}\n${item.snippet || ""}\n${extraText}`;
  return {
    id: item.url,
    title: item.title.replace(/\s+/g, " ").trim(),
    url: item.url,
    store,
    price: extractPrice(blob),
    rating: extractRating(blob),
    reviews: extractReviewCount(blob),
    used: Boolean(store.used),
    snippet: (item.snippet || extraText).replace(/\s+/g, " ").trim().slice(0, 220),
  };
}

function uniqueByUrl(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = item.url.replace(/\/$/, "").split("#")[0];
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function searchQueries(query) {
  const stores = [
    "site:jumia.com.eg",
    "site:amazon.eg",
    "site:2b.com.eg",
    "site:btech.com",
    "site:raneen.com",
    "site:noon.com/egypt",
    "site:carrefouregypt.com",
    "site:tradelinestores.com",
    "site:eg.pricena.com",
    "site:rayashop.com",
  ];
  return [
    `${query} (${stores.slice(0, 5).join(" OR ")}) EGP`,
    `${query} (${stores.slice(5).join(" OR ")}) سعر مصر`,
    `${query} سعر مصر جوميا نون أمازون بي تك تو بي`,
  ];
}

async function searchDuck(query) {
  const ddg = `https://lite.duckduckgo.com/lite/?q=${encodeURIComponent(query)}`;
  const text = await readUrl(ddg);
  return parseSearchResults(text);
}

async function enrich(listing) {
  if (listing.price && listing.rating) return listing;
  if (!looksLikeProduct(listing.url)) return listing;
  try {
    const text = await readUrl(listing.url);
    const price = listing.price || extractPrice(text);
    const rating = listing.rating || extractRating(text);
    const reviews = listing.reviews || extractReviewCount(text);
    const titleMatch = text.match(/^Title:\s*(.+)$/m);
    return {
      ...listing,
      title: titleMatch ? titleMatch[1].trim() : listing.title,
      price,
      rating,
      reviews,
      snippet: listing.snippet || text.replace(/\s+/g, " ").slice(0, 220),
    };
  } catch {
    return listing;
  }
}

function formatPrice(value) {
  if (value == null) return lang === "ar" ? "السعر غير ظاهر" : "Price not listed";
  return `${Math.round(value).toLocaleString(lang === "ar" ? "ar-EG" : "en-EG")} ${t().egp}`;
}

function starString(rating) {
  if (!rating) return t().noRating;
  const full = Math.round(rating);
  return `${"★".repeat(full)}${"☆".repeat(5 - full)} ${rating.toFixed(1)}`;
}

function renderStores(query) {
  const q = query || "iPhone 15";
  $("storeGrid").innerHTML = STORES.map((store) => {
    const label = lang === "ar" ? store.nameAr : store.name;
    return `<a href="${store.search(q)}" target="_blank" rel="noopener">${label}</a>`;
  }).join("");
}

function ranked() {
  const copy = listings.slice();
  copy.sort((a, b) => {
    if (sortKey === "rating") return (b.rating || 0) - (a.rating || 0);
    if (sortKey === "reviews") return (b.reviews || 0) - (a.reviews || 0);
    const ap = a.price == null ? Infinity : a.price;
    const bp = b.price == null ? Infinity : b.price;
    return ap - bp;
  });
  return copy;
}

function renderResults() {
  const dict = t();
  const rows = ranked();
  const priced = rows.map((r) => r.price).filter((n) => typeof n === "number").sort((a, b) => a - b);
  const best = priced[0];
  if (!rows.length) {
    $("summary").hidden = true;
    $("toolbar").hidden = true;
    $("results").innerHTML = "";
    return;
  }
  $("toolbar").hidden = false;
  if (priced.length) {
    const mid = priced[Math.floor(priced.length / 2)];
    $("summary").hidden = false;
    $("summary").innerHTML = [
      [dict.cheapest, formatPrice(priced[0])],
      [dict.median, formatPrice(mid)],
      [dict.highest, formatPrice(priced[priced.length - 1])],
    ].map(([label, value]) => `<div class="stat"><b>${value}</b><span>${label}</span></div>`).join("");
  } else {
    $("summary").hidden = true;
  }

  $("results").innerHTML = rows.map((item) => {
    const isBest = item.price != null && item.price === best;
    const storeName = lang === "ar" ? item.store.nameAr : item.store.name;
    const reviewText = item.reviews != null ? dict.reviews(item.reviews.toLocaleString(lang === "ar" ? "ar-EG" : "en-EG")) : "";
    return `
      <article class="card">
        <div class="card-top">
          <span class="store-pill${item.used ? " used" : ""}">${storeName}${item.used ? ` · ${dict.used}` : ""}</span>
          <div class="price${isBest ? " best" : ""}">${formatPrice(item.price)}${isBest ? `<span class="best-badge">${dict.best}</span>` : ""}</div>
        </div>
        <h3 class="title">${escapeHtml(item.title)}</h3>
        <div class="meta">
          <span class="stars">${starString(item.rating)}</span>
          ${reviewText ? `<span>${reviewText}</span>` : ""}
        </div>
        <div class="actions"><a href="${item.url}" target="_blank" rel="noopener">${dict.open}</a></div>
      </article>
    `;
  }).join("");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function setStatus(message, isError = false) {
  const el = $("status");
  if (!message) {
    el.hidden = true;
    el.textContent = "";
    return;
  }
  el.hidden = false;
  el.className = `status${isError ? " error" : ""}`;
  el.textContent = message;
}

async function runSearch(query) {
  const dict = t();
  listings = [];
  renderResults();
  renderStores(query);
  $("searchBtn").disabled = true;
  $("results").innerHTML = `<div class="skeleton"></div><div class="skeleton"></div><div class="skeleton"></div>`;
  setStatus(dict.searching);
  history.replaceState(null, "", `?q=${encodeURIComponent(query)}`);

  const collected = [];
  const queries = searchQueries(query);
  const settled = await Promise.allSettled(queries.map((q) => searchDuck(q)));
  for (const result of settled) {
    if (result.status !== "fulfilled") continue;
    for (const item of result.value) collected.push(item);
  }

  let mapped = uniqueByUrl(
    collected.map((item) => toListing(item)).filter(Boolean)
  ).slice(0, 24);

  if (mapped.length) {
    setStatus(dict.enriching);
    const needDetail = mapped.filter((item) => !item.price || looksLikeProduct(item.url)).slice(0, 8);
    const enriched = await Promise.allSettled(needDetail.map(enrich));
    const byUrl = new Map(mapped.map((item) => [item.url, item]));
    for (const result of enriched) {
      if (result.status === "fulfilled") byUrl.set(result.value.url, result.value);
    }
    mapped = [...byUrl.values()];
  }

  listings = mapped.filter((item) => matchStore(item.url));
  renderResults();
  $("searchBtn").disabled = false;

  if (!listings.length) {
    setStatus(dict.none, true);
    $("results").innerHTML = "";
    return;
  }
  const withPrice = listings.filter((item) => item.price != null).length;
  setStatus(withPrice ? dict.found(listings.length) : dict.none);
}

function boot() {
  applyI18n();
  $("langBtn").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    localStorage.setItem("qaren-lang", lang);
    applyI18n();
    renderResults();
  });
  document.querySelectorAll("[data-sort]").forEach((chip) => {
    chip.addEventListener("click", () => {
      sortKey = chip.getAttribute("data-sort");
      document.querySelectorAll("[data-sort]").forEach((c) => c.classList.toggle("active", c === chip));
      renderResults();
    });
  });
  $("searchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const query = $("q").value.trim();
    if (query) runSearch(query);
  });
  const params = new URLSearchParams(location.search);
  const preset = params.get("q");
  if (preset) {
    $("q").value = preset;
    runSearch(preset);
  }
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

boot();
