const request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200);
    myFunction(this.responseText);
    return;
}
request.open("GET", "https://gorest.co.in/public/v1/users");
request.send();
function myFunction(data){
    console.log(data);
}