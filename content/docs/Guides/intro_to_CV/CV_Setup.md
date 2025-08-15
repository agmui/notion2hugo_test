---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWFK7JZI%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGRASZ6r%2BahZRgPFv03YPgdlMVGzTAJJreXWdYVCq3aUAiEA6ZkKxeY4s%2BdzpkUmh8G0ugJvF1aUqkdek731lsrNyEQq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDJ6Aqe38W%2F2HTC0ONCrcAxwBplgJGyY0xEro8V%2FmFz3qSi4JHTFWi%2Fj6PHpoxBYpMi1S7B3FPlv5DEtjlYmd8ucQMlYN9SfLkhi27xMwMlGU%2FAHUU%2FseJiX459NMt102ay1o3WiDVon0FXXDEQRm%2BZmJXXGdrb4AOsDdeEmF1F0fJ9l2sl6TjNyyMwFWeqGf5vWKOUWgtaOBuViP8CFHqsw0pslIY2yqgeON7sHiuPya7CHHmHocpOM3rwiYkrqpLOj2fKAz8hTueYjgSrUzieo0ZhhiiQkIEvb1Svq4NpCG420jXT5IywEf%2FYYzb97djpOJqVMUbjzCbLJ2AAUjaDNOv9JmxEEbV6ckUZX5sDG8oO2pxUHwITWzWDJg4WviydFdiSuBSke34SLoIwKmnZkyOBe8svRcjFNYlIrzPWysIO6flgfzU1arcxvwQbZ4EbDGWj8fnj2lf8RM1JsFe9frJ10P23soTeE9bQW4MzTMg00GvQLT%2BplOPEW5ROYOeQ%2BmVn6NXsH6y849r2%2Fnf%2BBhpvVJWiBH1PohGOHXdlgOT7%2BMGP%2FFbQgzWD8CdH995KnsMlimyS2GgLzW7j4gx3mb0sA1QQIBfzj8MlsIkd8t2rb7lUKPt%2B3MXEHgLZL5xgWgQEXscuKvJ7eAMKja%2FcQGOqUB7UFWvH%2BBtvcwf8KrkfF7HYV6hAz8XdeTpGi2QnaN6N60%2FEbJU%2FXyCV%2FiEm%2BT9MzGGI4EVNyyFUNcga3BFiSJ%2FlOGP6hfa4x4y19H4UxGWGIJGBDW3PvM7I4jD2s4CiB1%2FRFfNtzhWv4gDi16esNUthQO2BuHZ1hqgPCk2uHgkPeJPtse3NJOgFp%2BoZO96soNYOsxMfbEfIAMnPEf1vR6J02BARh9&X-Amz-Signature=c2aa936a892640d85d6df71ad5cd0f79b96234ce08f76ead14d80fc067dfba78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RYY6H6S%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCxYOACf66%2BazTvpCpb2LnTVFWxFx%2B1n0ZeaWBMKYPGnQIgNL%2Fdnr5Ia6bDU7pVYMdvUvrY6KuUk9Z%2Fu9Y%2F4UAwuIcq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDIkSlpi%2FswHmJ3mWzircAzyC8NgvtL04zAd8cIryoKFUkS1xIGpYcUC4DpxeA7boMB%2BCH5diNBL9knI9W7AasZyRY%2FP%2FF%2B89J7IlRMretDmT4N8TITTYY3hfqbkBPDVZXoeV75s50TWXNgC5PwgMrYay%2FS9%2F5N0N1TjP1xNS6yC0t2agHnWgB6NU%2BlRERW30oPs8yiWhhItM%2F%2BiDjxu2DGdhS0%2BceTNzwxp46ypACfQnkVe2G8uihZY%2FoudfDFQMW9ya9HS7m3EUZ1VoWCzYh%2FVEOFcX4ItiBEjWS3gyUcg%2Fz8QO%2B2qUDGGXKtQ4JYS46pHsTApuTy9rcriRP793oCAq2bTN1dWPcPGE7fdIpk%2FwvEMZ%2BSYgBqg26av4wSmZoFi4MyfOzHjYu6UkxDfwm9x4bRmZjCt1k9326ntnK0RgsAn7hsmIjPZso9S5enXEjieDNMENvTJg9iT2XHA1cwfLb3xdUen3%2BsDZBwxutlQ8vL2AeFxz9oOWqpuh%2FY5oNo4TwDADL6tMz%2B9ao1F0xtaAY3DEUqLGwxp71MqBbVls5GYSPLrv5x%2BsPRJMd0PQY0xDM34BD4IeTk0Oa87MBoWnFCXLhPfZeNWNV6KpofgkqDwxKOtsDMCWQ0CACw4px8Eo8lxTYl%2BUPouiMLfa%2FcQGOqUBqhHjTksBRY7l3ykhZTBejstljYI4%2FvsJ43AAhs9VdhP6aAMaz1DPm%2FPIJshQQeNDpdpuTliJH1kiG5z8I7qfX7UEsDNWD9EF5ZWedA9cBaUnnr2d5SzKIQN2NGtcLNqhjpu8WDq2DcEKjNE3gOMlQk5KTv6zC5m0BwDbhjYdtnyEYXqY0CQJs2z8WtlmD03gR2IjBx24VZGZFwbNEEqsvLDfwF6l&X-Amz-Signature=35f37405336033b4856cb570109613f80087e3ac6a37294fedbf3d74d6101bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
