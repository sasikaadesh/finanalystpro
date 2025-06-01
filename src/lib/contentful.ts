import { createClient } from 'contentful';

const client = createClient({
  space: 'fjgrf5ffplds',
  accessToken: 'fy997A54vNQ4qxK-QEtRduFElu97qJs3xUvVCCzWCR8',
});

export async function getAboutContent() {
  try {
    const entry = await client.getEntry('5SxhaK73IkH5C2R9yU0T6W');
    return {
      title: entry.fields.aboutTitle as string,
      description: entry.fields.aboutDescription as string,
    };
  } catch (error) {
    console.error('Error fetching about content:', error);
    return null;
  }
} 

export async function getServicesContent() {
  try {
    const entry = await client.getEntry('5eQUNE4mt7yCMaqfh4pRCD');
    return {
      title: entry.fields.servicesTitle as string,
      description: entry.fields.servicesDescription as string,
      t1title: entry.fields.servicesTile1Title as string,
      t1desc: entry.fields.servicesTile1Desc as string,
      t2title: entry.fields.servicesTile2Title as string,
      t2desc: entry.fields.servicesTile2Desc as string,
      t3title: entry.fields.servicesTile3Title as string,
      t3desc: entry.fields.servicesTile3Desc as string,
      t4title: entry.fields.servicesTile4Title as string,
      t4desc: entry.fields.servicesTile4Desc as string
    };
  } catch (error) {
    console.error('Error fetching services content:', error);
    return null;
  }
} 

export async function getIntroduction() {
  try {
    const entry = await client.getEntry('YOUR_INTRODUCTION_ENTRY_ID');
    return {
      title: entry.fields.title as string,
      content: entry.fields.content as string,
    };
  } catch (error) {
    console.error('Error fetching introduction content:', error);
    return null;
  }
} 