const domains = [
    { name: "kbanks.com", price: 70000 },
    { name: "gun88.com", price: 20427 },
    { name: "fe88.com", price: 23063 },
    { name: "men88.com", price: 5197 },
    { name: "vec88.com", price: 10823 },
    { name: "bun88.com", price: 1942 },
    { name: "xom88.com", price: 1200 },
    { name: "keo99.com", price: 3265 },
    { name: "so88.win", price: 1215 },
    { name: "vip99.top", price: 2093 },
    { name: "s99.club", price: 1823 },
    { name: "xe88.net", price: 3860 },
    { name: "bet9.club", price: 5019 },
    { name: "z88.top", price: 2225 },
    { name: "b88.top", price: 2808 },
    { name: "zo88.win", price: 1956 },
    { name: "bh88.net", price: 3236 },
    { name: "fu88.net", price: 3478 }
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
