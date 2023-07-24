class Productmanager {
    constructor(){
        this.products = [];
    }

    static id = 0 

    addproducts(title, descripcion, price, image, code, stock) {
        for (let i = 0; i < this.products.length; i++){
            if(this.products[i].code === code){
                console.log ("el codigo ${code} esta repetido")
                break;
            }
        }

        const newProduct ={
            title,
            descripcion,
            price,
            image,
            code,
            stock,
        }

        if (!Object.values(newProduct).includes(undefined)){
            Productmanager.id++
            this.products.push({
            ...newProduct,
            id: Productmanager.id,
        });
        }else{
            console.log("todos los campos son requeridos")
        }
    }
    
    getproduct(){
        return this.products; 
    }

    existe(id){
        return this.products.find((producto) => producto.id === id);
    }

    getproductById(id){
        !this.existe(id) ? console.log("Not Found") : console.log (this.existe(id))
    }
}
    

const productos = new Productmanager();

//primera llamada = arreglo vacio 
console.log(productos.getproduct());


// Agregamos producto 
productos.addproducts("titulo1","descripcion1",1000,"imagen1","abc123", 5);
productos.addproducts("titulo2", "descripcion2", 1000, "imagen2", "abc124", 6);




// segunda llamada = arreglo con producto 
console.log(productos.getproduct());

//validacion de code repetido
productos.addproducts("titulo3", "descripcion3", 2000, "imagen3", "abc125", 5);

//Busqueda de producto por ID 
productos.getproductById(2)

//Busqueda por id no encontrado 
productos.getproductById(3)