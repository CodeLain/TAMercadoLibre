


const itemsList=[
    {
      "name": "Wireless Mouse",
      "description": "Ergonomic wireless mouse with adjustable DPI.",
      "price": 29.99,
      "image": "https://via.placeholder.com/150?text=Wireless+Mouse",
      "category":"Mouse"
    },
    {
      "name": "Mechanical Keyboard",
      "description": "RGB backlit mechanical keyboard with Cherry MX switches.",
      "price": 89.99,
      "image": "https://via.placeholder.com/150?text=Mechanical+Keyboard",
      "category":"Keyboard"
    },
    {
      "name": "Gaming Headset",
      "description": "Surround sound gaming headset with noise-cancelling microphone.",
      "price": 59.99,
      "image": "https://via.placeholder.com/150?text=Gaming+Headset",
      "category":"Headset"
    },
    {
      "name": "27-inch Monitor",
      "description": "4K UHD monitor with IPS display and 144Hz refresh rate.",
      "price": 329.99,
      "image": "https://via.placeholder.com/150?text=27-inch+Monitor",
      "category":"Monitor"
    },
    {
      "name": "Laptop Stand",
      "description": "Adjustable aluminum laptop stand for ergonomic work setup.",
      "price": 39.99,
      "image": "https://via.placeholder.com/150?text=Laptop+Stand",
      "category":"Computer"

    },
    {
      "name": "USB-C Hub",
      "description": "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader.",
      "price": 24.99,
      "image": "https://via.placeholder.com/150?text=USB-C+Hub",
      "category":"USB"
    },
    {
      "name": "External SSD",
      "description": "Portable external SSD with 1TB storage and USB 3.1 interface.",
      "price": 129.99,
      "image": "https://via.placeholder.com/150?text=External+SSD",
      "category":"SSD"
    },
    {
      "name": "Smartphone Stand",
      "description": "Adjustable smartphone stand with 360-degree rotation.",
      "price": 19.99,
      "image": "https://via.placeholder.com/150?text=Smartphone+Stand",
      "category":"Cellphone"
    },
    {
      "name": "Bluetooth Speaker",
      "description": "Portable Bluetooth speaker with 10-hour battery life.",
      "price": 49.99,
      "image": "https://via.placeholder.com/150?text=Bluetooth+Speaker",
      "category":"Speaker"
    },
    {
      "name": "Webcam",
      "description": "1080p HD webcam with built-in microphone and privacy cover.",
      "price": 34.99,
      "image": "https://via.placeholder.com/150?text=Webcam",
      "category":"Cam"
    },
    {
      "name": "Wireless Charger",
      "description": "Fast wireless charger with Qi compatibility.",
      "price": 25.99,
      "image": "https://via.placeholder.com/150?text=Wireless+Charger",
      "category":"Charger"
    },
    {
      "name": "Noise-Cancelling Headphones",
      "description": "Over-ear noise-cancelling headphones with Bluetooth connectivity.",
      "price": 199.99,
      "image": "https://via.placeholder.com/150?text=Noise-Cancelling+Headphones",
      "category":"Headset"
    },
    {
      "name": "Smartwatch",
      "description": "Smartwatch with heart rate monitor and GPS.",
      "price": 149.99,
      "image": "https://via.placeholder.com/150?text=Smartwatch",
      "category":"Watch"
    }
  ]

let htmlGenerator= (arrayItems) =>{
    
    let result="";
    let conteiner1=document.getElementById("container1");
arrayItems.forEach(item => {
    
    let variable=`<div class="card">
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
result+=variable;
});
conteiner1.innerHTML=result;
}

document.addEventListener('DOMContentLoaded', () => {

    htmlGenerator(itemsList);
});

let filterByName =() =>{
    const inputText=document.getElementById("input1").value.toLowerCase();
    if (!inputText){
        htmlGenerator(itemsList);
    }
    else {
        const filteredProducts=itemsList.filter((item)=>{
            return item.name.toLowerCase().includes(inputText);
        });

        if (filteredProducts.length > 0) {
            htmlGenerator(filteredProducts);
        } else {
            alert("No se encontraron productos con esa descripcion.");
        }   
    }
}    

const button=document.getElementById("buscar");
button.addEventListener("click",filterByName);

