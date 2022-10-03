
it('should calculate the monthly rate correctly', function () {
  let obj ={
    amount: 50000, 
    years: 2,
    rate:1
  };
  expect(calculateMonthlyPayment(obj)).toEqual('4881.61');
  // expect(calculateMonthlyPayment({amount: 100000, years: 10, rate: 5 })).toEqual(41666.67);
  // expect(calculateMonthlyPayment({amount: 10000, years: 1, rate: 0 })).toEqual(NaN);
  
  // ..
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
