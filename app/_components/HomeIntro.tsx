import { FaIndustry, FaShippingFast, FaGlobeAmericas } from "react-icons/fa";

const introData = [
  {
    icon: <FaIndustry className="text-2xl text-black mt-1 shrink-0" />,
    title: "Family-Owned Since the Start",
    text: "Weave & Way began as a small family venture and has grown into a beloved source for fashion designers, interior creatives, and textile enthusiasts worldwide.",
  },
  {
    icon: <FaGlobeAmericas className="text-2xl text-black mt-1 shrink-0" />,
    title: "Curated & Consciously Sourced",
    text: "We partner with trusted mills and artisans to bring you limited-edition textiles you won’t find anywhere else.",
  },
  {
    icon: <FaShippingFast className="text-2xl text-black mt-1 shrink-0" />,
    title: "Worldwide Pre-orders & Delivery",
    text: "We offer worldwide shipping and flexible pre-order options for upcoming fabric drops. All swatches ship free within the U.S., and international rates are calculated at checkout.",
  },
];

export default function HomeIntro() {
  return (
    <section className="px-4 py-20 text-black">
      <div className="grid gap-10 sm:grid-cols-3 text-center">
        {introData.map(({ icon, title, text }, i) => (
          <div key={i} className="flex items-center flex-col gap-6">
            {icon}
            <div>
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
