// vibrator.js

const vibratorPrices = {
    "3_rose_gold": { msrp: 379.83, discounted: 379.83 * 0.9, sku: "DOXY3US-RG" },
    berry_violet: { msrp: 220.52, discounted: 220.52 * 0.9, sku: "ZAF02712" },
    deep_rose: { msrp: 483.33, discounted: 483.33 * 0.9, sku: "LEL7840" },
    foxy_rasberry: { msrp: 230.35, discounted: 230.35 * 0.9, sku: "D0993-09-BX" },
    glimmers_set_pink: { msrp: 296.88, discounted: 296.88 * 0.9, sku: "LW028PNK" },
    greedy_girl_thrusting: { msrp: 225.00, discounted: 225.00 * 0.9, sku: "LH74956" },
    happy_rabbit: { msrp: 208.92, discounted: 208.92 * 0.9, sku: "LH71506" },
    heat_and_chill: { msrp: 238.40, discounted: 238.40 * 0.9, sku: "EN1171-2" },
    inmi_pulse_slider: { msrp: 194.57, discounted: 194.57 * 0.9, sku: "XRAH133" },
    inmi_sex_shaker: { msrp: 194.57, discounted: 194.57 * 0.9, sku: "XRAH085-BLK" },
    king_wine_red: { msrp: 297.27, discounted: 297.27 * 0.9, sku: "ZAF1802" },
    lelo_ida_cerise: { msrp: 247.27, discounted: 247.27 * 0.9, sku: "LEL7458" },
    midnight_blue: { msrp: 483.33, discounted: 483.33 * 0.9, sku: "LEL8144" },
    obsidian_black: { msrp: 541.15, discounted: 541.15 * 0.9, sku: "ZA-F03603" },
    peach_please: { msrp: 371.35, discounted: 371.35 * 0.9, sku: "LEL9035" },
    playboy_rapid_rabbit: { msrp: 200.90, discounted: 200.90 * 0.9, sku: "PBRS-1348-2" },
    rosegasm_wand: { msrp: 210.20, discounted: 210.20 * 0.9, sku: "XGSK1043" },
    rose_2: { msrp: 278.05, discounted: 278.05 * 0.9, sku: "LEL5935" },
    rotating_rabbit: { msrp: 218.85, discounted: 218.85 * 0.9, sku: "TRC024PUR" },
    slim_thumper: { msrp: 247.65, discounted: 247.65 * 0.9, sku: "SE4445-03-3" },
    smart_wand: { msrp: 371.35, discounted: 371.35 * 0.9, sku: "LEL7796" },
    super_sucker_pink: { msrp: 176.77, discounted: 176.77 * 0.9, sku: "EN4128-2" },
    the_queen_wand: { msrp: 220.52, discounted: 220.52 * 0.9, sku: "CQ23601" },
    thick_and_thrust: { msrp: 192.85, discounted: 192.85 * 0.9, sku: "EN2782-2" },
    thumper: { msrp: 301.80, discounted: 301.80 * 0.9, sku: "TRC025BLU" },
    too_hot_to_handle: { msrp: 230.35, discounted: 230.35 * 0.9, sku: "EN9390-2" },
    ultimate_pleasure_for_her: { msrp: 206.25, discounted: 206.25 * 0.9, sku: "PD4943-12" },
    ultimate_pleasure_gold: { msrp: 250.00, discounted: 250.00 * 0.9, sku: "PD4943-15" },
    ultimate_pleasure_pro: { msrp: 250.00, discounted: 250.00 * 0.9, sku: "PD4967-12" },
    velvet_purple: { msrp: 541.15, discounted: 541.15 * 0.9, sku: "ZA-F03602" },
    vive_thrusting_gspot: { msrp: 199.85, discounted: 199.85 * 0.9, sku: "VIVE051PUR" },
    wave_2_purple: { msrp: 371.35, discounted: 371.35 * 0.9, sku: "LEL8465" }
};

document.addEventListener("DOMContentLoaded", function () {
    updateProductDetails(vibratorPrices);
});