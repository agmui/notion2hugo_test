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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ4XGW5U%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpWvyHmy0DMo3q0MX0FWoEvxcgXoRPToc%2F0CJmmX7jsAiEA3KXmjIaPbyQpwgyXOcPAVCdIpNhSTKhUPmG8fB51M0Iq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDEX3mhMqeoWSX9HkOCrcA60TzdEM4Oq1g74nhe9gZuzz%2FI4vq%2B6cMn%2B6odYkfY7o4BQAUhbuimG9kS6OkWk0j6lzzf3HU6TDK37i2uUdnYzmpj4oxFAVnbI7vo%2FK9bq%2BnHwQn5HFMUqXdAhkVo84Z0Mz8wvxXyl64tyjDAdjx29Tp4t%2FBM%2B%2FFE45CelQKtkyk30dsfK8L6IJVDXi4%2BEPCsdLO7oKQyMwzuq1OHtfx7Q8X2VZ2AWAYEWHRvV8DWzhpKxJgEcPr1ZwE9bwaXCOAX4iWOgw1U8bKsB4vNcgwBR%2B1a%2BkVKZxusNq%2BYS7rc0lwKohJVZ7SQAbC97AkMyfPGTkX1ESHoKtqdduASprG8fYPVLam67Dftx%2FYT5rBeNkYDTSod%2FayNNC7%2Fr5T63MeC8uy4XCiTMJlvzmVee7sm4LwucU3LSsl0E56p8HgfuR8fEdakNFTUweXOh1X0Sz2iYf0DNzdqdjoaSikD8Zhv5owd7QkPXKGnPTRJWAPMV05GAR2XbBshyNwjgNsSIbMRuVGVpLoQg69eI132tFxCEEjUAccmifRgwcn7I4Xkegt8l9lr3qfpBeDAkrk1NKNqRMhEn%2Bk5fzhl%2B6k1PvBEBQ53RCM2oZfmfPdA3aHcyb%2BUkQAtry0FmpP4t7MMjJqL4GOqUBO2Gv%2BE2qc4jIaMzvVhA00ecdryl%2BkyYx4Nllm%2F8IE%2F0htlrgTNmYixVMXxuPjrpxTXmw%2BUrsfNUEaWsLhWoeT5nALnPz91cLM8OSlOf6MFAX8LF6j7andRUDXFj0cHVW9XMgmqtnjxLdlrAyiatBe6A86CRdhb032A8yfifhrOFKeuiKoBz3ekvLrBT4qrEKf9HMbV1oU0JpJ9UK24D1JcCrQGcR&X-Amz-Signature=b8af94575655a3b63989fa19499f6e9a9023b572da7f08a63d30997280755d1c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIGE2TEY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYDL%2FAwg5%2FtZkC4voUZEyLdG7frG5Jg45W1UszycH7EAiEAjn9y%2FlUZDmnDT7Lv5aM7J90s7FJJVsV4qP1usNC25Kwq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJqor3WR8iw8NucffircAznsxFwqbiG%2BrCVpaH0q7GwHVe1TUmcmwlduStqsmUvOPHKKx%2BbhqHK1fRZrHeuVYAQk7%2BmWPp8looLO81HpIg3uYgVnDzdimVxLigiMASPQMXSZaHAchmqluETetGBk2GnZR4Q0wwchYVVgyeEQXhb7wDDHdVySfU8iwv%2BsbHJYUJ%2FzEKW8yLJz7s11nWtJGWpwsCjTrHkGEVkP5qsOKA9WgelFF93JteA3RfXmfPjUg6UAAS1nnlKGYDqG8tyHxLhFRnnA6smfvQdRRvP9y16GrPx5ZmLIAuHrL%2FeyEgLZop0LbZSirRAjlSvvDIkJlb12oi3Tw1M8p68NUQxh8cdS5kodohSBucsXSGuY4eDy%2FFLWkWmidruaGArHiK1Fn0UMlb8ynu%2BXLKksWrIVSTplws4NgvwztJkiMHB%2BwOT5na5N15umFPwd6Xs9JiDvgF3bp2euoKSaipefjQKsQf4IOwa%2BQQ0NJNuDHOIV9qNr0%2FQeHFrEKngvnw4wYtg0dK1U%2FGBtuOmYjpuusNJ8z78W0McRueYOv%2FtZeE8ESFDJ0rRfj9LK3Bns2ubSps6tdmKfpicwfd1LISrSKd7a0C6infAd%2B0JIyxy2l9yjktc2g24BYhVS5z1Df%2BbLMOTIqL4GOqUB5cuFMnQpWiuLAKt88Pv0mM68MGCTwPvkhu0iTpjgKSGAVXPJnkcJ7NvSXOL4CjRnk5lgA2t3cpLEqdA7gQiGrVF03wAkikl0wJ7EqgO%2BMO0dDsCOCXR%2B4WpYKDwVJZ1JcEGncIkCrr3abqiHqr0XzmNiI%2Be2RTxRYPaLIEsg%2Fw4PxEeePQQtGOP6Kf61WXjNdqn0tNsIZIi5dzLdrp10NxjeINsG&X-Amz-Signature=372b2ee2ba02d4f9466f4c5aae2cc34d858edd075d507b64c96086868e7ccbf2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
