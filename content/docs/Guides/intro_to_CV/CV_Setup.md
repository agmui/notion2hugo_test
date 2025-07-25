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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S52ZUSFT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCSgQb1fa%2BAAhHupG2xoBwexwIfxFG%2F2xIPsHjnv7yQIgIgA3YbeSgUfmBeGFJzxbTzQDHo9x8Y2BX8lCoObN3zAG0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPRl5n7w9qPk11mfsSrcA8e3L4nzrUQz1zO0fayi6gc5%2BTIqW2eaa%2BOgm5oF0mmS2Xnk16%2FODHlMZf%2B7vDUzV9sl0yQ7JuXg5nIbVg3uQMlYYJcQ42trCowg8KxHWLPCmCw%2BYOXi%2FE%2FGCRYPgd1OTA44IvR8011twoC1qW0ahGA6%2Fd4wJJMsTChZC09%2BHl4SSbD%2FJUyR80%2FUxt1MLiZa4cqeu7BzjhqezAl6VcTP%2BBIGt9InlkIPi0QgE10VY8mmV91Vjoqi3RPLeCcJPFA1zyIWC8Hi8bX65P2HDVIjBhQ6QFlJfeHyLvnAlDZChh1UAJQ7xr%2FXkeDBSU6kJ5Tovgg5rZrWHNd0qWhDeallBJkGyWBrhX2GkCXYJL3gZAZQbsAOfIyzf%2B%2BYt%2BYrYqAPBROAiOatkBDdaOgDUX6704QcNUwIvZl8mphGVKeOaJ5bOs6IVaYQjjywInZUsOSoyiFIxOCPwDPYEx3Y%2B%2BfeJbcXl%2BWLUp1JSM1WQlevg1FHpf3VkGn6zA6qRl5qT97oq%2FrnxLd2wX2C90A7pfi0MMOmWSUHX56auYCS9xk8N%2BXatxrvxiSzJzcavqHFtX8xvCCo6yWNHFDwPMh86Ku%2BPmUbmWYdjlafaraQrcHchsOEQn1lnO9roj1wna3iMJuqj8QGOqUB4YK2CgWSkTQJ5rowK4pu8GoBcmiSAeeSzwN%2BRWYvuN39cLRRRP1cJEDRyW6Swb14K1H84%2BSDYVQN7asDpn405AArffv56qlA1tzTnipnsDk4TY5mww05dxP9NuIg6E7yrO1Jh6tNaInx61Gjz3S7S8edqLBIwCyLpT0OJpXj6UnjaJKVXQEZhFUKrvG9eQ51HeLUBcrEOGegEWqKAnFmgOgy4DJj&X-Amz-Signature=d050ca00874c82c8255741296d5ef0feb0c2e16444200af168f210dfda1a647b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y36QPT6H%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIDjw%2FGFU1GNhoq3%2FiXbM6%2F9h8GPHeBUh2MHwdd0%2FQteTAiEA9tFYn3p9GQ32SIcUk8I0z2MA7%2BcMir7DdYCm5TGBje0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPA2Mb6BBO7POKwgtyrcA9HEWg%2FS4%2F%2BMNBKjtg8DAJfjoIkvE292AmCFfEsNVM%2FVoA5hsRz2HR47tAfybDL1daWSHBLbW5dwZQ5fwu39LqqGurVwJ7hRknThe9RNlqorB%2B%2FLuEWJD4C3N03sLv%2F%2BQNrOncYFp0zKXbGJdEDivjzXqqNndAvbyE%2Fg8qxoUFyMO1QDrC9ijFEtVYkmR04lb4B5VPTvk%2BOn401QHU7cIr%2FpYxv5ncGLkLNcTrDU%2BXJqwdDEK9noMVlbFHQ26u7hJqLxVVJb8a4x15Xcy0wlUscGnresejUcBuiT0cYog3uWDQFvDha8HA8ybIuluiqAo6Xp254T1ra%2FtUvaAWJVldfprr5%2BfGnR6LE%2BF5lIccghgRMlcwb05EVyxgCPeNSwAjMi4MxmsHftdhV3lCP9aQyaqfni612H4jYCcY95JKmk2j6jg%2FQWT2xyyNNNAzaTqV002hPXsZXfFqAqGOrtc95SBpV8jCJvwBv%2Fgux%2BI6GRRyEsKC3%2FEilOXRxtz7vi0gRDLzzqigsgk24%2Bcam%2F8uUAZZWaCbnP%2F35Kd3whEIpJEhCyyQiWa3Ho55F%2F2vqBG3sF%2FU6hc69cupFvQp48QVJ5hfVmn4V%2F%2FS7Po4Zha5QNngb1F0f0dRfmB4%2FcML%2Bqj8QGOqUBtz0Mhqh%2BMTVPDQiRLOirR%2FxnMlVuQzEPvNFyqP3PpRXc2PkBOQtMIuVlkxHxudhpon17C15Nydno6EvbDThWuDgPQKLdsKYJhRJZhFcu3wv0Sjkt9xTRzQxAKuG5CHLNN0%2FHFbBRu6PToGnOnnUzieyKHYk3xyh5QXzIcKIqNbAd%2B1Wz3qkpgTZm%2FdwdhnR6%2BKedsGhljOmhz2JSuiSmjVRflkJh&X-Amz-Signature=9176c05d9752718c682fcc3722a2728abdc46dca17249c58fa863390c13aa9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
