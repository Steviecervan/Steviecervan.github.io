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

  //Displaying the total

  let itemTotal = 0;

  let item_total = document.createElement("td");
  item_total.classList = "item-total-column";

  let itemTotalLabel = document.createElement("label");
  itemTotalLabel.classList = "itm-total";
  itemTotalLabel.id = "itm-total-label";
  itemTotalLabel.textContent = itemTotal;
  item_total.appendChild(itemTotalLabel);

  //Making the adding and subtracting button

  //Adding Button --------------------------------------------------------------
  let adding_Button_Column = document.createElement("td");
  adding_Button_Column.classList = "adding-btn-column";

  let adding_button = document.createElement("button");
  adding_button.classList = "adding-btn";
  adding_button.textContent = "+";
  adding_button.onclick = function addingButtonPressed() {
    console.log("Adding Button Pressed");
    itemTotal++;
    itemTotalLabel.textContent = itemTotal;
  };

  adding_Button_Column.appendChild(adding_button);

  //Subtracting Button --------------------------------------------------------------
  let subtract_Button_Column = document.createElement("td");
  subtract_Button_Column.classList = "subtract-btn-column";

  let subtract_button = document.createElement("button");
  subtract_button.classList = "subtract-btn";
  subtract_button.textContent = "-";
  subtract_button.onclick = function subtractButtonPressed() {
    console.log("Subtract Button Pressed");
    itemTotal--;
    itemTotalLabel.textContent = itemTotal;
  };

  subtract_Button_Column.appendChild(subtract_button);

  //Adding Columns to row -----------------------------------------------------------
  item_row.appendChild(item_name);
  item_row.appendChild(item_price);
  item_row.appendChild(item_total);
  item_row.appendChild(adding_Button_Column);
  item_row.appendChild(subtract_Button_Column);

  //Adds the row to the table -------------------------------------------------------
  displayContainer.appendChild(item_row);

  //Clears all information in the input field
  itemNameElement.value = "";
  itemPriceElement.value = "";
}
