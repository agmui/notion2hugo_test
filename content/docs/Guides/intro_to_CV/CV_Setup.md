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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YJT2KJH%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDSk6DIteMSP4pARZnzn%2BlMnhK%2B0f2pgEFXcgImUNFqXAIhAKAsGJnxPJOzDxo28UBi5F%2FkncRF%2Bs9jIZbqBFOmTz1LKv8DCC0QABoMNjM3NDIzMTgzODA1Igz4cYggUjhGFpSU8dUq3AN%2FyoWx%2FBNIuaNf29xVm%2By0Mdw6oBtR2iipgru%2BHJz0VKxiXoapKQvGx1igBY6FIl5eMUi82Bh%2BKaFTQMZmcirHOQSht4nqo5usDKak6Gd4nOD8DRw80%2BpaMaYMCeaLbXxLumTcyzIWxe%2BYpwTVpDTTVLf5RWHcxSoprIbmfnRgmOX9ICURyNDe4oBFvkjqZM64DkNQ58xD%2FoZ7nl%2Bh1D4%2BtnAKl4XLnbPhAP8TMSMiXWfPM3gEORswvfkE%2F3Z3PbUE3GITnDvrE7HbYQwQ63s8s0nu5Z%2Bx2H2rnhmODnaWs0SbEb37N0yakowPws%2Fio5X3fcZ85RkjioMfksuhO2YtpfTBtEDFIf4OS2sLLQPZ%2BdRDBaBIB0YGUTvDdc%2BXXy1%2BWq5A2hcfij2On2VSYgCusXTWHzGE10uOQbSNZielatOVVDwjHwAcqsg3eNCRCn8yu1olrG8IBOU%2FaEgnX8tK9p8gYeGFjyUDGzHQUJlOlsxkLa8Nj3CI%2BeeRCyom9VoS01TBh4LhMOW3NHbPnnVwxfFcODSkwdDFAkLi44ubdzXIQBCsVeB64swl2wPgqpYNazbLbLj6ep65qo%2BfBh8rejaXLzi57PkiLTjEJadUS%2FNqsR5ov2z5n8cqgDCbwbXCBjqkAcA%2Fut8zR5tirmLhyFe3WvEe99YLwAZrY17BEM1hFEltuQLFvPjWbuhZJfQRSfPm3JRYGoGR5mIGedMHhGR%2FgKmz08zyhNg8xMDbdKoRfegiF3wXBf6xk3mN1DeOoflXt5SY3%2BGukOqNt8v1UHmZIuRA4NDpqdUk%2B91eyyKbPP6kn%2FjPXBds39HhreKZyzg6vepgk7F%2FhICyxCZY8geqTAh7npwM&X-Amz-Signature=e2258b21099decbe071b2fcb8e09df8221f74c07482a00da35fc155c70425913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKMLOJGC%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDGriz2upBCCGIlXu%2FX9ffgvekMqcIegEESop82TofODwIhAI%2F%2F%2Fh64MAXJSSr1oeI7hQUqM61qQ4WkYOQpWPHoFgL0Kv8DCC0QABoMNjM3NDIzMTgzODA1IgxA2fH2uVjVSSnyKicq3AOToOtBZXxC7IYhaR0ylwA2v%2FUkFYsyJj5UEoa6E3EGerEJ1OKZinH8ADkV76R0E%2B0EgCk8ROBWUOBpxc22zU1SNALYmRZgfp2j%2Bau7kAkn6AJ%2B0QwQhjjtDFqy3OBlxALe7hwMs8wtBX9acq9ZxgDoSR3Oyr7iqQ37sswWe1mupI5vYOpT%2F0eHO74tWTrrovtiWrc8AVCzveZSwRxueuDE0YA95biMbPO9f8xwFeGywAfwuOjoBv0fCW7Ao9jTUYUX5%2FVi5oEnvUzmMd6XUKZgxt9jC0QwLpwh2ffLlfa4xhkExo72lAJLriYNvUNhTmThQsO%2FhIIhL%2Bus5XGP%2FmTLi9qTU2J9CPg8NNaY7axJ9JeZ2B7Q0JPM48dvm4KJh%2FOUijFoBRJLaZ5UgkNM%2Bl3HLsbsFEOU5XPC%2F80BAomOwC%2FDRSGtrR655qS5OxLsCXWuVhVQBpPH0qQCwxiSP4zjtHgJ87sBBDee5BepCVmdiCiYfRW7PdaZtQm3%2BR2NBhKdVgMG%2FW%2BgvdLMbXSYyC5zSzM6XV3D1bchJ9PDsR9SIhSkxvuvTubyTslBBG4zHyUcdvE71tzs8pQvip2qlnPGqZQgtj0lknoIvpC26fqoz7lsW0vXj0ybi6DpnzDPwbXCBjqkAY7USMT76VBTIwcTh8Iz4l%2FKfTz57hCR0DG%2F1pySnD5ghzn8Pf%2F3OgwB6pIgpK6etaaqhT0juH30cpMTL%2BBO7RQOo%2Fc5XE3REB7pN2H3tOaDs%2FEMa%2F6ChKZLjI2159zzdNkOds5Rt5XEj7zocPkDo51MyzoaPC87x%2BOwxFqKxA9HWSGwpvA%2Frk9Gpq55O38ggDXzxmiCte3WIeBXPYwYA9LyFmUe&X-Amz-Signature=e170cb95dd705e456730b62b4efe8bf68b6f717d7e77e86dca6413477b5507b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
