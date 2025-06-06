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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUDPGZZ4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCx4gdPReoFSo6%2Ffrmgtsji4dsKTyBeYYxeA8D4WZFYWQIhAOcSDZ6fjBv4ewY0scxaXkkohqwlXB1jUAg58l2FMh1SKv8DCFoQABoMNjM3NDIzMTgzODA1Igz4zA6cKQhrWjQye8Eq3ANQisFgzvlb4P%2BQycF87ELYXw1YpSvtPZcJAJVAdFbgJpcM3f3oGU%2FSxAOzkvN2YnbfF8cK23Sx1vXx%2FyAZ6ITG4hpCTCYV5V%2Fe61eMbOcJCwfaqIGvlopV4gjtEmzsykYozkEKrvNYHHah2m3UVNGCpauGnQ6CKOo7pqa3YBm0Gtporm3%2BaBco8wHcxnjpHLYPLiqpT04c6TUhLOCDgWbJFLz9cHyd%2F3DXsHD0wvr0RAo8IPPPzD6LfxnO4%2B44%2FBzaBRu%2B4hntPU5AvLzxzuVR2iOqKFNGnF%2F9xELK3a57dNyRjKsY%2BMVbI4bHbphVmrRdzTYr06nTmLF5SEw8mSRVTXyOJ94WVUFYGFzftDRsLmF0v6kiI%2BDR9lGM13WsqNHF2%2FBm8%2BPEL%2FyqsVZpyFccBHcX19z2FVZc%2FpiAPuxNp8P201cUsVc1silYox1RC72slLxyaSaxYNgF0SXtLt135PGtTy7sYQnTXw7l8pbUtbuBLk8YrW1VRQjmAyrFTYZDdm2tNjAc2P1kWSMw00DL8GlzArwL7H%2BfN26C3UjrbFUiYxteU6eR77mZ%2FQcJq%2BcoGtccMjqyRJZSYVPcBETAOBnRntjW3TVPduyRDZ6Bk%2FxJnK%2B7nSVlYOx5PDCs1orCBjqkAQh4iv2fJE1ecQPfm3mS6imzzi3EWVDThk56fLatCdx8CzBAY6VRL8Ik6mXcBnHIFl7xr68exHh47rMp9S7usS%2BPzCPsOgJc73Cdt1r9rVNf7x7mGxbpxyW%2B8lzQpR7JshcREjJU9jx5aQpcTl8T%2BFm6eBUN%2FFMqilg6wTuS2YojesSDwfyiEZemcZ7GoUnHLPsEuThz7aVqmEB33p7UApq0VaS2&X-Amz-Signature=660a09256779993184b8a3a07adf43657f887b50092f2e02615624959ed8dcbe&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PKSEY4K%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1KiKM7469hBoihWUP8r0tdVyjatRSaYhg0BjKJMH0NAiAT0zuVkvCNdxtkmOSBXsBJsiBqHBteMRPh7Sxpdx3diSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMy%2FoxYNMYp%2F97Tx3%2BKtwD31m%2B7%2FxYM1F4aTkUQxFAJdRg2RVuRV%2FM8MXNMjc8iUIkGp4zB8jlzfRXpvrFEVEoaIJ56f75jjpIBtG6Hz7qISRk8f5V8V4gBnvHSiE0bFdGlXZuNK43CwmFkD5h69bEAMxQpiRCd7huPKcDbA58%2B4KrV%2FEUwO7UTx9KeNRkjeKS1Xt1%2FQR1YGRTCKFdL6cxwf%2F7I40GjkFllzCfPpCgTylKJpM9AyHv7lYHuksh8LQnMhwjgRIDQR14bYlAvS2jGProLgFZ9tmbHuvwmgdzrh6lVRWfMOidZgfHESINuAI%2BOTeh2%2Fkv67GmZw1gd5O4Nkk96swzGntefKbItPVxIAMtQUgJ3pJcdGo3wSIGGSBVE4EkKl%2BtsdPArkdj8vhFvWxT99oUftWas0K4TL7iJubl%2F6XTGOyAQr%2FCx0RcuD98aewW08P%2Fl6QyZ5z5MpJZIhVnYzTctpvsN023AHcxnupYMk0%2FA%2F6sJRarZXvrREMQrwUEC3GcvmQT1zqBy6Q6x8TOqRcug3RyHfAk0sdDJHjMjZzurf8R1kWm9QIJoM7rmmxmNEWtNwbHt1iDvCllXHpNcbALOaYDiE78ouynefo0PGWb7yy4vV8uuTZe6ZFFNvHyP90ypREZ9iswycmKwgY6pgErlQuUug95wRYR6v5%2FwqUsJRSJOEJCiRU4dfY2JC97Kuo40kFRYNEghjnovjHXZh1JsPWE6%2FaWEPimQ8cQXg9%2BEOb2vMoYVBZ1kd6jn02kEN045W%2FxMMZvYkj5zdjmDS7e81jixk2O5A9gIAF1yuZyHbxklskaNP3dB%2B9KfsbhE0ancrRd%2Bo6j33L%2F6SpJ5FpJ5vCZCBImXZyzJiGZRUCUqWR8ojFQ&X-Amz-Signature=4b0e85adb202791266cc446595677231a615e77eadc4b2642c058692817137cc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
