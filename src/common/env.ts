import "dotenv/config";

export const jwtSecret = process.env.SECRET_KEY as string;
