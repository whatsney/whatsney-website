# whatsney

Personal website and portfolio for Tomasz Łacny, published under the **whatsney** brand.

The site presents selected software work, including:

- AudioBridge, a local-first system that streams Windows audio to iPhone, iPad,
  and compatible Apple silicon Macs,
- software architecture and cloud work for [WENN](https://www.wenn.no/),
- an audit-driven, serverless
  [Comarch e-Sklep to BaseLinker integration](https://github.com/whatsney/comarch-baselinker-sync)
  built after the configured native connection did not fully handle variants,
  stock, relationships, and repeatable updates.

The Comarch to BaseLinker system is designed to operate at zero monthly cost at
its current workload by using renewing AWS Free Tier allowances where available
and a budget guard for services that remain pay-as-you-go.

AudioBridge supports QR and manual pairing, multiple simultaneous receivers,
lock-screen playback, automatic playback-buffer recovery, and English, Polish,
and Spanish interfaces. Its Windows and Apple store releases are in preparation.

Public store-facing pages:

- `/audiobridge/` - product and marketing page
- `/audiobridge/support/` - required App Store support page
- `/audiobridge/privacy/` - required privacy policy

## Local preview

Open `index.html` in a browser or serve this directory with any static HTTP server.

## Contact

[support@whatsney.com](mailto:support@whatsney.com)
