const search= () => {
    // Taking the value that is keyed-in the search box
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const storeItems = document.getElementById("product-list").value; 
    const product = document.querySelectorAll(".product");
    const pName = storeItems?.getElementsByTagName("h2").innerHTML;
    
    // console.log(searchBox);
    // console.log(storeItems);
    // console.log(pName);

    for (let i = 0; i < pName.length; i++) {
        let match = product[i].getElementsByTagName("h2")[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
        // console.log(match);
    }
}