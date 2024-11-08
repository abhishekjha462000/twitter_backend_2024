import { z } from "zod";

const tweetSchema = z.object({
    tweet: z.string().min(10).max(250)
});

export { tweetSchema };