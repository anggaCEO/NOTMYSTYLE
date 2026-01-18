
import { StylistRecommendation } from "../types";
import { PRODUCTS } from "../constants";

/**
 * Mocking the Stylist service to allow for static deployment on GitHub Pages
 * without exposing API keys or requiring a backend.
 */
export const getStyleAdvice = async (userInput: string): Promise<StylistRecommendation> => {
  // Simulate network delay for "AI" feel
  await new Promise(resolve => setTimeout(resolve, 1200));

  const input = userInput.toLowerCase();
  
  // Deterministic local logic to provide style advice
  if (input.includes('rave') || input.includes('night') || input.includes('party')) {
    return {
      styleAdvice: "For the night-crawlers and beat-seekers. Go dark, go heavy. Contrast the neon with our deep charcoal shades. Layering is your weapon.",
      suggestedProducts: ["Midnight Rebellion", "Void Concept", "Paradox Oversized Tee"]
    };
  }

  if (input.includes('date') || input.includes('dinner') || input.includes('minimal')) {
    return {
      styleAdvice: "Keep it low-key but high-impact. Clean lines and a perfect silhouette speak louder than graphics. Silence is the ultimate luxury.",
      suggestedProducts: ["Ghost Protocol White", "Ego Death Black"]
    };
  }

  if (input.includes('casual') || input.includes('daily') || input.includes('street')) {
    return {
      styleAdvice: "The daily uniform for the unconventional. Oversized fits that allow movement and mystery. Not just clothes, but a second skin for the city.",
      suggestedProducts: ["Paradox Oversized Tee", "Anti-Social Graphic", "Ego Death Black"]
    };
  }

  // Default response
  return {
    styleAdvice: "The brand is called 'not my style' for a reason. Mix what they say you shouldn't. Boxy fits with minimal accents. Stay unpredictable.",
    suggestedProducts: ["Void Concept", "Midnight Rebellion", "Ghost Protocol White"]
  };
};
