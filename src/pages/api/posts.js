// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method === "GET") {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Posts`,
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        },
      }
    );

    const { records } = await response.json();
    const posts = records.map((record) => ({
      id: record.id,
      ...record.fields,
    }));

    res.status(200).json({ posts });
    return;
  } else if (req.method === "POST") {
    const { content } = JSON.parse(req.body);
    const data = {
      fields: {
        content,
        date: new Date().toISOString(),
      },
    };

    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Posts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    res.status(201).json({ response });
    return;
  }
};