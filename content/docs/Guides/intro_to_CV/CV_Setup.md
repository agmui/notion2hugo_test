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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675IJSL3Z%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGokCh22LEcmQP4FKUQlVN4%2BAtkrtgLGJUAcuS72ZxBIAiAaY3yzwcbf2dUVmkc1T3IqbztGqnDLrQ1mAgJ1H2rvESr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMiUZ7MTJfRlZrOlM4KtwDkLmro%2F10uFXk98MGvGHrb1PtAjCIQGhHyHghalJA4%2FTWI1Bqz%2FzXFQe5QGviJt1FH%2FYQqSrApJajZkGSXu93zTZsOUceip94XdeKCF5nFi5bcLSXwiE5wigwU3IQEbQwOV5Xvy6GEb1VcjhpFdaf1q7yv6ycYo7ns%2FuE5eBMMLOCj0OD23fnaYbmcNZLA3lKxuNI6FQbEuLyMpado1ghISa8yPaX%2F1Z2OYgpsqjcSXEJ39WjDQBpeW5cPiBT6RM8Lh5aAAP7zVBDWwnZrQGrC3lt3Zsg7ZDTqILv3ebRuUAWzus%2Fofoxx3E%2BYtCOy%2B7NHl7IlQqHjpQAYXzsC3DRX1SgcyFNMCLP3ato9JrNoGajjvkY1njMszJLMsBp48ycAbK6L0pZIZcxyB8kQFC5GDMjofLFTO9tdyoc%2FjoNPVLJ6HoBLJz3tQlTf3cbhGWwD5GXF267hSRayRVBMn04L3%2Bqk9sRIN4%2BYs0wJ56YMlt6DdVE5%2F7yJDBMT4C9Lg2fTh49i4w2kYSP9CYIdAORC8Mm7KjQAB03AZR3rJb%2BZxXLRu4AhE30z7YAbPil%2BcjZ%2BXocIHOhLFTBWrPz4h6%2FjC6VCj4iK2LFBv5EI%2BuHFIbdICelS%2FtAuZLQaaEwudqIxAY6pgG1Az3TvYNxFmwqr%2B%2BCTIlhXMKwBjz4XP5Q3mR5qXWzmuY3MuO1ULoU5ZXOBXnYRsgZP2GwRBWoNADCiCNk3RaZT%2FtbQkVueb0hsvE2hVMcx8P0uM7lRkGg6AxW6zNnZgXGlWCpjf%2BIKl6gHN6Cwn6yrWmxUBwgbu6aAtdBuRPJ0mmoloWtroq41NdGpv%2FcJsS8Clj%2F5r3XwbmuIILbq4f7l7Npi0c%2F&X-Amz-Signature=0fdb88a243373197a91fecdb1ef4a3841dd12378539755d02a2130ed3373359e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMJTBLNQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDTW4Q6qXc%2BtlMcO8JZZXduJLsTElQR%2ByvC%2F%2BZLzVEHtQIhAJWyyx%2BZmpv0NC8ksBabWBO7eEkTgnpjKrEOedjBVzupKv8DCC4QABoMNjM3NDIzMTgzODA1IgwRnD2iyi9q0ZuDbV4q3AM953LCROb1nyLTibIWF9pmRK6eWzovoXZ9KzqVgleTHB8Iv9x5uRouGAfr%2FRptgzA7qg5M0W95TNbbOh6Y2xzUHDorsv8fjhbo5e%2F45bmiHSCVw7WRYtGHtZ8s%2BQKvO09bt5PIN%2F5c1sgC41yQE%2FK38C08kvtrZn7rs4We%2FlHU%2Bjz2AMFExMGJ2ENfgvQZOfR5bUEfTJoKbQsLem9U2BWRDonlRgVAJ8uvIgW5NFhcbiiGemPG%2BpCuyQwYKConi6X%2FL%2BPDdgK2PFBeAEKYFJGHm%2BI8OXSqjYIHklRBC06hTUll9Kqe8f%2BVBo7FnEaoUEPJ6%2B3Z9iL0jMMh6PRJi5B7HvzaeRXv9TQ5iHKtazhHyEy1ANd%2FyOhmMt%2BapSjAdfD67F6bYFzcHMQlOuDpbbVXKLOkZRUdn%2FeKkxYz%2BxXVuGm45yIPmuUJMQ%2B3IW1h85H%2BMn4%2FMalv%2BxeuN4WE8Vw5xEbGSVuVRG3MKF6yuTD4jz7nbXIQy02Qs8MmwhCGYV0uRXRm6EstaBgznA2fYv4IquiePex5sPnMV%2Fq0c1fRrbrI7S4FtjYuc%2BHxazsifjN%2Fq8cPqic43aIQzZav33JXmCYwmPzWfuOxxXdbEIGPipFsibZhfHDGLw9S3zCl2ojEBjqkAV3l0HAp9VvSd3IzXkCs%2B7pCHIaJ%2ByXbD0ta3Vz0HY9a1b2CgmsOzvlBd%2B4IQi%2BgvxL%2BEY%2FlBvhe91%2FedCCoWEfI%2BCJPX5k1hxlSvgsyK2ds96yWRhXcldpSyOOK%2BHZ%2FM7hUsY9%2F%2FxXWf8ESoZYtjIm%2BZsOsdiyrjOr9s%2F2vU4beaNYTkhdh%2FyYekiZfSQp7B6LrYzpaTi8gTMvOgbXRxXxYiklt&X-Amz-Signature=6c39d331a11ed0aeb2d9c5fd07818ea4c4a1db194958fa30bafc26e0942fa6de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
