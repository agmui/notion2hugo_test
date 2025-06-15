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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP7E7BDY%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCvDWhjqT7YoK4mAXZDXRSn1O3ExokZgywPAg8Id1r7gwIgIyDZCMksgUiZddhwtJJVsbLhZ3j09AErp4QEq3GnvaUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNUbgpYwp1zzFckepCrcA%2BOdi0A735EC1qDb016H0eVMpbBtp0Gr3gAwSwPgFYzrGIAknC0nK9lzG6Nk07VMBhvN32DW96XMLSvoRxKh9Xqul6mw1RLkhGBMa1An3vNNVEhW64WafbOitTWkPhGuzgvhJ10EPIMaE%2Fhp1GDXYMJpEkqSZeJQZRd99%2Fz%2FvSaYNQRajsNjCA%2Fg1ORV7leoq29iaKWLJKw6aY9KhvTMkUkmBFmEQMrsku9cpHQENFqD28M4%2Bm3Y%2FLwaKsyhAmOz8LVs0vnKsdBA7JJqOHrw7jyyXJL5KuxDOaSk5PHR%2Fj3pDT4r8LAvXknqEo8EdYQMWTyg5vh5a2RzhFwlU5pWPv4cY2%2BUb69uov%2Fx3xznjQB9EPl%2B%2BfWJWX%2Fi8ghQLuTp649rQL77ZWHoGusg153HOI%2Blmt6UJ0Lz9qAyKIk%2FtZ2UF%2FPVEUi%2B5Y5VZAUp2oq30fEi0wUd2T9g%2B853uUZaS1JZeZz2FAf%2FX0pKnnBQcbBsoU0pj2kBDtxcQkkG6cwsYuB0%2Fgl2ou4L7YDSe1LUWc6r6pbLGGxCR2NxsFInpyKyNm1lkdKkEhy3krU0cPaBSDHMm34sOV9U9JytpRaoNc%2BHtIX9AoQgicdgXYXZNIOKysGjo4AF3xDChoWaMOmEusIGOqUBWIKKnpelKK64z1iUwNTVENSqvdhogAqkqMazBkrGxB3LL2YpUO%2F0S8R5jH1h8AH0NWfZXQTrqr20yN0oSb6J%2B91z1uIpZgc84y8jmPFvAdaGO4osU7btYINbYyv7ExaTIK2HpvmswzFpnRBRynlsoGzH3rclSDSvYHVQmi8x%2BAJxmg0HtpEOnfgvJS5p7aZ2vMgZbTArJSgtGiQnlDjyqNAfa%2Fxq&X-Amz-Signature=ef41c73ce5a1f782679386257338fa4d5ae51d3075f46a2dd6364e371828cf07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C4D6JFC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T121431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC4P1NRA0wkXxZvcek9JWhfoY7tp7xrF1s3h01suqPawwIgVncuKZv4igj%2B%2BVHpHF0L0WSBcv15vkT%2FKHKUXni287gq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDN8L7azSIUIuj8nPTircA4ggx5jKcQILVctbtk40TY91d%2ByDzzU%2BY2Bb90pZDZdjSXGasWqZmSQu9JcRboEgYQqIt43c%2BzxfDBQh1X%2FFV3o0yjMOt5ILqORVNCecGwCiSjfmbSy%2FLniVVPjeJs3RTwQ6SM6vYnn7N5GeOcE8w04z3rjf7xTQSrbT32yX3YnMgqO7DSR8R%2BdC43mklUbvWdVECvjlv8rEytSjNgOf9%2BbtoQjG0vVEgw68XscuTR6Em%2FZOyj3oVY10mO1VgXJuzdMfXaNK%2FLlTX6Wc1glapovhkbVhjMogbjNCgMhobEFcZZijuaU0EplewWkzpinOat0TZfYy26lmfBElpE5BK5PMF2%2BM1wvROvjdHitaF68o5N%2FVL8K2xLoMDG%2BOaD1Xuw1yLXT%2FlnQkWu8S9dL4Cx2ix%2BO1JwIwE%2BrRtwIAtEmj9uO7q0qTCFVTHn%2F4qoVr2Bm8L0nx0sJkDMZcPP9hGZhpEPOEZ2hE%2Bnlr1%2FB%2F8bAh1oIrk8ynBfBxVThPyTqzB95JEXzyjfcYsgqYXsWiZMrj7hdjYO0Oia22wQoS5bx9NskHfYQAHLzfAeMz8ilUjcMJdbQnJPM51q2eQ%2BUHvw4VFgBCc%2FRUjlv39qVZ7wuBw3wAVembo8KHh9ZwMLmEusIGOqUBaI67XHM%2B%2B3vJBI33vI5R%2FRBVdWbYblNj6L44VLrqkooNm8FGI%2B00%2BjKbQ7oYrahnOvHfUwNHf5wu7ZWieORkSvn8xhTYu0MmqadYrvSvV%2FbW8OMJQCSI3qNlccHr2UQHH5Flhnun7hPK3jmsG7%2FWGRsKRakbJuEivN6rafKSs4KHkE42VlnHn71%2FfaLXy%2Fsv8zD6pAnLpiadcJFGOaxFWrelU92x&X-Amz-Signature=f59e1aa82e8560c3c79a7618b2c1c907042a5100ce6e2b4cd987d3ac9218fc70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
