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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BAXBHTZ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDhDT2xQAIGxAW%2FMEYB0imHeBeSVmhOSrpMXXvqgi2r4QIgaMWZsDN1bJBXL1onNs3F3Ekp24DCN6c3wczAnfpGsFsqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG786kJGUeH3aKrvhSrcA9%2FUZjkHsMVtN2iBAVlrJhqVzK82B9BeMQ%2F8%2FsI%2FVuP8CQpV67QZYwWGcdxgqmH6F5ok33uJv4afUd3oSYs1dQzmkX9JyM9bpaXVaaaVwlnUB9Ad6kh%2Fy6vkR1Iaf94oHlPop351D0P0y1Fxgmk2qjFjLvT6YfQlPdYdliRCMlBD9mhp4dAZDqimCzrvVBrI0eL%2FR8pFFBEXoiCPN6o2VsALCSYGSaD1PViPKZFOg2cPgy3DL75noLepvMt28NQOwItkvdk9sBYmBpD3TyPD8ighd%2Bjpr3Z%2BHKhA7IfMqAvSVTqZ0UANGU9uCGuVZRMFXs1pfxR4DhfvSzhsG7FGZfWxE%2B%2FpimuXQ5BoHvYE56TkLhcBF2pPsAsrEGSckGcT11FaBgePzrGBTynxs0zyRypa3ZkI1H0kK0OaQ%2FClKU84KpU1DSgRFo15okkewmzL0pMwTIFvIqax12V73dKx85noflC5hqrRxZcejvNbAuAdD8SjbICtr4Lv5T15GFfYUjCo0Gp6UmWQ%2B0czlwGLIbEykT0qA%2B%2BFtSoqeUg8%2Beh07oATeesoS3nW3sv6mrb41m5dE28c40IJ8CLnxXqW3hKAHOLygKmEii%2Fdia2U5uirQ9A7VNAqNw0b1yBIMLSFhcEGOqUBBGA6uiUnGG94UulMNm2flUk1KOTHGp9FCTzxOkRt%2FjmuZybI%2Fi4fMVvcYuO%2FLXw49%2F13AHapEPBeBfif%2BqR1GH4Y53pwCFUc09ic7h8BrxAgKaonanLu9w2k1KWLGCN2oKZeCvvQPW31dZOx5Vt6PTLkrKF1fJVpQQKXwSpGVw4xdDj2uSg93GKUkbtp4L7iBlovxAcoiH3yiFs3J5fQ2h5T8W97&X-Amz-Signature=23c49161bb6481bf7a5fd236b67f18ef628609993426a9d7dc89cd3c8b106080&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TAHH675%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDnuNo%2FEb1m1miXncv8GTKOo3wPH2fFHobErAa7e5%2FlhwIhAPV3XhE%2FjHoW%2Bp1p6kb1yyYmfxyzdIp76jZNvR9HLzumKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFnytG5blr9kTuBLYq3APMH5FwW7m1cMz5qb8cyxmUxBA115Z%2FTWx3Atlxsz5lGlLcyvAuVNUycOfBVqVwwVPQiiMjnfmS80VjsLwIDTZDP7hA0aGa1MIDFMXt6OuX985vRyssQ6YRo8TVg9%2FHe99kxUtprxVlJXc%2BRRMbXQGSzXmDCFYHmdr%2BpwzADlUD%2FOpyx9VuWBbWb3Os9q9MzpMbWlZ3Wd21H81p%2BvVxybBsuVR9%2BxtB5jq2WmNEdLnCHN8LF7aEgcE3myNSoKC6OHBRVUPy8cYdY8L%2Fok%2FiqKu5DW2rfjHxXiXLoU0U5MSybQl2ax6K1lim9JS9UJQL%2B6y8nrv5R%2BfLo37xkzaBoDp%2BcB9%2BY2XYzDhOsHFgrDZ7VRh1%2BehuVOW9fyGzzJ%2BeM0yo4%2BAtspPeOBKhQvGKlB6b9l4Y6ieCh1ocXHB3CIDanr7JFf6zX1F6OeLWviWvsS7DyrhfpNokIdX1FVR2%2BaXdOGGjrScb27tEcpG3Ly0ZhDaoGR5%2BW6PDFIfSpmNTK7%2FJOxEqjzZLaGlIiuVOOjU56uY7G5hnfSMzXcI91UQ2ssHDpowk%2F4UeEMZftzj7xDln7nxTLcXSCD76bnwHho%2FRhuKPS%2B%2F3f2Yhm1YR7AhSsZ7Rhn2rzObXOTsVEDDjhIXBBjqkAT%2BaBFAmTYuGpRCJeL6uBJ4ZIoqGUCFp%2Fi3L4%2FDSKtKrVo0Y%2F2cdyyTUQkM16ofOCH7gs07Y9zVyk5fvrwzSMqQ7R%2FkliTiX6V7wgnOj%2BtzF5z2laFzgvMfzj%2BVnRCWMWkPjP9hXYoAV8ffp5Xz2tqXzXBl2cvRlxKjcbLR0domDpzW9N9bEaTULYp6RgbXzL1TXBd6TVrxGeQkbG9e%2Bgw5jv6bd&X-Amz-Signature=d25fdd3ee527709cfa8c11322ec511e4aa467926fce010428c9b1bfc5ad057d2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
