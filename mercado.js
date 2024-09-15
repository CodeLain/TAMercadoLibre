const itemsList = [
    {   
      id: "1",
      title: "Task 1",
      description: "Description for Task 1",
      assignedTo: "Rodrigo Lujambio",
      startDate: "01/01/2024",
      endDate: "31/12/2024",
      status: "To Do",
      priority: "Low",
      comments: [],
    },
    {
      id: "2",
      title: "Task 2",
      description: "Description for Task 2",
      assignedTo: "Michel Sampil",
      startDate: "01/01/2024",
      endDate: "31/12/2024",
      status: "In Progress",
      priority: "Medium",
      comments: [],
    },
    {
      id: "3",
      title: "Task 3",
      description: "Description for Task 3",
      assignedTo: "Jose Abadie",
      startDate: "01/01/2024",
      endDate: "31/12/2024",
      status: "Done",
      priority: "High",
      comments: [],
    },
  ]; 

let htmlGenerator = (arrayItems) => {

    let result = "";
    let container1 = document.getElementById("container1");
    arrayItems.forEach((item, index) => {

        let variable = `
<div id="${item.title}" class="card column is-full-mobile is-one-quarter-desktop draggable alignProduct" draggable="true" data-name="${item.description}" data-price="${item.status}">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          src="${item.priority}"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">${item.assignedTo}</p>
        </div>
      </div>
      <div class="content">
        ${item.description} ${item.comments}
      </div>
    </div>
  </div>
</div>
</div> `
        result += variable;
    });
    container1.innerHTML = result;

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
    });

    const draggables = document.querySelectorAll('.draggable');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('is-dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('is-dragging');
        });
    });
}

// MODAL FUNCTIONS
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

const noProductsFound = () => {
    const noProducts = document.getElementById("noProducts");
    const products = document.getElementById("products");
    products.classList.add("hidden");
    noProducts.classList.add("is-flex");
}

//EJECUTA LUEGO DE CARGADO EL HTML, ASEGURA PODER HACER document.[funcionParaObtenerElemento/s] dado que se agregan elementos
document.addEventListener('DOMContentLoaded', () => {
    htmlGenerator(itemsList);

    const cart = document.getElementById('cart');

    cart.addEventListener('dragover', e => {
        e.preventDefault();
        cart.classList.add('drag-over');
    });

    cart.addEventListener('dragleave', () => {
        cart.classList.remove('drag-over');
    });

    cart.addEventListener('drop', e => {
        e.preventDefault();
        cart.classList.remove('drag-over');
        const draggable = document.querySelector('.is-dragging');
        const itemName = draggable.getAttribute('data-name');
        const itemPrice = draggable.getAttribute('data-price');
        const itemElement = document.createElement('div');
        itemElement.className = 'card';
        itemElement.innerHTML = `
                <div class="card-content">
                    <p class="title">${itemName}</p>
                    <p class="content">${itemPrice}</p>
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
    //let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    //let image = document.getElementById("image").value;
    let title = document.getElementById("image").value;
    //let price = document.getElementById("price").value;
    let assignedTo = document.getElementById("price").value;
    //let category = document.getElementById("category").value;
    let priority = document.getElementById("category").value;

    let newProduct = {
        id: itemsList.length + 1,
        title:title,
        description: description,
        assignedTo:assignedTo,
        startDate:startDate,
        endDate:endDate,
        priority:priority
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
    const item = itemsList.find(item => item.id === parseInt(productId));
    const modalTitle = document.getElementById("ModalTitle");
    const modalDescription = document.getElementById("ModalDescription");
    //const modalImage = document.getElementById("modalImage");

    modalTitle.innerHTML = item.title;
    modalDescription.innerHTML = item.description //+ " " + item.price;
    //modalImage.src = item.image;
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

//save.addEventListener("click", createProduct);

save.addEventListener("click", MetodoPOST);

document.getElementById('categorySelect').addEventListener('change', function () {
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

const getTasks = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/tasks");
        console.log(response)
        if (response.ok) {
            const data = await response.json();
            console.log(data)
        }
    }
    catch(error) {
        console.error(error)
    }
}

getTasks()
/*
const MetodoPUT= async(tareaModificada)=>{
        const response= await fetch("http://localhost:3000/api/tasks/" + tareaModificada.id,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                title: tareaModificada.title,
                description: "Description for Task 2",
                assignedTo: "Michel Sampil",
                startDate: "01/01/2024",
                endDate: "31/12/2024",
                status: "In Progress",
                priority: "Medium",
                comments: [],
            })
        })
        .then(response=>response.json())
        .then(data=>{
            console.log('Success;',data);
        })
        .catch((error)=>{
            console.error('Error:',error);
        });
}
*/

const MetodoPOST= async()=>{
    const loco =await fetch('https://api.example.com/endpoint', {
        method: 'POST', // Especifica que es una petición POST
        headers: {
        'Content-Type': 'application/json', // Tipo de contenido, en este caso JSON
        },
        body: JSON.stringify({
        id: 'John Doe',  // Datos que se envían en la petición
        title: 'john.doe@example.com',
        description:'Hola como estas',
        assignedTo:'Nacho',
        status:'In progress'
        }), // Convierte los datos a formato JSON
    })
    .then(response => {
        if (!response.ok) {
        throw new Error('Error en la petición');
        }
        return response.json(); // Procesa la respuesta como JSON
    })
    .then(data => {
        console.log('Success:', data); // Maneja la respuesta exitosa
    })
    .catch((error) => {
        console.error('Error:', error); // Maneja cualquier error
    });
}    

MetodoPOST();