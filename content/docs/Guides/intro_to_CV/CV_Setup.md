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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y4G47XJ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICVR1cGINLSOrhH%2FupaHqjgoL7w5mP%2B8Di2cj1fyAkeCAiAIfQQLpnWwzw4zye9EJVbFRJ3GMsXJMNc3TT0m5IyAjiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiPvCgUUEkMnTjpTqKtwDj3lU0dy9pqbPDK4Yb2m75HZT84pscvBYNGhaxfJR98AQ%2B%2Firio763895iVewEyItieVf15f%2Bw%2Bd6OrOLQf8tVjBk3wbSaCDh753DzFcJtiajY%2FJGpeMTu5%2BEfDSsH60SjI9jZYmvDxBalHjRn50teTikPPqxzfkJHJZD1GmmX3rEiKAKInwrhIawENIUvDN6ha83LgTjnU6UHlfMQfPg3HO13mH%2BgPIRSdrtkm2sCfXNCL%2Fo785eqvZWxWrylL9zgZSIGBX%2BhZDvR4ZCpz5ePz7GxRVx2vjvuwHdwgCsjBBMqtFn9u%2FaMGw3zjO6HbbGQwaFUpbzaLJMqFjM9V1QxWpCVgOklOoCs5Fy7Wq09Gegg6rmS6SRbyiypizJTBaud7QOA9K5DqmQOazf4crfwbC60HWSsxDZgZdGh1j4UiMrUFY0CB%2B%2BVC5bh1q6gu00OerrmHq4CKr42i8H5m7fmpJFMcSYY3BVCxlcjxBB8KrsXDotm0ddeXm%2FRYw%2FdN2ASZpoUQRaeHh4Rw7vbXdeXVHUYWeBU3ObRrf8E2r%2BHO9hrsSoF2A9d1WT1zcDFcrlp%2BKUw6yHHcfqUtkESB8l3OTTwHWj2Gxlw1f7CKgnAWgJeRLChoBRTUtWGe4wuvu3vwY6pgGMn3Y2e9eHrMJPFjpbEePq5Pk5pDBH5ian4Zcz59IKcnRJqSsMQE6kkNJP1MuRQ88SyDEsabL7FyfqzDC%2FKTq%2BSQjc1aeO5miOqj48DFG7FKEK0W%2Bjo6Qpf30OunCiswWFW%2FFvVNzmY1eQzII4jqXSGBLaSjwdHerBXpWCNteB1Bf69%2BCfceufDmGGWCPwd1ZoR1j8doKfYRNt4mYbl1cmJVqaYOfB&X-Amz-Signature=b8a4e9410d4e68f5a6baa5867936b1bda12b145aed719b7632fee6b1416bcf97&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCTXUQNW%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQC9pT%2FZPhEpgt4nIoHdAFhKqMOB32PeCvySUtOpmV7DOwIgKUmM8LXy3LeynqEJeSwEru%2BTbXWXzYDTlTVAO%2F%2BWYoUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAix131Wlqrg9wJIpircA60vAEolo2W3IO5G9bRJ7AKeq9MWAVMnFMEXQcGCQNmHJRFeG%2FLZE9LmIFk9OyWlGxqUaR2opMKYpAhcAOYgSixukCQ%2BYJFWHbab0KBX2NsxTd9pwLmMEL0pcxvZw8ey22XtFDLtTsoSm6jLLYhxoQlDEShxUQhOZOELQyd0iT8mBF0eSUf8O%2BzqiMXll2Wp5g2J7Qgs0z%2B2Sw%2FKroxHsp1H8jPcwnLqXVLFeCGBcWMEhy1oj4%2FGIxTXRxMTx25XrpueKuyk9OQTd2hj4WkUpavgV21aWdOxc6mV2maGvhUPY5eRVpLk8QY6mKEFkSUKhXJqOMVufsjPM0tMDB2VBMY67WErCTUKkk7SUt5LYRgSMcKTWnC6K69aVuUI%2BXRKcHkS70GR3hkEx%2FC%2FikxU5v%2BSBVzSJ8WIW0YF76%2BcU8R8yw4gf%2FGYq%2FOVAOmHdkXH623HJE7E6W5%2BzeL7hZUEKz8ftXLvErC3d9sdSjI1%2BCn%2B4OP53fkOcy650vDpWH%2BZNBpy0AKprIx4Q7%2BXCmCVJj8L%2B6s4L1BjlYJR7Xq0vgrCjTQ401%2BT6Arth0LjWIp6pMxMM71BEPLHlG8OQDuJPtl9oiCJV49geRLCwUdDbQRm3szTXawRl7heHKXKMMP7t78GOqUB8bwEbNHEdKv%2Bv1h8O%2Fde9KTxs8DdnQm%2BSKx5PTEeVPK69feFBGK9B%2F4w07jnBZhJqSS0FjWi1pI0fVaODqVyHoHJ00N3SNa84yQckwZh8kgq3sQGW8MrcG3PrvB7Vhq0QaAwiW5FDtJTX2UjRox%2FY%2F2f2OzjN7733oBSWolzqkp3ZXotE9lEuL6ER0CDdjw5k5poUcUnSpLNq2aJzArm3reQCQOC&X-Amz-Signature=f1efc2e639f4ecb13087772c3219bc626d023c40c519e86e95491ecda1cb0bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
