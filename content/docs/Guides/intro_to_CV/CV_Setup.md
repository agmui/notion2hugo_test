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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NOAB4VB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGJ0RZkE%2BYQTH%2BBkW8NX4CIUI8mlUxUO6%2BC3K5aLMPSfAiEAsj7NsF9F2FscxUh626JHTSJqoPxoVIpGPbZ67oAX63Qq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIZvA6jGVJcCyRvTJSrcA%2FFRf75nPvgKmP36ipkkzq1RZ4LE3OzXFEBMTPsOVs22g5%2BomtVCyo%2BjL%2F1RU8pXJo4iSnO9sm62v5IAGQz6UJNpBCvxhkkZovfYXnaRwzupXzo1RUcoyYGzEBQX%2FoWactc%2FhvauLoLOG6RA5cErtejgC9fV9S3S0Blx8%2Bi9kuRnmR6ZZn0Lnecc8Fsqf6sf%2BPemTB1AWW4OifbPNtUEMX%2Fook5mMfZb1emm6Do9heft5%2Bw%2BaCPTR%2Bw%2FP1eYYC%2FZlQ7f1KrnjQQWi%2FX6G7%2BkUJjdpknV4peQEZUNuOEiLiuI8FpxoF0CToEp0Myk6Y9HIgMBXA%2B7WaCsGzr0%2BD1zB0FTp0KkPrA0rl%2Fnj8k8tGn9BrYj911hcQWzx84orvs9VggaEUpr%2BkkJkicbeGEbD%2F06%2Fro7AwGA7V29AAgXz3Q1IQ63cMyTG5i6Jx%2F41JtIkkmLXO9VwNeSup7iZ9zDaGqlcHlFVJdD9NMnRRZtzdrcT0vLiGp%2FZiAolpM%2F0gC7SvmtKCGh2N7D8dQAzrgm%2FF90mKvnESq4sVl0Yvfabojj4PvoX4Feewkq9RNTocEnDkU3VnzVzKSNE%2F4cpuJ0q6a53FwbpBAmSYUcDhSbw0VWFYRv7%2FRCWV677HnyMM29nsMGOqUBtcMHlBg4Cuae%2BSweL1n5JbXFYNt84GBiQSXtfiV6oI7Ml7zrBNdTtCWyC4y9mTY%2FkSa0x3ndCKAZXh2cY5vG%2FpLWq1s6wdFvKctPrMflCk63TaQkbB8d%2BJNnySefYMbxKlt9IZH8k%2Fz3DV9Qr0a8HmfVOBfl7fSJi6Jm40j9%2Bl9aT1tGpY7OR%2FPXHtvPsQYauchioTvOM7CTSnW8Z64xG6ZyTja9&X-Amz-Signature=b4317efa911a8c42ef19451dc9679b9d7d92ef825f2288c4c0de4b123daa19a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCME5VTN%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDATrgy74DI5BmDhVONrp9LkRs2zo%2BrtyHdcWOpuWWEcgIgLtlNpTYuM8Y%2B2bYU0aexBZeS4i3O9JAkrS8q1CgL47Iq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOF6NleUdALX%2F356tircA%2BuictI3Y2mLA7RB78ddfg53s%2FVJl6Zsp8lvtuq94YNLQ3erPB1aKgs0z2JNw1mKu5RLGZ%2FFaXOKBWTFZbQ3WykQjkR1AeUfhAKwxsPkBA7OrV%2FA9yFkjvQPIRBOFBQ0POKBCP2mWSHHBHOBoGBMX4ApLQNyXGWC0pw9ygIp4gQHBHRx%2B7LV%2Ff0drNaQZLdnMHlCGLwQ4VV1IAtmXqXHpL01wRo4ed2W4t3A4FF9JVpNuiO8FeAOhb20cPqkFHesomU5GHDGBFAjO9mpEEPFAtjTNJaY%2FSDE5NpiwHB9i%2FFtNqXS%2FMBlPn%2FOI90WKVi7M0gP5h694AfoBeNcrYGoadELYeyCJ4vPv%2FD5YewvHfbANCEjduStSO4DRp4KmM7abkGkFCGwV%2BxIJSesuzEGBvFVGqdrOBDxu9fwhMLpAeh2e0dSe6D9OZHH32Rh5nzyq%2FHMOM2ggq2nv8Le0BGOAppa81%2FrOVtjQu1EVIyxvD1eejVIYPDvaWAr6mvMVoJXVAiG7JZnhoEFXjpKfVWPDmIBsucSiL%2BCpWdUWMGV2I1X36CQ1sqYhHG%2BdNpaEl%2BXT0LYKzCacj6hdeZIXYAlP84CA%2BZ7xR1ZSk%2FgxGltWxSudTkCQy01yKPFDnxlMO29nsMGOqUBIRN%2Fy7XY7kQMK7KW%2BYZcXct6xgLacieTbB0KsZ33AnUMvo9G%2BALIyzbsV44Rp%2FiKy5YlWiICYMoT%2FPf1sjfl0ty37RUC7SfHkJ4f6EaMDo1L51n1IRDHzwZgg3w5ptdLnJon2ylbPq7DOu%2BhcO9Ncz7GS%2BCe%2FZmSJdKOWG3PFi1hUy0ZjJI6ZWH5BD0ekm6G2PdQlSgSVkCn4YCzkr312A2nRunR&X-Amz-Signature=e3111de0dd5e9974665ff5eedf2da0db8a7dafd2ebbe5cdfcbf5cc267a063048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
