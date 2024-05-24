import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://docxafphvbhqjcegvgfi.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvY3hhZnBodmJocWpjZWd2Z2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzMTU2OTcsImV4cCI6MjAzMTg5MTY5N30.LJjwj-AWTSPLmWidEsH46SBEczog5wL-Saru55jhpr0';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
