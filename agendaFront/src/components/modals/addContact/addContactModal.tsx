import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
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
import { AiOutlineUserAdd } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateContactData, validationSchema } from "./validator";
import { useAuth } from "../../../hooks/useAuth";

export const ModalAddMusic = () => {
  const { createContact } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm<CreateContactData>({
    resolver: zodResolver(validationSchema),
  });
  return (
    <>
      <Button
        as={IconButton}
        icon={<AiOutlineUserAdd />}
        bg={"brand"}
        color={"offwhite"}
        fontSize={"4xl"}
        _hover={{ bg: "green" }}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} variant={"no-border"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"grey300"}>Adicionar contato</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(createContact)}>
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
                    onClick={onClose}
                  >
                    Adicionar
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
