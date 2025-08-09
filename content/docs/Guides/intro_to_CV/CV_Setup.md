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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X542LKKA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGVrV7l6vCOuXQlTmIy9D1nd%2Bkg7EJ5ujSloZ5X9uJi%2FAiEAjip8kDEAg71cjohENkSWFEIk2x5rGYH%2F1CdvbL7W4vgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcslQfT5rm973hMNircAxFV98yUP1C2SZ5%2FrBcwtaNFBMtqe7sjPVO2ueu5tbHpIcoRDv5Ph3iW9ipbxiaxXJqycCsdG3j%2FRjlzkpse8VVseC3F38PFChq5HTPC%2BbWVCSRHrIZu4uVLzn%2B4WsrQ9TSNunXvFoLikU7z5nUIQBlpISQ3INTVSr8duKP%2Fof0Xz6wIANWNxBm%2BdgmWATxa1lMwhJv5GdtnLpobGav2SR23kdJx9UjSOzBzW8yjA8%2FwzqMwQPkDBxtQn6g2N9oe5nmn8tnCaRWtrUCqKmi3kXr6M2Wo6rjv5nhzJTd7ppIAM31cSdsPT79rmxAL7awRCJBzyyXc4X42IIjHPW2rY%2F0iZtPkhugeTaiqxk3p883fGXKqsltz8e844BK1EJx5m9K3wC8MLsbx8EJFQxZZDW6WED5e7u4TlkbwW3WaH4bKNzNZg8nHR4ubFjfPGJaHTbLYwEtYBqGVsy2jtnmxy0oZj7pDuRG45XvIyDxtemfdauvCC3nXtMrj8t7ltJPNOno5uFpaJKyHs27BAGwDAbd%2FAxDyAuoXla9S7FYkEjT07KnNmsBRspqsaThei72Co4BJUCmBmBwCeASmc%2FJAU4Y63T34UjBwmq8Xp%2BaKvhbadHVVW1aoqRNMGctFMKDE28QGOqUBeS4K9gp%2BwnrO1eFRdeu3n5w8K0hNu74v6JceQI7%2FJxYSXfPxC9JXisQW%2F1ZTyq2%2BKc9W9OEZ6a%2Fa%2Bhb5ziDmSZsebIROsg%2BvZmIsZ6LOYsSPRQhvvsWg6ih5jjyVBIneNPfmPNuo12emCWs%2FIQBWGQLFr9s2t05MNkJQ6ocI9Ytzi1wMkxUWWhW%2BozwnCXLJ6RC12mjjdvzMOmzfaQTzdY43Jzmz&X-Amz-Signature=b98420576459c3a762dd79486cbe2c776a3aba48544527a7ba7b9ca1f58e84e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKTKFWQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDjP0bs5j4YLWEw6MVpYHJINmg3Z7LAkg3%2FarEFwCqhjgIhAKvzjArPuWYmO2uABIgUexMRyUiLoO4PiAHOjwl5KrHlKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2F7x9Vdy4v4sZxJXUq3AOKwyFSOu5GsArFGrWbqKPrwvqgrqpAO39kujA3nygZT7DQY9RYyKOS1%2FRV3211DcHW%2FCUcbofCm2UTkFasqMw3fxsuVhqWjkMcrHvCYUujdC5rKcszpmA%2FKQ%2Bkf9V5gvzhtcY3Q%2Bc9fFQbDSgjhn3W8aFtvxpsY9nkuuCauId2DM%2B3wETBJOQiZjlE7kXMbIpvvgbtS2qrANN0xXXGwPyNPczzreCviU7yZpp7XZ5RvO6YWM%2B71M1Z7%2FH8NDp0D7tXc5mVO1y1DkfjIRfiJ7lJDqTPxAMdLHJmhKsi82%2BDxeEX4IAt1dzLBCzwcqClgPBE5DyKOfG26PeJdwU6VJCXXT26Lpr7731M5%2BwX3V%2B4P8zOfc7C8mSS2QQ%2FdR4XTLYlaCS6%2B%2FHIIRKSyNXF3AptAwfV5K3BOKb6tQh%2Bg1Kvsni5aJpX4D9WzH5LJb0s1zwHof%2By4lOT7SAKBRAN%2BjGnclUfAPPkRZf6YYHM3kS4SxG5yQikQasW07k31svVGq6S4cEqoGY%2BcpoE1886gFmd0zNjBGk6y86f6QcDyEs3%2FUVB5NE%2F9%2FIdjtPgVtdThesuzvkLEuDB9oxPR2WLQpTlF38S5ictqdXFAf2EOU3PPh6f%2BjA%2F7xNdRZ28wzCnxdvEBjqkARqOQgKb83dPBVhxT5UcaVq0TnI9hs2PI9WMRAFx%2FG6yk9GhPBoA2rHM5hFrgBJ2dUQnyJe1fG%2B7Z7IfZQOfCvfqkNikjyUGjT3ZnFyUAXdC3V8u1LXWw194JD5cpwkoY4Zj2lIj42GW3wrxRoXLdACcKHJsbKEiSXqcdemGGuSWhKSeFX6W%2B3MLiOzhUSRJ2cgArI4DvZD%2FeIFRo4yRNwIWXl3F&X-Amz-Signature=b37e5b0f91072daf5cb8f7fa09c26f16ee5309d073349e08780d50b3e415593c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
