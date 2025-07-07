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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IIL4MQN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCvktgItGjGGZ0WUntxVhAclUipRk3vPoIiGmWJwY5R5AIhALQem%2BdyxZJLNwNnLvqGzl3YU%2BO%2Bosn1w%2F8MxEbwOHmQKv8DCG4QABoMNjM3NDIzMTgzODA1IgxGtME%2FrvwGwfnnIPoq3AO48Y%2BLBbviAnqiwS03gXN4dNbjUGbo3HStrJSmmPzw0nXb7lRDSwPc9%2BpxWiNrHG0sIiWtcYq0fPk633T%2BpkK0ZqH3UlvKYJOslLoYa2E4xyWMWSB82W87OHz3J7FyQukERMaEWc5FOiX83cmJy6tVpE5%2FPek8oSykhWgHjKxaIeZYqizSLn3tavxHkErwdROAkXY2iCER8UjegFKaKqRFwH2qML6Uhrzkr1%2Bcvq0NdOJdQzfONdZClnxFFvkJpp8At0hZluZ5Jm89ZtATgE802yjrl1bYhkBHeVUpT2mHUbFMJsD%2FRyNEIvuuQPfbzWwADIn%2BU%2Bqa5SdkbD6exjYo5VjG%2BPFQIknOPtZBrOx9%2FhbTLq7C42NfilHBzZcn%2FqjLuMBodxyyL36wkmi%2FncbFNkXDOyrO6%2FgUYa%2Fff4pbn778Ekkx5ZKcdw03Ip8McbSvv3jhVuDAz6NJFIXdYFj8BgpE7tNVvLG7R4I2mrDyqdip%2F%2FJHopEC0I6FS9LGoo2SAoQC%2BXNJoSFkHkgYtst%2BcFkZEB6zpxQJB8yOJ6NM5irEXxoKAwQBzLwqA03I%2FTh4Ejw7hLYt5YZ3abcsi14aRKH0aLKxgo3lXJt1m2LDrc%2Fq5hrNRaTLERAKYzDtqa3DBjqkAV4O2b%2FKCQXgRKvvdPOPc7vPCsz6e5lRXW%2FEPjLYQEIJ78%2BA7vuNWgvJhWNvOV1PpDOwo1cZMDGoVuQeAxlrRco4jYyuxBFwHm4Oigp3UEwrP3yC0e1VSkVFHFwbGo8%2Frwu9OwOXQGOdef8i1msCt55vdekYD%2FN55QrK%2BJIqBoYlmZFxep%2BaifH9YwGbiuqSncYpJWIIdn6zG1Yli2%2BvFnDPHpIY&X-Amz-Signature=c24d78a9c498e196e4df138ffad95b60351c3193bc6a0ff2252784f1e364d4fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH2ALBO7%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHupLDsBD1xbcrFqm5NAhEDArk0p0G44Ir8dN0wkarl%2BAiEAxpX81EBiIuVB5P%2BvpJ884WVzo%2BcuFO0SkTHIuzjEC%2FQq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDOrQ3R3yxKMi9c4TACrcAy2dBQ9Jn5wz7I3BEWMHPCLqz1eXQB19ZzQZBtJk6NwS6%2FFW6ZgehxolRMQR74hDiCVJiCABHH4E82yMhaFhD%2FwnjMT99XLOX%2Fr1hPho3TGHya9xgxRHMlg9unWzC3UVYIgUmdaN5yYNl61XZrWfckFAfKn4jFLAfJu6r1g0xSHwYzHc%2BB5I5muTgQBF8qYW5hESOVZdXHLa0zFb8FxFKwFyoB%2Bj4F5mkvY%2FvcVOs18abzS2zC1kFMkaYYo%2FRPY1mC7pNmK52RZb0ePjEfM%2BSnnjF%2BsrGBOujJkBPh4UFipjtIk5s8NamnsvQXCUeGipPZoIIEeXLlmHNEVif5tJgONPzmyGN5H0rFVPeacJItk8k%2BvzCinPJxsquQeSfne8Rf0S6hUG8t27z7mt5LeUqc2NODSExSdn5UCQYfMDvoLcK7AD1KGjoCG9PN0V0QnmVj0YCGFbdWCYGYIWFL%2B8i%2F6RJOb5tBwI7iDVkj29TONnAIec4v4Siyt2au%2BgfhyR5A19Q%2BeaK4Mad0nhHeCF2em9NJcRHbSASK0wuflq%2FSEINiKeGpZPhdNbCTGGgau7Tn9FLbXpmovcJPDn61ZMLS8gTOpXipRwKy6OaPzWUGAkgjLRcwR3VcWyyIIOMNGmrcMGOqUBm%2BjWwPGKUbIKwwicJb8cUuslCw8r%2Fe%2Fk%2BAHf6KzrLRS%2F3ADm6dqU4mXVzwdWQ8wmqPVuc2yp4yfLEOmQrnV6KpN0eIHPD%2BhFnEahkIi%2B3cysE7dNK8etLHntx4qiUUbglmEEAl5CvxrcFHYHaoJAfCcnG0bW0fl9k5Dpm0oKBGhlvzD0eSnt8aEMhb4uaKFsaid1F%2Fc%2FLAmAUFx8e4lejBlbVVD3&X-Amz-Signature=374925fc86e6ea42aee40b529564fe30dd2f23156a77971c685ca02c14b535c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
