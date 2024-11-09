import { z } from "zod";

const tweetSchema = z.object({
    body: z.string().min(10).max(250)
});

export { tweetSchema };