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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643CSSGF4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICr%2Fyff1mXQKUK7F3VyrKcfKMlvoZNJcS%2FpMyRIiWiHbAiEAxBd6SWRQWZ02Fvhf9g%2FstXojfe7u4iAPkLGPv9S6rcsqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA1i7NVLNynoSv1DyrcA1YWDRLfBTu9tYqX3iL1Eav8Ka2XmFCxSXY8mpFh1RUMWgzs28xk8j9BVZ1FogU88uaqpEZi5ZSUMw93bYAbebAZ4aYmLLvmZCcPArjqDPMiIxkV1IQPZvZohUeISaHryFPZLZGLiOGhgHk59iXpqUG%2FhSYsXyRBesPx6gGXSYGbHZhna%2FHNqabwRRaWdPo1uWQlhabEIV0%2F3LhyCgizCAs7JYuTx7ZzSaN8vK7P2uEgD6HhnoWqVrChMEyQrbmj1vlfjCSOGiPtg%2Br6JClwid%2BaoHwnEoHwRNk1PB3egYJgkD3TJPCzbu54Po6udFza1ID%2FIBSiVHrIFg0rzG3hqtB%2BKrRKq8g%2FpuB8RRbM87YEiQwtzksMoqXTouTUzqbQwZPP7AzDPeNyaleWB3KICHKeIEyzK1V%2FQWbk4fU%2FiI5pKD3QgW9B%2FG9DonvXLkRoOydjBheeTfA7CHiyFZnrgIpFrKr2gEFHxTwWMA30NrVdmQ2AhG8RJDl9%2FAqF5ztFwe5DPC66cwZlVQ6rRcs%2BjmFpvJseoCWg7fOdPvs3tqsrowiz2ZNuaE%2Feb0oQDZ%2BPK%2BwwC0wWfVJffMdxRjrZl29Qkn61S6UrCW5TM579iIvZFytfP5PwX1PiQw5uMIKFy8MGOqUBYZatdhS92DBZTvuwavm9fchQ7KPZbxci8xqKy6aOCsVGZOf4KvaMh%2FES2g29Bdkom1qAe0x8muX9Yx8cwFekJJReNd7vnMGflX0%2B8O%2BitJ1BbPriXO9DqoVpsV%2FDJ7zjAVlTs8xFTnkFo9lse6ivupkuCbSiLjdiX1Ou%2BFc5S5iGEHow8rAzP5nPHuady%2Bvwi9nrhNprkk3B2rXsQoso4sJjzXkx&X-Amz-Signature=8016d4791f5062cbab363a4834982ffee0b68b3115ec3f57f6104464c1891c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYL4MNGR%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkJt45C49exD9XGrUfSTQ8K77epziAFftvDGXfhtuBNAiEAtic7JTH56UwT3Objhnj%2B48mh%2FPhhRUl7t487mPFonQ8qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1vPShQeEh0JDgXSCrcA6cxbwADj3%2FQfPgBQYivwdNTa%2Baj0Y3eGoF%2FcT3SXDh7cfFp%2B7Cubl2O5mLDqz1TQY5vPxpvaXT%2BefR59X3%2FpogxEl%2FnIp%2FTPdYU%2FKzS%2BuKKAuogx2oeyrqGAXw7UEpMHnDlpfcGFMWCs51Dn3LU2dDXckQcvGRXCtOUEEhDVtvXwVoqMAicSCo0le1nxy3P8q0BNUiAPNyfYGsLkIqF80lo9iy54UWYRqA8SHWPzLESOPb7hlQ2ESZTbG9gwkAGebGCCwJPtqHOOwBS%2BfG9zWU4%2F15kTMRDqA%2F7bQuUQ8E9tLAPxpm%2FACslOLRCAtq7dpdaGM5CouqZgCs9gDK8EU%2FqfDrpEp3kB4YvaPn1A4WSSfTgApIPHfg%2FK3UC1EQF3y4zBekE3Y5uM7mH2yiXdveWQ%2FQPxLn8Djt9bNO0JFv3swSFnF0E8n3ASzeivv91ONb7sAxCeeKTNixHS5QvUnQL4F2%2Bh%2Blj3SIr5mDtFoYEQooPSpl8shfJ47YTUCz%2Bd7BiSZ%2FjhpUj%2BAkwycDDtMtIq8K5ZQLwEf10nobAH%2FIlXq14qGU0UKefbddlFslB%2Fkuo1KJTnsns4MtBpWLywkUEDFO39%2FI6dSZ8aXxDrnxh4RJSD6UmGm5ZcIezMJCEy8MGOqUBKflIDSRvUEzPDcb6XFCAwOrXjSsT6O8xIm8Uv%2BtlEMIKtmew%2BE0CHjykQ4xz%2Bl2Dgp9vDhkFSCsSfGw7P9jHdx75sqN1z4semTv9EodpwsuauFMBDRAcmp3iKa8WJbJUFieP6Z1vTovMWSmlU%2B%2F7L6RQ7eGhucfhQQJKbRZ7f3wTF0nUr5REOBDRKPRcYR%2FVVo2QxGabzmLkKn4sIR9oQKVgZdoZ&X-Amz-Signature=32c0b8ee810f479cd19d2786690c8c7d8cb39fd5937b8b7b3ddc5e7711d75722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
