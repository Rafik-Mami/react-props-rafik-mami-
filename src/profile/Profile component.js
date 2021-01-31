import React from "react";
import { render } from "react-dom";

export const FullName = (props) => {
  return <h1>Fullname is {props.name}</h1>;
};
export const Bio = (props) => {
  return <p>{props.bio}</p>;
};
export const Profession = (props) => {
  return (
    <>
      <h2>My profession is : {props.profession}</h2>
    </>
  );
};
//props.children
export const Image = (props) => {
  return <>{props.children}</>;
};

export function ActionLink() {
  function HandleClick(e) {
    e.preventDefault();
    alert("Rafik Mami !");
  }
  render(<button onClick={HandleClick}>Profile name</button>);
}
//defaulProps for email
export const Email =(props) =>{
return(

    <h3>{props.email}</h3>
)
}

Email.defaultProps={
    email:'xyz@gmail.com'
}