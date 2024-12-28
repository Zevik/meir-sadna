import { motion } from 'framer-motion';

const heroContent = {
  title: "אומנות השחרור",
  subtitle: "סדנה עם מאיר אבינר",
  description: `אומנות השחרור היא סדרת מפגשים שמנפצים פחות קדושות.
בסדנה נפגוש את המקומות הכי עמוקים בנפש, בהרהב בטוח ותומך.
רגע עוצמתיק, נשחרר רגשות קעורים, ונצחק עד שיכאב.
בגישה ייחודית שפיתחתי בעשור האחרון; נכיר, נטעם יחד עם ההפכים שבתוכנו,
נתמלא בשירת הלב, ונצא יחד לחירות הגוף והנפש.`
};

const pageAnimations = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

export default function Hero() {
  return (
    <motion.div {...pageAnimations} className="text-center p-8">
      <h1 className="text-4xl font-bold">{heroContent.title}</h1>
      <h2 className="text-2xl mt-4">{heroContent.subtitle}</h2>
      <p className="mt-4">{heroContent.description}</p>
    </motion.div>
  );
}
