import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Compass,
  Code2,
  Handshake,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";

export const WHY_CHOOSE: Array<{
  title: string;
  desc: string;
  icon: LucideIcon;
}> = [
  {
    title: "Craft over hype",
    desc: "We care about durable systems, clear architecture, and thoughtful execution.",
    icon: Sparkles,
  },
  {
    title: "Senior engineers only",
    desc: "Every build is led by experienced professionals who understand tradeoffs deeply.",
    icon: UsersRound,
  },
  {
    title: "Outcome-focused delivery",
    desc: "We ship features that move business metrics, not just tickets on a board.",
    icon: BarChart3,
  },
  {
    title: "Reliable partnership",
    desc: "Transparent communication and practical collaboration keep projects healthy from day one.",
    icon: Handshake,
  },
];

export const PROCESS_STEPS: Array<{
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}> = [
  {
    step: "Discover",
    title: "Discovery",
    desc: "We align on business goals, users, risks, and the right first milestone.",
    icon: Compass,
  },
  {
    step: "Plan",
    title: "Planning",
    desc: "We shape architecture, scope, and delivery milestones with measurable outcomes.",
    icon: PenTool,
  },
  {
    step: "Build",
    title: "Build",
    desc: "Our team produces fast, maintainable software with clear quality gates.",
    icon: Code2,
  },
  {
    step: "Launch",
    title: "Launch",
    desc: "We prepare deployment, analytics, and support so the release is dependable.",
    icon: Rocket,
  },
  {
    step: "Scale",
    title: "Scale",
    desc: "We optimize performance, reliability, and team workflows as demand grows.",
    icon: Workflow,
  },
  {
    step: "Secure",
    title: "Secure",
    desc: "We embed security, monitoring, and governance into every layer of delivery.",
    icon: ShieldCheck,
  },
  {
    step: "Grow",
    title: "Grow",
    desc: "We continue improving product experience and infrastructure long after launch.",
    icon: Handshake,
  },
];
