let activeCategory = 'cpu';
let searchQuery = '';
let showCompatibleOnly = false;


function renderComponents() {
    const componentsList = document.getElementById('componentsList');
    if (!componentsList) return;
    
    const categoryData = componentsData[activeCategory];
    if (!categoryData) return;
    
    let filteredComponents = [...categoryData];
    
    if (searchQuery) {
        filteredComponents = filteredComponents.filter(comp => 
            comp.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    if (showCompatibleOnly && currentBuild.motherboard) {
        filteredComponents = filteredComponents.filter(comp => 
            checkCompatibilityWithMotherboard(comp, activeCategory, currentBuild.motherboard)
        );
    }
    
    if (filteredComponents.length === 0) {
        componentsList.innerHTML = '<div class="no-results" style="text-align: center; padding: 20px;">Компоненты не найдены</div>';
        return;
    }
    
    componentsList.innerHTML = filteredComponents.map(comp => `
        <div class="component-card ${currentBuild[activeCategory]?.id === comp.id ? 'selected' : ''}" 
             onclick="selectComponent('${activeCategory}', ${comp.id})">
            <div class="component-card__info">
                <h4>${comp.name}</h4>
                <p>${comp.specs}</p>
                ${comp.url ? `<a href="${comp.url}" target="_blank" class="component-link" style="font-size: 12px; color: #6C5CE7; text-decoration: none; display: inline-block; margin-top: 5px;" onclick="event.stopPropagation()">
                    <i class="fas fa-external-link-alt"></i> На сайт
                </a>` : ''}
            </div>
            <div class="component-card__price">
                ${formatPrice(comp.price)}
            </div>
        </div>
    `).join('');
}

function selectComponent(category, componentId) {
    const component = componentsData[category].find(c => c.id === componentId);
    if (!component) return;
    
    currentBuild[category] = component;
    renderBuild();
    renderComponents();
    checkTotalCompatibility();
}

function renderBuild() {
    const buildComponents = document.getElementById('buildComponents');
    if (!buildComponents) return;
    
    const categories = ['cpu', 'gpu', 'motherboard', 'ram', 'storage', 'psu', 'case', 'cooler'];
    
    const categoryNames = {
        cpu: 'Процессор',
        gpu: 'Видеокарта',
        motherboard: 'Материнская плата',
        ram: 'Оперативная память',
        storage: 'Накопитель',
        psu: 'Блок питания',
        case: 'Корпус',
        cooler: 'Охлаждение'
    };
    
    const categoryIcons = {
        cpu: 'fa-microchip',
        gpu: 'fa-tv',
        motherboard: 'fa-server',
        ram: 'fa-memory',
        storage: 'fa-hdd',
        psu: 'fa-bolt',
        case: 'fa-computer',
        cooler: 'fa-fan'
    };
    
    buildComponents.innerHTML = categories.map(category => {
        const component = currentBuild[category];
        
        if (component) {
            return `
                <div class="build-component selected" data-category="${category}">
                    <div class="build-component__info">
                        <i class="fas ${categoryIcons[category]}"></i>
                        <div class="build-component__details">
                            <h4>${categoryNames[category]}</h4>
                            <p>${component.name}</p>
                            <small style="color: #7f8c8d;">${component.specs}</small>
                            ${component.url ? `<div style="margin-top: 5px;"><a href="${component.url}" target="_blank" style="font-size: 11px; color: #6C5CE7; text-decoration: none;">
                                <i class="fas fa-shopping-cart"></i> Купить
                            </a></div>` : ''}
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-weight: 700; color: #6C5CE7; margin-bottom: 5px;">${formatPrice(component.price)}</div>
                        <button class="btn-remove" onclick="removeComponent('${category}')" style="background: none; border: none; color: #D63031; cursor: pointer;">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        } else {
            return `
                <div class="build-component empty" data-category="${category}">
                    <div class="build-component__info">
                        <i class="fas ${categoryIcons[category]}"></i>
                        <span>${categoryNames[category]} не выбран</span>
                    </div>
                    <button class="btn-add" onclick="selectCategory('${category}')" style="padding: 6px 12px; background: #6C5CE7; color: white; border: none; border-radius: 6px; cursor: pointer;">
                        <i class="fas fa-plus"></i> Выбрать
                    </button>
                </div>
            `;
        }
    }).join('');
    
    updateTotalPrice();
}

function removeComponent(category) {
    currentBuild[category] = null;
    renderBuild();
    renderComponents();
    checkTotalCompatibility();
}

function updateTotalPrice() {
    const totalPriceElement = document.getElementById('totalPrice');
    if (totalPriceElement) {
        totalPriceElement.textContent = formatPrice(getTotalPrice());
    }
}

function checkCompatibilityWithMotherboard(component, category, motherboard) {
    if (!motherboard) return true;
    
    switch(category) {
        case 'cpu':
            return component.socket === motherboard.socket;
        case 'ram':
            return component.type === motherboard.ramType;
        default:
            return true;
    }
}

function checkTotalCompatibility() {
    const issues = [];
    
    if (currentBuild.cpu && currentBuild.motherboard) {
        if (currentBuild.cpu.socket !== currentBuild.motherboard.socket) {
            issues.push(' Процессор и материнская плата имеют разные сокеты');
        } else {
            issues.push(' Сокет процессора и материнской платы совместимы');
        }
    }
    
    if (currentBuild.ram && currentBuild.motherboard) {
        if (currentBuild.ram.type !== currentBuild.motherboard.ramType) {
            issues.push(' Тип оперативной памяти не поддерживается материнской платой');
        } else {
            issues.push(' Тип памяти совместим с материнской платой');
        }
    }
    
    const statusElement = document.getElementById('compatibilityStatus');
    if (statusElement) {
        if (issues.filter(i => i.includes('')).length === 0) {
            statusElement.innerHTML = '<i class="fas fa-check-circle"></i> Совместимо';
            statusElement.className = 'build-stat__value compatibility-badge success';
        } else {
            statusElement.innerHTML = `<i class="fas fa-exclamation-triangle"></i> Есть проблемы`;
            statusElement.className = 'build-stat__value compatibility-badge warning';
        }
    }
}

function selectCategory(category) {
    activeCategory = category;
    document.querySelectorAll('.category-btn').forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    renderComponents();
}
document.addEventListener('DOMContentLoaded', () => {
    renderBuild();
    selectCategory('cpu');
});
