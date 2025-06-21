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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUUH455%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1v8I9VF81qYXiVVSgi1lIJdkhvvJpUiqufaVK87xObQIhAOCQIN%2B2qIrUkiI6bXHFxv4Bg3PXg%2B4Q0PirAShy0MGsKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyvGj8LBhxsUWSPmAq3ANIWqEj7f4HzA%2BZf25Sa6VVZp3BfoI%2FLZSLQnxD3WwqL4Z08QpjUTs7sOK7BS0b6%2FFt7DQx%2BsBYcVItnK9dpfXnrvFPsaJqOgkk6%2FADxYbT8O%2B7VMn1fcbMtzBDFZv0b6N%2FyrAnE2r418uDXqr5tdc1Vj4Bc3yKTO7vl9OD%2FAvv4AvrExgYsed6TEr4o%2B5yBBwB8wKIApb6uBT5cpnfYs%2BSOISQ2%2FGNsjsDIlaKq9wMPT0DL6mhokKkbdr3MepKFlUGYXG%2B7WNTHSodMhyYHJDJzWFB8gEDPun5VMwxkzN%2FujlbWTY1spxYCaeVS24IzdimH%2BLijhAEpgNSplGVdmOePv3TAhqLkdiJ7wRMxugu95waX4I3nfrcb8AsVRK%2FXIBPxoN3%2BpV29n%2BQXGIxw3Q3fJqyMmxgABZrEVHRpaTrxjOa0x%2F2Zlz0O13tROWL9RdVo%2FqKnyHUPf9mrlqybCnXtp8efR0sHJbTqnf0yPKO6WupCEvspmgliLHaLKUigWXWJXde%2FYXgvX6axf%2FwR36tQTmF3khdNfsQitC%2BstCJALT07JuhWCdV2o74nU3O06jFUtJIXEpwPiAsxly1MLqSnbaVNt9u4WNfDaDIJkLBCe%2FcwE%2FTgiJNxZWk2TCXr9jCBjqkAUduYGeYAnLyV5vuANET32ad7LMREC11%2BVKwx0TtDEVwy6h1Ob%2B3ejWkn1QuZqGknz%2BTUPcNGRlVsacQ3BcUdff60QpD0tqvFTqB6Dj1vyoeroRYcRq6NeyaooaG5hbj8V4I7BAhpxYB7lxwFOzArVSRluw2YusHn2LvGP4myQhv6LEk65RkmZqUbh7ZYNL0H0ObFBtVcScOcEOnsK56Oij%2FnZVd&X-Amz-Signature=29c93fb0f48946dc7d41027bba764084cbbfda97f5abf3e1a16e61d1db230f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPFHRQR2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUHpJ1jJEsXAPHvpxAjIp5kla56s%2Fqhspwstt23IX86AiBMmDAXxJ7WkV9YmNFDd%2B72R4tLxlwYMLBazv7hJuwf3iqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsb%2BuTNtMYNd9PNQfKtwD%2FzX4uUGE7z6%2Bz3CqIDhYzQRBPTKEpZr%2F7yQgkGHl2Qa1nXfxkrMMlQeoD5kWyFIpAHimCkulgXOAd7WgV%2BCvBxbmYykGydfvmv0j%2FnS9sii6VGzYZp4aqYRR%2B5k1BelnkTSuH60B9nVLUt86218Q3FwzVXPnJHbrXoMEQ%2BnAyn2TebomS%2BodBnfEmTaOFX0zMOgo4DKKCzj%2FvUa%2FO2L3PKwVQuY8O8v9DwW%2FVrQBu769AHGuDcoT4CxRQ6BU5kcAh6H3h%2FaOHsHa8KrgyQD3nqgACYYqjzSXRG7DreO6vz9GLty5K1i%2F2%2F%2FtePpO5b%2FZSkQV7RQt9fR4b%2BOlGZHcXNbyumcTvOMIOa0sKH2xdaJQMfhPNHPZgVGEEUNvtF%2BNmVrp1pvOvpdym4XvTxR3Z3EQoDRzvvhsRc3qVoQxYdJTRhxbSSfGOu4CnHqF5cfx4zRWHzh0d1yhBwROl8iU7V9aPE7ajJ3IpDb%2BxoNZj%2BL3%2BNDCO1vxwUBfr4F%2F7bNSHSHJDln0VsawG%2FmoNrm9ZZWGk2vNGFaoohcTc8yiQA08mEuXIaol3cp5cv5lUo9eBcVrTeVYvZuVyYXyVth1PivZl85PSBOVUx2PXOxlAsit%2BDkCJtXWPyn%2FXBIw6q%2FYwgY6pgEZoK88VXWmY7qfW8kweG7yx1bb1QFxK63UjU1wAqPiptf4k2tii2NoQH%2B9NqUD561wv0UH%2BoEYtRnqkJouqr4sq4PeiTIAAQg15zgf8aS4LktntKfERjW0k9LAip3jsoEQc149HZ3cp2TUNqWfT7fPzcIDt9%2B1N1U%2BdHZgM%2BaN7svhj%2BwqlEXmelsvyy228g0bo9Rf4sNpSV%2Ba%2BlkZarkQB%2BufEGFR&X-Amz-Signature=fac38912d0d658d41f385bd1ccb95f7ebd6d62307a7595cedcc407e5e45bef2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
