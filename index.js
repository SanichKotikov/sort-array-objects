export const ASC = 'asc';
export const DESC = 'desc';

/**
 * Sorts objects of an array by property(ies) in place.
 *
 * @param {Array} arr - Source array
 * @param {String} order - Order (asc or desc)
 * @param {String} prop1 - Name of first (main) property
 * @param {String} prop2 - Name of second property
 */
function sortArrayObjects(arr, order = ASC, prop1, prop2 = 'id') {
    if (!Array.isArray(arr)) {
        console.warn(`'arr' argument is not an array. Skip sorting.`);
        return;
    }

    if (typeof prop1 !== 'string') {
        console.warn(`'prop1' argument is not a string. Skip sorting.`);
        return;
    }

    if (order !== ASC && order !== DESC) {
        console.warn(`'order' argument is invalid. Using default value (ASC).`);
        order = ASC;
    }

    const order1 = order === ASC ? -1 : 1;
    const order2 = order === ASC ? 1 : -1;

    arr.sort((a, b) => {
        let colA = a[prop1];
        let colB = b[prop1];

        if (colA < colB) return order1;
        if (colA > colB) return order2;

        if (prop2 !== prop1) {
            colA = a[prop2];
            colB = b[prop2];

            if (colA < colB) return order1;
            if (colA > colB) return order2;
        }

        return 0;
    });
}

export default sortArrayObjects;
