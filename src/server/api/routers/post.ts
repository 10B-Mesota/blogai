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
        const data = await ctx.prisma.blogEntry.findMany({});
        return data;
      }

      const data: BlogEntry[] = [];
      for (const tag of input.tags) {
        (
          await ctx.prisma.blogEntry.findMany({
            where: {
              tags: {
                has: tag,
              },
            },
          })
        ).forEach((e) => {
          data.push(e);
        });
      }

      return data;
    }),
});
