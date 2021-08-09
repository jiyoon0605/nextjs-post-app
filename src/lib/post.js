import { auth } from "./auth";

export async function getAllPosts() {
  const response = await fetch(
    `https://mystifying-lovelace-13366a.netlify.app/api/posts`
  );
  const { posts } = await response.json();

  const sortable = [];
  for (let post of posts) {
    sortable.push(post);
  }
  sortable.sort((a, b) => new Date(b.date) - new Date(a.date));

  return [];
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
