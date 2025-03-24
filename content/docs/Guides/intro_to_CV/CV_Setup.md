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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR54SIOA%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyWEE1HSH%2FBGxzbBJK02Aee3%2BrvcbChnPysF3jeQSNfgIhAPUbxIhZtbxjP9MrLK5txPPUN4C11IlAK7ZklnRHJSMhKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF2O59wLHceBBI3Ngq3AOK4mlP8wueIfJdK4QWhdrF1x8ua%2B%2BfeElfRXIgz3T6b9SyfZ0NKRqKs7j3D1YmfjQIk6RH2DCd6kJRDtdjYLCtaGbTRXYKLTf6LjFtPqn3oOupBe%2B6UicYTZvmW1IXpR%2BmxiU9yz1fK0zrC4yNM5qkIsdKyC37yI2BmmLNMyZQP2GhgDd3UycyHE9QbhnrqahrPPVxfdzMJnAz9jJG5%2BksE%2FSyv97U%2FVj4k4f4zHrioBowIIiTeWX%2BzyPTJOy6QaaUqu8A8E%2F9N8e9IoymeI%2FgfdfalhmsoVqbXa5TXR0ttmfrdSns33i2v03PexHwvgKgR19x9pZxWjFJtdMHD8ANRxZb77wYxIZauzoIBS3BbAsnJ1O%2BXvJSIj%2FBmDuuA5PlRgP8Ftt4SlRWXUvfHwvUxOaarMatEnUHB1Dkn5QCJ%2Fd5Qm3s%2FwPj8x5myyBZGOS18kKbULPd%2Bu51zu0tY9gplcGD1AWDeaCMMZ3XZ32Ipbe97yZmvZ%2FbFQrR8g%2FCYh3KrR9uQ9rZa10TOJ1majL4s15DZFgpXUVECTJzEsVhxqHyOn3J8uBJGOuFxzeVv%2BKFM0114N2mIKpFfNATc0tizhDjBFZt2fWegNY7dWrqsjfxv2RqNuCpXSMxejDA%2FYW%2FBjqkARCA8L1JhM4fLEdcQoiwzMbVbZpHoDNcbZNYhqOfwGhI1ly3lBWcvSIcVHYTGKI9GNIA7jPsBkv9t0GkB%2BxjSwuzzWeVLD3Hh%2B6h97LEVdS5KivHHrLG4lvNtvEWyywF8aPi5a6YBTmc5Vj4D%2FFfWN2e6VUdqx%2BzaLcWKDP4YOZPKRhMD5Ig6NYFY2yHgf6oxE4mwCJ7xzXuZOIxFdhWMAzSXZAI&X-Amz-Signature=4c0a83433ba769ff3907c5dd39165477cee1d3a67e10a1ec563a30636429b89a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665724HG5P%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgR9%2FHxvSu1lHGdJ0jPKpJU0HFBuYR4DQMTLRvHIRLVAiEA0kefZLdXvTlyu4bVJ8hErS0MepW3Jjp8oq%2BppeSWy8MqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsqsBzZSi4E4E13nircAxcpiD0PzTdK%2BmbXyrt1ga%2Fq01v%2B8odz2m6aEH57o8wyAvPAQ4fwBc3yS3cwjcZG2bgII67LVPX4uSItlJnShPYTRUZ6g6bYsJkxY1hT1Tlxq%2B6bpczd%2BQiWMzWeCeKo9kaGYQjDjKcom%2Bf3aM7MThMC7jpogg4JIIM3yB4UrZ4H%2F7Agqh7iQjnpRQHySiHcg29JpzwAy6Z4SSlpEL2ynBz4E9%2Fn2K5T4miE1yfbMrQpNd76lVDj80k5YduT%2Bu8plvl%2BGxHe7LwdUD18nsUjdO4NJskiJDtFvfL8fHKzfbR0OVnmVmS5vOJFGka%2Fn7B3vO4dqRZ8y3ZHJgS3IZC8hDmqIkUohGlv2gs3Wa5tJ9AZo9jkG%2FgdauvQtZ7uzrJHpDiBfYDwpv3f4xRMU%2FQa7UDiwWHdOdd8S1418%2B7H%2FM9S1GmWKP6RW2glH2ofactOFvC0002rUH%2F4sgSYOmvxEhDxWOdldHxf7KrPiI%2F2NxD%2BNitV2yWV7n8qe1Nf4d5beubpfAyBPmuUqlCu7Y1x5lAubQ4D0fBlE0yuNMDwb04i%2BGkYvlOYLpE6oUx7G37frmYUtTURjCl5OdlzcVqIVBFtHphStgTBYpI4jmxzoUhHm08c%2BLkY%2BIfd%2FMH4MND9hb8GOqUBwYvVY%2BQLJRt6ngrjHHtYlg2GZ7vYRMzkw2xBuOJUZrH8l2n2cAecVHpLoI7GA1Phc5S3rc6SvbDi3qDDYlXi%2BG3W2jrpWTEeiiziZF6G85%2FpxhdWL5AS8BME4FlBpvZmiNsmyWcEqQrNp5RPHNoQt2H1C%2FUcFQ%2FlvUYil817LfF5pgwnRzmtQJdRUqmVSsmh40m5y4p3JcDgGMoRlxPCPRuRpx92&X-Amz-Signature=0897c41b80977821520fec160025f012085fd5af98a73c5ebf455e19b72e6822&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
