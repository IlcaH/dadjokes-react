import "./styly.css";
import { useState } from "react";

export const Joke =   ({
  userAvatar, userName, text, likes, dislikes}) => {
  
//   if {}
// else {}

return (
<div className="joke">
      <div className="joke__body">
       <div className="joke__user">
       <img className="user-avatar" src={userAvatar} />
       <p className="user-name">{userName}</p>
       </div>
       <p className="joke__text">{text}</p>
      </div>
      <JokeLikes likes={likes} dislikes={dislikes} />
    
    
    </div>



);

};



