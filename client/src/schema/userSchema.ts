import {z} from "zod";
export const userSignupSchema = z.object({
    fullname: z.string().min(1,"Fullname is required"),
    email:z.string().email("Invalid email address"),
    password:z.string().min(6, "Password must be 6 characters."),
    contact:z.string().min(10,"Contact number must be 10 digit")
});

export type SignupInputstate = z.infer<typeof userSignupSchema>

export const userLoginSchema = z.object({
    email:z.string().email("Invalid email address"),
    password:z.string().min(6,"Password must be 6 characters."),
});

export type LoginInputState = z.infer<typeof userLoginSchema>