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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFHVITQN%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCLDRfscqeeryw7PRWDOpmS4ZmqXAOB%2BoNGxNdrx5jSawIhAOfA7mABapnAC92qksFRUi5Qd4WRhVDfMm0hd3fZBuJzKv8DCDsQABoMNjM3NDIzMTgzODA1IgxkX%2F%2Bwe8oDgp5%2B4KUq3APKZDi%2B2NA158OZSShrExoAUw6lrcWus6SXsNfN2gtDvaMOCm2C6qT6%2FO9TH1uhEEDXPXhkbVYg2O%2BJAOUVwrFhlohQ%2FPZqVJpy9ZND9ouRXrFdBMRDq%2BfnJ8TmU%2B%2FvFVozzbULx59oDBStR0MRWI1dr5NYKAzltCm%2B44r5aKhtsKiL7vVBPh4m4G78yd6Ay0Pp3E6pqpBpem0Ow%2BmgmU%2FcaoYTSU4NvI4F7oHhKAVYORFykV3FBvQJ2BdhzLi%2FrR90xLPlhTZPv0LzMradAG8WAs24TEZt3%2B0aWRoIQgxBCawK3pMuCPkAfeYqkuOe0cB0nbpuBd1qgc4FtzTi6VvqQbT9xkwp3q3stQf4sUm42BVQTtylTj8qNskRwReG5pXi6mmXwiqyxGTRzKYg1Z%2BHULeBfiw7QAzHyltbd4uTRubn7o6055hzLJZm68alF13xpJvZoTwm18mjnGsHcWsx%2BT51FskIEJ62dbAnSivHRmz6guEWmFESBiphPHrGPqMoWkFpLPCPkQY3Q80GoE%2Ftdp5VnIvIy0%2FDMe2i02j%2BwhPP9Bpwdk4XXvQw8z5rYyWEbMoSdk5tJScGaXm%2FQI0pkecRyqs5N4G209XGTeAINl5RL%2BvyN16z48fbXTDojaLDBjqkAariv7HlAaBO9xoLT4gYg9WK4DgIKMsqcHt%2BW5sH83cvi8hOFJP6eIorf4EJOvRsfhoWVmMPLSW%2BhaJ4QGi74iZ%2BSGO1F9qdaL5usbkm%2BiLczue%2B3FakKL3hPTqmpW6x8Sc%2BMOhhcWRj53SlCH6bfeTbg%2Bl4p%2FkZzUkc70H1d9tGLxex38attXLvS%2B7GOfG6vujjJmU8R6lRxe%2F8lI%2BjTiyPdtx7&X-Amz-Signature=991ec1bda2c40506310ff9416f513953d4e2cadd43c4fbdf37a7e77079964403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PCDG5OY%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCiAIZdhMLlrFDS71FdpgCHNUZ0P57TUlua%2F6EIIgIl4wIhAKb%2F9mEMPuW0AGzV0UvZPWhExH1DO0ZikzQol2jueMheKv8DCDsQABoMNjM3NDIzMTgzODA1IgyiYO5kb%2Fli%2BRefb6Qq3APNnuOoHoXnUVW%2FfqFhvD1A%2Bol76Fl0648P4d%2Fg0rITbWdKLzZyiPh1pkh4Vq6azVB3WXkibTn%2FTcHhAyfsAJwj%2Bp82DmYeqEwLK70G7d6K6nCi5z1nVED5vTo3OOgGz02Q9iqARmhfVNuwhUqW0wNQtGL8KPTgghHhXHLerht6ZPVcICWY9HpViwnDlpTB6ngkl4HG7Yep%2F0RboywCFEuLl%2BZy6U%2Bk3p5dDLWAxj6oD1bNOS4szo%2FtSlXaVsPHyo3gj1RzK0vkq%2FvT5Q9cBdXXnovsGrpXLEGeRZB4paIuQtiqqRDigSIEjtLq0Vb1w79mK9AnlLpyV3lPC%2BbjroGub1MiGQerom7XdKsi3M%2BdpYJEkpOQoh9pDAK6u9ULwM%2FjzwJQo2XvHCiXvdVNnh7MPl4a77nZH4yagS8a6njPQomQjZllGzlvbNeqe6CiQeHMOufjEg7TqKz1cgRqRUI1B8t0Kz2z3kHgAKFHaVoJHZDJl555dEcPTLDF0YCvqS0qCjPuwt2sdfUifYBXToEka2g38txeQfKisRaRI%2BPHKIZhIgoV5ONdIkxA43Sd4liMXq1ds53zRkefM6e9M3MSfyrP%2FVx1HKOrcaIxqS00U2an7c0rKzZk%2FlfQYTCkiKLDBjqkAY0NKzMhIvhlG5Yz9oDh0IVW%2FtF%2BtMFCmVovWWG4AN%2FUM5irdbM7ooBha4fu4TF2VsB0eiSwLU5IfgBMU0WgyX79IC1jLPSsDNGiW0Ntu2yhI07KBEhdOc1BsA7qfB9ecIKD7TOVMRJ5nvf%2F%2F3y7bVCdWilnJhMxYIg20zCritKPia5DaqswUV9s%2FjrmlPQ%2B9dob7bBlVhOCzKu3DHgMMF7r0nsw&X-Amz-Signature=f299436d2fd4bde4b8710aa61d409a7a10bf3f255997a67319115c12d38128ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
