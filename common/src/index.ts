import z from 'zod'

export const signupInput=z.object({
    email:z.string().email(),
    password:z.string().min(6),
    name:z.string().optional()
})

export type SignUpInput=z.infer<typeof signupInput>

export const siginpInput=z.object({
    email:z.string().email(),
    password:z.string().min(6),
})

export type SignInInput=z.infer<typeof siginpInput>

export const createBlogInput=z.object({
    title:z.string(),
    description:z.string(),
})

export type CreateBlogInput=z.infer<typeof createBlogInput>


export const updateBlogInput=z.object({
    title:z.string(),
    description:z.string(),
    id:z.number()
})

export type UpdateBlogInput=z.infer<typeof updateBlogInput>