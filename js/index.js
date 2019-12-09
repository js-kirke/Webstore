const products = [
  {
  pic: `img/GreyChino.jpg`,
  name: `Grey Chino Pants`,
  description: `Grey chino pants that are perfect for any occasion, casual or formal!  Made with 100% cotton.`,
  price: 25.00,
  category: `pants`,
  },{
  pic:`img/trackpants.jpg`,
  name: `Adidas Sweat Pants`,
  description: `Adidas brand track pants aregreat for athletes who want to look good while working out! Buy them today before they're gone!`,
  price: 10.00,
  category: `pants`,
  },{
  pic:`img/greyPant.jpg`,
  name: `Grey Pants`,
  description: `100% recycled material sustainable pants.  100% of sales of these pants will go to Rainforest charities.`,
  price: 20.00,
  category: `pants`,
  },{
  pic:`img/beigeCargo.jpg`,
  name: `Beige Cargo Pants`,
  description: `Providing comfort and class with these cargo pants.  Plenty of pocket space so you'll never need a backpack again.`,
  price: 30.00,
  category: `pants`,
  },{
  pic:`img/bluetrack.jpg`,
  name: `Blue Track Pants`,
  description: `Adidas brand track pants aregreat for athletes who want to look good while working out! Buy them today before they're gone!`,
  price: 35.00,
  category: `pants`,
  },{
  pic:`img/MountainSweater.jpg`,
  name: `Mountain Sweater`,
  description: `Cashmere mountain sweater for the alpine enthusiast.`,
  price: 35.00,
  category: `sweaters`,
  },{
  pic:`img/bluecarti.jpg`,
  name: `Blue Cardigan`,
  description: `Keep warm this winter with this cardigan.  Available in several colours.`,
  price: 35.00,
  category: `sweaters`,
  },{
  pic:`img/greysweater.jpg`,
  name: `Grey Sweater`,
  description: `Cool sweater for the cold winter months.`,
  price: 35.00,
  category: `sweaters`,
  },{
  pic:`img/weirdsweat.jpg`,
  name: `Graphic Sweater`,
  description: `Express your wild side with this cool sweater`,
  price: 35.00,
  category: `sweaters`,
  },{
  pic:`img/blksweat.jpg`,
  name: `Black Sweater`,
  description: `Elegant and stylish`,
  price: 35.00,
  category: `sweaters`,
  },{
  pic:`img/blkt.jpg`,
  name: `Black T-shirt`,
  description: `Black T-shirts are perfect for any occasion`,
  price: 35.00,
  category: `tshirts`,
  },{
  pic:`img/graphtee.jpg`,
  name: `Graphic T-shirt`,
  description: `Express your uniqueness with this graphic tee.`,
  price: 35.00,
  category: `tshirts`,
  },{
  pic:`img/whttee.jpg`,
  name: `White T-shirt`,
  description: `Plain white tees will complete any outfit`,
  price: 35.00,
  category: `tshirts`,
  },{
  pic:`img/redtexttee.jpg`,
  name: `Red Text T-shirt`,
  description: `This red text tee shirt will make you stand out!`,
  price: 35.00,
  category: `tshirts`,
  },{
  pic:`img/bacontee.jpg`,
  name: `Bacon T-shirt`,
  description: `Make your friends laugh with this novelty bacon shirt`,
  price: 35.00,
  category: `tshirts`,
  },{
  pic:`img/NYhat.jpg`,
  name: `New York Hat`,
  description: `Great for baseball fans`,
  price: 35.00,
  category: `hats`,
  },{
  pic:`img/summerhat.jpg`,
  name: `Summer Hat`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `hats`,
  },{
  pic:`img/cowboyhat.jpg`,
  name: `Cowboy Hat`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `hats`,
  },{
  pic:`img/icecreamhat.jpg`,
  name: `Ice Cream Hat`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `hats`,
  },{
  pic:`img/buckt.jpg`,
  name: `Bucket Hat`,
  description: `Here is a shot of this product that might entice a user to click and add it to their cart.`,
  price: 35.00,
  category: `hats`,
  }
]




function getProductsAsHTMLString(product) {

  return `<article class="product">
  <header>
    <img class="prodPic" src="${product.pic}" alt="">
  </header>
  <h3>${product.name}</h3>
  <p>${product.description}</p>
  <form>
    <legend>Colours</legend>
      <ul>
        <li><label><input type="radio" name="colour" value="r"> <span>Red</span></label></li>
        <li><label><input type="radio" name="colour" value="w"> <span>White</span></label></li>
        <li><label><input type="radio" name="colour" value="b"> <span>Blue</span></label></li>
      </ul>
      <legend>Sizes</legend>
      <ul>
        <li><label><input type="radio" name="size" value="m"> <span>M</span></label></li>
        <li><label><input type="radio" name="size" value="l"> <span>L</span></label></li>
        <li><label><input type="radio" name="size" value="xl"> <span>XL</span></label></li>
      </ul>
    <footer>
    <div class="block">
      <data value="${product.price}"><ins>$ ${product.price}.00</ins></data>
    </div>
      <div class="block">
        <button type="button"><span class="material-icons">add_shopping_cart</span></button>
        <button type="button"><span class="material-icons">favorite</span></button>
      </div>
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
  return product.name.toLowerCase().includes(this.trim().toLowerCase())
}


function filterByCat(product) {
  return product.category == this;
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

document.getElementById('btn').addEventListener('click', event => {
  document.getElementById('menu').classList.toggle('open');
});

document.getElementById('nameSearch').addEventListener('input', searchByName)
document.getElementById('catSearch').addEventListener('change', searchByCat)
