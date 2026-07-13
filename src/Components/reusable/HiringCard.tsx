type HiringCardProps = {
  step: string;
  title: string;
  description: string;
};

const HiringCard = ({ step, title, description }: HiringCardProps) => {
  return (
    <div className="rounded-3xl h-60 border border-blue-100 bg-white p-4 text-center shadow-sm hover:shadow-lg transition-all">
      <div className="w-11 h-11 mx-auto rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
        {step}
      </div>

      <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>

      <p className="mt-2 text-gray-500 leading-8 text-sm">{description}</p>
    </div>
  );
};

export default HiringCard;
