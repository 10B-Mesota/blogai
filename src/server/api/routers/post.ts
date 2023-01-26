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
        return await ctx.prisma.blogEntry.findMany({
          select: {
            tags: true,
            name: true,
            description: true,
          },
        });
      }

      const data = input.tags
        .map(async (tag) => {
          return await ctx.prisma.blogEntry.findMany({
            where: {
              tags: {
                has: tag,
              },
            },
          });
        })
        .join();

      return data;
    }),
});
