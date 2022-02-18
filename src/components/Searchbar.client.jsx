import {useState} from 'react';
import { useHistory } from "react-router-dom";

export default function SearchBar() {
  let history = useHistory();

  function callback($evt){
      if ($evt.key == "Enter") {
          console.log($evt.target.value);
          history.push("/search/"+$evt.target.value)
      }
  }

  return (
    <div className={'relative'}>
      <input
        type="text"
        onKeyDown={callback.bind(this)}
        placeholder={'Search'}
      ></input>
    </div>
  );
}
