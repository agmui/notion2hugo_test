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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6I6VROB%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC7rQQfLvJQELh4BlyP%2FurqOlAxSoWnK%2FWXw2H4uPo3%2FAIgWJC%2B%2FbzZ119oBSEcb%2FVcZq9aAf%2FDCrakMxp5iR81fKUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDN9prucT9TzPNIM5hCrcAyfmtxTCE1ltNvYtrXWLZy%2FaI9rNKkQ%2B68QFQVSAovm%2BplOCAV7sW9AvRcLzaysSqQubKdPnX93z82rR1M7No0z6rdApPKhHW9mrwCZ8v7mvHZbv1ZWU%2F4GwnmK4yodPVDMxzzCGbYQXvQfhH3Xm6V4q8IueqKg7ZgTwSIlzaLaGkRxQB76yshKtI4McuDi0SOGnkesElIvooZthgkdfU3h7CNa9sXTJWBtL1J0DihBCrdlPw1mP%2FIqMDQiS%2FZCxlWi2ogHbuCn08lUXdvdJ1DMpadV4%2Bc5NVNRmLy%2BhaDyGDYwbKqlTkVlCVgtYSET7e2EBqBjYDOO1FiVpU8%2B2qW1Vy4YwUdBEJ9T4gTG7%2Fre7sHRMWxnrVhSuR1Vs6oguf%2FLgMyR4gDCKfYLnStjDgzLNnPGo1kl2c%2F9%2FsfPDNx%2FCzuB7j2XUr4GRdlsjwLRcmtsv2N87KtMoVF%2F4WlsXnw4Z0UphK5lYcv%2FxUHDMobJ91VNhpnlNg9J4vrr7WsSkHkpD7CAI0zla5BPn2hLT6MkX6Kh%2BasrGZ4tLaC6IU2h8pgxAa0NiYkRkGA9awxND037zkkWCHYSGO6mJidUZeLxRoLV1n8T6dwEDiJA4jRp4l2kKJOewOIAFS5y%2BMMqMr8MGOqUB69nOrKxfpjZ59sXvfMKN12QZFvGFYHl62Vs42zeXKNIuT2QBgPzTn8QruxBTcrvbcyrgR3BLQaRQvgFzNH1e6h4BpXDltFVyYbGAzREJFNIoXe%2BURyKPFmnAoQCSjsqWiCcuq5rfogixNvTt3jUDUQjxsDkOg0sbs6r9IAGDrrcPbQXjAleSBAVaaX7mKI4qdpu1FWu0YGoraOKtNGeVkHNDGL2%2B&X-Amz-Signature=9a3f0feca8eaa1a9f17a78cc06927bbb0ffd0e1fed81cdb446847f86d4748d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWM42T3C%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEfxUta6KEuWNLJrT4EzbTR243GtTrYt2S%2Ba8GtZSoIbAiEAumVSONPdxK4pNoyiy5iIFOwOdCgXBFua%2BIErldfy888q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDBw21CKsYWR5SgiedSrcA3zwO0JzQJhcY%2FNvjsVIzRI1OruEw5HJr2Zp39C0ddS34m8%2BYcryMGWD%2FpoP0Ez1UICNVElma%2BnncGeQp0O%2F2xtRML%2FuxB3RK2%2BoTwclfcnTXi6dpWlXaerYbEzblBm5Iu%2BkTIJRcgvbUyK%2F%2FRMa30gteABll1tbBKEd1EdWLkYxgyQh0i6ZyPmSBFiKDkiQMJW9pbbx7B56ysRe9zG1TgNIkEvFw%2FI19ApCTt%2FANORa31HXpzh7q9YKsW61CTjyQRyKvqT8qG6ul6wWvIIEFYGzfz3P%2BIS3%2FkZ6YLwDTvIe4vCYsBlLq7Jo%2BS7bGkPuXI7WJLOWMvr6AmrPHIHZfdxonfBQOn%2F7OPi5FuuqM3pbmRhKe8klWErsMrT2VgZ9rVlguAyivwSGqw9GoXI8ZICgyeLSXAdRk7%2Fg%2FN6GVlvcuqjvdoysThHg4856eNNu6wDuxXPjjvDgev%2BYE%2Fn%2BzDSoJC7rsUORaOfszpL2169WpSrum%2Bk0RRJprnc%2Fe%2FkcenILO7%2BX92NUBZuhsPe%2Fo9%2BQDIE3jfJ1Hc0cWQllyr9AO0qzdcbAK2GPbheruChywS1o%2FrShZbRHTiYFSsQ%2BApVWujL8HJUV8SFnXh7RH4pim6%2BJGBULJwE7KfQEMJqMr8MGOqUBb2wITuRNaHJKGtb0Soi19qrsxdF7COO1JwqdTbWUapBVROn2uCt3%2B1%2B16GJg6wFCiTisdcvyFm%2Br3ri%2FdaytWDl39VouJBDpCfayOeWedDJDst%2BMR0pSetsc4alUpm%2Bcv%2B%2BbAYdRzuE7Tr%2Bwv3yRw9GD5t6nla4rocqU0tQigWESWQ97g2ev3L9Espw%2FyVgUGN%2Fctyd1cLRb7N%2B2aX6Bmu6Y52J8&X-Amz-Signature=c197ce9fbd911fbec1377b825c98ad9ec6982277a9ef01bff2284a3968e2abf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
