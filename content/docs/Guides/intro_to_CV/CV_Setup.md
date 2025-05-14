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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EEVAUCJ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDfZJYF1ssbp%2BlW94HY2Ub7T9MlES0lQyj%2BiWBYxoG7egIhAKwVgs7RYM9ZVoz3uecyc6LB84%2B0yf%2FgwrFwE3hEqP9fKv8DCBoQABoMNjM3NDIzMTgzODA1IgwmARmuknWZ0j4ksAUq3ANTtEf3kGGWCTxNX%2FMfDFwP5oDON%2FkkXqGJ13eO70ErdqgzjH6DPC8gNlSbIoNQ6HvNJS%2FEEO%2BHeu5ggENeIbnYya1O3r7YTHFnHHWHDvnaObNs08sR7DYTUbUNysprxDxy0wOGSIYtZyiQ5dJX3NbOZl5GY3Wq3G%2BLJH4ddGaqwGtEwTkB8yE%2BbqVGFFVCNF4krnEFIiX8PkCsTRsAlJcp5qi5Mpbfpb52kz9QwjnXQJewsBk8Nojx1aImXdFe5ooB7DniGxlKCrr56OfUOWGwZgMuH0IUv9Ib6hiiKpTd0B2w%2BK8W%2BWAviTNMPjVkgZKIpQGk7dpWA95HtusiFdnv3IZQRdYf6cC9pyqrx1iDQ1igyVdAB%2FdmX0%2FgZRCZVic4uGw6tcWOcRex7OnY9T7S1AFFHRFcQX6E%2FsJNu5QW0rkZer3FSr9Uq%2FzCbinbw8pUBr3nA6hfec2U7GQMF7JzT328D4115fqe9CQgNIHTpO0%2BCZHmQ1ZCfkVjXkJP6LHdlt3oRuCQS5QKLjK2OMIFQsNgPTqfBzhUZB8VEf%2B2ozDHPH0xCi8J8E4dO%2BDoAu9RQUa7uXbLfcUbIl2Kx5FCW2bnFXET0qx%2FeDtvRQ1gErWwd5xp4th2dvsaHTCEiJPBBjqkAf5SevUwJzxTUsguqFuRTpLh2M39j%2BLBTRsIoCaZLFG6W9YoquuIXGYo0CzBEgGLCdKadM8C2CY1xXabAvIh1gsmdNaERy%2FvH8qnNIq7dVIcNlpXfxfKUk6KcXEBNLGAawTtMyxjd8W0kCrTQeM6aQdOtE6GyoWJnE6T0Z5FViiT8OgsU3BERC0VsRdjIV78R0rWinZiS%2FqH82k8O0li%2BC6WK5Vz&X-Amz-Signature=a5169cd4946c87b365dd21ca7edeab4b128e3089150b91cc535f23f1c4a68a15&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O535PLI%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICrJA3XI0yIVP4w3XoDO0VeXocegdjQ1gH27ZUR4IqNAAiEA5FVd6mw0lvNXBrvaUw546eDTNEnXFrkh2x1rVVeqdskq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDHy4PuwFLKfpqPFdiyrcAynEmWXDrg9uGaG%2BO2%2FwBBxWZoQgJIDuo5Ctm7Zz81lYUrLe7OfRhx9CqbI7KNl4hghKN%2FcYS8cfCISWy%2BH1fCjnOkq9X1NhmpW0nco53Ohhb2sahn2OCUZD7QtlyRA5hFbC75RM7nezLmIwVhsLDkWbr%2BmiCPelM%2BXzhv0Wl4q9A5M5nHG9XiBbtCkhGF8gpn9aW9zh2hwIG0Vl6BKYwbxGgWq5rLAtdhswAH2kDv8ddQrnUHhNQxO2EmfcikM8Rdom%2FEg9jjxMUPF3%2FE7Ca8gJV3Qo8zYycMGCnzbrWZDrW17J2xBUNulHfLoJ%2Bj8NxzEGeM48B8qtjFGPUAuIC4kXI5XxR1b1JkXxy3sBZGQNSLF4ybSP8MECH%2BPGRFHpOkonXFQngpdMI9QXIaSxhgmTYXki1M04FUBgybc4el0OKq3VE879JnE9d%2FuvgK7SvJqTwv9WXjrhxdFKxMnhJ6noff6WjEErUkRlTyzMJjQRPSOZC%2Fe1rc6tAf7Zn7rfLE287OVUJ59xQd7CGiPfPK57T2CqfTBbW0PeNZIiLhLrk%2BXGSpTvCDlh2Db3aEiCrCDde3ZC1w2rELetAoRyVjzNXyBna0%2Fw6QuLPZCqM9vEvXwvzADV2f4K3yjNMKaIk8EGOqUBVted6gz1UyEy6LQ%2FO0oDBO%2BBgUQnJAV2P5qfwRdwok7b5T0qmA0RscZhRX2bLRQKm1gBXDL2wSJCfMNfdmexIZZAJTkpl2fYQYW2rLmfZjcaMF41kDIYNm9usv0cc9nS5%2BfbQ7f3XpOkQThHyYRKXf5GS3I3mZBii5dRICgRIQTwrBft%2BC1zHRQnBdcc%2FmlGLvBb77cRunU77Fdp%2BPNi6VSADOg7&X-Amz-Signature=8639b0865defa12e21486c1a44035a858d73cb3bf5095fa85fb37dd4f583b7fa&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
