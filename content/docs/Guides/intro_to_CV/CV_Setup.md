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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE5ZILMH%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIFA7yDlnoHqeH%2FJ8XN0T7TOu5tCut7k8%2B0VsZhXBabA2AiBSZTtRZ4v3LNezsYtW6X%2F0lFNuFUgymlYfTkKOcz1zDir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMyYBUcgGUQHRgI%2BQ3KtwDgNF2uxRxG9%2FHuHa4%2FaNmW0zVAbY7KsKxkasUXcGUEKqL8GQANt%2B4u%2FtRphk1SDAyAHuYwS9SBKD1C8z1C5Vhc8i9hGj9smQGS9Ti6nhe5pxm0Rci5s%2Fq4Xw%2B1Or9ix%2BtsgKF%2F%2FwgveuVKZAdO8ygBjIoMPdXlODLoSf48pvN%2BzjIlI6FnJg36B9k%2FVbkIDsFk1%2BwVLhDa1ssArVdW7KqQQ11LtrRmYZZVmxPXuXygvu2gKveSDDVeXrFeKMEDqk2%2FWu8jnWw%2BL88sY0I1vd2iIza1Xgeuw3LE9LR5xxxSZZgCkPjH5is4mwFaExVcj0JyELrNUJOJRkPI%2Bn%2FWyKkoBBp3wTGbCME%2FG3241BIYrPrl2uwmMcXZxmY%2FKb5R1batsDlhJPg3BWya%2BmuFl6aJ%2Byk1v05yfo8AXTDn6%2BdoNMeGzcTZNLY%2BGInbaow2XXsRiUeD45UsRvg57KoFnH5v2BZ8Hwwv%2F2G0H9j3zLdjHWD6LJ91RnJ0tGjqHYVk2XHJWhpuUru7FhscgZtJnyIl4KpxqQQuw2XkztZbr%2Bba0XCVOyYaIQYmLvzkH8p%2BzRPQDQQaQIa2ivV3Jb1fmicFHCtbGh6yJndS3wFViuJ9HG1r8TDbBz48RRc10UwmtKCvgY6pgGyxL8rp1vMhVIddMwON%2BYEwEsrVrVYZzyoE%2FJPv%2FoDTrUAAIlZpPAz5OkHu%2BHJFS%2BhLBDX%2BXsWLHSlp5CY8HXuz%2FfdrI9HR5GNeC4g5DDAbUtisFYxE9FHBD%2Bwgls3H1xqaKi8j5hwjTgZ7dYtdnF0b5R5JvSmuyPWMMhZSzn8aITRw%2B4%2BzRIi8%2B4WjB5yIlh6K1vy1Yhs8ZxXzxC9j8YFOG%2B%2ByZLY&X-Amz-Signature=78b2f44762308151ca29f900e8ee2775506a012a5225536909a4cc53b5e716da&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJW3BOJU%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIGZvkMDPRl9%2FxsMTZrggIddAjJsrFK10p70ZrkJHjCLIAiA3GXX9W63Q7CqKOBBxDCstZzPqbVsmbZXczGZvYlzN3Sr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMmb6li7SZKnVKRhdsKtwD%2Fk0kqM5zqWY7QB5uMQ5SsXNwuu25qT9JZEJm8LDJMTVl5Ts2c7LZgMKjykmVTjQkWcSwE6R1MD%2BIYs0GPtwRI6BVboMJoj7Z%2BfOWVu9mZXKf8EPHxfUBfWoM2lc33yoB9CXUt1TwMIcENLzZD91HUdDq8gIzGQ174kRgRtwqfOVro4cdYQzJYcQKkmvgf3jGC0eUrZlkr4cUD%2BSiKL65V3dBNy%2BoUZ%2BtrTJZlQP3TuZRaWRrbp9k14YvhNbMCzH9uKeriensXow%2Fu3hBBahA04lfxSX8Ev4s0U7f%2B8G0f8h2nNb3ftXfe0EAgZ312qXAacLM1OZ%2FYuTZCu028YB%2Bkdum3qB%2BlgfwXYqNv60ookO1EsQrUVZHyV4EACw1b3afqNVUAfeczwZil7CmuW6HAR1p2q96zCu8b%2FFWL%2Fseu2I8seYQE%2BPiMF2IYm1%2Bx%2B8zMPFOq84nakLERLpWnz7Tm%2BFOUH4B3I3mcgUL%2BVMSqQRUPEKR%2FoXdY326D0Sjn%2BBI3wEJ3MIIU6sVOL%2FhqGdCPMPTQUVdADwbgkv7EdOAPqAoy3%2BCdimpTLImYvxLr13Lokum7Te2hXrFXprZ6Sjn6uWclWe3NRVZmpWa4CqlJwEC6atObBQCidUztUEwmtKCvgY6pgHFSi5GUFD102bkCu0D3RmXOZs7An4IfzjwC1VwffBl8FaLfZEE0wBkXUtDxZTFeLXAhlAwm%2BmRvmgOwq%2BI8PEEeAo%2BLe%2BC1Huy6K9BZuZ344gj7Fqla0IaGRcMSuttuXKGBxgR6Hs7BrN1iT6mGjjghOtREGYMz%2FS9zWL0Ggbs46PyU7ahc0vzhnerYtBImAtA9pQ64JJoay%2Byd%2FuMby4aOAgVdrJu&X-Amz-Signature=e6b966b73a6a81882fba9af89978dd85022405bb33c3ad496d8fd8beec20e5c4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
