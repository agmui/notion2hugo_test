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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTR42BFW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGrbOcLT8dIUFJXV7fSFqIuMqq0g1EAyARTTdrJomhV2AiEA32x3hiLSTstLmSsjzjEcalSsdQpTIzGJhJwm%2BK3Tr9wqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLB1Taa2Yb4qezlJQircA0xOiR9UE0kL5sVTPqYINw9I3%2BGkobABjknfH8ZV34IkrJnCWoOnk74nvrMs3pWeL4372Xg3VtJbm7TGpiaNLSErjPZzU5lYSevLLXmJPBNbmsGaxqugIvO0Tc0nOQnTqruGorH2EF7xUFEtFOIJMCQ5EviiN2%2Fi3vdU8VjJHvTPfWlMFk8SWzc5F%2BosK4gHT%2FoBpP2bB1kqTtPb0Pl6HRaXkJtVuQglyiN%2BB0hpu7mC0tZMQf8yvG6NUEu4CiQFS49icK9zPQE8%2FGrP8iH0%2Ft7Bf41EEIBkrAfHf6%2FnZrbGhkAAAUbmzeKeCHic2WkgDzIcdZpUO34HerntHXAVmUpEoQOXxR4v5kdywndOd%2B4ED6EijwrxXlrOJ4DPER1WQjQtAD7s1hifFPm7bGXMlxnXt5a9nUkSsgqw2%2FNC735d5x5O4%2BqTggKrO%2BdAMR8Q3IE4O2c%2FewwDFGfb3Avtd4Dcdcl8zpjXod%2BoHhILRbF%2F0PPLYSUUwTbRJmvhp28fc4MijHA7XCvPATheMX2dr95DFSe8AGRUwwe9b3Xer0dBUuXoV9pQpTixpiQLCgVZ6saOBQ2tVW%2Fgmpf9UJXUqr2I3LO4bCi91hH2ZnqeNFAE7utJW7rV3fjpaHgQMNKIpMAGOqUBUN2TGdVBhL1VVMqykuPvxNWzgAuOYB%2BLnusJtGGOB64QO1qLAP5fLyLwvaTIb8q9RIID9ZYHBXZ4t4AmXAAvBJa1%2Fql1bE%2FLFX4lSGyJPJf1i3LP%2BlnzA0c2%2F2O450QQGm9zVXkIe4xvLW7anchAjX8yyjVLK6%2B85KLkXpurvYUiQO0mBQddOXRBPBBlW9Vakg4GXsFL4qRMxLuAhu4e8mc2f9oB&X-Amz-Signature=c8217900c203affb7a6488f8a624450098b0af5c920b7dc3e50371b78b55f809&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466457R22CB%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQCoBiyYFWxtIlwag7Zhvi5Nnw%2FUcAW%2BYlbyN1N6dTzkUwIgLB9TmU0tqa3HxpRofc%2Bb0F8652hH2RzqqSFqywNparcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIHlKdqd3PFSjbJMyrcA7CncGVVEZrAMLMQg5v6cyNwsX%2FV8GXIt%2Fb%2B8qfX1vEWdGDdFvtCSENPf1%2FoQ22lbuKuWNZJRVc41HwYLU5P3XQHJ%2BSYCo07LlDSkHSqfy3DiNI0%2FAJQy5EhO%2FbVRv7Bf4pSbGFNAs%2FtmN2NcQSugmEqpRfhzX4hSab1VxyC3b2PK0mwWkjmbEDrsVX7XTv4YkoqhqI5QawuPsIxLpBtN9XoM9XaZwvBg2LlYnoN36Vv4D3XqPvjyeXO9DQGKKtorRSNLhCgdcCpe1Dsel15e3F7sW9aS%2FlufhUww24gi75t4Gq%2F1tZ5AwLddm%2BljBH2w%2FenSy2nsoHQHS2SUEG354GpC%2Bz96%2BkVy1TkeA2n6aX0BGlX%2BYbHbCnF86IVxVFYNm49b4QvD2E1%2BWt7PM2nI44VIBtI2yH5fqmNMUnq%2B8jcshqHIAwPF09wNwfMKj3Gfo0oLWLCXe6X8CuvQHf5UCS4QwP74ytC8NV0GitzRM7gz9pyS9Vs9pZU3RLoxyEts%2F0LhCQZRnzX6LBG1RyHjn0lNKystCtPOvqmHbt4QWhb5rQf6xO6VxdLzdmvx4PQMLcBfA0c%2BH%2Frs%2FogOhhexKu%2B1ECQqtcg8sWavon0BOrahu4wPosW3eApXopcMJWhpMAGOqUBeoXEYLxIHnJu1b5XoCJQmzQn7epOFl%2FNcuhIUm53F5GuKak6zLwNVSDFvdT9N4D9nRozYFOC5iCEspPktCpdnrPGCEQpJpVJfUDhKb3%2FYBhbo7XSDqfsL344tYbkOfUbGyp4SG%2B%2Bkf8aIsCW5pvalyXt9w4cMMmLwajljjcWW4x5u0fWH1vu9RrmXI3LuHjJ%2F7dwL29DnK9lW0OsGykQlH0QfjyT&X-Amz-Signature=7e62aa69e38386bfa94b9bbe533b4c20594a1e791effc3c898a5d9bbc4be8a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
