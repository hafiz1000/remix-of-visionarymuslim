-- Create extension for UUIDs if not already present
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Create the preorders table (idempotent)
CREATE TABLE IF NOT EXISTS public.preorders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  name TEXT,
  source TEXT,
  consent BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Ensure case-insensitive uniqueness for email
CREATE UNIQUE INDEX IF NOT EXISTS preorders_email_unique_lower
ON public.preorders ((lower(email)));

-- Enable Row Level Security
ALTER TABLE public.preorders ENABLE ROW LEVEL SECURITY;

-- Allow anyone (including anon) to INSERT new preorders via the public anon key
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'preorders' AND policyname = 'Allow inserts from anyone'
  ) THEN
    CREATE POLICY "Allow inserts from anyone"
    ON public.preorders
    FOR INSERT
    WITH CHECK (true);
  END IF;
END $$;

-- Do NOT create a SELECT policy so data isn't publicly readable by default