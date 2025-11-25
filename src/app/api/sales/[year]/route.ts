import { NextResponse } from "next/server";

import data2022 from "@/data/sales2022.json";
import data2023 from "@/data/sales2023.json";
import data2024 from "@/data/sales2024.json";

const allData: Record<number, any[]> = {
  2022: data2022,
  2023: data2023,
  2024: data2024,
};

export async function GET(request: Request) {
  try {
    // Extract year from URL
    const url = new URL(request.url);
    const paths = url.pathname.split("/"); // ["", "api", "sales", "2022"]
    const yearStr = paths[paths.length - 1];

    console.log("Year from URL:", yearStr);

    const year = Number(yearStr);
    if (!year || !allData[year]) {
      return NextResponse.json(
        { error: "Invalid year parameter", year: null, data: [] },
        { status: 400 }
      );
    }

    const data = allData[year];
    console.log("Data length:", data.length);

    return NextResponse.json({ year, data });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Internal server error", year: null, data: [] },
      { status: 500 }
    );
  }
}
