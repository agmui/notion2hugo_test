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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466773JQXMC%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDGMT30X4GfCCOY%2F%2BWx86lOwLTt6730eMzTWuD7%2FO%2BmywIhAMPFqbILdpNS9kkafA7mSiQRwigrF6Oh23F2WA2PDjGWKv8DCHoQABoMNjM3NDIzMTgzODA1Igw5R57MWuyNqqVijy4q3AP6eBqX0%2BH9mkx9wRlIOHiiBpM8YvOxSpSs5BU2jwyEX90%2FDddxcceNFO%2BY5w8BLC%2BkfzSfKihuS2ZBzOGh2mjPTJYaOSmOHRS4v%2FRXPOeNcVRNMrKmM8NUEgvLGI7Ap3iUKFirUkUPSIK7QV5Cq5ITVj9Z7MWtk9knXbu8nX%2FOK%2FY94sZ8i5Rw%2FLf%2BSyUrTsGeomo%2B6ya36senQ385RFLQTEzE%2BSCzyfGxshO7X6TNR%2BRprOSFfQyKg%2BA15mYy4w4D5SXr1dxqk3rfqLBBflz6oR3GAZrZHq1c1j5hg2rQmyMesUG%2BBth048Ihl0%2F%2BV2uG65zogG8F54PRXaGO8Z94b2s97X8KJjMYpf%2B8XdmNoyPtZCVUPcreqb9ZagVdxgbKqnRcVafbZQmxxep7rWX%2FQLhyf3LGFCuWC456PbB%2FLkk%2BObO5hsTflBJ%2BXhVRPmoGlGum%2FaTW%2FHmVhKG8SThtB7Uium7q6lKgYh%2FYO0wMt9wCf0B7doGcMuPi5KcyRYiECLHYO7sWfx1CHw9Y8OE5kRVPNuWfjSISIL2AfWOJVtXbQJRDDRh18PKTrr%2BpHC31dcMKFIxIQcdLo1A1whgrwJX3VzOM%2FV22bJdRrsgfAnob8RAowJmj4ddHxzCXiLe%2BBjqkAdjnsNu%2FJ1%2Bsp%2B54aGza1q8twRjsMt%2B%2BcIGxJAMgq40YNVl9iw5cxZS%2BpgDhLQJadgY%2FPvLqme88AytC3lsOYM6HELsL3pPO0Rv1yy2CqICOPDCX8UVzo9CcSiaT49tqmRDLr23ej2ZjIDqtXgRIl27%2BAZw07lKlDiS3V%2Bbxt3AeB4HjsBwtrGMIeZjhTbwqxlEySSm0MAYUOZZuGQLk5ISMjviq&X-Amz-Signature=2f1df529d1dedbd303b28ad32db0448623c9649523c16a87dfcb64c4b3d95558&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSGJCGCY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T180759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCzUv4ACJ8RSQrWgMLCcf3XdysfJSrVDAu5oK%2FwYif%2FaQIgKox8kyHtBSCNNMCkSQgy%2B79c6p6VzppbMPDiQ8I%2Fbn8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDOtIUfGYN4F3tCaDYSrcA2WUdeeuPDijK84xywZg%2Beh6XDkhYDge%2F0MUKiDoczVSIneXmNA%2BeULsppxUQxhY7f8toitP5gWN3iQW56WBJ1RhAgNlod19dkkOy5Is5aYBeJM8j4JCRKXM4OJY6NtaBKUhTJt11GR4%2B8I2ApFx%2BLK9fddX5qhsh%2FtMYHrJ5%2FJ4oy%2FSeh8hFLXWi6WUxyf2i1OZ1gZ8382W0KNWjQRG1qfnKDaUWqk3%2FsIP3%2BMB5Qk%2BciMewL7Y3p0XTjNqxG7ohG8lCZLwFODuR0EjNIiepnPPdwZMZRzLH5XWwteEFGYohQwwKTNu2xGKYJ%2BDKwEXCtl9KpE6rxO1FspUEDvvYAY20Kb0dQnF2B9g9v8nOvK1O7LS6QpHNcQkRAXtqpvTbYRdoeLU5tNV%2B4eQCGnm6O54Chccrs6R%2FkKrtlvkfH5jRC9bBSNMVoV%2BAE%2BwSbmyanfv6OfD8EKzhVi6GEVsACaEY4axQycunHabWerdkH4qMfJPVllRnZd9hOk74eXLURkGX23JY8xN8b5iMCGP8tXB3waEe9yUmKzHyYcuqxsjfWoPPgZMp2GlhTFoc4PxoGNVjHO5WIHfmyiJFQbsX8QCjwmkF9mNkKLA2AWl8bkD2legfZ9DHUDGXih9MICut74GOqUBnY%2BG%2B8xi6FMcMj69iwkBxH6Wxz1TVjMDNjWNuSGam6R30FnPVsC7P17%2Fxydu76ZasVh0Gzwu%2BxVUWbvT6IvuT9jMCdIEDXF8dsIgxo17989HMWmACW5W2RN12o0hHvYJF7jvzalRj9xI%2FzYAn1nYeFboQK387yhSCbY3bZnMiJoKnZ8g7mzo2I4F9olGzFlBwi94yO%2BFibbC4%2BIv5Hec3qFcPa9C&X-Amz-Signature=6a9cd2037de132f45ca24a8ca8a00fc0cd2bc73f49dace7bef24a3fae333afa9&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
