import { auth } from "./auth";

export async function getAllPosts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`
  );
  const { posts } = await response.json();

  const sortable = [];
  for (let post of posts) {
    sortable.push(post);
  }
  sortable.sort((a, b) => new Date(b.date) - new Date(a.date));

  // const res = await fetch(
  //   `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Posts`,
  //   {
  //     headers: {
  //       Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
  //     },
  //   }
  // );
  // const { records } = await res.json();
  // const posts = records.map((record) => ({
  //   id: record.id,
  //   ...record.fields,
  // }));

  // const sortable = [];
  // for (let post of posts) {
  //   sortable.push(post);
  // }
  // sortable.sort((a, b) => new Date(b.date) - new Date(a.date));

  return sortable;
}

export async function createPost(data) {
  const user = auth.currentUser();
  console.log("user", user.token);
  await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${user.token.access_token}`,
    },
  });
}
