import { Braces, GlobeCheck, TabletSmartphone } from "lucide-react";
import { PROCESS_STEPS } from "../data";
import Card from "../Components/reusable/card";

const headingFont = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

const Services = () => {
  const card = [
    {
      icon: Braces,
      title: "Custom Software Development",
      description:
        "Tailor-made software solutions engineered to your exact business requirements, scalable from startup to enterprise.",
      redirect: "/contact",
    },
    {
      icon: GlobeCheck,
      title: "Web Development",
      description:
        "High-performance, SEO-optimized web applications built with modern frameworks for exceptional user experiences.",
      redirect: "/contact",
    },
    {
      icon: Braces,
      title: "UI/UX Design",
      description:
        "Native and cross-platform iOS & Android applications with intuitive UX and robust backend integrations.",
      redirect: "/contact",
    },
    {
      icon: Braces,
      title: "UI/UX Design",
      description:
        "Research-driven design that converts — wireframes, prototypes, and pixel-perfect interfaces that users love.",
      redirect: "/contact",
    },
    {
      icon: Braces,
      title: "UI/UX Design",
      description:
        "Research-driven design that converts — wireframes, prototypes, and pixel-perfect interfaces that users love.",
      redirect: "/contact",
    },
    {
      icon: Braces,
      title: "UI/UX Design",
      description:
        "Research-driven design that converts — wireframes, prototypes, and pixel-perfect interfaces that users love.",
      redirect: "/contact",
    },
    {
      icon: Braces,
      title: "UI/UX Design",
      description:
        "Research-driven design that converts — wireframes, prototypes, and pixel-perfect interfaces that users love.",
      redirect: "/contact",
    },
    {
      icon: Braces,
      title: "UI/UX Design",
      description:
        "Research-driven design that converts — wireframes, prototypes, and pixel-perfect interfaces that users love.",
      redirect: "/contact",
    },
    {
      icon: Braces,
      title: "UI/UX Design",
      description:
        "Research-driven design that converts — wireframes, prototypes, and pixel-perfect interfaces that users love.",
      redirect: "/contact",
    },
    {
      icon: Braces,
      title: "UI/UX Design",
      description:
        "Research-driven design that converts — wireframes, prototypes, and pixel-perfect interfaces that users love.",
      redirect: "/contact",
    },
    {
      icon: Braces,
      title: "UI/UX Design",
      description:
        "Research-driven design that converts — wireframes, prototypes, and pixel-perfect interfaces that users love.",
      redirect: "/contact",
    },
  ];
  const Kpicard = [
    {
      icon: Braces,
      title: "React",
      description: "frontend",
    },
    {
      icon: Braces,
      title: "React",
      description: "frontend",
    },
    {
      icon: Braces,
      title: "React",
      description: "frontend",
    },
    {
      icon: Braces,
      title: "React",
      description: "frontend",
    },
    {
      icon: Braces,
      title: "React",
      description: "frontend",
    },
    {
      icon: Braces,
      title: "React",
      description: "frontend",
    },
    {
      icon: Braces,
      title: "React",
      description: "frontend",
    },
    {
      icon: Braces,
      title: "React",
      description: "frontend",
    },
    {
      icon: Braces,
      title: "React",
      description: "frontend",
    },
    {
      icon: Braces,
      title: "React",
      description: "frontend",
    },
    {
      icon: Braces,
      title: "React",
      description: "frontend",
    },
    {
      icon: Braces,
      title: "React",
      description: "frontend",
    },
    {
      icon: Braces,
      title: "React",
      description: "frontend",
    },
    {
      icon: Braces,
      title: "React",
      description: "frontend",
    },
    {
      icon: Braces,
      title: "React",
      description: "frontend",
    },
  ];

  const engagementModels = [
    {
      icon: Braces,
      heading: "Best for defined projects",
      title: "Fixed Scope",
      subtitle: "Quote after discovery",
      bullets: [
        "Clear deliverables & timeline",
        "Locked scope, locked price",
        "Ideal for sub-3-month projects",
        "All IP transferred on completion",
      ],
    },
    {
      icon: GlobeCheck,
      heading: "Most popular",
      title: "Time & Materials",
      subtitle: "$85–$175 / hr by role",
      bullets: [
        "Flexible scope as you learn",
        "Weekly billing, full transparency",
        "Scale team up or down",
        "Perfect for evolving products",
      ],
    },
    {
      icon: TabletSmartphone,
      heading: "Enterprise & long-term",
      title: "Dedicated Team",
      subtitle: "From $18K/mo",
      bullets: [
        "Full squad, your timezone",
        "Direct Slack access to engineers",
        "Month-to-month commitment",
        "Embedded as your R&D arm",
      ],
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
            Services
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Everything you need to{" "}
            <span className="text-blue-400">build and scale</span>
          </h1>

          <p className="text-lg text-blue-200/60 max-w-2xl mx-auto">
            14 specialized services covering the full software development
            lifecycle — all under one roof, one team, one accountability.
          </p>
        </div>
      </section>

      <section className="w-full py-20 flex justify-center">
        <div className="w-[90%] max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {card.map((e, index) => (
            <Card
              key={`${e.title}-${index}`}
              icon={e.icon}
              title={e.title}
              description={e.description}
              redirect={e.redirect}
            />
          ))}
        </div>
      </section>
      <section className="py-20 bg-[#F0F6FF]">
        <div className="border w-[90%]  m-auto ">
          <p className="text-center mt-20 text-blue-600 border-gray">
            Tech Stack
          </p>
          <p className="text-4xl font-bold text-center mt-7">
            Modern stack, <span className="text-blue-600">proven results</span>
          </p>
          <div className="border flex flex-wrap gap-6 justify-center">
            {Kpicard.map((e, index) => {
              const Icon = e.icon;

              return (
                <div
                  key={index}
                  className="w-[220px] h-[120px] rounded-2xl bg-[#F7FAFF] p-7 shadow-md hover:shadow-xl transition mt-10 flex justify-center items-center flex-col gap-2 "
                >
                  <div className="w-5 h-5 rounded-xl bg-blue-100 flex items-center justify-center ">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>

                  <h2 className="text-sm font-semibold text-gray-900">
                    {e.title}
                  </h2>

                  <p className="   text-gray-600 leading-7">{e.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-br from-[#050D1F] to-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide uppercase">
              How We Work
            </span>

            <h2
              className="mt-4 text-4xl sm:text-5xl font-extrabold text-white"
              style={headingFont}
            >
              Our 7-step delivery process
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.step}
                  className="group flex flex-col items-center text-center"
                >
                  <div className="relative mb-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-xl shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cyan-400 text-[#0A1628] text-[10px] font-black flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>

                  <h3
                    className="text-sm font-bold text-white mb-1"
                    style={headingFont}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-blue-200/50 leading-relaxed">
                    {step.desc.slice(0, 60)}...
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="inline-flex items-center rounded-full bg-[#EFF6FF] px-4 py-2 text-blue-700 font-medium">
              Engagement Models
            </p>
            <p className="text-center font-bold text-4xl mt-4">
              How we <span className="text-[#155DFC]">work together</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <Card
                key={`${model.title}-${index}`}
                icon={model.icon}
                heading={model.heading}
                title={model.title}
                description={
                  <>
                    <p className="text-sm text-blue-600 font-semibold">
                      {model.subtitle}
                    </p>

                    <ul className="mt-4 space-y-3 text-gray-600">
                      {model.bullets.map((b: string, i: number) => (
                        <li className="flex items-start gap-3" key={i}>
                          <span className="text-blue-500 mt-1">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                }
                redirect="/contact"
                buttonText="Get a Quote"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
