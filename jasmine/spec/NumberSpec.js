describe("Test Guess Number function ", function(){

	describe("guessNum Test To Pass", function(){
		it("should return You guessed it! for 4", function(){
			expect(guessNum(4)).toEqual("You guessed it!");
		});
	});//End to Pass


	describe("guessNum Test To Pass", function(){
		it("should return Guess again. for 4", function(){
			expect(guessNum(5)).toEqual("Guess again.");
		});
	});//End to Pass


	describe("guessNum Test To Fail", function(){
		it("should return A value was not entered for empty string", function(){
			expect(guessNum("")).toEqual("A value was not entered.");
		});
	});

	describe("guessNum Test to Fail", function(){
		it("should return A number was not input", function(){
			expect(guessNum("K")).toEqual("A number was not input.");
		});
	});


	describe("guessNum Boundary Test1", function(){
		it("should return Guess again.", function(){
			expect(guessNum(1)).toEqual("Guess again.");
		});
	});	

	describe("guessNum Boundary Test2", function(){
		it("should return Way off!!!! Pick between 1 and 10.", function(){
			expect(guessNum(-1)).toEqual("Way off!!!! Pick between 1 and 10.");
		});
	});		
	describe("guessNum Boundary Test3", function(){
		it("should return Way off! Pick between 1 and 10.", function(){
			expect(guessNum(0)).toEqual("Way off!!!! Pick between 1 and 10.");
		});
	});	

	describe("guessNum Boundary Test4", function(){
		it("should return Guess again. .", function(){
			expect(guessNum(10)).toEqual("Guess again.");
		});
	});	
	describe("guessNum Boundary Test5", function(){
		it("should return Way off!!!! Pick between 1 and 10.", function(){
			expect(guessNum(11)).toEqual("Way off!!!! Pick between 1 and 10.");
		});
	});		
	describe("guessNum Boundary Test6", function(){
		it("should return Way off!!!! Pick between 1 and 10.", function(){
			expect(guessNum(12)).toEqual("Way off!!!! Pick between 1 and 10.");
		});
	});	//End boundary test.

});