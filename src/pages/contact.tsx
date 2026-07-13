import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, ChevronDown } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    budget: "",
    service: "",
    projectDetails: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const contactInfo = [
    {
      type: "PHONE",
      value: "+1 (646) 555-0182",
      subtext: "Mon-Fri 9am-6pm EST",
      icon: Phone,
    },
    {
      type: "EMAIL",
      value: "hello@nexacore.io",
      subtext: "We reply within 24 hours",
      icon: Mail,
    },
    {
      type: "NEW YORK (HQ)",
      value: "350 Fifth Avenue, Suite 4100",
      subtext: "New York, NY 10118",
      icon: MapPin,
    },
    {
      type: "LONDON",
      value: "1 Canada Square, Canary Wharf",
      subtext: "London, E14 5AB, UK",
      icon: MapPin,
    },
    {
      type: "BANGALORE",
      value: "Embassy Tech Village, Outer Ring Rd",
      subtext: "Bangalore, 560103, India",
      icon: MapPin,
    },
  ];

  const faqs = [
    {
      question: "How do you handle projects across different time zones?",
      answer: "We manage time zone differences by setting up a shared communication schedule that works for both teams. We offer daily status updates, overlap hours for live calls, and async channels (like Slack and Notion) so work moves forward seamlessly regardless of where you are located.",
    },
    {
      question: "What engagement models do you offer?",
      answer: "We offer three flexible models tailored to your needs: Dedicated Development Teams (best for scaling product development), Fixed Price Projects (best for well-defined MVPs and scopes), and Time & Materials (best for evolving requirements or ongoing maintenance).",
    },
    {
      question: "Who owns the intellectual property and source code?",
      answer: "You do. Upon complete payment, all intellectual property rights, source code, design assets, and documentation are 100% transferred to your company. We do not retain any rights to your proprietary software.",
    },
    {
      question: "Do you work with early-stage startups or only enterprises?",
      answer: "We work with both! For early-stage startups, we focus on building fast, scalable MVPs to help you find product-market fit and raise funding. For enterprise clients, we focus on robustness, performance optimization, compliance, security, and legacy integrations.",
    },
    {
      question: "What is your typical project timeline?",
      answer: "A typical MVP takes between 6 to 12 weeks to design, develop, and launch. Larger enterprise systems or highly custom solutions may take 4 to 6 months or more. We break everything down into 2-week agile sprints so you see progress continuously.",
    },
    {
      question: "How do you ensure code quality and security?",
      answer: "We enforce high engineering standards using automated tests (CI/CD pipelines), mandatory peer code reviews, typescript strict type-checking, and static analysis tools. Security-wise, we follow OWASP guidelines, run regular dependency audits, and encrypt sensitive data both in transit and at rest.",
    },
    {
      question: "Can you take over a project built by another team?",
      answer: "Yes, we frequently onboard existing codebases. We begin with a thorough technical audit to assess code health, architecture, security vulnerabilities, and test coverage. Once complete, we outline a transition plan to pick up feature development or refactor where necessary.",
    },
    {
      question: "What happens after the project launches?",
      answer: "We don't just hand over the code and disappear. We offer post-launch support and maintenance packages that cover bug fixing, performance monitoring, server optimization, library updates, and scaling assistance as your user base grows.",
    },
    {
      question: "How do you price your services?",
      answer: "Pricing depends on the scope, complexity, and engagement model of your project. After our initial discovery call, we provide a detailed, transparent proposal breakdown with time estimates and cost options so you know exactly what to expect.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        company: "",
        budget: "",
        service: "",
        projectDetails: "",
      });
    }, 1500);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-[#050D1F] via-[#0A1628] to-[#0D1F3C] pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-50/10 px-4 py-1 text-sm font-medium text-blue-300 mb-5">
            Contact Us
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Let's build something{" "}
            <span className="text-blue-400"> remarkable</span>
          </h1>

          <p className="text-lg text-blue-200/60 max-w-2xl mx-auto">
            Tell us about your project. We respond to every inquiry within one
            business day and offer a free, no-obligation discovery call.
          </p>
        </div>
      </section>

      <section className="bg-white pt-16 md:pt-24 pb-12 flex justify-center">
        <div className="w-[90%] max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
            
            {/* Left Column - Reach out directly */}
            <div className="w-full lg:w-[35%] flex flex-col">
              <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-3">
                Reach out directly
              </h2>
              <p className="text-base text-slate-500 mb-8 leading-relaxed">
                No sales playbook, no runaround. You'll hear from a senior engineer
                or project manager — someone who can actually help.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className={`bg-[#EFF6FF]/60 hover:bg-[#EFF6FF]/95 border border-[#DBEAFE]/80 rounded-2xl p-5 flex items-start gap-4 transition-all duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.01)] hover:shadow-md group ${
                        index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                      }`}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-blue-100/60 group-hover:bg-blue-100 flex items-center justify-center text-blue-600 transition-colors duration-300 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold tracking-wider text-blue-500 uppercase">
                          {info.type}
                        </span>
                        <span className="text-base font-bold text-slate-800 mt-1">
                          {info.value}
                        </span>
                        <span className="text-xs text-slate-500 mt-1 leading-normal font-medium">
                          {info.subtext}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="w-full lg:w-[58%]">
              <div className="bg-[#F8FAFC] border border-slate-100 rounded-[32px] p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.01)]">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">
                  Tell us about your project
                </h3>

                {status === "success" ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-fade-in">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-4">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-emerald-800 mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-sm text-emerald-600 mb-4">
                      Thank you for reaching out. We will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl text-sm transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] md:text-xs font-bold tracking-wider text-slate-500 uppercase">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                          placeholder="Sarah Johnson"
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder-slate-400 text-sm"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] md:text-xs font-bold tracking-wider text-slate-500 uppercase">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="sarah@company.com"
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder-slate-400 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] md:text-xs font-bold tracking-wider text-slate-500 uppercase">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          placeholder="Acme Corp"
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder-slate-400 text-sm"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] md:text-xs font-bold tracking-wider text-slate-500 uppercase">
                          Budget Range
                        </label>
                        <div className="relative">
                          <select
                            value={formData.budget}
                            onChange={(e) =>
                              setFormData({ ...formData, budget: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700 text-sm cursor-pointer appearance-none"
                          >
                            <option value="">Select range...</option>
                            <option value="<$10k">Less than $10,000</option>
                            <option value="$10k-$25k">$10,000 - $25,000</option>
                            <option value="$25k-$50k">$25,000 - $50,000</option>
                            <option value="$50k+">$50,000 +</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] md:text-xs font-bold tracking-wider text-slate-500 uppercase">
                        Service Needed
                      </label>
                      <div className="relative">
                        <select
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700 text-sm cursor-pointer appearance-none"
                        >
                          <option value="">Select a service...</option>
                          <option value="custom-software">Custom Software Development</option>
                          <option value="web-mobile-apps">Web & Mobile Applications</option>
                          <option value="ai-cloud">AI & Cloud Solutions</option>
                          <option value="security-devops">Security & DevOps</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] md:text-xs font-bold tracking-wider text-slate-500 uppercase">
                        Tell us about your project *
                      </label>
                      <textarea
                        required
                        value={formData.projectDetails}
                        onChange={(e) =>
                          setFormData({ ...formData, projectDetails: e.target.value })
                        }
                        placeholder="What are you building? What problems are you solving? What does success look like in 12 months?"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800 placeholder-slate-400 text-sm min-h-[120px] resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer text-sm md:text-base active:scale-[0.98]"
                    >
                      <Send className="w-4 h-4 transform rotate-[-15deg] translate-y-[-1px]" />
                      <span>
                        {status === "submitting"
                          ? "Sending Message..."
                          : "Send Message — We Reply Within 24 Hours"}
                      </span>
                    </button>

                    <p className="text-center text-[11px] text-slate-400 leading-normal max-w-md mx-auto">
                      By submitting you agree to our Privacy Policy. We never share your data. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#F4F8FF] py-20 md:py-24 flex justify-center border-t border-slate-100">
        <div className="w-[90%] max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          
          {/* FAQ Badge */}
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold text-blue-600 mb-4 shadow-[0_1px_2px_rgba(59,130,246,0.05)]">
            FAQ
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-12">
            Common questions
          </h2>

          {/* Accordion list */}
          <div className="text-left space-y-3.5 max-w-3xl mx-auto">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E2E8F0]/80 rounded-2xl transition-all duration-300 shadow-[0_2px_8px_rgba(15,23,42,0.01)] hover:shadow-md hover:border-blue-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex items-center justify-between w-full px-6 py-5 text-left font-semibold text-slate-800 hover:text-blue-600 transition-colors duration-200 cursor-pointer group"
                  >
                    <span className="text-sm sm:text-base leading-snug pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ease-in-out group-hover:text-blue-500 ${
                        isOpen ? "transform rotate-180 text-blue-500" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[300px] border-t border-slate-100/60" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 py-5 text-sm sm:text-base text-slate-500 leading-relaxed bg-[#F8FAFC]/40">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
