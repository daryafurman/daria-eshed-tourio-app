// import { db_places } from "../../../lib/db_places";

// export default function handler(request, response) {
//   return response.status(200).json(db_places);
// }

import dbConnect from "../../../db/connection.js";
import Places from "../../../db/schemas/places.schema.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const places = await Places.find();
      return response.status(200).json(places);
    } catch (error) {
      throw new Error(error);
    }
  } else {
    return response.status(404).json({ message: "Not Found" });
  }
}
