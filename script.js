// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const currentYear = document.getElementById('current-year');
const catalogGrid = document.getElementById('catalog-grid');
const carModal = document.getElementById('car-modal');
const closeModal = document.querySelector('.close-modal');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const modalBody = document.getElementById('modal-body');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Set current year in footer
currentYear.textContent = new Date().getFullYear();

// Car Data from the specification
const carData = {
    // MPV Category
    mpv: [
        {
            model: "ALL NEW ALPHARD HEV",
            image: "Alphard.png",
            description: "MPV premium dengan teknologi hybrid terbaru",
            variants: [
                { variant: "2.5 G CVT", price: "IDR 1.647.900.000" },
                { variant: "2.5 G CVT", price: "IDR 1.651.400.000" },
                { variant: "2.5 HYBRID CVT", price: "IDR 1.733.000.000" },
                { variant: "2.5 HYBRID CVT", price: "IDR 1.736.600.000" }
            ]
        },
        {
            model: "ALL NEW AVANZA",
            image: "Avanza.png",
            description: "MPV keluarga dengan performa tangguh",
            variants: [
                { variant: "1.3 E M/T", price: "IDR 243.000.000" },
                { variant: "1.3 E CVT", price: "IDR 258.000.000" },
                { variant: "1.5 G M/T", price: "IDR 266.000.000" },
                { variant: "1.5 G CVT", price: "IDR 280.800.000" },
                { variant: "1.5 G CVT TSS", price: "IDR 307.700.000" }
            ]
        },
        {
            model: "ALL NEW VELLFIRE",
            image: "Vellfire.png",
            description: "MPV mewah dengan desain futuristik",
            variants: [
                { variant: "2.5 VIP HYBRID CVT", price: "IDR 1.868.100.000" },
                { variant: "2.5 VIP HYBRID CVT (Pre. Color)", price: "IDR 1.871.600.000" }
            ]
        },
        {
            model: "ALL NEW VELOZ",
            image: "Veloz.png",
            description: "MPV sporty dengan teknologi terbaru",
            variants: [
                { variant: "1.5 M/T", price: "IDR 297.200.000" },
                { variant: "1.5 CVT", price: "IDR 313.200.000" },
                { variant: "1.5 Q CVT", price: "IDR 322.400.000" },
                { variant: "1.5 Q CVT TSS", price: "IDR 344.900.000" }
            ]
        },
        {
            model: "ALL NEW VOXY",
            image: "Voxy.png",
            description: "MPV serbaguna untuk keluarga",
            variants: [
                { variant: "2.0 AT PREMIUM COLOUR", price: "IDR 633.400.000" }
            ]
        },
        {
            model: "INNOVA ZENIX HEV",
            image: "Zenix.png",
            description: "MPV hybrid dengan efisiensi bahan bakar tinggi",
            variants: [
                { variant: "2.0 G CVT", price: "IDR 436.100.000" },
                { variant: "2.0 V CVT", price: "IDR 482.600.000" },
                { variant: "2.0 V CVT NON RSE", price: "IDR 474.300.000" },
                { variant: "2.0 G HV CVT", price: "IDR 473.400.000" },
                { variant: "2.0 V HV MOD CVT", price: "IDR 547.100.000" },
                { variant: "2.0 V HV MOD CVT NON RSE", price: "IDR 538.700.000" },
                { variant: "2.0 V HV CVT", price: "IDR 537.100.000" },
                { variant: "2.0 V HV CVT NON RSE", price: "IDR 528.800.000" },
                { variant: "2.0 Q HV MOD CVT TSS", price: "IDR 625.300.000" },
                { variant: "2.0 Q HV MOD CVT TSS NON RSE", price: "IDR 617.000.000" },
                { variant: "2.0 Q HV CVT TSS", price: "IDR 615.400.000" },
                { variant: "Premium Color +", price: "IDR 3.000.000" }
            ]
        },
        {
            model: "NEW KIJANG INNOVA",
            image: "Inova.png",
            description: "Legenda MPV Indonesia",
            variants: [
                { variant: "2.0 G M/T BSN", price: "IDR 389.100.000" },
                { variant: "2.4 G M/T DSL", price: "IDR 416.600.000" },
                { variant: "2.4 G A/T DSL", price: "IDR 437.500.000" }
            ]
        }
    ],
    
    // SUV Category
    suv: [
        {
            model: "ALL NEW LAND CRUISER",
            image: "LC.png",
            description: "SUV legendaris dengan kemampuan off-road terbaik",
            variants: [
                { variant: "VX-R 4X4 A/T", price: "IDR 2.626.700.000" },
                { variant: "VX-R 4X4 A/T PC", price: "IDR 2.629.700.000" },
                { variant: "GR-S 4X4 AT", price: "IDR 2.702.100.000" },
                { variant: "GR-S 4X4 AT PC", price: "IDR 2.705.000.000" }
            ]
        },
        {
            model: "ALL NEW RAIZE",
            image: "Raize.png",
            description: "SUV urban compact dengan desain sporty",
            variants: [
                { variant: "1.0T G M/T ONE TONE", price: "IDR 262.000.000" },
                { variant: "1.0T G CVT ONE TONE", price: "IDR 277.100.000" },
                { variant: "1.0T G CVT TWO TONE", price: "IDR 279.800.000" },
                { variant: "1.0T GR SPORT CVT ONE TONE", price: "IDR 291.300.000" },
                { variant: "1.0T GR SPORT CVT TWO TONE", price: "IDR 293.900.000" },
                { variant: "1.0T GR SPORT CVT TSS ONE TONE", price: "IDR 313.600.000" },
                { variant: "1.0T GR SPORT CVT TSS TWO TONE", price: "IDR 316.300.000" },
                { variant: "1.2 G M/T ONE TONE", price: "IDR 242.200.000" },
                { variant: "1.2 G CVT ONE TONE", price: "IDR 257.300.000" }
            ]
        },
        {
            model: "ALL NEW YARIS CROSS HEV",
            image: "Yaris.png",
            description: "SUV crossover hybrid dengan teknologi modern",
            variants: [
                { variant: "1.5 G MT", price: "IDR 358.700.000" },
                { variant: "1.5 G CVT", price: "IDR 371.800.000" },
                { variant: "1.5 S CVT TSS", price: "IDR 416.400.000" },
                { variant: "1.5 S CVT TSS (Pre Color)", price: "IDR 418.900.000" },
                { variant: "1.5 S GR CVT TSS", price: "IDR 425.800.000" },
                { variant: "1.5 S GR CVT TSS (Pre Color)", price: "IDR 428.800.000" },
                { variant: "1.5 S HV CVT TSS", price: "IDR 437.300.000" },
                { variant: "1.5 S HV CVT TSS (Pre Color)", price: "IDR 439.700.000" },
                { variant: "1.5 S HV CVT TSS 2 TONE", price: "IDR 441.200.000" },
                { variant: "1.5 S HV CVT TSS 2 TONE (Pre Color)", price: "IDR 442.200.000" },
                { variant: "1.5 S GR HV CVT TSS", price: "IDR 446.700.000" },
                { variant: "1.5 S GR HV CVT TSS (Pre Color)", price: "IDR 449.100.000" },
                { variant: "1.5 S GR HV CVT TSS 2 TONE", price: "IDR 450.600.000" },
                { variant: "1.5 S GR HV CVT TSS 2 TONE (Pre Color)", price: "IDR 451.700.000" }
            ]
        },
        {
            model: "COROLLA CROSS GR SPORT HEV",
            image: "Corolla.png",
            description: "SUV crossover sport dengan performa hybrid",
            variants: [
                { variant: "1.8 Hybrid GR-S A/T", price: "IDR 623.000.000" },
                { variant: "1.8 Hybrid GR-S A/T", price: "IDR 626.600.000" },
                { variant: "1.8 Hybrid GR-S A/T", price: "IDR 628.100.000" }
            ]
        },
        {
            model: "NEW COROLLA CROSS HEV",
            image: "corollacross.png",
            description: "SUV hybrid dengan efisiensi bahan bakar optimal",
            variants: [
                { variant: "1.8 Hybrid A/T", price: "IDR 579.000.000" },
                { variant: "1.8 Hybrid A/T", price: "IDR 582.000.000" }
            ]
        },
        {
            model: "NEW FORTUNER GR SPORT",
            image: "fortuner.png",
            description: "SUV tangguh dengan varian GR Sport",
            variants: [
                { variant: "2.8 VRZ GR-S 4X2 AT", price: "IDR 650.000.000" },
                { variant: "2.8 VRZ 4X2 AT", price: "IDR 650.100.000" },
                { variant: "2.8 VRZ TSS 4X2 AT", price: "IDR 465.950.000" },
                { variant: "2.8 VRZ GR PARTS AERO PACK TSS 4X2 AT", price: "IDR 676.550.000" },
                { variant: "2.8 VRZ GR PARTS AERO PACK TSS 4X2 AT TT PC", price: "IDR 681.650.000" },
                { variant: "2.8 VRZ GR PARTS AERO PACK TSS 4X2 AT OT PC", price: "IDR 679.550.000" },
                { variant: "2.8 VRZ 4X4 AT", price: "IDR 756.300.000" },
                { variant: "2.8 VRZ 4X4 AT GR-S TSS TT PC", price: "IDR 791.200.000" },
                { variant: "2.8 VRZ 4X4 AT GR-S TSS", price: "IDR 786.200.000" }
            ]
        },
        {
            model: "NEW RUSH GR",
            image: "Rush.png",
            description: "SUV compact dengan gaya GR",
            variants: [
                { variant: "1.5 G MT", price: "IDR 288.500.000" },
                { variant: "1.5 G AT", price: "IDR 299.500.000" },
                { variant: "1.5 GR-S MT", price: "IDR 303.900.000" },
                { variant: "1.5 GR-S AT", price: "IDR 314.600.000" }
            ]
        }
    ],
    
    // Hatchback Category
    hatchback: [
        {
            model: "NEW AGYA GR SPORT",
            image: "agyasport.png",
            description: "City car dengan sentuhan sporty",
            variants: [
                { variant: "1.2 GR-S MT (One Tone)", price: "IDR 246.200.000" },
                { variant: "1.2 GR-S MT (Two Tone)", price: "IDR 248.700.000" },
                { variant: "1.2 GR-S CVT (One Tone)", price: "IDR 262.700.000" },
                { variant: "1.2 GR-S CVT (Two Tone)", price: "IDR 265.300.000" }
            ]
        },
        {
            model: "NEW AGYA STYLIX",
            image: "agya.png",
            description: "City car dengan gaya stylish",
            variants: [
                { variant: "1.2 G MT", price: "IDR 180.900.000" },
                { variant: "1.2 G CVT", price: "IDR 197.100.000" },
                { variant: "STYLIX 1.2 G CVT", price: "IDR 200.600.000" }
            ]
        },
        {
            model: "NEW CALYA",
            image: "calya.png",
            description: "MPV entry level dengan harga terjangkau",
            variants: [
                { variant: "1.2 E M/T", price: "IDR 172.500.000" },
                { variant: "1.2 G M/T", price: "IDR 178.200.000" },
                { variant: "1.2 G A/T", price: "IDR 192.600.000" }
            ]
        }
    ],
    
    // Sedan Category
    sedan: [
        {
            model: "ALL NEW VIOS",
            image: "vios.png",
            description: "Sedan kompak dengan teknologi terbaru",
            variants: [
                { variant: "1.5 G CVT", price: "IDR 374.800.000" },
                { variant: "1.5 G CVT TSS", price: "IDR 388.200.000" },
                { variant: "Premium Colour +", price: "IDR 1.500.000" }
            ]
        },
        {
            model: "NEW CAMRY HEV",
            image: "camry.png",
            description: "Sedan premium hybrid",
            variants: [
                { variant: "2.5 V A/T", price: "IDR 820.400.000" },
                { variant: "2.5 V A/T", price: "IDR 823.500.000" },
                { variant: "2.5 L A/T HYBRID", price: "IDR 957.700.000" },
                { variant: "2.5 L A/T HYBRID", price: "IDR 960.800.000" }
            ]
        },
        {
            model: "NEW COROLLA ALTIS HEV",
            image: "altis.png",
            description: "Sedan hybrid dengan teknologi canggih",
            variants: [
                { variant: "1.8 V AT", price: "IDR 583.300.000" },
                { variant: "1.8 V AT PC (SO)", price: "IDR 586.300.000" },
                { variant: "1.8 L HV AT", price: "IDR 637.500.000" },
                { variant: "1.8 L HV AT PC (SO)", price: "IDR 640.600.000" }
            ]
        }
    ],
    
    // Commercial Category
    commercial: [
        {
            model: "ALL NEW HILUX RANGGA",
            image: "rangga.png",
            description: "Kendaraan niaga tangguh",
            variants: [
                { variant: "CAB-CHASSIS PU 2.0 STD MT", price: "IDR 191.400.000" },
                { variant: "CAB-CHASSIS MB 2.0 STD MT", price: "IDR 191.400.000" },
                { variant: "PICK UP 2.0 STD MT", price: "IDR 196.400.000" },
                { variant: "PICK UP 2.0 STD MT 3WAY", price: "IDR 197.400.000" },
                { variant: "PICK UP 2.0 HIGH MT", price: "IDR 218.700.000" },
                { variant: "CAB-CHASSIS PU 2.4 DSL HIGH AT", price: "IDR 248.100.000" },
                { variant: "CAB-CHASSIS MB 2.4 DSL HIGH AT", price: "IDR 248.200.000" },
                { variant: "PICK UP 2.4 DSL STD MT", price: "IDR 253.000.000" },
                { variant: "PICK UP 2.4 DSL STD MT 3WAY", price: "IDR 254.100.000" },
                { variant: "PICK UP 2.4 DSL HIGH MT", price: "IDR 287.600.000" },
                { variant: "CAB-CHASSIS PU 2.4 DSL HIGH AT", price: "IDR 303.400.000" },
                { variant: "CAB-CHASSIS MB 2.4 DSL HIGH AT", price: "IDR 303.400.000" },
                { variant: "PICK UP 2.4 DSL HIGH AT", price: "IDR 308.800.000" }
            ]
        },
        {
            model: "NEW HILUX D CAB",
            image: "hiluxd.png",
            description: "Pickup double cab tangguh",
            variants: [
                { variant: "DC 2.4 E (4X4) DSL M/T", price: "IDR 454.600.000" },
                { variant: "DC 2.4 E-RTS (4X4) DSL M/T", price: "IDR 463.500.000" },
                { variant: "DC 2.4 G (4X4) DSL M/T", price: "IDR 488.300.000" },
                { variant: "DC 2.4 V (4x4) DSL A/T", price: "IDR 539.900.000" }
            ]
        },
        {
            model: "NEW HILUX S CAB",
            image: "hiluxs.png",
            description: "Pickup single cab untuk kebutuhan niaga",
            variants: [
                { variant: "SC 2.0 MT", price: "IDR 287.700.000" },
                { variant: "SC 2.4 DSL MT", price: "IDR 310.500.000" },
                { variant: "SC 2.4 DSL 4X4 MT", price: "IDR 414.000.000" }
            ]
        },
        {
            model: "NEW HIACE",
            image: "hiace.png",
            description: "Kendaraan niaga serbaguna",
            variants: [
                { variant: "HIACE COMMUTER M/T", price: "IDR 575.400.000" },
                { variant: "HIACE PREMIO 2.8 M/T", price: "IDR 673.100.000" }
            ]
        }
    ],
    
    // Sport Category
    sport: [
        {
            model: "NEW GR 86",
            image: "86.png",
            description: "Sports car dengan performa tinggi",
            variants: [
                { variant: "2.4L M/T (SO)", price: "IDR 1.029.900.000" },
                { variant: "2.4L A/T (SO)", price: "IDR 1.067.400.000" }
            ]
        }
    ]
};

