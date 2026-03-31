
const studentData = (URL)=>{
    fetch(URL)
    .then(response => response.json())
    .then(data => (console.log(data)))
}

studentData("https://jsonplaceholder.typicode.com/users");