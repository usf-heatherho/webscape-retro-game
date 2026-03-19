// Every correct checkbox must be checked
const correct = ["book4", "book5"];
const allBooks = ["book1","book2","book3","book4","book5"];

function checkCombination() {    
    const allCorrectChecked = correct.every(id => document.getElementById(id).checked);

    // All other checkboxes must be unchecked
    const othersUnchecked = allBooks
        .filter(id => !correct.includes(id))
        .every(id => !document.getElementById(id).checked);

    if (allCorrectChecked && othersUnchecked) {
        document.getElementById("secret-lock").checked = true;
    } else {
        document.getElementById("secret-lock").checked = false;
    }
}
allBooks.forEach(id => {
    const checkbox = document.getElementById(id);
    checkbox.addEventListener("click", checkCombination);
});

