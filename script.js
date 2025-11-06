const domains = [
    { name: "startupviet.com", price: 1200 },
    { name: "techsolutions.vn", price: 800 },
    { name: "muabanonline.net", price: 600 },
    { name: "dulichviet.org", price: 950 },
    { name: "giaoduc24h.com", price: 1100 },
    { name: "suckoetoan.vn", price: 750 },
    { name: "thoitrangnam.vn", price: 850 },
    { name: "batdongsan24h.net", price: 1300 }
];

function displayDomains() {
    const tbody = document.getElementById('domain-list');
    
    domains.forEach(domain => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="domain-name">${domain.name}</td>
            <td class="domain-price">$${domain.price.toLocaleString()}</td>
        `;
        tbody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', displayDomains);
