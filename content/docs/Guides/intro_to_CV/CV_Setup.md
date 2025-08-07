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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZ6RZ6RM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQD7swZn9VTN3GWvMS41S3kDeS5ZUOeZEpZ7HT34QU%2FMRgIgeLkIbFpqChpKiuF2%2FWxXHPkdnt3c1XgffUpXxKwbZtwqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYUR3u0dnN%2FlsWnECrcA6PmrwTH3u5m3BgAD%2FDbQHoTHtdi6YqqF9KW7Q%2B02QXpS3UTexbWov8a%2BYJsPCQogMyHlIXAD2Kimpxdcxm2IFtYmVGLt1xG1vFu6XtWMvh0SBna5Qqloc%2FbO102wSLmlD2gIVLLrLKicn7adt9mZo3xDxk%2FVwNFAk%2BKlejQrD%2B1x0%2F702ITYNAPRv4zKeJ2cIoGW05B0gJbUudLpmEKMTLH76eaS9J6K1q%2FVPYFMmJWWRpcqvjm9BZ4XPxPyq6DRIG2DGQbUs5jFw2%2B0LURig2r72KyPOyD3P5TWm5Q%2F2ASmaWhnIBH17XCKinwEUanVLVWWNcwYUcvJrPpMhaVGmZIQ%2BwZEJGQ4F9FRAvsIofIg5LO6U9FLFKnkEJT%2F8tgzFJ4D7XsAncsShoBQauAFQBn%2BmKMgBCUctekWieb4iobmqo8Assy2cxQdzYo2JUJnXEtbtfRGVJQGaAJy9McKeauiEHvVJ%2B7qP4HNs1nVZvMzdAgYWzCnbQuF2SuJn5YjPEo4WVk3vbTb7PB4sSb9XNOZkyG2iXh4JIZR22yjq2CwGa3FPz7yrbXQPYDB0EPFI52A4HW%2FmLyN%2B6vXD8o7uwrlvztRBr8YAYe08TeQ8MOSSuTNJ8hg6tcWdSUMIa20cQGOqUB0cRa6MB%2BWzsQZhzeSty%2F7IbBW7Q9DT21fqqCEPO85nu4a9rwwPFKZHvS%2FyQvIAwjUEXSUIUXkhifuR5jkrXC8BWydzBqVfO4xF1VbuXpuRbeQpn4Erozg9Spm%2BF3Zr3RHm8T%2Bqhnz5wXVnluMlWBnVNhcNzXTypCExOYep9Eo1VQjrUPbwcjhzDZ77KTxOwCrZyW2a%2FXI3mOpr6VyhmDWIvV0JIk&X-Amz-Signature=0e0b7dac85c6ed67e412247fa45267d00c50407059368a053b11b0a2c133dedd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647VTEOJP%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCyVsNvvdO%2Bmm1AF%2BvL0VkCQqMJbp1NoJFK%2B6GBuptZmgIgNaO5V7PQxEW3%2B92xdUrBHSzqhRcpWTxHmgxhTxGF2dgqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPDYNzl33xVRb%2B7dircA0slVRugNvUgFz5zEX2lyobzBIClK0RiLuIDPxyW9JI8E1kye0WBOlPaaWeZE8ZfTyo%2BbR1ex%2B0DPpqmiV75fPtzxnquoURo2jUHXj94euZMJrpZKzkyq4U%2FCbfXGp8M8t7L%2Fo3j3S0gmDmasGKnrHgP1BE0Xy8SYaKk9rwd%2BV4V%2FoUEj8IjMYCbhFCTJbM62z8JHsE4S%2BAWYfYZaTeGH3fWUmAAzhlg%2B%2FlkFele3bsj%2Bk3L5Ukk05Znu8paBS%2Fbc8nyNcVdr3PGr5IH4w7KB9XBFpgbTgF4mvxJpzy3%2B%2F8LcXLr1LWTKmq3TNGqO7HI7UjSgZLm0EoCM5zn3IY4T2CXq2RUI4r2J3oK1dV3%2Bijx1PiZivIr4mQQSmqQvI1SPKxSmHSC1GqYsXdoh004zUrlt2%2FLpo3h2wBHtE1b3g3FBdT2ufDX1WPWGpCCkapOadzPhC2x0kRxl0%2BJF0jqIRLTiLxd%2BRpL4QY8Jjvl1chSNVGnBaihqWSV2uOA27NhYX5y44pp%2FJRxE0KF99TqMeiM8G28gSBp12Rl3poWXrvxI29VvcgemCHqzST8VGIo%2BUnXDI4aewMk9b%2F05raBiStrWM8JAZsX0iooGWQNER3pjRCsj1WJr9aZha%2F4MIC10cQGOqUBpbPZxYfyrf1S14C0PuaxzumSB6XkRZdtoYKkyBxugOk1z%2FNw8E4zbbT9YdjhskZ1qK5Zg82N%2Fa7ZPf3aj%2BIJoTFDxvfheI7RjbGIxuxhEMkswNmb1Cl3YnPLyxTP%2FjCHueDtsegsIZCcEI9fSovhex3QE0aR11WoazS3g42dPUmRP5aMV5kRmoN6UmuwxZMnXXllY1SzXTNhojdvnnqYRYe85QWo&X-Amz-Signature=bf6dfbfcc26d99b3be5f9e115d0d8aecbfa5851e09ea62941834116a6874100a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
