import { Stack, StackProps } from "@chakra-ui/react";
import { Header } from "./Header";

import { useRouter } from "next/router";

export const Layout = ({ children, ...props }: StackProps) => {
  const router = useRouter();
  return (
    <>
      <Stack
        pt="1rem"
        px={["2rem", "2rem", "3rem", "5rem"]}
        {...props}
      >
        <Header />
        {children}
      </Stack>

    </>
  );
};
