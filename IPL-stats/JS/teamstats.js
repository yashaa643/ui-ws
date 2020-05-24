

let response = function(url){
    return fetch(url, {
        headers: {
            "Authorization": "Bearer "+localStorage.getItem("token")
        }
    });
}

google.charts.load('current', { 'packages': ['corechart'] });

google.charts.setOnLoadCallback(drawChart);

function drawChart(){

    const amountURL = "https://indipl2020.herokuapp.com/ipl2020/team/totalamount";

    let amountArr = [];       


    response(amountURL).then(res=>res.json()).then(data=>{

    
        
        data.forEach(e=>{

            amount = e["amount"];
            amount = Number.parseInt(amount);
            amountArr.push([e['teamName'],amount])
        })
       
    }
    )

    var amountdata = new google.visualization.DataTable();
        amountdata.addColumn('string', 'Team');
        amountdata.addColumn('number', 'Amount');

    amountdata.addRows(amountArr);

    console.log(amountdata);

  
       
    var options = { 'title': 'Amount spent', 'width': 550, 'height': 400 };

    var chart = new google.visualization.BarChart(document.getElementById('barchart'));

    chart.draw(amountdata, options);

}





getTeamInfo = function(){
    const allurl = "https://indipl2020.herokuapp.com/ipl2020/team/all";
        
    
    response(allurl).then(res=>res.json()).then(data=>{

       
        
        tableID = document.querySelector("#tableID");
        var str = "<table class='table table-striped' ><thead><tr><th scope='col'>Name</th><th scope='col'>Role</th><th scope='col'>Label</th><th scope='col'>Price</th></tr></thead><tbody>"
    
        data.forEach(element => {
                city = element["city"];
                coach = element["coach"];
                home = element["home"];
                 label = element["label"];
                team = element["team"];
                str+=`<tr>
                <th scope="row">${label}</th>
                <td>${team}</td>
                <td>${city}</td>
                <td>${coach}</td>
                <td>${home}</td>
              </tr>`
        });
        str+="</tbody></table>";        
        tableID.innerHTML = str;
    }).catch(err=>{
        console.log(err);
    });

   
}


getTeamInfo();












