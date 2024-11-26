import { DiscIcon } from "../utils/constants";

const DiscountCard = ({ data }) => {
  const { header, couponCode } = data;

  return (
    <div className="flex-shrink-0 w-[180px] sm:w-[200px] p-3 rounded-lg border-2 border-orange-500 bg-white shadow-md">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
        <img className="h-6 w-6" src={DiscIcon}></img>
        </div>
        <div>
          <div className="text-sm font-bold text-gray-800">{header}</div>
          {couponCode && (
            <div className="text-xs font-semibold text-gray-500">Use {couponCode}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
