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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3WCELUF%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC94ly6Xfk7An6SQNw8hAz6YeZEQN5cjcf7JKCQczhVrwIhANLzht3zY41gqLKayxrsGhLXC8uR3BW40G%2FHV4NipEq2Kv8DCC4QABoMNjM3NDIzMTgzODA1IgxY%2F72j7aPpHcA34hQq3APuifOGXKALED3getng2%2BUpCQzjQo08fIRKQq%2BmY4a46%2BUzm35aJTuZpnf8tpKn1r%2Bih2NhX6DdVUuKh7XLHjBlpoBZ5RDcDOnoZ0gcobQ4ez1q%2FA9i3qmukRShR2wEzyMjA%2BYhuq1IEizbJDOGlpEx%2B%2BMDVu8QnFIyV7bBQC3KOMB%2BaQUCK3yhNpeJzDZDWU2s4Mt0eF3uO8e1BpG0r3KEjicT8GxUbfZRfJbwqHa2mKmq82zpRshYOLavjqF8uW7tqp7WII7iMrRZThy7PpI9PuACy%2FEoJIkXaHXYUqSrRGY0lXMmTHV0xsrhLqfTuUmZMCS5VY8MU6tC3PSlfRRd6UhykS%2FfprYak%2FwxJzaod%2B1B0%2FMD%2FilroWDT6eST2ctNETwXs%2BPbfEozIgN6Jg6aasgSk6aGbyTtRSZ1m2rFM5WG6g5wSFwFl74cBXOriWGXuPfoUY80sdMhnTRCcOOzlRAZwqUwK8TwqZIH8fBTRj5Rs%2BUQCpT8Tjt7ag0oYmkl%2FqBbF4UNKwa2etd05XJ%2FzBpdG4mZ%2Bzn%2FccxGSkmVpKtxdCoQllfkamQB49i16WWer48zrI%2FzzjCMlHxPKF7acGaByBQhqMnbP0pjJ75gCN1OqQ3k7%2BnVyBeLgDDD%2FI%2B%2FBjqkAZcr5qH5PIGKAvh1hvq5cRYhjvK0dWsWfTFEocJyDwrjMi94I2h%2Fg5LY66PHl%2BL73U6I1zG%2FkXtUmcSYxLY6QtiRPG0jm4nF%2FeGhpHoVu9G2Rg5L9aTPyCp6QrYp4se7IkZMqoWR%2BNW0GW9FEqer0DluWcvKXvL8tNc1kxlu4vUl1O5lvnFDbEEiG4do5hHDWhl96cEw11hG9%2FDfM%2BHtYwUkgANs&X-Amz-Signature=b51d16bc755943b0f18953bbddd93ff07434b810da35bbf427004d3393648e85&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CCESTV3%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T131927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7iCW7X3ji3Bq41Kp5cOd1C3yJj1z2Y%2FylmHN9kw5oGQIhANQ2hSCmIC20G7R9MUmRr%2FcEa7ZVps4maPFkxpwwJ1BJKv8DCC0QABoMNjM3NDIzMTgzODA1Igx2Zc%2Bis4ogP6WdLcYq3APoEuZuRxw8ZBUQY9RXSA%2FCXstwAaSXjRirOpG38MayE55%2B15VvE4H6bQwvT0ZIggqSoHiurKzZhkzuWsqll1nkatzuCTUKaEXgeFOArksCDk4zhG76QEcrg5Tfmq1E5PfJXD%2BlwhpnoB2S04q%2FBXzIxVCaLTU9QB9DxYba6J0VtFvkO8M04UGX3FR9fLrSUZsMYrzJSznNmzZX%2BrEFS3l1QQjdubJwY7Rx7CHyrL515oS26IFcWS6Dw5YyeQv0bQ4Ay4zjBzTbCHRFJQ4Ka0Cg1b3poLNUVPuRxFWiMqyt3IFuQ%2B6aXef4YxVqa6XMNamDGVh3jdqEx8tRAP%2FT8rmTJA5VwduFlTO2HkTnc9sWkv8oYsNmmgA43VBFhzqynEt27OfGp7a%2BiucDaC1KwXHx9zqXHZ4XaxjNl4AXH8bXjpIjYlki9GLmspQz9i6t7YldMfCC3ZvPkt5wwX%2B6ISvBHKQLXBsj7i2bibsh9MXmAC0o9Q4dYFq4VD6KkzekkH4pESDWLWJXhz6K3DM6LramxnRtRrbUFajxyCdDJ88MHbNgY6KPEyfKJmxjOiZcgN1PbfhnnIlSDSD690JE1l04zHjifIoSsMuZCyjwzxnaL86xgcQMoL%2F6U6hixjCO24%2B%2FBjqkAQv3db0HC9MnwnNfabrEkOlDYwbl8VDX%2FlGjA5633u3C%2FpTS0rQnreTADmpf5RgTmuzNFp69Zlh3GaswzGR8vTUmhOUsGOUSvRG4SVha%2Bs9NmGsMQB%2FBW1GKgOoibyfmlP12XDYQthVtNFYTqN4%2Fgz1B6msgCYeGKxQstfwdKTFCq8UsGJIz%2Fekb4MqQsWHkeAWqyVfUg6J3ExqOk25hu0O2ZX9b&X-Amz-Signature=61a1afbd4210915d90502a6204e884a21f61923bf39b50ec558fadfe5c7f1d65&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
