const products = [
  {
  name: `Product One`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 25.00
  },{
  name: `Product Two`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 10.00
  },{
  name: `Product Three`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 20.00
  },{
  name: `Product Four`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 30.00
  },{
  name: `Product Five`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00
  },{
  name: `Product Six`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00
  },{
  name: `Product Seven`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00
  },{
  name: `Product Eight`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00
  },{
  name: `Product Nine`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00
  },{
  name: `Product Ten`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00
  },{
  name: `Product Eleven`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00
  },{
  name: `Product Twelve`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00
  },{
  name: `Product Thirteen`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00
  },{
  name: `Product Fourteen`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00
  },{
  name: `Product Fifteen`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00
  },{
  name: `Product Sixteen`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00
  },{
  name: `Product Seventeen`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00
  },{
  name: `Product Eighteen`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00
  },{
  name: `Product Nineteen`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00
  },{
  name: `Product Twenty`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00
  }
]




function getProductsAsHTMLString(product) {

  return `<article class="product">
  <header>
    <img class="roundCorner" src="img/product.jpg" alt="Product Image">
  </header>
  <h3>${product.name}</h3>
  <p>${product.description}</p>
  <form>
    <fieldset>
      <legend>Colours</legend>
      <ul>
        <li><label><input type="radio" name="colour" value="r"> <span>Red</span></label></li>
        <li><label><input type="radio" name="colour" value="w"> <span>White</span></label></li>
        <li><label><input type="radio" name="colour" value="b"> <span>Blue</span></label></li>
      </ul>
    </fieldset>

    <fieldset>
      <legend>Sizes</legend>
      <ul>
        <li><label><input type="radio" name="size" value="m"> <span>M</span></label></li>
        <li><label><input type="radio" name="size" value="l"> <span>L</span></label></li>
        <li><label><input type="radio" name="size" value="xl"> <span>XL</span></label></li>
      </ul>
    </fieldset>

    <footer>
      <dl>
        <dt>Rating</dt>
        <dd>4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
      </dl>
      <data value="${product.price}"><ins>$ ${product.price}.00</ins></data>
      <button type="button"><span class="material-icons">add_shopping_cart</span></button>
      <button type="button"><span class="material-icons">favorite</span></button>
      <br>
      <a href="#">see more</a>
    </footer>
  </form>
</article>`
}

function renderProducts(arr){
  const arrOfHtml = arr.map (getProductsAsHTMLString);
  const strOfHtml = arrOfHtml.join('\n');
  document.getElementById('products').innerHTML = strOfHtml;
}
renderProducts(products);



function lowCostProd(products) {
  return products.price < 30.00 ;
}

function searchByName(event) {
  const searchTerm = event.target.value; // From the input field
  const arrNameCheck = products.filter(filterByName, searchTerm)
  renderProducts(arrNameCheck);
}


document.getElementById('nameSearch').addEventListener('input', searchByName)

document.getElementById('nameSearch').addEventListener('input', searchByName)
