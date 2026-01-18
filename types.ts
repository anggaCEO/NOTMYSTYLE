
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'Oversized' | 'Graphic' | 'Basic' | 'Limited';
  description: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface StylistRecommendation {
  styleAdvice: string;
  suggestedProducts: string[];
}
