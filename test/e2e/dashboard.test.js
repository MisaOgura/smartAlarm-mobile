describe('Dashboard', function() {

  beforeEach(function() {
    browser.get('/#/tab/dashboard');
  });

  it('has a link to Travel Plan', function() {
    var destination = element(by.id('travelPlan'));
    expect(destination.isPresent()).toBe(true);
  });

  it('shows a current weather', function() {
    var weather = element(by.id('weather'));
    expect(weather.isPresent()).toBe(true);
  });

  // it('takes users to weather page', function() {
  //   var weather = element(by.id('weather'));
  //   weather.click().then(function() {
  //     expect(browser.getLocationAbsUrl()).toMatch('/tab/weather');
  //   });
  // });

});
