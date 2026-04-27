import Image from "next/image";

interface FabricCategory {
  id: number;
  name: string;
  image: string;
}

const popularCategories: FabricCategory[] = [
  { id: 1, name: "Cotton", image: "/popular/cotton.webp" },
  { id: 2, name: "Linen", image: "/popular/linen.jpg" },
  { id: 3, name: "Satin", image: "/popular/satin.webp" },
  { id: 4, name: "Silk", image: "/popular/silk.webp" },
  { id: 5, name: "Crepe", image: "/popular/crepe.webp" },
];

export default function PopularFabrics() {
  return (
    <section className="py-6 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-6 mt-6">Most Popular Fabrics</h2>
      <div className="overflow-x-auto">
        <div className="flex justify-center space-x-6 min-w-max">
          {popularCategories.map((category) => (
            <div
              key={category.id}
              className="flex-shrink-0 w-100 bg-white text-black p-4"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={456}
                height={456}
                className="w-full h-86 lg:h-96 object-cover rounded"
              />
              <h3 className="mt-4 font-medium text-base text-center">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
