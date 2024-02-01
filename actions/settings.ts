'use server';

import * as z from 'zod';

import { db } from '@/lib/db';
import { SettingSchema } from '@/schemas';
import { getUserById } from '@/data/user';
import { currentUser } from '@/lib/auth';

export const settings = async (values: z.infer<typeof SettingSchema>) => {
  const user = await currentUser();

  if (!user) return { error: 'Unauthorized!' };

  const dbUser = await getUserById(user.id);

  if (!dbUser) return { error: 'Unauthorized!' };

  await db.user.update({
    where: {
      id: user.id,
    },
    data: {
      ...values,
    },
  });
  return { success: 'Settings updated!' };
};
