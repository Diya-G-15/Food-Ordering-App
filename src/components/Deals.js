import DiscountCard from "./DiscountCard";

const Deals = ({ data }) => {
  return (
    <div className="p-4 shadow-md max-w-full bg-gray-50">
    <h2 className="text-xl font-semibold mb-4 text-gray-800">Top Deals For You</h2>
    <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
      {data.map((deal, index) => (
        <DiscountCard key={index} data={deal.info} />
      ))}
    </div>
  </div>
  );
};

export default Deals;
