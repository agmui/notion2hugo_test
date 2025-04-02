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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E7CJGCP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDP8w4jaofdyIfCf3ZUJYqc%2FgoxJiL1ZRoKrxz3cGjxzAIhAKNSTj11Tplh7uopL%2FFqEc%2FpIzzajgswOhtC90QJM%2FWNKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxvlc8ValJxeDkQzycq3AO3JvFm%2FHOj0Nb3u%2Bx81chnSuirY93tFBRkWw4n7moqltXnK6KNkt%2BGL6VhNQUP2iuwoNFzlw9gujatZHiWrJdqKm7Jzvay5gWm4OIOS3xJZz%2Bod7m8TDVxXkKJRAlrhRElPdcY3JKl3wVNfFVjplwmwuj6SpL%2Fpbj1UkUr6FY7YZfnXBJV5fFl%2Fuy1qjDYBLcszbzozrvXb3l26oDtqAvLEwuph5c5rDIFSx3pxHA4W6Vc0PYkybk3U29RQS0ykXMIgIqbNoZ8jRe7JZmtYa54U3i9sV3othijIVQBcfHrU4E%2BoE85XDNQadmWKKUKa9%2FX6%2FhWUBdemXHHUvZC14Wwr%2BourZQGLUXAKoDcaK%2BKqGYiS7UdJRdtOQRNH%2FuKilkxSiz9KNrMqNAFo%2B6MyDJxQw70vW%2BRoHdsfuCxnxVF1rfdtR6WdR9dW%2FqpUMSzyg15hwOGgTuoLoh66oibvwjr45pNx%2BKABPaxiySdgR%2FVaXsveJtULxnw8ZmjAS3i%2BFbN3twVvLukfZKW5zmDYLi589b9ByQAUvqFLvJMFKijK6Dq%2FxKMa9VkZH%2BibdQmo4uOVWRRUTmtxxjNlapP%2BYVpRNfVcwbO606W46dZtOi5iJI4l7QWGhpSlqIF%2BDDD6bW%2FBjqkAdE%2BfAEdYIyJECko9bBiPx%2Fv4eummrp%2FKRi1WTRp2FWUkA3H1Z1bRkn%2BfINEsdnEk988vBQwtPCw0%2B6N5h4TfXzsAdzn73v%2BpyvPqfWpL%2Fl1E6CH4%2FrOkEoe9oKd5aHMjsQCoLPnUUSOotqcp3t9x1A1xGGHX0iyyyBJspJ9O6cedKqPlB9gF8cxNDdxX31ERaegVEyb6SKAsRlU7oPcjoO2gDOC&X-Amz-Signature=ef0bc605a9c43028f1f8a7a0ac95461aefc1690d071751d4ed760aeac9c43a9e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSV7MNBM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDkRlOOU7YMz5kxLn6UEa%2F4Mp8QOxs9tSm%2BfCLFFGXSrgIgdqPPK%2FquZnBJ6bAHq9am%2Fl%2BS7Rhxn4CAMO1ozHWYJq8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHTaDrypbADtkY5oSrcA0rbGtkePEOWOQ5zEE8omrLNLzBGHkWoc35Y5GUUbGu3syAcXb6FzHijEWe8LSny6V7DnP2Etp3VDC%2Bod1AQ%2BV7tIUkJoIkg9N6C7v79C2uhgu0V1%2F0P0yFFxM%2FClCKI8rqUWI1uI0I08TxSgPHpFgj%2FR%2BW5vlscAzqwBETnIynPT3WIoZ6eIBSDUptLV2jGdqnJDmlHOybBb%2FnYBY8YwfvfHdVfsxz7esuMkX%2BMOYi%2FYw2bNLzhXEKG8g5aA1sV5BP78KU%2BKPRR%2Bw8F3MhUAa0q8hv6%2BQmZ6N1NVVjRGcTl2Uxjpit2SEQ3Lz48K4cxK%2BaXryV5FmI9USdS30RXV9dnUQem6HgpZJf%2Fckdp6kpE9o8hdxKfvq6GLU0zNKQq3ef7uX30a0NH%2BXoxX7SCZ%2B0Qbn9LEsdn9d%2Fm3e%2Bh8r1CK51JF4XuAbsAB%2Fr4ApdQCXPBDDHcGL2OLOR%2BLZGWEbtmIx73qCvYw%2By9IpbeghJzME31wWCvcGth1Ra%2F4SW3w44blQx06gYr37bmJ%2FsbCWaeN1tlCfDzHPWNcabq%2BA8IalAn0Gc1g79tFvBAtcZuyzuGjMojNSKl06UbxLY%2BMSo1NpmeL0Eah0QWT76MGzbNh8rwsAb3YoEZ%2FKCdMIrptb8GOqUBRUQ1j9fD%2BJNeuaxqFSHsYky6aeTvzXvpHhbBHZhZrmktK6vLJ9gWrbOlEmSxJLSluOI083NltXAIAALLvVnVcqQOjY6J3yNVrY1EFG0%2BClQ81GIDb8%2BCpyG6T3KPXEx7ZCamog%2F%2FF9RF2U3y3XyIPiP5DLf3Q04jbJ1JsHiqbuNbkOTQ5btekC3mL%2Fgm1eNbIKDPnICdYZ6ZpzjMI%2B2o338sIg9G&X-Amz-Signature=790e1305ecb87bfe6aaea50d2bc2c6577621964e225b5b417b190363194278dc&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
