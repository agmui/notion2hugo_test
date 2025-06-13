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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4KWEH67%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQD1LHf4atBLb8WrispXMUptQ%2FswcAl2%2BS5R3CUq4cntdgIhAKeTluEmpkRC64OhMsJyo88iHlOPj8ujQzeQWVnokprtKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRR5v9d%2BxGiPbqoMcq3AN907XBoBEzEdp2dcR6qleS24%2FJVdP3rHYPjCR6uVBhqGv7r0fWHW0PC7Cpt0SnT65DA6wlhrNT4m%2FV9KjATG1V0CDJlts8eRJdKhm9iSgVJOKHguPGa2UgKwDEJyhwHPteQlAm1Ficccq1%2FDbaP0MjS0SwJbWEZEKBnZKJRBjpGqKRZImF1YixjrbtUb0SptMFotL7o2%2FdrCUgq2lanqOJMS8lNlYExeOxkUc3ROX1bvZ02UWm65RfUNMae17pvCEJaxK%2FN2OLING60qG%2FTfukq%2Fj5AuJIUOgDhiQBpXgtdsBdcmEKrTS2Ems6FsHkgvoC3U8RM1dk8QIjDQnmj1M2Db%2FFfhzUlGoMDnYL2X0xyQnWlgON3bplBc2a5%2FdNpGBNrdnyd7hKZr2sVM%2FeWyC3ur4L%2FzeleVcB8qAlmnXP5kKUX7XwXyJ2bpgacEpLuhODohqUhr8ToXVso2a%2F0Oq3ECtwBRttNKmT%2F5hfcxGNnZhDEfVp0HoTvXgOglM9KQTo%2BSVz6DpxVZshl1f1Wz8uXnaHYOjo3xVdORm8FEiPPLRGUwGzs0ZQN9mu08ky7kLBJdEaC9Vt7u8TEiWj%2Fe%2FkH5uHHGrkEXYrYLvP2%2F1xopnvVbPQQnKEk2E8PzC53K7CBjqkAV0phBeF8bthc%2Bf4E5242aVmrhk3T76Hlw2VEDlP1bDF5KVXCzfpiY%2BlLcDN9NysSFsrKvZRRvpjRYEIkmymhqGk5MTf9l5hL0rYvlSkNzTDwBUwH3aDE2Xa3E2xU2jhMfd%2FQPNo29wzmfASjrOU4jFObwnpIEKAvMMaM9WSynaTopxp73PcBOcqQw1OBeLlqNycNnWXXl5a1YNBGoy7nvNeDi%2FI&X-Amz-Signature=157e4d9ebd6800a1381ea89e5730d2b5200fcdd03aed9f2a13186e3d75d171e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VICU6LLY%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDooA2ZnD3YAQ0BMJwquhNVFoB1yngTOyQFgMS%2BSsxDRgIhAM2TRuq4W3dg3WyAXwX%2F2s1HpJmQK8lGDYHPydya35jDKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJsGXjyl7rbOAa5G0q3AN%2FG%2BASsCKHJguUcdrdJp1gnX7oe1ReDcdtBDWzxYvNMx1YSi%2BeBXTtLXUknuXSwjEyXtLXlUQv7EW6eBkCVg%2Fy1xr2phU8aYOBGrGb1RPVctszPc0dFWBXDRiyQ6Lh6yfvzsSq4CHmb8%2B9Q0VafJIHupj4WjuQiYUrhwnc3w9rfCDBnzhk%2FwG1UIqL3940zBHTwu1dfOSb64BZHOGe3A1ufzVTvQhK3BBjpO2bIJDi%2Bdx0iagx48%2F%2FQmQKiykj8A50Hn5skm8a3f4vZCeFMm1ayxEbWCDHspw4bufYyIl%2FJZaTRJMzNqEYki0JMNb5qARoByEzlyZtBBqrBSfrGcOb4GPVFQ%2BQD9xZ5By5SwLah3XXAzR3v2aSVvvzvhOyNNm%2FkhVQhWsVOXesPj6AEYGlbytbB6ndgI0Dz45O%2FFaQ%2BJKd9Sw4GtHXtSJa1yPr%2FmCx5SZ%2BMKZOVoYKWL8smcctECIrFKKXkl4%2B8ZNUZ6GsXql2scMnBDGwJT4tXfmwPWe1%2BtypHGc4zP3EklvWdYrTD4SmSjeWVY%2F5as8RztJSB2ZfhZJ8W04uu%2B1bBYGu2lJcM1wsoZCPUdJ3WiukqzCT49EsFMiYrGzBRcc63PoYG0gNm2HIzOEyctXDOjCH4q7CBjqkAfZ2PugMJRvOmDS0yYL%2BGQxZWCnsMi1EViKLmqkIOz5sXFdx6uKtvT5bZEE2iV55axI%2Bz3hu9r68eSPb42OvrPk9tCaWNSDfM1VAgQ4%2FJJQDY%2BeGht5WOP5gAZT2PadBlCL%2FJp4uSdHObqBaMMBDeRYmBZvSjL80n2pyL%2BJilpBGKRWVd8QV0XubKpwiKYHQskvv%2BbEyl4o1wpi%2BhC2a6tiElg3J&X-Amz-Signature=920a17fb8accdf1ad1171a73aa153fbc612242e9ee11e3043c31ce775b892ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
