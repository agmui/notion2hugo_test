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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFBQA4IU%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL5sGO9UKzZLnD3GdryBxKEs1y2eXhtf8M5IpZxKmD0wIgOkmt7PwNCM3jtb5nfzoP2KphPyXk56VZNzlWT4ER1JEq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFcYo8X3gZoj2jggqCrcAz8M1GinXj3SQV9c98E6IApIMzyjn1LulRzsFRYeOTVjDf28ot0I3kYnUn%2Fzfs8Fymwr77E%2BfXXZq3YavDUHgmLYHoesK%2BvlvqBWOsWub6IderbI6%2Fw3IrPbuTt0a3H0H6SuAJEcSMf5b8znJA%2BHHVbQ6RRKUNqReHt%2FZv%2BCwkr1kyB0Y8NsZWw4S9JY5g8SmTM0d06d2VVI9I5QAlGaYKeDayvlPs5WgMxjB%2FeqGclX2FtDUa9yEAO2IHXx5UZw25yauAi5fvryodJxKYVFZO9afjEttldRD9u%2BWwul00hfYlsZeBpA2lnotrkP46X6QTMeDbcDspPvMYPyL88cYwXB6RGer2FjPasJ%2F6VOx1MExuQViuxPylQJWJKBTXp0nnTdgzgTaMcjgyZvE3Pkpm5BnQGDsC6on%2FHCik0fsJ4TPevTXZNk74cWI7%2FibjAfRb%2Fw%2FEQJ2KVrseX3gT7RdoI9De4Uw%2Fw84h4XwzKl0i%2FnNky8a7ig4EDggkE5d36FWurnXvzWF2z%2F0VtQs5HZOVsHS%2FtzQDUeiWFv7G1c0hcaBKvpzH7YV8Aq4Quj%2BdkqMW9S5xMMB7H0HTLCmMpXjlcFD%2BA9qAY27i%2FiOHFxlUISNjTZGsm342Z9xFLoMJr7gsAGOqUBwChbAwScfqcFIUDr38CiB5bsJzdiEqkcCJCBV340WBMh8VL2flABY2YWu%2F774qZed0yLldeQRfaVlXJZQVdG1DPjkkBMnuWoc089z1zvRyyLF1vdpFfktqi3OyXkgHfUvZsgBtB9utFTwIjgjLlCCU36lVmseAgmr%2FWfb5hvXj4fJK4znGCVUCYyhIm4L5pH70X%2FA3nf%2BD958isQqCaK%2F4EM9Jfl&X-Amz-Signature=41a7a21ca1726ba08268957f11bd123041120b3579cde7733c8100c1346bb5cb&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WAB4Z2P%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC13KIQRFV9Xlooh286hV8Z2qqtkcExLlYMMF803INMUAIhAIM8cf1S4mBbc61rT9ZMMx%2BCFzgpbmUskuSWjXFCagR%2FKv8DCFoQABoMNjM3NDIzMTgzODA1IgwXsudoPQmmXQbN2v4q3AMiELdJqplbnh6ULXlKZH%2B1mRmorBKinC%2FiZ1ptWH537bOLNUn0JWNOZEyYO9VAkXlsRqi6GSVOaqFDq89pgYpjtSOjJHgCDfcMooc%2FadxD9OHZ5vG5lopYCedawNK71taNVo6Up7990J%2BIF4u5QiHKjjKrkSP1OFQhvFxS2oIN7pQyxDqWtcYQ8ckiinTcaR%2Fo%2B2jXAWJFm221be7QDl0Fr4pl5zveW2D008LOmS7tTit6IwUweTvpfumQikYMhHHm2N0w0wlbSZmnu2xZCK1qT%2F%2BQa0kWTpAA5S30%2F542HcJtQPqmn6D8Kzyf%2FEladvBsvaiOcZhP9Otz%2FKvfUe2Dqr26ZTRf5ROEBKAL54IyE8ajWEuFpMCFw9sgpoPKwPK0PVZNuwffAPB7o0KpIK0v2aAg3chMkJ9A4OO2%2FZRLHwFww6ZRNjeJCsvwYKO%2FDLCyRV2CJhoc2nDMFDwCjMhLFsRznCdMb7%2FNLHLIrufcYVms%2BGdp84qVRKUBrcSiP05I4Y2ksieVJjkWMu%2FKtInDoN%2F087R3xbqKQFxK%2FNnQZdk8AZ%2FMUPcajAzd8SyUibxasRV1qxDbs0arrcFtLyJyHXvF8iKZ93B45AoJ%2FS8JSuYv0sO5EMy7rn%2Fs4jCS%2B4LABjqkAWrVuswKGQjD68LvVIGnIg%2Beuehsg3hjj354e2V1hyVJz7Hgo%2FlIn8aXgvGPEXdiz8UZglEnJCfZO4%2Fg6HDtQGcZV1ZrECGYmrlPvlb9SNNtRRzRtWZuq8XiVOxo4LQxUtSE9NZ2nnesqfS4G5WEBjCBv%2FDP7ISRgOE0KHXhFw64RoXSlcc4zFhg%2FZnS10QGAjI%2FNweObpfLxG6ZyxXPqeOk3O%2FA&X-Amz-Signature=9723a05c23ae6bfc49a59de70433b5e8132fc89ea17a0b65d99e051b871bcd21&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
