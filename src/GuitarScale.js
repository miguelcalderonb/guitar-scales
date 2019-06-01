import GuitarAllStrings from './structs/GuitarAllStrings';
import { Scale, Note, transpose } from "tonal";
import GuitarFretzInfo from './structs/GuitarFretzInfo';
import Tuning from './Tuning';

/**
 * Create a new GuitarScale
 * 
 * @class GuitarScale
 * @property {Tuning} tuning
 */
const GuitarScale = {
  tuning: Tuning.get(),

  /**
   * @return {array} The list of supported scales
   * @example
   * console.log(GuitarScale.getNames()) //['ionian', 'aeolian', 'minor', '...']
   */
  getNames() {
    return Scale.names();
  },
  /**
   * Get the notes per String
   * 
   * @param {String}  [noteString=E] - The first note of the string, this note represent the string at 0 fret
   * @return {array} ["E", "F", "F#", "G", "G#", "A", "A#", "B"] - The notes ordered per fret
   */
  getNotesPerString(noteString) {
    let finalString = [noteString];

    for (let i = 1; i < 12; i++) {
      finalString.push(Note.enharmonic(transpose(finalString[i - 1], "2m")));
    }

    return finalString;
  },
  /**
   * Get specific scale per string
   * 
   * @param {Array} scale 
   * @param {Array} stringNotes 
   */
  getScalePerString(scale, stringNotes) {
    let scaleString = [];

    stringNotes.forEach((value, key) => {
      if (typeof scaleString[key] === 'undefined') {
        scaleString[key] = GuitarFretzInfo.get(value, Note.enharmonic(value), key);
      }

      scale.forEach((scaleNote, scaleKey) => {
        if (value === scaleNote || value === Note.enharmonic(scaleNote)) {
          scaleString[key] = GuitarFretzInfo.get(scaleNote, Note.enharmonic(value), key, true, scaleKey + 1);
        }
      });
    });

    return scaleString;
  },
  /**
   * Sets specific tuning to the object
   * 
   * @param {*} tuning 
   */
  setTuning(tuning) {
    this.tuning = tuning;
  },
  
  /**
   * Get the scale that you wants
   * 
   * @param {String} note [note=c] The first note for your scale
   * @param {String} scaleName  [scaleName=ionian] The name of the scale that you wants to get
   * @param {bool} allNeck - Flag for get all neck or only the half of neck notes
   * @param {Array} altTuning - [tuning=[D,A,D,G,B,E]] If you want extra tunning you can describe here
   * 
   * @return {GuitarAllStrings}  GuitarAllStrings
   */
  get(note, scaleName, allNeck = false, altTuning = null) {
    if (altTuning !== null) {
      this.setTuning = altTuning;
    }

    let scaleAllStrings = [];

    let numberStrings = this.tuning.numberOfStrings;
    let numberFretz;

    this.tuning.getTuning().forEach((noteString, val) => {
      let notesPerSting = this.getNotesPerString(noteString);

      if (allNeck) {
        notesPerSting = notesPerSting.concat(notesPerSting);
      }

      numberFretz = notesPerSting.length;

      scaleAllStrings[numberStrings - val] = this.getScalePerString(Scale.notes(note, scaleName), notesPerSting);
    });

    return new GuitarAllStrings(scaleAllStrings, this.tuning.getTuning(), numberFretz);
  }
}

export default GuitarScale;