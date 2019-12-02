const products = [
  {
  name: `Product One`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`
  },{
  name: `Product Two`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`
  },{
  name: `Product Three`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`
  },{
  name: `Product Four`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`
  },{
  name: `Product Five`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`
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
      <data value="39"><del>$50.00</del> <ins>$39.00</ins></data>
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