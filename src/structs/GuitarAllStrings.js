/**
 * GuitarAllString
 * 
 * @property {string} info
 * @property {Tuning} Tuning
 * @memberof Structs
 * @typedef {Object} GuitarAllStrings
 */
class GuitarAllStrings {
  /**
   * Constructor 
   *  
   * @param {*} info
   * @param {*} tuning 
   * @param {*} fretzNumber 
   */
  constructor(info, tuning, fretzNumber) {
    this.info = info;
    this.tuning = tuning;
    this.fretzNumber = fretzNumber;
  }
}

export default GuitarAllStrings;