import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Text,
} from "@chakra-ui/react";

import logoLogin from "../../assets/logoLogin.png";

export const Login = () => {
  return (
    <>
      <Box
        width="50rem"
        height="29rem"
        margin="0 auto"
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
            Login
          </Text>
          <FormControl display={"flex"} flexDirection={"column"}>
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
              Senha
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
              Logar
            </Button>
            <Text
              mt={"4"}
              textAlign={"center"}
              fontWeight={"light"}
              color={"grey200"}
              mb={"3"}
            >
              Ainda não é cadastrado? Não perca mais tempo!
            </Text>
            {/* <Button as={"link"} href="/register">
              Cadastrar
            </Button> */}
          </FormControl>
        </Box>
        <Image src={logoLogin} w={"17rem"} h={"16rem"} />
      </Box>
    </>
  );
};
