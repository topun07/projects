// lubricant.js

const lubricantPrices = {
  backdoor: { msrp: 96.42, discounted: 0.9 * 96.42, sku: "PG1700-08" },
  endless_love: { msrp: 33.3, discounted: 0.9 * 33.3, sku: "BA3000-03" },
  fuck_sauce: { msrp: 38.0, discounted: 0.9 * 38.0, sku: "SE2411-10-1" },
  fuck_sauce_slick: {
    msrp: 36.88,
    discounted: 0.9 * 36.88,
    sku: "SE2404-30-1",
  },
  good_clean_love: { msrp: 48.52, discounted: 0.9 * 48.52, sku: "GCL200402" },
  intimate_earth: { msrp: 48.58, discounted: 0.9 * 48.58, sku: "PP052-1" },
  jizz: { msrp: 82.27, discounted: 0.9 * 82.27, sku: "XRAH048-34" },
  med_premium_glide: { msrp: 48.52, discounted: 0.9 * 48.22, sku: "PG2510-00" },
  playboy: { msrp: 48.22, discounted: 0.9 * 48.22, sku: "PB-LQ-2093-2" },
  pussy_willow: { msrp: 45.53, discounted: 0.9 * 45.53, sku: "PP054-8" },
  sex_grease: { msrp: 52.5, discounted: 0.9 * 52.5, sku: "WL1801-08" },
  swiss_navy: { msrp: 232.38, discounted: 0.9 * 232.38, sku: "MD5000-32" },
  uranus_lube: { msrp: 48.22, discounted: 0.9 * 48.22, sku: "WT35008" },
  wet_platinum: { msrp: 49.83, discounted: 0.9 * 49.83, sku: "WT27006" },
  wicked: { msrp: 47.4, discounted: 0.9 * 47.4, sku: "WS91310" },
  xtreme_glide: { msrp: 50.03, discounted: 0.9 * 50.03, sku: "BA1430-01" },
};

const productTitles = {
  backdoor: "Backdoor Bliss: Ultimate Comfort",
  endless_love: "Endless Love: Forever Slick",
  fuck_sauce: "Fuck Sauce: Premium Glide",
  fuck_sauce_slick: "Fuck Sauce Slick: Smooth Satisfaction",
  good_clean_love: "Good Clean Love: Natural Intimacy",
  intimate_earth: "Intimate Earth: Pure Passion",
  jizz: "Jizz: Liquid Ecstasy",
  med_premium_glide: "Med Premium Glide: Professional Smoothness",
  playboy: "Playboy: Playful Pleasure",
  pussy_willow: "Pussy Willow: Soft and Wild",
  sex_grease: "Sex Grease: Extreme Lubricity",
  swiss_navy: "Swiss Navy: High-End Elegance",
  uranus_lube: "Uranus Lube: Cosmic Comfort",
  wet_platinum: "Wet Platinum: Endless Luxury",
  wicked: "Wicked: Sinfully Smooth",
  xtreme_glide: "Xtreme Glide: Adventure Ready",
};

document.addEventListener("DOMContentLoaded", function () {
  updateProductDetails(lubricantPrices);
});
