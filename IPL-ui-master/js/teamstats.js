

const token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE1OTAxMzczNjIsImlhdCI6MTU5MDExOTM2Mn0.u-Ha5ieVUVdjQfq3MiVRnR5kXbH3rTLrICEQXYCVFxEF8vKFGlmHdebcov-dy7IfKVwGfOE7m0VscAz_lomgUw";

let response = function(url){
    return fetch(url, {
        headers: {
            "Authorization": token
        }
    });
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
