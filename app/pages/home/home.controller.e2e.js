describe('Clicking on the login button ', function(){
  var searchQuery, searchButton;

  beforeEach(function() {
    browser.get('/#/home');
    searchQuery = element(by.model('formData.searchQuery'));
    searchButton = element(by.tagName('button'));
  });

  it('should search the given query', function() {
    searchQuery.sendKeys('0400').sendKeys(protractor.Key.ENTER).then(function() {
      expect(browser.getLocationAbsUrl()).toMatch('/search/0400');
    });
  })
});