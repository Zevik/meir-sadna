'use client';

import React from 'react';

const heroContent = {
  title: 'אומנות השחרור',
  subtitle: 'סדנה עם מאיר אבינר',
  description: `אומנות השחרור היא סדרת מפגשים שמנפצים פחות קדושות.
בסדנה נפגוש את המקומות הכי עמוקים בנפש, בהרהב בטוח ותומך.
רגע עוצמתיק, נשחרר רגשות קעורים, ונצחק עד שיכאב.
בגישה ייחודית שפיתחתי בעשור האחרון; נכיר, נטעם יחד עם ההפכים שבתוכנו,
נתמלא בשירת הלב, ונצא יחד לחירות הגוף והנפש.`
};

export default function Hero(): React.ReactElement {
  return (
    <div className='text-center p-8'>
      <h1 className='text-4xl font-bold'>{heroContent.title}</h1>
      <h2 className='text-2xl mt-4'>{heroContent.subtitle}</h2>
      <p className='mt-4'>{heroContent.description}</p>
    </div>
  );
}
