import { BlogEntry } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  createPost: publicProcedure
    .input(
      z.object({
        name: z.string(),
        tags: z.array(z.string()),
        description: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const entry = await ctx.prisma.blogEntry.create({
        data: {
          description: input.description,
          name: input.name,
          tags: input.tags,
        },
      });

      return entry;
    }),

  getPosts: publicProcedure
    .input(
      z.object({
        tags: z.array(z.string()).optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      if (!input.tags) {
        return await ctx.prisma.blogEntry.findMany({});
      }

      const data: BlogEntry[] = [];
      input.tags.forEach(async (tag) => {
        (
          await ctx.prisma.blogEntry.findMany({
            where: {
              tags: {
                has: tag,
              },
            },
          })
        ).forEach((e) => {
          console.log();
          data.push(e);
        });
      });

      return data;
    }),
});
