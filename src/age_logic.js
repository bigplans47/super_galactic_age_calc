export class Calculator {
  constructor(age_in_years) {
    this.age = age_in_years;
    this.age_in_seconds = null;
    this.birthdate = null;
    this.date_today = null;
    this.age_in_seconds_precise = null;
    this.age_on_mercury = null;
    this.age_on_venus = null;
    this.age_on_mars = null;
    this.age_on_jupiter = null;

  }

  func_age_in_seconds() {
    this.age_in_seconds = this.age*365*24*60*60;
    return this.age_in_seconds;
  }

  func_amount_of_seconds_lived(year, month, day) {
    this.date_today = new Date(2018, 2, 16);
    this.birthdate = new Date(year, month-1, day);
    this.age_in_seconds_precise = (this.date_today - this.birthdate)/1000;
    return this.age_in_seconds_precise;
  }

  func_age_on_mercury(){
    this.age_on_mercury = this.age/.24;
    return this.age_on_mercury;
  }

  func_age_on_venus(){
    this.age_on_venus = this.age/.62;
    return this.age_on_venus;
  }

  func_age_on_mars(){
    this.age_on_mars = this.age/1.88;
    return this.age_on_mars;
  }

  func_age_on_jupiter(){
    this.age_on_jupiter = this.age/11.86;
    return this.age_on_jupiter;
  }

}
