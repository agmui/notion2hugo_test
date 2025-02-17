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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTHVVZBI%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDeVYvOA%2FxftOTHTdSh5onQKw9RrAb1bL1SV4UAeVGD6wIgSxiLet01brwpYn47EWjx50Wmyj%2BJLbkdBemRql0LHe8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGcwxHmiQvP2K5U2mSrcAwKKPFNwI%2F2IvFAK7GVB8xkRena3K4JIQZ3nxVsW0XlhY2leLqdpXQOfWEWu7IqDSppsPLGfDIDJCmw7GFUAT5UrzosrkUEpeiQd8zvPafJB3pD9ORmfFR2LVRFKJO%2BPLfY6T067MXY%2Fi1T7kWO5nzM0IJUpri7tUxwP%2B5J%2FdYeeuduDLBGEutoObYdKni6PYJ6vSrP0%2FhkhxIn7DD2bGBpyiHMyUBaQjgeCmvZAa5cRnFZpWduclQysGiVk44tCgGD3qyBBUzanPYbgkJfHcI%2BbPjs1y9i3mB%2BH%2FGKEMh0teEU%2F%2FB8Bn73ufd14i9BOoscqaWs2RMF%2FKaTUO%2BW5S71LHQvR%2FwVz%2BoG426f8aYy3EVYC%2B%2F13Qgy%2BDuS5KcFATHsxafiYk53UOdYr%2BRQoNaBrFfXLSHbIOWmYURqYtCLHA6AfLCYXGQv7Xgm7leTnjjv2q3j6fTAZxn9a0ohJlTlwnDqAiQ5DvX6UEQD7z3zaw67Ox1ITi0XX%2Fuf3BlGWX1VmGzUWXw%2Bm%2BiiemFnJxGTwqn7lVpMjFJGQkBlbA2kaRV3hrseaZ17p3PD%2Bejg0i2TsxPGRjDGUqfByoUrECV%2BD0bT8gDz0KF5GQHslOBLsxBeJfoYiue3MHAE1MLb2zb0GOqUBOOyEffSYdEfGxqvwYPu09Yx6QeiIcm48lAFWotllmuJD%2FqsRE9VMRsJxEc1otd4CmwpSykVnjiOTzeuUx2gxAur3AoABJg3U22rLGSEn%2BIpdpR09%2BKPNLi%2FcdgGPbkP6vh5BKExgJoQps6pD2LMUN70KwEmdUarDw0egGQyuW285WfGNz6fmecGk%2FMnnzzinVS0MAiEb1L1%2Ffz3BPd%2Fw1FXr%2FQyc&X-Amz-Signature=8206b5e2a7e1709cd025a44eac029bc809623313d292f9f8e3acbaae717b0a3a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UOYZCGO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIG9etyAPhWjvM0duKh0ONmjNC24OlxM6ugbuRBWD406yAiEA81i7Hh%2B0atZZQohtfzOiA7Cm3mXRi3s5TPzcRODeX4cq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDP4NeIqw07Kqf1WhwircA6H9OSQGTAMGCadElCh4f1DdbwvRKVbjBJN8AU8ADE6ndPn0XBlIg6VUrviATrQxtgutGaWHJNRJASY%2BGAp9CCzu5RGASsW6Qt19fMlFqn3J%2Bz1jO9nnxoshGuxh86q14G4YYqtnziXdAcCqa4ISjHOiILZCPCbbi2FlRrhHY0tW9bTpBN%2FPM%2BWzm7QFkyOVK5QSoLrD%2B%2F4d24JXadd5PS8ZT32XQ3vn%2BIL9sxrR1tfUVgcletI7e38gUlTUVBxx5V5IJmJK6dOfHkYj3CL3OTLouZFi5XFpybrtYi6JET0HDbLjNjRODabFQK5L2HZy4m0CV0O7bFbNx77qQFxhOXAH5kRLKZlZc2u5Ud8gRFafazfVUh4t%2BUQm5YOXTPm30QL2V3x6qIG4l6DeDkKWqZpC1EcWXazLtzonnbGTsSAJVGf0K3wUF23AHcqvSaNSTNtXxqjIOSwhAzskHaSf6KdrEVtCS7PYYzRoMzHjtAu1N4oSQGFJNoQ23TNuot08JL%2F3trEu4206vb8WGaDUjHBgB3JHbq8H5e%2FiBYhKaZQjO5cUVxG36AnbdtDL2EaDeYn5S3KfisnoI%2B%2F%2Bv8%2BoGqgvRcKUxaac%2BDMJ9bI9h1UsAF%2BGo8SXnwk%2B3npFMLL2zb0GOqUBzEBLJ44ruLZLtGKkVnxHlVydZRugY0k53Qd48Qw0C%2BcUF6Y6%2BAft6RrUYbchG%2B%2FhA8n%2F%2FRw%2BJHqlzKOwVgaFnDPq6F5S4HALNRa%2F0C6WgOSoYOmq07uY10ZJ%2BA6pN9Mh0ERhkfIE0aWLRo%2FPYDxgphx8ncljBv0w2Uezs5OBx3aRFY5EqhTYKNNXdV1t8X%2FBZQj0KgOnN9c1p0YlABQVuOLPyOG1&X-Amz-Signature=37b636630f0d27344b8d8fa6aeb60fe8dc8b58b9a680c8491880457182dc3a99&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
