function addItem() {
    var item = document.getElementById("item").value;
    if (item === "") {
        alert("Please enter a grocery item.");
        return;
    }
    var ul = document.getElementById("groceryList");
    var li = document.createElement("li");
    li.textContent = item;

    // Create remove button
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
        ul.removeChild(li);
    };

    li.appendChild(removeButton);
    ul.appendChild(li);

    // Clear the input field
    document.getElementById("item").value = "";
}

function showStoreMap() {
    const storeSelect = document.getElementById("storeSelect");
    const store = storeSelect.value;
    const mapContainer = document.getElementById("map");

    // Clear previous map if there is one
    mapContainer.innerHTML = "";

    if (store) {
        let mapSrc = "";

        // Set the map URL for the selected store
        if (store === "store1") {
            mapSrc = "https://www.google.com/maps/embed/v1/place?q=Store+1+Location&key=YOUR_GOOGLE_MAPS_API_KEY";
        } else if (store === "store2") {
            mapSrc = "https://www.google.com/maps/embed/v1/place?q=Store+2+Location&key=YOUR_GOOGLE_MAPS_API_KEY";
        } else if (store === "store3") {
            mapSrc = "https://www.google.com/maps/embed/v1/place?q=Store+3+Location&key=YOUR_GOOGLE_MAPS_API_KEY";
        }

        // Create an iframe element to display the map
        const iframe = document.createElement("iframe");
        iframe.src = mapSrc;
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.style.border = "none";
        mapContainer.appendChild(iframe);
    }
}