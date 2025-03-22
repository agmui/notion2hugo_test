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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WVGK77R%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEoM1f7uCCUk%2BxcpBQnPw4TBk3pfIhsy9uXUWlHYdeHSAiA%2BJ0hkT5BxJB%2FqM73ZyllDUteRU7IMD%2Bd5py3BblHdmiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJdwv7DFg1WzfoYaUKtwDP%2FuKpL%2Fl%2BcmhwoDke6VwDG2riKprJWD0jZ4pE1B%2FUszvk9yPloe2C6B5xsG2mNN%2BH1RgMUJMXiq8cB9NMnKUTWlUWjd3q6DXZKmyCXkT3HS6hPpPz%2FZRkO63JUOvTKKXD7uWfBv91x51Rq5Y83V70Wn0GvcSMB7h5HymexFtwLh2V%2F41X55CNm4c3mfGqpkqDaHki8X6l6JK5Y5ZG8CnyPxx1IEadOGyJHN2ZILMpnKtWLHToeD0Gzs%2BQRnUjentbMTCPsgXbhmVOKoGog5R6g%2BqBT3P6uWEOlTGN1lw%2F22lfdeGfZdkZ%2BQwm%2Bx1YQTuscaCIxQBQXhJ8IgELRd0zUpi8iKa2gohqLSjZ62L7ALV13OGxFZ70ILaGHcr7nlzQXMnWiaPfE3WGhq2JwqCqwI8X5BhEz4fDxXClurOgsFr2pv9h0XXXxQ2LTzLIASgNCaZmJOzk01naj89BQeUXH%2BXyKD36Gk1UvBpQwnG%2BYv0MYZP903R5JzAIQ8cWoW1Ig3p7WO23eexaCSlj7Rt7rxHSVnip5qbl%2FJPqWvhIiM4oseoHS70JVw0cyV5mB0BNfsc3NVnWO5aeGqZPTcSy0XErTurJ97mclArGxwM%2F%2Bk%2FE5gJZT86I8JVUPAwpar5vgY6pgH%2FQlXe%2B%2BUG%2Bjk%2Fs%2Fgv7EhHfvSOHKvhGoHTYHu0UM9PYH01sOiS3IE8%2Fkm8JqoxON9KJqSFTcW95iJ2cEscsp7QwALVPfBFQaP7Llh8OYiK16%2BKaknee80xjPlm7EE81rztSF9Sa9wJUCNRDM7ISL4DPn4TbJSB61VgDqxFRCK3NFXiIMMB5YyIzHEY%2Fo4IzzGfhNnE6OpHkvZWd13C8XZwt4n%2BcESB&X-Amz-Signature=dc9bf7bdda6e32f7414338aeb84bf54ae73f9d5a4396fe2ebd57fd89c92d96f0&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JR7ZWOJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIHbwoCak83ZCKnVoXcRMDyCgXREGNXhvt87OqvPVSX5sAiAFfzJrzIGrQe793sHSz5p%2FmSS9N6s5zFe7LVG2P33ZfyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi%2BXxAqEr2i0NyM1lKtwDugbUSAEs1OIy7AYITY1yiNpI7qT%2BRtfnsw8PtaFav01XFLOQ2Qn8Ucz7%2BGANui%2BEJHpTr%2BkFVY8iQ9LmLIJs10T%2Fy0DftPz1u1jdd6ANRwrRL5giCCS8CabwZ%2FFHMi0k5MWBozbDetd%2FRTpcQeQe9RY%2FfNYd4FrTkBkQkWnMZ8cGlnr8E0DBLk4%2BZcLPZZZXxuSxCeccqvpdkrTYDp1efXdQk0EffVQPFuWQjFDMRZZE%2BnB20su%2Be4AgCdzwkJ1BPiSuO65c12JOaMVdzdpEQwupwwSiJJNDJHzj5VMHyEWmraUs3mknsAL1aYhba6ffrKBz4FBphJB7RZMz5MXlVdh%2B3UlhLM%2Fb%2FLyVlFMOhByVeGLMFq%2FchCae9LdlwjN1Q0SkKBg5akMIwkoHIG7ftLZtETQqTECXyG0dcaISrx0AmWNOCgaIai7GbukD8Q1jUclx3mcfzV7oJ%2F4saSMQwT68Uu3sHUzEMe%2FBd2qqrn849f2UbYN%2FUeS0ve4SNRIVi2fXhXn8W5CRzqkfVuLh25SW%2B1cyTbTzTC4EgvjbTp6DKrwHrgRqOAN%2FfajEVEfmykobM4KTlGz5fLwcXejXTM8NNhtddkqENcV%2BmvNbh1UGh7i61UL%2FdvPqG68w7qr5vgY6pgFBF67EK8umLjfdJCu8fGROKgzaCkToPSCD1WyZEraGm45fOHMsLBROYqvwVkM0enhF53GX%2FPOKM2R%2B3RKPMpojTCy58Yvy0rtlRXIGuc7ETZUjXDDKYv4XIUsEjEEKnUGQQidFS%2F9z7ROq%2FnBRic%2F8n6xP2kO6YnLNgw2f%2BWTXNzHbO9N4PUiWwSWh%2BVC0iHJodmFGPBgt2bavpHMCqr8d5uUGLz%2Fx&X-Amz-Signature=a8ceb65b3059c49b4f5c5a391f70bc6f6cd78c7d27f924752e635f0dd7759e54&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
