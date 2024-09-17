function signup(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var passwordcofirn = document.getElementById("password-confirm").value;
    var user = {
        username: username,
        password: password,
        passwordcofirn: passwordcofirn,
    };

    var json = JSON.stringify(user);

    if (username === 0) {
        alert("Vui lòng nhập username!");
    }
    else if (password === 0) {
        alert("Vui lòng nhập password!");
    }
    else if (passwordcofirn === 0) {
        alert("Vui lòng nhập password confirn!");
    }
    else if (passwordcofirn !== password) {
        alert("Vui lòng nhập password confirn đúng với password!");
    }
    else{
    localStorage.setItem(username, json);
    alert("Đăng ký thành công!!!");
    }
};

function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);

    if (!user) {
    alert("Vui lòng nhập username password");
    } 
    else if ( username === data.username && password === data.password) {
    alert("Đăng nhập thành công!!!");
    window.location.href = "index.html";
    } 
    else if (username !== data.username){
    alert("Sai tài khoản");
    }
}