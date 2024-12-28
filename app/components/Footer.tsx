const importantNotes = [
  'חשוב להדגיש שהסדנה אינה מחליפה טיפול נפשי, וגם שמאיר אבינר אינו מטפל רגשי בהכשרתו.',
  'ניתן לבטל השתתפות עד 14 ימים לאחר ההרשמה, בהחזר מלא.'
];

const signature = 'מחכה לראות אותך, מאיר';

export default function Footer() {
  return (
    <div className="p-8 text-center">
      <ul className="list-disc list-inside">
        {importantNotes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
      <p className="mt-4">{signature}</p>
    </div>
  );
}
