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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EEANEFG%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHWTliFqehaOGYYkCgQOWSLtN5CR6RvGdfLbxUqzpPJgAiBT2XwskWJKsTcam5xn0oS%2FpuVhr8%2FUIpzfWmnAPY5t%2BCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWwSrHI48wwMfnjaNKtwDh9kUSxVgmGDDs85ThQ3eal0%2BVjO%2BfnGqCzFiE47aVD33S66tbWAfiUVNZ4A1Ix%2FvPNdjUxlMqCe35s5QNUV7XRj7du92J%2BICr2SBgDGpt7ZViiLm5ANV1DVIqFoiiqbJNMJwPV8GT5uAw8ijmwwqj7VB0aQscZXDV6ZbiHYOzcwgSLSRbSPyzfUDSIOJ46Mrl8DqjA3iBNXxwoDmeoSvalS31qEnmv4MpmIE68otNwE%2FHgR4Q%2F1oryUYrmdKbhlJKbx0nsLNEQvxWlW%2FcicS%2BDWZynEWLCNKRby8NtzPctI475DmCZniE8OnwPYctn2G6qPwBfiIwz%2FIkf0UHZHS%2BwVb4A%2BU4SkUrIQKzZbPPuzNMy%2FrRKTr87lpwZ3%2B%2FYk%2Bgtj86FSisDGRETC2un6sAkIl%2Fs7QU6VV4LwmI1HWNPTWgGCGYT%2FZD0odMcyv3CiRJn05nf7hAlMKa64L%2BO8pL175I5ZGicHcnhIZvqWnstTMAqS6L0h7vzY1jyZBzOBpHMZM4AGpesY%2Fx3hyEfalwWfCaacv6%2B6GmEWUkavP6qV2TW7T78talbvMNbeb8AB4gG1W%2BUljoSZbgR8EKwpt%2Fi7YIjJiB9GPnQ5QvYMnpeGlJTgS1NeFaSHpNo0wwr3LwAY6pgGxnLJuk9BaNVPSl2cyQJuQJ5OPCn7RwFeQBXlnQLqbLPUO6R0RWVIdeOoQH7czEnQKzfl%2F9vIoRW7FLQbyl5sg4v9pSpFAopVqRjOyT8RpE98Tw4tu2cCKLUD8FZ5YzUhiGd2XzPzZL4ZyCDWCRgzVLGxwBuxVfZj%2By6ZOEkjZKaRNKveL8yw3OzzG55xoLdxz339gXwWyuo2PELS9C3gYwEo5bkIg&X-Amz-Signature=a52046ef90dd1abb2415bfd2f4d17751aeb95dc862c2d1b42a17f44d28b4536a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VYZ7PGH%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIAd3T6b2SMszyfqggH3W2Vply2Jr9kf5gkXSVWl03xcEAiB8VL%2FY%2BjOoXRMwPVjLyCktw6H3Uc2pawYv6WqcFU%2BZqyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFS34wr41UHuU32stKtwDGz08nrAmPXe2leiGL1%2FVsMIPzFgZXIGBiNe4kB4M2NL1PHE7f8LX%2BItZbqO%2BDMSAjTUaDi%2FPZx76ivFFqPISMuT1U4jPS3ZM5n13J688Ot6%2BPWBGtbQRMc8XV%2F4zwzmGiT9NWl9TG24psQjBv0D5oCHAFmI%2BiUaLED9h3zNJTgLwbQ1uFiBmvIIILqYx8JISvlCcfJgVB6fibHPhmy5yAqskkQR8d%2Ffn41DYfi3raH3sBYUtYqU%2F52r%2BWQYABi1gvPZX8M13hamY8iCEIsnesgcWPwWqW22xLYcUutzalFOogicA44wXrrlhWMky1fbqiuQEEgO0uU%2FvX22sD2mRhgZOH03ESCSS7T%2BLfO%2B71GIakQcpwkEBWO%2FM%2FPS9AGEU%2F%2FSmaA1O5b2BTL7EmD8pg48F4LuOV3zM%2FLr3asdE2ZWspPGgGant5vYa7%2BXsiZiPZDFeC%2Bg%2BR7h1PlVTHJ%2BwzoGEIGdl3bI3neVNnYXTmaZjwjUblyItYrn%2BHUhnxyw1J%2BYpR7B17Jo%2FOZHfhZ5SNp9tnmjhFRlyrWoYrrg9Y%2FbzevwtXOLpfHqF4qW51QM7EkEkKMRkI%2Bqc5hR1jVDl21WsNSXQw%2FwhAZHjh%2B5%2BXd2%2Bruvm9JSHfLPakHEw4aDLwAY6pgE92nveogL0fTNqgoc%2BgMklf7qTlDU8G6qR1TzlqxJAv0DCON3%2Br6QPYJNhYu%2F1%2FKvKdSAxZriNCyBMhCSjb6ChVgEfdk74XLfWn9dtgiVPUXpY0WJ%2FfkOsyTwH8p%2FaL2Im5TMspDZTbq%2F9Gz1CwxTSV%2BFP8O2m9xYDilJuiwBIGJHfMoJlCJE4vg29LlZF0lzQuLFlfQOd2HVvq9T4MLK6xBlzB6gC&X-Amz-Signature=7f63e6ed0c09907bd604d2fc86270404e01afe7f381bad10c053670aeac4a823&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
