const plans = {
  relaxed: [
    {
      date: "6/2",
      weekday: "周二",
      title: "合肥飞三亚，晚上只做一件事：入住近海房",
      text: "到凤凰机场后直接打车到三亚湾或大东海。若 21:30 后到，不安排正餐海鲜，吃清补凉、抱罗粉或椰子鸡简餐，早点睡。",
      meta: ["住三亚湾更顺路", "机场到三亚湾约20分钟", "今晚不赶景点"],
    },
    {
      date: "6/3",
      weekday: "周三",
      title: "西岛、渔村和牛王岭日落",
      text: "上午上岛，避开正午暴晒后逛渔村、牛王岭和海边栈道。西岛更贴近你要的沙滩、近海、拍照和轻度赶海感，晚上回市区吃第一顿海鲜。",
      meta: ["防晒衣必带", "看当天低潮", "海鲜先问加工费"],
    },
    {
      date: "6/4",
      weekday: "周四",
      title: "南山或鹿回头，傍晚留给椰梦长廊",
      text: "想看经典大景点选南山文化旅游区；想轻松一些就睡到自然醒，下午去鹿回头看城市海湾。17:30 后去椰梦长廊等日落。",
      meta: ["二选一别贪多", "中午回酒店休息", "日落机位优先"],
    },
    {
      date: "6/5",
      weekday: "周五",
      title: "后海冲浪/蜈支洲岛二选一，晚动车到海口",
      text: "想体验项目去后海或蜈支洲岛，想省钱就改成亚龙湾沙滩和咖啡。傍晚坐动车到海口东，入住骑楼老街或海口湾附近。",
      meta: ["水上项目看风浪", "动车提前买票", "住海口湾方便夜骑"],
    },
    {
      date: "6/6",
      weekday: "周六",
      title: "骑楼老街、老爸茶、云洞图书馆和海口湾",
      text: "上午老爸茶，午后骑楼老街和水巷口。16:30 后去云洞图书馆、世纪大桥、海口湾，傍晚骑行或散步，晚上吃夜市小吃。",
      meta: ["云洞提前预约", "海口湾傍晚更舒服", "夜市少量多样"],
    },
    {
      date: "6/7",
      weekday: "周日",
      title: "火山口或省博收尾，海口飞回合肥",
      text: "上午去雷琼海口火山群世界地质公园，怕晒就改海南省博物馆。下午根据航班去美兰机场，返程前补买清补凉、椰子糕等轻伴手礼。",
      meta: ["户外放上午", "美兰机场可连动车", "返程留2小时以上"],
    },
  ],
  compact: [
    {
      date: "6/2",
      weekday: "周二",
      title: "合肥飞三亚，入住三亚湾",
      text: "晚到不排景点，酒店选三亚湾/大东海近海房。下飞机后只做入住、宵夜和补水。",
      meta: ["近海房", "轻宵夜", "早点休息"],
    },
    {
      date: "6/3",
      weekday: "周三",
      title: "西岛完整日，晚上吃海鲜",
      text: "把三亚的海岛体验压缩到西岛一天：沙滩、渔村、牛王岭、低潮观察。晚餐安排海鲜，别叠加南山或蜈支洲。",
      meta: ["一岛足够", "别排太满", "低潮看潮汐"],
    },
    {
      date: "6/4",
      weekday: "周四",
      title: "南山/鹿回头二选一，椰梦长廊日落",
      text: "上午二选一，下午回酒店避晒，傍晚椰梦长廊。若前一天太累，直接改成睡醒、大东海、椰梦长廊。",
      meta: ["中午休息", "日落必留", "水上项目可跳过"],
    },
    {
      date: "6/5",
      weekday: "周五",
      title: "上午动车去海口，下午骑楼老街和云洞",
      text: "退房后坐动车到海口东，午后去骑楼老街、水巷口，傍晚云洞图书馆和海口湾。当天不要再排火山口。",
      meta: ["上午转场", "下午 citywalk", "傍晚骑行"],
    },
    {
      date: "6/6",
      weekday: "周六",
      title: "老爸茶、火山口或省博，晚上返合肥",
      text: "上午老爸茶，之后按天气选火山口或海南省博物馆。晚航班回合肥，给市区到美兰机场预留 60-90 分钟。",
      meta: ["火山口怕晒", "省博是雨天备选", "别压线去机场"],
    },
  ],
};

const budgets = {
  low: [
    ["机票/动车", "¥1,300-2,300", "早晚航班、少托运行李，三亚到海口坐动车。"],
    ["住宿", "¥900-1,500", "近海但不追一线海景，三亚 2 晚、海口 2 晚。"],
    ["餐饮", "¥700-1,000", "海鲜控制一顿，其他用粉面、老爸茶和夜市补齐。"],
    ["门票/项目", "¥300-700", "西岛或南山择一，少做高价水上项目。"],
  ],
  comfort: [
    ["机票/动车", "¥1,600-2,800", "优先少折腾的航班，动车按返程机场衔接。"],
    ["住宿", "¥1,400-2,400", "三亚住海景/近海，海口住骑楼老街或海口湾。"],
    ["餐饮", "¥900-1,400", "三亚海鲜一到两顿，海口留老爸茶和夜市。"],
    ["门票/项目", "¥600-1,200", "西岛、南山/鹿回头、火山口，留一次体验项目。"],
  ],
  plus: [
    ["机票/动车", "¥2,000-3,500", "选择更好时段，减少红眼和长等待。"],
    ["住宿", "¥2,200-3,800", "三亚一线海景或带泳池，海口住海口湾。"],
    ["餐饮", "¥1,300-2,000", "海鲜、糟粕醋、椰子鸡都安排，但避免连续重餐。"],
    ["门票/项目", "¥1,200-2,500", "蜈支洲/后海冲浪、旅拍或水上项目另算。"],
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
    ".signal, .vibe-card, .pick, .food-board article, .prep-grid article, .note-card",
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
