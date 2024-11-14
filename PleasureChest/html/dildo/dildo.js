// dildo.js

const dildoPrices = {
    big_boy_chocolate: { msrp: 77.15, discounted: 0.9 * 77.15 },
    big_boy_vanilla: { msrp: 77.15, discounted: 0.9 * 77.15 },
    bold_beefy: { msrp: 52.85, discounted: 0.9 * 52.85 },
    ergo_mini: { msrp: 54.00, discounted: 0.9 * 54.00 },
    freedom: { msrp: 65.05, discounted: 0.9 * 65.05 },
    hot_n_cool: { msrp: 110.33, discounted: 0.9 * 110.33 },
    hot_pink: { msrp: 57.85, discounted: 0.9 * 57.85 },
    macho_latin: { msrp: 60.17, discounted: 0.9 * 60.17 },
    mister_perfect_beige: { msrp: 56.57, discounted: 0.9 * 56.57 },
    mister_perfect_chocolate: { msrp: 56.57, discounted: 0.9 * 56.57 },
    mocha: { msrp: 109.08, discounted: 0.9 * 109.08 },
    neon_blue: { msrp: 76.50, discounted: 0.9 * 76.50 },
    neon_purple: { msrp: 70.72, discounted: 0.9 * 70.72 },
    pounder: { msrp: 108.00, discounted: 0.9 * 108.00 },
    purple_haze: { msrp: 66.22, discounted: 0.9 * 66.22 },
    self_lubricating: { msrp: 50.15, discounted: 0.9 * 50.15 },
    sensa_feel_dildo: { msrp: 54.00, discounted: 0.9 * 54.00 },
    sexy_in_pink: { msrp: 124.45, discounted: 0.9 * 124.45 },
    suction_mocha: { msrp: 63.00, discounted: 0.9 * 63.00 },
    suko_indigo: { msrp: 69.42, discounted: 0.9 * 69.42 },
    summer: { msrp: 107.48, discounted: 0.9 * 107.48 },
    vanilla: { msrp: 109.08, discounted: 0.9 * 109.08 },
    vision_of_love: { msrp: 65.05, discounted: 0.9 * 65.05 },
    cocka_a_palooza: { msrp: 58.92, discounted: 0.9 * 58.92 },
    dual_density_dong: { msrp: 89.32, discounted: 0.9 * 89.32 },
    honey_play_box: { msrp: 140.00, discounted: 0.9 * 140.00 },
    king_cock: { msrp: 60.00, discounted: 0.9 * 60.00 },
    naked_addiction: { msrp: 35.73, discounted: 0.9 * 35.73 },
    naked_dual_sense: { msrp: 89.32, discounted: 0.9 * 89.32 },
    squirting_cock: { msrp: 98.88, discounted: 0.9 * 98.88 },
    vibrating_reptile: { msrp: 66.97, discounted: 0.9 * 66.97 },
    cobra: { msrp: 178.58, discounted: 0.9 * 178.58 },
    metallicaSiliconePink7: { msrp: 57.15, discounted: 0.9 * 57.15 },
    reptile: { msrp: 78.58, discounted: 0.9 * 78.58 },
    unicorn: { msrp: 78.58, discounted: 0.9 * 78.58 }
};

// Function to get the MSRP or discounted price of a dildo
function getDildoPrice(dildoName, type = "msrp") {
    return dildoPrices[dildoName] ? dildoPrices[dildoName][type] : null;
}

// Function to display dildo prices in an HTML table
function getDildoPriceTable() {
    let tableHTML = `
        <table>
            <tr>
                <th>Dildo</th>
                <th>MSRP</th>
                <th>Discounted Price</th>
            </tr>`;

    Object.keys(dildoPrices).forEach(item => {
        tableHTML += `
            <tr>
                <td>${item}</td>
                <td>$${dildoPrices[item].msrp.toFixed(2)}</td>
                <td>$${dildoPrices[item].discounted.toFixed(2)}</td>
            </tr>`;
    });

    tableHTML += `</table>`;
    return tableHTML;
}

// Optional: Call this function to display the table in an HTML element
// Example usage in HTML: <div id="dildo-table"></div>
document.getElementById("dildo-table").innerHTML = getDildoPriceTable();
