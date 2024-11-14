// lubricant.js

const lubricantPrices = {
    backdoor: { msrp: 96.42, discounted: 0.9 * 96.42 },
    endless_love: { msrp: 33.30, discounted: 0.9 * 33.30 },
    fuck_sauce: { msrp: 38.00, discounted: 0.9 * 38.00 },
    fuck_sauce_momma: { msrp: 36.88, discounted: 0.9 * 36.88 },
    good_clean_love: { msrp: 48.52, discounted: 0.9 * 48.52 },
    intimate_earth: { msrp: 48.58, discounted: 0.9 * 48.58 },
    jizz: { msrp: 82.27, discounted: 0.9 * 82.27 },
    med_premium_glide: { msrp: 48.52, discounted: 0.9 * 48.52 },
    playboy: { msrp: 48.22, discounted: 0.9 * 48.22 },
    pussy_willow: { msrp: 45.53, discounted: 0.9 * 45.53 },
    sex_grease: { msrp: 52.50, discounted: 0.9 * 52.50 },
    swiss_navy: { msrp: 232.38, discounted: 0.9 * 232.38 },
    uranus_lube: { msrp: 48.22, discounted: 0.9 * 48.22 },
    wet_platinum: { msrp: 49.83, discounted: 0.9 * 49.83 },
    wicked: { msrp: 47.40, discounted: 0.9 * 47.40 },
    xtreme_glide: { msrp: 50.03, discounted: 0.9 * 50.03 }
};

// Function to get lubricant prices as a table in HTML
function getLubricantPrice() {
    let tableHTML = `
        <table>
            <tr>
                <th>Lubricant</th>
                <th>MSRP</th>
                <th>Discounted Price</th>
            </tr>`;

    // Loop through lubricants to add rows
    lubricants.forEach(item => {
        tableHTML += `
            <tr>
                <td>${item.lubricant}</td>
                <td>$${item.msrp.toFixed(2)}</td>
                <td>$${item.discounted.toFixed(2)}</td>
            </tr>`;
    });

    tableHTML += `</table>`;
    return tableHTML;
}

// Optional: Call this function to display the table in an HTML element
// Example usage in HTML: <div id="lubricant-table"></div>
document.getElementById("lubricant-table").innerHTML = getLubricantPrice();

// Function to get the MSRP or discounted price of a lubricant
function getLubricantPrice(lubricantName, type = "msrp") {
    return lubricantPrices[lubricantName] ? lubricantPrices[lubricantName][type] : null;
}
