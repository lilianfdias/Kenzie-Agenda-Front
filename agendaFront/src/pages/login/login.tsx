import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";

import { Link as LinkDom } from "react-router-dom";

import logoLogin from "../../assets/logoLogin.png";
import { useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  const { signIn } = useAuth();

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
          <form onSubmit={handleSubmit(signIn)}>
            <FormControl
              display={"flex"}
              flexDirection={"column"}
              //   onSubmit={handleSubmit(signIn)}
            >
              <FormLabel fontWeight={"normal"} color={"grey300"}>
                E-mail
              </FormLabel>
              <Input
                variant={"outline"}
                type="email"
                placeholder="email@email.com"
                mb={"2"}
                id="email"
                {...register("email")}
              />
              <FormLabel fontWeight={"normal"} color={"grey300"}>
                Senha
              </FormLabel>
              <Input
                variant={"outline"}
                type="password"
                placeholder="Digite sua senha"
                mb={"3"}
                id="password"
                {...register("password")}
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
                Ainda não é cadastrado?{" "}
                <Link
                  as={LinkDom}
                  to={"/register"}
                  color={"brand"}
                  fontWeight={"semibold"}
                >
                  Cadastre-se!
                </Link>
              </Text>
            </FormControl>
          </form>
        </Box>
        <Image src={logoLogin} w={"17rem"} h={"16rem"} />
      </Box>
    </Box>
  );
};
