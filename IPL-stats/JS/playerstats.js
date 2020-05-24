var token;

const authURL = "https://indipl2020.herokuapp.com/authenticate";
const data = {
    "password":localStorage.getItem("password"),
    "username":localStorage.getItem("username")
}
fetch(authURL,{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify(data),
}).then(response=>response.json()).then(data =>{
    localStorage.setItem("token",data["token"]);
}).catch((err)=>{console.error('Error:',error)});


let response = function (url) {
    return fetch(url, {
        headers: {
            "Authorization": "Bearer "+localStorage.getItem("token"),
        }
    });
}

getTeamLabels = function () {


    const url = "https://indipl2020.herokuapp.com/ipl2020/team/labels";
    response(url).then(res => res.json()).then(data => {
       
        teamNames = data["labels"];
        teamLabels = document.querySelector("#teamLabels");
        var str = "<select id='teamLabels' class = 'form-control' onChange=getTeamData()>"
        teamNames.forEach(element => {
            str += `<option value = '${element}'>${element}</option>`
        });
        str += "</select>";
        teamLabels.innerHTML = str;
    }).catch(err => {
        console.log(err);
    });
}

getTeamLabels();

google.charts.load('current', { 'packages': ['corechart'] });

function drawChart(Rolesarr) {

    
    var data = google.visualization.arrayToDataTable(Rolesarr);
    
    console.log(data);

    var options = { 'title': 'Roles in the team', 'width': 550, 'height': 400 };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);

}

getTeamData = function () {

    let rolemap = new Map();
    let Roles = [];
    let Rolesarr = [['Role', 'Number']];


    const allurl = "https://indipl2020.herokuapp.com/ipl2020/team/players/all";

    const selectElement = document.querySelector("#teamLabels");

    selectElement.addEventListener('change', (event) => {



        response(allurl).then(res => res.json()).then(data => {

          
            tableID = document.querySelector("#tableID");
            var str = "<table class='table table-striped' ><thead><tr><th scope='col'>Name</th><th scope='col'>Role</th><th scope='col'>Label</th><th scope='col'>Price</th></tr></thead><tbody>"
            let team = [];

            data.forEach(e => {

               

                if (e["label"] === event.target.value) {
                    team.push(e);
                    if (rolemap.get(e["role"])) {
                        rolemap.set(e["role"], rolemap.get(e["role"]) + 1);
                    }
                    else {
                        rolemap.set(e["role"], 1);
                        Roles.push(`${e["role"]}`);
                    }
                }
            })

                        

            Roles.forEach(e => {

                Rolesarr.push([e, rolemap.get(e)]);
            })

            console.log(Rolesarr);
            
            google.charts.setOnLoadCallback(drawChart(Rolesarr));

            

            team.forEach(element => {
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
            });
            str += "</tbody></table>";
            tableID.innerHTML = str;
        }).catch(err => {
            console.log(err);
        });

       
        
    })
};