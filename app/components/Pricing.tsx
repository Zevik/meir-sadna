const workshopDetails = {
  price: "1,080 ש״ח"
};

export default function Pricing() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold">מחיר</h2>
      <p className="mt-4">{workshopDetails.price}</p>
    </div>
  );
}
