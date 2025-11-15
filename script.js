const bookmarkList = ["its","been","a","long","day","without","you","my","friend"];
const filterList = ["Math","Science","Economics","Geography","Psycology","Geography","Psycology"];
const bookmark = document.getElementById("BookmarkButton");
const search = document.getElementById("searchBox");
const filter = document.getElementById("Filters");
const searchList = document.getElementById("searchedItem");



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

    opt.addEventListener("click", () => {
        if(choosenFilters.contains(opt)) {
            filterWindow.appendChild(opt);
        } else {
            choosenFilters.appendChild(opt);
        }
        if(choosenFilters.childElementCount === 0) {
            choosenFilters.style.marginBottom = "0rem";
        } else {
            choosenFilters.style.marginBottom = "1rem";
        }
    });

    filterWindow.appendChild(opt);
});

search.addEventListener("keydown", (event) => {
    if(event.key == "Enter") {
        console.log(search.value);
    }
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

        btn.addEventListener("click", () => {
            console.log("Clicked bookmark:", b);
        });

        bookmarkWindow.appendChild(btn);
    });
})

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
})