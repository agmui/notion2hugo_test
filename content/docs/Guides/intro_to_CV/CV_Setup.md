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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PXUPYGJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIEGvqXbbjshBsWkHMbmDz7k2YsRVt%2FRkoovk%2BVZkVH3zAiEAhE%2FHEqOnFeC2G9VtOZ91jHNkt0MkM49Nr1RWsQnHYckq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDNiVFg7R054RCFkTDircA21MZAjyXm3xboGQ6pNU%2BNlIwCJ5yz4GEJRUfYw%2BQ7M64EEcVKNfnsy55%2B4W3kIkwoQOqqIFdZf5RlK4UO0tJCN4YXAZmC4kdSNDuXDydZjlrvWC%2F8ku5h%2BFOB2vJtKavjH5SLiZ%2BU0eFqhAPENANVdWK6AqDJaiotcyYDXQq4rs4EilheYK9V0ZXIQmSyu92VMji%2Fzt5OWRitwm8aqP4Xc2yIniLs9bihKsVQHf3CiZiFMsbapyN14Fxft59tmfT3fAD12sN6lhZQ0flxwpV%2FXwyUd7py5dwFCTyVk%2B3fXIXyBvJNSQvD%2FQk96GQ0xfBu%2Bs7hM9yLcOLK8IpPvSOW1oDS0FaqJczFX8EDoTTa9VUhcaVVcx0oWleAcfozUMLQSMgCjUVc4gzyucY3dLF3AgFfTsUaGvAtHk8YdiHbead4HX46Dy7E1tpY%2BgeolJ3buYbrDW3bGBg3qnnpDhqJ9tKZLi%2BKeN81UzXmDcAw0Z%2BH8ouxhzK1hqIhJoQurxzd6aujdGvdAdFV7wbRc2j3AKrPldfdj0s2B9Sj8qy2XqUqcl45nNfbjNQLtQJURRXQfNN1fYuIdA5EugvQ%2FK45YHshhjuAlTqUXI6nvgtumX1Ylu3axcqMQXSb1GMI7ijcQGOqUBnpx1fLRNpxFBoM6B%2F4m0sw0%2BLZqSdZAsqGzNHXWBqk%2FpJIxqiBI%2B7lkI9SelP6zu0H2Bt25aRRvLUvLKCcvGx%2FmmQ5K%2FVg%2BokzIgrXuAlAwkSS0y2Z2oYyyfpq6T9ipOvS%2BfH2tDzpPvXxWVBch26SG6a18BnMQKdJJtybV1lkdCPwvbY2155dIYEP4ylfK7Mdzrd3hT6gNVEptSzBHcBaS3iBlc&X-Amz-Signature=0e6ff296baecf1d4f608ab7179c47c5d278478cc1bdd6265feb641e4ccd0d10d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIJGCZBS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICc64I979LPqY0sFO2RrblO%2B7T7lcZ%2FgmbmO5c73A2n1AiEA2yJfceqnFDxEJrX7ijLmTOYK%2BKuUJUTNIsaArFno71Qq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDILSPxxcrl4zRLdBTCrcA7UbyXWItKKi4fJTco1dBQh6Ib3s%2BZhysEj8bM4vHN%2FrHkLPWuHTL0CQdAhKspdna0KVMx943iLyDby7AWi4clSpFRbIGA8zlY6R2j%2FlCXr0%2FoZJS8i1qPqYDqlzlqamxkTD0OZ%2Fr6jRKrhWEDJXgRKiwKJs4V%2F3OUQH9hmyNpdd3%2FeCV6%2BTpqgLCQ%2BN1IG3DjvPwbiCcltoIUXWWjskGU7WSzX6p2%2BOYUau2xhNGFdWpR%2BuGa5gplSXT6ssIffmCueB7P%2FzvGCi7ZI251p%2F2ECZShrcmY9Drur74Dy3cxKTRa%2FiqLBIN5gJim%2FCWGwSQGSIz1s0Blw19F%2FuEf8GFTfpv9w5JbJaiDpAckQ9RttZO%2Bjs2KZ8VqO7yKoZAi0%2FV3%2Bwmh2F3qA9S5WhLur8TJgDS27sZRbukURM5%2BxG2d5pHtSrgJo3WY3nkb%2Bgmwghpm6RqVPeGgl24cjM1iStVThjO2p07F7oyCAP%2FLjKvPyIhl7Im4%2BVuYgFVxAyyUms%2FFooDnFLvXHHhKypIlU9XT7tuTjMB%2BavotUaROUrvjHez6EcoxbfQeKRwzgQ22s2hngKih%2F4MyLP4NLFVzi7FbEuhTQo12OpVdVOBz%2FIng8H%2BIxkSdO4B0qJYUDdMPXhjcQGOqUBWgN%2FVrWa0%2Br4YqCSyVIcxQRriOdpIPG6TjCVRm6y3hw4HAgYyjNgaL%2B3zWgDD%2FjRBtzeE5aXJIMqWA7TgzXKRWmICaZQ5fgtt89VGkLYU5%2FRokbDSDAjpiDPPefqfy3y%2BdyMMHswOfquReHS9PEWIAb%2BpbuVq1yUe9Fo0ar37dLDklL0qiq42AbGYVJ23ovuHEgHk2IBUSqYrAsOMFl%2FUueemZHa&X-Amz-Signature=4b8136a6af49275279c28f020bc0e0685f7ca27fa6c861fa2bef235c8c8fa2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
