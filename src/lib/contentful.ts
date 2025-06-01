import { createClient, Asset } from 'contentful';

// Initialize Contentful client with space ID and access token
const client = createClient({
  space: 'fjgrf5ffplds',
  accessToken: 'fy997A54vNQ4qxK-QEtRduFElu97qJs3xUvVCCzWCR8',
});

/**
 * Fetches about section content including title, description, and image from Contentful
 * @returns {Promise<{ title: string; description: string; image: string | null } | null>}
 */
export async function getAboutContent() {
  try {
    // Fetch entry with linked assets (depth: 2)
    const entry = await client.getEntry('5SxhaK73IkH5C2R9yU0T6W', {
      include: 2
    });
    
    // Extract and process image URL from asset
    const imageAsset = entry.fields.aboutImage as Asset;
    const imageUrl = imageAsset?.fields?.file?.url ? `https:${imageAsset.fields.file.url}` : null;
    
    return {
      title: entry.fields.aboutTitle as string,
      description: entry.fields.aboutDescription as string,
      image: imageUrl,
    };
  } catch (error) {
    console.error('Error fetching about content:', error);
    return null;
  }
}

/**
 * Fetches services section content including titles and descriptions for all tiles
 * @returns {Promise<{ title: string; description: string; t1title: string; t1desc: string; t2title: string; t2desc: string; t3title: string; t3desc: string; t4title: string; t4desc: string; } | null>}
 */
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