import { Calculator } from './../src/age_logic';

describe('Calculator', function() {

  it('Should take a person’s age in years and convert it into seconds.', function() {
    let sample_human = new Calculator(100);
    sample_human.func_age_in_seconds();
    expect(sample_human.age_in_seconds).toEqual(3153600000)
  });

});
