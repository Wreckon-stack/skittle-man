/* ===================================================== */
/* SKITTLE MAN — script.js                               */
/* Spawns the floating candies + the sugar meter wiggle. */
/* No frameworks, no backend — just a bit of fun.        */
/* ===================================================== */

// ---- SETTINGS you can tweak ----
const CANDY_COUNT = 26;                  // how many floating candies
const CANDY_LETTER = "S";                // letter shown on each candy
const CANDY_COLORS = [                   // Skittle-style colors
  "#e80f23", // red
  "#ff7a00", // orange
  "#ffe600", // yellow
  "#19c93a", // green
  "#8a2be2", // purple
];

// Grab the layer we drop candies into
const layer = document.getElementById("candy-layer");

/**
 * Create a single floating candy and add it to the page.
 */
function makeCandy() {
  const candy = document.createElement("div");
  candy.className = "candy";
  candy.textContent = CANDY_LETTER;

  // Random size between 18px and 54px
  const size = 18 + Math.random() * 36;

  // Random color from the list
  const color = CANDY_COLORS[Math.floor(Math.random() * CANDY_COLORS.length)];

  // Random horizontal position
  const left = Math.random() * 100;

  // Random speed + delay so they don't all move together
  const duration = 9 + Math.random() * 12;   // 9s – 21s
  const delay = Math.random() * 12;          // 0s – 12s

  candy.style.width = size + "px";
  candy.style.height = size + "px";
  candy.style.left = left + "vw";
  candy.style.background = color;
  candy.style.fontSize = size * 0.5 + "px";
  candy.style.animationDuration = duration + "s";
  candy.style.animationDelay = "-" + delay + "s"; // negative = start mid-flight

  layer.appendChild(candy);
}

// Spawn all the candies once the page is ready
for (let i = 0; i < CANDY_COUNT; i++) {
  makeCandy();
}

/* ===================================================== */
/* SUGAR METER — bounces around near 100% for fun        */
/* ===================================================== */
const percentEl = document.getElementById("sugar-percent");
const fillEl = document.getElementById("sugar-fill");

setInterval(() => {
  // Wiggle between 96% and 100% so it always looks "maxed out"
  const value = 96 + Math.floor(Math.random() * 5); // 96–100
  if (percentEl) percentEl.textContent = value + "%";
  if (fillEl) fillEl.style.width = value + "%";
}, 900);
