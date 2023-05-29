import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";

import { Link as LinkDom } from "react-router-dom";

import logoLogin from "../../assets/logoLogin.png";

export const Register = () => {
  return (
    <Box
      display={"flex"}
      width="100%"
      height="100vh"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        width="50rem"
        height="max-content"
        // margin="0 auto"
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box width={"20rem"}>
          <Text
            fontSize={"lg"}
            color={"grey300"}
            fontWeight={"semibold"}
            mb={"4"}
            fontFamily={"body"}
          >
            Cadastro
          </Text>
          <FormControl display={"flex"} flexDirection={"column"}>
            <FormLabel fontWeight={"normal"} color={"grey300"}>
              Nome
            </FormLabel>
            <Input variant={"outline"} placeholder="Nome completo" mb={"2"} />
            <FormLabel fontWeight={"normal"} color={"grey300"}>
              E-mail
            </FormLabel>
            <Input
              variant={"outline"}
              type="email"
              placeholder="email@email.com"
              mb={"2"}
            />
            <FormLabel fontWeight={"normal"} color={"grey300"}>
              Telefone
            </FormLabel>
            <Input
              variant={"outline"}
              type={"tel"}
              placeholder="xx - xxxxx - xxxx"
              mb={"2"}
            />
            <FormLabel fontWeight={"normal"} color={"grey300"}>
              Imagem
            </FormLabel>
            <Input
              variant={"outline"}
              placeholder="Link para seu avatar"
              mb={"2"}
            />
            <FormLabel fontWeight={"normal"} color={"grey300"}>
              Senha
            </FormLabel>
            <Input
              variant={"outline"}
              type="password"
              placeholder="Digite sua senha"
              mb={"3"}
            />
            <FormLabel fontWeight={"normal"} color={"grey300"}>
              Repetir senha
            </FormLabel>
            <Input
              variant={"outline"}
              type="password"
              placeholder="Digite sua senha"
              mb={"3"}
            />
            <Button
              _hover={{ bg: "green" }}
              type="submit"
              color={"offwhite"}
              bg={"brand"}
              size={"md"}
            >
              Cadastrar
            </Button>
            <Text
              mt={"4"}
              textAlign={"center"}
              fontWeight={"light"}
              color={"grey200"}
              mb={"3"}
            >
              Já é cadastrado?{" "}
              <Link
                as={LinkDom}
                to={"/login"}
                color={"brand"}
                fontWeight={"semibold"}
              >
                Faça login agora!
              </Link>
            </Text>
          </FormControl>
        </Box>
        <Image src={logoLogin} w={"17rem"} h={"16rem"} />
      </Box>
    </Box>
  );
};
