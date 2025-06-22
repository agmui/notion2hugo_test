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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA2ZWRYK%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDopRTnRZWJXmj9%2B1E1opMfMCn1hopd3%2Fnlk5uAFulrRQIhALB1rQJzBhtSg3BdB5LoYmyC3f8EUtwMhQ6MLk9%2BeCjWKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxi10O1Rb9SS%2FpRvUsq3AMK7ZXPcJyoiQJmfSOVN8cyRcA%2Fcj5bZbgwooa1FVpCfmzyRkcZtn20ob6Q7d4AWykx4AUs0PtwCgnAVBvPJffeQHpmTEmzm0O7bGKBZ1%2Bj5mfZMSl9N31p%2BzEqkwuOrKhBn35W9Ff4aorD8bFv2Y%2Fi3ykRe2WpUF0VxrgmdGPCHSGaCDC6H8LCzgaF7kKOZ4oi2FcvJf3a3Dax%2BGZOA2l%2B667h9Kr%2Bny1Au9N9HJ9jPB3w8ZROjLOMUaLCpC7UGP8ntr1ppTIethKa8G7bz5RS9ksheLIc6B34YT9LSYtrncO9ljDrvCKdMhzk2sfUesYL%2BX7WE%2FeiJQknOa6DZcOYpsdNVCKWVgk6iumJy76am8qnVIZHCEf1IMQElZd7RgoeYhNd4g1ldywxae6e9xYfkEEjNW4QgO6bjnE8xey710H0rUZR2JN4ZqsiBTJx%2FUtHP6OpKXUngNiXKq3ZV3D%2B1EH2wDrMiqk0jCUR2qY6c%2FQ%2BjpwmHP3pZOH%2Bc9Bc1nG2xDJGDVYvvrmPOFH1SSEnfcHbMUZnqKoeHc9D%2BLgLAjzc53nidlBIWbExHwegkQMuAPRF1TiiuctZifqd61ECS8X2IQeWKcfSj5Laq%2FKk0ipZORDVS3OLG6P1FjCFqN7CBjqkAfsOvnFVGPcc%2FreW9f%2FslL6dS3YsBhpEQm3OSAxv1Fa%2BEpn%2B%2BS41Tn01CbUoF%2B9D9m9d6EgWMjwsP5akXwqYrhholI41JWAmx3q6rIC5tQNL7T%2FSbAdzjnTMOf5QIau1YK4lWoq5yEUTbeRGvHdMcfOrygos%2BFO%2BrUlg%2BtruKwzZIEZ2gCdcOoCuuvJ0fih8HAVoOwh2BhbBafhjraIrauI8%2FVp8&X-Amz-Signature=ebf4824879852c8d8a4f8d504b7452a55944f8fc14510219a7b63658ea95f0ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7MCAGVN%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoMtMhHbq3mugJiDg9MXdc8j3qotOz0gWKefCq8bQWeAiBFfiyEzAGGvVGXURcSmzS1p6n84gIQtuS4jwjsyQg9ISqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAwa00j0nHnNsojlMKtwDK9hUtyNFjH0yrN21tk2jFWd0rNy1NsBCHpT09WmyT%2FRhMRMF%2FwnyXUpk3KkehkUcL%2FUss9Jki1Ty8TtQh1iOxbmB3z%2F8EZ%2B60ztq0HtURtAtL7uzEEQj5DFiMl1qrvy%2F1u8xPN4c1fKXiH%2BqRv3ey0V4YQcLWcZZFKOwhCYkVlhJfcpUw4Tcq3F63DBEAGrzmqoEZFrcUklQpOC0m7slzL9VvPjkrXbkOMT6zqsYyDpMm99KOotNWTSRLCyaDOo5jtLl8SRPmTpPEp7ALnReG1skzECiG3tF3otyNPDetajyaI7Y1S%2F%2BQZxc6rjpm8EQBnETn%2Byupc5P1i2sLL2spQNaAvaK8%2FZMV9Fulj5lXO2oytia3DxezkTZ%2FuOQLrjqeraFXbL6fstNyoFFaFDmt4HtsAt7MzA738eAVvy9ATvUr3XwgO8x2yklAE3FqW8A0iq2Zc3hoW83bHstB6Dns4zC7KGr96SeEmeFMzZLkQ8CEMuXcUGlJSsUYgmffMFjA0sdvfy1ATagHqg81ecFvx4nKGSBzn7H1CI6Y0rCnVyrwlPgTtO%2FPAWksDEXCGaVgwtjTR3bCCZouPAITrO8uVua1kGiNXQdTIqAw6ZECL8Y%2BFMzEKBJDJRxEacwuqvewgY6pgGrk8EUvstaTgPpLPw08YK1VL9z47Fl8gj67TqYdwtaLYvoGDSd3WUJ6tWfJgA4U7by7U7bAmqYe9DF3Op8sWZAQUclZJWQ5p1xQj7jEEGv1d%2B5lHmYFABmT0upKO6mALVadwhcitBEoSOPYGnBs7fFSvGq4BuI2CZlyDjpxgMx2OXCNVU7GBwdB56WlOGgd5S4A7Buo5lq8Dhq67Gmq9%2FnK9TWdGAw&X-Amz-Signature=623c7a269becaf5b4cb5b8f891a07b57c8f02b1ea729ac576b618800022c970e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
