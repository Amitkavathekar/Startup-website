import { NavLink } from "react-router-dom";

const Home = () => {
  const stats = [
    { value: "500+ ", label: "Projects Completed" },
    { value: "12+", label: "Years of Experience" },
    { value: "98%", label: "Client Retention" },
    { value: "150+", label: "Skilled Specialists" },
  ];

  const metrics = [
    { label: "Platform Uptime", value: "98.7%" },
    { label: "Average Load Time", value: "1.2s" },
    { label: "Active Daily Users", value: "12K" },
  ];

  const technologies = ["AI/ML", "AWS", "Docker"];

  const reasons = [
    {
      title: "Practical product experience",
      description:
        "We build software that is reliable, secure, and ready to grow with your business.",
      icon: "🚀",
    },
    {
      title: "Support from start to scale",
      description:
        "From early planning to launch and long-term improvements, we stay involved throughout.",
      icon: "🧩",
    },
    {
      title: "Strong modern stack",
      description:
        "Our team works across React, Node, AI, cloud, and DevOps to deliver complete solutions.",
      icon: "💡",
    },
    {
      title: "Clear and dependable delivery",
      description:
        "We keep communication simple, move quickly, and focus on outcomes that matter.",
      icon: "🤝",
    },
  ];

  const reviews = [
    {
      name: "Lisa Chen",
      role: "CEO, BrightWave",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
      text: "NexaCore helped us launch faster than we expected, and working with the team felt smooth from day one.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      role: "CTO, CoreTech Labs",
      avatar:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=120&q=80",
      text: "Their technical direction was thoughtful, the delivery pace stayed consistent, and the final product was solid.",
      rating: 5,
    },
    {
      name: "Maya Singh",
      role: "Head of Product, Nova Systems",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80",
      text: "They took a complicated brief and turned it into a polished, scalable experience our users genuinely enjoy.",
      rating: 5,
    },
  ];

  const services = [
    {
      emoji: "⚡",
      title: "Custom Software",
      description:
        "Solutions shaped around your business, not the other way around",
    },
    {
      emoji: "🌐",
      title: "Web & Mobile Apps",
      description: "Fast, modern products built for real users",
    },
    {
      emoji: "🤖",
      title: "AI & Cloud",
      description: "Smarter systems designed to scale with confidence",
    },
    {
      emoji: "🔒",
      title: "Security & DevOps",
      description: "Stable infrastructure with dependable delivery practices",
    },
  ];

  const chartHeights = [60, 80, 55, 90, 70];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen bg-[#061b32] text-white py-16">
        <div className="absolute  bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.25),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.18),_transparent_22%)] opacity-80 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div className="max-w-2xl space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-white/5 px-4 py-2 text-sm text-blue-100">
                Trusted by 200+ companies worldwide
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                  We Build
                  <span className="text-blue-400">
                    Software That Helps
                  </span>{" "}
                  Businesses Grow
                </h1>
                <p className="text-lg text-slate-300 max-w-xl">
                  NexaCore is a software development partner for teams that want
                  thoughtful products, dependable execution, and technology that
                  can scale from MVP to enterprise.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="rounded-full bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-500 transition">
                  Get Started
                </button>
                <button className="rounded-full border border-slate-600 bg-white/5 px-7 py-3 font-semibold text-slate-100 hover:border-blue-400 transition">
                  Book a Free Consultation
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((e) => (
                  <div
                    key={e.label}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
                  >
                    <p className="text-3xl font-bold text-white">{e.value}</p>
                    <p className="mt-2 text-sm text-slate-300">{e.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Demo Card */}
            <div className="rounded-[32px] border border-white/10 bg-[#0f2443]/90 p-6 shadow-2xl">
              <div className="space-y-6">
                <div className="flex gap-3">
                  <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-widest text-slate-300">
                    React
                  </span>
                  <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-widest text-slate-300">
                    Node.js
                  </span>
                </div>

                <div className="rounded-[1.8rem] border border-white/10 bg-[#0d2039]/95 p-6 space-y-6">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span className="font-medium">nexacore.app/dashboard</span>
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                      <span>Live</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl bg-white/5 p-4"
                      >
                        <p className="text-sm text-slate-300">{metric.label}</p>
                        <p className="mt-2 text-xl font-semibold text-white">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="rounded-[1.75rem] bg-gradient-to-b from-blue-500/20 via-slate-900/40 to-transparent p-5">
                    <div className="flex h-56 items-end justify-between gap-3">
                      {chartHeights.map((height, idx) => (
                        <div
                          key={idx}
                          className="flex-1 rounded-3xl bg-gradient-to-t from-blue-400 to-cyan-300"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-xs text-slate-300">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-blue-600">
              What We Do
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-[#0A1628]">
              End-to-end software services,{" "}
              <span className="text-blue-600">all with one partner</span>
            </h2>
            <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
              From early product thinking to long-term maintenance, we support
              the full development journey so your team does not have to manage
              multiple vendors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white p-6 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all"
              >
                <div className="text-3xl mb-3">{service.emoji}</div>
                <h3 className="font-bold text-[#0A1628] mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <NavLink
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 transition"
            >
              View All 14 Services
            </NavLink>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-600 to-blue-800 py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-blue-100">
              Why NexaCore
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
              The NexaCore difference
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:-translate-y-1 hover:bg-white/10 transition-all"
              >
                <div className="mb-4 h-10 w-10 flex items-center justify-center rounded-xl bg-white/10 text-xl">
                  {e.icon}
                </div>
                <h3 className="mb-2 text-sm font-bold text-white">{e.title}</h3>
                <p className="text-xs leading-relaxed text-blue-100/60">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#F8FBFF] py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-blue-600">
              Client Stories
            </span>
            <h2 className="mt-4 text-4xl font-bold text-[#0A1628]">
              What our <span className="text-blue-600">clients say</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="rounded-2xl border border-blue-50 bg-white p-7 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/60 transition-all"
              >
                <div className="mb-4 text-3xl text-blue-200">"</div>
                <p className="mb-6 text-sm italic leading-relaxed text-slate-600">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-11 w-11 rounded-full bg-blue-100 object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[#0A1628]">
                      {review.name}
                    </p>
                    <p className="text-xs text-slate-500">{review.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <span
                        key={i}
                        className="h-3 w-3 rounded-full bg-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <NavLink
              to="/testimonials"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition"
            >
              Read All Testimonials
            </NavLink>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 px-8 sm:px-10 py-14 text-center shadow-2xl shadow-blue-500/20">
            <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-blue-400/20 blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-cyan-400/15 blur-[60px] pointer-events-none" />

            <div className="relative space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Your next great product starts with the right conversation.
              </h2>
              <p className="text-blue-100/70 max-w-xl mx-auto">
                Join 200+ companies that chose NexaCore as a long-term
                technology partner. Your first consultation is free and there is
                no pressure to commit.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-bold text-blue-700 hover:bg-blue-50 transition"
                >
                  Start Your Project <span>→</span>
                </NavLink>
                <NavLink
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white hover:bg-white/20 transition"
                >
                  View Our Work
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
