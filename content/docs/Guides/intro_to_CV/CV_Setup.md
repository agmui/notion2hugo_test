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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IBXJNGF%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIFTD1q32mPpyhGBPwjLR%2FUx1o%2FMNC39s2luX8m64LnmyAiEAje%2BsSqS8zNAxXnxZmCmZNee%2BnAAz9ZlqqakVlyQ8B0AqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNO4dtIhnAD04L7f8yrcA%2FLsgoXVQ%2B3hsiQWSbbjL85D5a%2BA1CgAOQxhZJ0%2FwNiup6AYDFUMgogoCIiWYHEIQJbg7KNGnnuu8Wt0fxhsWU4W17Q8OUCNONn%2FTlNnPE%2BG6%2FqE0ynUOo0mOrmEwK5TNWNO%2FF9eBWn4ENh7fcgxVq7EF8ZRl26YCBpXtKeT8JACdHyCWRaJiOh5iGeAVxl%2FD1MKpJlyYGEgkn%2Bz1vmOQbSsOmKinKG1545ummPu4fjL5b40cEsvzfMwruMPPcSIiWIbRwWmiFgFKPwloqchlXPEw1DC3c2qyfilghvHPPpM5iRqp3fQmfzYpmIlRs1okMZ56wlfmB9u%2F6gJzQsHr%2BICBqQZ3mo%2B9Tpf6UPEXglc%2F0UBx9aeH2w78i55kQ%2FFYZRppxh9KMIK7nEWZveRMhNe8UZFcWinzpVb9Bcxvc4%2BQ76FzPxZHvFRvzIyT9fPlxYggQ1TX1VDpxOLH2iAgn36%2FNdPvS7OtRBOz1VP1zp8TZ7jgTTffDMb3fOwFhf4f8hIYQ64PgrJNN1mvgAGp1vaF95bJIqo8kBhAPVlGu4IpSI4JRvyAHW%2F0CrazzfBH7BDgZ5OyhsRxjdBRKGOU7r8AbXs0sEJYcPBjLzY5Ak%2BkKFIicahlAz2kXQQMKrY974GOqUBmScUXKfqBVBFrzOtRHSbS8lgj5S24EGzhBMuABtdae7kZeE2GxE%2F9awMyPKWamAHQXmBOCYkrVq3aQH3kyvqGC5Goob6UUHKbWB4QP34%2FUIOdtyKleIFChW7W%2F1mQOZRnVlUMyCwIvU3G4ra9vbfHwWGk9J%2BHJHVkW5yhNj37MtQeeqAICpzI8OuD7JC13f25FIHsMjoWF5GHVdmWIBnAGtckc1T&X-Amz-Signature=2a4da9172f738737bfa0066f679885b6e0a3e2f8fd6d1045d9626c00e679d7f1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BI2QJUI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCID6iK9cy5FmTuu92JFdxCOhjzMfH7bJZgjj6rELk%2BC9tAiEA%2FLfENX%2BYXOhGKTPM%2FHfAgMOWMMLKE5rVNhiQ8AIymgUqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJwmbPBqpEVwyEzraCrcA1IxrhXYLb%2B1C0M2xjzFoP6wqtpb4dHyj%2BDNr88E%2FoqtCBWPTU6QDl0AwroLQdQNHqqFCTf5nFzsqdRwyqdoosgQqnvR3ch6u7%2BlxrUhuVw%2FphbZbrPfEiYyUbAUvyg%2BFZozdlP2MIOZsYneFi1mZSZmSnt%2FprpiyoTgWCMMhM1NmQBfxBolLvGE%2Bua5D3gc5mY8UpXRZUiy%2BLE8cTN8vbmdB9jIum4vdnI4bN9hlnWwu3Z7WMNYxN2b4JUK0LnNonCmmf9JJd16MJZKP3VKbANYPad1Juj3BzapXkr0%2FFozSHdFhl97%2BoH7ZW%2By3gErijNqqBfR7doDPA%2B9fOIS0bMcDijzwZsDKelYy6Lsy1BPU0r978eDo8XbhEvJQyEGDoCZgXvgio6tptS7bNhAPD7X0rqHqcgmGHpMSnAz5KkxgkrD7hnpUCpuCDVPEBCZsaSrEYRh9FQXotNjqQTinULo7noPdBNLyFXTDX9WUQN5cnlr9Z45yracdM2K%2FMG%2Bs7I%2Bidxn%2FXjCQQkCWIkdx5byDMf577pJGLTYRwtx1b1vKtQA36BBWmSt%2FSo6YG00Xj0cVhQ0nbBgBcOK%2BDiIntE90MCsKnkB1QiL4S8yTKykxMv1EydjHKpoSmXPML%2FX974GOqUB2MBbp9egctj%2F5j%2Fztgrjj69wuTnNQMPwYkWGlixVO0sqFTw1LltTsk1dea%2FR6DhDhXLcwh59K1Ycde9O9vwz3Drti9660wIwXZyplIggBaABCWaBydx2hVwNq%2FCIv0GSYtKp20xkxVquq0StE8m8v5A4LcBsPnxTht1n5FSpqcS7ZzNEm8hmG6UXTHAhSzdLxRxscyxWF0AS0QDVLBC2okxcshMj&X-Amz-Signature=6e9f7bc21dbb15cfffcaa69ad857ef63910a4c2be8c5ba762fca80faf280e7d6&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
