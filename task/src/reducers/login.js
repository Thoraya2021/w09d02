const initialState = {
    user:null,
    token: "",

  };
  
  const signin = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "LOGIN":
        const { user, token } = payload;
        localStorage.setItem("token", token);
      
        return {user, token };

    
      default:
        return state;
    }
  };
  export default signin;

  export const signin =(data)=>
  {
return {
    type :"LOGIN",
    payload :data
}

  }
