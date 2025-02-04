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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TALKZOGW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDyeowCV89GNZZ4Fdwoyhww%2FJg0N0qwAIT%2BRfLx3DLW9gIgOxk1fg%2F2QJfTUimy3Mq0JecMdBOkQDwB4B%2BfbShkNTwq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDH3jjLrrsWiFL6ypPircA9SZ0D2jKTSB7vO5JI1vGubmBeRv6jDLoDJMu54ESkm4u%2F7a6EdgH1ClHfkd2%2BtQMOto2BRA9JZs0c6HGde3%2F1c555ond4TuZ2ubl7EPpJaM%2BlKlPNHyn75weiftauq55zHN%2BZ1mXswdDCGImhqqKm6ZZtxHXm2Sm5NDouAgkFmBJrslHL6tRVAuat9UaCtb8j4nP18v8GWkx2eio2RJXUuuUeF6xGhrYICzT31E0fmWDXaxi08z5u0f%2BRrowuKU7ix1IfsX3i2Fjp8khHxz%2FJprP9J4jQdQXs4r9VAekPfODYtEC8M1SpdgHcevPBw5mKPZ%2Bpt2vHStQ%2FXAgdpjCp7nu73fPLsW5vlUyLGzAX4i%2FJE25vMZC1seJhEeb9Dp2go55jJAiTf5C3XdNVXEigQZlyXyYRHeEBa%2FgpMo%2FjmslLTuAHSGRd175MeUKPnPUHyoqqDz38wBn009FNFVeT8joYcW6JGEqc3Ol1T1D%2FS2y4aEiyxc8OqXXBBzTxbuuysH8SZPwEj9ovwER2RshMhENPgvfyKlHiIJU1mzwustVvj6dlm2IWbSEQ9rgAv6TT70ehnxAc6NdfeQ9nGr5gl9oKXHM4tWrGth04otGonGJDMhjHonsUnz1Q%2FRMJ2jhr0GOqUB72UF4%2F63acSmrSpzr3xLOT3F2EVYq6GFLzSSgprigatAEU1J47zdXzjSNWq73Hc40TB5173CIbUFfv%2F526LR2xWgnInO6cbXOPpVMj1iu%2BgRFKeFmQcUFd17gaq8PcFQHV5fXdHSjC89JQmpkC3zSuCsdBtLSbYyJ%2FIlMl%2B98PNkOzwtp71CXFaxu%2FxDtzCphcV96fNOWIkq4gR%2BYOQ10%2F3dFOLk&X-Amz-Signature=a3a0369aae0cc5437a816487d6195d55c116c9b0660da7fef0baba3b764c94bc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UONGDQLA%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCsSbTb3qdVb58APK5IbqAwT5oYODSfVYjBOMuxpUDoLwIhAJmr5O3Ot25aN4nwYhzHfcPrCDXdcCaem9npQUq4MK59Kv8DCCUQABoMNjM3NDIzMTgzODA1IgwOrns8ITHze3%2B0JH4q3AN8wWtHnuwHYOqcnHnAZp6%2Fm%2FMSnnh6aRLd5fV3JDWifgonJVeXszAkKNABAvsrFd%2BJWly3xGRiL%2FRW9VhYCJzSr4RHmqX4kIE0IgcsEVy1j%2BXdAlkFg9bmCB6KGYgPa7YYDdfnEdRXUUjnibkhumuy34DZUyWUdIUNDRqMhg83nS8gd4syBhEH%2Fv7lY0QtVuCGEIN%2Ftld61WfYYwWmcpqgaZqIZLJ34yGMtAcoUnsYnp8PMqQ8BOMF3A6puPOFHWK0kVUX3p0bOzADFBp1KECHTzHLyhTeq6VABKPCQxQL2dl9oAIZZhxfanQLkBHBIuLO%2BV9EommtUg0V5EPLFpWseJUKS2EtkFUny%2F8Munid9u7tNgE43MtvNm3rMCXhvogvzYdF2Uj1TYT4xhyZrKSdu6DJWhnimIi4PaemgqjVri0ND7mVGL1vyxjkwKPLtsSA3BDAH02vgdczOW4t9hle3n3hRc9k0R5rYpYzybj5J%2FaFLuvNgywjTgRTPMnkJJYGLjLH45J3yDkvvYGfw6SQROWDZjAgBDFufN8YYpyAUqBE2UxXOxgNs61yzlheE1VozQI0%2BVtTuoiNTaPVUJBx820xWkeZL6rjHtiTPBHvEFNohFMXWdApr%2B6AgjDiooa9BjqkAWyayG%2FBN2YuzZqZtwVO5CVgkr%2BoEMCsWWGcVYlAej8tOasUf6Bkdt139gvkaAyPL%2FLjpPbGvMATCnvH1ZHC4GOu8DRWnkD392d0AF28C2dZBqf2shMtrkOhlaOs%2FE%2BJOd3m0DkJ3ZDUaGWslJAyfgam7Gujk3R%2FSe1vWWkXtxrkdFLcz4HKNwUXhQvg1OVMDmjQuhO4oo9xL2qZ7u9h3OLJrX%2BD&X-Amz-Signature=f1a949a896967a68089fc826b956389cfbaf38b3b54d394674a423f11d2be935&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
