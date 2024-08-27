const itemsList = [
    {
        "id": 1,
        "name": "Wireless Mouse",
        "description": "Ergonomic wireless mouse with adjustable DPI.",
        "price": 29.99,
        "image": "https://via.placeholder.com/150?text=Wireless+Mouse"
    },
    {
        "id": 2,
        "name": "Mechanical Keyboard",
        "description": "RGB backlit mechanical keyboard with Cherry MX switches.",
        "price": 89.99,
        "image": "https://via.placeholder.com/150?text=Mechanical+Keyboard"
    },
    {
        "id": 3,
        "name": "Gaming Headset",
        "description": "Surround sound gaming headset with noise-cancelling microphone.",
        "price": 59.99,
        "image": "https://via.placeholder.com/150?text=Gaming+Headset"
    },
    {
        "id": 4,
        "name": "27-inch Monitor",
        "description": "4K UHD monitor with IPS display and 144Hz refresh rate.",
        "price": 329.99,
        "image": "https://via.placeholder.com/150?text=27-inch+Monitor"
    },
    {
        "id": 5,
        "name": "Laptop Stand",
        "description": "Adjustable aluminum laptop stand for ergonomic work setup.",
        "price": 39.99,
        "image": "https://via.placeholder.com/150?text=Laptop+Stand"
    },
    {
        "id": 6,
        "name": "USB-C Hub",
        "description": "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader.",
        "price": 24.99,
        "image": "https://via.placeholder.com/150?text=USB-C+Hub"
    },
    {
        "id": 7,
        "name": "External SSD",
        "description": "Portable external SSD with 1TB storage and USB 3.1 interface.",
        "price": 129.99,
        "image": "https://via.placeholder.com/150?text=External+SSD"
    },
    {
        "id": 8,
        "name": "Smartphone Stand",
        "description": "Adjustable smartphone stand with 360-degree rotation.",
        "price": 19.99,
        "image": "https://via.placeholder.com/150?text=Smartphone+Stand"
    },
    {
        "id": 9,
        "name": "Bluetooth Speaker",
        "description": "Portable Bluetooth speaker with 10-hour battery life.",
        "price": 49.99,
        "image": "https://via.placeholder.com/150?text=Bluetooth+Speaker"
    },
    {
        "id": 10,
        "name": "Webcam",
        "description": "1080p HD webcam with built-in microphone and privacy cover.",
        "price": 34.99,
        "image": "https://via.placeholder.com/150?text=Webcam"
    },
    {
        "id": 11,
        "name": "Wireless Charger",
        "description": "Fast wireless charger with Qi compatibility.",
        "price": 25.99,
        "image": "https://via.placeholder.com/150?text=Wireless+Charger"
    },
    {
        "id": 12,
        "name": "Noise-Cancelling Headphones",
        "description": "Over-ear noise-cancelling headphones with Bluetooth connectivity.",
        "price": 199.99,
        "image": "https://via.placeholder.com/150?text=Noise-Cancelling+Headphones"
    },
    {
        "id": 13,
        "name": "Smartwatch",
        "description": "Smartwatch with heart rate monitor and GPS.",
        "price": 149.99,
        "image": "https://via.placeholder.com/150?text=Smartwatch"
    }
]

let htmlGenerator = (arrayItems) => {

    let result = "";
    let container1 = document.getElementById("container1");
    arrayItems.forEach((item, index) => {

        let variable = `
<div id="${item.id}" class="card column is-full-mobile is-one-quarter-desktop">
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
    const newItemList = [...itemsList]
    switch (order) {
        case "default":
            htmlGenerator(itemsList);
            break;

        case "lowPrice":
            newItemList.sort((a, b) => a.price - b.price);
            htmlGenerator(newItemList);
            break;

        case "highPrice":
            newItemList.sort((a, b) => b.price - a.price);
            htmlGenerator(newItemList);
            break;
    }
};

const createProduct = () => {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let image = document.getElementById("image").value;
    let price = document.getElementById("price").value;
    let category = document.getElementById("category").value;

    let newProduct = {
        name: name,
        description: description,
        image: image,
        price: price,
        category: category
    }
    itemsList.push(newProduct);
    htmlGenerator(itemsList);

}

const modalBody = (productId) => {
    console.log(productId);
    const item = itemsList.find(item => item.id === productId);
    const modalTitle = document.getElementById("ModalTitle");
    const modalDescription = document.getElementById("ModalDescription");

    modalTitle.innerHTML = item.name;
    modalDescription.innerHTML = item.description + " " + item.price;
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


