import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Digite um email válido"),
  password: z.string().nonempty("Senha obrigatória"),
});

export type LoginData = z.infer<typeof schema>;
