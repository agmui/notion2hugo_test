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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IEKM3CM%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCICRRKqkK6kZ%2FRaW93FQmg6Yf8RYNpUtUljWVT%2BffmGebAiEAszkw6SvjyNU27jK48zyHOI7dIkchAN4XUl8R6vg%2F%2BRwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmVsxpDfCmlCS2g2SrcA9149i8TrPxuu9Er0C0If%2BFEkEIy7b6I2IQJ9N3v55igz8MWKkBUUyqYrzRZU%2BHF3hNNqunCm4SI9pOEHLAs2eD6D6mwveIaCzxvomWDPmEPxBmIdwRffgeD%2BkZS4zc%2F2tLCEf4VZaA2o0y8VR8gv46Gnx%2BdcIy0WdoUVqgarzzoclVhHARE%2BaPHEha4JgPdgluzHHdtNitzPmT%2F2XLOikI5ynUVEXEDaya3f0tjiv4eTciD9xy82Hr9ATJGpa62SgnfH9tNQZve4io9DyZLdP37wInsdiigHjGI4t5ysEY3FAQFy1Cw1l0e9cckfts%2BCVTXzVQOIPCQlT%2BlHK8hxdemkjT%2BcPWnw3tdMD4QbAJTiOPYcOdbs2nnHD6skEEHfKR%2FSDCmw6zn%2FlzaC6U7zgCzp4xzRDNSF94C4huVU7uYqG%2FCG0idz4VPzlj2elIEjC7OY3pxDgvr3UZp7EXBzItlSGnAyZ7B7GWjpDD%2BYWLqjsjwFYwFV5516B6RuHDw%2F1nQXZz6n8T0idVDeGTvEnAD9nwqtvgM4Ga7P93hkGwvu6SzOsEfiBvgj6mtj1n6CEr34IMT87pbd2pZICvqi4v%2F245eAa0oCbBJ6YU52Jwabb8%2FvGOs1rdlNB4UMLDa3b8GOqUBhee0RItu2LKoQO%2BACDMXmo7MdP0YagDYuTuB6ws%2BSOYDCHUqqk%2BhNR2OK5uJfmAedd1tzKvhC%2BSTpi73XstBGz5LQPrqOYa56F8RLoTYqeARHbk1C4HtZmYXnnLX5tVwN3lCSG8yaJdNaq5FnCB%2Fx8Njdy%2FnqBr421Y9MTLDsNn4MkgnfH0bVzpWM5VjZ%2FUQQYrpt24o2LMdQWz9EUpVxOYzz%2F7n&X-Amz-Signature=88b6e630d283a02009151d0e8f54458f8ae42d79e6e95515783e7fea1941f788&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWE7I7PC%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCQClwdrHNe7NgHnHRgX2JM9YZuVjQIZA1%2FnwNYzxIc3wIhALIx4kh4p9mJfPwEaqLJ%2FUOsk17v1MprLG5JE4wX%2BFaCKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2Bwv0LUkZ%2FetK6lW4q3AMw%2F7osLXV7VqOA0lLkCVqqEL2vJgeP%2FCvY0pDPdVlVLIjwryjJSXjqYFOdBAXdzdvsSQR%2BwKMdHbOkqTNUqAHxeDzb%2BkCG80bICr0kRC72whdPo69As%2F9xTPhSXIHX8T5D%2BMfxeimEhdJoSs5CPiBt8H43d%2BiGzhWBGvVWGJx4BPcuGURyG6ujA4b2wAssPguEeJMbtxrD7IheJqyrQ2FLNCwz5weS51%2BwT%2Fb%2BMa4s%2BwedBsbPLDzNno%2BgBN%2BFxZ6sDsl%2FWRGSfvbXmke1WJ9yCO8ehAMkRlrGYtqdnIM6zjypRsyVFvd1sdc%2BmK%2B%2BUaWzErm9vYArtPsC%2BujEWgmWLfcyMFBSY%2BBp0JMHuVvjqi5j2MQxt55HxTE4ope9qHALoaXs8ZM9G4IOvKICmo98AzWWFV1xQomgLQBVV%2BXZ%2FLE5EEuXSoWrbLFtwBsU00Kd5TT%2FFxBPkcL48sQWHhNAIDmvENdGgdI3wWXhSsjyd0%2FDGbM%2F%2FLfcNWNrNHCSMirc8qC8D19ESQlNN3afg2zprEzcqaFweUjaXTD5ylvFLb5jxCrK1v3HlLU%2F7A0im5YRudHY9%2BHgcIgpcLJsXp8%2B36415vXz4il741cUI%2FshW8DpFjwOO0nfyb8Q6zCj292%2FBjqkAd6xWqUCz2gfR%2BDWv4%2FOHdFo4e%2F%2FYAeE%2BoxjNH7PqSGWiRekxqZrYGe0PWeVzq7126WP1OuVLAK6A7%2BsBA%2BhcPiyCT2EA5pTLDokZc3GalQrBjj1rOzWrDxumQklJ%2FQgGukK89HY91hb4kR9lZ2FB02Dl4RWTOVhk%2BH5O9Ho35HGhSvWYz9b9bhzLddytj2a30PHFqS%2Fw7p0KlISihAl%2BDgvPUvs&X-Amz-Signature=07f1aa7e6bd7eb5994ff6733c3b1cc341df70359c0c9fec7e93d4114ffe3546a&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
