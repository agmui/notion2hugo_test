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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTCGFGPI%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIGv0gry7AlGQUvl5hSIh0O7xk52P6xiHAXI4O8BmhE7mAiALnAXusFjHE9Waag61ef3k01DNsPotd%2BMUez%2BYKGW%2B7Cr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMSwTsxu6DtJ0J%2BadOKtwDWXan4%2FFEVGnHYIYWDFJhIFt2y%2FPJfgW85LCHmK5LI8%2FRDSjGl3cJ3Gkq7hCoCLy2%2FgZuKKqtm8fAyfDhTRk0WxcasV3IPxgZ6D%2Bepgod1gQ%2Fr9XNhSg3GAFCUW0FFnBx%2BVvSnqYEybvUhEYW%2BUXe3QJTmT4jzbBx3VarWVwzglJE%2B0CqmGt8H3Q9k9KXHPPa4%2FZChm9Jkbmdwo8q7EwNn4sfu4hkmDsw47DKemDriGWsbm3w4G0zijG6VrHPWp2XE3yGPPFnOnX1p6VFTYAxGzOS%2BmaGCqZcPdBV2JqPHkbbyPLpLFFsokkfXXgXxkDw84CPdQNUnS7H92DM31YuC2maEgdat9dIE6htOV45dEZPg6tOYAujB69eoljAwDyP7Ay3vF1%2Ft%2FApU5tTptA2MhIya1GrpdGAiINsNmf2ft%2F%2BdI9vtd69Ynq2uSZUhckya8nr1gAzg0ymFugvnyLomuJQT14kfP5%2F0SiqHADFWEaJdNcoGsih2QSJbmUhxVE67i6qAb9u15Qo1614cjKUdJBdbMZoq5R7YPW55yPpsMym0m317gc7DzTQ8ZF2yO%2Bg944M7eUqG217RzT5AZ%2FRFpLZyRDU9kwsTeGz7AZ96jiaC7jtczFW%2B4IfjPgwsojJvQY6pgGdWVqAwYY7bx2icCCUbjpn2cTqtj9LPsvUJ1DmX74qI0eMrmUjr36lHQjwuI7OyAAFqok8cIV8QAy47ZiJhTwoONt71NsHo8VM49jEKUg1e93bs8wA6Q0YGpFmpAml7SayTGPg4msai8yseYDHLmmIXaZtCQIfgm3vd3Q3MGcvGkBtmplejrAMqxB2zx3psupXgpxbEjXF1%2BrOPNpyLY0gEIObneiO&X-Amz-Signature=f7a33e2ad69e05ff607c5a30fa19ffe34b0387dacca57c67e45c04f4cc6116dc&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA4U4HRH%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQD9wp7DMPwQkZ1xw7v6qezkDHZsoFsym1VwlmylRxlVhgIgbg9WsPNGSlWUIqNw%2B%2F6%2B%2FRDqDnjz9wWAd5uf50OfnF0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAUuyggWzwoDuGJJbCrcA10lUI1%2F4UdaLk6fk%2Fdc7ZoE1aYmDgI3%2FYe0iAymaTW2d1ghDElJvsIHTmxb2J8SbDDKvDCP8IRbr1OGpL9fwMiCs4hFxn6WwACiXXNUqb5VBYAED7Y3WWTozyE7GaETb%2B3%2B6Wgjez0DXSScYWxjUDdNkAoLIZg%2FZ1RZ21q7xxrdgHV0dHCoAuaFRDXtevwdAUDj8vr%2Fv9q7YjN7YkL85SFn2i7oz99c1AzbLYBRtrHGYRNbZISq3pBcMuc5XaWEo80K0UwKnjQcqaw772N88ANiOr%2FPRduoksVc%2BE%2F%2FgRunROPhHjjYCTiEANQLxqnMK308JImCmBc8Zg%2BaQV4WrTg9Wc64GbadWQ1i7I1PUdztzVSdRXl436ozb8%2FR0UQgG4wI%2Fw7LrTj4DKos6wXlBrHtKwUTdAYZJyoFumukBR%2Ba8P9CUE9BgVVcmg2WoFEZ0B5C3UBYNe3sMBMBSHR8IUi12Zc4geOBmEQrYksvA1pmc7akNVRiVX8WF95IhU7CbUVsAFwP2VsRNHO1mT0%2FCCaUeGPopAsYFN0Y0%2FZZSn2i4N89t7Ud%2BZIfCJU4yMxXQzCC%2F9xGoNL7eRNJPAAiG%2FzzXS%2Fy75diLHQJdEE1QxPzUH786dI0FXvbo2J9MLuIyb0GOqUBwBtfyl%2F0UR9ofpuZNWqGIahvP%2FLaEfvSzUFe0xhBMOW8R7HYiiLDH0y8Tf2Qib2wV%2B%2FJ4w%2BXHwUz58yQ1nZkm1X0NYXuDwDqeVhPjL8WVhEZ2C5hAKkxpIpi%2Fj1Htg8uev3BNKiM0I%2BfBXlkuGdljTNMsc8Bm2dYbF%2BPa2CyxWs0EvRS5gqjfbSoklJT7AKaD8xLdFsVfgPTTnLT9m8rJGSlOtGt&X-Amz-Signature=19d50c3e5b92d35ba8fb79ea9eb511d0ff5206aa1db6487b4c97ef9366c2c5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
