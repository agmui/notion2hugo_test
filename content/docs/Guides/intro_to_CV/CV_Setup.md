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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6JTLGRV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIBc6cQpSH9bPTb4h%2BjHHepMo%2Fst9TtWHMfeO8je3GGmdAiBrj0iRMEKCjD73qZmh3gWV%2BjGiddIxlV7qaBtUtOnBfiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP2dBkhw8GrhdsvFwKtwDZojfiQYa%2BfLXXa4lsypt%2F03fTGJ4KJsvP1444DhdnT7c9m5tx%2FNdNkcj1xnl3XMUG8UEdpZPTegjsZNBNTB2Di81F%2BfIta122bQHCkEG%2FaCckiZmb05cbO83bRJ7reJjya0aom8vzxUvcmo4MxPRyQE7uswQSDmIWqMSUAUbEfA8dymh%2Fv44My9EufCdMA%2BflmVb6ehqLYhOMoHOnZW8lHzp6rfymBf%2Bm%2FmMAODUAY3rVYHoH4t7RI1hmZaG9xhHvGZCcqmoANStcTLkDiwpTR%2FcjbUEbgcf%2FCuTDYeCrlqTC1DJ2hL5wRbawKy6ESYK3kSF7mjK%2FRaJtniH13gMYGTz3SvhUwyIggsFy4JtKhlyz7NGGxZ6dppDkB5qIDlzWrULsdXMVTIJjsFcWfA7T9FjZ4oIUzH%2FduF8F4PdnxP0MJavGqAOTZZ5YPdgJmEreMAboXCLd2crYnH1KEHEbyvzyz%2FAxkt%2BFaod2VjlKjlx5uYr5%2FwhS9EQT9um8YKH5sGvoMCLw5OjNAHOemc7J1TNpaKagttMODKOfGPsGgdvpWrx2fj1xTvP3WvF36KDlWtiVGtgP7YOkAuXgQip2zJTDieUHL08G4GvAOsX1AzN8JIMJSq%2B37rybkMwnqK6wQY6pgGn5pu3tl4N13YySLDMMYBSjtab3zB6mLuHevK4g%2BqZDHBls%2FJV8Ss%2Bb4WUFlBX%2BOem%2FtqIYNcZhN8%2Ft9vo824whstQdgrkfFNlVbFaGQVVD73LFvwdCBozfnD89T9ftNELkQw4jN0ZHcUJoFrbvdWz10nG2XqfiAjHPp4BtKuXBGc7IYSun4vWCFkbG19sSziKPIgEkgw6F5KtPlNjC67mKAIp3Rrh&X-Amz-Signature=44ec3070d8640dec7e3d9f62a191e9348574cbbe56b3bc16ff45f5c1169a02ba&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642W6EDVV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIE1nHQZKavsheCwU8UY8wWVEHS2HBwrs7lhozAwkuarmAiEAoCjcflLFbxAEmX2eF7%2FEjhZA5zQZuCuH83gMAuUiWqoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOU3kKlFVFS9Xp6N1SrcA8ZT3ux9oZV4dEkjv1V6gODFx7%2BYYoAgzDXE3oib0ufLz7PhHmYm%2BU%2FLcZD5kgieWBI3FZ9w9MuosR2c1n%2B4Beo9t4QC1aY2MHnKpK%2B2fvUsfkIlUnBxHnWaVAFEx079yHlbuTmgP9y0Pav%2BAEvY%2FFTM0QyqjaKDg9s1hp6P3yJeR5lkBK2ZX56W%2FoWF14LrqPGoH7c%2FRqhSwYGZqLsnIZUKCusqxqA4voHxtj6vmCjtxFsiqUDz6AzaRP6tkuegUmqkIE6F4goRGBMD5xb1tz1sOM5yhQAhvDpN3%2F2JMvRFJQSLgEzCuvEaaIMpL%2FpzRVvP7kQxYdCEacwv2AlDBjC1NQrxQZjQUqMz7CpcZOkJWrKCoHhHkjcsAgqqCQDi23qekHTDfOFYu9HawhIqADVR2ytlitZmCzRwCHrt1Xfr0heNBI1l%2BJQQfH4eWtkJumFE%2FCc0O4uyRzyIPkjyppH%2FiTPcITEIw3UL4sRHaQg5fk4dbyvVIqizRUn%2F6qByjLrccoJKEzD3qF%2FekCNKJTCSNZF4g391bzJpNhMfDCS77GHuTqhpfG5DsRMZroW6kmZLNT8sKHtx7fyDjJ%2Fp2svyiUYRs4GYqHYvyHaUBCaYCKgx9mlI1znMdACUMOuTusEGOqUB%2BNIeGQwu0hm1Zol36%2FM8xjEvkvtVS%2BShlzAlYU%2FaUtojb3UbKh1PccUOdjbqtM3%2BtfDL%2BZwLUQukd5iQavJ3IV8dCMOFjKz49NHmegZHroiucahW4wo1Uvl0Hfxb2cxeXE6Z49yQOzCvfEjS63JI4PwhUMlRWjfUk7OmYBxNcV9mhEGrXxW3%2F1JDqh%2FdXOx%2FUUf1nVKAZ09dl2WI%2Bdzg%2FSqM9uHs&X-Amz-Signature=ca48b40aecdd6d853bf61959a1a6d574f41ff8370e1930f0697f3ad3e0923a57&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
