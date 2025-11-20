const bookmarkList = ["its","been","a","long","day","without","you","my","friend"];
const filterList = ["Low price"];
const bookmark = document.getElementById("BookmarkButton");
const search = document.getElementById("searchBox");
const filter = document.getElementById("Filters");
const searchList = document.getElementById("searchedItem");
const map = document.getElementById("map");
let activeFilters = [];

const database =
    //Calc 2 book
    [[null,"Grant's Tutoring: Calculus Two", "Calculus", 10.00,"Marcus G","Grants Tutoring calculus 2 book, great condition, minimal wear.","123 Main St, Winnipeg"],
    //calc 1 book
    [null,"James Stewart: Calculus, eighth edition", "Calculus", 20.00,"Mary B","Intro to calculus book for MATH1500, like-new condition.","456 Elm St, Winnipeg"],
    //pysch books
    [null,"Garry L. Martin: Applied Sport Psychology", "Psychology", 30.00,"Patrick S","Sport Psychology book for PSYCH1200, fair condition, worn spine.","789 Maple Ave, Winnipeg"],
    [null,"Beth Morling: Research Methods in Psychology", "psychology", 40.00,"Garry V","Texbook for PSYC2250, used condition.","101 Oak St, Winnipeg"],
    //ECON books
    [null,"Paul Krugman: Microeconomics: Canadian Edition", "Economics", 40.00,"James P","Texbook for ECON1010, great condition, no damage.","202 Pine Rd, Winnipeg"],
    [null,"N. Gregory Mankiw: Macroeconomics: Twelfth Edition", "Economics", 40.00,"Natalia P","Textbook for ECON2020, like-new condition","303 Cedar Ln, Winnipeg"],
    //Math book
    [null,"John A. Beachy: Abstract Algebra", "Math", 40.00,"Minnette F","Texbook for MATH3320, mint condition.","404 Birch Blvd, Winnipeg"],
    [null,"Howard Anton: Elementary Linear Algebra", "Math", 40.00,"Jeff N","Texbook for MATH1300, used condition.","505 Spruce St, Winnipeg"],
    //Biology book
    [null,"Marieb Human Anatomy & Physiology", "Biology", 40.00,"Franklin B","Textbook for BIOL1410, great condition, no rips.","606 Main St, Winnipeg"],
    [null,"Ray Evert: Raven Biology of Plants", "Biology", 100.00,"Chloe B","Hardcover texbook for BIOL2240, perfect condition.","707 Elm St, Winnipeg"],
    //Russian book
    [null,"Robin: Golosa 1", "Language", 60.00,"Colin L", "Texbook for RUSN1302, used condition, writing in book.","808 Maple Ave, Winnipeg"],
    //physics book
    [null,"David Young: Physics","Physics", 40.00,"Edward V", "Textbook for PHYS1020, like-new condition","909 Oak St, Winnipeg"],
    //Geology
    [null,"Reed Wincaster: Historical Geology","Geology", 35.00, "Jordan G","Textbook for GEOL1400, fair condition.","111 Pine Rd, Winnipeg"],
    //Marketing
    [null,"Principles of Marketing","Marketing", 20.00,"Edward V", "Textbook for MKT2210, like-new condition","222 Cedar Ln, Winnipeg"],
    //Astronomy
    [null,"Chaisson McMillan: Astronomy Today","Astronomy", 40.00, "Colin L","Textbook for ASTR1810, used condition.","333 Birch Blvd, Winnipeg"],
    //Chem
    [null,"Chemistry in Context: Applying Chemistry to Society", "Chemistry", 38.00,"Suki W","Textbook for CHEM1018, poor condition","444 Spruce St, Winnipeg"],
    //English
    [null,"Practical Grammar: A Canadian Writer's Resource", "English", 15.00,"Mona G","Textbook for ENGL0930, great condition.","555 Main St, Winnipeg"],
    [null,"William Shakespeare: Romeo and Juliet","English", 2.00, "John B","Required reading for ENGL1200, poor condition","666 Elm St, Winnipeg"],
    //Engineering
    [null,"Engineering Mechanics: Statics, 9th Edition", "Engineering", 50.00,"Suki W","Texbook for ENG1440, like-new condition","777 Maple Ave, Winnipeg"]];

database.forEach(item => {
    searchedData(item);
    if (!filterList.some(f => f.toLowerCase() === item[2].toLowerCase())) {
        filterList.push(item[2]);
    }
});

const userMarker = document.createElement("div");
userMarker.className = "map-marker user-marker";
userMarker.textContent = "U";
userMarker.style.left = 50 + "%";
userMarker.style.top = 50 + "%";
userMarker.title = "You are here!";
userMarker.addEventListener("click", () => {
    document.getElementById("mapHeader").textContent = "Yourself";
    document.getElementById("mapLocation").textContent = "Your Location";
});
map.appendChild(userMarker);

