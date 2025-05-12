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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A7DOYHX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCICFyGC%2BphJ%2BvTtYIcgf9T%2BwpCQZdJdvQo7%2FcJGl4%2F1xRAiB0vg92kzxj17DCDf0547G%2Bra6WUVVDAniHbSceWQak5SqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3JRZxABLD4ClCmF6KtwDETByqWpDY5xv%2FWW%2B0PA8i4sr5ZpYAIGCwNfG5qZxAHFgk43z1LZz8iK%2FEtMIspcXPNY0oVHPFHY%2B9ncougT6eVFSCenjzHMBasJeWjmZgh6J%2FfRjZTSuqj3do8VJhaZrja%2B3y4YvjU0E3orjR5YSAORJC3iWU9KvF9ijEdaLvuyDKTVaaayEMmarfb99xfKJlwrKFdFFWxHnP%2FesLa15ROd%2BlnzL7%2F7uzXP8mRu5e5Tp0WdeKQpXO%2B1RkAoZNJEwKDM5%2Brb3olK693tVNZC4sECyKfxHxcxMiedehLxxW8grjIUv5KVtdjtmiWudGxv%2B7CtagNGjSGcmXRnc0Sxp7rxz7YaitxtvU2XExtnwPT7qYRtgpp%2F9rfuUCiNM0%2FcuoujCAC1GIQF7tOA2bEvOcZ3ulQGlYnquG6ZoGESmeBx6xM40MCpLVQ6D8tp6KJRElISVlfPr1P58mQWuU4igCIMaIlvlA3UkXs1Igiomx%2FDvpZwzZ6jupaMGkaHABM4EwfyR0m6YQ%2BYHrBqBmP3z61QBZIMyxSsQ93yQXDUUVuU5ltWchpZc9n%2F5jz14I7jy9BvMLN89lhTRft0eE6OinIvUxvzwTVEni%2BQdFDkTmz3Tq91Pt7tNKhvj8HIw5reHwQY6pgEoY37v3BjI2usJj11%2FCJysc8KtB14zMOT4aY%2B2WoafyS2qHcEj8IIhXmuy27GYSipy8lcPo%2Bu6tBeo8QtRPi6f6L%2FbJ4FNsMfAZiRuXSSjXDUVRfqzVPJZfJcDaVlHnytaFo22g33%2Bngl3j0AMuNu%2BTulsOc%2Bsj%2Fylxl3dms33xlS076wbV6eSJ%2FE0kooPbepZtn4oRWPzBeJvwcpTm%2F%2F74QZ0pRy3&X-Amz-Signature=4a5fbe6a93c7213d605a374adbe1ac06c2c8389ad5c0bc61472417e0e2da077a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ7ASCVX%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T121606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIB5H7QtTO15k5dOrYT9QbEODAFjtzszjTMSodOwo72w0AiEA5WAu084zoXYj3WJHJRbWbYVE8HjebAqdWxg%2F%2Bi1huicqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL7UfXB%2F%2BQLPOYuUjyrcAzbc8no5NfItgMUhPKqxOnofb7x9yCnzh%2FEK1FrffobkxEVtpSr0%2FZNqxZQTzu6z%2BkDmQrnFcB7I6Db%2BF18LvtNesNSphsdKouf3VSHz13hzYg%2BD0XrpghBJeWZW9D%2FLgCm4D%2BznTKHspv15k05hJQsUGbWxLUvVHW2WUE2K%2FqIBQ0eWKNcw726iKMGwjB0iAeBWxqttD3KEHNDbstgN0oZrPDRaimxpDEVkZYb4QXFAs%2BoLVpPiGUWcwmIkAmfUoOmtIbkesNfXDFhfmoY1%2BKewuJMVyeccOryd8OLQGPOaiZEibncAXuwUzSSjhdhKOD1f1VdrJoeOpGZANcbeWuZfG5qRzpxFvLmoHu%2BuegoVvSdlINsJYZQnH1LAi3sPVZ654VsElwaVNcizjjh7YF74P0HwnbYSwLxJMCKckDe6qYjrczlJPR4PJdZfH4gDQgZ8xJXbqQJ46ZEdKbCeHE79yMxzCEHcp9Ovb2sDqEse0SE7BfY6sFbTf99l475OvaJNaet7ZCogjht7E3V7Cgb6Vvq34HJcq%2BbJ7ktAE0cGSAhdBK7Q2AsfiqiG5CaDLr3VqfANRIl76Z%2FsLaccm2zRJQ8V1tCn0fyTFsARoSeoM%2BKvsoBceqo50eEoMPy3h8EGOqUBqU7X0FTMUpPSBwKxsnnJDhRhTVpupZ59iv9bJZr7fVrNw5OlJp%2BueE2bx1qsDSCm2sAYx9cEPtm%2Fi3XyNTRIkQXT49ArDql5Rqk0HLcQ783HFydurg%2BGySUxkTNRsWgknv%2BMiUOGhaPQ2aP5O%2BgDsAZ8RaJQqsRM1ADYx2o9%2B8YBKff%2F1u2HacuBmoO7%2BahKudHXDNtp%2BT21AzY5fgSgEOdrt6LR&X-Amz-Signature=fde0ec6d774eccdb4e86f88c8a091c6c8844be7190dd7b01bb1950a745ff4656&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
