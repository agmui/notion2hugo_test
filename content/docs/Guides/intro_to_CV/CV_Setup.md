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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMB5ADN5%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDHuScxUH0jrrez2yZg8l8pgM0ocI3y%2FOIW20h9XK7YZAIhAI8IJlH%2BDovPMQhsPUiK0UPRBHU8gF%2Fit1deqnYh3gCHKv8DCEsQABoMNjM3NDIzMTgzODA1Igx3mM6Vp%2B%2B3mKHKoDoq3AOsZ%2BgI7jO1IxAQENFJpLQlWp7wdw1Ofk30ZO1HLT2VxFXUElSZ5WU%2Fep7OmyGW1z0qzbAD4C2dNJuy7Z4yt6sC1gj4H0Om8tbtIm0k97Ym%2BViexm5qgQhHx%2BZpFU0rXg9PjTH%2FngtncTlYk90j1k8rQfdxPmZPxHO9ck5rUdUYFLpKVNrFoyQlhkBjUaXAbAulCqYgnZJIkNac5tZjQ6Hfjju%2BUWmaoO4ax91OsoBJuQeZjvNH7mVr%2BYtsaElguMswgdHqw9C763vxlf4K%2FskGQkVd%2Bt%2BRjP%2BO8AG7P1UzK6d6IYWg3Pk0UGQ2nTgvJWazlVoz1cHmLj5yXJp6m7NYutijaNDeh0ZxN7eUcZtMe8S1NerXxsLDI6hHs3RUiU9DZ4uMs3QUbnxlOIhZxrPp4h1Qhs5EOft6%2Brc7cX74NC1ahEJJnShS59luyvLy0LV7Yhnv%2Ffzt0I1CNZiyPNxlFDy1wZUj6HuiO3j6b6K84J%2ByLdgaEb6gMgzIJ4f%2BzA%2BoGDKRZj6s1GThvcaExUqW5CnLhg62ZOzKII6owVP95MsxwwL50gRKD9vQN1R%2B7NSx4Ey9EWAk8XX4hDg46pUx7FoeUzoIw5c9DwYEC0zp8JB81BtMbdF5qR3bMDCHqYfCBjqkAY2Gp9ZZT5MB3%2FqX2Om4Bp9%2Fr2NRCFbDHepxHefT1t7P5VUTtaCI3l8K9mwrNTjEhj7j%2BmJw%2B0dJDKBXc4EvSXAeiK7JqWTcYXAp7ltafibBRgUg5DtOtkh5ucmbQAbQcrKIOAAjuAmcXQG1JQDKK6CiqEVq0ZiZZ1y36pDAAM5cFF4DzHi4wqEH5utnwvAmaPUSj4HQW6S6ha%2BvzHlwbhfbnXYV&X-Amz-Signature=c699f429a6d2a0152134735a61ac6ae76a01e0067d5d66ba56d143ce6e7cb4d4&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHZ62BBC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAR9j5DO%2BrruQu%2BAdSSQk9UCHPg%2F%2BTEtdsvU6QDh1XjbAiAtG96DIkpB6yiFLgLSv1wwprAaF4QEws2MJMgq%2FSmP2Cr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMwgKQEAhFDj0dgP10KtwD9ju0lQWefqJgF%2FcaUpZwHofsH6WQ1%2F%2BGvfAaSVL7JIpG72qM5rbCVJ4jkwPugCCcaBIRwyqzFv6T3q5WH2uUSOY1ZTu23rYtpmiasHWsp7UWYQQpj3pDmcBky3l3v%2B%2FfizhXZygAd%2BoNeHVtPvFTcWDxG5j%2FQAlk%2FmHhMMARB57dcpJ9MruPrf%2B8VqZEVyKIabcz8e6ulwrrBXRbwqZg0ohBuyKlbEoxFFdOuiuRxRbOuFSqdGHNHGniMT47u92CZN1faqafugwmiDZS0z9AOo6mMq6jqh1UIf2TRcn40qpOOH%2BHfcKUU6yqKbeYvfBrw%2BVLkhYUEoZ%2B%2FhqCDfru52sx4%2FZuOI0FkGMzg9RDjb0J7vqcL7u8RDLh6xl41%2BOVU82JG2Pr9Oks0MSF16Qh88cZUE%2F39iXyneY2U92G%2FwNbOsVY2RmPO0i%2FGf3h1ZQSCHx4SdxOo9LThnAmcmm4%2FNJbaWjdXInPovXlkJPXVqSWomcfvVRmF1uCBHtNcvozwJE0eTsrYZjafrAwe8sG7a187eipShqYtcQAxgtq2dCiL%2F5jFdVQcWeNs8AyPYtbSXOg3ndSQN7d%2Bxp4bK%2FMq9pfz7NO8C7256HK1Dz2n38qjENYcFnviaoCf3Qwh6mHwgY6pgH0DwxCuku149fdUbOO65fQnELGFBBWqoW1OH4r6dqBtfYRdiG1CR2X16gwDPs0VpsiA7twySJsDF6Nqbf9TvNzvhh%2FooA5HwN6WXfWfFz0wHGuiB%2BSQLUKCb7lXhWdfoKZgZqB8zBeDPxy1xSG8Me7jE9oB4wINAdVzfzij3PnbBWjQg6zQtNohDeiaU1Ezn1JCytsmz%2BPTr73aHo%2BCj5iKhA58dF9&X-Amz-Signature=1edbe616c12fb1b3a38bd4617a6929d5cf2449326755b7f7996b39689db9508a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
