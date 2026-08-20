const I18N = {
  ar: {
    title: "بكام يا عمّو",
    franco: "bkam y 3mo",
    ask: "بكام يا عمّو؟",
    askSub: "قولي هتشتري إيه… وأنا أسأل السوق كله",
    searchLabel: "هتشتري إيه؟",
    placeholder: "ايفون 15 أو air fryer أو غسالة",
    search: "يلا",
    hint: "عربي أو إنجليزي. جوميا، أمازون مصر، نون، بي تك، تو بي، رنين وكارفور.",
    storesTitle: "أو افتحي المتاجر بنفسك",
    disclaimer: "الأسعار من نتائج عامة داخل مصر. أكّدي في المتجر قبل الشراء.",
    addHome: "على الآيفون: Safari ← مشاركة ← إضافة إلى الشاشة الرئيسية",
    searching: "بتسأل المتاجر يا عمّو…",
    enriching: "بتقرأ التقييمات والأسعار…",
    found: (n) => `لقيتلك ${n} عرض جوه مصر`,
    none: "مفيش سعر ظاهر دلوقتي. اضغطي المتاجر تحت — بتشتغل على الآيفون.",
    error: "بعض المواقع مقفلة. أزرار المتاجر تحت لسه شغالة.",
    cheapest: "الأرخص",
    median: "المتوسط",
    highest: "الأعلى",
    sortPrice: "السعر",
    sortRating: "التقييم",
    sortReviews: "عدد المراجعات",
    open: "شوفي العرض",
    used: "مستعمل",
    best: "أحلى سعر",
    reviews: (n) => `${n} مراجعة`,
    noRating: "مفيش تقييم ظاهر",
    egp: "ج.م",
    recent: "بحثتي عنهم",
    popular: "اختاري من هنا",
  },
  en: {
    title: "bkam y 3mo",
    franco: "بكام يا عمّو",
    ask: "bkam y 3mo?",
    askSub: "tell me what you're buying… I'll ask the whole market",
    searchLabel: "what are you buying?",
    placeholder: "iPhone 15 or ايفون 15 or air fryer",
    search: "yalla",
    hint: "Arabic or English. Jumia, Amazon.eg, Noon, B.TECH, 2B, Raneen, Carrefour — Egypt only.",
    storesTitle: "or open the stores yourself",
    disclaimer: "Prices come from public Egypt listings. Confirm on the store before buying.",
    addHome: "On iPhone: Safari → Share → Add to Home Screen",
    searching: "asking the stores, 3mo…",
    enriching: "reading prices and reviews…",
    found: (n) => `found you ${n} Egypt listings`,
    none: "no live price yet. tap the store buttons below — they work on iPhone.",
    error: "some sites blocked the read. the store buttons below still work.",
    cheapest: "lowest",
    median: "median",
    highest: "highest",
    sortPrice: "price",
    sortRating: "rating",
    sortReviews: "reviews",
    open: "see listing",
    used: "used",
    best: "best price",
    reviews: (n) => `${n} reviews`,
    noRating: "no public rating",
    egp: "EGP",
    recent: "you searched",
    popular: "pick one",
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
const RECENT_KEY = "bkam-recent";

const CATALOG = [
  { ar: "آيفون 13", en: "iPhone 13", aliases: ["ايفون 13", "iphone13"] },
  { ar: "آيفون 14", en: "iPhone 14", aliases: ["ايفون 14"] },
  { ar: "آيفون 15", en: "iPhone 15", aliases: ["ايفون 15", "ايفون ١٥"] },
  { ar: "آيفون 15 برو", en: "iPhone 15 Pro", aliases: ["ايفون 15 برو"] },
  { ar: "آيفون 16", en: "iPhone 16", aliases: ["ايفون 16"] },
  { ar: "آيفون 16 برو", en: "iPhone 16 Pro", aliases: ["ايفون 16 برو"] },
  { ar: "آيفون 16 برو ماكس", en: "iPhone 16 Pro Max", aliases: ["ايفون 16 برو ماكس"] },
  { ar: "آيفون 17", en: "iPhone 17", aliases: ["ايفون 17"] },
  { ar: "سامسونج جالاكسي S24", en: "Samsung Galaxy S24", aliases: ["s24", "جالاكسي s24"] },
  { ar: "سامسونج جالاكسي S25", en: "Samsung Galaxy S25", aliases: ["s25"] },
  { ar: "سامسونج جالاكسي A55", en: "Samsung Galaxy A55", aliases: ["a55"] },
  { ar: "ريدمي نوت 14", en: "Redmi Note 14", aliases: ["redmi", "شاومي"] },
  { ar: "إيربودز برو", en: "AirPods Pro", aliases: ["ايربودز", "airpods"] },
  { ar: "آيباد", en: "iPad", aliases: ["ايباد"] },
  { ar: "ماك بوك إير", en: "MacBook Air", aliases: ["ماكبوك", "macbook"] },
  { ar: "بلايستيشن 5", en: "PlayStation 5", aliases: ["ps5", "بلايستيشن"] },
  { ar: "قلاية هوائية", en: "air fryer", aliases: ["اير فراير", "ايرفراير", "airfryer"] },
  { ar: "غسالة فوق أوتوماتيك", en: "automatic washing machine", aliases: ["غسالة", "washing machine"] },
  { ar: "تكييف 1.5 حصان", en: "1.5 HP air conditioner", aliases: ["تكييف", "تكييفه", "air conditioner", "ac"] },
  { ar: "ثلاجة", en: "refrigerator", aliases: ["ثلاجه", "fridge"] },
  { ar: "تلفزيون 55 بوصة", en: "55 inch TV", aliases: ["تلفزيون", "شاشة", "smart tv"] },
  { ar: "مكنسة دايسون", en: "Dyson vacuum", aliases: ["دايسون", "dyson"] },
  { ar: "سخان مياه", en: "water heater", aliases: ["سخان"] },
  { ar: "بوتاجاز", en: "gas cooker", aliases: ["فرن", "stove"] },
  { ar: "ميكروويف", en: "microwave", aliases: ["مايكروويف"] },
  { ar: "خلاط", en: "blender", aliases: ["blender"] },
  { ar: "مكنسة كهربائية", en: "vacuum cleaner", aliases: ["مكنسة"] },
  { ar: "لابتوب جيمنج", en: "gaming laptop", aliases: ["لابتوب", "laptop"] },
  { ar: "سماعات بلوتوث", en: "bluetooth headphones", aliases: ["سماعات", "headphones"] },
  { ar: "باور بانك", en: "power bank", aliases: ["powerbank"] },
  { ar: "شاحن آيفون", en: "iPhone charger", aliases: ["شاحن"] },
  { ar: "ساعة آبل", en: "Apple Watch", aliases: ["ابل واتش", "apple watch"] },
  { ar: "عربية أطفال", en: "stroller", aliases: ["عربية بيبي"] },
  { ar: "حفاضات", en: "diapers", aliases: ["بامبرز", "pampers"] },
];

let lang = localStorage.getItem("qaren-lang") || "ar";
let listings = [];
let sortKey = "price";
let suggestItems = [];
let suggestIndex = -1;
let suggestTimer = 0;

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
  hideSuggest();
  rememberRecent(query);
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

function normalizeText(value) {
  return westernizeDigits(value)
    .toLowerCase()
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function catalogQuery(item) {
  return lang === "ar" ? item.ar : item.en;
}

function catalogHaystack(item) {
  return normalizeText([item.ar, item.en, ...(item.aliases || [])].join(" "));
}

function loadRecents() {
  try {
    const raw = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
    return Array.isArray(raw) ? raw.filter((item) => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function rememberRecent(query) {
  const next = [query, ...loadRecents().filter((item) => normalizeText(item) !== normalizeText(query))].slice(0, 8);
  localStorage.setItem(RECENT_KEY, JSON.stringify(next));
}

function localMatches(query) {
  const needle = normalizeText(query);
  if (!needle) {
    return CATALOG.slice(0, 8).map((item) => ({
      query: catalogQuery(item),
      main: catalogQuery(item),
      sub: lang === "ar" ? item.en : item.ar,
      group: "popular",
    }));
  }
  return CATALOG.filter((item) => catalogHaystack(item).includes(needle))
    .slice(0, 8)
    .map((item) => ({
      query: catalogQuery(item),
      main: catalogQuery(item),
      sub: lang === "ar" ? item.en : item.ar,
      group: "popular",
    }));
}

function recentMatches(query) {
  const needle = normalizeText(query);
  return loadRecents()
    .filter((item) => !needle || normalizeText(item).includes(needle))
    .slice(0, 5)
    .map((item) => ({ query: item, main: item, sub: "", group: "recent" }));
}

async function remoteMatches(query) {
  if (!query || query.length < 2) return [];
  const url = `https://suggestqueries.google.com/complete/search?client=firefox&hl=${lang === "ar" ? "ar" : "en"}&gl=eg&q=${encodeURIComponent(query)}`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const data = await res.json();
  const phrases = Array.isArray(data?.[1]) ? data[1] : [];
  return phrases.slice(0, 6).map((phrase) => ({
    query: String(phrase),
    main: String(phrase),
    sub: "",
    group: "popular",
  }));
}

function hideSuggest() {
  const list = $("suggestList");
  list.hidden = true;
  list.innerHTML = "";
  suggestItems = [];
  suggestIndex = -1;
  $("q").setAttribute("aria-expanded", "false");
}

function renderSuggest(groups) {
  const list = $("suggestList");
  const seen = new Set();
  suggestItems = [];
  const chunks = [];
  for (const [group, items] of groups) {
    const unique = items.filter((item) => {
      const key = normalizeText(item.query);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    if (!unique.length) continue;
    chunks.push(`<li class="suggest-group" role="presentation">${escapeHtml(t()[group] || group)}</li>`);
    unique.forEach((item) => {
      const index = suggestItems.length;
      suggestItems.push(item);
      chunks.push(`
        <li role="option" data-index="${index}" aria-selected="false">
          <span class="suggest-main">${escapeHtml(item.main)}</span>
          ${item.sub ? `<span class="suggest-sub">${escapeHtml(item.sub)}</span>` : ""}
        </li>
      `);
    });
  }
  if (!suggestItems.length) {
    hideSuggest();
    return;
  }
  list.innerHTML = chunks.join("");
  list.hidden = false;
  $("q").setAttribute("aria-expanded", "true");
  suggestIndex = -1;
}

function markSuggest() {
  $("suggestList").querySelectorAll("li[role='option']").forEach((el) => {
    el.setAttribute("aria-selected", el.getAttribute("data-index") === String(suggestIndex) ? "true" : "false");
  });
}

function pickSuggest(item) {
  if (!item) return;
  $("q").value = item.query;
  hideSuggest();
  runSearch(item.query);
}

async function updateSuggest() {
  const query = $("q").value.trim();
  const recents = recentMatches(query);
  const local = localMatches(query);
  renderSuggest([
    ["recent", recents],
    ["popular", local],
  ]);
  try {
    const remote = await remoteMatches(query);
    if ($("q").value.trim() !== query) return;
    renderSuggest([
      ["recent", recents],
      ["popular", [...local, ...remote]],
    ]);
  } catch {
    /* local suggestions are enough */
  }
}

function boot() {
  applyI18n();
  $("langBtn").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    localStorage.setItem("qaren-lang", lang);
    applyI18n();
    renderResults();
    hideSuggest();
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
    hideSuggest();
    const query = $("q").value.trim();
    if (query) runSearch(query);
  });

  const input = $("q");
  input.addEventListener("focus", () => updateSuggest());
  input.addEventListener("input", () => {
    clearTimeout(suggestTimer);
    suggestTimer = setTimeout(updateSuggest, 120);
  });
  input.addEventListener("keydown", (event) => {
    if ($("suggestList").hidden || !suggestItems.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      suggestIndex = (suggestIndex + 1) % suggestItems.length;
      markSuggest();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      suggestIndex = (suggestIndex - 1 + suggestItems.length) % suggestItems.length;
      markSuggest();
    } else if (event.key === "Enter" && suggestIndex >= 0) {
      event.preventDefault();
      pickSuggest(suggestItems[suggestIndex]);
    } else if (event.key === "Escape") {
      hideSuggest();
    }
  });
  $("suggestList").addEventListener("pointerdown", (event) => {
    const option = event.target.closest("li[data-index]");
    if (!option) return;
    event.preventDefault();
    pickSuggest(suggestItems[Number(option.getAttribute("data-index"))]);
  });
  document.addEventListener("pointerdown", (event) => {
    if (!event.target.closest(".suggest-wrap")) hideSuggest();
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
