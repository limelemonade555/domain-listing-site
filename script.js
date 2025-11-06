const domains = [
    { name: "gun88.com", price: 20,427 },
    { name: "fe88.com", price: 23,063 },
    { name: "men88.com", price: 5,197 },
    { name: "vec88.com", price: 10,823 },
    { name: "bun88.com", price: 1,942 },
    { name: "xom88.com", price: 1,200 },
    { name: "keo99.com", price: 3,265 },
    { name: "so88.win", price: 1,215 },
    { name: "vip99.top", price: 2,093 },
    { name: "s99.club", price: 1,823 },
    { name: "xe88.net", price: 3,860 },
    { name: "bet9.club", price: 5,019 },
    { name: "z88.top", price: 2,225 },
    { name: "b88.top", price: 2,808 },
    { name: "zo88.win", price: 1,956 },
    { name: "bh88.net", price: 3,236 },
    { name: "fu88.net", price: 3,478 }
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
