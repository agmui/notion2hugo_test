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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7TCGL7K%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDDXDUhdJnfrjhrnM0IqEaGW6RlIC%2BcUdT0CBv3RJpRiQIgVuKKKhy%2FkOVXWvspPSr4qbSXbWIFVVR7%2FyFP4hNmGGcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxg319wrTZDzYTO7CrcA9HH0UY364fbsKPjUwwwyqd9%2Falp3xAY3AeS0L1Vb0tqAfdln6EJdCmhXAfB47gNmEiEMElmGW2RPNdaG3HQs1Dsklmot%2BVff1A1Rl6v1WAQY65jJZJMr5sl49N8kJXpKnNw0aPWWR9WibZ5UKVt497SCEGEV7qn95ImTjK864eWC%2FTeKQoSN8reIPfQGFfSIqbe%2B1GSgTIlV1hR1Szq0kKYjjSoTEm3kgUMcH%2FuEFyKfMTXXgKdxaMd4MOYW8Dfi1ahQgFtB61gl6GqbO8VxCXNxJlXQpxonEf3BJlFMAoyErQ8YhRJWAv7GbWK%2BKGxYLGq1w2iLAaPlvRKXKrIUP%2BdtGqrvudrP%2BOOLUdTIsfFR%2BBpJHvLKtPjiEXn0DyHmizoguBeM67ZFjoSFnQQXNdL3Pgc4sLHxD5w%2FYZxk4VgwzIT9stIsrw%2F8bdR99lJ5jss7gejbscIo8%2FVOjz5xfKlp56q03d7UzMXwPpClV7v1GExF0Tb6SEEL2omZxijUokU%2B9kTR%2FlfcuVXyRMXlqlljHIiuq2j0iCKVoOkbrai0jJhLhHR8fgiwtTENdVel%2BTtFYJGRPWh%2B6jsgxJhK18DLu80nUSJg6rFb4eIRssW%2B%2FV2WuwMgkqUTtFqMIv7tL8GOqUBrdUHEyebJVVWj7CS%2FkikidyOKpc1pLn5QzXdcI%2BQf%2BgOgI%2FCHGINL1TSkXXbyOnu8V2RPamD6KTtg%2BLzcpqDPg7h1DH8KbmxWR50CfwBkTqDMI6ZC56baO8Yos0y9OwTBnq3EMDwVo6hyf%2FT%2BdjRoPospSwMd2P4zH6cDLJUTOpbQkA3Ga5Ux%2B9J7fInfnRSVNpWQc%2F7bCYE%2FD4iqjYoGhEnRWes&X-Amz-Signature=0192f8b2174622b4ee97a9c53f05fff2290c0537f012c3beaf559620ed1bc5ef&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636OEE6ZV%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDQHBA4R4rZPCvM3tmu4vABTGwfa9sHc70OeNhXXYIcyQIhAJWQPD5NoK6PVcQcfclpGdIxxlqDBk%2FF2BPVn%2BO8tSlFKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxpkR6mNfmVT8nsG9sq3AM42dZw2j1fB1TUUtF1arcLFsgI2wjQOsqw5%2FvGEJG4dU0JiDsOv6jevVJhmxIRmfgo1L9XSBPZmCD9BL161SR8uNncwuU1J16R1YBHuZ2YF1YJrBl2mDhqjSUGIHi9faNv1DXQj6J1K036EX6fRiiVTjKJmDieznxz7pyOuxOBdHmQrhP26lnX%2FPklpyHLuHyLV3W1PiGTLEFNIm4ci22vXFD5Es9rZ8Dc%2FKPQEZ4ql%2Ftg3ZAXs%2B%2Fc4CM6Jsoy1KiKSTF5tiwP1Ntgy3KsZbNmrkI7J66ZbRgIlZAWqoos5mR%2BL1ufoWEh9h%2FQyr395KMpbJ12wdqdSB1FWNa%2BCqVSigCC3Rli2%2FzK1zWWHH8kS00M1rkSYuK%2BmL6QLUA0piR6n1gP7ECLVYwJkwXTdMLYe9gofiX0xrsjzZZJENh5KzxfWVUO4CFl3t5tpIcGYw%2BYG0j%2FYh85G23aEw%2FE8QtYHfuottmAl59VlEUqPCO5%2Bb0c50w2FOyu2pHm44ckK%2Bo%2BHdSKMLnmLG%2BjosqPldt4aZ8DcniAVUf69EmywnCktBrHevUzdjvu3w3BCm4Epg7IKMOVxOkosMAml77gj2RFKDdD3pao0dJHglvigx98TF9kBdl4ozh8BzPq8jDk%2B7S%2FBjqkAQ6K%2Fg92BNZ91ED27l4CcVSEh%2FgD0FQ098H4myUAGOzmaZ8p3DNoJqg7djGEfPfRZmhtTPnHFdOahJ%2BdjyFJ0pWeLINsDqwB60jITmT1lDzAi1u2VoZV4jo4te3B7JIOHBeXOApZMjlHxF1ItzH8UqnEY1m%2B%2Bzd0wHg%2FPudRfBeJklwf7O3OvQ1hefVgfoFYKADFvS2zF8ruXP36IT9qxbTtvrJw&X-Amz-Signature=aa5fd3e06d7766d538242cadd8f7f5a9d1976c6f9c9921388a3bdfcb476e59c3&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
