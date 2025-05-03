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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4VD4HAU%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDLaRH73NOMwbgXKt7TD1pjBeilCa7yJcUew2vKDxPwjwIhAKIgbxRzreVrsCvd6BKJNf%2FwrbeM4HMh%2BEhoiLPC2GCiKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWqZ5j8I2n9xcuiqYq3AM0Jjn7S3Umc4%2FhPbpDk4UFjSYqjLiu%2Bat02mb1f%2BAmn3TrNVv7JBimMADfQfZprsZ%2BGpNN8gs8mZraH7R5bylk78KEsU%2BjbFt8SBDmEUmWLwG1TZr3jjCq2WprhAAMw3r6AlbXN6Fz1CCstAXU9WVnrQbjarmW%2FUZrMIc2Wn%2Bnjj46RgXbRvNK5uaIXXDe7HxZ16SOnljWC5EFqwA6CkMzLxat1TcdzqJ1yWnibOpPNohy7zeYxQBIM%2FNmPU%2F7koB5G6DCft5hDYkOeQPj0OiLvpc3esG%2BAM3WKZGWCDHtfPq7CCUEj2A2uHdv6iiJHrHscQgOm0ZnReuhAOLlNl9ZkdzCcGiOCPGxhgmqZ7%2F1VY4lksej3uk%2FGg7nOPG7ktq5A5zKff%2BLpO2wh1CVMRS6AADryfQwWF%2Bjhk0tyYHbSYS4IC4wABetSCJriZ%2BVKDJyCuOwWI68iemqmc8MOK%2FHCtSC5T5ih7daC5bP1cqH%2BMlPinyzlx04zOwvK0cY1E9wlxdSLEAHa%2FfBJHyA4GN3VhvP7mq%2BEaMOsI4m56DJ%2BD3XsaJg59ugUow0QmEVxvQ6KaJ5CChAPxL3XM9C75DY6w1%2FxJaR0dq8Us6LU2xJJV6KgkmNwD5%2FSgglKzCJwtnABjqkAVqLcuzJ6VjOwKeX7BPnykF%2FY6X0M%2BzrpmE9NoHu3gTNlimpYsLjz5%2Fc86XivFqAexYUjFgM0ahZFP%2FBPd%2Fq4H4yfyVfXYDvBRXtky13NR4Kb%2BBI5rcn0aGY2hUS%2BwY1VTSkr18ZhBHHPHcggvXr6kRYORZ%2FwZVsPj0B39wcuazPexhijrfb93FC0J6iNswJlUtZw%2FUiLnGb4yieCUARIACOZtx%2F&X-Amz-Signature=3b466de83b0131b10a93ec9a4a42bbb3b582b42131da60385db36e6595d2862d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY4GUCMA%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIFInpApCrRcsfVRXiRhSYhJyM12EbHEPvkbjFuksWJl9AiBBJs%2F2ljXE6Ah7X8L0fDy1CvsyKIlt22pNRCk0KCXrZSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHnEmsGd2HnhPCh0KtwDx%2B82W%2FfKBJ9IbeVF3RwPJwTMYRhE8rnJIdyjK6AaFB3CQ0LwHgzl9PvATqOQc8T5mtQLOK2yU1aX0cNVsSuU2MbRvnrGWM%2F2z4biZAxVsnH3kix4Ves%2FGbO0hHsiG6mWO9WfQMI8%2B9aV6zeGFFVulzVA8jgM0g9MAdJSgxj8uO93Ne0%2BKDkI25%2ByUmSLsoqcBO3eWwdLul4ZFGfpldU5uopeHBF9UKXHNdz9xNFi%2F56WplWXBuNVLbiwBFTltKRy2Gk9Y7Y1YROUbJq4L07Boc07CB9NGL5yELiclG7s5ZlIl97Vemc6iQ%2BvPw9iOPj%2FuGtEyGjkkv%2BbdWEvtGYIKrIEChUOLXyjKvEEpvvmkI2RYyK4a36emGxjnY1YIaJy7PSZqllEk6DW66l0n9i%2FWIjowuUDsCvuTu2PFfen5Hma3jxVaJAVjgMSBbQhO03%2FStsC1HwrxPvPbnH6VgWuLVYu8NTSwNajRZO2SvmTz5Uz29pWOwSaboSZwopaMGXDO3P4d6g52ggpvJVTOL%2Bl8yKactkf8ZxrioyLVaGzjwTC2J6rQG5RrCRw5lMKeQSiORc%2B%2BTzehbO8RV1sMKm6cj2w%2FU5f%2BL44vDkoL9s%2FPBjpVIvYwB8F0zySQJUw1sHZwAY6pgFwiE3oByhvnSrgJ9bGDn9F%2BC1PxCjtMXR7rQe7MU9ffUuzrpTe8AE36SjVdytQMCYaWv2eBCBZ%2BHOnz6VyJsQjOl3%2FSCSptobG8hvNF3%2FKwcjU%2BSFfK1RaAH%2BjfIy2b8FWBbAzo7QP0XwvqpDvhIEjhhdFH9XmMjbkrqLU54UKZAak8Ai5iPjC2RsEbNbhu9MGfAaGk%2BYIt1ypz229MMoB%2Fvony0av&X-Amz-Signature=fd13f1716045e07b3c31f2c0dcc4d9027be5dd7869590abc9e818719e0b52c25&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
