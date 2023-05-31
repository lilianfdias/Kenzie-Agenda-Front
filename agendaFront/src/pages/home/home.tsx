import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import { FaUserEdit, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { ModalAddMusic } from "../../components/modals/addContact/addContactModal";
import { Contact } from "../../providers/authProvider";

// interface Contact {
//   id: string;
//   contact_name: string;
//   email: string;
//   phones_number: string;
//   contact_image?: string;
// }

export const Home = () => {
  const { user, contacts, setContacts, deleteContact } = useAuth();
  // const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get<Contact[]>("contacts");
      setContacts(response.data);
    })();
  }, []);
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width="100vw"
        height={"20"}
        boxShadow="0px 0px 30px -20px rgba(0, 0, 0, 0.25)"
      >
        <Box
          width="80%"
          height={"20"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Image src={logo} width={"68px"} height={"69px"} />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GiHamburgerMenu />}
              variant="ghost"
            />
            <MenuList>
              <MenuItem icon={<FaUserEdit />}>Editar perfil</MenuItem>
              <MenuItem icon={<MdLogout />}>Sair</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width="100vw"
        height={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"10"}
      >
        <Box
          display={"flex"}
          width={"80%"}
          paddingTop={"2"}
          paddingBottom={"2"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} gap={"3"} alignItems={"center"}>
            <Avatar name={user.name} src={user.user_image} size={"lg"} />
            <Text fontSize="lg">Bem vindo, {user.name} !</Text>
          </Box>
          <Box display={"flex"} gap={"3"}>
            <InputGroup size={"md"}>
              <Input placeholder="Pesquise seu contato" />
              <InputRightElement width={"4rem"}>
                <Button
                  as={IconButton}
                  icon={<FaSearch />}
                  variant={"ghost"}
                  bg={"transparent"}
                  color={"brand"}
                  _hover={{ bg: "transparent", color: "green" }}
                ></Button>
              </InputRightElement>
            </InputGroup>
            <ModalAddMusic />
          </Box>
        </Box>
        <SimpleGrid
          width={"80%"}
          spacing={5}
          templateColumns="repeat(4, 12rem)"
        >
          {contacts &&
            contacts.map((contact) => {
              return (
                <Card width="max-content" id={contact.id} key={contact.id}>
                  <CardHeader display={"flex"} alignItems={"center"} gap={"2"}>
                    <Avatar
                      name={contact.contact_name}
                      src={contact.contact_image}
                    />
                    <Text fontSize={"sm"}>{contact.contact_name}</Text>
                  </CardHeader>
                  <CardBody display={"flex"} flexDirection={"column"} gap={2}>
                    <Box display={"flex"} gap={"0.5"}>
                      <Text fontSize={"sm"} fontWeight={"semibold"}>
                        E-mail:
                      </Text>
                      <Text fontSize={"xs"}> {contact.email}</Text>
                    </Box>
                    <Box display={"flex"} gap={"0.5"}>
                      <Text fontSize={"sm"} fontWeight={"semibold"}>
                        {" "}
                        Telefone:
                      </Text>
                      <Text fontSize={"xs"}> {contact.phones_number}</Text>
                    </Box>
                  </CardBody>
                  <CardFooter>
                    <Button
                      variant={"outline"}
                      color={"brand"}
                      outline={"brand"}
                    >
                      Editar
                    </Button>
                    <Button
                      variant={"ghost"}
                      fontWeight={"light"}
                      fontSize={"sm"}
                      onClick={() => deleteContact(contact.id)}
                    >
                      Excluir
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
        </SimpleGrid>
      </Box>
      {/* <Box
        height={10}
        bg={"brand"}
        position={"fixed"}
        bottom={0}
        left={0}
      ></Box> */}
    </>
  );
};
