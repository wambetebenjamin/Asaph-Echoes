# Asaph Echoes

A pan-African home for oral storytelling, griot traditions and new audio narratives, where every tongue can be heard.

## Local development

Use Node 24, then install dependencies and start the site:

```sh
nvm use
npm ci
cp .env.example .env.local
npm run dev
```

The site runs on port 3000. `NEXT_PUBLIC_WHATSAPP_NUMBER` sets the WhatsApp destination. The remaining environment variables document planned integrations and are not currently used.

## Deployment and limitations

Deploy to Vercel with Node 24. `vercel.json` specifies the Paris region and security headers. The source template is a static Bootstrap 4 site, not a Next.js app. Its original compiled CSS and icon font are preserved in `public`, while application layouts are adapted to Next.js.

This is not yet production-ready. There is no content submission backend, authentication, saved stories, audio catalogue, reCAPTCHA, or full translation of page content. WhatsApp is an explicit external contact path, not a submission or moderation system. Do not send private or restricted recordings without first agreeing on a safe process. Images are illustrative, not portraits of featured contributors. Stories and series are not presented as available recordings until properly licensed material exists.

NextAuth is pinned to `5.0.0-beta.32`, a patched version compatible with Next 16. Authentication is not yet enabled and requires configuration and a security review before launch.

## Cultural respect

Asaph Echoes is independent. Traditional custodians and contributors retain their rights. Seek consent and appropriate community guidance before sharing any story, especially sacred or restricted material. The site is not an academic archive or government body.
