fetch('https://api.warframestat.us/pc/cetusCycle')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    document.getElementById("dn").innerText = data.state;
    document.getElementById("time").innerText = data.shortString;
    }
)
.catch(function (err){
    console.log(err);
})

let counter = 1;
setInterval(() => {
    counter++;
    if(counter > 30) location.reload();
}, 1000);
