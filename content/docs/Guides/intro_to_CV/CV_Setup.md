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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKX3AQW3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMaleLratk%2BadialxIu7zQ6Pt8C%2Fbk3cGQXCMqXta7iwIhAIRovuky9xmz2PqzQectk1RXDKWCn%2Bl1A%2BuGlu48BB47KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7XT7vkQa1IPD8VMcq3ANbSdmLudQFo72i2VhM94Q598GCv%2B8av29M%2Fh8hs4%2B5GhmOWGF9tfuvrCmrernnH3Viio%2FbxQJGY5iTGQE21AuCludg9cmKv0EqITLVU8X8v4f8B5zZj0limCBQ197BXg4WZf9KS9FLoRHQzxFXXdzmvAfQ8aensppiOZScxCJABCpnVnGltP78uuKyAlTs%2BEiXs5t8eggj5jHFGdVCfKWji3Ord3kztG3uP1Frx1TJLaIM45vNw%2BC8rdpXG%2Fe9a7A6kFXUXbU9OoxymK6MVPqCkyLdNNGGAYe4KHrwdmR4Dtqhr7c6naqNSN1oGm9CyfCNHV%2F4FIYVL8UErHbo%2FRoyPnEsM5KCBU89K202ZSG8pCdcvqI2yCX%2FX6gNi8OwNLfNxzvhprz0vNRQNATa89%2F4%2FKQS81F4viWzv6DdhkZq0PzP9d1BdhpsnM5jvxQunJrRjtxJphsCeTBfd%2BvgiazfC34yaI09Q8w0fy7Ex1yuEeaG4AUv2jIetdgD7C8dI8ODCi9GJoebvrmUaGYoYkErKCsl%2FmIPFKf2QostEyj2QGjXrzRfXZ%2FlUbSB6nKaQyDDB53TkvznE3MP0%2BZiGWcdz3LlYkQC4WpYUVLIbEwxCHDYS3AiosqQkH9EojC4%2B5C%2BBjqkAfOj0Gshn%2BVWeODgIysoeffIlxHiKWYthzOLXGZhZB4N8kRkMeLKdCeIlmCrwY2nNB5fBf%2FyO5GfwEhQjwcteqJC7P10PBvOPszLvg2fja9QNx2zftgJkW4e9QgMMrmCFLaoRqnGUH8T%2B%2B4FOwrS%2FcSBh8c%2Fbd8RY14KGezWseMezyazMBbTr2j3cE4bneWD5%2FplIJdx7B61FIgDPQeOLSGkooin&X-Amz-Signature=360c865b994c6fc3143956d290ed6522683885ebb705a6f4b7d3b4cf4c4b84c3&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665L6SI4H%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcXWRBC%2B%2BAieOfRjHo9Ki%2F%2BYHldia8aU80vG%2FzglraVQIgDNZA5xPUqx%2BHF%2FbfFh5sMVpAyWx3LFwek4PuDEfrFbYqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLUZ0nASuNH32OoIyrcA7fnerJgztA8Zvx2UtxMnAC3um55TsRQFO%2B7eqZ76hcRdTfby6vkW4UtavVgs0Yg760I55QSo7%2FT%2F7HZAbOn3%2BKp%2FTcQMdfRjmh9mA90hFf%2FAMJPaTIap3tilMxsvir%2FNJxbsNipOR1S5AL3SbMbXusOwg52MTcScLwRaQ%2BZ%2BfQdKLDe9T06%2B6Nwfws42sNisjTRXxa8xIQ%2BsSTPtyTQ%2F%2Ff43r3WLazqNvl7%2BVgAegYhupe4j9jDg7PUWC%2FcUt0CacDYMOjnyCir4NQ1uFwTpyHafo3eg4piKhUv6L5bAjbCCNxnFDI2QqDEj6OZksTjpyrP2VdD0dvKc3zNl69lHFuB7okyKEoXRfzdRYY4QqI7SAZ9%2BxustU4sFKbgOj7yJmX6lYGl8h4g4kx3sRo90If%2F7wIcAOg3d0jBjVEA9tmu8Qc24QkoMy%2BmUmmcTPuoN7%2BPoMN7p1DaddZt5BYQlV8NZADaES3NqSFTgemr%2FJd3FY2KCzP%2FrgzRMCHaiFOzIp6lpOv%2Ffl1xOn5xhxHhhglwOt7UuEB0KOLjYThNCOGIruQnHh5h9b3EZJFprSV12Ss6BOVOZmONQbM3F48xmkmKCEUuDuXv4Yn3JIPa4uLnJcv03gLXC1EweL6lMJ37kL4GOqUBsyB69mwR5YTe%2BwAxnYVKQKBU0G6wfFdq0S1N3b4inPY9W7uVNyd3OsaCblOzr%2FWqYS97Mfdc3SBMdWvg%2BjnN4nxyhLVO%2Fi2L7%2FotYR60Mhq3ntO7CkyTo4k8yGfem%2BLvVm05sOymOa6C0ndiYTI04%2FMuXiVGf1Lgm%2B%2BMSwW4yRjY5M5lW5QCmeuPFvtc5bANGRhAxk8w7iVi2bGdfEWytdaL7yWV&X-Amz-Signature=9c794758777d9245bde2b5de19b6af2f38cb19fddc2727b9ab941d3858de2bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
