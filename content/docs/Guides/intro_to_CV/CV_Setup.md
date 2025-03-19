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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVKVEAA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIA263wT5KAhMWgM%2FWjMFv3FwwoJ38FJ5QZJ7dt%2FxAHIoAiBVIuI8pZGDLQRfBNUoFS5lO%2BJwj3rGjczpX8gFDRhlBir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM5gbYPnfy2esXs5cyKtwDCqiqlJGk851pcG3zKBlQq%2B1%2FsYZdJW9PzDqnlyUYCXwkbON8tHk%2FNGDlEhYMdOE5K4wVfZlgaTqeEG0G1b7jaSKzkDNZtX%2F1E5O6Cvdu1%2F%2FZgak8kAqljA5tI4M8dRXQqgbQq9iMhyCpotextSx20u7T0N%2BRbSuGAWWzKf%2FyPFusBj69QuAcDM1Gj4RxZqo0KQhB7WWAYSL8TajTcLNhK%2FORqyRYfUIppifFVXuRlFsNdL2A9CRFHOP9Tfiu2yw5%2FeAAMv0vuCfyYkQF9aNbJUmjEKvM2U7yFnMuVxDpoah1DTklXMFlEJck5q0p3zLOctS5LB%2B2F0HqXg%2BrUzSJoD2MopfWA1V3l23EKd3v7URCO5UhorO6IraqbubU0xf7d0pbJd7Bg%2FT%2BoHHR50WujPnDl9%2BuZcXIqyR%2FmI6jLm8jCXaQFqp8g7OibAYhaxbw%2FujhLsy%2FkhwI3dk%2B94bb7tVW%2B%2Fq4ezJtGpgw83hjg96x3NWahvbKsahKB2B%2F9iDS9Hsdno1eFCaMwEM08FbPhiiLzFTjvftt0%2Fiyi3Ec9zusbv2p8MWV5jjmzAn8DFBYJGurv4DbWryahNZM5%2BVUL1L1vNOwo31vTgnZa4XKF1SqdNWc4%2BwWZrnK%2FZ0wn%2F%2FqvgY6pgEFSSjC0Kb1rNLaqil7%2BmedgbGF85jqmOAx%2BEW6WOGRQpF8bMPN6Vzb0zrVgEzE40q0jwUfH7w0WDzsTHc%2FMMxETpThTB8azTwWn2Yxjlh5XpXyT5ujTcQLQc0hnw01OVDjoSc0kyYEgdVkZQodUJhQdQJ%2FKgvRMBeIKRLZ5Jr9WaETiZMtZ4VZMedVkhfDpoMVMbvapCvw04w%2FEpyi3g5U2%2F33n6xa&X-Amz-Signature=96ef57b5c8ec96c0727fb35f367bed15c6575f50aa045ff4485e1b516c73da80&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645H5GYOB%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T131844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQD0%2BciO2AXRGfIyie2iLZ5Ht0nRj40gUF2h4eKTkD7xugIhAMWIS991Q9QSNAKkSLGJApIcLZnmpXtegJcuhtThfTTsKv8DCHYQABoMNjM3NDIzMTgzODA1Igzx7QKjmMdMgWoc%2B8wq3ANYsegAM5ulLQ92c19pEyywHPQstB0B%2BWDQ%2FuCFiV%2BG9rcVvvvea74OUs4aPPRJnmeTTSYRncwAhDtOPCG40zGEWvjdmLIljchVup3mP%2F3VyvcTUudLcv5YsQEMjDbySYVNHMOlilgdTGHMeXAaZVSln98HdFYtWXTAUADOrZZnVr3AHxdoKzALtzS3pdaalasOADykggb%2B2Nk3zf6uxnmJWVSrubA3n%2B7zXT4ExI3cKuY800D5zkTsd4lSd7eno4P4jWAsJZocEIfw9sgtcfIuy9YWQa9mreLv233LRGqjAcoeX%2BwF7uCJcGO2AtQteIm6rj0%2FOQNhhhsYoGX7yFa%2BtlT9lYiWPAQ5y1%2FmDCWHcq6OCG4Ng%2BpyY3cU%2FrTytPppQY%2BT%2BF%2FjlSo9QvWe7ktQTn05MMgbr5ehxGJmdM1kA45mwPrLxl%2Fycschiuny9%2BF9TpTlq7ESljbAL3xNa5c%2FZz%2FoR2Z9S%2Fmcp9sYJdnIKVg7nkkXam2U2YJq2sw%2B%2BGd2ES1godVThxXifZjqQr3xHv64JV012OYu%2BOQvH5vb4J2AY6GUDKFl9rNTQtuKVSEnvBt40BXKaw3HGLiHGX0WGh4G19GV5TDCl%2BONjp9eZOp8JiVe6sJAhT%2BykDCe%2F%2Bq%2BBjqkAb2F8op6so6zqP4Ed3RcNizlMUffJom9ZOJoSJq4tlUQFTWzt9oDoTFFSFpnoF0NZEZCX8rTQw524534w%2BMNL2ZYSz0GteyiN0pDVpYo8gAWRu4%2BoayQ2mLKKoAuRDGD9ZrtIeG%2BrOK8Jbbo1JzWOoFNtgHAft1SOny7xZvzZW%2F%2FQE7wp2n1Lz%2B%2B8avuzPDLtEe5yOoXSFxBSKkzh%2FwVxj6Zwki7&X-Amz-Signature=d3c995e0075389418e0b5a693eb6acd24edd21b00e577a7f9814e980768b878b&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
