import { Calculator } from './../src/age_logic';

describe('Calculator', function() {

  it('Should take a person’s age in years and convert it into seconds.', function() {
    let sample_human = new Calculator(10);
    sample_human.func_age_in_seconds();
    expect(sample_human.age_in_seconds).toEqual(315360000)
  });

  it('Should take two dates and determine the difference, in seconds, between the two. (This way a user can enter a birthdate and the application can compare the birthdate against the current time to come up with an accurate age, this is more accurate as it adjusts for leap years))', function() {
    let sample_human = new Calculator(10);
    sample_human.func_amount_of_seconds_lived(2008, 3, 16);
    expect(sample_human.age_in_seconds_precise).toEqual(315532800)
  });

  it('Should Return the age of a human in Mercury years. (A Mercury year is .24 Earth years.))', function() {
    let sample_human = new Calculator(10);
    expect(sample_human.func_age_on_mercury()).toEqual(10/.24)
  });


});
