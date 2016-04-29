'use strict';

export const ASC = -1;
export const DESC = 1;

/**
 * Compare two objects by property value.
 *
 * @param {Object} a - first object
 * @param {Object} b - second object
 * @param {string} prop - name of property
 * @param {number} order - order (ASC or DESC)
 *
 * @returns {number}
 */
function compare(a, b, prop, order) {
    if (!(prop in a) || !(prop in b)) return 0;

    const colA = a[prop];
    const colB = b[prop];

    if (colA < colB) return order;
    if (colA > colB) return -order;

    return 0;
}

/**
 * Sorts objects of an array by property(ies).
 *
 * @param {Array} arr - source array
 * @param {string|string[]} props - name of property, or an array of names.
 * @param {number} order - order (ASC or DESC)
 *
 * @returns {Array}
 */
function sort(arr, props, order = ASC) {
    if (!Array.isArray(arr)) {
        throw new TypeError('sort-array-objects: the first argument must be an array');
    }

    if (typeof props !== 'string' && !Array.isArray(props)) {
        throw new TypeError('sort-array-objects: the second argument must be a string or an array');
    }

    if (typeof props === 'string') props = [props];

    if (order !== ASC && order !== DESC) {
        console.warn('Argument `order` is invalid. Using default value (ASC).');
        order = ASC;
    }

    return arr.sort((a, b) => {
        for (let i = 0; i < props.length; i++) {
            const result = compare(a, b, props[i], order);
            if (result !== 0) return result;
        }

        return 0;
    });
}

export default sort;
