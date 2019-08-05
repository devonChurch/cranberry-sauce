/**
 * A range of numbers generated from supplied `from` and `to` _(**start** / **end**)_ values.
 *
 * ```
 * createNumberRange(5, 10); // [5, 6, 7, 8, 9, 10]
 * ```
 *
 * @param from The first value in the number range.
 * @param to The last value in the number range.
 */
export const createNumberRange = (from: number, to: number): number[] =>
  // A new Array with the length of the total amount of entries in the range.
  new Array(0 + (to - from + 1))
    // Fill with a placeholder.
    .fill(0)
    // Starting with the "from" value increment until the range "to" has been
    // reached.
    .map((_, index) => from + index);
