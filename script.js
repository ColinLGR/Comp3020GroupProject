const bookmarkList = ["its","been","a","long","day","without","you","my","friend"];
const filterList = ["Math","Science","Economics","Geography","Psycology","Geography","Psycology"];
const bookmark = document.getElementById("BookmarkButton");
const search = document.getElementById("searchBox");
const filter = document.getElementById("Filters");
const searchList = document.getElementById("searchedItem");

const database = [[null,"name","$10.00","seller","description"],
                    [null,"name1","$20.00","seller","description"],
                    [null,"name2","$30.00","seller","description"],
                    [null,"name3","$40.00","seller","description"],
                    [null,"name3","$40.00","seller","description"],
                    [null,"name3","$40.00","seller","description"],
                    [null,"name3","$40.00","seller","description"],
                    [null,"name3","$40.00","seller","description"],
                    [null,"name3","$40.00","seller","description"],
                    [null,"name3","$40.00","seller","description"],
                    [null,"name3","$40.00","seller","description"],
                    [null,"name3","$40.00","seller","description"],
                    [null,"name3","$40.00","seller","description"],
                    [null,"name3","$40.00","seller","description"],
                    [null,"name3","$40.00","seller","description"],
                    [null,"name3","$40.00","seller","description"],
                    [null,"name3","$40.00","seller","description"],
                    [null,"name3","$40.00","seller","description"],
                    [null,"name3","$40.00","seller","description"],
                    [null,"name4","$50.00","seller","description"]];

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