const workshopDetails = {
  techniques: [
    "תקשורת בלתי אמצעית, דימויים ואלתור",
    "שירת הנפש",
    "תרגילי נשימה",
    "מדיטציה ודימיון מודרך",
    "ליווי טראנס לשחרור הורמונלי בתנועה",
    "פריקת מתחים עם תנועה, קול וצחוק",
    "תרגילי שיחרור ושיח"
  ]
};

export default function Features() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold">פרטי הסדנה</h2>
      <ul className="mt-4 list-disc list-inside">
        {workshopDetails.techniques.map((technique, index) => (
          <li key={index}>{technique}</li>
        ))}
      </ul>
    </div>
  );
}
