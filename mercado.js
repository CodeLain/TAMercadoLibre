const itemsList = [
    {
        "id": 1,
        "name": "Wireless Mouse",
        "description": "Ergonomic wireless mouse with adjustable DPI.",
        "price": 29.99,
        "image": "https://i.pinimg.com/236x/87/dc/ea/87dcea109979f249209f3a120d6984ec.jpg",
        "category": "Accesorios"
    },
    {
        "id": 2,
        "name": "Mechanical Keyboard",
        "description": "RGB backlit mechanical keyboard with Cherry MX switches.",
        "price": 89.99,
        "image": "https://i.pinimg.com/564x/28/9f/ac/289facd557b0fb9e7556897b382f305f.jpg",
        "category": "Accesorios"
    },
    {
        "id": 3,
        "name": "Gaming Headset",
        "description": "Surround sound gaming headset with noise-cancelling microphone.",
        "price": 59.99,
        "image": "https://i.pinimg.com/564x/7d/59/00/7d5900385c72bc40dab651aea7f83694.jpg",
        "category": "Audio"
    },
    {
        "id": 4,
        "name": "27-inch Monitor",
        "description": "4K UHD monitor with IPS display and 144Hz refresh rate.",
        "price": 329.99,
        "image": "https://i.pinimg.com/564x/83/84/b6/8384b623467eb5e910b48fa56b2b9023.jpg",
        "category": "Electrónica"
    },
    {
        "id": 5,
        "name": "Laptop Stand",
        "description": "Adjustable aluminum laptop stand for ergonomic work setup.",
        "price": 39.99,
        "image": "https://i.pinimg.com/236x/82/c4/38/82c43821cb4972cd8b7c46dda9239947.jpg",
        "category": "Accesorios"
    },
    {
        "id": 6,
        "name": "USB-C Hub",
        "description": "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader.",
        "price": 24.99,
        "image": "https://i.pinimg.com/564x/dc/24/82/dc248278bafc6b418aae0cc26b66c279.jpg",
        "category": "Accesorios"
    },
    {
        "id": 7,
        "name": "External SSD",
        "description": "Portable external SSD with 1TB storage and USB 3.1 interface.",
        "price": 129.99,
        "image": "https://i.pinimg.com/564x/6d/23/e0/6d23e0624f57ccb993d15a08fefb8171.jpg",
        "category": "Almacenamiento"
    },
    {
        "id": 8,
        "name": "Smartphone Stand",
        "description": "Adjustable smartphone stand with 360-degree rotation.",
        "price": 19.99,
        "image": "https://i.pinimg.com/564x/78/2a/32/782a32af5cca3823ad5adedc789596a1.jpg",
        "category": "Accesorios"
    },
    {
        "id": 9,
        "name": "Bluetooth Speaker",
        "description": "Portable Bluetooth speaker with 10-hour battery life.",
        "price": 49.99,
        "image": "https://i.pinimg.com/564x/7c/bc/fa/7cbcfa9c4131300069e502776b3827a6.jpg",
        "category": "Audio"
    },
    {
        "id": 10,
        "name": "Webcam",
        "description": "1080p HD webcam with built-in microphone and privacy cover.",
        "price": 34.99,
        "image": "https://i.pinimg.com/564x/9a/b3/8f/9ab38f44fe36b04c6b3e39dd953328e5.jpg",
        "category": "Accesorios"
    },
    {
        "id": 11,
        "name": "Wireless Charger",
        "description": "Fast wireless charger with Qi compatibility.",
        "price": 25.99,
        "image": "https://i.pinimg.com/564x/58/2b/12/582b126c7f65bfbb332d6b7ac3a4c43f.jpg",
        "category": "Accesorios"
    },
    {
        "id": 12,
        "name": "Noise-Cancelling Headphones",
        "description": "Over-ear noise-cancelling headphones with Bluetooth connectivity.",
        "price": 199.99,
        "image": "https://i.pinimg.com/564x/24/e8/e9/24e8e9b5f4ee0fd7b9963cbbf272aabf.jpg",
        "category": "Audio"
    },
    {
        "id": 13,
        "name": "Smartwatch",
        "description": "Smartwatch with heart rate monitor and GPS.",
        "price": 149.99,
        "image": "https://i.pinimg.com/564x/85/98/86/859886f1b592da2009ba18ba280ad972.jpg",
        "category": "Electrónica"
    }
]

let htmlGenerator = (arrayItems) => {

    let result = "";
    let container1 = document.getElementById("container1");
    arrayItems.forEach((item, index) => {

        let variable = `
<div id="${item.id}" class="card column is-full-mobile is-one-quarter-desktop draggable" draggable="true" data-item="test">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          src="${item.image}"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">${item.name}</p>
        </div>
      </div>
      <div class="content">
        ${item.description} ${item.price}
      </div>
    </div>
  </div>
</div>
</div> `
        result += variable;
    });
    container1.innerHTML = result;
}


