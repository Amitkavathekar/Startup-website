import officeimg from "@/assets/images/office.png";
import { Briefcase, GraduationCap, Heart } from "lucide-react";
import CareerCard from "@/Components/reusable/careerCard";
import JobCard from "@/Components/reusable/JobCard";
import { Button } from "@/components/ui/button";
import HiringCard from "@/Components/reusable/HiringCard";

export function ButtonDefault() {
  return <Button>Button</Button>;
}

const career = () => {
  const benefits = [
    {
      icon: <Briefcase className="w-7 h-7 text-blue-600" />,
      title: "Remote-First",
      description:
        "Work from anywhere. We have offices in New York, London, and Bangalore for those who want them.",
    },
    {
      icon: <GraduationCap className="w-7 h-7 text-blue-600" />,
      title: "Learning",
      description: "Upskill with training and certifications.",
    },
    {
      icon: <Heart className="w-7 h-7 text-blue-600" />,
      title: "Work-Life Balance",
      description: "Flexible work and wellness programs.",
    },
    {
      icon: <Briefcase className="w-7 h-7 text-blue-600" />,
      title: "Remote-First",
      description:
        "Work from anywhere. We have offices in New York, London, and Bangalore for those who want them.",
    },
    {
      icon: <GraduationCap className="w-7 h-7 text-blue-600" />,
      title: "Learning",
      description: "Upskill with training and certifications.",
    },
    {
      icon: <Heart className="w-7 h-7 text-blue-600" />,
      title: "Work-Life Balance",
      description: "Flexible work and wellness programs.",
    },
  ];

  const jobcard = [
    {
      department: "Engineering",
      role: "Frontend Developer",
      location: "Remote / New York",
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      department: "Engineering",
      role: "Backend Developer",
      location: "Remote / New York",
      skills: ["Node.js", "Express", "PostgreSQL"],
    },
    {
      department: "Product",
      role: "Product Designer",
      location: "Remote / New York",
      skills: ["Figma", "Prototyping", "Design Systems"],
    },
    {
      department: "Engineering",
      role: "Frontend Developer",
      location: "Remote / New York",
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      department: "Engineering",
      role: "Backend Developer",
      location: "Remote / New York",
      skills: ["Node.js", "Express", "PostgreSQL"],
    },
    {
      department: "Product",
      role: "Product Designer",
      location: "Remote / New York",
      skills: ["Figma", "Prototyping", "Design Systems"],
    },
    {
      department: "Engineering",
      role: "Frontend Developer",
      location: "Remote / New York",
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      department: "Engineering",
      role: "Backend Developer",
      location: "Remote / New York",
      skills: ["Node.js", "Express", "PostgreSQL"],
    },
    {
      department: "Product",
      role: "Product Designer",
      location: "Remote / New York",
      skills: ["Figma", "Prototyping", "Design Systems"],
    },
  ];

  const hiringProcess = [
    {
      step: "01",
      title: "Application Review",
      description:
        "We review every application personally. You'll hear back within 5 business days, always.",
    },
    {
      step: "02",
      title: "Intro Call",
      description:
        "A 30-minute conversation with our recruiting lead — no tech, just getting to know each other.",
    },
    {
      step: "03",
      title: "Technical Round",
      description:
        "A realistic take-home challenge (3–4 hours max) plus a 1-hour pairing session with a senior engineer.",
    },
    {
      step: "04",
      title: "Team Interview",
      description:
        "Meet 2–3 team members you'd work with. No gotcha questions — just real conversations about how you work.",
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-[#050D1F] via-[#0A1628] to-[#0D1F3C] pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-300 mb-5">
            Careers
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Build the future with us
            <span className="text-blue-400"> build and scale</span>
          </h1>

          <p className="text-lg text-blue-200/60 max-w-2xl mx-auto">
            We hire exceptional engineers, designers, and strategists who care
            about craft and collaboration. Remote-first, globally distributed,
            and growing.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-5">
              Our Culture
            </span>
            <h2 className="text-4xl font-bold mt-2">
              A team of <span className="text-blue-600">craftspeople</span>
            </h2>
            <p className="text-gray-500 text-lg mt-6">
              We don't have a "culture deck." We have a simple set of beliefs:
              exceptional engineers deserve exceptional peers, complex work
              deserves real focus time, and quality is non-negotiable at every
              level.
            </p>
            <p className="text-gray-500 text-lg mt-6">
              Our average engineer tenure is 4.2 years — unusually high for a
              consultancy. People stay because the work is genuinely
              interesting, the team is exceptional, and we mean what we say
              about work-life balance.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 text-center text-sm">
              <div>
                <p className="text-3xl text-blue-600 font-bold">4.2yr</p>
                <p className="text-gray-500">Avg. Tenure</p>
              </div>
              <div>
                <p className="text-3xl text-blue-600 font-bold">93%</p>
                <p className="text-gray-500">Would Recommend</p>
              </div>
              <div>
                <p className="text-3xl text-blue-600 font-bold">150+</p>
                <p className="text-gray-500">Team Members</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-blue-100 shadow-lg">
            <img
              src={officeimg}
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-700">
              Perks & Benefits
            </span>
            <h3 className="mt-6 text-3xl font-bold text-slate-900">
              What comes with the role
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <CareerCard
                key={idx}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                className="w-full rounded-2xl p-6 border"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F0F6FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm text-[#155DFC] font-semibold uppercase tracking-[0.2em] mb-3">
              Open Roles
            </p>
            <h2 className="text-4xl font-bold">
              Current <span className="text-[#155DFC]">opportunities</span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {jobcard.map((e, idx) => (
              <JobCard
                key={idx}
                department={e.department}
                role={e.role}
                location={e.location}
                skills={e.skills}
                heading={e.department}
              />
            ))}
          </div>
        </div>
        <p className="text-center text-gray-500 mt-10">
          Don't see a perfect fit? We hire for exceptional talent, not just open
          slots.
        </p>
        <div className="flex justify-center">
          <Button className="mx-auto mt-4 text-[#155DFC] p-5" variant="outline">
            Send a General Application
          </Button>
        </div>
      </section>
      <section className="h-[20] ">
        <div className="flex justify-center mt-20">
          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 font-medium text-blue-700 text-md">
            Hiring Process
          </span>
        </div>
        <p className="text-center  mt-5 font-bold text-4xl">What to expect</p>
        <section className="py-20 bg-white ">
          <div className="w-[80%] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {hiringProcess.map((item, index) => (
                <HiringCard
                  key={index}
                  step={item.step}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default career;
