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
    this.life_expectancy = 79;
    this.time_left = null;
    this.time_left_mercury = null;
    this.time_left_venus = null;
    this.time_left_mars = null;
    this.time_left_jupiter = null;
    this.years_exceed_life_expectancy = null;
    this.years_exceed_life_expectancy_mercury = null;
    this.years_exceed_life_expectancy_venus = null;
    this.years_exceed_life_expectancy_mars = null;
    this.years_exceed_life_expectancy_jupiter = null;
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

  func_time_left(){
    if (this.life_expectancy-this.age > 0) {
      // you have x years left
      this.time_left = this.life_expectancy-this.age;
      this.time_left_mercury = this.time_left/.24
      this.time_left_venus = this.time_left/.62;
      this.time_left_mars = this.time_left/1.88;
      this.time_left_jupiter = this.time_left/11.86;
      return [this.time_left, this.time_left_mercury, this.time_left_venus, this.time_left_mars, this.time_left_jupiter];
  } else {
      this.time_left = 1;
      this.time_left_mercury = this.time_left/.24;
      this.time_left_venus = this.time_left/.62;
      this.time_left_mars = this.time_left/1.88;
      this.time_left_jupiter = this.time_left/11.86;
      return [this.time_left, this.time_left_mercury, this.time_left_venus, this.time_left_mars, this.time_left_jupiter];
    }
  }

  func_years_exceed_life_expectancy(){
    this.years_exceed_life_expectancy = this.age - this.life_expectancy
    if (this.years_exceed_life_expectancy>0){
      this.years_exceed_life_expectancy_mercury = this.years_exceed_life_expectancy/.24;
      this.years_exceed_life_expectancy_venus = this.years_exceed_life_expectancy/.62;
      this.years_exceed_life_expectancy_mars = this.years_exceed_life_expectancy/1.88;
      this.years_exceed_life_expectancy_jupiter = this.years_exceed_life_expectancy/11.86;
      return 'Number of years lived past the life expectancy: '+[this.years_exceed_life_expectancy, this.years_exceed_life_expectancy_mercury, this.years_exceed_life_expectancy_venus, this.years_exceed_life_expectancy_mars, this.years_exceed_life_expectancy_jupiter];
  } else {
      return 'Have not exceed life expectancy'
    }
  }

}
