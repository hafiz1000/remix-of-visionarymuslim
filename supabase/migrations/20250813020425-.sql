-- Security hardening for preorder submissions
-- 1) Add metadata columns for auditing and rate limiting
ALTER TABLE public.preorders
  ADD COLUMN IF NOT EXISTS consent_at TIMESTAMPTZ,
  ADD COLUMN IF NOT EXISTS ua TEXT,
  ADD COLUMN IF NOT EXISTS ip_hash TEXT;

-- 2) Index to support rate limiting by IP hash and time
CREATE INDEX IF NOT EXISTS idx_preorders_ip_hash_created_at
  ON public.preorders (ip_hash, created_at DESC);

-- 3) Backfill consent_at using created_at for existing consents
UPDATE public.preorders
SET consent_at = created_at
WHERE consent = true AND consent_at IS NULL;

-- 4) Tighten RLS: remove public insert policy to force server-side insertion via Edge Function
DROP POLICY IF EXISTS "allow_public_insert" ON public.preorders;