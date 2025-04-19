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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VNLUTZI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCJBdeRmn4u2xLp9zU3uo%2BH0gBTXMNvdu79gPrfxdSSVgIhAKr2q4zMt6OZMWSyIxnXy7TLfNMEUnBPCu2t%2FBvKi1ELKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztPGCujzhz9x%2FDsHcq3ANntMUP3waoB8upsIexT7hKQY2BwOHmhV8wzaCDEKr97Ud6UWy7wzD6bek7wTC2IIBIP%2FnZ0JBtNUM1wZ9C6N3iTNyWw7a%2BVIEY21vCB649949VXtnrqh8Ls2me7UPiynafY13%2ByaXqpLVVd01tqLGiPU6ZIO5OQpq%2FPSV2DZTXBupIJZ7chydUXBOcFxV2RaXYN4Cdc8seS9iXgjcx7dG2wvhCYyPPkFZcWkwZ%2B2gVQ2SeFT%2FxtBQpy3JeVuSCgOSajpF6Njld3rWIXbTOuYlj%2FnP%2Byenr6m8wfXfAx6PJM1mUdoSan211maq6sWrcjRmyBM%2FRlMtGRGQ6rqwwsAXQtboFbplQSoHKVMduQN%2FNSj4AGVFvVC1PPcAvwV3n4XNtkR0eBkduq5tUfF%2Fhmx9%2Be4U1vVXkc%2BzOiTzyZCFyo4sl3KWKXlze67xwV8TGLvrJvlxSQxpBF6vC5oOdeD3Yz5cJtDzc4je3BPTHQbhgk7JGMHboLMQl%2BCuLoMEwODTQKsaXkO%2BPnOX59yJEJEMkP4mITpmB5nDQNgHQ3R8ZzpIAng7iZzHlMwb1g2icXP1nAHfcXiJWuwvKld4Qh1coUaoswlaf66GCdk3%2FCN7BPJuELgiBQoBa3fZVXzCvoI%2FABjqkAdLYw9mQJZfNeHZuCEurmnnb36El7pcG1ENTYIuCjqJkSmf7qmYmBl9hAsSKfWAsBWVArgMFnP9PTCoMsYwN3BmxUNuXYiiwBhfVYFlnF18kbE%2BLrbERbDt0tzn75q3SGg8dNRdna8bn01QRp%2BJ5Dz4x%2Bs6syLsQ5grIwCUh340nox%2BlDm%2FoUo8BUxYB3TMuP0yFWMKAZScydYW9D%2FZZJqPGAJtg&X-Amz-Signature=659927acdbf811e36789c2f131ac12cf7cbcd5a5174989be3e217d012e73c524&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTK76KXI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDggrRT1pxBTxdT8UBEm0KgdEH%2FizImnAMyKhxd8rmQLgIhAJtDkfGJO6LsLLo9%2FyRJ2aMy%2Bj2OdY4nqQcBiwi4XiVqKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8sTY6SbKt9lQv52Eq3AMC90TG%2BI7FbDApA27dig8gLOBQxwGrzXxHJNPtnsAl0Nm6grgXJ7piRF2Rw4e5Te31VoHt0BUBhK2lG3fEW8FKO513aIsswgqkf7oSk3sGQl%2FuarnzI02JMb6drkZvXaQ%2BKNWJmayscjemqVzwZN4eC3rwMNw%2FBxfrGO7ClHR1kp73YplTnAWaCtTfV2BYjPhwKag31x5sgXNdb644pvGZdNlcoAVahemN%2FD6H1v98%2FCCD8R%2Bzgmm0ZvGtFiqbgXom73NFf8qbLUdCtNgDTC63kqycC4l%2Fk95CyjibaViXrCJfjSSiQwlxUimoZ2XQ%2FLzzgSRt%2Bc08M68WzcC80q%2BuMN%2B87DRUhhJBHX1%2B42VC7eWf1f6ipgB3gte7f0FwQ5J9mlW37tRMs1MJCvoJ%2BoJJtSYg65VR7lnoHMacrqrzu16U4G4OjRjpoWj3USFKYFno4xKDAAq0rgJMs7FHLXwlnhj0Fl2NTMP2lVF3DNSfiCQn7ocmuuT89fedErS1B%2FIswbCVFzY9QoQUxb4emfhTnaRGCtHHBIWj4zcjxICBkRFHp6x7mSWIEXBfnm87ypp2f%2Fr63b6gVVTuipPRxAqAzUnXAWeC%2B4h%2FtQwcPqeJaM4yNH3e5H%2BFZne6qjD%2Fn4%2FABjqkAZ0MJUoNy88kS2HYarx%2Fev%2Bfm576Tq%2FO55ks22t46Yf5R5sd%2Bo5omjTBW5nnfSvGPh0OUPTUkTvS%2Fio8LfRxU1ce3kc1fXiiUaAaDrC1EtSB7OYsqgtG7yWy9tYUKXcphJYYrwWi%2Bj98wWrK4aKfR01rbuvOWBI8z9Wd0AFPgeYAkfGiRF7anFUOLj5YZ0zdGQncBly0C5jiULa3M1nc30UZYGUO&X-Amz-Signature=5286fc3749fc509ffde5867b396f498e71918b6146f8b650f5874c54f2bcf9df&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
