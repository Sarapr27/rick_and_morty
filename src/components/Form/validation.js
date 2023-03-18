const validation = (userData,errors,setErrors) => {

    if(!userData.username) 
        setErrors({...errors,username: "Please complete this blank space"});

    else if(userData.username.length > 35) 
        setErrors({...errors,username: "Cannot exceed 35 characters"});

    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)){
        setErrors({...errors,username: "Invalid email"});
    }else{
        setErrors({...errors,username: ""});
    }

    if(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,10}$/.test(userData.password)){
        setErrors({...errors,password: "Invalid password"});

    }else{
        setErrors({...errors,password: ""});
    }
    

};

export default validation;