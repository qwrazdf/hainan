const plans = {
  relaxed: [
    {
      date: "6/2",
      weekday: "周二",
      title: "合肥飞三亚，晚上只做一件事：入住椰梦长廊",
      text: "到凤凰机场后直接打车到椰梦长廊一带。若 21:30 后到，不安排正餐海鲜，吃清补凉、抱罗粉或椰子鸡简餐，早点睡。",
      meta: ["住椰梦长廊", "机场近", "今晚不赶景点"],
    },
    {
      date: "6/3",
      weekday: "周三",
      title: "三亚 Day1：西岛、牛王岭和椰梦长廊日落",
      text: "上午从椰梦长廊去肖旗港码头上西岛，逛渔村、海边小路、珊瑚石墙；下午去牛王岭、乌龟滩和礁石海岸，看潮汐做轻度赶海观察。17:00 前后离岛，回椰梦长廊看日落，晚上吃海鲜。",
      meta: ["西岛默认主线", "看潮汐", "椰梦长廊日落"],
    },
    {
      date: "6/4",
      weekday: "周四",
      title: "三亚 Day2：亚龙湾/太阳湾，免税城可选",
      text: "上午去亚龙湾热带天堂森林公园或太阳湾公路，午后留给亚龙湾公共海滩拍蓝海、沙滩和比基尼。16:30 后二选一：轻松版回椰梦长廊看日落；购物版去海棠湾 cdf，但当天会更累。",
      meta: ["补海水沙滩", "cdf可选", "别把免税硬塞"],
    },
    {
      date: "6/5",
      weekday: "周五",
      title: "三亚 Day3：天涯小镇或南山，半山半岛和鹿回头，晚上到海口",
      text: "推荐轻松拍照版：天涯小镇、午餐、回酒店收拾休息，下午去半山半岛帆船港和鹿回头。若很想看南山，就把上午改成南山 + 天涯小镇，取消半山半岛。",
      meta: ["天涯小镇优先", "南山备选", "晚上动车去海口"],
    },
    {
      date: "6/6",
      weekday: "周六",
      title: "海口 Day2：老爸茶、日月广场免税、云洞和海口湾",
      text: "上午老爸茶，之后去日月广场免税店买香水化妆品；想逛大店再改海口国际免税城。下午云洞图书馆或天空之山，傍晚海口湾和世纪大桥，晚上夜市。",
      meta: ["日月广场最顺", "云洞提前预约", "海口湾傍晚"],
    },
    {
      date: "6/7",
      weekday: "周日",
      title: "海口 Day3：轻松早餐、补买免税，回合肥",
      text: "根据航班安排轻松早餐、老街补逛或美兰机场免税店补货。返程前留足去机场和提货时间，不把最后一天排成赶路。",
      meta: ["机场补货", "留足提货时间", "回合肥"],
    },
  ],
  compact: [
    {
      date: "6/2",
      weekday: "周二",
      title: "合肥飞三亚，入住椰梦长廊",
      text: "晚到不排景点，酒店选椰梦长廊近海房。下飞机后只做入住、宵夜和补水。",
      meta: ["近海房", "轻宵夜", "早点休息"],
    },
    {
      date: "6/3",
      weekday: "周三",
      title: "西岛完整日，晚上椰梦长廊",
      text: "把三亚的海岛体验压缩到西岛一天：渔村、牛王岭、乌龟滩、低潮观察。晚上海鲜和椰梦长廊日落。",
      meta: ["西岛主线", "别排太满", "低潮看潮汐"],
    },
    {
      date: "6/4",
      weekday: "周四",
      title: "亚龙湾/太阳湾，免税可跳过",
      text: "上午太阳湾或森林公园，下午亚龙湾公共海滩。若不想赶路，别去海棠湾 cdf，把香水化妆品留到海口日月广场。",
      meta: ["补海水颜值", "cdf可选", "免税放海口"],
    },
    {
      date: "6/5",
      weekday: "周五",
      title: "天涯小镇、半山半岛和鹿回头，晚上到海口",
      text: "上午天涯小镇，下午回酒店休息收拾，再去半山半岛帆船港和鹿回头。晚上动车到海口，轻逛骑楼老街。",
      meta: ["天涯小镇拍照", "鹿回头傍晚", "晚上到海口"],
    },
    {
      date: "6/6",
      weekday: "周六",
      title: "老爸茶、日月广场免税、云洞，晚上返合肥",
      text: "上午老爸茶和日月广场免税店，下午云洞图书馆或海口湾。晚航班回合肥，给市区到美兰机场和提货预留时间。",
      meta: ["日月广场免税", "云洞/海口湾", "别压线去机场"],
    },
  ],
};

