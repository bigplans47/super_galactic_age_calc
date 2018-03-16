export class Calculator {
  constructor(age_in_years) {
    this.age = age_in_years;
    this.age_in_seconds = null;
  }

  func_age_in_seconds() {
    this.age_in_seconds = this.age*365*24*60*60;
  }

}
