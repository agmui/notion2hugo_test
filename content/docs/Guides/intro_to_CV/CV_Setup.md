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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IGBRQY%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKZDa7uQyUSvIGelHLpdPi7dVKVjfDAynhv7O6dAnsCAiEAszoi5KhG3TKWibk%2BXh7RhZ3eIqc%2BmV9CJe6vesCZDkUq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDLQ42H5bblI5EjsJ7yrcA6wdx%2FRyTPaaUyIXNnKKty6R6uzBP3VUl4w3as9hKS27rqTUDYYEBUCPJebOJtFp%2Fd4NqgVbbV7hRKR7oHxtSYcSMSjEpl5T8hsqt7WVkjm5Ue6vcDSxaKkBvI7llx2wLdxr3DiIhYzxuKr%2F86XJflRtJjuWakYZO0jLJC8IqXRT5kf5nrKT%2F%2BBZRDgus0LGtbCi9XobYpjtycMRC0yzanNjnPlAfCr5s8lr%2FRuQ4Msb%2FVEZdS7XUJglSBXtyMUai7OVolDrgEoy%2Fzs71uq7xuNrmkGCOh%2BLrWu74BN0va9%2FE8xUICLy8zBmrhNZs%2BzhF93JK%2ByVzLvXaVrNb9HRYXgK3oFatN44B4CZXqv%2BCK3kZCyVbZdTAPDv%2FSZtNWlgk97iRPEFxDkt5wqEEE3fwZB1SlTbi9fRFJW0BxHuTpGuSDqEAPcW9TCcIGTR1G2JsKHWtfpGk%2FKUA9FweE39AafUWyJYyxWRVhiHa%2FwoovxNf6vBRuZf%2FXz6R8d%2B6G5sXptBSpuwbmFlVGQn5xoadjYqJO2XZQHFnRIFFaM9z7ih9DC7OGl6LKRAk6vs6xkm44HK8YU47mtnZPFewQSr4Gaq8iMHlQ%2FGJsSsAhnguK7SHz1UiFdwPRe8%2FQpQMPua3r4GOqUBw0EqDRqMZW1WLUiorVn7DlEQgpyIn1zwMoQ8CReZtxjdacErKInkOfiKZoKSisf5QvPMr31U5UGHGaiDgjYotKDyWGvZu5xMirBuygKC1VpExWelTHBoSog90eE4lRckOfsjLzzrSahgdvl3ijrOl3q7QGt8V80l5MXcdnM%2BJFhvBGoaILbVsJ7pOGzBZlea6lnAXTU3nUqjDNxJ4ydz4wEc2HMK&X-Amz-Signature=d4db56b12af6927cf92d722c6d664f09dca302c0cc1e825c17758c588e5c9b71&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LZY4D6C%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T032253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGciufH2pYGesJN0gQ1Vm1gSIM2BiGDr7sIeXeOoV372AiEAnVC484i94jldjvIX0OPtWbmunI8b3KssgvPwtPeSqm4q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDIjb3t0ytNhnkFV9jCrcA%2FTBHg0GnZavcJtBQk9lYHlFG1KsiXWoTeuwT7KQJR5rgmYyqzHivFOZKnosmDs9pvjrjtK5EWYOQyxbYGgjFafPyz8Ey498eKE7ae5M6P4EGcyoraQF7AgKcG8Wpsq6KRN6dBYZbbFycTwCrR7S5rTsV%2FGpdWqpkLZUn5btR2ctlv09rzvxtoXgoIprBzFg3DKlbP%2B6ZFxrVHJ0w92rU%2Fq1K3AVEfAPUeQSLEiQhOjvcpulUVtBZZ%2B3Ph0zn7oIeeI%2BYfqRKYgb98Nj7Dt0Uk7XorCo%2BbOsMTh44M%2F%2FHUMUPGfo0%2FOltM64XN51hG4PeaU0%2FhV91jmYkNVolTQ6Sc82lzudkXmkori6HVctaEzl%2Bp6FN7tAzdUs0aA0vTHhvwUTH1onDMNkBAhONwo87yuY%2BwNPpqYQZdjd8ofLnKfJB51CxrfBGWxYtjyE6qyXCZd8NWb7%2Bt5jOCFLmbTEJH%2BZ2XDFVvwhtY3BMydDj%2F%2B7ggrFGE%2F9DxsFEx563uMFsff5ingvpCb0FuduSMHuaVvlUlgQLnR7uysiiRoZWykdR5ZGUm%2F%2FzHf%2FXwplk57Yx05BpBDVP1SZNE%2FrDjaxP9D50rPQahE61GzYNFOvY59w8PapfKMLD59Kh%2BNtMKSb3r4GOqUBHHyqDdXXrSCSK0H5J%2BJhArM1q24T%2B0rQJDVmv8ctIRZwcI5uKoh0ztDpsmTF2%2By4zneV0rYdo%2Flv6mI4lRPRLhQJd64tdtQuHiwPp6of0p7lz9E4Tqo5QvcN5Xde7tZUnMWGllOqAGf2qhIXnWP5fNOa1ZW0yRvWdgzzdeVzuni9XreCAPxQlHjj3i1eeHq9KovYCpQE4wn31pnjlSXrYU8x2S1Q&X-Amz-Signature=05cbe59e56ccebc0720ddf4b51888e86e5bcf19041611339f358e8f763c54f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
