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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GGSC623%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDDZ8Mg4reqx7NjcEJBYuyUVNDoL4LayPKAbG0AoTDXoAIgOxtW9umsSKQt%2BMvnzFv3034hjOAhPaat%2FhflWnUxiF0q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDPKI5xudElKYHQKy7SrcA7FzUGQC%2FkjIEVs8cdfztp60ANMTGIzGk3%2BsozTLKjWdwfIdB2ND9%2BJMWPqBsaNLWaddaHEfXRv8KOBNe7NIvA8OqE3zQ5ZNme5mWYop0jt%2BTdwq3j5bSsLNHW0814NFZGya6b5j%2B179yD04ozjKYAkBwKMne0PuhoDv8uyzDZeaiGfPK8lboOQUDhj10OB%2FS4QUK9hD1eTKg1RC9f5t5dmuf3x1TyCgIOaSkDgGj%2FkbYVtBRpGPioTyzZ94KK51fTMhGaitbmMsdFOFiZd%2Bwe1m0MNDl9if1zTQeYw7efFszwwOXK1XQFhJq24InJQdIyD7St0uBHUqKThY%2BfOvFojdVITtoPNstlHPdFLpAJ9SjY243p3HMTA3yX%2FR9GxrWds2zDYPqyntXgyk58030ufl45LFMm7LE0oVs87UmFVEfEAdLVUwBlUZN6N8tjCP5e8X4lPRIVqGvIGcMj9aFgt6lgnwHWoqfe9sA9narDvgqw%2BAbKV1cE%2BANkbDRgFcWtlXvrGczJsoGCkbw53pV%2FU9iR0EliXRZCRAcQQoTN2JITjizcOAtIiJWDTkxDKIM3dPszZPETJn5Dhq0bR2dtu5opiouT9d5HB9Fj%2FTrqqXLzz9Y%2B3zPdXa3eDAMMDelr0GOqUBDmh13Tlcb8c3JzfNuPexGSiGi58ucnno7d4PR8cZy4bLQj3UKS8tZ4pn86gnNOCObwh2e1A4qRxbxZXlBcOyxCL6a3JmP7fYNbFP8hhg6%2BCXBRx10oVyj27xAjTtPwh7xDnkAHaFxDRhsz6y7I0EOeTQV%2Bt19K8tYinOAZg4T30X8rkdoVKDascpcjZSSA90Djl7SwQfhDuYdtn4kPwyYCWE%2BtmS&X-Amz-Signature=5fd6d1bb21000d0f9fa430e87e4da718eb5e7716655ce730e513771d8c553e77&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBVFL523%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCws%2FejUucjMPvOO3Wv1EAS7O7hgTqUuHw72gJ08gr2SAIhAO1iSQZQaf5yNJyOp5TwH08zhG4MDYRWeLUDC1zGH1e9Kv8DCHAQABoMNjM3NDIzMTgzODA1IgyQkwLGbsTRmB9%2FXeoq3AMdrfH3OlcHt4ojkn0dVzSg%2FCmxOSVDHI7RdvH4BFtvJL4%2Fs6PlE2MXzO80WBVk%2BWA1rbERT%2F50EiZpGrN4cKXzS23cFK6sUB5J%2FLXyIpWdIsmxVZFYgDmVZMQv61DGSq8SViFvciLgNQHlxskLDjCludLunZbOPqje0fNeirdzzWQWDwl683piRCCjZ67qGWWPivuiKV0rNyGkqhXhrxr9U7yPJGYTwA11waWyetimtRqf3IwgzLAJDHzrG7T5iJTAniCELeoS0DpdiPbquSOe5ixsNwAunHRA31xQkepYAGXtygkDn7hg%2B3yqTm9JUUeVuZUb7aDyXeqUBH0pUsKW5vSXVli7EQxwISE48HLYxKR9f5w41eDtdCwX9sN9jpt11W3LNCnxIDRLfJD6oj31bAIIAGBqqIXxHuQ2HVsAsYHT7uSx2l0CX7SQcXVPJAkvismBSPJEK57WgC2X%2BZxcYpI5pU89eM%2BW95bGjwwMLH9D8RoD0lD%2BlAABwF8Ek57jiqet1kfvp3JK0Yp0kL3MmdTMzTpzTKuY1QxNW0Jqyhp0NASCiOnYVthNYY3cDJnXYyFEncbIc%2Fk0%2Bo8l6XMUDTQ%2B9lu%2BxCkACPxuwkWCrGaWoWxWfbZ49mwj%2BTDa3pa9BjqkAbUnPoKAoygHlBacclq%2FIWMUkmQ4FMwQ2nMU3nH7YpaljHVyAN8%2BkUxbVjGkDFuAt1FEoRI1GBwlwoqdrbuyTIP69XBCcX8MO9PRPhMTfi6x%2F9JkSrtw5lQqVXQYgwBs8BFTdZbeXD4FHbv3vfSEcwTu%2FvcE0Uc5BbkI7AHn6pGNZ8BsegyAg%2Bvc4ISUE%2BUUO%2FDoakjZ1e11NjwfijkfTltiXN1o&X-Amz-Signature=87f69fa84682306c5e738d0164968b29a39045a83a229162336538fa0935d9a0&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
