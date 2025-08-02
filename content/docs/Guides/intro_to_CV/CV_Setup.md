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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDP6YX5G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzB%2B2wanQcx%2FVQG6Jqm23oFVPZTsAu6hVgjSv4VK3p7gIhAO%2FBZomVupb4eHZXxZfbddpPLFZVaiCgksOSNWTM0N%2BpKv8DCBwQABoMNjM3NDIzMTgzODA1IgykKS8jClw4SVxFG8Iq3AMKI%2FzYBDgtxvV1tSImiRQDkbA5Mpd46aWbmEyKpJa%2FcXL1hmZmoH%2B6F8LW%2BCPLZMhlGvzsHg%2FZphFGQNDwmIVu1jhFNWjC4daSt1d5N78a8trKciGf33rM85YmKQDN9mifxgcSmWBbK7rGxvdQo%2FubUbzwvetJqS5S%2FzmCnD7e%2FuFwQKBjkywqA8ptOLj%2Bl8Kp0T6h1wPZqRvczOHymoknSOTX9WkcdosI888tXs7lZXvA7m6fMolpQyNUhwe%2B2T62YzYkJCm5G5skq7vNQRhiYbgDArRUyZOIqlUQKGhCASGFqqwehmWhmmNo8hHK727Xx5RdroeC7VKaIaHuEVc3pgDcOaL7VjVGBxRgMB8J50KBdNPFMq4jvvhJ%2BEQ8AdBc7bNIkUp7iKFUNKxtySzj4MDjYT6GZa%2BOM%2BUE5ap9gVrrE82%2FiucF7qA765H2CKSI8mGsPc9jV2wrOTrHLZWdsGzwPwrAzsQlTvChGVgfUlfm9tpKt9rS76miB9xGO0fdqGUGkDsq4llmQRiPrl4%2FCEHZ1982njS5O8LqJnwjGtgo6kTZDl%2B%2Fpne3Lp1SSgg9gBgAlVF%2B0GpNjhxa3NqbE0OG%2FrSyLlOZO2UGeXM4Ycd0lbLnbnXWt5QUgjCsxLnEBjqkAez2xiOl3H1vMBUFxAEqjzF1TA%2FKU7yGzigzvxO6tOKu8BxYLBmtEMJzN%2BVo9KKDeMnUJClFGk0tjUK%2BpbP2Qd5%2FiqhSE4YqeIO4hfQdMgaKiuTE7dLaPHpkpmR6ImalBEvxJclo%2FT61r2u4KPsl0tyam%2B3PTuvr69ifn6sfPfN1nKqSyh4VIvJESP4nRrtirTcdX%2B8wPRztos0FroEYyWmtocK%2F&X-Amz-Signature=eda116ab874ea85ce60caf3771ac63d73435dceee0c1986353c32eff52a22448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHKZ3R2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BzUBmC%2B4Bv9NwVw33DaUnie5R%2FNGHawkTpDXn6Bf3fQIgCoXoDbiu63ghxlx3tCBlnaqriDvDXj0wYROPRsBSfrkq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDFVAOf5kusKcpNt3kSrcAwvJfQgJJHk0Yx4A9g2dn2t6xWvOwmXMiRY7%2FH%2FNVuFboSFNn575VNK9vW12g7S3%2FxkieDEDZGcIrdSpTbSkHikCLrryx9FLkODbheLWaj2r12b%2BRqF7ABbHJxovkhuRVT2THNTYKfCKQVQ3nV6eZjbpHbrQ8pAN5TYsiFRK0aozQ9UXCBh1qMCjmq3%2BxvYREK51Qpx9YSinFJnkpa2iopqV7viKHtVMam%2BsI%2BCE5z4nd2amgdqkwLJyHK%2BtovRK5a4Ru7yMknHk3bnJCjnuC0JTs9j76EFDzrrRML2oV4aV%2FkSQYxk7mqzXmrSQNmPlF28hGOM%2FcJLoPjfGlknl0L66kQtqdP8xR6P7DuY3bwe7a0G4KXCJNl0kv%2BTksh8thxNkJW1uVIJqfNzjJSHWbtZW34WLpwbcaf6bA2Po1VxNl5uDF3Qss1Gj3TGtligMacdtDLBVGN78KfHw7NywgsTurmyVnI0Ip3zXDs0jKUMuYByeRnUa%2BhFMUX2vcC7rjEO1bWHZXiulc7DaL5fIDx6Ti2Fir8YnHVN4FQ4lL2d5CtsL7IjMaOWts%2BL8OmIucgvDLfc8aDtGqhkdalY63uYthfCuPTpToujJnWPfGw4cXb1LaBoHtlhSvVAKMN%2FDucQGOqUBTA7MqGpeNBIZNz1J0ZtuxK%2FGPN2PmTBRcVkTfmWgyQRgn5E9zlWYcNH0FfeLg5TnYbtFRCDWY4uaS23a%2BL8T%2FP7%2FfhGRltRT%2FOxjphaKdbPske8PwP%2FP%2F3AtFzMR1KtTlJMiEspZ3JM90Fe7Iiecj%2BgcvKVsBl2VuXHvK3fAvsTGAlmNL5SO2AeSL86tGImsaLw2iksUV6WYQAULPVCXZfornhQJ&X-Amz-Signature=02ac9f8a38f49687200dc962590da4716234676daa8d29357caf2f7052a56a03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
