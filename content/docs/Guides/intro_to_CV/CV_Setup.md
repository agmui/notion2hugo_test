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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKDGPVT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDN6MNCZQ046IDi1XEmZcJLFqJCs3t0IcB%2Bj24zMjIoHAIgbCF3N4bHyooKM8fBxVNrHH62cEeXQ30x2k8JwGZLqO0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFwjHrwpQDSwDHXWuCrcA99m9respWW1hS%2BDbYXWDMDfSNPLR6UFJTXObqfA%2Bm8xkYhwVuajJyhNO6PCFSHZyvZ4ujvbgIH5y2jAtPLrcIJ0Vrxs3gGCkBGlzFDjh3GJEJZQr0nfdpemCD%2FNgRRgAWFo1cH5MWZ2uj6s0KtVI183nbtK0DCcN9Ju7NB6lKc6z3jL%2B0DxZqLbWNjQvh2pXunDnxwCVWFhVliMbNZn9WXfjL%2FRay%2FCXf5TJOUC15rtt%2BREjO9HtyMgY%2BhHn7FpTj3Nk9U9vguh7Uto%2BztWetQb8pMvz4W7HYe4L96XcWLEmtWFsPTpeE%2Fw42sXyxKFwTZ%2F6Rv81Iy%2BNzUi%2Bzo%2FAQPtRCBj%2F5MYd%2FaJpj5%2F1Vdx8qqMSmnZo35A2StUpzexPa1RHDhlJ990PK3AN6gmQwmVd5iIn6tPhaEt0pRyKED3cjo4JoGGYMuPzONh4eHNB1qldGO9fTiVpy34Nc9Zd%2FkggHVdHIwrlNzh8RJKx3e0stFhL36FDwEVm%2F5TWbhHQ%2FA%2BHg2bPb%2BnsBMm0LYFPBHVhQgz%2FH6umtZbmlvdqDpXiWFqkRgc%2B2H0pti%2BFc6aLXxG%2B2L9LJv%2BW3oQT9cAEjqK4KM7EHOfvpF8D0OYwp0ayg2mnGr3gXh%2FOvRmMJCCmcQGOqUBRQ4h4ImuWwi4uOsYVrhbXD%2B06lmQ8wFsUQCHqDqfl0sgXPh%2F%2B06tUIcnJ4k4Nm0Y%2Fh3DAfk6arh4djc3aybAp5kAUh4VP8wevcaRl7BMP0nyIAA5%2FIQVNFREZf%2FD31ydAQA0daSO1QKhsozjBCD1TCbTGnRVy7N5chq1yFEseobg2St5oLVNxRPMD6pd2wNIJHbxu%2BJT4HLLsexnHByImRTuzS%2F%2F&X-Amz-Signature=f8ada1a08664aff2abe12620f6fa692d610a7421f08cab80415fdda45bc6deef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LI5NPPP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC15HwgFzGeO5GWvHa2kwWFdp%2FUzV7sVCzgOgmsvPnPygIgWaH1TsIW3M%2FLRijEh2BdFH0bQQeJUbcuOhR4b20fHnAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKd23CWzW2f1%2FI3OqyrcA1G9HVQ8GqO1b%2FCJp0FBenObN1hh376aqWuB%2BzDdMT%2FVvV6Xx5pD6veZwS%2BEPYhSMFCnlWL%2F8CfXR96BWnHskuZx%2BEH8a8Ih92Px4iPS8nxQTj%2Bux8o6ngeNIyIwNKJ41z8qw10KcX6qKitbeITLpvhQD089SiWiktx7IpppeJzTj90pxJEtiQ1ghM1%2BCkfF5HHeoMHnQmnCYJBjEaM6xHQVS8VT6GIYm318cWWbazfJ3FeG7uy7hjw2bDPuszVHWEfaw2Ei7QanxmPvBAVHm3Qu5z1PkWPU8YBUF7Agl2UdCZcVeyYDk5%2FnmjtMB4mC2MQTg1wgGYVTaFdoV0eal4GrniHncNxvSHN6qE%2FICOqvyIpvD%2Fyur0NJtW7dbSNSvMfk5XE3D5ZLLACAOUsnmw088YBbedetN%2BTsxlZ5aUSTm9c4PMoDrVJJT2v1rRavGTdCYKcxKAilDBN6B5GtBPYUD3vU5G6RAZoySzPxcFhgXY1mdtkEDhmKjR63Ifh1ENSmLlGFQGHwCslwcYgglNngNTFhBRJyQ7IX59nHhj1GKfK%2FjQYwWjyH0tp5ZM%2B%2BXzwg20VtLz6LG0AboRkuVXFzRpmLrJxmjKg7XKDH0%2FNXinAyJg%2FtN2SouksuMImImcQGOqUBHvqY50b3C3uvwtpv31ND%2BjKo1pawnB8zRg2EekOyLmKZQBSnCeCKq%2BbFR3Kim%2FI0M1HiFU%2FWar4d%2Figfeqir4u2nyCMBuA0lrAx0Al5snhgzF%2BU%2BJxNPgFQP5XjL3uIO1K%2Fir%2B%2BceA5LuCy8GmN8bSZEGyUMqzDU%2B975Uas47K30XcwcUJYWwBgYg%2FA8y4e8aKau3j9nLYsxn7uF1ky6ELwfVrL1&X-Amz-Signature=031c9a7a997b9a5340ff5578e63c1c244fa3049487f13bbe26eec83a0976bfb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
