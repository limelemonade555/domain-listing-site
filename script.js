const domains = [
    { name: "kbanks.com", price: 70000 },
    { name: "gun88.com", price: 20499 },
    { name: "men88.com", price: 5199 },
    { name: "vec88.com", price: 10899 },
    { name: "bun88.com", price: 1999 },
    { name: "xom88.com", price: 1299 },
    { name: "keo99.com", price: 3299 },
    { name: "fun99.net", price: 5599 },
    { name: "xe88.net", price: 3899 },
    { name: "bh88.net", price: 3299 },
    { name: "fu88.net", price: 3499 },
    { name: "so88.win", price: 1299 },
    { name: "zo88.win", price: 1999 },
    { name: "s99.club", price: 1899 },
    { name: "bet9.club", price: 5099 },
    { name: "z88.top", price: 2299 },
    { name: "b88.top", price: 2899 },
    { name: "funbet.top", price: 12499 },
    { name: "vuavip.com", price: 20399 },
    { name: "somvip.com", price: 20399 },
    { name: "win8.club", price: 3399 },
    { name: "win8.win", price: 1199 },
    { name: "8vip.club", price: 1399 },
    { name: "8vip.win", price: 2799 },
    { name: "9vip.club", price: 1399 },
    { name: "9vip.win", price: 1799 },
    { name: "88vip.club", price: 1499 },
    { name: "99vip.win", price: 1899 },
    { name: "vip99.top", price: 2099 }
];

function displayDomains() {
    const comList = document.getElementById('com-domain-list');
    const otherList = document.getElementById('other-domain-list');
    
    // Clear existing content
    comList.innerHTML = '';
    otherList.innerHTML = '';
    
    domains.forEach(domain => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="domain-name">${domain.name}</td>
            <td class="domain-price">$${domain.price.toLocaleString()}</td>
        `;
        if (domain.name.endsWith('.com')) {
            comList.appendChild(row);
        } else {
            otherList.appendChild(row);
        }
    });
}

document.addEventListener('DOMContentLoaded', displayDomains);
