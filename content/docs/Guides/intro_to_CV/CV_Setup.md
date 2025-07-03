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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHS6Y4PF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIHrwA4HZGX8saKsgSlKOcCbl8QpLLYCzkrazMGvHYW9IAiEA1IE5ISJqERGAnuuaoElSoGP8Z09rQmXdK0N%2Blzqqo04q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDF3G9DBznrhVek3%2BdCrcAwF2WR6USbKcrPUlYpPrw8L%2Ff8nqSoeTMynmAM3hIkVf1OTEqagXi7bo8UkH%2FbJl7AxbbS8wD%2FaAI2%2FFShJgYg2WC1vSgL9OWhRb3bvenY2EDepqKKc7Q7pEJDafRRPM92q05gMGXn2oQz5dwbLA7rjL32Bc4lWJxZ%2BvjDprcxJFWNdJiYAd6ZbMhb1y%2F2JIHws7CVldAEsob1AaDntlU9hY%2F6gNJOoiQA54sE%2B8WHUxO4w6zb2yKH8b6%2BxRGGH4liZHL%2FgFLJJp0QVd1KNQuHYRtd6BSqj66twkBqUNVz%2FSPoOs13x1zxJTetMC1qyhOs2Gjf0ANXWvOPWX92cy0jobfldukp6fvvRv2qqgaouLXrXzLJOGHCF5KxSrfKR2YoQwi5Y61zHUkJXly7UwLTMfT62szJ8Wv%2BYOzkRl1K%2BkyriY6DqJ7ONRayyXYffyZKzars%2FD6CFgcm%2FqPyaQY75VqWrfyT3M7%2Fh3BX%2F%2BG2jI826UkUtvu57CBuZX0WGeyUBv13uSOfh0WfrpI%2Bp9Tl0SYoZ7JKjIPfcDO9%2BHmNZfhKBoC6nbgPZivLlQrnYTJWsHX9Bzf7SwPK1u8gEpCuwguhqQgZH4ms5ASPbHcgZMvFRfttdtxB2Rv2atMMDimcMGOqUBLV4F1qqjCOA7%2BMx6lSLMLeL8KD646PqYGgn3IBzRHXIWyB38zYl6BYmUQaljJyn%2BzqAMA7S%2BMXuM429EZGDzzahZ2MmYZcsSuqiFqNcvJQeew5CX0M2YIMU3MOb2VrlIXOSsr79ealuZr9FZ15EDC5vEoBlXnZPMWWgi4trds9uXxXGQZyt2ARLpMxJUpn1MFTKrV8Uvlk0Doe69qHxMm3t1pJDd&X-Amz-Signature=afea80860f07b3dd328d2f2c0a77d3ff948ca9d9815f29097e275515c5dcc38e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LWJXRFH%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T121643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCW6AZe%2BSjPECEq7wD4uxfqIF5MJn8a61Flzeh6XBTYfQIgeGP6UkUw74%2BwOc22q%2BBF4zMMus%2BZp7THDMMpM%2BJM4mYq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDCdpYPmLdwGFRNfHnircA2kF5MddnY9dzWVTk%2B%2BKotaPnYStAlg5mI8%2BZIhRNxc9e59SAbgQI0TT79H14OZbF%2FH%2FQGRfmffpubdUmoDzQKRImAlrHTO4Ldk7sYrriNTbI8qb4wTvqL2LQf9kceDvbohN%2BXFt8UOLOUlOV6HpsT%2BEqXELdpn5UmwEWoWhPNyandAdnEcPmx%2B%2B8Qb%2BOz2%2FmJDbDfN4RcZrZYqF%2FHX7m0DgCVYPYZZJcSd%2BC%2BKbDgPs7sDF1YrmwsRBsZeNsN6yP6h8qZzvIK5jJZXfzaOrGZCO%2FpECU1vQF9tVnhOhBDjadhfgO9Qxy9SV9EXtoQ6KpPxvVwno%2BuLmnN%2BTGShflbWWjxmJmLeJ1VHPkw2dJUHDJPfcH9oPHd1ST3G94bi5%2B3OkIztI3ul%2FzdaftyFqYrME%2Fc%2BELM%2BEk04q7ySk%2FjxC4f9fOmcf7yfXOSTOvXQPDJY7jLelOtC7VS%2FCUn6npZToP%2FO2%2FXxycIBOW%2BG5qpAhrecf0TcqTpOLtT1QDQ22R2yBt9sHttvyKmFhv3FcuUazm1XkHV065B3GN%2Fyjw6ZKX8M73B1mjCnvn3DdySBh4yxj5%2FxeUNAj2E3M3PfMO6Fgu7C2KagRB5rnRtvm3RGYTRE6JHpMfWjL2%2FitMOjhmcMGOqUBA6KnDtYPp7stScFXUSvXYmDxD0VgZCQ9%2FUFRDA5Odf%2BoAjehWTAB%2FiumC6tyiUAiTczP3yYAqJjr8c4PErpS22GAcLzVyC%2Bwdg%2Bg1dFVo5kQuf7Egb%2FhS8zEprxL2gXMdbD17WeIG8urdbtX6p%2F7dgcYQDKaglzFyh3fmeO31W2jqfZWGFOilnaJi3UvRR071o%2B2XCZ4DU18OW6Fm7pNM1D59OV9&X-Amz-Signature=f58ce7a5cc040431d3c08c91f8f1aa878a8c099dd18c11ec29f79b2b4520aa8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
