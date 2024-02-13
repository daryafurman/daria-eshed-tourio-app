// import { db_places } from "../../../../lib/db_places";
import dbConnect from "../../../../db/connection.js";
import Place from "../../../../db/schemas/place.js";

import { db_comments } from "../../../../lib/db_comments";

export default async function handler(request, response) {
  const { id } = request.query;
  console.log(id);
  if (!id) {
    return;
  }
  await dbConnect();

  if (request.method === "GET") {
    const foundPlace = await Place.findById(id);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!place", foundPlace);
    //   const comment = place?.comments;
    //   const allCommentIds = comment?.map((comment) => comment.$oid) || [];
    //   const comments = db_comments.filter((comment) =>
    //     allCommentIds.includes(comment._id.$oid)
    //   );

    //   if (!place) {
    //     return response.status(404).json({ status: "Not found" });
    //   }

    return response.status(200).json({ place: foundPlace, comments: [] });
  }

  if (request.method === "PUT") {
    await Place.findByIdAndUpdate(id, {
      $set: request.body,
    });
    return response
      .status(200)
      .json({ status: "Place is sucsessfully updated" });
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
