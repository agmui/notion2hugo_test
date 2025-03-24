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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPELWKKO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxRzb071SKb9h93Rclb2JwwwDCKjRkerv1I3BdChDUhwIgKjeolzw3KUQ0N0shJnNNl4BBdZAnJO5sPPSyPEoG6%2BoqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPGA9oocQxXtbYdUCrcA9k2jw9tURHYc%2FNfAY1O3DGr7nAL75h9PTf9f5z2X8Pvarfxo4ChOiu5Rk4MJVmMpRKzlONHSfgt0XqKyNEOr0t%2BUgIhMHhos8kjvjHKJdwwhHtDrDOkEchwkHMltqCZm1k9JW%2B6UO89pOYqQCa4ofirtYXIKsCcnElzNNmB0zeROxtEMlz6YgmPqXGFcACzLBVVOHsjeQ%2F8EwYL7tvFtBm%2BXDDEj2b22LA0rPHvR1Bf%2FNGjoU8sssmYdPSLu3RkXc7zxP2HYXF%2F4jq0jqEq03tqWSms5gCh18kZTaAdEbR91Gq742YhXhv%2FwhtpWyYIRusnhjxWFGtt1InK1a1Nn6xw36%2B6Uy8LbpYBpbu3MwEo20bHTJkyHTyLTiuXz9q7QFNY8VbBgKgsXk4y3K7D6FAOjghGHhkTOr47U8H%2FRhAunAaIpkPur9PDIWqUvHOj9KMmLuu8jG4Ps6RyDz2HS9H8uL%2B2GK7UBZzZ4GD8SpAyOf5dZgo5lpP2ZooumQqNJqzX85VoXouLIZK43ogenl3Y%2BwrvOooTkNA1euEuKllO2dFrAGQmZ3lgHUcBbPPwDSV0r7Bn9RQC5bj43p%2B1nc%2FXcRt2V1PXB0LILTAQbl7%2B07S9PTxpvZzKP3O2MImfhL8GOqUBO%2FmQqnIB2%2Ft31VzfR8jtZpN7luyRK0h7Etp1gKA6gDuAUqtrTrobAXBa9XcYBOBuSaj7YthEa5%2F0JqWiQQ0gcHXRL1TfLhMhH374guukxkwyqI1SRsovpT2G3EAqmu49n1SCzJT7RfrIswObfdvqVvthgCq%2Fb6dfQgKlLISSg%2BYjZ4BEeZZzZcl7ZOv92umnVIIOgSp53Z3lP%2FNN9ZnjMndc3XUC&X-Amz-Signature=f7a10106c0a8dfb841da0427db9cdfe98464f21556877b9831c0816d278d8b69&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4WXY4XU%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHA7C6RVY7iR6%2FizFCgE%2FjnLLL%2FZOU1jKivxWz3q93W3AiEAw0Sc%2FGQ4V0PwreBgp66UxVbzzOMgRIq4WhgNkA2pVYQqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC0hQ0OUM4rSH%2Bl4myrcA75O1Zb4SgzuFAwoL2SvFDyE725bl6bAYMktdq4gRiSqHeJWiOqdXvXcaX0rdYwXj7oAR7DqoNJThyD28ODOFF8Ud7kxmuj%2BdFT1AnVouDQUsAlqmOJeXXk0F3HhhTB31D5sYj35xkCP1dI3ERmUdCeEEUjn7ibgITs%2FuinbU2PTYHhQ33ZPd2vVd%2Fuy18XItNqeJsC4fYsXy7v%2FjveBpz4n1%2B7X3YTGZKRt976h8qkLEbWxq8Xdg%2BrWRafJy2omQgJF%2BMxg23MYiHr7hOmQCaUbax8xZUonq7YTv%2FY2XAlycndUMeL6A6sSX%2FPWnYO3QZPKOVQAvU06SHWpIJcwWnO9fXb5GMKtvFd0qpSALRx6h%2Bwyst6kCeanj4AHNIoCgZ1e57cddfFkA4%2B7qgMp8w7S36ClojkqqzzvNnYm04XnkVa4u4gXYcDjCBuvpoBdLOe0iGGU7cdJb3QBIayHnTl564AKZUgO0OBAosbQAdarsg6h5dUKp%2BblhIGBQztkpozW2pr1eqjNGsoNNXeQcKoiwc1XZpQHHxboJmiL3d3z7Fg0CFuKm2iYRaQ9H%2FTKWtHBbPDdoXapWBK8TXBAU2eDvVkozJjifN8IMBvvXTDkCHLAcFfQvpnL2ImIMMOfhL8GOqUBbCngjUv7c78%2BWVCJhy4nZGUZHSpivziVqYpW5Q2MlGdA%2B6NyMTC6e6gRAbZl5D2Ul2kdEBWseJ2onQbXR9qqD3LjgQD%2FDVLuNnE%2FENiTig%2FXpOq3ImYq7l9Om3vlU7HHzOvY0YGYBmgQhsN%2FK5Jr5pdw0xLMpKgEBjWPdXx7xcBciuAopb31NAwbaHuVOdGCWpL7MI%2BCdZWVyl1MCkpV2J9CTwv%2B&X-Amz-Signature=2be438b9e6b52bb61e032a7ca9f657e2ec3bcc9431087489f0db217cef105c95&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
