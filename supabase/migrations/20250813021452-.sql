-- Secure preorders with RLS without breaking current public form submissions
-- 1) Enable Row Level Security
ALTER TABLE public.preorders ENABLE ROW LEVEL SECURITY;

-- 2) Remove any overly permissive existing policies (idempotent)
DROP POLICY IF EXISTS "allow_public_insert" ON public.preorders;
DROP POLICY IF EXISTS "allow_public_read" ON public.preorders;
DROP POLICY IF EXISTS "allow_public_all" ON public.preorders;

-- 3) Allow only inserts from anon/authenticated (no read/update/delete)
CREATE POLICY "Public can create preorders"
ON public.preorders
FOR INSERT
TO anon, authenticated
WITH CHECK (
  consent = true AND
  length(trim(email)) > 0
);

-- Note:
-- - No SELECT/UPDATE/DELETE policies are defined, so those operations are blocked by default.
-- - Service role bypasses RLS for admin/reporting use.
