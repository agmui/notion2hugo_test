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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDGRJTT6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0tzfRrzPo5gXH%2F%2BWx5%2BB9GkoQ2pic6Rkxrf2BICLBJAiEAig7e7LlrFjnhr%2FlZVFolkp7qWduL6mdkCRQ%2F2xQH5S0q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDKOXlWl1TaP%2BXg588ircA%2B9pQLCZLdymyCFN6mgretbwbladV5W0YPXAUyVKrGYZwn1fhcrl%2FilAikzyKxnLNlx3totLz0cxanGHG%2FrK%2FylA5v5GiOGsKm5GhIyYk2jYcIDNddXnDm7oIr31kA7hO4ikDJMUOQeabXCKWV3v4%2Fv5S%2BpYzbhrLhoH%2BjekFmX3cLQTTZ4%2FVd5gUDVbrcdYWKVLESwC4Li7aGds8Eq54uKZ1jiLjH8jvk2BuxP9LEESW5ImJ%2BWC%2BBp6rn0YjlNsWPDBjHKjYnyr1c4ZY5TPzqigSXNyoy54Jgwp98SR3A2Buo5ZX4lGs13DJgrgKl7J%2BooQ4i7FJGWKwc5QXj20jNM0%2FnpQ2h%2FdIxzGicCZ5OHTEL6d%2F5DHQNRE6bPfcAmAsfs%2BnIMcPvz%2BsgkhIdH4wQ7bpCpTGGvnBG1ptiuOpa2CIGByd%2BMDAhE96mqodFAaxY8H2niELCoB%2BMVhMVQGhuxIQo%2Bqwm1%2FBecYDFYjCX6R3wkvhj1YCPRn3l7dOGzRi3cQjjS1R2Rj2jw0J6LOOY6IMR%2BLfmfJS9aCQY3a4Bn%2FNzKfS4r3HYOBVoWqjnP%2FICRaUsPKNsIpNq3CTxl%2FKW6WLWzhogWpaVroNDGEzQF0fmZ2reFpnhsFIs6lMNv648AGOqUBJBsAfUiSaiutm5VtbO0KC6aRc1%2FH8iBLJZK3TpHk8SyNBPFfxH0%2BTLFnojK4bjpKKL7V2gtdSa2W4dV8PKWgsxgUhccDj5gG4ozVeuPwnBlGlUt6ZISW%2F5IdyUs16TRaZJcd6Z4nSu1LbQgJpCaV5pSU6G8mId9sgl44ZyeLXxNCu7%2B%2F7NwUNmPlzYcs%2FXqYkN2mfKgtD4hPQIagjvJlrs7S0rop&X-Amz-Signature=33edc52f4c5daad28d076e01545c404a8324011b1716e6506cd0eff8939be35e&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSMIKG2L%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHL7OI1OlzjoLItMUuBlyxCrpzlzVftuz3JpF%2BRUS0otAiEAo%2Boba3v5N3ZL4rn2U9caK8b6YzN0FnYXb0TTamB7Z3kq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDI4WuSsrgn6U1rrryCrcAxTwLkpHgn1T8ySMbG36n14%2FCUGBtwcJUwefcsKFnH9Y3ucE46g%2FY1DAkx6W5CaCCh%2BFjA%2BcZty8KTf1h6p9JkUP%2Bi9LttJIDBvCA9e9oR9sGvVuiKXL3SOsnbQzbqV9FRB6WI%2B9hLfy21Hc3AVfIHzaSXvO2Tkt9WA1OIMSwkf7bo%2B1Avsk6kFicxiB4RGzFNI%2FE2NKDNF9BHeYSqKphiYUaTe83eoVX9QTTNPwaBUkpeayCM%2FkZA1vJje62mP4Kr9O%2FOuB%2BEjm%2FBoKcNr%2FZ190B19SrLwRZyIx6t8lMPrMWBq%2FJpCtqy%2FFrBjW9oVjtC%2BwkaMQmW%2BKmZ0gjoZnP%2BYOlQAqin125AuisRnkMzBlQKDRgAAN%2BRxhwwHiz86hkmNU7r7SN20kIQjiSINV8EVIDCTcrZq4oCcweEvoVJfEFre6%2FmM0KphE%2B%2BIJkLaH8scuOrDqo4ZjrgNortpshnXbXOQZN7maCgokLXnvF1lL8bsMFP%2BtQu4zmfrBS15c%2B8aPXFC%2B2yHtynf5wu%2FP0eE1qxWTV9bIOVy59wLm0nDtxzlYwDexgkh6FJWLrVaRXbyJs55IIkyIyD8Zyku0%2FPS8HTxV4DT2yBU7jZ1RlabF%2BHyJsI5buVQ%2BHlY5MNr648AGOqUBAZ4UjhBX0LTosOVnPQsIShU1t%2FaWrxIEmUr9Ew7kT2JBrjtq%2B30ys%2BgZi5qm2dwlpIx2uoxAMA0SZd%2B0JkZgJUBsgM%2Fyc0z5T74IT%2B2RrxezzjWjMOfXtNfQgeF1F%2BxwiV741Wf5LMSMti0ZfILv3ZSXGPTE0Ex0nBFlSjLYFfTLjA6RlN65QWnnHN4AmBjkfvpzZyT3j3dmoHJv6DssnUIT6rHG&X-Amz-Signature=63f890bd36c14f37ba0d94c8ce5558c5002ef5b6079d77535fee48496a112b71&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
