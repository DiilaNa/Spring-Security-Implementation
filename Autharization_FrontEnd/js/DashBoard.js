$(document).ready(function () {
    const token = localStorage.getItem("token");
    if (!token) {
        redirectToLogin();
    }
    const  role = localStorage.getItem("role")
    const  uname = localStorage.getItem("username");
    if (role==='ADMIN'){
        $(".user-login-name").text(`Welcome, ${uname || "Admin"}`);
    }else{
        $("#user-login-name").text(`Welcome, ${uname || "User"}`);
    }
});


function logoutAndRedirect() {
    localStorage.removeItem("token");
    redirectToLogin();
}

function redirectToLogin() {
    window.location.href = "../Pages/Sign_In.html";
}
