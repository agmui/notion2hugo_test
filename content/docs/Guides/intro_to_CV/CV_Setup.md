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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SZ5LRI5%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUVGNA5kOy2%2BHp3yTUe7MhmmlmGJWR2f2Xe22YjBqvhQIhAJd9fKgl8g3Na1X4HaAAivU8tG9SLd5jGQsE%2BeT5Hd1TKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwm26JmNs%2B4LBdQ0tQq3ANLkKOUmJ6aZVnLumieiu8auCgiDAgEsG1aQQfcmlsn4ITWzCtLAtRO76b16L7PA7wvvZJ3ovMp%2FzMMBAeptGKCYllA4iPDrgRjnOebVNOaUhzx7jCyyD%2F0A9n1r7W75TPkwT%2FggWnHfVvVFE1NStkl4yX33yKpz87BpX%2FAz%2BGy1NgP04Vdacj6a5XAhxPzNHmQ1n30zzHnSl9kTIRYRFuDwEf3nscLt4kgcMz6AFW6k6NU0YD%2F9a%2FueKGSSk5K1iFcIPND9kC13PuOqHB533PPMPGtdje2O%2FGYvS09qKPex3bOANidkJsXjDZLOb%2BrZ7OfrcG9G3u%2FfVrxFhdjez9MED4B8ym1fPeps6bKiBBWyGC%2FCpKpaOP19gN%2F%2Fccj2myyRLBBoUZ8RPxCyZ2CK9RGnHgDzvVpwID%2BH3PRb6ZvhQkTq%2BZ5pvAlLV7VC3F69AyTsk2tm61%2FCISXk3c%2FoFOBFSLoNbN0i9gYal0Zi1Zkm0Xmuce1ReWDIGqoHPZABGcxHJQEW5Ue%2F4cU%2BHsFm4QOwyrQIMsu2r1d%2BUOIT3NE1xgy41cu2EjCxcbPr8mMPUyNm5cpaQqkCtVGi8xVk2DhdGms5pzwA%2FyA4sWA7lEAgZp1exrhMAOxKg6qJTC2xbrDBjqkAaJwcKQ9aj%2BWYDs3%2FdH5HPpLamUihVPghUfMHNNQxaErMetM%2FAC5qMeZQhlFMJl%2BAe8eJNOrNS42fTwAJTuaRfhhWHaI6%2BqWfT8OZlxcGmJavj%2BTYVqu1KOcoix0K8boRre%2Fb%2BMCGke7%2BDetP4pnimSQAi05bHRLDAjnd9M94TFIKx6W5xsx4%2Fr3UG8TxQeLQpe2hFKe9Igwu20XsKmuZxvwmfKr&X-Amz-Signature=f8a2a454c3de46fe5cc37c9170689dd0cd557729c2efdb2b22d3832f8a4660f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2Y5DMTP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6FpxtJmLhOQiR29Ee7qv%2BYySAuGALpyn85AztBUXiLAiBbZTAni8YHyf1Mi%2FM9AxEHz4Sx%2F8BUicjW%2FwmQLNL63yqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh5ORkA6g5OPmLd5XKtwDODAYp37xJpGORqGH8cE1%2FHlkAHm4CxUniWnyACKwLej9Ze%2FpAMpvkDVJknzkn0k%2FfqpwH1gVc2vZ4A%2BYabVigYiFsYHRoi%2Bhb1AvLxtujy5s1%2BUgIN%2BB6tAq1ESXTx58%2FdUAaiMOHr3iBQuWxaXrJsWGrKzpx5UNDVCsQf3NkP1z9rl0u7pidyWuAgQzLg6mxjjqG2NvqBHVaAqCE00Vc3iG6zXBEc7oGT%2FbnmzOvngo92R%2BHYR8esCn%2FtCjqbm%2FUFdBIcHah9gJOEgMEnYVLQyXA99FkruZ%2FKg9KM4oG14LifoJRyhcGjT5mKv1wR0hTpfWijMHNjyYUpfumofEB%2BG5cN1Gr0Du5uomReDtnt%2F4Hze%2BbLRtqcLG1XVvmLc7vz%2F9rA%2FRRzSHqIQboNUHAjO0wh9g9C5AaGDpJLWK27CfoI8QBcycIE8ZeR%2BStSSHStfAnITPyMZukaQ%2FmGGEiAlulpamH8HbJBXoga9HtBm%2B436KcpiCHtk4j0oL5YgNktBkVdsACSjfLYfCBDmsk3sveNehXYqHZIEi1w6cV8ofp1cRYyy0upl1F9sTfIpD%2F8DaySqJSXHTYJz%2BHLj8F1JMgHTtBEAmostoi7YVXJxWOfVUKKUAguI36zkwu8W6wwY6pgHLApqRjb3rQFm7CBvovsNSvz4AB9e%2FCry66ASG%2Fb1cueSXaUCjplF5F1%2FyPP9E70D8ThQuXlWAIMY476WM9WgFr34ShP0F62H5GftBCEGrJuh39iovaqJidf5KblcYTQm5XQFgUVuVAxch9euMoxPJFQ1j7GNV6dp%2Bw1%2FKOdqlRoutnQJdvdbbyKYYWzk%2FJv7cz%2FkBkQtRFZ9UUWvGDoo0UUWZ7Bg0&X-Amz-Signature=d8ce2256291d3b75afab0ae4994162c04f3afad3b115228e0e40201e42cf43f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
