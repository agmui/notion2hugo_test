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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q54ESID%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICF9Glg05JxBKzROBdlzVr7rKGpEXzIE3Z0kwtOssgSrAiBAL8OEDUEh%2Fo57RRUDh10it6jnNTRzeutuh3lDnHfzgCr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMNpjxAfgH6jDXYukbKtwDnEhO%2Fx%2B1IxgIP7Q4UV%2Fd4iVr7WkL1NhaTN55zh4NGXbe3Y3Y5nfTKm04tVlI6BB77C9jOrgnI1dzv4YPWyj8%2BGi5KdnZNZVoQoXeSIVuE2bBLC5gN%2FKITi21Xe8xGJf918GpjWiinFdyc3qlQ1KUL2FMZvW1hZvE67JLi0SaP%2BlXyUUWyDjWmVzcm8MRF7R7915UqyeNW94eNLk%2FjHteQR7tUa0El8POolTdtHHSjubP9F3ZBeSAp39wWIkX3jnhmQRtwxAWM0mNGtFKiQ2Ti30ZBRgwZZKT6S%2FhSudQEh44WFpFzPPUBV5zndwiemMBv9KYlJVlyzZms6HqNilvQfLtBe8t9WNeH4CfjASMMdNFHaSh9Z%2FE01Jshz%2BYDC7nwKCn%2B9KfSZ%2FDxS5iBgXGDzwGsPuqjJahC5OHfVPsuy7eV4lpyoue%2Fzsd7SW91D2YBc7M47kyAA4geyp26rD4S%2BZD8Wv8WB5iTsnSdvtG2Rmfb4WLD5XaWAotuJCwgVBo%2FlutHY%2FJ%2Fc7GHoi465mHqbJRgeFJKeHd8UPJWco6VexygK0hVk8VRhMWUp94alXtm2nuYIV%2FmBqB%2BeQhp%2F0fHSgx7iaAH4M7GTGCghr8a2aubWSbiJeKdde8PPow3bDmwAY6pgEHkLTfljZzUcNwjuj85OMhjRG0VZSlkj6U8kkUdXQJE0zJQ8NPs%2Bkw8ULXZRThYl9LkKxrSDFhbSNOIRiS%2FlDUTdC5DJ775QJ6oc9MORLWjdToCB3HmcGtbb0WrxlxI%2FPYXugWs%2BtLhyZxofuXXmyK68Tcxv%2FHKEPXyUWwG25rqFgFrGaLM%2BDeARf18s04PP9sAJ2VSbEooHo5qhUV47JzuEEOMAhG&X-Amz-Signature=b57bb19604a45b8de7918bd53c8411c22b3731fb766beb58c78e28bacb0bd046&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZOLBM6E%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIJ7nFrP6E93dpwtHWt9wiEb32DCUmQO6s%2B8xnfzmiCAiAtaKrmi019msoNhYYTCU8ltawQZUB%2Fvqwdm3sG5Ipcbir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMmN44cQipmpKjP8vZKtwDMRPfTqtRW0XHSL%2BfO3iFXAJOFOQUmvVbT57WDxxKODQFhxQ1EfwBO1H%2F3pEBn%2Fqiemdi%2FD80BTmOcHYkCGzI1zAEr1k7RgLjPMSTIP5a4AONmVLK5Oy%2FcOSLw79zWZEGGo1lw2v7atO4mSyDQTteyShMaNn3VxChX5Nh1DVyvEfwtem32UpldF0jjYsBxEpLzJaWXJKXusb%2BujDthupIc96a00fU8YknnhhFDHC4OKgMw2j2yWj1DMj2r0FAH%2BymkVPT2XvZwPzb8u2Xaypw6HmmUg9lB6lO11vkFOsAfRWakCQJpGBYB3UXztSpBKfrNAfHWHb6d46g6ehk06%2FQHRJe15N2xkrAwbp2Xfil7xCA%2BvWoNSq60mSPnt9AqsgV1TAaG5V0vBGf89L77MZ59hnxEO58P1errdEUVTGSZ94aLxbVOJeDJOEFiSHFT4BdX4j39pyO71hvof0tvo98FfRM0IDjzisgIANhEeg7RWdQK7jGWwPN67FC7Xz3wkkYo162lMZm84Q5L1L0JrCLgNj%2FJj0xBjpmJ3M9XqQqJQENRmpymPgkiZ59CTeAOEqEA5ID1HWfugXnfLhAmpW3itNe01tssgJEu0IfxJTJT%2BLkvr8bn%2B20S%2BHmXfAwj7HmwAY6pgFEeUwBrfdU5yBu1AFVJh85cdRMgNf6CNQ8XAKGPdVyn%2Bvd83kAWAKjvj47h9lgbmpAtrueljwCd5nqwW8669gFhS4b4uZEULxh5vqKIojz2VwcAPirF77iwclc%2FnRf%2FElJB%2BHpsPMiZa0XJY1%2FTElpYXrN4aGVOG7eZNgnLtY82PPmCv3nSDQgLcJKa8I74DM2BtEzn%2B7qhy4C1dr0RLzsugwwQ7q2&X-Amz-Signature=9050286176d801f7a5f6392c0ca23e6af329cf9b2ee9215d1f1f520dec392f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
