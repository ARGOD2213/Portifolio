# Chintala Mahindra — Portfolio

High-end dark engineering portfolio for a Java backend engineer focused on Spring Boot, microservices and practical AI application integration.

## Stack

- Next.js + TypeScript
- Tailwind CSS
- Framer Motion
- Spring Boot / Java / AI application architecture content
- Vercel-ready

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Contact configuration

Personal and project data is centralized in `lib/site.ts`.

Update only the values you actually want public:
- email
- phone
- LinkedIn
- availability wording
- response time
- resume path
- project links

The portfolio intentionally leaves GitHub/live project links empty when none were supplied.

### Formspree

The contact form uses the configured Formspree ID in `lib/site.ts`.

For a deployment that should use an environment value instead, set:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

The current portfolio is configured with the supplied Formspree endpoint ID.

### Optional canonical URL

Set:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

If omitted, canonical metadata is not asserted.

## Resume

The downloadable PDF is at:

`public/Chintala_Mahindra_Resume.pdf`

## Editing the portfolio

Main content: `components/Portfolio.tsx`

Contact behavior: `components/Contact.tsx`

Single source of personal/project data: `lib/site.ts`

Global visual system: `app/globals.css`

## Deployment

Push to GitHub and import the repository into Vercel. Add `NEXT_PUBLIC_SITE_URL` if a canonical production URL is available.

## Important content rule

The portfolio separates factual current/past work from the new **Enterprise AI Engineering Control Plane**, which is explicitly marked **Building / Architecture concept / upcoming build**. It should not be presented as production experience until it is actually built.
