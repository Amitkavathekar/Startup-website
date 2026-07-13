type BenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

const careerCard = ({
  icon,
  title,
  description,
  className,
}: BenefitCardProps) => {
  return (
    <div
      className={
        className ||
        "rounded-3xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 p-7 hover:shadow-lg transition-all duration-300 "
      }
    >
      <div className="w-14 h-14 rounded-full border border-blue-100 bg-white flex items-center justify-center shadow-sm mb-6">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>

      <p className="text-gray-500 leading-8 text-sm">{description}</p>
    </div>
  );
};

export default careerCard;
