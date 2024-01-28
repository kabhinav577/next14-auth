'use server';

import * as z from 'zod';

import { getUserByEmail } from '@/data/user';
import { ResetSchema } from '@/schemas';
import { sendPasswordResetEmail } from '@/lib/mail';
import { generatePasswordResetToken } from '@/lib/tokens';

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid email!' };
  }

  const { email } = validatedFields.data;

  const exisitinhgUser = await getUserByEmail(email);

  if (!exisitinhgUser) {
    return { error: 'Email not founds!' };
  }

  // TODO:: Generate token and send email
  const passwordResetToken = await generatePasswordResetToken(email);

  await sendPasswordResetEmail(email, passwordResetToken.token);

  return { success: 'Check your email for a reset link!' };
};
