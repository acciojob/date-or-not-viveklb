var isDate = function (input) {
    if (input instanceof Date) {
        return !isNaN(input.getTime());
    }

    if (typeof input === "string" || typeof input === "number") {
        return !isNaN(new Date(input).getTime());
    }

    return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));