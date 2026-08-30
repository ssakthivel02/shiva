# Shiva Hi-Tech Website — Repository Bootstrap

Target repository: `ssakthivel02/shiva`
Target production domain: `shiva.omsaravanabhava.org`

## Important separation rule

- Existing `ssakthivel02/DivyaNexus` remains untouched and continues as DivyaNexus.
- Shiva is a separate new hi-tech website/product.
- The current DivyaNexus `main` branch is the donor/reference source only.
- Do not repoint the existing DivyaNexus Pages domain or change its CNAME.
- Do not merge the previously cancelled DivyaNexus→Shiva migration branch/PR.

## Immediate repository creation

Create a NEW GitHub repository:

- Name: `shiva`
- Visibility: Public
- README: optional (this package already contains one)
- .gitignore/license: leave blank initially unless GitHub requires a choice

Then upload the files from the hi-tech Shiva source package/build into the new repository.

## Donor/reference source

Current source/reference repository:
`ssakthivel02/DivyaNexus`
Branch:
`main`

Use this only to selectively reuse validated content/data/components that are appropriate for Shiva.
Do not alter the existing DivyaNexus repository while building Shiva.

## Deployment target

GitHub Pages custom domain:
`shiva.omsaravanabhava.org`

Cloudflare DNS was already prepared separately; do not change the old DivyaNexus DNS record.

## Launch sequence

1. Create `ssakthivel02/shiva` as a separate public repository.
2. Upload/import the Shiva hi-tech source into this repo.
3. Rebrand public identity to Shiva.
4. Set canonical/OG/manifest/sitemap/robots/security/legal links to the Shiva domain.
5. Add CI validation and GitHub Pages deployment.
6. Validate build, routes, assets, PWA/service worker, mobile layouts, accessibility and legal pages.
7. Only after CI is green, set GitHub Pages custom domain to `shiva.omsaravanabhava.org`.
8. Verify HTTPS and production routes.
9. Keep DivyaNexus unchanged throughout.

## Safety constraints

Never copy secrets, tokens, API credentials, private keys, local `.env` values, or generated credentials.
Review asset licences/provenance before publishing copied media.
