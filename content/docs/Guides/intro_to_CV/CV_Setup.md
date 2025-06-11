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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4RAMGU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDGO%2FOvOoC9E8Ly0l0W8I9ism8KuouVUD6Z%2Fs3FTzN94QIgW%2BHLijjifcVsXwRKGMIiNy2OcYWXnHoaBUzLEdFEb0wqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIevJIA3dkdOiMNp8CrcA9y%2F4jrDAv%2BZBHJIfZaCfUu5siQkc8BW9dSpJa%2Fuc6BEofUM%2BGbtCmeu4yhzvrYJGXG55O9gDNuM5qB8A%2BHC1sFypnnCNuRcDdnKa%2F8jjLUoatY8cnQ0ou27DpquixnZYMkebEritSU6RCM9wSxcXoHsFLH7TOvSsiuwgfFUeUdr%2BlDoISVzVwZWEAK8wYR38fabPo12aYiX1uWDkJWZ44uVuy0QA4zlEjJ7H24Z47qNO7CbEEOTzepvWNH5UwtTFS44UaZka0AvfoweKef2VsRBmpOi3KYh2puazCdRgPm%2BfHQ2iKBNLSadggZZBNYr2W2Exdr%2BciAqIoweNzECYFDtQRRTqTV2Retfeuq76WOBoBsAh9oQ5w4dQ0FgYaOCUS0Oc7VXxRFg%2FclSct6BzjllLISACxfZI9SvSKH458e6jtQRiR0Xupsk2ci%2BzLBAY3YYHgF8b71sdArVQmg3ToPMYWQ1%2BIpWx7%2BU2EaeASIV8idNhzPQq0KpZWP6NLOPU8AgxnTUUDDKi5EXTwsxKqSBrIRa9yesjEZWKtJwvmVha%2BlRj5ITvD8FSn%2BPYF8fcvs%2FBzXh77%2FKSAL315H%2F7WyhywDIEHfpX8nu7JUzjBobnjqA%2BUlI7BYPPJDaMMrnpsIGOqUBK%2Bq%2B0EP6a0U7ld700p%2Fk31WuZYZCJMi4hixs5cnCkjWDqGAnX3%2By3qWlK7GH0SwQk%2BZkBDaRXgVdlwgC9T4dIMS4%2Bh7hRXeUbS4khL4veXtc5DOr3iJ%2FZ0%2FmsSfe49LTrSVq%2FweKUFtlRIYh4dP9wUUe1Hs9NLSvGjS42doc6GngyN2jZGp3BIb7xkM4nDAcFnV7VTKcSEnOgOSux3EzyHLK2SYV&X-Amz-Signature=4863c5e51b269c3207088a49a32789f4d69a2ed0914105b5519a737d83527568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666YXVKTG%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDokcnC6puaK9KyEg5yPVwYukK6DJJsSNytk2LDcKCizgIhAJS3Y%2FlNCdv9Fgu15opjt5VpWsbgJKqepop6VvvgW9kgKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyb%2BRr7%2F2n5loHW9j4q3AOJyF0vq9DDR9%2F8j1AOm7cjQbMRvGt2Xx39Ke5Jvua97efLKOBO%2BQWSepM%2BjTqaZ4UGBpFzPLqA7XopIoLK96hOz6Z78%2BvAVEH6DuxmeBVhdd%2BwNQ2PgyYnlbiDivxT7%2Ff3izqGP13rdpbupUSoPSXuetca%2BP9JSQFkgh9T%2BarKkUhvHmGJtJpR43tq8SpBbUwxeP7Wsf0PsUxtbK6IwBXuvsN%2FkasuNh4nGyqKdnm1B1RNY4MymJMyWxPpbKhZBa8ilMWFFQsqa8Zu8VMk3AfmAujXd4ASNanXZb8RRI7Bp9Nwm%2FmEjC5qqQd9QnoeMUAn%2FFD4%2BhgErv8VdYkBhyEOUKYPnqbUqrlzx9gnavTgWs%2BNaB7RAJ5CGXzzSN3tf1eFDRfFzy7ebiWL3EUKpOXd6zSf6wZcWF8FV8cEXmE5L0rtvqN3YYnWg5ym%2FR1FmmYWW5QfhQGWsefjOocG2vUofv%2BPn2rz2xmr9DxQ4hq%2FkwLqLSjzyCilVw%2FLpyAhPpRX2HVM2Ast9Foih4c7rFQuEA2J94zq2pRh0e59NwQnLWoWBvEyrTbdDHPHvIkkDT0lWr%2BCptmcma8zhYiaSMmW%2FtvhFQ78ZJI5A7QCvtCQFSgld1RQVvnGQIHzZzD356bCBjqkAU9PFXQgzwV9WiSCXKbQY3i95JS9ca1HiUz7VWiqnwzmgudqmmoPDRRGB5yb605yJrauQzzqNdkBKF69MXKELXWUCrf5F1zuyWoVoBwpNoEktSWnXNtY1weoZNt8QKLcv5PObea2kvkekTEZHuwnkSeEruOTzWItNbH8rCXZRx4OwjbzM%2BDsfjrEnLLk8raO0KDcUbyq6Ee6ZY5pqvE7Bx0BuBke&X-Amz-Signature=0038f0a51e0bae184cc38f6e83742adc2f536c70043ad027ff784b369f5c4797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
