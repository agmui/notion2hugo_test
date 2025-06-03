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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOWTA6WF%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIFk0fQ9pdJD%2FdfMu1SYw%2FOS2dF6GofVub2PNHsbmzTSmAiEAnu0JGY8kE76wEVFRf4p6J1VHli5ShudYvFDPHAIh4kgq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDIQHQoCID1M7wNwU1SrcAzQ8Kt7NfVHfnQ14EgnLlJFpjNO0U2RbGIEJWPpdjWld58NBUoLgufFqttPRBtvctv7ZGMPvOSkuV2O04%2F%2Fzt69eaPh%2BGyXIjtIQQJetuenC%2Bq0sdCl92n%2FIokapvTJGCWo6xGy23oZBmweBMTU5TDQKAvxg5pbe1rsceRF6%2FoinSMJsgkXXjA52OH2MRMmsAQd9ry16JOJgJ5YA9540zZtiKI%2F9UnDRWaqXhAxRB4vLYftpsp7DHO9le7f5AAfVJRXb7FxKdasQshUj44CB8QszxrmObTSNnYAuJmyACFSOYq0K4XzeOXG7xna6Az89uJIIdxxJn6Q9Edk6dVML4kPeF%2FlkmKJreWV%2Fajlzv7pgUIFH6Le4Q11RgMG4bpPqF9a1FgMUU8yP7ysjAlWEy3%2Fe8e6bnvZEgCX3cgrYsrdSuRa%2BtKN5IgATJJx2Miif7TSIpqsNLiehjKOD6OJO3LsDJrm1cUlRsNQoq65Ke5Vlme4b%2BApAo7ITBFtD6Reb2AegBg5LjljRUddSiVL%2FJcr2mFYJzicKICzuZdL%2BjL1iFF4Xp5Lg0MXZdObmodrJvl32Y2hy01%2BNWF4QtHV4WjuJJiBwfS2Y8TKyl7wi8y8%2BdZwbF4rA%2FJeBUcrJMIit%2B8EGOqUBaRYC1tKuACzbMxwuFj7u7MP70SBIW1YAqcoU677%2F9vyNPPrREBEGzLlNdr%2BWT%2BLhCIkczFOkx4IIuYmvfTSrE08obhBnjj59RTGiKDiaHuB7bIUIBriZ36rL0i%2F%2FW5mcsl8TOTlHxHTdvJNnoa%2FjTi4qwGme6B3c8HcySP7n%2F7RyG4vW3y7BH34kx346eRNcYoSZ01oTKfrQ2dO4sukgUHcBIy6D&X-Amz-Signature=de8557d2cafcfc61d1d2c1fa75214b2881e7d05b9fde44e22eebfa572eab2101&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AD3ONHZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCIE5gz4ixndi6VelcrIuoL2%2Fbz%2BwDL0PtCgkaxle%2BSirqAiB%2F7TjpSEHQPtQwWhk5GVDuiShkp2M4ju%2BbXw7HOwYDfir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMhms7TLirtUJ56LbMKtwDI9p0k0Emeruwg5wycSUPVHJTa6CgXWTs3KMzthZa0nU1QEYy0jbZoXr90tWtFdBq%2F4C1liF4OOJuR3JhhDgDcDPmByL%2FLvB2yYMjxshv7C4m3hTVyaqsbT7biCAs4lLmmoivCvbvII3uJfpP20Nz65z0Bf4DLrXA%2FlOfyi%2FszUSa60GZwR8wUgBalrQTrXpTnTmhmLsP%2BGgJVMoywbqbvCYlLfkHj%2FXnzVic9NmcCP%2BFRbulOcJmfSk87KkZOj5ioIrrLf6MVtOaUWP85i1JnwkxrtlpqE%2Bbn4A49FSTIwUdFEzxP%2B%2Fm1zwGLzMQXkZ4PngRs2%2FaHg7GhdvqxIEGriPnyJhXzzpFd01XZo7GGIvoLc2TsY0yOteGabg5aZNuPst4h%2FaT0gz0GrRw46YCTEyp4CQqTOM3ZNUVtOAuHqLVnfGU4ZTUO0JsDppM7s94awWJrP%2FNaU%2BVbm%2BTmMKGDfAcxsbJkSuc%2BnKJHV4Gf7nZZSCuHyOibKAh3xSHk%2BoKOxLzYOqWRQxH30BaSghnRcDz5NcDcex01VUHTOtnoUbE974%2B5PiDqDzV90eCmJ%2FhvJnBGQbOjbzC7b8QWTu3%2Bu0PnaR4IsuzootelHP0tvuycZCLcksDlUheUbkwv6z7wQY6pgEAs7I4kTbSCxpx58tS9V2kTTzsprRowrKeV%2FDH%2FRBfJTFX57G%2FgVsLZJXO8%2BCpze2%2F7d84hUc39zue9jC3miizfM%2Bd3L%2Fjr7XexIsMIXZi%2BmON%2FnKnlVb3sw5TxJ%2FzZ%2BlA2toPnLBB%2F90sFzFTVpigBVy2ZnzoGMKMdJKW1UuNvlzYRmEP2B9P1JeRjeqqObbt5bQGiWpSJlHdOE4LhlD3tXUKwzLo&X-Amz-Signature=f09e13d20c13f0cc2a29af3aee07203fe4f638c553a0271b2ee691cdad697585&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
