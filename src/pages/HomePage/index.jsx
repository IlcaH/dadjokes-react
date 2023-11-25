import React, { useState } from 'react';
import './style.css';
import { joke } from '../../components/joke';

export const HomePage = () => {
  const [likesUp, setLikesUp] = useState(0);
  const [likesDown, setLikesDown] = useState(0);
  const [joke, setJoke] = useState();

  useEffect((joke) => {
    const handleFetch = async () => {
      const response = await fetch('https://raw.githubusercontent.com/Czechitas-podklady-WEB/daweb-test/deploy/jokes.json');
      const data = await response.json();
      setJokes(data.result);
    };
    handleFetch();
  }, []);

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png" />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>


        <div className="joke__likes">
          <button 
            className="btn-like btn-like--up" 
            onClick={() => {
              setLikesUp(likesUp + 1);
            }}
          />
          <span className="likes-count likes-count--up">
            {likesUp}
          </span>
          <button 
            className="btn-like btn-like--down"
            onClick={() => {
              setLikesDown(likesDown + 1);
            }}
          />
          <span className="likes-count likes-count--down">
            {likesDown}
          </span>
        </div>
      </div>
    </div>
  );
};

