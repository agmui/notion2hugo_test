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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLZ62KOY%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIByAgJDR4WyqDsEAKwVXq%2BnVGBobQevpAvWd%2BWiGK45zAiACGrGC4T1vum9s8JXXZ9BBa8UWYODVndXVfecJ7Ur%2FcSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMHpMa2OB8k590zWQ9KtwDyqu5Bdb0sfRv7Xqkb1LuSRoDx%2BUNuuDEGldLwafzb0dA8vPtSOHJK2%2B7YNldXXy0U5yVDLF25pQSdV9Wi%2FL%2BUDUX6uX1lsW29E5j1o%2B03wktvCN2V%2BuVBXIMGh733rdrVrWpuFBcbOGcaJz3d0W68tATEE32pLLuZtaZyWnHMRRKEI4h73qqQjGuWp82oftjpbqF90h%2Fa%2F9cR%2BUzjjD6eXBOoBm8NT25qK6U9QjWn1bkeHo7EyESQSYTZWLc8br6TNJaTnCHGQU6eH%2Bv1D8zkUs9NdGOUfFB0EZeIPxc2hOr2zdTDIVVejGgWv6Kh92wxCm%2FcpXOkS51XoTx07Ee7YdXQeBwzghhyaSDno9yGOJQCkrXbxeu1f5WlYRrjCMgvIcKR4O2NdhiAFVAKlV0aHEcbI8OfrJNZtWus1x0df2V0mFy20CHzcA9ceekukHyru%2BjkKf8pFQwXVy%2FkBsV5I%2Fk1Npoah2nuL%2BcD7USSpbJz6pEM2jLh1O5TcbDS6%2BZX%2BZuKkA75AToHdkmVlJNa%2B0yq1InYIV9qsNaig1%2FHHdbnxAii0EoYwvo5rhfhr%2FzLVqCubqUey%2BxedCZ0TA6BWWU2uVdyrNWQKZdEOafQDWEO%2FOImBGwpABihdswwpPewwY6pgGiIEqKRQEtAja3%2FWXJh7jnYyYvDmXJTNF1HbKCZb97%2FEfrt%2BGF2TgSPbKug2mrp6mxgxvLRnASg83t7UpeWgCLJJ0Rgc%2BCkgkSRbjmzRfSolL1j72Cm4DfQFN2D3akGZ%2FlTPR34Jv192pk32snHLFYCd5fj4N7RH8zBDfN7rUNjj3eieH2H%2FfpyeALx4xYCsuPwij%2BOsaHuTt1wNn6iYX%2FTGqPwm75&X-Amz-Signature=6e90172ef219dbda557dbe8bdadae326b4317ecb60a04e966f03319cf0abf7d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SMX4MM3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T141021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGssxLBTyc7V6htFH9OH3jVuyXwk6WJgX%2FPrcFk8tiCIAiEAwWDLy5WV2V8KZbiLOVXfIbP1wdtdTIlCIVZOhCGGDPoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDA7xHiNs5%2BnfnAQJNCrcA8jF%2FVbRY9tk0yDFEec9MxgDoiohSqdFRvucN9vdoNyx%2FIfMzHldpqBeDplbP4ULvo7Kn1yzIQaFH%2B6MfL4wSP%2B%2Fu2BVdN8bezT2IIE0YSGQCmp8EhPMuoHrBWmlCIPVJY15AJFTGEqy%2Bt3%2BEhHImSGi8S54eFoAzgCemSnMDJaLhAxJ%2F6jfdB5bzlQOErzHc03b8Mm5f24uShmPbPVewVqwmYZ%2BvGf1eWpBJssC1CDVyMPwL7NFEY3RZZLx6ukQml%2FPbKLXj6mrux5joi%2BR5AUC4LTSfHkYFxrHxu4et5QEn16OVPQvFo3AEAV%2BNPoosaUR55zApgDQT0T0hdgLAyXY4aahPEIqQNdvglU0CoSX3JAB%2BiJ6pv1NbFFRzjhOc4HVM0a4ZvVp4iUPSVrk9R6xBKu%2F2091WqsVV7L9I6c3YFZbAUBWLcHKqodSmgXYA7fUGNa3MQIFyd%2FyJNcYFWcr7uorc6jya9JlH2T82%2Fyj7f3Zml2gqwszzmQrwI6vfqVvTaTipxhtn5Bl85A8DaruMr%2B6FHfGzjiKDK53%2BRI6b7kioRGeWmjdVom1t8982Cs%2Fit9BEFoONxf7H%2FkpB7ekCr4pv4vM11rQZCtwoMzTPJmZGj5bLwvRHtUqMIiT3sMGOqUBBWEayAxz%2FME%2BD0I4emfRqRr3bVSxbsDwxab7XM0zcqeDcqUzpRMiJtboaU%2FKyJJHh4Qjqy3%2BI%2BBTiMYG4h4nIR8t625KDcikx1VlV3pplkJB5JrnNXNLxee5s%2FAWBPtJsBzDIgVQeMTjS9345bf4gbNJTonLMyC%2FH7xXePgJwfcXAgPteXnythGZsJuJwX%2BWEqLxy329mGrpe0Jlu1BWwo41ioto&X-Amz-Signature=9c302379cc7ea7d98266c5d9cfb4c64c6c25fce93f7228aaedba25ad6dd0ba85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
