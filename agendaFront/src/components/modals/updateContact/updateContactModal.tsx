import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuth } from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateContactData, updateSchema } from "../addContact/validator";
import { Contact } from "../../../providers/authProvider";

interface propsUpdate {
  contact: Contact;
}

export const UpdateContactModal = ({ contact }: propsUpdate) => {
  const { updateContact } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm<UpdateContactData>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      contact_name: contact.contact_name,
      email: contact.email,
      phones_number: contact.phones_number,
      contact_image: contact.contact_image,
    },
  });

  return (
    <>
      <Button
        variant={"outline"}
        color={"brand"}
        outline={"brand"}
        onClick={onOpen}
      >
        Editar
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} variant={"no-border"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"grey300"}>Editar contato</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              onSubmit={handleSubmit((data) =>
                updateContact(data, contact.id, onClose)
              )}
            >
              <FormControl>
                <FormLabel fontWeight={"normal"} color={"grey300"}>
                  Nome
                </FormLabel>
                <Input
                  variant={"outline"}
                  placeholder="Nome do seu contato"
                  mb={"2"}
                  {...register("contact_name")}
                />
                <FormLabel fontWeight={"normal"} color={"grey300"}>
                  E-mail
                </FormLabel>
                <Input
                  variant={"outline"}
                  type="email"
                  placeholder="email@email.com"
                  mb={"2"}
                  {...register("email")}
                />
                <FormLabel fontWeight={"normal"} color={"grey300"}>
                  Telefone
                </FormLabel>
                <Input
                  variant={"outline"}
                  type={"tel"}
                  placeholder="xx - xxxxx - xxxx"
                  mb={"2"}
                  {...register("phones_number")}
                />
                <FormLabel fontWeight={"normal"} color={"grey300"}>
                  Imagem
                </FormLabel>
                <Input
                  variant={"outline"}
                  placeholder="Link para a imagem do seu contato"
                  mb={"2"}
                  {...register("contact_image")}
                />
                <ModalFooter>
                  <Button
                    type="submit"
                    bg={"brand"}
                    color={"offwhite"}
                    mr={3}
                    _hover={{ bg: "green" }}
                    // onClick={onClose}
                  >
                    Editar
                  </Button>
                  <Button
                    type="button"
                    color={"grey300"}
                    variant={"ghost"}
                    mr={3}
                    onClick={onClose}
                  >
                    Cancelar
                  </Button>
                </ModalFooter>
              </FormControl>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
