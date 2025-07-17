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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X246CNCF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIE%2FLSEDhWJYpL5%2FRHwm8AAa4ceooXzmNYVHBLGBVna1LAiEAy0wmvf37otpbGFBkgMsws6WQZaaAPiwG4RtI39TXem4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDErQR5pRNlcL90ugXSrcAzrLkSroVEQKTrJM9f17dtaspWHYgsEhe3gotLrPuZ%2Fe0HkwlgbC98hHOk%2FfJg9Hlov19clEm%2FPQATjJd4zIHaG8VGCJSj7xpIBKWLSTHFErCQeecoczPNTQnF5tEewhxC%2FMqck%2FeCXRukJ7R5BiqSl9zG3WgnkMuP1M6CyJHZPSHMR7oqpNsDyPlrj328fLJ%2BJrIyVN7nBBZcL2vgIgz7KH%2FI7iBP%2BQiYvXM%2FIgwXI6aj1O75%2BTdHdlOpdAj1S1TnFigbPvMmGdQ4UC%2FK6LHanE5aEOEjLjB3rTa89nv3maHvIJMnXkN3yzaru%2F1sZl5duAKqGf75W9TjF8gNzAS26Y2rOXdjpUgaXh4RWKu0MNlz2IB%2BGD8hgDNZtiMQzkKGQrRmIwklkUkEYgH%2BJOXbwK0i6gDKzIgAjqpizxV86aulJRACyrCoZ7IQya2zEhUgmUAonmwePduBZef2wdx5lIb8BZy%2BcGtgBvxp6QuQ41opw3QTWR0La%2BDqF6u6gPvVIHGapS2a9TNQayzw5OAvIcQgxc5e5S4kkkHCsc9B%2FTH5wGa6CwKicgh6DV0LWiz6DY3Jq0HR7PsAudpzBxdJ9HhyMFNulhR1dHaDgKw2bObYzUM8i3S0aFpOJGMK7s4sMGOqUBmi73QBcmK3jtZ0YxQcGin0Lcw24nTE2HvtAv%2FpyWDJj2RS1%2Fsz9WlrkPOZQV7D%2Bf76R2IqYmWq9U5WN1ufV%2FAaQyRo2ebQFQLfYanYVxDM2%2BHQGPw9PEtiI7sfgJ06HHezZLmZmK%2B8J%2BrcZWakV12foxH3Z6CDX%2FE%2BTDv2uoqFp7HrplHYf%2FsqAyGbtb7Pa0U3KveuSCNhBpflxq1b%2F6MjGXZOO1&X-Amz-Signature=3686fead49f29c7ec75c198fc650e114ccb27f8f9270d7cc9c28e8d51d17d08f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LFSPIKM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T091402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICWoR8QVGEd6%2FUszmU%2BICfiupzPODN2Ztp6MTjOzJ57JAiEApuRQjRaHwqPezwvMndteSI5YojJUQi36d8Fpnbi6V20q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFp86etJ83LgUmqePSrcA3GJ6n9he7j5f2NQGaLUPJ67h3RQAP73%2B1ZQzs%2B88AQzq7OD1ScTSlRvgRUoP4qPfIdscRht0rSl2T9K7WO8%2BouvhsIIR4lpi1rD4qo6ZgoIty42pfhViG6QdacFN607Bwuo2JTLMXbHbQBJ1RtlChNGA6CuMgEVU%2BEBzcsdJ%2FRKaWttU218P0bO4XXbl1ZOdPDcgEYtN8p5M1ufNlaPrTDTUPOvhx86lvHcv%2FIiUWF%2FToQYn2ztQaEK05OpP4OE%2BBFa0A6mx9I8QG2YRUg4oNJI1MlMMsfQhCae%2BEqKsqThn%2Fr4YZl9lJMtT6w7iHcmw8O0T7wjuCTz0xbLEX8BJiqFkWKtqYF7MJWXMwCBDHn1huAblJQPidUqbDjiemIFSixxHjwqK3aYotJukkDjppM247YEbNAOkLOmVw7iznL1AiCra%2F4j9vSr7j8Io4p1hEvsflxOmCmWPqV4WOvxa2YKzS6bbl4vFvMavF63WaUp7aDI595StS6NDfbxI28ZkIf0exyxuw2UGRFO7Kb2C6idiWfpCB0hbaYaV4p9wvwWisnwyp9LUuzLjvqGcfzzv63lJ5gl9adt8YZP7jxOuW%2F3cslEcGJhDRXBiYQ8t81YKJUik9siATfX8JbxMPzr4sMGOqUBrVPojlT3bdwcOBHrm%2F4cnq4swlz9R99s2MfNT8n0rP5AtdrPu5Vmqem2hwrxk%2FGciyZIj8gEj%2Ff%2FLXN6OG%2Fe1e8ie3Cbd6N4x7vNtwHc%2BpzM%2BQ5EXhrEbgh%2FjQUZeH4Y4HdHCdOY0sAA51KcPxSuaJFpnUHCuU9SQcVVzZxLFX%2FlgIKCTlSvaHEmLYW0Qo3aQyubIQy1nXmw%2Bwqpn6kNEeDCW3Pd&X-Amz-Signature=109c96c58754ab43176746f5e50eecebea0d760e4801c04c6cea7a276ef2aca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
