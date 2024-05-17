import { UserRole } from "@prisma/client";
import * as z from "zod";

export const SettingsSchema = z.object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(10, {
        message: "10文字以上のパスワードにしてください"
    })),
    newPassword: z.optional(z.string().min(10, {
        message: "10文字以上のパスワードにしてください"
    })),
})
    .refine((data) => {
        if (data.password && !data.newPassword) {
            return false;
        }

        return true;
    }, {
        message: "新しいパスワードを入力してください！",
        path: ["newPassword"]
    })
    .refine((data) => {
        if (data.newPassword && !data.password) {
            return false;
        }

        return true;
    }, {
        message: "新しいパスワードを入力してください！",
        path: ["password"]
    })

export const NewPasswordSchema = z.object({
    password: z.string().min(10, {
        message: "10文字以上のパスワードにしてください"
    }),
})

export const ResetSchema = z.object({
    email: z.string().email({
        message: "メールアドレスを入力してください"
    }),
})

export const LoginSchema = z.object({
    email: z.string().email({
        message: "メールアドレスを入力してください"
    }),
    password: z.string().min(1, {
        message: "パスワードを入力してください"
    }),
    code: z.optional(z.string()),
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "メールアドレスを入力してください"
    }),
    password: z.string().min(10, {
        message: "10文字以上のパスワードにしてください"
    }),
    name: z.string().min(1, {
        message: "名前を入力してください"
    })
})