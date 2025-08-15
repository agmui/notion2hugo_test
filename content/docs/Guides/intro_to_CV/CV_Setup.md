---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QWLACRL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDE%2BmiP%2FqGHuCMxRqDabicl7G3eIlhpxD37rnJTaR824AiBwt3WHsv%2BBbs5o5tWYJH1ChOzsJTfQH6u53oKEapyM3yr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMtS0YN8QLTzrS8gGwKtwDngeoEtnZGFsgWQ0tYTh%2B8Y41xGs8oyWdRwEuB%2Bmf1Ky9HF7Xldf1B3fa6Oqngo3x8KRM207H0iAsAVJTyscfDZ7PuxnEzbbC74gLkqBW0R5EG1QF9DNfrcJOqb7PtyifE1gUN1mT9a%2FCgJC11uBT3c%2FqqlcBb59ZxrHLtSZS1ABBRhWiHljWShiHUdL6d4d%2FrfbiyyJS%2B57y8UP%2FftP66pWulf5PaG42MA%2F5xm%2BxD0KuHDul8VWrdJ8eBdshgWIBs%2BPiiKA6Zo8XrZZh7DcBLqk61hks%2B6QJVm0Q6nzkifwVmT9n68%2BbS409Wkrufo%2BBIIUnOp13THfO%2FhyFZXpjY9hMOHhROJr%2Fs7DKFuIQPF5RpKi05XFY3Gj4e6m98xV6i8cjZu73l3DGPst2YejDTG29JRlYAg2%2FXyuYikneakbLeUKP0BgoTlDuIK8wZ3q%2F4Dw5lA42zGnEftjKGfNZvbz25dI5XprqlI9%2Fizs3BDZdt%2FnAKYDaDck%2FOyilddQQ7lN557IodRTZfcJlZEF6C8AVAuyBjx2i9H170FTk2jmM3LoCbnWXSMuWpV2PmVCWKbCzOFeXhAmeTnLZM5QyYkkc5AiTEExUYlJ7g6wS3Xpjjo71p3IOibCDPBAw2qL6xAY6pgEbEr%2F0UxlZTffYUsH%2BnqxQAw655zotoLo0kDYcQUBwgV%2Fn6MH6FOxSdBCWIpA0LO%2BruItpqz7t484Aa%2Fn7snHoWqmJDqcZMC%2BZOqIWxDhdqQ%2BBr1DNmMjEnskRBq9%2BEdER9d9qN1FmdM4h2ozAsFfGoFD9cpiG1f8XjFuymgWs%2Fw5LX%2Bg3NpNkNzWiDuSJi8UzCh4687JqpJ10N4EMw8m8JFjMSoDD&X-Amz-Signature=c6b0f20947e67af071f50e889a059595e3deb910b2d22fb09ac639351e4b1c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2CPWC7V%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDXCSbeJf89rGAc2njgcQNJPCfxkGkVdvhviAwIdy6tIwIhAMqQBG2MiNbX%2FPNo0zDbhPngLUqTSvLKD4tvUxzcP2WrKv8DCFMQABoMNjM3NDIzMTgzODA1IgwHrBMbOp21pfclyFQq3AN20eQ%2B3EJDqLgfFBVn1r%2Br1HG10o4Oj2Xmg%2BpN2Vb%2BpEhCpyYAiy46NpD8DY7EHkAOt%2BLFgDuHKytjwQsSkdQVQvP3lHEVu34eZLYkv8cNtyEnodJXfJNLv%2BJrLzdKAZjhQpmaM15539J5JvF1wLUeVqRmPzlJQXLP%2BqLU6u9cOaUctsAygA4bB0hWS9ufWaYfoXDTUwstQCVTNzUnuuloKcx3E55wGwt95z91wGtjio8uy06UdXKBMak8axs4Fco9LSs5670ROMcEWOIm4sWTqdSxPAP4yweJSjv8nWaTUjdIQrDd1Llk16TKw1%2FY0AM8cGJrE5nXtRs5COh0C0VRVjqc44kFKjn2%2B0jLmJGQA%2BbxtRrbqZtpmui8laZpZYuj8WheHMGOWo3b9mINpFkoEhUbSdnJCCGtfq5NJ4rDzBPLSWxbvZiTF42TX53WSCovlrZU9qCHbkQTfH%2F8NSwkr9wT%2Bebu%2FrUsx9e529nDLcFuedizkF%2BQEy53g3TMrwDPnzcHkBWS55b1VoXYB3kR3%2B9QV1%2BDrASLDTqDaCZ1LYDcIH4cI9aCteYAh6M0NCCmbbnkzAt%2BLqmgthBHnoykuN8%2Bfm6gjSRU2zvZhOnOjCGFX81E6x5APYQt1jC7o%2FrEBjqkAQ9pVa%2BK21MMQEY2Vot9HM91vrJjr0d%2BDPwl5SezgQVe8TdmTdw4tm0%2By3RrjJtLS68b4jAMPwaCvirnEytUC%2FwQ%2BcjNx65yY80toCCzbusWS61fLzdtruyxfgkQZofzgkcPE%2BPKFuUaCy%2FrwZ57KPixJD8LgDDRit653RLNRwQTv0UEfAN3uvVs8%2FDi5yEHeE7kkGDthDlOw8bfiX5R1%2BlvbBgD&X-Amz-Signature=4d27a9bac86a2206038e40f2bdd9780d007838af554b2b218a41047ee78356f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
