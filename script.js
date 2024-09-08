var printButton = document.createElement("button");
printButton.textContent = "Print Resume";
document.body.appendChild(printButton);
(printButton.addEventListener), function () {
    window.print();
};
