const products = [
  {
  pic: `img/GreyChino.jpg`,
  name: `Grey Chino Pants`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 25.00,
  category: `pants`,
  },{
  name: `Adidas Sweat Pants`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 10.00,
  category: `pants`,
  },{
  name: `Grey Pants`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 20.00,
  category: `pants`,
  },{
  name: `Beige Cargo Pants`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 30.00,
  category: `pants`,
  },{
  name: `Blue Track Pants`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `pants`,
  },{
  name: `Mountain Sweater`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `sweaters`,
  },{
  name: `Blue Cardigan`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `sweaters`,
  },{
  name: `Grey Sweater`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `sweaters`,
  },{
  name: `Graphic Sweater`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `sweaters`,
  },{
  name: `Black Sweater`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `sweaters`,
  },{
  name: `Black T-shirt`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `tshirts`,
  },{
  name: `Graphic T-shirt`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `tshirts`,
  },{
  name: `White T-shirt`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `tshirts`,
  },{
  name: `Red Text T-shirt`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `tshirts`,
  },{
  name: `Bacon T-shirt`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `tshirts`,
  },{
  name: `New York Hat`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `hats`,
  },{
  name: `Summer Hat`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `hats`,
  },{
  name: `Cowboy Hat`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `hats`,
  },{
  name: `Ice Cream Hat`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `hats`,
  },{
  name: `Bucket Hat`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `hats`,
  }
]




function getProductsAsHTMLString(product) {

  return `<article class="product">
  <header>
    <img class="prodPic" src="${product.pic}">
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
      <a href="#">see more ${product.category}</a>
    </footer>
  </form>
</article>`
}

function renderProducts(arr){
  const arrOfHtml = arr.map (getProductsAsHTMLString);
  const strOfHtml = arrOfHtml.join('\n');
  document.getElementById('products').innerHTML = strOfHtml;
}






function filterByName(product) {
  // When a parameter it sent to a filter, it gets stored as "this"
  return product.name.toLowerCase().includes(this.trim().toLowerCase())
}


function searchByName(event) {
  const searchTerm = event.target.value; // From the input field
  const arrNameCheck = products.filter(filterByName, searchTerm)
  renderProducts(arrNameCheck);
}

function searchByCat(event) {
  const searchTerm = event.target.value; // From the dropdown/select field
  const arrCatCheck = products.filter(filterByCat, searchTerm)
  renderProducts(arrCatCheck);
}
renderProducts(products);

document.getElementById('nameSearch').addEventListener('input', searchByName)
document.getElementById('catSearch').addEventListener('change', searchByCat)
