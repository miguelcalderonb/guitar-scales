/**
 * GuitarFretzInfo
 * 
 * @memberof Structs
 * 
 * @class GuitarFretzInfo
 */
class GuitarFretzInfo {
  /**
   * 
   * @param {string} note Note 
   * @param {string} noteEnharmonic Note Enharmonic 
   * @param {number} freet Freet Number
   * @param {bool} isPartOfScale Flag for identify if the fret is part of the scale
   * @param {number} scalePosition Interval value in the sc
   */
  static get(note, noteEnharmonic, freet, isPartOfScale = false, scalePosition = null) {
    return {
      note: note,
      noteEnharmonic: noteEnharmonic,
      freet: freet,
      isPartOfScale: isPartOfScale,
      scalePosition: scalePosition
    }
  }
}

export default GuitarFretzInfo;