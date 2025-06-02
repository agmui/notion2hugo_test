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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSGP6FN6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIBP9CgVQ55HJ7PXgElxJ7TuuVJVdXne2d%2FQVqcXHsJjGAiA6B%2BdZDiZL5sjjEwQ1pdpze%2FBlIotsO3I%2FvPuXdixmKSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNxGNK%2BmdXTC2CAOlKtwD2t7NbcfweGKVxeBJwsvt9n%2BnayE0e5TJxfSgi0JLQSXCfjehObAUkKYO2PlbUErx8JMfd5WomkxXh9zNLiPnW%2FuDu4Ce%2Fq1Hv4CUjHy2Vjs6YfJHoCpPsda9bSD67jpgK1ZfhFpznGxOcDx3IdJdj8z6HyWsdDB%2BefHLYwPHbRFXg1sw01CYoCK0CtGgAZ%2Bqa%2BgABqvX815lif%2Fkm2fUS6bWdOyl5Y0Xa%2F3SG6N%2BH2LWVILq%2FY0CKWEGeYd5r6jGf24G1QR5DumGurHLGGkSMuE2fst7nBkXHyY8F6efrdrs5MECrpnyFY2NtLdeC%2FmjxRrkUFXTtFpG0mTBZXGqSK%2F7E2vlb%2FJUvVpCcB2BgSW8UVKaW5obxxy3O9jpghCKG09n%2BwoGwlvOa5zddzeiUuctCOXkbYqPlwoYKq7EqYxBrPU8eQxXhV7IlmWjfKSL2w%2BVAFJcBIfZ7KIGqZGViNsg%2BYNvhAxPC%2F9n2Us2q3TsrjfHKeSo3Lsa%2BjFMInO46FIR543KKR0CqpHX4a7dPWO2GF%2FIBgOsH5jNxk4M%2FaqtEj%2FCcnBpm1VIvJ9WBQSy0fsos44CaWTnv%2FOpnIE%2F%2B0AC%2B4lCQ3pEaoETh9zBz6bDD%2FBvq4GyLOqKKMUwp8%2FzwQY6pgEE3%2Bjdx5iY%2BbyUV%2BYBhuaMcoXRKdvyYJuI8TrjkRWD9LlpZlNVcgAjceKl%2F38WlpnXsxXM2tKLMjFel3OGyzetKEBUWYP%2FMNkSDARQt5zHLmfGnEfFbEC5TrgofQLevjpZRFkkPLPGDhblyoRqEqKXwfqAeLJeO8Nt5uGrlf6UQz3z66VfDG%2Bz0a2h7WAx09N7hKzPfHLZMctFy26bZUE%2BhFRtFMx%2B&X-Amz-Signature=362858c44f1f971186fc3e70cff92c761c622a506413b13fcc5cca1872fd5116&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6OT4GXM%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T004437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIDij9yXAByh5LqsjKzIItTi5g%2FHugRBTZqrWdPVxS7xIAiA1hd80E5JBb0HcmwBWRyBz4VRW2cC1gLV9GmxhT8lt2yqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqFVF%2BDtwipt5RRHJKtwDlAWFSNWxV9DY5OymiXcdpvXxYYoNGD9oqrI%2BnxQNMKw0xGqyGKWRZ%2FljWaLdlBeP1QkcBkbOWIRsQ0ob23BpNLtZzYcAwE3FDyjyl%2B%2FEBrwOUR9ahv%2BkPYXBSoI3pSlWL47AiLq7MpFrLUZK8KaOaScYeq7kivIfeb3TochfEANqqHn6K68c07S%2BgdupNjy5IsQmwPP7K%2BXsIOrLVS%2F8aA5%2BnQvyEAr2%2FeLIp%2FegdINU5m3Rd4c4jrjxlnkfUuT%2B5NWx5wpBjRpZ32cW1bjwxw1%2FlS3hvYFblsVb42Oq5ys8AKYny9c3Sc4BJ0IwDB87iOessivvvkkNE9o5FKI0yri3H7L9okgPKflPyLVGqOUM2hACewZvAaHlPWCkOcwXlJ7sSAU9xPSGqcnXrsarBGbJklxyexuv0RLPwED6CkvDCDFN%2BIo%2F0H0e7JJK4J0i03Ny2HPtJklwj1AQgtpcS2xL3kjOf3UA3Y0cHLo2vkapBqW%2Fp8HswYDat9mQfc61nZbd0K5rKmgLUVmjB6IvgybStgx2te1lJpRSmZDVT%2BIKyKt1KRFKDRC41luw1O6MckRnJ5PIA40GMyYecB35z4SishIH0AfST6JNiBjAXme8nsp1%2FfI%2Bs0LAPWkwyM7zwQY6pgESeINhYiZFumaeorOQ%2Bb41QhYkV%2F2ELfNKvDZszEpJj%2BeFk14FyBNnUy6yhJe8orj60spfAN5z7kh61o%2FvBiOE0wySKB9nb%2FwTrpBTmNMqSw%2FC6b2l3By0wTXCz7Bj9DYrya40c%2FtlR7Fu%2BeJw7oph7ePmouXIT26FFXfe9JjEr1BDIw3JvDhqHFXYzIG6RfS2Njs1MDhk2M6WkZae3KGsmV%2B9pSel&X-Amz-Signature=6ccb36cef22a151f3247a3a501eb6b8b8a384b8337293de8f01600ff35e0c3d4&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
