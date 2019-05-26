const GuitarFretzInfo = {
  get(note, noteEnharmonic, freet, isPartOfScale = false, scalePosition = null) {
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