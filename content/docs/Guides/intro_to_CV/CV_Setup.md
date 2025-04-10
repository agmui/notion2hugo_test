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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466322WFHTR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCrqafesM%2F5qXbdW%2FdnOhQPbQEy3xeMTng%2FDDwO%2Bm9yNgIhAI9J44YJJ2QCLBZF96pe%2FWeOWfLH1nXCKdXCEMbck6lCKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTSNj4dNX11X5gDt0q3AOo23F2h0ylVBU%2BJLFtP5tR0KjWdWIMV%2BzDwZlY0y5lxN0ljm8lkflrLq7eOJlqhBL8aP92oa5WsxPPqVDB9UuvZhchEVQl%2BDVSmPLa9qhukovVKRnqUdXH%2BkQoHocr63xT9h7dQs6mzj9SIiy1R7nfTRNyhIn%2Beg0z6I6L8qFZhTO5brIWxPXRabtEMfqod%2FcbQRE90%2F4NPS0YZDLzWO1XS52pQWgAwbJsw%2BxUgzDpjEjnMotoJnqRdpunPKz4wS0kMFiewWdgYaQAn3C8eXfyky6mNz9N1JlzCuAmEyMFZHu5%2B0R7%2FmtKw%2F%2FYPY4EXLNEXe8GdbyXqsjzJ8bwIEuvVT7ylbaYVf4q93e5HbdlaVD8QbCzRWl7TEWqEj9YeEAAa0icWpP%2FX7KMkU8V18SD4VVrqd%2FFr%2FLLgVkrKW5tu3XcQBZJgDWdHqNXRgwbouXsA6wDTb051hqyrE1b6dSogPDhbOyEnNi2quICPEZgkZyPPpHL3N757xhqRUAQ%2Fal9%2F33ktzYi5COSZGDGAS%2F6sGKqmRbXnyltRqYfjFyE1o2%2BU8jv2iTzPUPVufK6Xxoq3zW8RQafULxTEHZsOYn%2BY6ySZv3kPa%2BOlTORzZZgrBxtZR06YhDPf63mtTDovd6%2FBjqkARwO0h1CWFxBDjf9KTjNBRO23eqkOJDX%2FEqnrufwjPz%2F82%2B0JMPGCC4JpZWLFQtUXboFUIwvt%2BgcKvq5%2FEuACdok%2B5%2BHugM2zgERxX55J9OboUzFw0qei3w1WMBCoHusmzKtcbxiCWwBGkUTdQHrWxZxVZ4Cukvr050tks5lvQxOoMHLVbu4XzOQJpSTRtB0bCVEDbQHxJI7bV7hEsXafIfcAmHp&X-Amz-Signature=306913b918d290525725c111e7abbe769a3a926d690abcbf7bb8dd9b791ee404&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VACL2V5A%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIBx72qIDgOelxdi%2BIQP6Dmk5kCBfRV%2Bo5gWvRMW4SPaIAiEAmSn4LX7yoqYDwQMzzBB1JXC5SAC4I2p4G5imLQsdErwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMKAPJPP0fEnMVaJircAwPGGHveoBg1xDGfXykm4OvUehWDKbyBVZYjbCDZ%2FZ4B2X3XGWvg0ekb1kLSW0YQJeEoQdN06yyz3Ci2tZaC88zEeuMtUp1S4w3vW1bUm99WNkDvx47vt6xQBwfUit3oq54b3zaK1klGXK2kfEin%2FuvQSr9jSKI2kBpNZPIxSBuHzqT0X2xBzVUDvE6%2B1%2BBqkkO0QZI1N8Rp3TAWj1mKzEmL5mg1j%2BvhYjQgjCLPk08TzxGq3BWyuZwsZSjLQjxQK3fyIZRvhciiXuio%2BQNnhbb5XaO9YbnA90cAqkn7aBekH9WxYwueiDel0LS3yGa8Z45jqRDvT3pKI8f5XGOvBm88cvDo1TS9WQ0T9q0MaR3HRudyXSsJqkKTopSaOGZtgME8EE8gtLdHHr53mRa1P5fO7xc3xcQpxL%2BYqIaX8D3MoR%2FVYzLvJKuZg0CyBviTA%2FCMj%2FjNh5FbfKwReBc0V2Rei3gt7RMtwGHsnGDSpw2YXiuKUt3YvpuLgV9GAJgKEV1G2FFCgGuNyKDm9rk%2BeCl74PBqZfagVMvQgBEQ0R3MBWMfKp7oiamzAQeHqCkoZbc0%2F4m1ePXvKbpp2mC%2BWpQ3kp3%2FAxhgJNlcJLNIKH2LJblbDun3Ccu41s2ZMPa93r8GOqUB1FJqj12%2FbnQCXmvBCwVV2tMnulH3jvDPzIFfI6tx%2BneeYyIpHG2kso8k1sWUBvb%2Fx%2BynHUb%2BvWVMnH3YlbmD3lGe4JlAemCL0Z1aY%2BJsuaVt%2FihbartLTzJXimhPFVDRSu9y8D6EljYO22U2UGWLfbPSgR5TG%2Bpthaa1gC5fShfSEdu%2F9I0451RzamSDM1c4O4fKaNK6LCfMyxrr63BtyJ9qUs7l&X-Amz-Signature=33dfdba560d6f396a49870694511cdd50136bef4d2a3d8ec52764a68ee16b292&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
