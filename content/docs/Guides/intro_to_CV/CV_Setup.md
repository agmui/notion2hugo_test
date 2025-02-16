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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REVSHM7Y%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIDDCCi%2BXH77DiMr7qpDToYGiRaa7S%2Bq%2Fmxd6Hq6a7vSTAiAXqGmkxu6%2BYIjOWalBhIfbf1kg%2FY0ArIM2UWpP3BSBYCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMcuUrRqW4HTUkLCdOKtwDh%2B%2FY0%2FYyPFgi7pOSS253OTg2itqqsM9roeEkJepS1GdtDsgqigJ9ZJcWpbjejHxV2moxbQ20nMhV%2BTrLoc13i61MYyI8bP60mKjh9oBHdINilx8GLg4zWSIjMJjZ%2BaEmHff2ca7RGm0xSnNGpwIDqRVDAr6vQx3vyyhUPOAMfBLI3NumC9POEPw5Kg9ytP8YVgb47kbh7k2KCHLpi6X2qnRL4NuRi0VM9OqTHsdBhrIBOgliRVAfJYor3uRnExpdJSwGsm0s5rm3blO9ruWae66oWs03YJSuVDNo%2F12Jk86yBgAs0tKCxgdaJOr%2BaS0cqOkogoXO6%2F4U6e0rO%2BM1osHodH1G6RTIfI5%2FCrWYFPZP1XNq5rgdPaaIyA6OBQ%2FqZG1nr9ilogSs6qksX1S9RTn9el1KHTaL5vbC0%2FbhKD76sKW2vJ6iGtzh6s4S8YPSjpr%2F5D%2FGNzjhZke4WUvzjj1612NWHfjsDwXzKRWogvFplfe5jzq5fr7upPyZqsAFWb5emTZU0eTVUU6CCpWD1QHQeiF%2BA1THh%2ByqD9TB79bDrvZmEFmGvy8%2BtnY1%2FsFLheOM4RsZhV8xvhF8yEeQH3iXWHJ04aLr0WvboHeBAMDsBsKAriSE2CxxeVow0qHHvQY6pgEQUjtYD%2FcPmVues4BI3RO%2BHaNHrg1307OOS%2FtQZzn54VyAVnhKeFX1UadiulM1di5L6w2ar7uwJc80Phm10gVj%2B46YLK75oKmxStT73v6X4tME%2B2EWtPxibW3eBfFiWhzGyR7wmSRH297m6IX%2FktTIvEj6rbnefmoOmlllCgawJK%2FUROWsUxY3pYxNcbK3LG3qmnnbAtfoFxQXNSgk5cDodPltPzj0&X-Amz-Signature=b98891ac5678fc0198160728af0561280de112737cacbf1fbf8195a8df94e9f7&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLIGO64M%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCYj93Ad%2B%2FoYfTiuDTlYkyTT5BiB7JpT%2BNSfMvNUKU6egIhAKaO%2FEhHSKdroUplmdgUd3vy10lN5rbNlp93xeKvbJHEKv8DCF0QABoMNjM3NDIzMTgzODA1Igw5PjRr%2BsIhFnRBS2Uq3ANmoeQvZUxhq57dN18fHkZwYkObaGFOCYncPacP35VquF3b4Qv6XUiSlj%2Bx3xnaWPJYN1Ezr9TatMHGnlye%2BGhdTF1zrJVUPNAoT2lPFAYbC3RTu8ryKogyFerZMFlFULx9sl7SW8jFR%2BfC%2BjgnjczGDZZfQnMzE3FG222KhJ2045Kvr4Uw5wxz52FpDcZl2EKmeLxKYkFyOD7coVRpeolCjsikTV6KJ7KYWgtOOfir6ZJLBC8Q0HWVGr384Sn%2F%2Fnz2slQBquED3uTDfNlMJ4D2J1%2FRM0Ntvt9%2B5ZjnXncMwaS7sri2%2FBT3%2BSIUP8ULTV4WbRz5YYeBFYozKSB3WbflKFo08ysmT18wLA73ExazYQw50g6m1aB9v30l0HsjCb%2FZ%2BZHeK0nWxkZoZ2AoS4Y19SIMuCqMUHJq73F%2Bz17mAAJyR%2BgEG%2FwSJA1QfmJfW52zXmBSHXrLEKoFyA%2B5eXwErldIYIGIjta5tMe0BZXilTyGCN3LM2ZWiTsp%2Bs%2F4sm61c0A7zF0ixvMI2BI1XlEimkyIqksUE0mgBXcX%2FSw%2FTZRA7Hznq8qn5GGJOU1yUdcKnwho%2F9wDKsIXg9rDGAvvP%2BIaENHptaQOL6CY6%2FBK9kc%2BxRiIVS2UN2PV0TDyn8e9BjqkAdD1B9y%2FHlmYsom6JWZihmyNQ8FJB%2FzJ%2BPq0w9VJeVhKusQGrJDGglKG0sVVBxu1j4P27BpYDAUc8DZcas4ZhE75SOmYDby%2FIEW9JHsGvTIRJwKahLi0W2UZwr1zPjC5jgXskbCx5007eBPMk1go4mTkKnne6JmoSGuA7N2%2BD%2FbcdXwfq%2FSVUv2htzfAPhsHrnmz%2BxbUlMNhpN%2FEHCzZJVegqi6F&X-Amz-Signature=983d99dc6d396407c7b18915c680b0f7483f2f7297c6dd650bbe7cfc6578a2c7&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
