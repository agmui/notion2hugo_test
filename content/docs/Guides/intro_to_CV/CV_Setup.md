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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3JZIXEE%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIAk4rX7NuOGXbM1l4W4ujS2ZWZQUq7kTUPKQZi33%2BZVMAiEAoEdOR%2F8wRs1V5pDp9%2FyRqKg0LsI9nf%2F%2F2hvy23DWe28qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBc1Cqkok7zFADwWAyrcA7uIt%2BF02ZApDww5xOjS%2FHngQMCi5GCdMEH%2FlXDT0JjluLyHQ7TN8tKYNwqDq3%2Bcogv26gtGJDZ70agRsG6kWwXz1MaF69a6FT6ChaIChv2R1%2BWhRbxFLSQ4znKoCGXPdRfs0aL1BgXJqVQEn69jkYxo6iqZZa2fl2fi6KMIovT%2B%2FjgVmXETOY997hkcqC0Pr%2BlUPKtMr%2FKCcAPXilu756%2BPMp5WAGX7G2fBiHOBlZ9NmvygC18Z9Rgs1etzbQo3ndY6bT2RCt1m4VAb4cWxtAnT3Cd1yBbsant9kX3fKZ%2BJ6h6U%2FASFe%2BCqfLrm1E2%2Fcmmy6NHsKkB8kzhXyxxV9hkre1IyfURKk%2B%2BQT8ragtGBYaZrCZGzLESdHvzbF5FMGYIHKRhsjpFmW7psIw1Uwj%2F257qXlBI5wREtgW%2FZvPsBQDJR2DiceLtLgH1WSQVz9zNWvxX5xcH1v522I2d0U6yvtT2miwooBWcGdXFlZkl%2Bq0rIz1IhZottY8n6nSy0k2aoyzFIs69uImZ0Mj00dqC64pCilfZWYAc7Ag2w%2BX3Hq%2BmLkHHy04qQVxtxMqRrWTUwLtJRtvmw%2BM6kdjuzJCW11YhHDI5lWiAcoKAMjyTF%2FBYlkV7Pk5vEgwMeMPOPhcEGOqUB38rMdbLpXNS7blCsEGbIzJOET2kjZdYu8vfTERHkQDSQqct0ErsHDVPB9r5HMN%2FH4ywb9Mu12OGi26S1Wao79kog3GnsaUGT%2Fuwe6kY782O9cXa3HJaivJqhoJ07smMZzLZZDw%2FhpcLHhX3o4PFttFUAmIWCU77PA5wSF%2Bkd%2Fn%2Fifji9GEX0mR9dSk2SXO3H01EieY7OYd4esPrrap46DpnSNzpB&X-Amz-Signature=17b8ba2265ef4acedecc48ec500bef43e82dfa10ec020190d7222f0a70a44be1&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZG372O6%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T033702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCZeFOm5ows%2BTGc0BC1soFJER1c7Zox3kJ5oDccxRylwAIhAOvkC6oqigvckzJTEiKSsYcmMI5%2FgPmajMyf9LAAEYuZKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykjhqVdj3Fac2d8psq3AMSoGtgOpPPhLrVxQWdoKZ8JaP6%2B1qtpO5CjVdxP4QjzjgyXFPsZp3XxGLsXuZpXRIv0s6XFJtJcbu7nqW5lneGHCBdy5KK6pfdBUTkbgY9MqvGMQeTxpiGif9SNgP42Obl6DTpAEzrNeREWI1YYEWywT7lZdOktxK6GIipLGtpBtxm2f5B88tFPcYpnPG%2Br9zjQycVfyCWIIpB6c7BSeYR2ejp2EVn3YuVnLL5fZRV8O9e0cvctMyOmikxynSw4XOYEenkfbEgb%2FiuX%2BeEipuOugd%2ByLygmBB%2BM2xDA7WeCvqB%2FeUGss76ZXs4RFDX06n2pi6Zny4s8Z5%2BP%2F%2BPDSpfEJ9G30zm1YdhYZINKXKWxXxiuaqIpNBdG4vlYDetcWzYmsdH37FEKx8WWRV1hyvPAyfvoYFuVt9LvL4SCGcTzbK7L%2BXgLPJf15RU2JtbPCkOWnpXIC6eosSK9dCgwii18qtPx19BXMdUx0xlzPssCUCVBAmlVXCZ6fX3EjWYe1zFtwkHrpW10hPpVmvitiL0XgCWaewZr0uW9xOY7fi8JhugNPpMxLCfxqyNv55rb1QXURXuqdrfXt64dwO0FkApiH%2FyHAc6U5c6sR4d5hKSubfEZB%2BWfdEWLBFoITCbhYXBBjqkASbDQiWvRa32O4FJZm4d%2Fh4jMzNIUx2erT9pbnu50gRf1U7N3OCq787%2BaxMLfHIHvDNIOw%2BRUlEHW15pQfBVehYWtRO%2F6GDDLTqCWSjrwu0pqxJ7jOWujLaftGegkN%2FmvhYEUjxRE3lUqBcdwDqp%2F%2FieI8wIlhMV3smb%2BZiMaONXt6yuWAmtdaNfl5APjzPJH3MEZ4aL0yzrx4Gkqm6c5VNhIqLX&X-Amz-Signature=437d8dae40b42243c91d90055279364595dffe1874316a7af464d1fc8762e357&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
