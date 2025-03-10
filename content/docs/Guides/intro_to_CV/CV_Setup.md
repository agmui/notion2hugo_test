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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MELOGWU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFSS7x3KdCiAPYhk9yF4dDqdeOM5gInWKXFDTBWNBpViAiEAkMPb0QRBe%2B6uVND7A3Ai2%2BV8RKMO%2FR0n2UhyIjx4GjYqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJSORjHL4%2FFCs1Z3aSrcA6IFaJKZOET3rnlUWCqTp9PqoO5CbiBDpjI9e9q8QGwHFDB5ejF%2Bwru0I5HTV%2BQzeUw9aLrU8VbD0gsn9BRC5Uo8AIt2AKQ7aakdQVM4Pri2fDiHw3kCvx2zMc2P4aBDMkRgPn4TKaHP27smM1PZGkrjvH9DduHOgaUH6WuiALy3XJhm9sDIeBfXaiNy%2ByEqmUh9EQg%2F86sRY%2BRWONBCBYy6oZQoUBEPijI%2Fs1%2FUpoBYThjq7oi4n0cdlS553hnmDlvVkxYS%2B0U01KEFaQWFKxvG9gZZWhtku%2BQiybkDXDcyDDT%2FM%2FiZoxQ8WtB6QI%2BLBzCkPCqNQVnE9Ux4C9qLD6Lt%2Bp2bFvu1rOHK34Fw0wImZL0ooCnqL6RnLtSOQQZPr0S%2BYbt3LwvKht5YuXPHEAoEh1mJT9lXSjEwDK8Fayw3twYD%2FmTvuOvRoHGTkGmkb%2FVAVBPvl0GnnRqQ%2Bt%2B62nLivPf%2BsmgzONGu6HuJ4ePpB0zmwBWxUzFhneQBKFPi7cEg6diPrNtYXJ0OmwdSFm1sYGdXfZFpDwRfvgA7nOoNIdj3SnTmiZyQKItatn3WxqOoGST0ywDPt8I9ghHhXvxMmT%2FP2dc4PXik%2BBMjqyzDHL%2F4FCyOu3Hu0cOlMPPLvL4GOqUBuGWJ%2BCbYEz5Rv6uq8Rj579ffRP%2BfJXZpKgEqxYJ1I%2BlwSvsEicxgb1XtM2mvH%2BLDIvG5xcGJSSGZ8DQtDqtK%2FIA%2FdXMsacGlo1VZ5GDhGsi%2BNcFgWxddDLA3D6pvzpTQuin3f7FnfNp3UHOi%2BF8VcoimT6LViKjePDB32CixjkqpivmS0EOlAagi6mdvvo5eADDqzWUA%2FUhvCE8nbvv9tzLWW8BK&X-Amz-Signature=a24fe128d9f8377c75f01bd1eab68d71d7352f2ec99248f6b3c322ee9862fc28&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FCJPPVD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T190225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIGwpNQ8Blyx1KXpbFCVt4LD70PsMyQH34CaEG196WchUAiEAlIBL9GZjxoAuSQShXqZS1HG7F1b3ZIXD36mApNwQeucqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6N4HB8dBVhs5BTyCrcA5wMcmyeRRjZiu8aYV76myi7%2FGYhKnbUNOhAy6hgk89mjNlmloKD7pLBbW02uhwZcJzN%2BoOZOdOkldxgVm%2FuzeVo8QotmO3Ks5zvb5kgKoq%2Fzzi4kA42bdwiEJ2J8QxcqSLoTbXIaGXo7%2B6naeFVo3LN0x%2Fqp2Nd5mZBkbGOSw3TCtGmvAZ0CQnU13b9nFT7b3T4GFL1hi%2FL9VfhacDXKIICek%2BmKOyKdO%2BiFwVd4lc%2F95Vqeq7RHWkHaTJaj9Iii6dA7eycjc183IH7saCA8%2FDLxe%2BuUt5ue%2BnJwlO2nmdCnVYNpsx5Y9swHVpL%2Fy9yYNo9kClFsif5qJzziDRspcLB1G1puPCUpJsWxXJ3fTd1BGuY72JsxbP673xj4PURQkfZxCfatqCWQeHkjdPdPxhY0RugM%2FQrjacfKyTGahv0lMURdSrdXPJHl%2BYCpAbmtV40JKOTJU9po%2B6VDXcFcxfEzCtqY7XvL9PLhxsh0Eo2Wtf5qXffchTUJiPZ%2FmuTeJa8o7q1yDaIlB8BB%2F1DL3sEx5rKbofewEdeXGs9UOnh%2BItW3SQamDiEmfb0mcPze%2Fig%2FiF4plnz1lMDWybkyBTtueNbrY4qPO437S%2FaBUx%2BZTql3qmgpic0T5jNMM7LvL4GOqUB3nrjXmu1KA0XikZVibeaej3f4Sfqudz4ae3YAJ22dowmBLLLIXlvpCFEkGLuiz1XvyiPIyUHN1bOw%2BdVE4UKaXpczT%2F6Tnds%2BuV8D4OBGEn07Xz4ocWWHNwutY5AE5h2IriApNIL3F2HfcGu6APE520PdqX6BRLgDD7vtan%2Bv8s26ZNvINd2mx1SJrCMNUmvVxisYovMiq1VYxi1UFwRmLOunI3b&X-Amz-Signature=9ba544f8d4c002421544be097e8137067cd592489d67a6e6467bd076b15bf797&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
