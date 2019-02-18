
    //DOM query
    // const formHandler = document.forms,
    // userName = document.getElementById("form__userName"),
    // password = document.getElementById("form__password"),
    // userNameOutput = document.getElementsByClassName("output__userName"),
    // userPasswordOutput = document.getElementsByClassName("output__password"),
    // invalidOutput = document.getElementsByClassName("output__invalid"),
    // validOutput = document.getElementsByClassName("output__valid");

    const userInfo = {
        user1: { 
            userName: 'kento',
            password: '5d41402abc4b2a76b9719d911017c592'
        }
    }

    // formHandler[0].onsubmit = function () {
    //     loginObj.md5Encrypt();
    //     if (loginObj.checkLogin() === true) {
    //         validOutput[0].innerHTML = loginObj.validInputMsg;
    //     } else {
    //         validOutput[0].innerHTML = loginObj.checkLogin();
    //     }
    //     return false;

    // };

    function Assignment2 (userName, password) {
        this.password = password;
        this.userName = userName;
        this.invalidInputErr = "Invalid Username or Password. <br>";
        this.validInputMsg = "Welcome back!<br>";
        this.noPasswordError = "No password entered.<br>";
        this.noUserError = "No username entered. <br>";

        this.reset = function () {
            this.invalidInputErr = "";
            this.validInputMsg = "";
            this.noPasswordError = "";
            this.noUserError = "";
            console.log("reset detected.")
        };

        this.md5Encrypt = function () {
            var encrypted = CryptoJS.MD5(this.password);
            console.log(this.password);
            return encrypted.toString();
        };

        this.checkLogin = function () {
            if (this.userName === "" || this.password === "") {
                var errorString = '';
                if (this.userName  === "" || this.userName === null) {
                    // this.userName.focus();
                    errorString += this.noUserError;
                }
                if (this.password === "" || this.password === null) {
                    // this.password.focus();
                    errorString += this.noPasswordError;
                } 
                return errorString;
            } else {
                if (this.md5Encrypt() !== userInfo.user1.password || this.userName !== userInfo.user1.userName){
                    return this.invalidInputErr;
                } else {
                    return true;
                }
            }            
        }
    }