// Get category display name
function getCategoryDisplayName(category) {
    const categoryMap = {
        'mpv': 'MPV',
        'suv': 'SUV',
        'hatchback': 'Hatchback',
        'sedan': 'Sedan',
        'commercial': 'Komersial',
        'sport': 'Sport'
    };
    return categoryMap[category] || 'Lainnya';
}

// Get category description
function getCategoryDescription(category) {
    const descriptionMap = {
        'mpv': 'Mobil keluarga dengan kapasitas penumpang besar dan nyaman untuk perjalanan jauh',
        'suv': 'Kendaraan serbaguna dengan ground clearance tinggi, cocok untuk berbagai medan',
        'hatchback': 'Mobil kota yang praktis dengan desain compact dan hemat bahan bakar',
        'sedan': 'Mobil dengan kenyamanan tinggi, cocok untuk penggunaan harian dan perjalanan bisnis',
        'commercial': 'Kendaraan niaga untuk kebutuhan usaha dan transportasi barang',
        'sport': 'Mobil dengan performa tinggi dan desain sporty untuk pengalaman berkendara menyenangkan'
    };
    return descriptionMap[category] || 'Mobil dengan berbagai fitur dan spesifikasi sesuai kebutuhan Anda';
}

// Render cars to the catalog grid (GROUPED BY MODEL)
function renderCars(carsByCategory) {
    catalogGrid.innerHTML = '';
    
    let hasCars = false;
    
    // Loop through each category
    for (const category in carsByCategory) {
        const cars = carsByCategory[category];
        
        if (cars.length === 0) continue;
        
        hasCars = true;
        
        cars.forEach(car => {
            const carCard = document.createElement('div');
            carCard.className = 'car-card fade-in';
            carCard.dataset.category = category;
            carCard.dataset.model = car.model;
            
            // Calculate price range
            const prices = car.variants.map(v => parseFloat(v.price.replace(/[^0-9]/g, '')));
            const minPrice = Math.min(...prices);
            const maxPrice = Math.max(...prices);
            const priceRange = minPrice === maxPrice 
                ? formatPrice(minPrice) 
                : `${formatPrice(minPrice)} - ${formatPrice(maxPrice)}`;
            
            carCard.innerHTML = `
                <div class="car-image">
                    <img src="${car.image}" alt="${car.model}" loading="lazy">
                </div>
                <div class="car-info">
                    <span class="car-category">${getCategoryDisplayName(category)}</span>
                    <h3 class="car-title">${car.model}</h3>
                    <p class="car-description">${car.description}</p>
                    <div class="car-price">Mulai ${priceRange}</div>
                    <div class="car-variants-count">
                        <i class="fas fa-list"></i> ${car.variants.length} Varian Tersedia
                    </div>
                    <div class="car-buttons">
                        <button class="car-btn car-btn-detail" data-car='${JSON.stringify(car).replace(/'/g, "&#39;")}'>
                            <i class="fas fa-eye"></i> Lihat Varian
                        </button>
                        <a href="https://wa.me/6281575904637?text=Halo%20Kak%20Adlan,%20saya%20tertarik%20dengan%20${encodeURIComponent(car.model)}.%20Mohon%20info%20lebih%20lanjut." target="_blank" class="car-btn car-btn-chat">
                            <i class="fab fa-whatsapp"></i> Konsultasi
                        </a>
                    </div>
                </div>
            `;
            
            catalogGrid.appendChild(carCard);
        });
    }
    
    if (!hasCars) {
        catalogGrid.innerHTML = '<div class="no-results"><p>Tidak ditemukan mobil yang sesuai dengan pencarian Anda.</p></div>';
        return;
    }
    
    // Add event listeners to detail buttons
    document.querySelectorAll('.car-btn-detail').forEach(button => {
        button.addEventListener('click', function() {
            const carData = JSON.parse(this.getAttribute('data-car').replace(/&#39;/g, "'"));
            openCarModal(carData);
        });
    });
    
    // Trigger fade-in animation for new cards
    setTimeout(() => {
        document.querySelectorAll('.car-card').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
}

// Format price to IDR
function formatPrice(price) {
    return 'IDR ' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Open car detail modal
function openCarModal(car) {
    modalBody.innerHTML = `
        <div class="car-detail-content">
            <div class="car-detail-header">
                <div class="car-detail-image">
                    <img src="${car.image}" alt="${car.model}">
                </div>
                <div class="car-detail-info">
                    <h2>${car.model}</h2>
                    <p class="car-description">${car.description}</p>
                    <div class="car-price-range">
                        <i class="fas fa-tags"></i> 
                        <span>Harga mulai ${formatPrice(Math.min(...car.variants.map(v => parseFloat(v.price.replace(/[^0-9]/g, '')))))}</span>
                    </div>
                </div>
            </div>
            
            <div class="car-variants-section">
                <h3><i class="fas fa-list"></i> Daftar Varian & Harga</h3>
                <div class="variants-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Varian</th>
                                <th>Harga</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${car.variants.map(variant => `
                                <tr>
                                    <td>${variant.variant}</td>
                                    <td class="price-cell">${variant.price}</td>
                                    <td class="action-cell">
                                        <a href="https://wa.me/6281575904637?text=Halo%20Kak%20Adlan,%20saya%20tertarik%20dengan%20${encodeURIComponent(car.model + ' ' + variant.variant)}.%20Mohon%20info%20lebih%20lanjut." 
                                           target="_blank" class="variant-whatsapp-btn">
                                            <i class="fab fa-whatsapp"></i> Chat
                                        </a>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div class="contact-form">
                <h3><i class="fas fa-headset"></i> Konsultasi Gratis dengan Adlan</h3>
                <form id="consultation-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="name">Nama Lengkap *</label>
                            <input type="text" id="name" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Nomor HP / WhatsApp *</label>
                            <input type="tel" id="phone" class="form-control" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="domicile">Domisili (Kota) *</label>
                        <input type="text" id="domicile" class="form-control" required>
                    </div>
                    
                    <div class="form-group">
                        <label>Varian yang Diminati</label>
                        <select id="variant-select" class="form-control">
                            <option value="">Pilih Varian</option>
                            ${car.variants.map(v => `<option value="${v.variant}">${v.variant}</option>`).join('')}
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>Tipe Pembayaran yang Diinginkan *</label>
                        <div class="radio-group">
                            <div class="radio-option">
                                <input type="radio" id="cash" name="payment" value="cash" required>
                                <label for="cash">Cash</label>
                            </div>
                            <div class="radio-option">
                                <input type="radio" id="credit" name="payment" value="credit" required>
                                <label for="credit">Kredit</label>
                            </div>
                            <div class="radio-option">
                                <input type="radio" id="both" name="payment" value="both" required>
                                <label for="both">Belum Tentukan</label>
                            </div>
                        </div>
                    </div>
                    
                    <button type="submit" class="form-submit">
                        <i class="fab fa-whatsapp"></i> Konsultasi via WhatsApp
                    </button>
                    
                    <p style="margin-top: 15px; font-size: 14px; color: #666;">
                        Atau langsung hubungi Adlan di WhatsApp: 
                        <a href="https://wa.me/6281575904637?text=Halo%20Kak%20Adlan,%20saya%20tertarik%20dengan%20${encodeURIComponent(car.model)}.%20Mohon%20info%20lebih%20lanjut." target="_blank">
                            +62 815-7590-4637
                        </a>
                    </p>
                </form>
            </div>
        </div>
    `;
    
    // Add form submission handler
    document.getElementById('consultation-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const domicile = document.getElementById('domicile').value;
        const selectedVariant = document.getElementById('variant-select').value;
        const payment = document.querySelector('input[name="payment"]:checked').value;
        
        const variantText = selectedVariant ? ` Varian: ${selectedVariant}` : '';
        const message = `Halo Kak Adlan, saya ${name} dari ${domicile}. Saya tertarik dengan ${car.model}${variantText}. Saya ingin pembayaran ${payment === 'cash' ? 'cash' : payment === 'credit' ? 'kredit' : 'belum menentukan'}. Mohon info lebih lanjut. Nomor HP: ${phone}`;
        
        const whatsappUrl = `https://wa.me/6281575904637?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
    
    carModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
closeModal.addEventListener('click', () => {
    carModal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === carModal) {
        carModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Filter cars by category
let activeFilter = 'all';

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Update active filter
        activeFilter = this.dataset.filter;
        
        // Filter cars
        let filteredCars = { ...carData };
        
        if (activeFilter !== 'all') {
            filteredCars = { [activeFilter]: carData[activeFilter] || [] };
        }
        
        // Apply search if there's a search term
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm) {
            for (const category in filteredCars) {
                filteredCars[category] = filteredCars[category].filter(car => 
                    car.model.toLowerCase().includes(searchTerm) || 
                    car.description.toLowerCase().includes(searchTerm)
                );
            }
        }
        
        renderCars(filteredCars);
    });
});

// Search functionality
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    let filteredCars = { ...carData };
    
    if (activeFilter !== 'all') {
        filteredCars = { [activeFilter]: carData[activeFilter] || [] };
    }
    
    if (searchTerm) {
        for (const category in filteredCars) {
            filteredCars[category] = filteredCars[category].filter(car => 
                car.model.toLowerCase().includes(searchTerm) || 
                car.description.toLowerCase().includes(searchTerm)
            );
        }
    }
    
    renderCars(filteredCars);
});

// Initialize with all cars
renderCars(carData);

// ========== PROMO SLIDER/CAROUSEL YANG DIPERBAIKI ==========
// Promo Slider Functionality - VERSI DIPERBAIKI DENGAN DRAG SUPPORT
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.slider-container');

let currentSlide = 0;
const slideInterval = 5000; // 5 seconds
let autoSlide;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

// Initialize slider
function initSlider() {
    // Set initial slide
    showSlide(currentSlide);
    
    // Start auto slide
    autoSlide = setInterval(nextSlide, slideInterval);
    
    // Setup drag functionality
    setupSliderDrag();
}

// Show specific slide
function showSlide(index) {
    // Ensure index is within bounds
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    // Update current slide
    currentSlide = index;
    
    // Update slider position
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update active classes
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    // Reset translate values
    currentTranslate = -currentSlide * slider.offsetWidth;
    prevTranslate = currentTranslate;
}

// Next slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Previous slide
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Setup drag functionality for slider
function setupSliderDrag() {
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    
    // Mouse events
    slider.addEventListener('mousedown', dragStart);
    slider.addEventListener('mouseup', dragEnd);
    slider.addEventListener('mouseleave', dragEnd);
    slider.addEventListener('mousemove', drag);
    
    // Touch events
    slider.addEventListener('touchstart', dragStart);
    slider.addEventListener('touchend', dragEnd);
    slider.addEventListener('touchmove', drag);
    
    function dragStart(e) {
        // Pause auto slide when dragging starts
        clearInterval(autoSlide);
        
        if (e.type === 'touchstart') {
            startPos = e.touches[0].clientX;
        } else {
            startPos = e.clientX;
            e.preventDefault();
        }
        
        isDragging = true;
        slider.classList.add('grabbing');
        
        // Set initial translate value
        prevTranslate = currentTranslate = -currentSlide * slider.offsetWidth;
    }
    
    function drag(e) {
        if (!isDragging) return;
        
        let currentPosition = 0;
        if (e.type === 'touchmove') {
            currentPosition = e.touches[0].clientX;
        } else {
            currentPosition = e.clientX;
        }
        
        // Calculate how much we've dragged
        const draggedDistance = currentPosition - startPos;
        currentTranslate = prevTranslate + draggedDistance;
        
        // Apply the translation
        slider.style.transform = `translateX(${currentTranslate}px)`;
    }
    
    function dragEnd() {
        if (!isDragging) return;
        
        isDragging = false;
        slider.classList.remove('grabbing');
        
        // Calculate how far we dragged (in percentage of slide width)
        const draggedDistance = currentTranslate - prevTranslate;
        const slideWidth = slider.offsetWidth / slides.length;
        const draggedSlides = Math.round(draggedDistance / slideWidth);
        
        // Update slide based on drag distance
        if (Math.abs(draggedSlides) > 0) {
            showSlide(currentSlide - draggedSlides);
        } else {
            // If drag wasn't enough to change slide, return to current slide
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        
        // Resume auto slide
        autoSlide = setInterval(nextSlide, slideInterval);
    }
}

// Event listeners for slider controls
prevBtn.addEventListener('click', () => {
    clearInterval(autoSlide);
    prevSlide();
    autoSlide = setInterval(nextSlide, slideInterval);
});

nextBtn.addEventListener('click', () => {
    clearInterval(autoSlide);
    nextSlide();
    autoSlide = setInterval(nextSlide, slideInterval);
});

// Event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(autoSlide);
        showSlide(index);
        autoSlide = setInterval(nextSlide, slideInterval);
    });
});

