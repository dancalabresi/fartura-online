/*
  # Create categories and businesses tables

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, unique) - Category name (e.g., "Táxi", "Farmácias")
      - `icon` (text) - Icon identifier
      - `slug` (text, unique) - URL-friendly version of name
      - `created_at` (timestamptz)
    
    - `businesses`
      - `id` (uuid, primary key)
      - `name` (text) - Business name
      - `category_id` (uuid, foreign key to categories)
      - `address` (text) - Full address
      - `phone` (text) - Contact phone
      - `whatsapp` (text, optional) - WhatsApp number
      - `description` (text, optional) - Business description
      - `is_featured` (boolean) - Featured/sponsored business
      - `is_active` (boolean) - Active status
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Allow public read access for active businesses
    - Only authenticated users can manage businesses
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  icon text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create businesses table
CREATE TABLE IF NOT EXISTS businesses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  address text NOT NULL,
  phone text NOT NULL,
  whatsapp text,
  description text,
  is_featured boolean DEFAULT false,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;

-- Policies for categories
CREATE POLICY "Anyone can view categories"
  ON categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can insert categories"
  ON categories
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update categories"
  ON categories
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete categories"
  ON categories
  FOR DELETE
  TO authenticated
  USING (true);

-- Policies for businesses
CREATE POLICY "Anyone can view active businesses"
  ON businesses
  FOR SELECT
  TO public
  USING (is_active = true);

CREATE POLICY "Authenticated users can view all businesses"
  ON businesses
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert businesses"
  ON businesses
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update businesses"
  ON businesses
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete businesses"
  ON businesses
  FOR DELETE
  TO authenticated
  USING (true);

-- Insert default categories only if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM categories WHERE slug = 'taxi') THEN
    INSERT INTO categories (name, icon, slug) VALUES
      ('Táxi', 'Car', 'taxi'),
      ('Farmácias', 'Pill', 'farmacias'),
      ('Mercados', 'ShoppingCart', 'mercados'),
      ('Quitandas', 'Apple', 'quitandas'),
      ('Lanchonetes', 'Coffee', 'lanchonetes'),
      ('Restaurantes', 'Utensils', 'restaurantes'),
      ('Emergência', 'PhoneCall', 'emergencia'),
      ('Serviços', 'Wrench', 'servicos');
  END IF;
END $$;
