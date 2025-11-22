const bookmarkList = [];
const filterList = ["Low price"];
const bookmark = document.getElementById("BookmarkButton");
const search = document.getElementById("searchBox");
const filter = document.getElementById("Filters");
const searchList = document.getElementById("searchedItem");
const map = document.getElementById("map");
let activeFilters = [];

const database =
    // Calc 2 book
    [[["https://bookstore.umanitoba.ca/storeimages/158-1900356-1.jpg"], "Grant's Tutoring: Calculus Two", "Calculus", 10.00,"Marcus G","Grants Tutoring calculus 2 book, great condition, minimal wear.","123 Main St, Winnipeg"],
    // calc 1 book
    [["https://m.media-amazon.com/images/I/81ziq+bBzdL._SY342_.jpg"], "James Stewart: Calculus, eighth edition", "Calculus", 20.00,"Mary B","Intro to calculus book for MATH1500, like-new condition.","456 Elm St, Winnipeg"],
    // psych books
    [["https://archive.org/services/img/isbn_9780968199558/full/pct:200/0/default.jpg"], "Garry L. Martin: Applied Sport Psychology", "Psychology", 30.00,"Patrick S","Sport Psychology book for PSYCH1200, fair condition, worn spine.","789 Maple Ave, Winnipeg"],
    [["https://m.media-amazon.com/images/I/61RpDc2z6LL._AC_UF1000,1000_QL80_.jpg"], "Beth Morling: Research Methods in Psychology", "Psychology", 40.00,"Garry V","Texbook for PSYC2250, used condition.","101 Oak St, Winnipeg"],
    // ECON books
    [[ "https://m.media-amazon.com/images/I/810gS3q6U5L._SY385_.jpg"], "Paul Krugman: Microeconomics: Canadian Edition", "Economics", 40.00,"James P","Texbook for ECON1010, great condition, no damage.","202 Pine Rd, Winnipeg"],
    [["https://m.media-amazon.com/images/I/81u7zSsD24L._AC_UF1000,1000_QL80_.jpg"], "N. Gregory Mankiw: Macroeconomics: Twelfth Edition", "Economics", 40.00,"Natalia P","Textbook for ECON2020, like-new condition","303 Cedar Ln, Winnipeg"],
    // Math book
    [["https://m.media-amazon.com/images/I/81+xORCwIUL._AC_UF1000,1000_QL80_.jpg"], "John A. Beachy: Abstract Algebra", "Math", 40.00,"Minnette F","Texbook for MATH3320, mint condition.","404 Birch Blvd, Winnipeg"],
    [["https://m.media-amazon.com/images/I/81Od7SspQCL.jpg"], "Howard Anton: Elementary Linear Algebra", "Math", 40.00,"Jeff N","Texbook for MATH1300, used condition.","505 Spruce St, Winnipeg"],
    // Biology book
    [["https://www.pearson.com/store//pmccommercewebservices/v2/medias/size-W370-A1030-00-19-77-A103000197789-A103000197789-Lrg.jpg?context=bWFzdGVyfGltYWdlc3wxNTg3NjN8aW1hZ2UvanBlZ3xzeXMtbWFzdGVyL2ltYWdlcy9oM2IvaDVmLzE0NTU4NzU4MjczMDU0L3NpemVfVzM3MF8vQTEwMzAvMDAvMTkvNzcvQTEwMzAwMDE5Nzc4OS9BMTAzMDAwMDE5Nzc4OV9McmcuanBnfDY1OTQ3OWUwNWQ2YTRhNjJmMWYzNGZkMTkzZmExYThlM2I0MGViYTRjNDkyNDljYzcyYzU2ZWI3YTM0Njg5NGRj"
    ], "Marieb Human Anatomy & Physiology", "Biology", 40.00,"Franklin B","Textbook for BIOL1410, great condition, no rips.","606 Main St, Winnipeg"],
    [["https://m.media-amazon.com/images/I/81N9ElHj+QL._AC_UF1000,1000_QL80_.jpg"], "Ray Evert: Raven Biology of Plants", "Biology", 100.00,"Chloe B","Hardcover texbook for BIOL2240, perfect condition.","707 Elm St, Winnipeg"],
    // Russian book
    [["https://pictures.abebooks.com/isbn/9780205208906-us.jpg"], "Robin: Golosa 1", "Language", 60.00,"Colin L", "Texbook for RUSN1302, used condition, writing in book.","808 Maple Ave, Winnipeg"],
    // physics book
    [["https://www.wiley.com/storefront-pdp-assets/_next/image?url=https%3A%2F%2Fmedia.wiley.com%2Fproduct_data%2FcoverImage300%2F39%2F11197735%2F1119773539.jpg&w=640&q=75"], "David Young: Physics","Physics", 40.00,"Edward V", "Textbook for PHYS1020, like-new condition","909 Oak St, Winnipeg"],
    // Geology
    [["https://m.media-amazon.com/images/I/81nPqkvZ09L._AC_UF1000,1000_QL80_.jpg"], "Reed Wicander: Historical Geology","Geology", 35.00, "Jordan G","Textbook for GEOL1400, fair condition.","111 Pine Rd, Winnipeg"],
    // Marketing
    [[ "https://m.media-amazon.com/images/I/61VIKY4Rr+L._SY385_.jpg"], "Principles of Marketing","Marketing", 20.00,"Edward V", "Textbook for MKT2210, like-new condition","222 Cedar Ln, Winnipeg"],
    // Astronomy
    [["https://m.media-amazon.com/images/I/41Pd+PYHSfL._UF1000,1000_QL80_.jpg"], "Chaisson McMillan: Astronomy Today","Astronomy", 40.00, "Colin L","Textbook for ASTR1810, used condition.","333 Birch Blvd, Winnipeg"],
    // Chem
    [["https://m.media-amazon.com/images/I/710JNIhpzAL.jpg"], "Chemistry in Context: Applying Chemistry to Society", "Chemistry", 38.00,"Suki W","Textbook for CHEM1018, poor condition","444 Spruce St, Winnipeg"],
    // English
    [["https://m.media-amazon.com/images/I/51CXHhooDpL.jpg"], "Practical Grammar: A Canadian Writer's Resource", "English", 15.00,"Mona G","Textbook for ENGL0930, great condition.","555 Main St, Winnipeg"],
    [["https://m.media-amazon.com/images/I/917ugcwNFsL._AC_UF1000,1000_QL80_.jpg"], "William Shakespeare: Romeo and Juliet","English", 2.00, "John B","Required reading for ENGL1200, poor condition","666 Elm St, Winnipeg"],
    // Engineering
    [["https://m.media-amazon.com/images/I/91SEZwPPQPL._UF1000,1000_QL80_.jpg"], "Engineering Mechanics: Statics, 9th Edition", "Engineering", 50.00,"Suki W","Texbook for ENG1440, like-new condition","777 Maple Ave, Winnipeg"]];

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
    bookmarkAdd(bookmarkWindow);
});

