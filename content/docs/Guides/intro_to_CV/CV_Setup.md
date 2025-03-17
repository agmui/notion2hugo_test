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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR2NQCDG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEJiOyb30ppJ42oOAX0xRVYCOLKz2UeVWwLsdSi%2BVyyAiBmjUpvw%2Bd7%2BMoc5ffqCZVerZTQ1TRs8rmV%2FVcC2CjcGSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMo2s4Y3CNhNZJyLMWKtwDYmwOa3YmjfYdOacgb5wBncYuGij44B4ybF%2B4Sncx60jyLthXxdaZN0oNBih4vIHObkP1v2mxlRVsqqyC4nJdaKl7qLqYNAtDxReGHsihT%2Fnpz0GQ8l1%2FoKox8yOEjtimzKfMBidIkyddwW6qSxUT40KiROybXiuutLT3fmYdMf1YvQawROIZC0ypZ4no60pTHz8JbMYVhMXwIhn6F6aunXSh75Yu0cK%2F09tm1QOioZTyHr1%2FJyShs13Rf3sT5WtNhdhehL4aVmwORKu%2BXilHr8gYU0yJuW7N1qh9AYAVlaYXpO1fO71L6vmppnD4bM4V6q9QVO7MeEOyScH4biLIJI3HETrBZVr1mx4blvlr08BUv8ZNzoQP5mcCSUGRf37S7M1pZOb93v8RINaWrWvgqpYNvp5gkTNs0drNZObmkROc33ZNJ4BHNp%2BxhSSgp0EcW3aRMhU%2B3xptxgT7sZooiv11mUBoV0tKE6ze8bYXQagJmckrOPQrLrDDes%2FJUpfnVX9ctnB%2FTGVbM2TsbSdacxeMEoRDMaFpX4Mfb7OlJTWdLhKqh3UPjZN0XOvWt6ho34SHldbX%2FoSVnyFB2%2BF1f0C8yyaXJ7O37Aktz5m9yu%2BVpyGI7HmBJ3omhQMw6%2BngvgY6pgGk8GuOKYIl%2FAKALDIJA5mCpZKPHAeHVlrPMZOifRcRA9OYFLDe1PUt3CuXnmcBZzz7UYkMRoWhT7yfvoMmhneFArzpr617%2F4Cnkhf6h5L83HomvZiISlv5hpmMkg5tnYkLaE6W6cPYSxq6V12gbGwVuyCkiisso9X5zvXpkH1OEszJOGa5x6UgA0a1STvEy6xXHqnI2VYA8luGplonG%2FNuBnLPBz3S&X-Amz-Signature=b436b3b8c73c40ca93a73aeda2a446ebb49192577cee23b20b5dbf789bdae74e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W22NUKGR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQmquWIULMmN5ds0Pa1uRNHs%2F4NACl2qE34doRsGLs5gIhALzktU0MBFN7zze8wvgUel2aTfizj6h8lgtYf5AN7WEQKv8DCEgQABoMNjM3NDIzMTgzODA1IgxoOM%2BEDDy4lvszIA4q3AMTtIQN7EaxtyB8vgz625h%2BOf2Hh45NrWz%2BLDCtoSEP%2Ba%2B%2FASAgsb6iQk%2FSobiTiNmxd6VR0Sz9ccnmpWYusDbubOjIToz%2BBsyXrJPiygr6kssjiOOTYx341M%2FLmIJUW9HqX38VPaNFLw3IMBVOi%2ByYyqoBG98Xdo6xaHaGDQDCmIG4V4X4msFb1a1JaKhP52k4ncO6kluhHSce%2BkUr9FUOlX4r05P8KcuavOJm%2BGD%2BNxJRD1R9pJxo12R9WcXLWPttWTpqzDcc%2F2B%2Fxjbz2h3ae%2BfkH%2Fn%2BvIDliE5M%2BIGnQ9R3IbNX2Gu9r92zRuATm5AvhZbdR87SSTG%2BM7niaz6GnE8xM96e%2Fqsk%2BNNluIB0yfbxfjzOxLyGyU2%2FDFZvYo2rRH6MVdgwJiJaSaVuLdHl2CBIKUtLNlgcfLHDevXafNE82K92kjwmKLUADIYVCs30gZlC8nt98L1xyR0ONCH770j%2FIT7VUI%2FyyGn3rBh5yL5bhUaE%2FCfNL3u%2FdPOWxGU%2Bqny4PB%2FhZ3acm8lHVd%2B2dgapEud8Y4Vf%2F3IZ%2BjZQ7SJ%2FRskOCRoabFGWSQ5t9A%2FTYL6kx6IwV%2F05tAm1ArXJYD0nImu%2Fe%2FSyekEkmyezPVLW2wzFMx6pDQaOeTC96eC%2BBjqkAf2nLxA8dyJMgHMq1zMvmX2xClTirKT0s%2BZTqTgkrFjgH3gOBbpURDOMR9Pk1FQjKLF3ji%2F5isnHHRtWfcNsesnPC67xA4WBxLTKQ66YN07yKaWcpw5T6ejDXZodtYMLMciDu2iemo17M4EI%2FX8dlz8OAhfzXX2v3uLwVzlmZC4L7xEgqvYCRtEuUAF70GsBftwVa3Q2ekvapddGHBH5lDpmMiz%2B&X-Amz-Signature=d9745627de34dc83e19d7dde6f61e9423d48ea00292d88e658a40aeaec7bd612&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
