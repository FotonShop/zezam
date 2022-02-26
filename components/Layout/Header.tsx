import React, { useState } from "react";
import { Flex, Image, Link, Text, Heading, LinkProps } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Head from "next/head";
import { ReactElement } from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MyComponent(): ReactElement {
  return <FontAwesomeIcon icon={faCoffee} />;
}

const MenuLink = ({ children, href, ...props }: LinkProps) => {
  return (
    <Link
      fontSize="md"
      textDecoration="none"
      textTransform="uppercase"
      href={href}
      _active={{ textDecoration: "none" }}
      _hover={{ textDecoration: "none" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export const Header = () => {
  const router = useRouter();

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      gridGap={64}
      wrap={"wrap"}
    >
      <Flex
        gridGap={2}
        alignItems="center"
        cursor="pointer"
        onClick={() => router.push("/")}
      >
        <Image
          alt="logo"
          src="/logo.jpg"
          rounded="full"
          h="3rem"
          mr={"1rem"}
          borderRadius={"10rem"}
        />
        <Heading
          as="p"
          fontSize="1.5rem"
          fontWeight="700"
          fontFamily="'Be Vietnam Pro', cursive"
          color="#2c2c2c"
        >
          Zezam Open
        </Heading>
      </Flex>
      <Flex gridGap={64}>
        <MenuLink
          borderBottom={router.pathname === "/" ? "2px solid #2c2c2c" : "none"}
          fontWeight={router.pathname === "/" ? "regular" : "normal"}
          href="/"
          color="#2c2c2c"
        >
          Home
        </MenuLink>
        <MenuLink
          borderBottom={
            router.pathname === "/how-to" ? "2px solid #2c2c2c" : "none"
          }
          fontWeight={router.pathname === "/how-to" ? "regular" : "normal"}
          href="/how-to"
          color="#2c2c2c"
        >
          How to
        </MenuLink>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="space-between"
        direction={"row"}
        columnGap={"1.6rem"}
      >
        <a
          href="https://discord.com/invite/krRgtbu8AH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "discord"]} size="2x" />
        </a>

        <a
          href="https://twitter.com/ZezamOpen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
        </a>

        <WalletMultiButton
          style={{
            boxShadow: "none",
            fontWeight: 500,
            fontFamily: '"Be Vietnam Pro"',
            fontSize: "0.75rem",
          }}
        ></WalletMultiButton>
      </Flex>
      {/* <Connect /> */}
    </Flex>
  );
};
