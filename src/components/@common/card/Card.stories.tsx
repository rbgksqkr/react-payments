import React from "react";

import Card from "./index";
import { Meta, StoryObj } from "@storybook/react";
import { BANK_LIST, CARD_ID } from "src/utils/constant";

const card: Meta<typeof Card> = {
  component: Card,
  title: "Card",
  tags: ["autodocs"],
  argTypes: {
    cardName: {
      options: BANK_LIST.map(({ id }) => id),
    },
    cardNumber: {
      control: "object",
    },
    ownerName: {
      control: "text",
    },
    expireDate: {
      control: "text",
    },
  },
};

export default card;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => {
    return <Card {...args} />;
  },

  args: {
    cardName: undefined,
    ownerName: "CLEAN",
    expireDate: ["03", "24"],
    cardNumber: ["0000", "0000", "0000", "0000"],
  },
};

export const BC: Story = {
  render: () => {
    return (
      <Card
        cardName={CARD_ID[0]}
        cardNumber={["1234", "5678", "9101", "1121"]}
        ownerName={"CLEAN"}
        expireDate={["03", "24"]}
      />
    );
  },
};

export const SHINHAN: Story = {
  render: () => {
    return (
      <Card
        cardName={CARD_ID[1]}
        cardNumber={["1234", "5678", "9101", "1121"]}
        ownerName={"CLEAN"}
        expireDate={["03", "24"]}
      />
    );
  },
};
export const KAKAO: Story = {
  render: () => {
    return (
      <Card
        cardName={CARD_ID[2]}
        cardNumber={["1234", "5678", "9101", "1121"]}
        ownerName={"CLEAN"}
        expireDate={["03", "24"]}
      />
    );
  },
};
export const HYUNDAI: Story = {
  render: () => {
    return (
      <Card
        cardName={CARD_ID[3]}
        cardNumber={["1234", "5678", "9101", "1121"]}
        ownerName={"CLEAN"}
        expireDate={["03", "24"]}
      />
    );
  },
};
export const WOORI: Story = {
  render: () => {
    return (
      <Card
        cardName={CARD_ID[4]}
        cardNumber={["1234", "5678", "9101", "1121"]}
        ownerName={"CLEAN"}
        expireDate={["03", "24"]}
      />
    );
  },
};
export const LOTTEE: Story = {
  render: () => {
    return (
      <Card
        cardName={CARD_ID[5]}
        cardNumber={["1234", "5678", "9101", "1121"]}
        ownerName={"CLEAN"}
        expireDate={["03", "24"]}
      />
    );
  },
};
export const HANA: Story = {
  render: () => {
    return (
      <Card
        cardName={CARD_ID[6]}
        cardNumber={["1234", "5678", "9101", "1121"]}
        ownerName={"CLEAN"}
        expireDate={["03", "24"]}
      />
    );
  },
};
export const KOOKMIN: Story = {
  render: () => {
    return (
      <Card
        cardName={CARD_ID[7]}
        cardNumber={["1234", "5678", "9101", "1121"]}
        ownerName={"CLEAN"}
        expireDate={["03", "24"]}
      />
    );
  },
};
