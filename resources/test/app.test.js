const expect = chai.expect;

describe('testing crap', function() {
  it('does stuff!', function () {

    // do the ting
    $('input[type=submit]').click();


    // compare results
    expect($("#console-log").text()).to.equal('booyah');
  });
});

describe('isnumber', function() {
  // body...
  it('islataNumber', function () {
    const latitude = navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      // console.log(lat.toString());
    });

    expect(latitude).to.be.a("string");
  });
});
