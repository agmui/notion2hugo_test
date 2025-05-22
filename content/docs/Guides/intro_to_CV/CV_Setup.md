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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWYQAMY7%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDEgLqQThjG7XWERk7wiHc%2BGkZ8DusZtmXlsV56f1r%2FFwIgGWCbaj97WEcXvz04N%2F9bflG6t0MtDA1oa0zZBmZw1SgqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJOGqVICTO5%2B2MaEeSrcA0Xk2h2fwtsgH58iZbYuoX3TohI8SL67E4OGCCkrTmq%2FrHOoLkkrEdp%2FdlDcRa4xTxQJB%2F69xjNVhVFqUNLYuE%2FHughRt8P3AXCEcIYvhn9PG%2Bl8uyMHTlZwEyhM1vNo7%2B5ISW8bRYSC%2F9cNtpnzzLbSXjqoXq97ZncWTd4KA0C0ZF3fdfIJaXilyYKduwi2rvpSyxd8Y%2FkIwhKPYN%2FKZ3YKGgaMPoC6wX6kCg3eoMGOvLhrGGXhsDLGGxzRzTQvMJ1OhH388DOMiiUWeyNKHcGMKSKWbmwgT8nN%2BV3SIgWSv181fN8%2FDsLiqV1Es0ubru%2FqFBl8KziHiKhjHuddMnAc%2FIwCvkgNPDfCs9RPK0kSJ3q%2FGLt0%2BSMstyHYfOxtyttr%2FtPAgmrK6c4eXTJDKznmh%2F8NZ1jnL7l6UKkFTY3S3Mu6cpCOPDdLIJPFBLjgIwG6xFDWov67Pd6yuREVuC5B2TD5HXndbCtTQHmqwNS5Aio579GrIw2PqW0Q7QCuhHJ972xijHzMKJpVgnNBvmu5%2FVi%2Bz3hWTV2%2FluIPmB%2B%2FJ4DJnECwrXbfx%2B4XsBpaoq5IEimmdOnuALZStJhYZj82JJ6H6YIiQPVK%2F25b17fQXE48D7eDMXJmaSpBMPDEvMEGOqUB78imiaBegsfCVclYpJwaz3zVSfH8Yn%2FkM%2F1ez6Bl06Knq%2Bs%2FluuHS3XCLgv5ih6pp1Zt4L%2BAgxNl9ut1gq7eq6h3w7XZqsNJoRgDFnT6eL3SCfMJknYcss1L3mtK5Ne%2FpwmAxsZAiNWJVh245jmSAxhZ9sqba%2BtOeO4%2BVel51b06ROi%2FMM1fX6pjotjoC3igBN2PRjepvaszlyN625WSmikyeUq8&X-Amz-Signature=83dd2f94dc64a13c07aa5ca5492c4fc8ba7b20919e86f06246376a2f42725958&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672T4T4CC%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC%2FdUUTQGxVJ2oEOhXqnP5CSk7rbv08UEqFdEq4%2Fv6CVAIhAKkTktiNbH0n8C2oVQMtgYaNp%2Bvv3RatLeZpl8z3MemdKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzHdGqoxpo%2B9xvf%2Bwq3AMLojUbxewzNKhDJnTOZru4Gm8Rjd9r2R0%2Bloaoa0QBpSFiVKkU7oELl2s2dSUjBDFTiN4HAXXqc4pdRgzQOQduAMpqTzsLPruFoEayHOys4SanehNlnHTCZCVyVE%2F7m7LYm%2BvPxIaa8cOWXD4puo6C8VMJli5tAoEh0VdhbvW50jvJTTNbsV75nlc5qAg216oAEhPQXJOVtZB6Mf9Au4s6%2BGuFrFm8kzJAe2L%2FE6%2FeQoiul5DA%2FA4XkkYSogd8xDwmorOJROf%2Ff85JWIGQeKQtuaLyy1%2BhxaghyUr2yle1aboA3hPt8QEvBb9i3jiAX5AOx3uWnql4T6g8Qyr7%2FGMfROaMLz3Jm1bvyrVbnL5qJMC83RlHZUmiwUYnZSZqzD5uHwBH1NYoF7iCiAKR%2Bm68gjRR3TUKv%2FkO3b5xtTHfFQ%2BQdHY9faiD4SzHHcrQ6TOLI%2FErHaQ52TTW8EdxfPIS%2BILF3%2FAlyXoybAO%2BETPDFxQU52pwOjFyqBPSqwplIDu1QgZWLvYHn4qyH9g1XzK9IuurQiyoEGMF9ECyfkD%2Bcru%2FjfUyaEFlm2N%2FYhuZPrDJcAbWC901kGjSK19tEuMxk048S395SQYtY3CXeFPLJ9NW%2BdBkYYlUflug6zCNxbzBBjqkAb9sBnW%2F0naeGC%2BIZnAbshKE5x0e6%2FVfEYclzY6v1S13PG8urzrcQGZCtm3MIVydoLgwNZFaWANQ7UMRCKZtpqWBLD%2BqLEE9L5nIlYD9ZbIrcnMdG6n1hjVkxYE5lDYysGxv23%2BmxKmEmuwTmqhx%2B8u1F3hhxPXk1U5zjL2hgw8iJawP2hyIadIJXgsni4mV%2Fx6sBQHCss%2FOqPYFsuaCFKDXk0dv&X-Amz-Signature=8ddf1598dd4d046244954c753761da3a04eac85ce3322740650b44a700d30089&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
