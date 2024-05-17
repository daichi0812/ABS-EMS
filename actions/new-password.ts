"use server"

import * as z from "zod";
import bcrypt from "bcryptjs"

import { NewPasswordSchema } from "@/schemas";
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export const newPassword = async (
    values: z.infer<typeof NewPasswordSchema>,
    token?: string | null,
) => {
    if(!token){
        return { error: "トークンがありません！"}
    }

    const validatedFields = NewPasswordSchema.safeParse(values);

    if (!validatedFields.success){
        return { error: "無効な入力です！"}
    };

    const { password } = validatedFields.data;

    const existingToken = await getPasswordResetTokenByToken(token);

    if( !existingToken ){
        return { error: "無効なトークンです！"}
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if(hasExpired){
        return { error: "トークンの有効期限が切れています！"};
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if(!existingUser){
        return { error: "存在しないメールアドレスです！"}
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.update({
        where: { id: existingUser.id },
        data: { password: hashedPassword },
    });

    await db.passwordResetToken.delete({
        where: { id: existingToken.id }
    });

    return { success: "パスワードが再設定されました！" }
}