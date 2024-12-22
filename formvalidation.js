function validation() {
    var name1 = document.getElementById("name").value;
    var pwd1 = document.getElementById("pwd").value;
    if (name1.trim() === "" || pwd1.trim() === "") {
        alert("Enter data");
        return false;
    }
}