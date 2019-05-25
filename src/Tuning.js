const Tuning = {
  standarTunning: ["E", "A", "D", "G", "B", "E"],
  numberOfStrings: 6,
  setTuning(tuning) {
    this.standarTunning = tuning;
    this.numberOfStrings = tuning.length
  }
  
}
export default Tuning;