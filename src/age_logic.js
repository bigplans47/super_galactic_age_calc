export class Calculator {
  constructor(age_in_years) {
    this.age = age_in_years;
    this.age_in_seconds = null;
    this.birthdate = null;
    this.date_today = null;
    this.age_in_seconds_precise = null;
    this.age_on_mercury = null;
  }

  func_age_in_seconds() {
    this.age_in_seconds = this.age*365*24*60*60;
  }

  func_amount_of_seconds_lived(year, month, day) {
    this.date_today = new Date(2018, 2, 16);
    this.birthdate = new Date(year, month-1, day)
    this.age_in_seconds_precise = (this.date_today - this.birthdate)/1000
  }

  func_age_on_mercury(){
    this.age_on_mercury = this.age/.24
    return this.age_on_mercury
  }

}
