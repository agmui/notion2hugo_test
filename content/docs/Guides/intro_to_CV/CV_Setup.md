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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSYM4ZTT%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDz%2FCAQ%2Bk1lDHPhg1GN039Kwmo2OVNSTN5YAh6f19eXmQIhAOXsz51rWWoAAMFOhBDLhfwaL%2FTUVW%2FnRNN1QEdpaXiCKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8NbUxQHTm3eHApwIq3AOeLyyIOtK%2FZ52lO0sxIXlMdL2slOahxM%2BwAz6umfmyLVIlJYKJZify5ZmhhDDLAuHZpY75J8PEbi%2FsS8UoWQqLtWjsrHFYnVkHVF%2BInSgg3AGwwxhTpRNDrESSeibBh8hIsM7dIKPLjgbG8J94bzYKDzvT9bqNZN0NCUL4He6J7v9k9j8RIXzm53Y3n%2FCjMVLkSG%2BcuujId8vOcdl15WC%2FtOGYPOQA7hwt%2FwoXEtXtwQff0Lnj%2BHs3IZ2vDs96UTr%2Fq2SGZXTJf4%2BOjgv5Pn5Gm6QEUs2B4Uxx7HrEWLlGB6p80SB1pbKSU6HhyMyxQv%2F27QccABwITm%2FqSyAPbUnoQa92HFpfm0G6KSRGSYl9zfg4OWmAbdZaojEeMNEP7GOR4OB6TnN7CYx1ea1mYnoGWqpzn0bnQ0kWYQXpU3IjOWvZUkGSWrDhr8po2J3MsVee2JEHgGca1TKe1a3kP21K%2BTNXoJJ2QCmkDw70EHwHlx8ug2PW90M6Xa2KGmvQIolt4%2BSKzBpu5YmxwHm3cvfNUPn%2FeVW9JUm%2Bq3poviKUBMu7RUDsYshOOgpvcWtaNcJXasVFO9rl8CVzbYAn3YbunaMQ7pwQuK9u1qOeICE6GgaQotpxDqLcSTf9tDCektnEBjqkAXu6GsBdwkvqym1zbE%2B7S57yNzxn4HasutWr2d1a6PdgQLSrD6RqHhwc4lK77DsnNHkcliSYyxSaGAiLCGE2Qzxu5scXl7QFOqYK9d5%2FSGP1hpRD7LNaFjm1G7UIDc0%2FC0LoMXqFq1ALfpY6Sq8tPUs1rnUkFAofVjoWkHIoEsRmb%2BSmPopJBOV2G2HO2Wfrqth3TXwr12gou9qkZiMYjWCgj8Pr&X-Amz-Signature=565fe70527f3bec74ca58df236e693edc08e4a9427b33f0fb008d2b6b3d8feab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7WU3YC5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIAEOLamkKjlBayEqTGA1iDYcXiNFusQ%2FXmHdjf8neFssAiEA%2Fkmk6QVH4RQHjrdI7MB37zqDme4TYd9uZO9IuX0piYQqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZ8BuBV5fErJO0lYSrcA0U5LBtnsLKGytYwx%2F0T%2B4wxjZP510PuUvFrtgpu0hpvLC5ul9eCnlZfka3tm%2BaHvi3Ht66T7fcwGKqTLmhqAGJRvsDIKr%2FdG%2BIawguO020f59qKBewWHpTiTPCcIRtnYnp1MA4tnWpijjNNXjLWxeR5Z3bW%2FBEgaaRfxU9jXXdMyMA%2B8BZOqVtSk81tI3DXbhMDWMKEMYu7WaUcKvBJhdaGoSkYw85NwnBpQ3qtPzWg%2Bsdfkh3%2BZX6l83IntZv9YKUofGhhR2cuKM0ZRS%2FRzMdtMVFLjN6tKgCPryMOF75eJlBNeRhIIleTpqNXTS8eSuV09pvP3fcBsCPdFysY%2F8qMo9S%2BWkx%2BqEYGKVn%2BvXUIubxwwziVaQn66ADCJuDUfVfyursH%2BdfZJaKMajwkDavv0eiz2LVxeCpNU9gYFLjL%2BvlisFThjYzQNMrw0Hi9fhQHNDtLyoGoeZxYWG5zSVB4IuutufyqXAAQ4IT58VO%2FNi4KRu2wBaw2Osob0pRaDo9vkmHqlB%2B4WQKNmhXc4vBpEmHU083GqTfRxTXURcDRwNu777ajQuqvaPHVH33G8FFPEAYiccTgvDv9vSZHOgO2dOPRepi0UwRjx1zP%2BcPs%2Fz5LD92iQ9W7J3a2MP2S2cQGOqUB%2Ftw9c6cNJHkCwbFH9REuwPAMSPEyQ5j7l1b5pYOuizGRQUQ7DGQ31fTJ4y62FX4WvgPjIIgv%2B85Vvwfz4ClS2nNZBueFrSCn6Qse7Q8YcxRYhM6u08kNbCUvSFkrgBFJRGibuCW7C9h1yduq0qdrH%2BVLJLGLR3J9pw9UJ%2BT8NtSSAH7D36IuiDpU0ln2BVYQ1rRGn3SUeqAyOfUxOk5vXqDZ8wmW&X-Amz-Signature=1e77b4ce24f3e4c3720d1e704d00312ce796430767849161174fbdbe7a8f9556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
