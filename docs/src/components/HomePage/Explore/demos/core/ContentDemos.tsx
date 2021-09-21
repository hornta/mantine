import React from 'react';
import { ChatBubbleIcon, ImageIcon, GearIcon } from '@modulz/radix-icons';
import { useMantineTheme, Text, Tabs, Tab } from '@mantine/core';
import { usage as CardDemo } from '@mantine/core/src/components/Card/demos/usage';
import { AccordionDemo } from '@mantine/core/src/components/Accordion/demos/label';

export function ContentDemos() {
  const theme = useMantineTheme();
  const CardComponent = CardDemo.component;

  return (
    <>
      <div>
        <Text size="lg" style={{ marginBottom: 15 }}>
          Accordion component
        </Text>
        <AccordionDemo />
      </div>

      <div style={{ marginTop: 30 }}>
        <Text size="lg" style={{ marginBottom: 5 }}>
          Tabs component
        </Text>

        <Tabs grow>
          <Tab label="Messages" icon={<ChatBubbleIcon />} />
          <Tab label="Gallery" icon={<ImageIcon />} />
          <Tab label="Settings" icon={<GearIcon />} />
        </Tabs>

        <Tabs grow variant="outline" style={{ marginTop: 30 }}>
          <Tab label="Messages" icon={<ChatBubbleIcon />} />
          <Tab label="Gallery" icon={<ImageIcon />} />
          <Tab label="Settings" icon={<GearIcon />} />
        </Tabs>
      </div>

      <Text size="lg" style={{ marginBottom: 15, marginTop: 30 }}>
        Card component
      </Text>
      <div
        style={{
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        }}
      >
        <div
          style={{
            maxWidth: 320,
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: 30,
            paddingBottom: 30,
          }}
        >
          <CardComponent />
        </div>
      </div>
    </>
  );
}
