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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XK7SPBV%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCd4%2BkNPx%2BhXi%2Bgtfe5KNENn4zPiA4sgNBOLgmQcCPu6AIgEMaYNaUIwhmV5MNfckK%2BN439HywBblQbfvlESAWwv80q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBS1lfuaidPn2hnt%2FyrcA6OZaIXcCp7NmpeEFFqMu4OW%2FCCGoYc%2F5eTVvS%2F5Z%2Fs6st9OLBl4U1pe%2BDM0El10Y%2FD2WaVJZPh3gmo3r0kJsmMm1qeL9Mw6fhT32ZmtoO4OMnl6HPSgosYYb5kpkwSx4vznY1Vs2Uko6QMU%2BNviNqcCiYZyQ1THDv2q33cUcHfAJiu9BGnOMJbEi9jWuUXAhkbI0c3sUCqY97UyqCkIJTa7BXA1TTg6tH1KGViLj%2FSQnpAZQUkOlED0HvO395OmgYnZjd1AOwGaj82uXresfZNH%2FMcSRdxMkvMgEWWqujI2vgyC%2FWvQpHPiehtM%2BsSsYTHBXh8ei8EhXQ%2BnTRlPvfZlEwy0Z%2BJH4ro%2FLYQu%2BciVagRd%2FTdV1WO4F7%2Fe31NoO0VNUpyC7YfJh7gJR4DQhzALM3m8RtGeKAiQxeg07iBlkCjcuHMzDbJSygzHtQiGor26zil5AGjNLKx6UWRnz8%2FRWJPZhAprCsrlKlEdb2lUDKH6%2FEYtIpi%2Bq%2FEekd1KZ1pB8Q%2B%2B8sEMWiqMynVFGgV%2FkjKvk%2Fr6n0N2IOnJbX2CUMPPEd0sd%2FQV2sHEV2kl8fpChXPpphP%2FnE%2FZmP9vOBxQZVsGb6mR%2FDWGCZx9oNIAwCkLQeJCxFAZ2nz0MOihisIGOqUB8%2FsZkH8rOrWWO78AkR4OJD0Q8TCFAsYYTCOCTBbayuhO4wjTEWlBT599U5uSbxsKc9erDqa9zI6xfie9jo3dO8H1lpwi2bPqs%2BKV2Cb8qoVCTGChNvBOFgEt4%2BXobm6hM7YejVfpRt4sFyb6t9X5zgbfTntdtRge4xwM%2BrpeQaC4kLl0eodsBSa9rsxCwNwwE7M7yUpmbpUf9Xb%2B4tixPqleIeI%2B&X-Amz-Signature=16cf54cfd3e16be715ff85b4bec98b3b7763cb67a841f5cb2e8c00e61abd592f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZF3UHEE%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCfGArAXt%2BC6I1nakMBNm5xTjFGcVezmt9VUX7HhMiL7AIge1tEsmeg5k%2Fdiw%2Fup8gjI5jruN8FYPxYifjFiawaEeAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFcg1p1%2Bd%2BW4MbJYNSrcA6LSXGlstQPommf%2F3wqRihO59zK7TSZL9PPgDV0QonU6arip%2FPwUM7OLi%2FBqwvpRFird%2FBp7gJ35sL0iENC9gzZPza5%2FcGk3ZyJTVU6PLRUtbSymrA9aRj6dUIjaqMUD320jwqE9CPPS8RZvExc9fOQOCd%2BfdbEZ5xOtK5cae8ePOtFpr9jxso5Rib6idjpZi3HA1kr6f9x%2FfC9ujSwB1vptjXT%2F%2FnBVc8gBUInzESzWryX7yfbE%2FkScaVGE%2BA2tWJy6sfh2%2BVgiSrO87aS6QWpG2s1QmrkZSpfIuwFX8iVknk7Hp6oYQHLS%2B7XU4kndt7hdhSO5IXqZXJlSA4Tyqwqs%2FgB8%2Blc3CYDx1RQWUezK2Dx9NzJTdI%2FNmMspNwqZS3eVxrGe9J8CAGXi0lca479QOmrpQrc6q7B2FGys5J%2ByIIHKf%2Bvjj642xuf4g%2B8krC0L7Bt8KVN%2B%2Fvdz42E0OUBzQ1MOmqMCzBb0OaaOZANQF6HeHMtiIz%2Fwv835gLoIoGwMTOV51M5DXZYNgd%2F3Zgt6Rnf5rXG8hzPm62RCc3GJ517pN9HEJdeXKmrvD1z76DeYEjBaSpixU2oxRcpx97bJqnQzkfTwj5fhtSNhn%2Fj1f8mT2ds%2FIcbMP12TMNuFisIGOqUBT0WckXxCIuQ2RAefb93CO6HReUAhCGHxWwKDdA9KELtgm8owFlUJgzu2PrRQ3ezSotWHA0JP3J6h1aRXoLcqkBN1U4Y3or4CblVk2e%2BL%2FwHRDaqdIZoxTzesbwJT%2FWSmZBHdK3EAIeDKLl98gVj%2F4K5S8KSY7vvl%2FwJ1LAxR75e1AcwRwEKDBbORkihbjiZryQyfUD3gacUc4odJ4wIlgE8PUp7a&X-Amz-Signature=c765cfb24f09b1cf841bf828f43f4fb6939816b1f1a27cc628f542bdcb1012f2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
