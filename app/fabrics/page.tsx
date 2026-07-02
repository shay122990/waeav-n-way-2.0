import { headers } from "next/headers";
import FabricsClient from "./FabricsClient";

export const dynamic = "force-dynamic";

import type { Fabric } from "../types/fabric";

async function getFabrics(): Promise<Fabric[]> {
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  const res = await fetch(`${protocol}://${host}/api/fabrics`, {
    cache: "no-store",
  });

  if (!res.ok) return [];

  const result = await res.json();

  return result.data || [];
}

export default async function FabricsPage() {
  const fabrics = await getFabrics();

  return <FabricsClient fabrics={fabrics} />;
}
