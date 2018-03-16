import { Calculator } from './../src/age_logic';

describe('Calculator', function() {

  it('Should take a person’s age in years and convert it into seconds.', function() {
    let sample_human = new Calculator(10);
    const AGE = sample_human.func_age_in_seconds();
    console.log(AGE)
    expect(AGE).toEqual(315360000)
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

  it('Should Return the age of a human in Venus years. (A Venus year is .62 Earth years.)', function() {
    let sample_human = new Calculator(10);
    expect(sample_human.func_age_on_venus()).toEqual(10/.62)
  });

  it('Return the age of a human in Mars years. (A Mars year is 1.88 Earth years.)', function() {
    let sample_human = new Calculator(10);
    console.log(sample_human)
    expect(sample_human.func_age_on_mars()).toEqual(10/1.88)
  });

  it('Return the age of a human in Jupiter years. (A Jupiter year is 11.86 Earth years.)', function() {
    let sample_human = new Calculator(10);
    console.log(sample_human)
    expect(sample_human.func_age_on_jupiter()).toEqual(10/11.86)
  });

  it('Determine how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy. Assuming human lifespan is 79 years, if exceeded a person is estimated to life an additional one more year earth year', function() {
    let sample_human = new Calculator(10);
    expect(sample_human.func_time_left()).toEqual([69, 69/.24, 69/.62, 69/1.88, 69/11.86]);
  });

  it('Part 2 - Determine how many years a user has left to live on each planet…  Assuming human lifespan is 79 years, if exceeded a person is estimated to life an additional one more year earth year, this text assumes the person is 85 years old on earth', function() {
    let sample_human = new Calculator(85);
    expect(sample_human.func_time_left()).toEqual([1, 1/.24, 1/.62, 1/1.88, 1/11.86]);
  });

  it('If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.', function() {
    let sample_human = new Calculator(85);
    console.log(sample_human)
    expect(sample_human.func_years_exceed_life_expectancy()).toEqual('Number of years lived past the life expectancy: '+[6, 6/.24, 6/.62, 6/1.88, 6/11.86])
    // expect(sample_human.func_time_left()).toEqual([1, 1/.24, 1/.62, 1/1.88, 1/11.86]);
  });





});
