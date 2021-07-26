export default class ErrorRepository {
  constructor() {
    this.err = new Map();
  }

  translate(code) {
    return this.err.get(code) || 'Unknown error';
  }
}
