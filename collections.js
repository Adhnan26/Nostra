// Offer Section
var offerbar = document.querySelector(".offer-bar")
var offerclose = document.getElementById("offer-close").addEventListener("click", () => {
    offerbar.style.display = "none"
})

// Side Navbar
var sideNavMenu = document.getElementById("side-navbar-activate")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0px"
})

document.getElementById("side-navbar-close").addEventListener("click", () => {
    document.querySelector(".side-navbar").style.marginLeft = "-50%"
})

// Search Functionality
var products = document.querySelector(".products-Container");
var search = document.getElementById("search");
var productlist = products.querySelectorAll(".product");

search.addEventListener("keyup", (event) => {
    var enteredValue = event.target.value.toUpperCase();

    productlist.forEach((product) => {
        var productname = product.querySelector("h1").textContent.toUpperCase();

        if (productname.indexOf(enteredValue) < 0) {
            product.style.display = "none";
        } else {
            product.style.display = "block";
        }
    });
});



// Checkbox Filter Functionality (for all checkboxes)
var checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    var selectedValues = [];

    // collect checked checkbox values
    checkboxes.forEach((cb) => {
      if (cb.checked) {
        selectedValues.push(cb.value.toLowerCase());
      }
    });

    productlist.forEach((product, index) => {
      var productname = product.querySelector("h1").textContent.toLowerCase();

      // Show all if no checkbox selected
      if (selectedValues.length === 0) {
        product.style.display = "block";
      } 
      // Only new
      else if (selectedValues.includes("new") && !selectedValues.includes("old")) {
        if (index < 3) product.style.display = "block";
        else product.style.display = "none";
      } 
      // Only old
      else if (selectedValues.includes("old") && !selectedValues.includes("new")) {
        if (index >= 3) product.style.display = "block";
        else product.style.display = "none";
      } 
      // Both new & old
      else if (selectedValues.includes("new") && selectedValues.includes("old")) {
        product.style.display = "block";
      } 
      // Normal checkboxes like colors / occasions
      else {
        var matchFound = false;
        selectedValues.forEach((value) => {
          if (productname.indexOf(value) > -1) matchFound = true;
        });

        product.style.display = matchFound ? "block" : "none";
      }
    });
  });
});