const noProductsFound = () => {
    const noProducts = document.getElementById("noProducts");
    const products = document.getElementById("products");

    products.classList.add("hidden");
    noProducts.classList.add("is-flex");
}

document.addEventListener('DOMContentLoaded', () => {
    htmlGenerator(itemsList);

    // Functions to open and close a modal
    function openModal($el) {
        $el.classList.add('is-active');
    }

    function closeModal($el) {
        $el.classList.remove('is-active');
    }

    function closeAllModals() {
        (document.querySelectorAll('.modal') || []).forEach(($modal) => {
            closeModal($modal);
        });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener('click', () => {
            openModal($target);
        });
    });

    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
        const $target = $close.closest('.modal');

        $close.addEventListener('click', () => {
            closeModal($target);
        });
    });

    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
        if (event.key === "Escape") {
            closeAllModals();
        }
    });

    itemsList.forEach((product) => {
        document.getElementById(product.id).addEventListener("click", () => {
            modalBody(product.id);
        });
    })

    const draggables = document.querySelectorAll('.draggable');
    const cart = document.getElementById('cart');
    console.log(draggables);

    draggables.forEach(draggable => {
        console.log(draggable);
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('is-dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('is-dragging');
        });
    });

    cart.addEventListener('dragover', e => {
        e.preventDefault();
        cart.classList.add('drag-over');
    });

    cart.addEventListener('dragleave', () => {
        cart.classList.remove('drag-over');
    });

    cart.addEventListener('drop', e => {
        console.log("DRAG");
        e.preventDefault();
        cart.classList.remove('drag-over');

        const draggable = document.querySelector('.is-dragging');
        const itemName = draggable.getAttribute('data-item');
        const itemElement = document.createElement('div');
        itemElement.className = 'card';
        itemElement.innerHTML = `
                <div class="card-content">
                    <p class="title">${itemName}</p>
                </div>
            `;
        cart.appendChild(itemElement);
    });
});


let filterByName = (text) => {
    const products = document.getElementById("products");
    products.classList.remove("hidden");
    const noProducts = document.getElementById("noProducts");
    noProducts.classList.remove("is-flex");

    const inputText = text.toLowerCase();
    if (!inputText) {
        htmlGenerator(itemsList);
    } else {
        const filteredProducts = itemsList.filter((item) => {
            return item.name.toLowerCase().includes(inputText);
        });
        if (filteredProducts.length > 0) {
            htmlGenerator(filteredProducts);
        } else {
            noProductsFound();
        }
    }
};


const orderByPrice = (order) => {
    let auxList = [...itemsList];
    switch (order) {
        case "lowPrice":
            auxList.sort((a, b) => a.price - b.price);
            break;

        case "highPrice":
            auxList.sort((a, b) => b.price - a.price);
            break;
    }
    htmlGenerator(auxList);
};

const createProduct = () => {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let image = document.getElementById("image").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;

    let newProduct = {
        id: itemsList.length + 1,
        name: name,
        description: description,
        image: image,
        price: price,
        category: category
    }
    itemsList.push(newProduct);
    htmlGenerator(itemsList);

    document.getElementById("name").value = '';
    document.getElementById("description").value = '';
    document.getElementById("image").value = '';
    document.getElementById("price").value = '';
    document.getElementById("category").value = 'electrónica';

    closeModal(document.getElementById("modal-create-product"));
}

const modalBody = (productId) => {
    console.log(productId);
    const item = itemsList.find(item => item.id === parseInt(productId));
    const modalTitle = document.getElementById("ModalTitle");
    const modalDescription = document.getElementById("ModalDescription");
    const modalImage = document.getElementById("modalImage");

    modalTitle.innerHTML = item.name;
    modalDescription.innerHTML = item.description + " " + item.price;
    modalImage.src = item.image;
    document.getElementById("modal-js-example").classList.add('is-active');
}

const orderProducts = document.getElementById("orderProducts");
const inputText = document.getElementById("input1");
const save = document.getElementById("save");

inputText.addEventListener("input", () => {
    filterByName(inputText.value);
});

orderProducts.addEventListener("change", () => {
    orderByPrice(orderProducts.value);
});

save.addEventListener("click", createProduct);

document.getElementById('categorySelect').addEventListener('change', function() {
    const selectedCategory = this.value;
    filterProductsByCategory(selectedCategory);
});

function filterProductsByCategory(category) {
    let filteredItems;
    if (category === 'todo') {
        filteredItems = itemsList;
    } else {
        filteredItems = itemsList.filter(item => item.category.toLowerCase() === category.toLowerCase());
    }
    htmlGenerator(filteredItems);
}
