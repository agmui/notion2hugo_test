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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL2CNK7N%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDkDkM%2FB29zueghttApl7W4U00dlaufTL4y%2BTfWGjgDJgIhALIynR%2FQ7UvFAMFCh6XHFyTmt5ROvD6U3mkg6FZIeG%2BJKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl4EUU5FxdZ2bgojQq3AO2hyePhGZEEjfZnfOnvxj4H7M%2Fm%2BuPNVQTqw4%2FLUDw5Cf13ReFPPg5bzzGhhN2ohLUg1EFd41KYG50KRQb%2Bwl4S%2Bj31hr%2BBv612myoo0%2FEm1YSxzbJD5RXLclQGkdNogdGC2EUndL1kfFsYisS4p3FM3NeZUEb94CO0mFYwvDFGsimRGHsPoIWjDFn6hdhgkynVY2WHhBUJXBX9LQw8HO6IyHUT3F7jgZc4B%2BLXHklzAdndreVX5DfdafE7CcG5ybNaEFNHLVkNnssurIjrOcWco2ivZQcWV%2BuTk4rKbxrTrrHplTHClTI%2FAXW9xPZeOP83ybEXO1esF29nivNRg3BmNkVVL0h1Tt11eZFRLw79TbT0JI2RUZs8ptjmKgwNnPJob5%2FalIXUUlnqahdYBxj9twjLgolfFx3uLOEs%2B6WbU%2Bdx%2Ble52wsLznTf8iEUI2Wy5Al0IyReGUwUf%2Fm%2FI1P0vaRJDIW2fCRM807G5th7LSXD%2BhC8H24cd2Cb14cZkts%2BaTyyznZxfH1yumF4vKPzPBPOYT6gmo9gNuvw2O0MF%2FPoHJ8llHLfZyouJ4KbaJqELo2AhJ6eCjgD%2BVSJVD%2BBSZxigig4Atn5h0pgR3ZpLnAvbXaM2RaX3QdvTD%2Fhqe%2FBjqkAWlheI7ugbvBKGgQY3CkHSbH1NWEyuL55qpK%2FiJzNz3zLrqeztuaga1o%2FXVpENt%2Fhrbcj%2BQg%2BpXRFK831PeR9JAduaEWeNFcG5VxHTU7ZavFWcYevsBKLd8Mb7I%2B8wTQlWZpCwVidOzYYihKlE%2Bi%2Fy8VWQbZxmH0CigAR7baRJWApqHpAGYKk3zUoPnbZ7owpyDkrgcDFSRebQDzAet4nNVJopV%2F&X-Amz-Signature=4c136bb84cced6756fd97681eccf8de63a3e97fad228c3f75471fe6ffa913c05&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KANVZFE%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDDQMIKQT7V1T3VEeTiipeEYKgxNa3QYhQCDr4OHzfQegIhAN%2FglaWtKDVcFRI6Gkzlwal6TlHnSsV7JVXjka%2B1gzBgKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzqtNF4ZNQIYbwNngq3AONgY%2BeoZNdpQ%2F39cLzZFUIGXZPWmw9%2FrsnZFzr7X8D8hflNxJkoG4whcxNSKIC6gDy9emysp5HbSY5y9YI895BvExkm9bRO2ZxOT6nT%2F7oEyX9xw5hCiyrcxQOejZVSxI%2F2HBMH1xFWoGNY7PRVBeVuNt0NyScZGcHi%2FAWm39xV9giLG8NfvzIcRnbnUNnERK6cfZ690q7iysRm4uvS0imsoY9%2BJyEPPBKbSb0Bz7cYb4PozzqvTWtLwUkqtDc0FEu7%2BPLo5Bm9pUxGVzrmCDd5M9rief5PVF%2BunX%2FG3UjSSoMiVG97ta%2Bx1%2B5q62jiLjcyEQvZpENYw8lD7DYggBQNC341qUGH523piJtQ8rgv%2Fvl5WMy1FRHzELvv9wMmoksMZKQvzmrlXQvNj8IEv3q4XueEExuxm9kXCf2lmmkRVLiconBsKRAytBqq6ciCm3eYAP6MB0GgqEuWD707b0or4LDioUJD1q4k%2BTf7jAj8YmE6851ccKMksW2cUVXC4avY%2BQg8019iWjXjimVbq11QeRpKYmNjSc2JBVpwtuFJUu7%2FWPg%2BWabAMji5BFrvRLX%2B4w9tCtmsYyN%2FKnerGKHFAPgT1j44viPr3ks0p0qSS3FMUXnpGpt2pl93jCFhqe%2FBjqkAcUn31I9U9BjoemVnzvIbwzc0nUNmxGgb0pEpGTzXELJF%2BAAdE%2FCr2bxrGnxR1OoeCi9t2f8EZoQeIeD6pwPmlpx56iPi%2BzFKroA6uNkcKIgz2puNtHMP7tOwPOrtRBtjS8SvYulpii9sniiQ43Sz0uz2Ul4%2BonerTb7UPhqZzQBoNO0sod8wpEcsd5gjiXJKJap78FPSJ3Cx5vP3mdXo5d5Em49&X-Amz-Signature=fd49e9cc8f5a21db37df75ab6b4feb4c2c70fa0e82415b29b9f153ba8ef176e9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
