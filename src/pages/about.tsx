import { NavLink } from "react-router";
import {
  Award,
  Star,
  ArrowRight,
  Target,
  Users,
  Globe,
  TrendingUp,
} from "lucide-react";
import { WHY_CHOOSE, PROCESS_STEPS } from "../data";

const headingFont = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

const stats = [
  {
    icon: Globe,
    value: "32",
    label: "Countries Served",
    sub: "Global delivery, local understanding",
  },
  {
    icon: TrendingUp,
    value: "$40M+",
    label: "Client Funding Raised",
    sub: "Through products we built",
  },
  {
    icon: Target,
    value: "99.97%",
    label: "Platform Uptime SLA",
    sub: "Across all managed systems",
  },
  {
    icon: Users,
    value: "150+",
    label: "Expert Engineers",
    sub: "Senior-only, globally distributed",
  },
];

const culturePoints = [
  "Remote-first with offices in 3 global cities",
  "No dedicated sales team - our work speaks for itself",
  "Engineers talk directly to clients, always",
  "Average tenure of 4.2 years - we retain our best",
];

function AboutPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-[#050D1F] via-[#0A1628] to-[#0D1F3C] pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-300 mb-5">
            About Us
          </span>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
            style={headingFont}
          >
            Engineering excellence, delivered with{" "}
            <span className="text-blue-400">purpose</span>
          </h1>

          <p className="text-lg text-blue-200/60 max-w-2xl mx-auto">
            Founded in 2012, NexaCore has grown from a 4-person consultancy into
            a 150+ engineer global technology firm trusted by companies across
            32 countries.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-5">
                Our Story
              </span>

              <h2
                className="text-4xl font-extrabold text-[#0A1628] mb-6"
                style={headingFont}
              >
                From a small team to a{" "}
                <span className="text-blue-600">global partner</span>
              </h2>

              <p className="text-lg text-slate-500 leading-relaxed mb-5">
                NexaCore was founded in New York in 2012 by three engineers who
                believed software agencies had it backwards - they were
                optimizing for sales, not for outcomes. We built NexaCore on a
                single premise: that the best client relationship is one where
                you become genuinely invested in each other's success.
              </p>

              <p className="text-lg text-slate-500 leading-relaxed mb-5">
                Today we have over 150 engineers, designers, and strategists
                across New York, London, and Bangalore. We've shipped products
                in 32 countries, helped our clients raise over $40M in venture
                capital, and built platforms serving tens of millions of end
                users.
              </p>

              <p className="text-lg text-slate-500 leading-relaxed">
                We believe the best software is built at the intersection of
                deep technical craft and genuine business understanding. Every
                engineer we hire must be able to explain architectural decisions
                in plain English - because code that solves the wrong problem is
                never good code.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop&auto=format"
                alt="NexaCore engineering team"
                className="rounded-3xl w-full shadow-2xl shadow-blue-100 bg-blue-100"
              />

              <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 p-5 bg-white rounded-2xl shadow-xl border border-blue-100 max-w-[240px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <div className="text-sm font-bold text-[#0A1628]">
                      ISO 9001 Certified
                    </div>
                    <div className="text-xs text-slate-500">
                      Quality Assured Since 2016
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="text-xs text-slate-500 ml-1">
                    4.9/5 on Clutch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#F0F6FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="p-8 bg-white rounded-2xl border border-blue-100 shadow-sm text-center hover:shadow-lg hover:shadow-blue-50 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>

                  <div
                    className="text-4xl font-extrabold text-blue-600 mb-1"
                    style={headingFont}
                  >
                    {item.value}
                  </div>
                  <div className="text-base font-bold text-[#0A1628] mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-500">{item.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase">
              Our Values
            </span>

            <h2
              className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#0A1628]"
              style={headingFont}
            >
              What we stand for
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_CHOOSE.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group p-6 bg-gradient-to-b from-blue-50/60 to-white rounded-2xl border border-blue-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-blue-100 flex items-center justify-center mb-4 shadow-sm group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <Icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>

                  <h3
                    className="text-base font-bold text-[#0A1628] mb-2"
                    style={headingFont}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=480&fit=crop&auto=format"
              alt="NexaCore team working together"
              className="rounded-3xl shadow-2xl shadow-blue-100 bg-blue-100"
            />

            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide uppercase mb-5">
                Our Culture
              </span>

              <h2
                className="text-4xl font-extrabold text-[#0A1628] mb-6"
                style={headingFont}
              >
                A team that cares about{" "}
                <span className="text-blue-600">craft</span>
              </h2>

              <p className="text-lg text-slate-500 leading-relaxed mb-6">
                We hire exceptional engineers who could work anywhere - but
                choose NexaCore because of our commitment to doing the work
                properly. No cutting corners, no siloed knowledge, no heroes.
              </p>

              <ul className="space-y-3 mb-8">
                {culturePoints.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-600"
                  >
                    <span className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <NavLink
                to="/careers"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20"
              >
                Join the Team <ArrowRight className="w-4 h-4" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
