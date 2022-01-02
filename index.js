function addItemToList() {
  let itemNameElement = document.getElementById("name-input-field");
  let itemPriceElement = document.getElementById("price-input-field");

  itemName = itemNameElement.value;
  itemPrice = itemPriceElement.value;

  let displayContainer = document.getElementById("item-display-table"); //The main source, the root of where the information will be displayed

  //Creating the "row" that the information will be displayed in
  let item_row = document.createElement("tr");
  item_row.classList = "item-row"; //This will be used for styling in css
  item_row.id = "item-" + itemName; //This will be the items id, stylized to the items name

  //Creating the column for the items name
  let item_name = document.createElement("td"); //This first td will be the name
  item_name.classList = "item-name-column"; //Used for stylization
  item_name.textContent = itemName;

  //Create the column for the items price
  let item_price = document.createElement("td"); //Creates the column with the price
  item_price.classList = "item-price-column"; //used for css
  item_price.textContent = itemPrice;

  item_row.appendChild(item_name);
  item_row.appendChild(item_price);

  displayContainer.appendChild(item_row);

  itemNameElement.value = "";
  itemPriceElement.value = "";
}
