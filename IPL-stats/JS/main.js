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

    var totalPlayers=0;
    var totalWK=0;
    var totalBat=0;
    var totalBowl=0;
    var totalAll=0;
    var totalAmount=0;

    const allurl = "https://indipl2020.herokuapp.com/ipl2020/team/players/all";

   

 
        response(allurl).then(res => res.json()).then(data => {

            let team = [];
            data.forEach(e => {

                team.push(e);

                console.log(data.price);

                
                totalPlayers++;
                switch(e["role"]){
                    case "Wicket Keeper":    totalWK++;
                                            break;
                    case "Batsman":          totalBat++;
                                            break;
                    case "Bowler":          totalBowl++;
                                            break;
                    case "All-Rounder":     totalAll++;
                                            break;

                    default:            break;
                }

               
            })

            team.forEach(e=>{
                totalAmount = totalAmount + e['price'];
            })


            

            document.querySelector("#totalNum").innerHTML=`${totalPlayers}`;
            document.querySelector("#totalAmt").innerHTML=`${totalAmount} ₹`;
            document.querySelector("#totWK").innerHTML=`${totalWK}`;
            document.querySelector("#totBat").innerHTML=`${totalBat}`;
            document.querySelector("#totBowl").innerHTML=`${totalBowl}`;    
            document.querySelector("#totAll").innerHTML=`${totalAll}`;
  
       
        
    })