function bookmarkAdd() {
    bookmarkWindow.innerHTML = "";

    bookmarkList.forEach((b) => {
        const alreadyExists = Array.from(bookmarkWindow.children)
            .some(child => child.textContent.trim().toLowerCase() === b.trim().toLowerCase());

        if (alreadyExists) {
            return;
        }

        const btn = document.createElement("button");
        btn.textContent = b;
        btn.style.width = "100%";
        btn.style.margin = "0.2rem 0";
        btn.style.padding = "1rem";
        btn.style.borderRadius = "1rem";
        btn.style.border = "0.15rem solid #aaa";
        btn.style.cursor = "pointer";

        btn.addEventListener("click", () => {
            let result = database.filter(item => {
                let matchesSearch = item[1].toLowerCase() === b.toLowerCase();
                return matchesSearch;
            });
            sessionStorage.setItem("data", JSON.stringify(result[0]));
            window.location.href = "listings.html";
        });

        bookmarkWindow.appendChild(btn);
    });
}

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
        <button class="bookmarkBtn">★</button>
        <div class="itemImage">${item[0][0] ? `<img src="${item[0][0]}">` : "(no image)"}</div>
        <div class="itemInfo">
            <h2>${item[1]}</h2>
            <p><strong>Price: $ ${item[3]}</p>
            <p><strong>Seller: ${item[4]}</p>
            <p><strong>Description: ${item[5]}</p>
        </div>

    `;
    box.querySelector(".bookmarkBtn").addEventListener("click", (event) => {
        event.stopPropagation();
        bookmarkList.push(item[1]);
        bookmarkAdd(document.getElementById("bookmarkWindow"));
    });
    box.addEventListener("click", () => {
        sessionStorage.setItem("data", JSON.stringify(item));
        window.location.href = "listings.html";
    });
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

function loadPostPageData() {
    const data = JSON.parse(sessionStorage.getItem("data"));
    database.push(data);
    searchedData(data);
}

loadPostPageData();