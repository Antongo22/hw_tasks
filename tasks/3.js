export class Product {
    constructor(name, price, quantity, description) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.description = description;
    }
  }
  
  export class ProductList {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    filterProducts(queryString) {
   
      const filters = queryString.split('&');
      
   
      const filteredProducts = this.products.filter(product => {
        for (let filter of filters) {
   
          const [property, operator, value] = filter.split('-');
  
       
          if (property === 'name') {
            if (operator === 'contains' && !product.name.includes(value)) {
              return false;
            }
            if (operator === 'starts' && !product.name.startsWith(value)) {
              return false;
            }
            if (operator === 'ends' && !product.name.endsWith(value)) {
              return false;
            }
          }
  
      
          if (property === 'price') {
            if (operator === '=' && product.price !== Number(value)) {
              return false;
            }
            if (operator === '<' && product.price >= Number(value)) {
              return false;
            }
            if (operator === '>' && product.price <= Number(value)) {
              return false;
            }
            if (operator === '<=' && product.price > Number(value)) {
              return false;
            }
            if (operator === '>=' && product.price < Number(value)) {
              return false;
            }
          }
  
      
          if (property === 'quantity') {
            if (operator === '=' && product.quantity !== Number(value)) {
              return false;
            }
            if (operator === '<' && product.quantity >= Number(value)) {
              return false;
            }
            if (operator === '>' && product.quantity <= Number(value)) {
              return false;
            }
            if (operator === '<=' && product.quantity > Number(value)) {
              return false;
            }
            if (operator === '>=' && product.quantity < Number(value)) {
              return false;
            }
          }
  
        
          if (property === 'description') {
            if (operator === 'contains' && !product.description.includes(value)) {
              return false;
            }
            if (operator === 'starts' && !product.description.startsWith(value)) {
              return false;
            }
            if (operator === 'ends' && !product.description.endsWith(value)) {
              return false;
            }
          }
        }
  
       
        return true;
      });
  
      return filteredProducts;
    }
  }
  