import { z } from "zod";

export const schema = z.object({
  contact_name: z.string().nonempty(),
  phones_number: z.string().nonempty(),
  contact_image: z.string().optional(),
  email: z.string().email("Digite um email válido"),
});

export const validationSchema = z.object({
  contact_name: z.string().min(3, { message: "Nome é obrigatório" }),
  phones_number: z.string().max(11, { message: "Telefone é obrigatório" }),
  contact_image: z.string().optional(),
  email: z.string().email({ message: "E-mail é obrigatório" }),
});

export type CreateContactData = z.infer<typeof schema>;
