import React,{useState} from "react";
function PrivatePage (props){
return(
  <div>
    <h1>Welcome</h1>
    <button onClick={props.logout}>Logout</button>
  </div>  
);
}
function GuestPage (props){
return(
<div>
    <h1>Login Dulu Om</h1>
    <button onClick={props.login}>Login</button>
</div>
);
}
function ConditionRender () {
    const [isLoggin, setIsLoggin] = useState(false);
    return(
        <div>
            {isLoggin ? (
                <PrivatePage logout={()=> setIsLoggin(!isLoggin)}/>
            ) : (
                <GuestPage login={() => setIsLoggin(!isLoggin)} />
            )}
        </div>
    );
}
export default ConditionRender;