// Pause auto slide on hover
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        autoSlide = setInterval(nextSlide, slideInterval);
    });
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', initSlider);

// ========== ANIMASI SCROLL ==========
// Scroll animations
function checkScroll() {
    const elements = document.querySelectorAll('.fade-in, .slide-up');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

// Initial check on page load
window.addEventListener('load', checkScroll);

// Check on scroll
window.addEventListener('scroll', checkScroll);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ========== INISIALISASI TAMBAHAN ==========
// Make sure slider works even if DOM hasn't fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSlider);
} else {
    initSlider();
}

// ========== SEO FUNCTIONS ==========
function initSEO() {
    // Update tahun dinamis di footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Tambahkan meta description dinamis jika diperlukan
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = "Adlan - Sales Resmi Toyota Veteran Bintaro Jakarta Selatan. Promo mobil Toyota Fortuner, Avanza, Veloz, Innova. Hubungi +62 815-7590-4637";
    }
    
    // Update page title dengan nama model jika di modal detail
    const modalObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                const modalTitle = document.querySelector('.car-detail-content h2');
                if (modalTitle) {
                    document.title = modalTitle.textContent + " - Toyota Veteran Bintaro";
                }
            }
        });
    });
    
    if (document.getElementById('car-modal')) {
        modalObserver.observe(document.getElementById('car-modal'), {
            childList: true,
            subtree: true
        });
    }
}

// Panggil fungsi SEO saat halaman load
document.addEventListener('DOMContentLoaded', initSEO);

// Log untuk Google Analytics (jika ada)
function logPageView(pageName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: pageName,
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    }
}

// Track button clicks untuk analytics
document.querySelectorAll('.btn-whatsapp, .car-btn-chat, .nav-whatsapp-btn').forEach(button => {
    button.addEventListener('click', function() {
        logPageView('WhatsApp Click - ' + this.textContent.trim());
    });
});