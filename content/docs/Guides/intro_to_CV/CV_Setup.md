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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646SGKGJF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6QetJQG4OlDk3PL1hBBZAv4xsA6RgLM%2FwYEziZAlObAiEAnLmhiU1S44YzTTinz9P7efRo%2F9KNz%2FUcNr%2FABleitU0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJdBa9%2FSCsBsGClzXyrcA5lm9%2FGfMoUx6S0qKtZWGFsw9OgZ%2FJK2qc7XmtvQ3gYOJxbAicqKK9F9Mv1EgbzVSmAoi6i6AthocZmN%2B2zahGnDDaIhLfTQ0ODVEdFgDNTLAUMPkS9YOs1wHUIoncU6SeTemfAPnVyPCGtKu0sySsSstYo9xJjWVjISc0%2FjPJj9YHGFomjuNSm0L4iKxIviSqHavc%2BJWzlwmz0fX87JXpNbZaM1tS1NAm8hUu8ZGtsi295t9eYu2xLZ3%2B1vyKSGvYXclga%2BO0ZRMm5XPoHchOfYl%2BV2CuNn5cPjMzxXozBvwTaJPdEo97C0w0YOxn9fBrCERkPBWGfnjqrKi1sgSfdUhvNWR7cM3lKE4jJmHSBcKtjK%2FZQ%2F3Lm5qUwPApgHqAzxW19wEQcALKB4r4YjMoc9pJ078X9Jo7Y2x%2Fa13KgmNO23ui0uNVU6gf8f9Q4LYqUc1HhEFzjLzbltH4yCQxrJmyFqA8NkXCyXTAymvCxGTELZ%2F459WbcHtuFjIQ%2F%2F1mnWrQtMsNwAkebPbivQLLmhM7JLNU2EUoe%2BhVPZNj23UQV2iiXg1aA%2F6FHaNmeSnPO%2FUSrDp8DZjkxMYHbs0URlLSe7RipkEDeOIcF9Kq3QxoEssAGnEv28jrL8MMimxcIGOqUBm7MZLeEui%2FcYuSRD6Q5wDHw2qS7K%2B5wqmFN%2FsA0D2E4iGzsPmfVxSsE%2Fyw8Ta%2FSN127WTbtL1SpPRpgKTqfuc%2BXYlvMUS7ku9ybRcYs6UnIEzknXQAWGkOwYbmo2r3l2uT5pU5SxTCWqray%2FfiRJtJLkddnKOd34QXh1Z3u3enXcy6SltREdD6dsAiyGTyq2Vr7ggdBHgWaB1BEwnal1Mr58vokI&X-Amz-Signature=2790ffcc27bb107183f4e80706077c5dc4aea9109c71c2b885902c5349f5ef4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXW4LDCL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVqyTeKXCvKkbf%2BYxf1fjhwyAUr8OuJAyo7%2FtoolESXAiEAzeWrjVqq%2FV%2BvtqeLX6MA7gJDBXOMzr%2FjIdGdFNpyWTsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJ0Zni10dWNQY5qdASrcA%2F2M%2FGTJLOS9S3fVSrlOz3MUfaTxEYv8JyUMFsTCiBJpoRf7TZilROXHTy6Jiggw3y4i%2FtxWBOFUQMOf46k2229YGNeyZ6mFbymOw2%2FxRlrYeYz4SUIRjCUGZziqTovG%2B7X4B7nKBGC5cUw5aJAH23K2zUhH6HZLKyAXCwoc90P6YaJ%2BfKKfN7nvX3tBx0k%2FGcsmBBX2vN6Dtxt2V%2BVo2MIsgiJRbgP4WQ8GirXb6%2BMSB%2BrPtS2fT8S6svtpMtrTqsioBl9L2RXKs0TyKAIEHODTQQ23Vs6KyhBM5qS%2B8WHlgULZLyWkr6%2B5HuALAt7ctWh5%2Bti7MlJmX%2Fe%2FgxnVuYoK0rU%2F0C1D6U%2B%2BX3yk9QlH0Xv23580zJZyNTIMGf6eKF1vIUfjR5EEP%2FijKiN6iTuG9JVKfBRB7P1hTFHuDwyP%2FOyTm7CnSnOoX2xVzV34s%2F%2F7xbRfiNUHZ39pFnFmealQHYBJsUoCx9yM2tUGqw2sTcb85Rrj%2F5GhcWPBoKIv0Cps03VQmtS3KjrD6O%2FCq8Af02bHUXtkhKUZEguKBV4yGG34ltRH4nlY2p7P82lMkMOCEG8UjqX1tFEiioLLujCsBPQdU4m0aR0N%2FFRoz3DKU9yAlKZKQsr1MYgsMMSmxcIGOqUBltzgqMMVKVJOtOyL433CM8VNu5QnzNUC%2BS4uCcDqLlWR5%2BTsylrGJMNQPAeE%2FXkdjGziNkoko2WLEp%2BrQgwBCSZ8eg9rQ3THDfohaP1Iy%2BRFpA1anOo4omUt5OAN4eZKpurp343XmfTJFb%2FqEfJclkofFH%2F%2Fztq6NwMjMfXx1naAm6vgXCtneS5t7Q9Czs6O%2FrdFPGsHtyGpYKI63tExI6AQGb7p&X-Amz-Signature=c8e943023aae12ab020d10120c2e28ea5d408eb0e33f927e11bb5525650015fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
