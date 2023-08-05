import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const OtherLink = () => {

  const navigate = useNavigate();


  useEffect(() => {
    window.open("https://www.nagoya-c.ed.jp/school/koyo-h/")
    navigate("/");
  });










  return (
    <div>
      ページ遷移中...

    </div>
  );
};

