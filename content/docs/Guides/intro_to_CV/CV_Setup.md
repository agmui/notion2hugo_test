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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642MQLUHI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCID4cFV9bLCFxGgWOoZ8C73xZYJMbtDxadzELSAlv9nldAiAZa%2FONm6%2FmvKQ5QI%2B0%2F8SMFlhiJmeIv%2B1k4nxSJOQkWyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3dLojT%2Br7Ca9LRmYKtwD6X%2Bv288glTYF8uSPn8ZaRymCyK83u0EWC9KUlu2LOGt5lpCR1Xkpsfck%2BZnFppns4TC%2B7%2Byu1L68nOlkRvV9SROsln6KEPt7gtJhFZRL9o8u0dRSRQby%2BMcxtHyo3VwpSU5Gaw9pYU%2BHwZyhAnt8TISieM%2F71s9gPPOg9P%2F585E7qMKJXjbp3HYZqW0edz9mws2CySA63JX3PaNPhlnQ1pOjoFc7u2WXkU7yVGHojgoYnSWBoa2a%2FU6eNFhWEkhJ%2BgBrhOM9yt9JlfkWK1HPwPCr7%2Fykbtr%2FixNZZJD0VoNO1R09i6Muc9ImakHwbUkBrVDaQrY%2FTwXogr6GQ%2Fdg2GKEEce5nrVRwiLVlrgFSV6K4WqtuDNLnbXgaoMpGH1aA1U6lxv%2B9%2FfXn9YygehN2pFHcMRWRNA%2Ffl9fkM4Wq3Z5A4TkxPKICOvtzPindhjToF%2FbYSZYo8Eu7KOdE%2BS83FSDtzEfYnYnWzy0W48ZsP3TSyYVwOtLn2zS%2BM6PQvf2%2F%2F6OopOFe5LMZmn3CqapTCwqYUSxuncBOZz1vGtyKIoq9KbA6PRxthtMG18v0v6k5UA5Nk5Rik%2B2fRcda5xT8pSTE82OGpNOdP24ivYuIzPq7ZPScP48LTFEGpEwqPydxAY6pgFYY1CXWC3XdcHQsUpIu0SoSWPAGqhxVrsOlJ84TgrMix0r0UUG170n8zFUjfoeAM6RFW4gocXdf%2BxpWWR0mbvdr1mZYT9ZGCbqkDuM5hrWGTazMV9jSoUq3KCUyFcxNWToO9uOKkk9QgzsOFfJHVeu7YL6jEd51XeYEolBUcM6Pe9qHwP7DCpZgZVg53LsPAB73LszQ7IlDCe1JGrVbwFcgWs1hgiN&X-Amz-Signature=a307e316f6d815885006943edeb30c5cb46cdcceffd41e3b435c053b542397b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXE4QXFE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCQa2W%2ByBeQZrqZoGYziXJF60CZPal0Re40FEmvwvQN4QIhANhg0WdolDeGVRrjm2y4NEfHoCmLn6I%2Fmk5P0jL%2FV0G7KogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvOYlJCLvlzW%2BW0bsq3AOdHbBwVvLMp%2BMIYkcFCYA3vGHFGWNERzDEGhgaXM6b0MYh%2F4jX9mimwti23yM7PkRC6YU00TS7FGOe%2B%2Bgd1qHzhmtFResYRw5jsWIaNLB4TlN5JU35zkgGoeU0EUPA2iF1xMafm%2BUkkPO7x%2BFAR4dDQT3gee3ET%2FU6Q8fs%2Bk9GHc81T%2FcwWVRMXLZEQfnC%2F4MxiQMUgqihJGBfQXgIl%2B44LJkoYuw46JdWMl4V6%2BH45L%2FhiY5r0SMM1HzgPz%2FyCz3K9JuwEQVhS2E%2F1SbpUdNsrI21KFNvQzZ45anEFU1RkBAaFhZVNWrdtdhV88tybbxEUzzvbhTjex3b5lufPXcI%2B9uvetzrLvKtC0mwVdY%2FUDrtOg3QS3%2BCXeLUpTeUYoUsesrpt3m08T0E2tWOf97PvZtadIOR405bN7q8pDfEWzfcv5EFuIVk3hmVDoLFv5DtsPolNvMame2dWKz6wVSMS%2B0R8EfscNiRx1onzbL%2Bg%2FnrdR1cUwDBZi%2B%2FT2%2BaZalGVJN%2FaLARnaPNa%2FHUnNzRPx9BX0YxZYtToQg4iCLBAy%2BAVm%2B2BswLJ10M75qNbkQgwE0dTBCwkSkSV75roFytCgo7VRaWam54a2%2FWPOyf35ENVF%2BekTD1tGte7jCtpJ7EBjqkASd7yT%2FKxO9moaLGoRkt9PXVXKt3rfBvo8AnQG4H1I1zkx10yJhJmS9Kz3Ro2dtgDTeUVQhBYPgkkaPUEqq5WyPAa8OzTF9lhemu4lkkG%2FuJ1deofeMd3PD9j0MvKFDUVi824pWsYhnV1i46v%2FoPuiTkW7oo4x5JqAjiSigKnAcyhRT3Kt%2B%2BZnmrEbTHaIQYtfn6ZutfZrkz4afeapiksCRjTiL0&X-Amz-Signature=668bd398eec3a3683d880f5dd5cf46adff3ccbdb898ad5589f0f6cfad0b73c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
