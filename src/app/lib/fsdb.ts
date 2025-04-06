import fs from "fs/promises";
import path from "path";

const USERS_FILE_PATH = path.join(process.cwd(), "data", "users.json"); // Store users.json in the 'data' directory at the root

interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
}

async function readUsers(): Promise<User[]> {
  try {
    const data = await fs.readFile(USERS_FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error: any) {
    // If the file doesn't exist or is empty, return an empty array
    if (error.code === "ENOENT") {
      return [];
    }
    console.error("Error reading users file:", error);
    return [];
  }
}

async function writeUsers(users: User[]): Promise<void> {
  try {
    await fs.writeFile(
      USERS_FILE_PATH,
      JSON.stringify(users, null, 2),
      "utf-8"
    );
  } catch (error) {
    console.error("Error writing users file:", error);
    throw new Error("Failed to write users to file");
  }
}

export async function createUser(user: Omit<User, "id">): Promise<User> {
  const users = await readUsers();
  const newUser: User = {
    id: Math.random().toString(36).substring(2, 15),
    ...user,
  };
  users.push(newUser);
  await writeUsers(users);
  return newUser;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const users = await readUsers();
  return users.find((user) => user.email === email) || null;
}
