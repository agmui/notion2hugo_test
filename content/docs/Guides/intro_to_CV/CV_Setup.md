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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNESNJG%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDfkkaqSE4GGOu7Vlqy0wHcxF80be%2FDvNPB1PX2qO%2FtjQIgRnD4YgZkbKWDd%2B9RvsXa8rxRNp6KA1uXkr66DLA3gVUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGrBLlLu7Ebvrrk%2BTircA1yDnI1YoO1y9TVujfxqpV4AFGdwc3%2BJIVgLA1R%2FoLNYEogce5QKe29xKjGhHDNjcT5di%2FCZSvU78UvlAkTlu%2FcmYgk9zgEb6w7wNsT0so%2FTeNsoABDCBKkfgFyQY%2FyECCn2QQyoGgowzf3r%2BGoFa%2FVBcYUJv5k9WIfNHOfOUOJrS2LHzhi461MhFkt3erB6%2BFcTjNQRIrH1jkAfSYawu2KgY9u2tPvwYlR9znwdd8c5nFVs1uIrLpPQgAuNV3NYRv94v3yhk2s7dzBLzPgmNpC3UyKcBu3xLOxlpsBegWPYHcH%2BgrXjvADGUvU%2FHuI4pVW%2B6vqUkCUCFa5%2BgZjXLve8oPu3j0zF2Ptp3v0PNqIF2OSDy23IPB555jbSGhVn7f4ijdRCIA5Y8DknfRpyD2mD0mawCkGNz%2BngB8Vg9vnVg8s%2FxFmA4EXb0gVSptFSV0mfi55qqmH43aOcyQaCBYibYUaeEjatIAnp0yKgc5j28wTL7Ibt%2BI4Nk67gDqKOtVpCNCREvTVHIlvXP%2FtuxyOe1vqixV046b96vl%2F%2FwGGDRaH%2FnyfCinwf552ljxTjB5CeqTveTXNuO8hrkg1fTeC2xRP1uOpE0R7PnMk7tXMupXlgV%2Fw8vk1NW0K9MMPUsb4GOqUBo02WBOyex%2B4iRqvy1Kpe7IL3RO3%2BMkepfK1TKBQhGwpLKRSLAp9NGeIpCQZ5x8OmGc43Qs3moTTG21b7%2F4qnJFqr9ZAV4iQGnD8tso3bh%2FS55IMfN6JDgYkqi3hiEUS2YS0dzY%2FroXEfyqXaAzOSb9B9p6d%2BBgKklP3l71H4I5XSDCI5nknSFc1WoB8Pd5sPzBqi3BGwxN31HtzkD3Eoo8627HRv&X-Amz-Signature=76abeafdefd00cea8eefdb12e1a1f3fc474666271a1b046785cef8c7484d5a5c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q26DHQZ7%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T170141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIDADXioDyTUm07ZN2fqKD%2FYI%2B%2F%2BzI4iWQv0h9DCjO2fFAiEA2bqxqZRlugxBbvewJcBO%2FIo1fsrFI5eJ4Ffa99S5qBMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPR%2FWcus%2BppwuhrveCrcA8aLXu5TEGfacHePUpuRxdJNW5Z9tSm17xDGKgHj6sja3FQ9eeWIIMwfIU%2FWPz4GDhjMG3fBj4SqqdM50oDHUrB0TBpTz9qGpD6vLxUOlP3XPMp2pLEtH8sIzW9UenkT%2FAp4d0zMLdorzNiVOqiObAMhsusnvNHobrEcxuSVZCE%2Bo701tTvbsTE2Lj172FO4JRmhCSEwK4dLaGZCYCRZXNrmO1mqxiR%2FPL%2FqKd8JQX2kNCkYwhkQAKQ6W9Fs0G14GjXiOVJOAqvIHbpxXl2hvhP4GS5X5nzu00HfJ%2FFEamH1oleoglOnNYsm1XPPt3ctKa0pj7ArIO8fTpQI4%2FBsYBQ1bXB207BDn33kyZdbxRUU8ya8hj17tDR%2FArB2O6lRZgvCIxU21yRHoy8nb9owrNZ7Z%2B%2BeEwbqQ1OskWxP1NAk4DgHsVp1N9dCr4IPNzBHQPUzMYw%2FSGmSUL6iFZNjScns1Wg%2BwcIzqZFg96ce1IIDffPOFWJGz9g35f7UiUbdSxychutRWpYCS5yScz4G0o9pEkWxLQbq%2FLgYNZsi%2B%2B2i5yTnAg1UHirVjHbR1gb62GI5%2BIti0Nfb%2BlnLeQNW3ihrcRbDVMSmlRB8Vpd2h08DNw8TrU%2BEIHM3mhXcMMbUsb4GOqUB5FYtlu0Koeh5FbVmblgorvLC2DmXvwacJ7%2BQVCImltH6FF2DlUt4pccguvttEfrZSgc78aGRhX5Ho1WMSd%2BgTDtJHsWU7laf6G7xo0qb%2F1ovW5iZ7OTRXbTTUs8xn0dmxTXYcSgq74jMoyVM46S8Mtgl1y4tzgclDEE%2FdX1BMBMZdwkQYtKXsGwCtcBDv4zUJEOGbCJuhiUo1NubPXstlYO%2FYuJJ&X-Amz-Signature=49413b82bab5f7e5cedec9a2a12865f416f37f801d5990f6114d7ca56763c3f3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
