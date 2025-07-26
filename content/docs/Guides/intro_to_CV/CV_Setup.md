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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RTTKY4E%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIE%2BVzsj0XKtB2IVCGVhsNI4wIXC6WlozDSY0pLKM2j94AiEA%2FY3DECguSnksKNhcgt9EyjYT%2F1MRYcFYLWbmDrZ7NNIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNsD2K440VpEGCRHQSrcAz0D3FjV4CLfxzH5qDxj76FkgSSnB%2B3EOlZ%2BR5Is6PPQyermNdYuWv7ulYQrirwU7KYb%2FJR6kkyR%2FfFcu%2B4Df0tZ0hnAlr6OooLb4XJ5MNOJntOymEaZmjlEwucUOzXCOfupg2qgXwcb1RbTTDLzt4aeonQ%2FNuoLrtSAs%2Fx8D66xTsx7M3HAW4lAjOYqL2tYPJlPOy7GWL6N69D3lgGfvf84qLxXn%2B6MOgpUi8MMzX4N57iKCpbxBAKp4KtxPmCdDUR5qQpAaAUp%2F1F7cKRi1slYOvkBCQrSVG6xRBGIZw%2BMFUdODcVuZYZa6n%2BCniP5y1XVD9ZT03DPySn%2Bl%2FKXp1JnoiJNRptUUX4IxW6F%2BtgOvq19yP%2BwhiRyennMPiJ8QvjuszZztiim2ES%2BZbXnZs64SwE%2Bd1Par0X49YYeZllD7ds7pU8ztE7l24bIwxoCPFU6p9hV32Uoe8deMvC08VVgPho6GYLzpPqmr65%2BiQMp8hrteyzmfjOHHSFRQr2x4IHlbnutaJDJGasULrig%2BW9nELJn6YyLmkMH9BzY9T903jr81WKfCsaL8dR0tCwoPrVOFG5QDOfjjHWM7xlhWuyPyDzv5%2Fo%2BWwPOZR64FW1JKjoBjgzbCt7kWqNIMPK8kcQGOqUB9yrSOIdg2lZG3fbB0zdpMcYBtcAPJB%2BmVlByjNmQ3nExmMTkIVnESvgoWrJzJ0sCMJfLtpT%2BLPsx0j55MBHqpqdTw3eH10huPlksC5dC%2F%2FlfMmYjbnE4yqC5bLGKFaLGiXcj9ZXzHMUdHt4Re1O36CQRlnetYt6eySIf91Uc%2FacXTMzWeu8HwvBH8uF%2BwLa53JWxeRwKjUniFdE0y3h6ZxmQtxWU&X-Amz-Signature=8cec1d331cb39f9bc9045a21d8bccc7c9d1f33a5f64adfbb138323326713519f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHNORFN6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCPSBAV8Ab%2FeuYaSblRHnMLPZda856uLTxVtSPRi6YccQIgHMd%2BU%2BZR7aQI8RWFWCb0bkTZGx%2FAKDLzUwtwkNclhYUq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBIoYio5GwZBHxm%2FmSrcA0nAJCD7d%2FvqSUAjng3UTByr2zBcb3KUerIXOQ57zCoYBibIJ9uUZLoxEdATWdyN02ydZuG9R%2BbHGQvB%2F9I11oOmjW14V4sW9Y15RzE%2BhLzIeGP%2Buh%2BEhV1gzMAK0yMPOqqZ6fzcwJCaG2gpFbkAIfogGi66ij%2BKI4mIDOtIsGmsauWY%2BjPuP5HVXikdfxMDKb2thBWzGegPgh5aiwTO2U3gdXDktL2QmNh7w7X7O8MydI7bj8PMeLnN%2FXOzVOvZkyxDFvH3PlGe%2BeMwOsZr5KDON8lVHXKQgyMb2B21yU9gWEZJgwvviAZ3wHtg3pTGgsVPvAa%2F%2FznZVGyqWeXotUvY0lAxtihUmD23BLsSZsX4PLMb60dlKjONiM1LIuaS6Gre6O3I2eDyDXKwZ%2FXGv3Alz3wydhkKwnC7TLST64cFo%2BJxjchlCarPdnYxCew%2FUouu8UwovurG2gEweAitv2EOfI%2FXI4gwdP0JCyXGTQAsXkOU945wyTmnaHP77G9cMIsKSmnblDiyRt1JHLUSzGxg5e8mZ%2FbuidzhweWnuPx4TZqeG6DRfnTwrT63PotHdzkEpnBUW7DzqsUzgW0JCJpnyKCV6bU8T2ddVQpeuopWsDH13tTyUJuAJufZMJW8kcQGOqUBdYLOj4cyXGjYEdgMS24qs2vEwviXJAcrCNbYr4gvtr8FCgy8gtCWpnJUcGFwBp%2B5cVffrfplnEp1fVD8VyfVjprN87z5z9W7xZ3zYRtOSKt2Y0dUscbPxfH0nt4LlNifOWaBAm66UsSb47zwIFrDTC72SrUFc21KF8zNIdiumHMmt1QkHLz8IIRz48CQj4sohC6Q%2FsQrQuHkYOBy1LUFnIWaSE0M&X-Amz-Signature=3803a65c42c54bc12b362be81d109052033219430b75583dfbd6ca896ee776f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
