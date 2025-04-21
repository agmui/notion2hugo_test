---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2024-11-03T22:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2024-11-03T22:06:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 161
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

[embed](https://www.rose-hulman.edu/class/csse/csse132/2425a/labs/prelab1-wsl2.html)

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WYKIUA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIE5nmucgct7QcfxundPROpOB2z9xyxwux%2FSdn0v4EkKiAiAO26hQZSZoPlAsL9MaQgOzqNS6xoF8G1wvKXzwmeeLESqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQBAfWC72Uy%2FEvic0KtwDhP5r0RdYagB6Rk%2FKgHmpwTTdtUbZ1XErgZsNI9DfSrzxqGGMWQemy8IeFETIO%2FC89gj5g%2BFO2cx63rBon1Uo1V0tSnUTke6HcXHCiFqw6lhJYSmTE2XoDbMxPRETGv9VNexE3JiA73cUxNZ2t0pp0cqMgomoOmoWvII82LqgTarxzjiJO3pLYgfizXknFwrBajXTY%2BkWreBPaEOfEBieTfSqF%2B9%2FgcOpVzSy6CwCzUvUJPXTjz%2BqU1xrgN4U85J14TyR1C4lTYryT6a6elkM0HeoyFZ1TvuNmIbfA2dNIIrvS5DR9%2Bs6HPc0XqVz2n4d1HBJbOg0%2BVtBbWi7RknFB4De7uhsDnV%2BxUcVQxQZK%2BV%2B%2FPM%2Fc49K3HQXaak4hBwyrV8Uv3Ozrj%2FjmR7qbmZ%2F8O4dUuHAwB1mdtnQtWaxv1QZXKVqf6FOE3KS6XoBc%2BvJ7O6DPUayY5yW%2BL%2BoHdObDfaGDAFtbzVe%2BT%2B6Scn0WSMa%2F7Q6GBpThfWmPTXuhFgUXldWm%2BSRo6abHLvS972PgpRrF6sgyHqLq7mXhcJ3rolnyqkDR0S2IuPHCGLJ8qA2ErhpzFogonGc8t3hDJcBv6VOzgnxX3xQxUHmHd1TYYS4P3FNwIEek60Azk4w64aZwAY6pgHGFMmyTfm5hUAhP%2FA7X1mbs0ra2%2B7Wo7dZQbmAM2a3%2Bvy%2FcPcolQTl%2BBEEQKiIsKtfamCNkmC9mDd6rfCcBwMW1r2PVNcH7u0A5Lp%2B9WpRg7xtE7E0bpU0PDwri2JMVyNEJA50O3iWQCqZJYd1UNzym9Aiqw5UzqVGWRdWPF2VdoUt3OYoW55str8txsPrBojCFFHVb5zakPprwGYrCGTTUTag6Hwq&X-Amz-Signature=e7e92aa762ba3fa89956b2dc1f1a1d771e1b868b4341cb818f2b12421e41cbd2&X-Amz-SignedHeaders=host&x-id=GetObject)
- Get people
- 

# Cloning the repo

[link_preview](https://github.com/Thornbots/CV/)

```bash
git clone https://github.com/Thornbots/CV.git
```

## install python

```bash
sudo apt install python3.10
```

## installing `requirements.txt` packages

```bash
cd CV
python3 -m venv .venv
pip install -r requirements.txt
source ./.venv/bin/activate
```

### Open the repository in VSCode

```bash
code .
```

## dataset labeling  

**TODO:**

# Running model

**TODO:**

# Congrats! You did it!

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42SPN5Y%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIBzIkj7qeTyWrd9sEiU6De6DqQ4M2XlBxv1uEQWlGkFxAiEAw95CpgMf9gQHLThHS1UGIsLTDSs0G5Qqj%2F4cHfrFoxAqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZl893FFjCmeR6hECrcAyN9CfEHjauG3aOBd7h%2Be8wntZI6ODIzTT3WWP586KAwltBCF%2FV%2Fx6xaYE2Uh5KSz8Csp1Eu%2BNNr0R5xKg%2ByN1QjijLJbIi2zqgYUb6AdZ6iUSwFgCHApblD01jnDZ0RXyDwzrXvnFXhFez9jJsaOFWpP8n1Hz%2BJJirEgx9gdILFUUH8jyd%2FS49yuOTvkBHcX5SW%2BoaeQwcFXCIvkZ0O6gFfWaksDO92rnJaRCo8G5aHXOWpv6iOi8FqNwtjw6nnd81dLqSZV%2FWlRufps%2BcBumnsjHiKv3mU%2FpnK8b3S4p6V2oXX7%2FmZ3RTcqt0WtqcSJoPnVBpmIb9SPzWuz%2FIg00n%2FXs9xncgZ5ikEW3f1C0V0BJQazi%2BL2eE0F4LtpgFZH0VdiSuRmygULqoc%2BIP8dZt%2Bp7lUBGw0GhGAMldUGrvENi5bUKpHSzp4ED2K%2FjRW%2Ba0lnv%2Fp8ybnZaVFqCfDfGp5GYfUK6seJpKXKZN34gC9zxZLiDe5jJIkg7PHQud9uQ8TyRMn1XCGo8Wg7Qu7JwamuPDfKy2h3DGbg6TbhK8uqZfFEb8yQlS%2FIxr0yJAM7qK06h9lEp694WMOn94%2BWrzK06ClrpqpB2th5vG33MPqCOrcF186GUE7bv8NMPeGmcAGOqUBmmNnKwv4CuVafEE4Q5RbUUhjzbIcFatYRp%2F0%2F3nJh7je3d2Lsf59vwauEScKNFzRUZtoixeWmZF0E%2BJKkHjzwpnnB%2FC%2BSaThUwbXjknpwgIjfqKRrQysui380EBa41qqUpyP8sJ%2F146tWAdP6NLomlZA2eWY%2FftJRIbbNXvKs3V8k6FqQJTjRC2SkNxTQoNrpcwJUdDLjU1Dx7mDCuAtwkiZ%2BXQQ&X-Amz-Signature=96b47a713d4c53c24ed9a7109a268876aefb0e5e1c67d3e2a85d09f9b944981b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
