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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VJS6XIK%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCQW20hxmWo4XRvEZ62N1CSvGM6LUNc3p3aOjHDngapYwIhAIoVofQDfJPO4Db0weQRjR5bnqolkZooKHuMayFi7L7%2BKv8DCHYQABoMNjM3NDIzMTgzODA1IgyLi%2B6I6IALe%2Fa95fwq3ANJqbfqBYHPGJHhtaIpn%2FLt1LOrkkf17HgOL0fKz7F4tQufLpAFa8Sq%2BLydWpkKTkx%2BsKTTD6eQPv52uwiYp9XA3CSJK5AUgsa8XiSCGu8AAtsrrZaVbfFRXNDDhS9BizaYdDzhYyo8W%2FfGrni09%2B8Krr40mQqVo9%2FtCtlRnRLMm7Bb49eMdScDW2H6tg695XJNymkTk4r1Q7y7ex1aPS8QfOf7Ecrd%2Bd2SZS59%2BKvVyjL8%2BOWwXdCDpVlRA1hByRzhGchHwpk1GyEWcoANPICkx2TF%2BAC3fuGfjI11qjgAk5Je2WO0pGksXl6o9dGToLmGedCtHHzcJzVgFIH0QO62cpdOeWIunrROeFwzEhJo2ApC8GeX1Kre1JeSs%2Fu1y998ElnZ3CiFbcH1rF%2BOfGUCTA%2BtmHvx%2F0ebip3ae1Iex0wMY8Q%2B7NPgW4MnscYN4BjSs1fwFtNm4q%2F%2B3Y1ARyzveH2QeVaXhKPt8VTnJd%2Bk%2B3pLZKcfmIlM3LIm5Tu84GVjopomW45cEWJh9HWjKClg%2BIyVLinHR8kf6zP%2FxQVHD2jECIqMDgiPoJ3G%2FONF7eTd6WpgraVIZQO%2Fx0997l4qbOCWi27ZmcFq4uWyaHVgxnHew1jiCTycRDEJmDDupfrCBjqkAWQo%2FxVpOLDbaR5DgREn%2FdHAN2XkWyVYQVz%2Bew32AFlhXaCDKMRQH%2FmZ7QDMaQ1iyDLi1nnrMjdZOne3DeU54HBGoQaHIZLlgZJuyyX1uebDuOQgDsBr2LsBVxG25W2QXPn8ZadjOfXw0TpT9rKbLyal2PiGkt8kwHtWdNhN69Dxga03pMA%2BFwtewYeU8mC2%2FAohT%2BC0Y4qFEFQGnusso8WkGADL&X-Amz-Signature=acd4eae64257296c58aa2a90e7a01893a3e93e40d121c6549c450fc6d6bd1158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4VXNXU4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIA5KIGz%2BITkJ65XRVEF1fgicnZ3542%2Bs6apn890uJ9pUAiEAvx7qhzy5vLtAfCCLf77G%2FOwKMTvGB1Jqdu3yrua3RPIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDD%2FZUZr%2F1tzpJg6nkCrcA6xK1uKDT5mpoZwdS2BNQxTz8AdGuPpdlm%2BEWjtSK2mjox%2ByrujxmYuc2%2FI4jtynw3h1E8mQLc2rWcz28FAclql2k5XQ66hxSCtEd%2B%2Fzt7HzxmydlhUu8jZbT9vbzfuvGXt%2B0f%2FEqWo3LxcYGnfWdtVFlr5%2Fkmdu7uX8AUcoRrBm%2FKID1Ip1elsddAfN6evvpHTjsTUbPe4MgR1FAyQhZB9qGQfc%2FNbXac116NKmfaOpgD1gIrWrYqzEKn9N0%2Ftztjszu93Nn6OOZmNt0%2Bly71MJCoCvykKVpRWxXly%2BXzy%2BJBTKSZjHroWy3%2FJH8KHxDhYzQnC1faziE6Bp0ng%2FxcU1hznhgo%2FroCR4Qe9FsaMlJHqxPyb%2FclT9YEV9USxO4vRbq1g7HYQNmORE9AQI7MhKaDMCf%2BH5UjgFSEeZAMNUdIH3N37AN6RlSboKPNL8njRyTEgySLmZnn77GU%2F7VR0WplPGn5S6TxKopu6EMQYMhx9mPNjxrcSSNoFrLrPXzd5vM93ZY8BWAhKxUfBtJ3R2ox8EucrODFqBgyvv4pmCpzWF8Tfl8QmEssOULbBd83B2aatNT%2BIInIj%2FYF7qvIVBpsfuYBnwAxsZF%2FtuhvbktMtgvxOTIVhSYpZgMOWl%2BsIGOqUBDYiNjO5J4%2BnY7RmiIVJ8qptBPuVaCg939AWvdYx%2FWJO8K6cwTcNvtDgEfMbI9WrHbB5YVdw4fhCkweml3eY40J6zg4JbLyH96qBlTVmnE6hg6YgZcLaD5bj3uRtp5tF%2FMbrJr328j63aYKteYT%2B72o9S0g8Y5M8svX7%2BOSJ8BgF%2Bjyy4PC6k40K7AQ7GYt6IWFNz%2F%2FrmcVz5%2BkGZuhEe3fICqPAd&X-Amz-Signature=865d480dc964c76a1006e2e7365cb6f12b943745bccf7ab21473650f014739a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
