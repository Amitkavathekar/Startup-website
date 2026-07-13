type JobCardProps = {
  department: string;
  role: string;
  location: string;
  skills: string[];
  className?: string;
  buttonClassName?: string;
  heading: string;
};

const JobCard = ({
  department,
  role,
  location,
  skills,
  className = "",
  buttonClassName = "",
  heading,
}: JobCardProps) => {
  return (
    <div
      className={`w-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition ${className}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
            {heading}
          </p>

          <h3 className="text-lg font-semibold text-slate-900 mt-2">{role}</h3>

          <p className="text-sm text-gray-500 mt-1">
            {department} • {location}
          </p>
        </div>

        
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills && skills.length > 0
          ? skills.map((s) => (
              <span
                key={s}
                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
              >
                {s}
              </span>
            ))
          : null}
      </div>
      <button
          type="button"
          className={`px-4 w-full py-2 text-sm mt-2 font-medium rounded-md bg-blue-500 text-white hover:bg-blue-700 ${buttonClassName}`}
        >
          Apply
        </button>
    </div>
  );
};

export default JobCard;
