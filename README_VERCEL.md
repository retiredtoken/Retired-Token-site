# RTD Site — Vercel + Namecheap + Zoho Quick Start

## Deploy on Vercel
1. Go to https://vercel.com/new → Continue with GitHub → select your repo → Deploy.
2. In Project → Settings → Domains → Add `www.retiredtoken.com` and `retiredtoken.com`.
3. Vercel shows a CNAME target for `www`. Copy it.

## Configure Namecheap DNS
Open `DNS_TEMPLATE_Namecheap.txt` and add records in Namecheap → Advanced DNS.
Replace placeholders with real values from Vercel and Zoho.

## Email
Use the MX/SPF/DKIM lines in `DNS_TEMPLATE_Namecheap.txt` if needed. Your contact: info@retiredtoken.com