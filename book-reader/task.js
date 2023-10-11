document.addEventListener("DOMContentLoaded", function () {
    const fontSizeControls = document.querySelectorAll(".font-size");
    const textColorControls = document.querySelectorAll(".text_color");
    const bgColorControls = document.querySelectorAll(".bg_color");
    const book = document.getElementById("book");

    fontSizeControls.forEach((control) => {
        control.addEventListener("click", function (event) {
            event.preventDefault();
            fontSizeControls.forEach((c) =>
                c.classList.remove("font-size_active")
            );
            control.classList.add("font-size_active");

            const size = control.getAttribute("data-size");
            book.classList.remove("book_fs-small", "book_fs-big");
            if (size === "small") {
                book.classList.add("book_fs-small");
            } else if (size === "big") {
                book.classList.add("book_fs-big");
            }
        });
    });

    textColorControls.forEach((control) => {
        control.addEventListener("click", function (event) {
            event.preventDefault();
            textColorControls.forEach((c) =>
                c.classList.remove("color_active")
            );
            control.classList.add("color_active");
            const color = control.getAttribute("data-text-color");
            book.classList.remove(
                "book_color-black",
                "book_color-gray",
                "book_color-whitesmoke"
            );
            book.classList.add(`book_color-${color}`);
        });
    });

    bgColorControls.forEach((control) => {
        control.addEventListener("click", function (event) {
            event.preventDefault();
            bgColorControls.forEach((c) => c.classList.remove("color_active"));
            control.classList.add("color_active");
            const color = control.getAttribute("data-bg-color");
            book.classList.remove(
                "book_bg-black",
                "book_bg-gray",
                "book_bg-white"
            );
            book.classList.add(`book_bg-${color}`);
        });
    });
});
