import { z } from "zod";

export const schema = z.object({
  name: z.string().nonempty(),
  phones_number: z.string().nonempty(),
  user_image: z.string().optional(),
  email: z.string().email("Digite um email válido"),
  password: z.string().nonempty("Senha obrigatória"),
  confirmPassword: z.string().nonempty("Confirme sua senha"),
});

export const returnSchema = schema.extend({
  id: z.string(),
});

export const validationSchema = z
  .object({
    name: z.string().min(3, { message: "Nome é obrigatório" }),
    phones_number: z.string().max(11, { message: "Telefone é obrigatório" }),
    user_image: z.string().optional(),
    email: z.string().email({ message: "E-mail é obrigatório" }),
    password: z
      .string()
      .max(6, { message: "A senha deve ter no máximo 6 caracteres" }),
    confirmPassword: z.string().max(6, { message: "Confirme sua senha" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Senha incorreta",
  });

export type CreateUserData = z.infer<typeof schema>;
export type ReturnCreateUserData = z.infer<typeof returnSchema>;
