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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTYO2IRZ%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPhUBM8uKaU81t%2BJizRl5yV6qHYNauzhimU%2BDfz7wIaAiBLJ3c6NA%2Fw%2BWp%2Fid61P8z9DdePBWfbAds%2FFgbhVXkRGSqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHFivJ4Q7vHSvWrjmKtwD%2FZzLS%2BEjSxYoeY0G2Ug01hc8AgxEn65cHFvZzfPeaYoYGaeQANliusZ4%2F9SSJFvsQ7lsBclUQrnIKR%2FA%2FuNTWp2FA0vXMuaW4KlvyojexAVde9KR4uTk4Xej6z8g%2BoPoD%2BgyL7sktTokx4dozHR0ORTqLRQxHtinzWgTtz%2B%2BymRiDsRKwkLXOKupVFYsTYkeNG86x6qWa%2B1MDAVer0rdHS12g9au2hZ2ejg9RCo2YZ8PZXeap0OQK6EKm2r27lUYKuZ6e0hu4hoqVZA17r1ni3S7onvy1U3jcOLN66ZGfCQeAZDghXTkIS9lpGum35pd%2Fqxdk%2B3CxoBCCCg6SR59jYcZVSjciW6b%2FqcVKCWPcIS30oaGbeAXUvugA2FoYKH8OjnPdGmCrsQeQ0g3O0hhie8baXuSqJC%2FmIQaG26%2FdVV3XOD80lGoH3zyzoVmKGbzFGRAI%2FGYngFVYAE0SVc4LH0FuCLkQJ%2FP9gRzRmXs2jlCwnX9VwULgYtUzTfDBmTZt8oJmGydjnAScS5CWGtxVrWQD0sal82TAuvIZIewP%2FNuVBW2tWzOYHLt1euipB6RvjTGe78i7Q%2BQlAL5h%2BTeYv%2FheX1O6cip3EhdNIlky5uCWeRzcoHOt698uREwle6YwgY6pgF84pQr5VdZlYznBn6%2BN0t60CmBH6nsHS1XEbbb5xaWbjw22TcFK2eNE8rlwD8rY2Kw9QfoYb3PTgAxnYtRTF35GG%2FnyzneoIha79OLITZ73yqcGQFx75FCBz633lTxsytXKIT2qSdw58zx9itWi1Kd4xNQghC2unXvXLBRkE4FFjFhPK1tyKeiDSe2OK3g3yywar8cbhA33I3kEo7CtUwOFAGlc8%2BK&X-Amz-Signature=8b7c6e351a1bcabc25d1ff9c73e31524beaaff0629e99e597b5c840a352a6a7f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675GFJV4Y%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDN3wEBrW78%2Fxbfa%2F1fTWfwoIGWvoPepBkKL8uKz1uVTAiEAkzCrMgRO%2B12fFYWP1CO7Lwb7Mb0LhQvfJCoP3HOzyloqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfSLUrO1rWqeBTzgircAy1eEcoCziSFxWD4q%2FcN46ATxa5ial%2BjY5xbXSFegTOGCyL6Md39KYE9TDZxTM%2BYHjK3UVQJnFOuFuEhdKn1v7SsxqS3W8TyREymMKdyhcLUJRwvBPIlU1bKoAjSaow0lcy0RHB7Q1p%2BeN%2FrqUUcGcIQTOwUEMQ%2BO76Em3TpWbLDmFQp1kWf0zHJ%2BWI6VO52%2FCB4UlLWSbIcE466EhzFGjue7KxQQ9WRBBiAsmnd%2FZNK5cseiosKweumWYFkbLlqajvKPSCeTU6TfZRC9ubDFdX6RgWEDMMl9GV0h5zFKzVReNSeLrTOHie6jj21VWrUj461%2F%2FPjI3ZD9JqxrcUUxSAZGrf6Wh0w6K4VKWrgKMZ8mjI8ue3rDvke%2FMn67wKMpwJmrSB2lPFQ9CpHwaFs%2BG4Qp2zIEWMUe725plvnBVt3vVehNgSfEjeQ26swP8POw9on8MKNUioOD0jfIX11tRf6piuUBHxxk6VAMHMsJalDpYS58eAxxbcQeyzI7hTrMWjS889tFPCGqgbu%2BuQevV3IZ3FUy6boM99QZGSn27zZedcv1FcJ5kZsRuzcdDD9WNvbEQNJ6nbUlxLmv8eBtr5fNWRlJ9rnJViNmdtvbjzUt7RbiqP7%2F3pv2lk7MKLvmMIGOqUBb9bU0Xi4W1r7w2%2BSfTiGrHG0Vf9zlCvzCGgLXyPAXWzjsbVGQiHQQgKS61eX2Re%2FcK0tqehvKJC2yz%2FMXJfKqEnwUKKJMt5mikXF%2B9tSoAYoyZVOif%2FsylDSia1uMhDZeqN9%2FmOq%2BQNVEGTJbQmZTXzUWylMPwXi8QMiUFtIDmnvxmGg2p7CDAxsRrgsEhtgxxLQACCDZ5CK5H6yPzrN8HF5vL5b&X-Amz-Signature=d913243a46a8d8ee499a6ececba70b18082159140d2b5fc683a8e8047f6283df&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
