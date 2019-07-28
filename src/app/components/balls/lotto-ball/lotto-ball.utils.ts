/**
 * Gets the color specific **CSS** _Class Name_ that matches the _Lotto Ball_ value.
 *
 * ```
 * getBallColorClassName(1); // "ball--orange"
 * ```
 *
 * @returns **BEM** _Class Name_ `"ball--[color]"`.
 */
export const getBallColorClassName = (value: number): string => {
  switch (true) {
    case value >= 40:
      return "ball--purple";
    case value >= 30:
      return "ball--red";
    case value >= 20:
      return "ball--green";
    case value >= 10:
      return "ball--orange";
    default:
      return "ball--blue";
  }
};
