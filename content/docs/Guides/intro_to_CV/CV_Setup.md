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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FWAXCUP%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDepvuedABO6gQeF%2B7BrpbzxyxNlDS%2By1PkzILgoGhQ7QIhALT64n0Kgr8Ck19lpBI5zZADl%2FjPl4%2BVmxaagWnX%2FQxtKv8DCHEQABoMNjM3NDIzMTgzODA1Igwk06NkKrBDEaARQvEq3APTp5o0b8GdQ%2F6auYbTXaBNMFp4TKX8PHhS%2FBJK6BCBqc277J5MDYlhLYaHPyFlWvMs%2FDyD9ixHA9UgHinZHOo9EBwfcbFaljVp3rF8PHoFggQLW1vE0y%2FM2bxXNQdZxiZL2yCZPRUlSu0Xh2u8QqgV7uzmuwhofeu82sUY3Fu6QvQKJQkmGU1%2FQiOrKM3qk8LoKwOH2mTQXKg%2BiXBszoL49l2HxKiu%2FoXPaFVYpV3%2FjKFbDFMw%2BKj36%2F%2F%2B1I8sqZ%2FxqTPs5plqgfcZUlnKVjkc0raFXt59IFRvWo1fp%2FRr3ZQKkdks0v92NBS2FrbdcaV6mRb1zHvLGfE343RHRyBV1ctap8nQxCnnqJg6pK97TujI7CV7%2BR1tX%2Fo%2FLz%2BbKXlj5SPzKAqSqfVStHUZjsSHlg1I4oqox9qPMt%2BOUFy8%2BEVWJOXZPa%2FaG3EgFajHVYBZwVk4yQBGhTJcJ26LDpEt1taOGUW5CMz3TZiobYQInBpX8wlqYU0H6IUV6UGQa%2Bf0ShWP7ROj%2BONumx3Nx8EMvzR8S8s5Y%2Bw0CNIieF8ou8nRgaXMysWu6cYaiL8kRdyGLv3CVaa3jIgDGot5g%2BvymfVLMFVQt%2BHRNxj48eF5DFosjntHOAbQK86xpDDel8zEBjqkAVrriWud3me3kzpyRAOE2X3%2FSOwYnYvqT1N2zD4odIslCQf%2Fv7G3ZG%2BGuEaz%2BGTwUZVKAnE49Ev1ciNgCpVV2yi8FRdtNxh1uFxO0SMsytExBIG6YQnlfL7wsuv7SwNExTjrStL4S0u5GXDzMMQzAj6xMX5d6ZMJqL1tAjoC6Zd2C7%2BunkCR1zeL3ycToj0DrPG%2BCIdEBjZSzP9DY41ZkXbHbqZB&X-Amz-Signature=3a1dfd0036044b7a9b93d465674f36562155012a33ee3680e6063ece7fb1ab14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYW6WAOJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T081433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIF8Rtcq3Oq4nBiCvghgzwpoKK8%2B1pCX7y04aFb0kyE0lAiEA7uYfgtnkhHQjSFxTFHmAVs7t3p7Y4M31ekoVCEPrUqQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNvqCBI2f3kOlpbVpircA7%2BcZhSrkIN1DNku2iPDFRiOrM6dnm6rhGocs%2FxHgPFUpUFsayVuBatDCOijX5HHw%2FhHPms%2FRdgBUkhIXwPfoX5L8JfNvkMuo6nKKpwgnXbkAzaicw3xnpOS%2FG6nmDwtzlg6hoAylmUlZsMFSC510hLd0XBG2UA74VQUN0meZdHFAGIGb7sgAeHbBfwexYUXODbrrZ6FIlkFsDw4iZ1oN3b4dzcCZIQWLgTEaV78EOfNDfcUafMQnqLBVqaUYcbKb9AAQFo71gf1fLc5zWendTZSahUj7ORs5eFXXCi5%2FPFrF%2FsjPZ6ul9LS4egyrUo%2FobVlsYVcLFFgatlQou9WJrjsIWzoHF0aZ%2Fcd6yBtOY2fnqC2soCtLOrvYpzGniWkcxUE4Ql2DwuH4z75krB8PnqfyOQSiPPgDZG9DyGMkglxKNvxr%2BYLavN9Fud2q8ZegyDADYO7gajkEJ4SxflhRdrCMGyr8ds4lIug%2FTxiXos%2FgkW7sHanD6OQkLRzX2MN%2FJyfmLygJcFc26WYfaIUjP%2Bi18KzdP%2B82zWEA%2BEjuz0nspnFxuWyWI%2BJxierPncrQzyTUoI8iEHtRipNF%2FVBialjZNyaoNPx64R9CH1k%2Bn86uPu4OTn6eAaFmlJqMJyXzMQGOqUB7botcebKBAz2eb1cBTgz%2F9MKx%2Fh1AUHkugB6XZm9yAuNsCHwlsfRAM8HpXBmeCrKDVD8NA2h47Z%2FRfyu1PWWxAZGs54Ohy4yIJDlkb28SbtDcgvnx%2BgpcgGENWwE02fWfmb0SmOwJRjkSsiHTziUR6lXUtVBwFchxQFG8LChukTATO6aydW2i%2FWSi2yTpFHCRqSSf0EVBVEJomM6AEdevbXeEXHw&X-Amz-Signature=a543818a18cf889322acd1df148a688deed51c8480c9b6f28264d187a81dadb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
