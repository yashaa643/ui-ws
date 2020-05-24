let response = function(url){
    return fetch(url, {
        headers: {
            "Authorization": "Bearer "+localStorage.getItem("token")
        }
    });
}

function exec(element,query){

var str = "<table class='table table-striped' ><thead><tr><th scope='col'>Name</th><th scope='col'>Role</th><th scope='col'>Label</th><th scope='col'>Price</th></tr></thead><tbody>"

name = element["name"];
role = element["role"];
label = element["label"];
price = element["price"];
str += `<tr>
<th scope="row">${name}</th>
<td>${role}</td>
<td>${label}</td>
<td>${price}</td>
</tr>`

str += "</tbody></table>";
query.innerHTML = str;
    
}


const allurl = "https://indipl2020.herokuapp.com/ipl2020/team/players/all";

response(allurl).then(res => res.json()).then(data => {
        
        var maxWK,maxBat,maxBowl,maxAll;
        maxWK = {
            
                "label": "string",
                "name": "string",
                "price": 0,
                "role": "string"
              
        }

        maxBat = maxWK;
        maxBowl = maxWK;
        maxAll = maxWK;

        WK = document.querySelector("#maxWK");
        Bat = document.querySelector("#maxBat");
        Bowl = document.querySelector("#maxBowl");
        All = document.querySelector("#maxAll");

        data.forEach(element => {
            
            switch(element['role']){
                case 'Wicket Keeper':
                    if(element['price']>maxWK['price'])
                        maxWK = element;
                    break;
                case 'Batsman':
                    if(element['price']>maxBat['price'])
                        maxBat = element;
                    break;
                case 'Bowler':
                    if(element['price']>maxBowl['price'])
                        maxBowl = element;
                    break;
                case 'All-Rounder':
                    if(element['price']>maxAll['price'])
                        maxAll = element;
                    break;
                default:
                    break;
                                    
            }
        });

        exec(maxWK,WK);
        exec(maxBat,Bat);
        exec(maxBowl,Bowl);
        exec(maxAll,All);



});