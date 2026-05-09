# Netlify setup for grab2win.com

This repo is prepared as a static Netlify site. The site assets can keep changing without changing the hosting setup.

## Netlify account

- Netlify login: use the Google account for `dale@cgcowboy.com`.
- Repository: connect the GitHub repo that contains this project.
- Site name: use `grab2win` if available. If Netlify requires a different temporary name, the custom domain will still be `grab2win.com`.

## Build settings

Use these settings when importing the GitHub repo into Netlify:

- Build command: leave blank
- Publish directory: `.`
- Functions directory: leave blank
- Base directory: leave blank

The committed `netlify.toml` already sets `publish = "."`, security headers, conservative cache headers, and a single-page fallback rewrite.

## Domain plan

There are two practical options:

1. Keep DNS at the current domain registrar and point records to Netlify.
2. Move DNS hosting to Netlify by changing nameservers at the registrar to the Netlify nameservers.

For the first launch, keeping DNS at the current registrar is the lower-risk path because it avoids moving every DNS record for the domain.

## Netlify domain steps

After the site is imported and the first deploy succeeds:

1. Open the site in Netlify.
2. Go to **Domain management**.
3. Add `grab2win.com` as a custom domain.
4. Also confirm `www.grab2win.com` is attached to the same site.
5. Set the primary domain based on the desired public URL:
   - Use `grab2win.com` if the root domain should be primary.
   - Use `www.grab2win.com` if you want Netlify's recommended external-DNS setup.
6. Wait to provision HTTPS until the DNS records below resolve correctly.

## Registrar DNS records

If DNS stays at the current registrar, add or update these records after Netlify gives you the exact target site name:

| Type | Name | Value | Notes |
| --- | --- | --- | --- |
| A | `@` | `75.2.60.5` | Netlify fallback apex record for `grab2win.com`. |
| CNAME | `www` | `{netlify-site-name}.netlify.app` | Replace with the real Netlify subdomain. |

Before saving, remove or replace any conflicting parking, forwarding, or website-builder records for `@` and `www`.

DNS can take several hours to propagate. Netlify may show pending DNS verification until propagation completes.

## Post-DNS checks

Run these after DNS has had time to propagate:

```powershell
nslookup grab2win.com
nslookup www.grab2win.com
```

Expected result:

- `grab2win.com` resolves to Netlify's apex load balancer.
- `www.grab2win.com` resolves to the Netlify site subdomain.
- Netlify shows HTTPS enabled for both domains.

## Later production hardening

Once asset filenames are final or fingerprinted, the `/assets/*` cache header can be increased from one hour to a long immutable cache. Keep it conservative while images and other static assets are still being revised.
