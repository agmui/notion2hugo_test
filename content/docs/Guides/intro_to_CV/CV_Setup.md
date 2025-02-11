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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XILTE2M%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjhwyPHKDKyT9bbZtpF19Bwjqklh831EZ9rdB6666l1AiEAqjv5Muc111GTOTzf86427clmoNAFzxX0HIVbWyeE3dIqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4UpU7eP0bbr9SgEircA0ezdFRD8YzJaYU7qBq%2BNdCKVr7Kd53wpGaTXEyYPmR5mVSHndgfY%2F9JwINeA7oIW3uqpUjfoCocmrOucRvzFD71CzqdwXeozj1zve%2FMFcd3chPE11rk%2FIbTAPbA8NCOISDq%2BhMoLp%2Fk48sq4Eu%2BtFRn0IJfCUUOqlQ6YGNS4hD9GFIGLD9DwSoRTxpIIpC4Ag8F6vQYRBJpZepIXWdhWiCwu1UVLukovllyA6bHi7f%2F3nNAbPxZVfRhy7RZiQ9Lety%2BNB6wVZJ9FEpIVRsEIxc4gNmcmIjSown%2FYh8ekx5OMchb3ZXtXE9xo6vw5AZz3b3n5Euv9BH9fJpWztWyh6qV%2BLUTU6DHo3yqQLx6HxwNL89KfjUSMBWTsb0ndB2M%2FK1AWzQqz53YAP8ZshtGyMXcG76l%2BIZzaB0I7UnjVQnUVsWt70F%2BR748dL1LJBnwM3rDAvLigK%2FiwpAwwnMrsI1nikUmEtcZMYyLWOLL0Qsc0hV0pLbuDzJ6DpQJs63ehaxc8nvooP%2FMaO%2BtMIwDDHs9BQCa62em%2B9KXIdtr9LbaewSxqweJx6sFYMRRIvz4J4PIiTQwsATqLvoSVlXpGPG732ZqAqVfLDG%2FbqUGKz98XnRDgRJ3WPF28u%2BuMOPJrr0GOqUB9BnP0dp90z384vsGHvwqklOkp0l2ZYhUWR%2Bce4PIz8mEON5%2Fm4lNgvKhbkENMtb1ehnFGcdUnVALKWybPU8q7E0atObytcmkBTpFNo9MDC9X0jU6W3dl18n6WgNs0K70pHa8k65ZAUVLKA7jUhIr%2BlbGORXT27d%2BgpLELtwRQwJ7S8T83l0pdLsoAmp5KwHvGvNnnGvMaHqPo3RW8qgXIZsfpxKx&X-Amz-Signature=4378f3f20e731f6da433a8613fee3831c926f86f81135047eee37c3fe54b536d&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWQKSKP%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8UFf%2FGkE6DVOqWiLSg5KkykPI99oLCXVSSAnr%2FWmOUAiAMHYrmXPW8thwByKlWY7o6S3noFY88Il26U7yOCqXoqyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXsAZMe%2B%2FJ1z%2FWle3KtwDQu9LNF8vooB71VLoXt3FMFZ29aB3uX%2FCLHuahL7sJRn844701VMEi%2Bm0ORjmqPRNtCCAV%2F%2FVcgOc5CoN%2FjigeHRwPw51h%2BA%2F4QRKMWVjV%2FMbFve7KZaTut3lE9b0g2k2hbOPSOwTPbX6a10H%2FCT62Zf1LVLP8SEvjVts4rgbbNIXHWpdICkHCGwhq%2FyI%2BZWCz%2BrCkcoAvbBYix%2Bp7dyGDSCbtIjAAux5kEgI7p7M%2Bv8Gxj%2Fm10IkSQ45viWv6A9JrB1C6AjKqc2vVBvyK3wsRA90fULZTkEqbqfrHp3cZJTUI1W37f67qzwm6oicGBCojIn%2FrJOKEkPODymVK1OzB0sSCHBfmLooDJ0Atm81aD5%2F6W4DRqvbCfM0FTVFCtHJYpGSxZ7KpPiIODaYDdhc0elQ92mH2oSAqUPSFp7Ov7DzboM8%2FgqGbC6qjZeNVzJvHmkv9xNB3MxbFT9Q73%2B2NoPpvy5e%2BwM34%2BCY8XlY4REUjRnyzxVW%2BbInirycSInPHagNthuW5KSuUIufwrxzLNjMXD04%2BOurkCMQsg8PNvRQuYfoWfoQ6chuwm%2BoBZ9XN7zhjbQKZHPIRuslyE0o%2FPVnfyloN4mGCEmUGE1Qa5Bj1KJ7PCAV2PkSGl0wl8muvQY6pgHNQn4SmNW%2BhTuIpzzs%2BM9cvesUo3eQuNDX%2FZAQnUNsxYqya7tKXPOQWgrSLiHla8CD4RU8H05GlBY15fYK4mjQZntkaCCFnq0%2ByHlqXkMN8lJxd7%2B1%2FqIbmbJBj4nFxyF%2F5MLlLK8HkOwPWaIB4JH3gddDQpr%2FIeO41UlbfjZ060rhABwLVOMy4J1xBerC3uPdORY1Qx0D9LR1RzCOFLu26lsSKHNw&X-Amz-Signature=15a8694e2f686ba8eee11f7abe083a63cf5ca670282191b337af9518da88496d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
