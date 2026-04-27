import Image from "next/image";
// add these collections to fabrics categories and include direct navigation
const collections = [
  {
    id: 1,
    title: "Summer Breeze",
    description: "Lightweight crepes with ombre finish",
    image: "/featured/summer.jpg",
  },
  {
    id: 2,
    title: "Pop With Color",
    description: "A unique blend of popping colors",
    image: "/featured/color.jpg",
  },
  {
    id: 3,
    title: "Print Essentials",
    description: "Vibrant print for a unique style",
    image: "/featured/prints.jpg",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="bg-white text-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Featured Collections</h2>
        <p className="text-gray-600">
          Curated fabric sets for seasonal and creative inspiration.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {collections.map(({ id, title, description, image }) => (
          <div key={id} className=" overflow-hidden border-b-2">
            <div className="relative w-full h-64">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw,
                        (max-width: 1024px) 50vw,
                        33vw"
                className="object-cover"
                priority={id === 1}
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
