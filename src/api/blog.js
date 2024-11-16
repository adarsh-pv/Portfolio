import axios from "axios";

export default async function handler(req, res) {
  // Set appropriate CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  try {
    const response = await axios.get("https://medium.com/feed/@adarshharindran", {
      responseType: "text", // Ensure the response is in text (XML) format
    });

    res.status(200).send(response.data); // Send the data back to the client
  } catch (error) {
    console.error("Error fetching Medium RSS feed:", error);
    res.status(500).json({ error: "Failed to fetch Medium RSS feed" });
  }
}
