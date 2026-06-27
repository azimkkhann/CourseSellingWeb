let button = document.getElementById("submit-admin-button");

button.addEventListener("click", sendrequest)



async function sendrequest(){

    let email = document.getElementById("email-admin-input");
    let password = document.getElementById("password-admin-input");

    let response = fetch("http://127.0.0.1:3500/admin/signin", {
        method : "POST",
        headers : {
           "credentials" : "include",
           "Content-type" : "application/json"
        },
        body : JSON.stringify({
            email : email,
            password : password
        })
    })

    response.then(async () =>{
        let responsejson = await response.json();

        if(!response.ok){
            console.log(responsejson.message)
        }
    }


    )


}


/*

res body {
success : 
message: 
}
*/