const budgets = {
  low: [
    ["机票/动车", "¥1,300-2,300", "早晚航班、少托运行李，三亚到海口坐动车。"],
    ["住宿", "¥1,100-1,900", "近海但不追一线海景，三亚 3 晚、海口 2 晚。"],
    ["餐饮", "¥700-1,000", "海鲜控制一顿，其他用粉面、老爸茶和夜市补齐。"],
    ["门票/项目/购物", "¥400-1,000+", "西岛、亚龙湾、鹿回头为主；免税购物按香化清单另算。"],
  ],
  comfort: [
    ["机票/动车", "¥1,600-2,800", "优先少折腾的航班，动车按返程机场衔接。"],
    ["住宿", "¥1,700-2,900", "三亚 3 晚住海景/近海，海口 2 晚住骑楼老街或海口湾。"],
    ["餐饮", "¥900-1,400", "椰梦长廊住处周边吃饭方便，三亚海鲜一到两顿，海口留老爸茶和夜市。"],
    ["门票/项目/购物", "¥700-1,600+", "西岛、亚龙湾、鹿回头、海口城市点位；免税香化另算。"],
  ],
  plus: [
    ["机票/动车", "¥2,000-3,500", "选择更好时段，减少红眼和长等待。"],
    ["住宿", "¥2,600-4,600", "三亚一线海景或带泳池住 3 晚，海口住海口湾。"],
    ["餐饮", "¥1,300-2,000", "海鲜、糟粕醋、椰子鸡都安排，但避免连续重餐。"],
    ["门票/项目/购物", "¥1,200-2,500+", "蜈支洲/后海冲浪、旅拍或水上项目另算；免税店按购买清单另算。"],
  ],
};

const timeline = document.querySelector("#timeline");
const planButtons = document.querySelectorAll(".plan-toggle");
const budgetButtons = document.querySelectorAll(".budget-toggle");
const budgetGrid = document.querySelector("#budgetGrid");
const scrollProgress = document.querySelector("#scrollProgress");
const copyButton = document.querySelector("#copyLink");
const copyStatus = document.querySelector("#copyStatus");
const noteInput = document.querySelector("#tripNote");
const noteCount = document.querySelector("#noteCount");
const noteStatus = document.querySelector("#noteStatus");
const clearNoteButton = document.querySelector("#clearNote");
const copyNoteButton = document.querySelector("#copyNote");
const submitIssueButton = document.querySelector("#submitIssue");
const noteStorageKey = "hainan-trip-note";
const feedbackRepo = "qwrazdf/hainan";

const revealObserver =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14 },
      )
    : null;

function observeReveals(nodes) {
  nodes.forEach((node) => {
    if (!node.classList.contains("reveal")) {
      node.classList.add("reveal");
    }

    if (revealObserver) {
      revealObserver.observe(node);
    } else {
      node.classList.add("visible");
    }
  });
}

