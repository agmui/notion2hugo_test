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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KKIG36L%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIG9k1rkMeajm9u4Yx9Mh7rPHyb635UpvwKeODlsBBY%2FuAiAhE7bX%2BWAAy9Ngd6bG%2B3E0Kb4pXW%2B%2FygRVwou%2BN7HhPSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMOovuOZIGzLhWDfODKtwDO6OZ9%2FYEKCYRguvDuyOYTmzDC3cCU9dNpeCEVEkgQida%2FsKQRmWNVywtQXp9q8L1uacmzdWbzy2WEtO0lNk7cXPucJvN2fJJeI8aXadseUCFiFZSanjFlNEsKqmZjU4d1yFHZhB0%2BLzrOK8vc8xEbfEEvYFEgzvz%2FmGSh0LZeVb9ZksgWHOUhTq4KLoSVZqTkDjs31AEtSG0jicemhLbdKoQc%2FRTG4bXIpWoVvj0LtZcQQexFY%2BhPTM6yzQo5SjYBzF%2BnlhM5%2BednrtMGLOBEIZR5%2FB%2BM80HAXOp1wc8b2C%2BhteGU5qf7pdrCkfKhxFOawryMSuxz33KcBVulYuDwYQPBtQ4jFPVVw4QXM646YU%2FWZ%2FwY9xRTSCZM6voagZ5uQ3TlaFyWaXaAqhbZYedm7HVWg897Y38T7wlbNZIxi1bPij4VutXhrACIUuCl9dLtGaZhQ079frhEItIS1gxZJmioh9CjU7rZS%2BhNY2IPxCstUmJ6yjvFdXn3mZkrdmDpL6o972UNbm03W6IgQtYP4VSz%2Fx5OU%2B%2F%2BTQcvz5m9m4q%2BdvmXfoPnCJpou%2FYYt8B7W0whFacsivQ%2B5A7vLScENhEcgJOGooPevR2a8q3LTjOdo9NseAFVP7v6KIwjoHKvQY6pgHRoVnQ50n9gmFNtxVyGvw1XVa9iOXzYwrLMgFvY0WFRSjeWe9r9jIA5H8S%2F%2FchDeLM7WHj%2BuvfBE9%2FdLoGyc5KhxNorpRapurdNApdMz6TWWWvgMVWJLygv45h83Vi9vs%2Ffd2iswV13E4rwQTRnFY%2FcMhGjC5EKUjXi6xdmvrvZ6lmZ6bFP7himKnzGq31XjHa8jUYSP9ROnG9Ep5W9v%2FVaHzT8pki&X-Amz-Signature=42a51bbf2c6350e6ccaeb51a6a714f6c83ea9f977c862116169850a618af164f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLJRY32%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDytqiuhLtG8tFebYQfgl600GuQWJ2sbuifJZ%2FPNwjr5wIgKXBYTFtUDb3EMtPHK9dm8QCgHut4Iyw0qcl4T2Yjl7Uq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDBhc3XLICBsn6D%2FJ6yrcAwBD7%2BDcXPjPpGeT7Y4T8iOsXN0T1lFRRkKAOWZNHOuUtO74ZFgypWCJMG9rZgFoe6lBLbJcq1WdUOfS2ijd77mklXm72WwAULG98y%2FQtzZgIDfpGt8%2B%2F9Kyt84I8TLHuNL5sMt6eYDBU%2FIh30v9NAGs1w9If9VNTqfyj34emx%2FqJuhu%2BwQ86JBHtYXqh0gIGYdLxRABg%2BB4Ks2am1RhK1y9f0QpgzJwEK%2FtmJ2yMbCHFRqMLhR35adCA5X%2FyBglXwkm%2BC7JI0mBbwv%2B0NxFig%2BPa4WLncgeBTsno5MMV%2FdwyHudiEE2CyRthtxAAQ%2FQ7k7U1QDjegJMrZuLeRZ3ayVAnsQP4Y1wFhKc5RQugLYSRnZccqWoAXkUexyCHImbbIR%2Bb0eEWJ0Jig0JGjggGIn5Q4On8eULldGafVIWiEF5WOeZ2uCot0QNRkAkhsPIEc0KBcIeNlTaWJ9NacA63Xx395Yd47AveXzKw94FVs6xZNVUS%2Fahe%2F2Cye796%2FTRdOUvsU62F15DwoRWpirflsXBNk6mbgp5PN5QzDKOx24pvBsPalxjoeeHHpLCIzA1pskfM6UKy3Jri6aw0tOdNP1rHzqSluX3mjYxP%2Bx8Xsao6QIHvdIS1Zu6sgtjMPr%2Fyb0GOqUB%2FtfVsjyBvJwshkZ2RzDbEonKBjmHzdfOOc6hDAksasConsnRRwXYis5vOvhXyD04cgomSrztBbw8T1ofEFsSc9qhDIB%2BcdaFQNfd07aTpa%2FZnuMLOCQ3ScyZVyv4VJiwRrFkK1UTAJS4cwDLS6naBd%2BOqmzschofkf7sb9w2PT14SeHz24af15u2IA5wJEj182Zg9ZvR5sfZPecsbRybKGWln%2BEH&X-Amz-Signature=76cea2328bed1141feb4918d3d5dfb66b9bd3b936fd0b81d1266759345cfb056&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
