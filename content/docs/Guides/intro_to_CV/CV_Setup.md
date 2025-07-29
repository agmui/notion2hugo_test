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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GIYOSCC%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHOGH28QJoYONgoKQa%2BruqD6GGUn8sHFphY6A%2B7dCs6JAiEA2eDSidch9P2%2FhEVftAPSMbZrYOH6ejHhEGQwKTeyQWgqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxCm0kHlSbg8rGHOircA2Stv6kC6E%2BTupsoyahgrlM6X59DAZSk7NMvOmQsQXg%2FBUrIR%2BuTghocivpxB5vWoTuzO%2BewZUIi%2BKp5PHmJB%2Bygq4gDWwTvzZosFc%2BVfSakNX66XyHKJBUPFToYSSH9yDjavML6FUovGg%2BNRqPC3MZu1uTQbCrL6JN1EQJANEg3HLnzaKHA2MrpzK10srOIq77rQS2pTo1S32FeN4iB0AlGvfwoCHg3MW2zuq%2F55zli3xRQzo6AqyijXgJbdhuebv6zzaZLqEt%2BCEC14XAeuSftZEJsy%2BrZZodsKDzoVgyCkgzTct1xPCYF9Pr7NJ8OKyP8aXjNBgVmdiWpRzgjcMbrysg5yJAPrn17M%2BQO5OIj8NTOkr%2FApaBeL%2FM7qoDxxDH7q7TvsRS6MR8AHlWA83y9s6ZfTT9Yr5KaRk8VCdHDglyV%2FNeUqyrX9Q6OORA0Ui45iySVj0ww4brg9tba5KptnWPGnDXRpGcMxNaZcr4QBhVbA5CJwFD3Nmw23F7DG3OSviryo1MjH7gTbhqKIWh0o7NwpohoriswRukajPqgUccoUIir3VQCvJN2p5R67CQIMLuuOVH6iwoSDEnYeU%2FwV45xk6XbkBJY4PUvQ7QSS597JJSSKeXKCuuVMP%2B0ocQGOqUBdDKAt6en6M2OfE%2B%2FPR78JwhQ%2BeSczcx8rJKQqWdGzo%2FYKY0C8xWsRUSyXKBZUg3OAKLLIzMCmaIdZzvtOMKIfKkUp0juM1zDagQmguYvDfd2g%2BVLESe4TwcL9IViWsX4HeNua3L29qeBnjzBZNG5%2BhGluV7uFxK5Oy%2Fp%2FnOSi%2BTm6aUURIKEz6XO6xhkOfiPSTuEsUV2126wKDsYYdBfOLZoJju2&X-Amz-Signature=1002424a99c424f6979a9b211e1c96c257f9482661b496841daec3e1decd62de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQHBE6Z5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T061549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEPtzN9naa4hnwWkv2fUdgeSI0p7tzE%2FyAPkscHlgr9OAiEA8WoqzKgkWyZ6i8z4PxcY8i5D753pN6iue8l1k6ewLKMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDym01f64LWRxYlbCCrcA%2BOvaXTFZjJWGTdqmSrZdIkZa6sGgXLs6EwtbMuNApq1iat1KBer1pU%2BhVqWCUJ%2FD%2BsQ5C7BDYfxnx71C8O3amCEXbP2uA2CmmLZh3e0F0wZnZtyQVGznFpYo7T3jOtCi%2FEiYTP97hTEv7txbU5dPMPBLLM2W3zmA47OaTqeH6PcP8zQ%2FaA1fwqH2gE0gbn%2FTWL%2BImvOa44FbZdCRbs%2FAf0OfnQJSgQQ%2B3HaPlkNDlp0ZIPresTxCRyk7yncc%2FyLYdcFnWUPWDMpf4e3IJdhiUO40QgiJC01JT5kp3grMvBcL1WY%2BSutCvy8H%2Bcd5mxmPJFW8XGGVcs98uBgeEPCS1aw65z%2FCt5%2Ft5ToeZoRppS%2FB6mpf1thHa32V1bRIm09FjfW%2BV7vKP5RA9ZnnlbHqcm8Xwp2FSEvavA4QjTu2%2FiMiE%2FCkeJAD1yJW5FV09Oxtbe8pUEM5N2hGB7sOsRiEA24PTYVAbMFW3UEwNmBJDONI1o313tKjiaxaKam1pbUZHzT%2BUcTVwLYNbSdqLh9Yr8LmcT8RUGmgCP2ljryQ%2FGmSYzl%2BcHaozc3Su7Bymhwc4OHN3fuup7ep4dXLG7R1dTMHa9YM7BF1N9ycsY%2BZJBCrI5VfAyJd%2FbJUaiNMMe0ocQGOqUBKymoW5YwwX%2BkqJYxup9q9B9S9wMIZq9HpTXn7YewwuV%2FEBbJHkEBZvocHVX52vJgvwDe7Wl%2Bb1yjo0Hqa9vab0vbVWny5Kuos0YMlrUbeCT2SrqhI12czjYY0SRqW9q7trFcogz4MGGfFaj5dvgg%2Fnljjw5IlAWj53MQSwIMyQLo%2BQFRKg2Ran5Q76XpnQAKA%2FfICQIpR9RCcY73KgJR%2BgfAXJq%2B&X-Amz-Signature=1532eac349ebf1c947885b884c6295a62adffc9d0f35914dcf32c8d079d94292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
