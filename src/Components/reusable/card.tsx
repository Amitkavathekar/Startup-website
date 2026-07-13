import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type CardProps = {
  icon: LucideIcon;
  title: string;
  heading?: string;
  description?: ReactNode;
  redirect?: string;
  buttonText?: string;
  className?: string;
};

const Card = ({
  icon: Icon,
  title,
  heading,
  description,
  redirect,
  buttonText = "Discuss your project →",
  className = "",
}: CardProps) => {
  return (
    <div
      className={`w-full rounded-2xl bg-[#F7FAFF] p-7 shadow-md hover:shadow-xl transition ${className}`}
    >
      <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>

      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>

      {heading && (
        <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-2">
          {heading}
        </p>
      )}

      <div className="mt-4 text-gray-600 leading-7">{description}</div>

      {redirect && (
        <Link
          to={redirect}
          className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export default Card;
