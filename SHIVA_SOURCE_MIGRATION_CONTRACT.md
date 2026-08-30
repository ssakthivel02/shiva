# Shiva Source Migration Contract

## Source
Reference/donor: `ssakthivel02/DivyaNexus` `main`.

## Destination
Independent repository: `ssakthivel02/shiva`.
Production domain: `shiva.omsaravanabhava.org`.

## Non-negotiable boundary
The existing DivyaNexus repository, Pages configuration, DNS and production website remain unchanged.

## Baseline handling
The current donor GitHub source may be copied into the Shiva migration branch. Owner-supplied V43.52 RC metadata is retained as release evidence, but the exact RC archive is not treated as verified until its bytes are available and SHA-256 matches `07661c20db26e976bd5e8ad9f70f6bf1ddee43ad9a5e8daed1948f2d8f2b5aa5`.

## Publication gates
Owner questionnaire, rights release, policy placeholders and editorial approvals remain explicit gates. Tamil human-review cannot be claimed until completed. Staging records must not be silently promoted to canonical.

## Required technical gates
TypeScript/build/test checks, route and browser smoke tests, PWA/service-worker checks where applicable, accessibility, public identity/canonical metadata, legal/support pages, GitHub Pages deployment, HTTPS and live-domain verification.
