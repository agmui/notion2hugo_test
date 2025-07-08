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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVECGSKZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRyFBK4jupUxXZYdzzkQgoYpziLaezsAOlKqD5xmAGoAiEAxiU6Wms3y7Up3gB0W%2Bffd4ILFidX%2Bi%2BTjOYXjQCqVTEqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJa5yhB6BUR92CB6CrcA6561kYghbxRlLLeganYmRkZZtf2H6PNjm2McbqjyliTJAsY987enJ4OyMwMEMkDPI1tkyM%2BxU9n8cuNetO8fm7oEZzNQbmEp74cet7XQzxh%2BkSJYYgVPeXGfZcOxwbII2kMVbpy1yEzrHQCrqOOclJs6mDizlkYBZN3i4zE4PoB8IevMJCKEK39nOtD2Yyr0Shv%2Fcc00LBaiwIm%2BWqlz1STg97a5c3%2FeidPMC1gZ5UUdJzgONbZzD6x3rLCiuFPd1QNDt21vogx0V0EIvIwkTQh9jZTQm%2Fwq8pg%2FfUWyXw0LRMPmGyfQqP09A5aZfTG84t4ryDZnZ5FclrC6C1vcMEFKoMjxdCsWCgZ3Mdo7OeoqGvt1YlpQP9h2pEsXmh%2FkplBo927rArva1B0CNhXnX8JLNAJNBn%2FfGVmtlSnzXz8D5rJPf8dkdgrdIscQhRsB7u53cpbexUt9WJ40xrxOcUhZXOM0uWxiWMGWszNcg%2Fivwj%2B3EcU4VxCXoYyMs6Y%2B9Eto0sdPgALZLWgPbZDSsXriuJnEjjbbZz3PJYeuPGGkj0XkoY09Yp2TA3MSIecvfz1jZh0XvYpLvlyAgHf3LsbyHLTJpOP28IL6lbZ53HlyF3YhW4xYKW%2FqVpyMLzYtcMGOqUBdVVNydPGI0QzMj620BP8nD6HwwEA1zmNXt3bHRV9F3A7BdV%2B58p9L6OamFxjfTMvBfogABHPoRgOMsz4U5f6t4YrrbcRYNDmD%2Fw9bOfbe2lKVcDQmJhsUTC7b%2F3RJxkTk1xFDEbY%2B8XZQzmwc3zxDZTa9OO55Rma2qbm5riQNeGFZtdBBPsLmU2%2BB9gGSaOBgnqZo%2FBLi07p6q9j5LkqRJyzOEiD&X-Amz-Signature=419804b2e3cab127b5419a9a6d08995097fdbeeba7d42f4f98391ff11fa780ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5ZJ3ICE%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7MDAyuDKoxur2TNbFCwtC04BjdsFXS1X0fvvUzFGufAIgM%2B3MVGYLUwDUWLCmTK8AIfyVr%2BEcCIKOa1AW5nyep2wqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIm2khDxkLOxyiVCFircA9FlNrs8KATNuat1HKK8xRRnusmg9trAr6EafDT1zGN0Wh%2FK9UXPpFV8x1jO01M%2FLUpJ2K8DTAaAxWbjwdLnYn6a8W%2BO6fJ8q98u4U7e8hIicMa1wsh2ann%2FE4uD%2B2aMTppB9nF0niZwwmm739DxvRl%2BOtjC0RyXtV0DV2Nusz4HZMPrMTo6BPkBOuqIJpXuAP7x0kp3Cji5dG%2FAmgv3dtZFoFkhHBzdQQjn4%2FuSmf9uCKCCbrME6YEWKUyepVXnvqJRcRejDXoBo12YkLtYAac0urkPxOgHMIAqf%2BirA2XvaZu6WgypP4zNnsAY%2BppTMHcDR5ymi6axhSH5TuAvJhWmacnEPMTXRfiEeKfW0%2BKW45u2aY2Ogf%2FP2Mu0BAE%2Bhwjy8QVJU9bdDEh%2FMjiVdwXsG9%2F9HyofDcMOUsJgQ4Ao2FqidSdykxZq0OcYeSiIGo8e61Hrnk%2FWn%2FHjfvHV6tMq0v8Ri06WFIuoW3ygQyMYxY5Csoz%2Ft7l4QgLhpP1Y8ThFY9oKukpPIWuJDAU7CONwBW%2BvQfdsB0mk8oZq2%2B6ByWtQ88nh7RE%2BJEVkngZoUcrffIvLUlaZ%2BhdvB2n9nCCCF3ormh8A8jvxt0nTui%2FT326pBCh8%2BHEZSnmSMMXYtcMGOqUBGSg1FA8hfVMJIcr2F6RElIY74A23yh9yt9N6sLTUI61m7SoQcGgsfLZonRpS0Xyp3eoaN%2BibFmq0zODl7uTiRr%2BZZAD3Mc72%2BkgKAYq81NpoSrTjXSlSF3DJiCysy7SAyn%2B38IHzHWbB0AvGXEIXikISOgMurZhzD5RiupNKcQd6XVvuhro9JaK8nesta3f0I6e9MPd%2F07GGx4wzzthvZu5SFhH3&X-Amz-Signature=47b40a9644c658cf9149bf4dbc0b7eaa9ffb1721ddac26a1ec9eb204876c835a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
