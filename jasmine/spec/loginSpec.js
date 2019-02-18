describe("Test md5Encrypt function ", function (){

	describe("Test md5Encrypt() To Pass", function (){
		it("Should return a string that is 32 characters long.", function () {
			let login = new Assignment2('kento', 'hello');
			let hash = login.md5Encrypt();
			expect(hash).toMatch(/^\w{32}$/);
		});
	});//End to Pass

	describe("Test md5Encrypt() Boundary Test", function (){
		it("Should not be 31 characters long.", function () {
			let login = new Assignment2('kento', 'hello');
			let hash = login.md5Encrypt();
			expect(hash).not.toMatch(/^\w{31}$/);
		});
	});//Boundary test


	describe("Test md5Encrypt() Boundary Test", function (){
		it("Should not be 30 characters long.", function () {
			let login = new Assignment2('kento', 'hello');
			let hash = login.md5Encrypt();
			expect(hash).not.toMatch(/^\w{30}$/);
		});
	});//Boundary test

	describe("Test md5Encrypt() Boundary Test", function (){
		it("Should not be 33 characters long.", function () {
			let login = new Assignment2('kento', 'hello');
			let hash = login.md5Encrypt();
			expect(hash).not.toMatch(/^\w{33}$/);
		});
	});

	describe("Test md5Encrypt() Boundary Test", function (){
		it("Should not be 34 characters long.", function () {
			let login = new Assignment2('kento', 'hello');
			let hash = login.md5Encrypt();
			expect(hash).not.toMatch(/^\w{34}$/);
		});
	});

});

describe("Test checkLogin() function ", function () {

	describe("Test checkLogin() To Pass", function (){
		it("should return true", function () {
			let login = new Assignment2('kento', 'hello');
			expect(login.checkLogin()).toEqual(true);
		});
	});//End to Pass

	describe("Test checkLogin() To fail", function (){
		it("should return 'Invalid Username or Password. <br>'", function () {
			let login = new Assignment2('sean', 'thedoyle');
			expect(login.checkLogin()).toEqual(login.invalidInputErr);
		});
	});

	describe("Test checkLogin() To fail", function(){
		it("should return 'Invalid Username or Password. <br>'", function () {
			let login = new Assignment2('kento', 'thedoyle');
			expect(login.checkLogin()).toEqual(login.invalidInputErr);
		});
	});

	describe("Test checkLogin() To fail", function (){
		it("should return 'Invalid Username or Password. <br>'", function () {
			let login = new Assignment2('sean', 'hello');
			expect(login.checkLogin()).toEqual(login.invalidInputErr);
		});
	});

	describe("Test checkLogin() boundary test", function(){
		it("should return 'No username entered. <br> No password entered.<br>'", function () {
			let login = new Assignment2('', '');
			expect(login.checkLogin()).toEqual(login.noUserError + login.noPasswordError);
		});
	});

	describe("Test checkLogin() boundary test", function (){
		it("should return 'No password entered.<br>'", function () {
			let login = new Assignment2('kento', '');
			expect(login.checkLogin()).toEqual(login.noPasswordError);
		});
	});

	describe("Test checkLogin() boundary test", function (){
		it("should return 'No username entered.<br>'", function () {
			let login = new Assignment2('', 'hello');
			expect(login.checkLogin()).toEqual(login.noUserError);
		});
	});

	describe("Test checkLogin() boundary test", function (){
		it("should return 'No username entered.<br>'", function () {
			let login = new Assignment2('', 'thedoyle');
			expect(login.checkLogin()).toEqual(login.noUserError);
		});
	});

	describe("Test checkLogin() boundary test", function (){
		it("should return 'No password entered.<br>'", function () {
			let login = new Assignment2('sean', '');
			expect(login.checkLogin()).toEqual(login.noPasswordError);
		});
	});
});
