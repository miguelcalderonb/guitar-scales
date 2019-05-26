const Tuning = {
  standarTunning: ["E", "A", "D", "G", "B", "E"],
  numberOfStrings: 6,
  setTuning(tuning) {
    this.standarTunning = tuning;
    this.numberOfStrings = tuning.length
  },
  getTuning() {
    return this.standarTunning;
  },
  get() {
    return this;
  }

}
export default Tuning;