function renderPlan(planName) {
  timeline.innerHTML = plans[planName]
    .map(
      (day) => `
        <article class="day-card reveal">
          <div class="day-date">
            <span>${day.weekday}</span>
            <strong>${day.date}</strong>
          </div>
          <div>
            <h3>${day.title}</h3>
            <p>${day.text}</p>
            <ul class="day-meta">
              ${day.meta.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        </article>
      `,
    )
    .join("");
  observeReveals(timeline.querySelectorAll(".reveal"));
}

function renderBudget(mode) {
  budgetGrid.innerHTML = budgets[mode]
    .map(
      ([title, range, note]) => `
        <article class="budget-card reveal">
          <h3>${title}</h3>
          <span class="budget-number">${range}</span>
          <p>${note}</p>
        </article>
      `,
    )
    .join("");
  observeReveals(budgetGrid.querySelectorAll(".reveal"));
}

planButtons.forEach((button) => {
  button.addEventListener("click", () => {
    planButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderPlan(button.dataset.plan);
  });
});

budgetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    budgetButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderBudget(button.dataset.budget);
  });
});

renderPlan("relaxed");
renderBudget("comfort");
observeReveals(
  document.querySelectorAll(
    ".signal, .map-shell, .route-cards article, .vibe-card, .pick, .food-board article, .prep-grid article, .note-card",
  ),
);

function updateScrollProgress() {
  if (!scrollProgress) {
    return;
  }

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  scrollProgress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();

async function copyShareLink() {
  const text = window.location.href;

  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "已复制";
  } catch {
    const input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    copyStatus.textContent = "已复制";
  }

  window.setTimeout(() => {
    copyStatus.textContent = "";
  }, 1800);
}

if (copyButton) {
  copyButton.addEventListener("click", copyShareLink);
}

function setNoteStatus(text) {
  if (!noteStatus) {
    return;
  }

  noteStatus.textContent = text;
}

function updateNoteCount() {
  if (!noteInput || !noteCount) {
    return;
  }

  noteCount.textContent = `${noteInput.value.length}/900`;
}

function saveNote() {
  if (!noteInput) {
    return;
  }

  localStorage.setItem(noteStorageKey, noteInput.value);
  updateNoteCount();
  setNoteStatus("已保存在本机浏览器。");
}

async function copyNote() {
  if (!noteInput) {
    return;
  }

  const text = noteInput.value.trim();
  if (!text) {
    setNoteStatus("先写一点备注，再复制。");
    return;
  }

  try {
    await navigator.clipboard.writeText(text);
  } catch {
    noteInput.select();
    document.execCommand("copy");
  }

  setNoteStatus("备注已复制。");
}

function clearNote() {
  if (!noteInput) {
    return;
  }

  noteInput.value = "";
  localStorage.removeItem(noteStorageKey);
  updateNoteCount();
  setNoteStatus("已清空本机备注。");
}

function openIssueDraft() {
  if (!noteInput) {
    return;
  }

  const note = noteInput.value.trim();
  const body = [
    "我对海南旅行计划的备注：",
    "",
    note || "（这里写路线建议、想吃的店、要带的东西）",
    "",
    `页面：${window.location.href}`,
  ].join("\n");
  const params = new URLSearchParams({
    title: "海南旅行计划备注",
    body,
  });
  const issueUrl = `https://github.com/${feedbackRepo}/issues/new?${params.toString()}`;
  window.open(issueUrl, "_blank", "noopener,noreferrer");
  setNoteStatus("已打开 GitHub Issue 草稿，登录后提交即可公开给我。");
}

if (noteInput) {
  noteInput.value = localStorage.getItem(noteStorageKey) || "";
  updateNoteCount();
  noteInput.addEventListener("input", saveNote);
}

if (copyNoteButton) {
  copyNoteButton.addEventListener("click", copyNote);
}

if (clearNoteButton) {
  clearNoteButton.addEventListener("click", clearNote);
}

if (submitIssueButton) {
  submitIssueButton.addEventListener("click", openIssueDraft);
}

if (window.lucide) {
  window.lucide.createIcons();
}