database.forEach(item => {
    const itemMarker = document.createElement("div");
    itemMarker.className = "map-marker item-marker";
    itemMarker.textContent = item[1][0];
    itemMarker.style.left = (Math.random() * 50) + 25 + "%";
    itemMarker.style.top = (Math.random() * 50) + 25 + "%";
    itemMarker.title = `Seller: ${item[4]}\nAddress: ${item[6]}`;
    itemMarker.addEventListener("click", () => {
        document.getElementById("mapHeader").textContent = item[4];
        document.getElementById("mapLocation").textContent = item[6];
    });
    map.appendChild(itemMarker);
    item.push(itemMarker);
});

filterList.forEach((b) => {
    const choosenFilters = document.getElementById("choosenFilters");

    const opt = document.createElement("button");
    opt.textContent = b;

    opt.addEventListener("click", () => {
        if(choosenFilters.contains(opt)) {
            filterWindow.appendChild(opt);
            opt.style.margin = "";
            activeFilters.pop(opt.textContent);
        } else {
            choosenFilters.appendChild(opt);
            opt.style.margin = "1rem 0.5rem";
            activeFilters.push(opt.textContent);
        }
        if(choosenFilters.childElementCount === 0) {
            choosenFilters.style.marginBottom = "0rem";
        } else if(choosenFilters.childElementCount === 1) {
            choosenFilters.style.marginBottom = "1rem";
        }
        updateResults();
    });

    filterWindow.appendChild(opt);
});

bookmark.addEventListener("click", () => {
    const bookmarkWindow = document.getElementById("bookmarkWindow");
    const filterWindow = document.getElementById("filterWindow");

    if (filterWindow.style.display === "flex") {//only the bookmark window can be open and not filter window
        filterWindow.style.display = "none";
    }

    if (bookmarkWindow.style.display === "flex") {
        bookmarkWindow.style.display = "none";
    } else {
        bookmarkWindow.style.display = "flex";
    }
    
    bookmarkWindow.innerHTML = "";

    bookmarkList.forEach((b) => {
        const btn = document.createElement("button");
        btn.textContent = b;
        btn.style.width = "100%";
        btn.style.margin = "0.2rem 0";
        btn.style.padding = "1rem";
        btn.style.borderRadius = "1rem";
        btn.style.border = "0.15rem solid #aaa";
        btn.style.cursor = "pointer";
        // btn.style.boxShadow = "var(--shadow)";

        btn.addEventListener("click", () => {
            console.log("Clicked bookmark:", b);
        });

        bookmarkWindow.appendChild(btn);
    });
});

filter.addEventListener("click", () => {
    const filterWindow = document.getElementById("filterWindow");
    const bookmarkWindow = document.getElementById("bookmarkWindow");
    
    if (bookmarkWindow.style.display === "flex") {//only the filter window can be open and not bookmark window
        bookmarkWindow.style.display = "none";
    }

    if (filterWindow.style.display === "flex") {
        filterWindow.style.display = "none";
    } else {
        filterWindow.style.display = "flex";
    }
});

search.addEventListener("keydown", (event) => {
    if(event.key == "Enter") {
        updateResults();
    }
});

function searchedData(item) {
    const box = document.createElement("div");
    box.className = "itemBox";

    box.innerHTML = `
        <div class="itemImage">${item[0] ? `<img src="${item[0]}">` : "(no image)"}</div>
        <div class="itemInfo">
            <h2>${item[1]}</h2>
            <p><strong>Price: $ ${item[3]}</p>
            <p><strong>Seller: ${item[4]}</p>
            <p><strong>Description: ${item[5]}</p>
        </div>
    `;
    searchList.appendChild(box);
}

function updateResults() {
    const query = search.value.trim().toLowerCase();
    const sortByLowPrice = activeFilters.includes("Low price");
    const itemMarker = document.createElement("div");
    const markers = map.querySelectorAll(".item-marker");

    searchList.innerHTML = "";

    let categoryFilters = activeFilters.filter(f => f.toLowerCase() !== "low price");

    let results = database.filter(item => {
        let matchesSearch = item[1].toLowerCase().includes(query);

        let matchesCategory =
            categoryFilters.length === 0 || 
            categoryFilters.some(f => f.toLowerCase() === item[2].toLowerCase());

        return matchesSearch && matchesCategory;
    });

    if (sortByLowPrice) {
        results.sort((a, b) => a[3] - b[3]);
    }

    if (results.length === 0) {
        searchList.textContent = "No item found.";
        return;
    }

    markers.forEach(marker => marker.remove());

    results.forEach(item => {
        searchedData(item);
        if (item[8]) {
            map.appendChild(item[8]);
        } else {
            const itemMarker = document.createElement("div");
            itemMarker.className = "map-marker item-marker";
            itemMarker.textContent = item[1][0];
            itemMarker.style.left = (Math.random() * 50) + 25 + "%";
            itemMarker.style.top = (Math.random() * 50) + 25 + "%";
            itemMarker.title = `${item[1]}\nPrice: $${item[3]}\nSeller: ${item[4]}`;
            itemMarker.addEventListener("click", () => {
                document.getElementById("mapHeader").textContent = item[4];
                document.getElementById("mapLocation").textContent = item[6];
            });
            map.appendChild(itemMarker);
            item[8] = itemMarker;
        }
    });
}

