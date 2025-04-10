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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNYSQVYB%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCV41DujmidBdyi933FvgWh85LO%2FAE46UurSq%2FbHzHe7QIgfRlYri3f9Rp6rn%2FPziPzl5tfUHcSEWCQAX9t%2F2Vw8vIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2mDLXrgzHDNHPVmyrcAwZatrYk0%2BS93uPYG4P9LTQpEJ%2BFZPJprn46H1a5sI1%2Ba2xtQ5aAK85otvpDx%2FF16qvZ5%2BJjOJ0hY2Ga%2B8N946U5xUyYk5%2FxOVx8Zmrn6znKqOFJibFp%2B4PnOkSblMhJXhyWB6wq7tjYntKQEAIPiJTKOUNDEZunOTPfK3OemxXGZerphKjk1DBKjyqiVjNV1Rl9SmM8uTEKAcp2hZfmVbumh3xv%2BDQ%2FuaR81ELvYN41HK%2F7mrWcLHunXooUhFGemsR46h9wYylrTc8Y5akKreszAxa2MNIvpbnq62PT0wTfrcGHG4VawEGg2xvS5Ei7y%2BcCAjR6cqBY4I%2F1Q7fqfSo6RbACcYmlAQRGQ8QFluBSPvUS7LUQXGWgK6nGMpxZD1ZFaY1WYdUEB%2FCaYUMjVmP8l%2BHOUsiR6MrbpwQHljkR4G3uRKQnZCzpsYG3JavPyIMGmltjQj9%2BqW2b1AgayOrCF%2Fw3KS9q4PyiWWzh5GbYbtF9KEJ5ODueONp7MrIcSXcCeYdFTsVKXC1lO62L3LBQnaxr%2BhgP0ZpGqUUqdkP50HazpBU0eorXD0kqpgVRriY5ftmaYaLYT%2F4pGWq2DuiQhESX7TuijVzQY7usWcfoUCLOa2NfpZ5VianzMMLu378GOqUBCm7rSeb90b9A9S8Lva2QmCgmX%2FyEwleMyOI5Jf2O7lOFa7Y7yQOpD%2FQrMK1KD9jz4wFCnoNnvJJiwDWFA7l4OBT1IgbARE9PtzJtKczMx7tXFfFQha6lXhTl2%2Fs0c0FeiKV3Yiww9R9i8YOx%2F%2BQ%2BEC3AKC%2BaotfBLwvFubOSgYH5KjbtBrsbZtqwUJzxi78LrLqXBL3uxK8eSynC1lJ%2FFHojy%2BSW&X-Amz-Signature=cf26223e0e7fb117e3a8950673fac28870091e8c44c3d1e250066e0b2e3fa467&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OGWD63I%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDBIn7HPxazAc2DsmBjgwKavb1qoxJPEnF%2Bs4Qk1RnIOQIhANlcTjs%2FguWujVBuSFQg6u7h%2Fibm4%2B%2FoVBrKT8ShcMfTKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVA1uNZTF%2By%2B5VGkAq3AN3JMk24o0PIQIjN8Jcik9n%2BkiJCXsqIygwv7TAlpBwf%2Bccr4OpWA%2FnAgK8X%2FfEHa3UOwa%2BR7H4XvmbhstB88cNDo99ged1u0AFYyh6NlaQn%2FwmmBZKJAWLoaWAoIib1fe2sDDlq6QYGUPPWb4y3%2B4xagHC%2BLFy6SeTNZoF3hDyqn0r%2BhlKEP6d5vf5juUQtFwJKTKDZsFsylhvmPewF%2Ft3zeUBcp2HJ44yvFdB2kwowVJsENPZZqNcBtRHIXmNiWK3HaewmlOm1vcNO9MLax6OV7285ITEfbC6WqID7GWccpD5SIM%2F39Gnukp89KuKLENdvygQa7gVQ68DtXWWcD17dBMLQocdSRSOjGXsdRT41HreoIYTSWUEWXYidFZxw8Hfj2l6Wc8hraK1uwuzqKgEF%2FwFFpmtOjNGqDewAK7FGsrU87tX6KA55v8jg3c%2BwulRFtA3PXos0c5dxL7FsW7%2F7Jh%2BDpdpgc%2FwsFxW41j9KdoSa3VB5VbDEKdQn5PifuCHssxQHKwAeMDO3s1nyiNmleg9g2WrplzCoPvfcSZzL6M3ntXHAjZjUqUsFPpwAC3BuNlz82wLiiHVjxQbYa0ZW6Dxr4K6z8F6mjLeyK70TtS9s1xdXzkdzTWG0zC67t%2B%2FBjqkAYH9%2BUbEB%2BH%2FbzvlpYgKw9gIwie7QqO9Ce6TOhetFaTySZnGGc6kRNRX1Sc4DwhASvvAnpPvrS6T%2B9Pf4wvtBU71OLtGYe%2FZR211GjlEoIpScNj4ZxyU4eGOlX37ADaIRLexKfozsTprTA%2F2nD3NSt5a1G7hEXtnR5D6hFNjULh5pldGsOhgtgfdTTwrXgwV3U%2F9XbOwUUFs3ULP9x409GH1MkWX&X-Amz-Signature=c8e92974eb057043ec64b80d4d92809c514184b0ba06b689bbdf94d376729ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
