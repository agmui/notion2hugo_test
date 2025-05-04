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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2ZUXIQU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCbz%2B%2Fyj3VrjCPzb2trxI9eJ%2FDye%2B8OeFP4Xjoi%2F1YTGQIhANcEZWEWQSe5yWdECkBS1Zurelf%2F0R5o1WdZX2TQ8Q0yKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOkD2mlLJ6qWbn31gq3ANz5JMDBGZQahb8CxRIdxUZHMNAJSVLfrXhh4O4oF2CkzRnuQ7SP5kpHOWIhiqG2b%2BXXqeHTIRRAtQaZx5ibNtF0GgShivLq7PrA3WPpEMiNbw3GXqDASU0Ke0%2BYpKDdmR8vmer6WaMlH6xtRUdAslJXLuS59%2FnuktZbLMwh9bJ%2B3t8nM7YELTqVBRtEqSAPPwLT4cwkJASFP1NBFPDNhHJ43I9SSaulDoLkjjhzAPcJWQETKl9dCgyZB7CFcG65YNd9QrEHC9KAgAc%2BgYRj1JuuLqSVYl8Qj56DPTeRN8q82yLPlK0tVy1%2BnGnQhUbGnmnN9mGCLq4XBYwR2bfT0wBq0LzmUhHCrs9%2F2roClGOHXuIR8OpKsYIHd6dfojLLGTOux8F5vdXh3ivaNXzpQALHEoL23OKx07Q%2Bc8Ctm2DHkGRcNOpM4F2JEpRsVvi8VBwFFhaqRhtNKlj9IXUlkIxUvC6DdTUtxG55bd1xS5mt2rveR6zepe8H%2BhFwfGWeLmaYfpYe4QRJkUAvmTs5wA%2BDPQ%2F1MulYJ6VcVCxpR8LlsWGS8FVAGBV4D3eFMeFQ06z6IPF3Vgy29zn%2Fv9lbNE7k0RjzsfSK1yED48bQ2dpx34Z4O%2Fqd5rXFdEyGjCI8drABjqkATSGqEGegpCBt25XiAcy0UDmb07mEsjpT4iMlOUxWD3IGYaERZ8Z%2ByjK%2BjLKun8xn0%2BU%2BWUFYATXFfyyVAs51kaZOGkhA5y1KM64ouDGGqu2n7uBIWmINZZnHlhwqX%2BR6HoI38wDcroN0qiJQRjcVoBLO27NJHtJBkpnPdCgRErYEzDFkYrDyuaP2rYbX0%2B1NWvMn5sx5U6g5VWJFMRkj6%2B%2BrrbS&X-Amz-Signature=c3f92a516242757fa92dd89857acb7dcc630c4dfed96c3a83567f598767b8dc0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VBUJGO7%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T024027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCID6taaX48emBVczboHViUqj2BzpxRK4z6rlPNjqckjWaAiEA79NmnerWIBqnHf31Ln%2FNOTdJKXys0fu8lnKVoacTfFIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5sikNJ3%2BNgWkQIZSrcA1dJK13oWXQWMuUJWM6F%2BTBwm0G5gBgMyfjG40Vk2OZSBXj8G9IxjRQrloIBygqkJt4JSZRcEZ8AcKpwF%2FvCMM7hA1xyzdX4YQk5yuyehcgoIqyYctOmJ3pDCwg9dFcTyFKodo5ifdEYJB1SDkGHNS65hZwVc0eZMytBh5FSv8BfhrFYd2pjC1aBfRLt7%2BFUkjJXPg%2Fr75aFJ89tjnGwh0r%2B0abu4NP2UzYupZAKoMECrlybTljU4eZH3c87ldUuARZjT%2BTW6Zxb5JMbjptlkYP8FMe%2FZQBCzSlWWtl3ujE3tDqElqVLbiPuzF72dXOp8HmghHfwzzsnZVzPdvGVgJgXWozbf63rnnpS5Gn0u3BFABLQehzk1a8s35BpYakqIfb0DClsBzC0wc7u5Us%2BxpPMkwNvjlT9njfdSOH7%2B6ps4D7h4h%2FJuE%2BU8C2t0clkRJiBX0mi0Lt48efrBqI5sckie6R6ahJp8n7RWXM7VogwCO9B9%2FtZkOBOp8ebHptdZLOw2OLzZoGk%2BBrS1UkD54AdRujAlit1HGzTjZraLJeKJagl%2BwYTcWSDQjtQnDii2fdpjipsEkqtCRQbU9kyycX7MU0ZA6aGGI%2BHUvDVWHY6U9fPu6OCjkDZiYReMN%2Fw2sAGOqUBe%2B6LPTLNoxLgmk9oPasnYi5fZePy4SGKTwkmGRrFZH4mLewRj%2BO%2BL2KPs2YSWO9fdwojCdEOnA3U5sg%2FjPlZPJMEDs84AVGuEzil9eq9WLMC8yfx9LtQkoNnNpM1Fmx376%2FpL628YR9tOmL6nvWzUF4zvjsiebtv2uS2snOqio3l1ECZREkiBDHXamezmNr7ZZrHoLiw4L7I%2FBoCo2W8280VVFvL&X-Amz-Signature=4b3ca142fb8bea4222d938117157c0cec7bda394a70496ce47981717fc84fe9d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
