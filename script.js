const form = document.getElementById('iceCreamForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const A = parseFloat(document.getElementById('milkSolidsNotFat').value);
    const B = parseFloat(document.getElementById('milkFat').value);

    // Validation
    if (A < 0 || A > 100) {
        showResult('Error: A must be between 0 and 100', '', '', true);
        return;
    }

    if (B < 0 || B > 100) {
        showResult('Error: B must be between 0 and 100', '', '', true);
        return;
    }

    if (A + B > 100) {
        showResult('Error: A + B cannot be more than 100', '', '', true);
        return;
    }

    // Calculate
    const x = A + B; // Total milk solids
    const y = B;     // Milk fat

    // Determine category
    let category, categoryName, description;

    if (x >= 15 && y >= 8) {
        category = 1;
        categoryName = 'Ice Cream';
        description = `Premium quality! With ${x.toFixed(1)}% milk solids and ${y.toFixed(1)}% milk fat, this is classified as Ice Cream - the highest quality category.`;
    } else if (x >= 10 && y >= 3) {
        category = 2;
        categoryName = 'Ice Milk';
        description = `Good quality! With ${x.toFixed(1)}% milk solids and ${y.toFixed(1)}% milk fat, this is classified as Ice Milk.`;
    } else if (x >= 3) {
        category = 3;
        categoryName = 'Lacto Ice';
        description = `Standard quality! With ${x.toFixed(1)}% milk solids, this is classified as Lacto Ice.`;
    } else {
        category = 4;
        categoryName = 'Flavored Ice';
        description = `Basic quality! With only ${x.toFixed(1)}% milk solids, this is classified as Flavored Ice.`;
    }

    showResult(categoryName, `Category: ${category}`, description, false);
});

function showResult(title, subtitle, description, isError, emoji = '') {
    resultDiv.className = 'result show ' + (isError ? 'result-error' : 'result-success');
    resultDiv.innerHTML = `
        <div class="result-title">${title}</div>
        ${subtitle ? `<div class="result-category">${subtitle}</div>` : ''}
        ${description ? `<div class="result-description">${description}</div>` : ''}
    `;
}