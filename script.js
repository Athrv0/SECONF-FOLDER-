document.addEventListener("DOMContentLoaded", function () {
    console.log("GlobalXpose website loaded!");

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Redirecting to more details...");
        });
    });
});
