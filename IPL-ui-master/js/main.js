


const token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE1OTAxMDkyOTgsImlhdCI6MTU5MDA5MTI5OH0.qc-c4Wnr_1o6oCkMKbHSh2TPA94dfYvM6Fszaz7aNzUSPCrHBMnBPIXBOoCB-gjmY3KRTX8QFNkBqqMlGbm0XA";



let response = function(url){
    return fetch(url, {
        headers: {
            "Authorization": token
        }
    });
}

getTeamLabels = function(){
    
    const url = "https://indipl2020.herokuapp.com/ipl2020/team/labels";
    response(url).then(res=>res.json()).then(data=>{
       
        labels = data["labels"];
        teamLabels = document.querySelector("#teamLabels");
        var str = "<select id='teamLabels' class = 'form-control' onChange=getTeamData()>"
        labels.forEach(element => {
                str+=`<option value = '${element}'>${element}</option>`
        });
        str+="</select>";        
        teamLabels.innerHTML = str;
    }).catch(err=>{
        console.log(err);
    });
}

getTeamLabels();

google.load("visualization", "1", {packages: ["corechart"]});


let rolemap = new Map();
let Roles = [];
let Rolesarr = [['Role','Number']];



getTeamData = function(){
    const allurl = "https://indipl2020.herokuapp.com/ipl2020/team/players/all";
    
    const selectElement = document.querySelector("#teamLabels");

selectElement.addEventListener('change', (event) => {

    


        console.log(event.target.value);

        
    response(allurl).then(res=>res.json()).then(data=>{

                
        
        tableID = document.querySelector("#tableID");
        var str = "<table class='table table-striped' ><thead><tr><th scope='col'>Name</th><th scope='col'>Role</th><th scope='col'>Label</th><th scope='col'>Price</th></tr></thead><tbody>"
        let team = [];

        data.forEach(e => {
            if(rolemap.get(e["role"])){
                rolemap.set(e["role"],rolemap.get(e["role"])+1);
            }
            else{
                rolemap.set(e["role"],1);
                Roles.push(`${e["role"]}`);
            }
            if(e["label"]===event.target.value)
                team.push(e);
        })
        team.forEach(element => {
                name = element["name"];
                role = element["role"];
                label = element["label"];
                price = element["price"];
                str+=`<tr>
                <th scope="row">${name}</th>
                <td>${role}</td>
                <td>${label}</td>
                <td>${price}</td>
              </tr>`
        });
        str+="</tbody></table>";        
        tableID.innerHTML = str;
    }).catch(err=>{
        console.log(err);
    });
})
};



    var Wk=0,Bat=0,Bowl=0,All=0;
    Wk = rolemap.get("Wicket Keeper");
    console.log(Roles[0]);
    Rolesarr.push(["Wicket Keeper",`${Wk}`])
    Bat = rolemap.get("Batsman");
    Rolesarr.push(["Batsman",`${Bat}`])
    Bowl = rolemap.get("Bowler");
    Rolesarr.push(["Bowler",`${Bowl}`])
    All = rolemap.get("All-Rounder");
    Rolesarr.push(["All-Rounder",`${All}`])

console.log(Rolesarr[2]);
function drawChart() {
    
    var data = google.visualization.arrayToDataTable(Rolesarr);
}

google.setOnLoadCallback(drawChart);


var options = {'title':'Roles in the team', 'width':550, 'height':400};
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);

  
   






   
 



