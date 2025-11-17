const bookmarkList = ["its","been","a","long","day","without","you","my","friend"];
const filterList = ["Math","Science","Economics","Geography","Psycology","Geography","Psycology"];
const bookmark = document.getElementById("BookmarkButton");
const search = document.getElementById("searchBox");
const filter = document.getElementById("Filters");
const searchList = document.getElementById("searchedItem");

const database = [[null,"Grant's Tutoring: Calculus Two","$10.00","Marcus G","Grants Tutoring calculus 2 book, great condition, minimal wear."],//Calc 2 book
		//calc 1 book
                    [null,"James Stewart: Calculus, eighth edition","$20.00","Mary B","Intro to calculus book for MATH1500, like-new condition."],
		//pysch books
                    [null,"Garry L. Martin: Applied Sport Psychology","$30.00","Patrick S","Sport Psychology book for PSYCH1200, fair condition, worn spine."],
		    [null,"Beth Morling: Research Methods in Psychology","$40.00","Garry V","Texbook for PSYC2250, used condition."],
		//ECON books
                    [null,"Paul Krugman: Microeconomics: Canadian Edition","$40.00","James P","Texbook for ECON1010, great condition, no damage."],
                    [null,"N. Gregory Mankiw: Macroeconomics: Twelfth Edition","$40.00","Natalia P","Textbook for ECON2020, like-new condition"],
		//Math book
                    [null,"John A. Beachy: Abstract Algebra","$40.00","Minnette F","Texbook for MATH3320, mint condition."],
                    [null,"Howard Anton: Elementary Linear Algebra","$40.00","Jeff N","Texbook for MATH1300, used condition."],
		//Biology book
                    [null,"Marieb Human Anatomy & Physiology","$40.00","Franklin B","Textbook for BIOL1410, great condition, no rips."],
                    [null,"Ray Evert: Raven Biology of Plants","$100.00","Chloe B","Hardcover texbook for BIOL2240, perfect condition."],
		//Russian book
                    [null,"Robin: Golosa 1","$60.00","Colin L","Texbook for RUSN1302, used condition, writing in book."],
		//physics book
                    [null,"David Young: Physics","$40.00","Edward V","Textbook for PHYS1020, like-new condition"],
		//Geology
                    [null,"Reed Wincaster: Historical Geology","$35.00","Jordan G","Textbook for GEOL1400, fair condition."],
		//Marketing
                    [null,"Principles of Marketing","$20.00","Edward V","Textbook for MKT2210, like-new condition."],
		//Astronomy
                    [null,"Chaisson McMillan: Astronomy Today","$40.00","Colin L","Textbook for ASTR1810, used condition."],
		//Chem
                    [null,"Chemistry in Context: Applying Chemistry to Society","$38.00","Suki W","Textbook for CHEM1018, poor condition"],
		//English
                    [null,"Practical Grammar: A Canadian Writer's Resource","$15.00","Mona G","Textbook for ENGL0930, great condition."],
                    [null,"William Shakespeare: Romeo and Juliet","$2.00","John B","Required reading for ENGL1200, poor condition."],
		//Engineering
                    [null,"Engineering Mechanics: Statics, 9th Edition","$50.00","Suki W","Texbook for ENG1440, like-new condition"]];

filterList.forEach((b) => {
    const choosenFilters = document.getElementById("choosenFilters");

    const opt = document.createElement("button");
    opt.textContent = b;
    opt.style.width = "100%";
    opt.style.margin = "0.2rem 0";
    opt.style.padding = "1rem";
    opt.style.borderRadius = "1rem";
    opt.style.border = "0.15rem solid #aaa";
    opt.style.cursor = "pointer";
    opt.style.boxShadow = "var(--shadow)";

    opt.addEventListener("click", () => {
        if(choosenFilters.contains(opt)) {
            filterWindow.appendChild(opt);
        } else {
            choosenFilters.appendChild(opt);
            opt.style.boxShadow = "";
        }
        if(choosenFilters.childElementCount === 0) {
            choosenFilters.style.marginBottom = "0rem";
        } else {
            choosenFilters.style.marginBottom = "1rem";
        }
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
        // let query = search.value.trim();
        // let index = database.findIndex(item => item[1] === query);

        // searchList.innerHTML = ""; // clear old results

        // if (index === -1) {
        //     searchList.textContent = "No item found.";
        //     return;
        // }

        // let item = database[index];
        for(let i = 0; i < 20; i++)
            searchedData(database[i]);
    }
});

function searchedData(item) {
    const box = document.createElement("div");
    box.className = "itemBox";

    box.innerHTML = `
        <div class="itemImage">${item[0] ? `<img src="${item[0]}">` : "(no image)"}</div>
        <div class="itemInfo">
            <h2>${item[1]}</h2>
            <p><strong>Price:</strong> ${item[2]}</p>
            <p><strong>Seller:</strong> ${item[3]}</p>
            <p><strong>Description:</strong> ${item[4]}</p>
        </div>
    `;
    searchList.appendChild(box);
}
