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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MVNKWBP%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIA7EtpbKcyIIJzcS%2BHsocX1W%2F0rff%2BceORHi3D%2BU2UOqAiEAl5rAccEe3u4IxxbQC8jRqfC0peUm1PIcTfT7UWShgygq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDjemlHQ54SpYOr%2FrircA7m%2FRGdbzwwgMg9nCSqLPvlJ37MF1Oaf9Zit9eyJHTw%2F80l4%2BIBIBYuQbsCW1aI8nIP6m%2FDAVxQyIGeVV6vfJ5Rl1kdUEK4HiW4EI7xD01Bt5e4FZeorQV10hxUhcBfO9r7B76ia%2F0H5M5WV4aI0GYucCRMHtBP2SgHpMBH6lFuUZ2tUlPJbBfQfkBYCPmgMB6mReshvV7ywP2DxQmvbtCFPqXHVVkivCROVHrFzfwqDVe5qU%2BS3Ahc5B1gxURyBQDclZBRiFtYKoDZu%2BrWqoIKCw7%2FDIHGVxEIg1dyjNXxpqp29M%2B9EoXkeJEANsMFnCcHIWg2aShZEUOrddIDGnudtL45Ksum5XSEn4UgzoAWQYLiQABFcTYULwH9pOHT9gl%2B7rVbhpmE0hPfAP7heTJvv7iIPG2hLOWJ911iuFOcFsr6IcZG6chv55x3JtQZILvvWyTieh6lSeB4qBOh0wIbdzsQBnW9CCgnb0q7J%2Fxeq7Joob6e8hPxceXBkICDr7mfexbtQMElUiphIXvw%2FixgWwvOgMOEvnZuowvs0edaLytcDjpOCoEXYyYdZTCHQseNmVRz24%2FpfpXNydI6YFNVlCPUUJrouTM7JgGktxJTs2NeiOg1Q74pHj6a8MNT12sMGOqUB884F9oJzB8IHiBlhp3r674xWqD0TJJmJctVn%2BGNKX6vydMQnArKDf3uICKz26IDeHFElSdjBwHbDw4FWfWNAPT8JnSXxYDR%2B37iEg0zJ2BaWhfXF9RXzfDL0zl%2BkPMQSaq8KvaaHJIh6MKjQc0uw3Dd9b6k%2F86enwmblS62%2B0bys2F8cT0iKvZ4A%2FgE5kXO6lOR9AOqMOGpXHyZWZShODyzzZ8Pm&X-Amz-Signature=132ae4cfb458ea373422de923d7d6e055915b9968f2a977889bcc4df9a8a6c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPX4AFZA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T220932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFhsnWEqTrEAQ3bM6f0w8DuEkrIgaYGOcwbyx8Fky9mVAiEAjBBqkH8kNfP%2B2TIwLe6D5%2F0W%2Fh4zs9bU8ymNsu0HBD0q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDM%2B66CVUtm3nFh5R6ircA5IAVqaybyxOWdsxcyhkw3whMs9QOPjUIJRpxvNViPpGWxj7kSVnT43cRffj0lXOkbO41xqakwTI%2FMGxI7mmL2FsgCyiVxjVE1BmN8ZzrEpHk5PCS%2FimvcNsoUyAsbvA22p6VM8FVlhNV5UdXNi95FpsF4dNTydFFmIvY0O7GDGk5vtV8nvPstW6JVsmkU99dodQtdvk7A6GqnjiVRCCLLijIlE%2B0Z1qdocWxPuPWh%2BSTBAk7ZuKZapZGlabxmLwanTqXlTYsmIA1tDmj5HWS%2BWBWY54ro6H4zzKZJ0moXxzrJqXBmbMcfOFaVQtzSn5bsYUxmNvHF0n0cW2Whx0qmNj3rv%2FfoaDUrix9Y5O1of0dF43qQa1J%2B3k0O%2ByEw3Ezh6G2VDuQLAZA1K4f%2B%2Bf9mBiWyBuNA4Pg52DotiVDqRK8P5QfVxrcoaTTItKfIrVGFIxAtl1rB3TxC6iHNE8q7FrAGTntMRj523hIy35oQv6kLse74Fh%2FVehf0fMYj8SvHw6ppbDuExKukM7hcPgujpioUcBg7RAul7%2B0cZJwqZND8q4GLmhRbGrcU9%2FkQBK303gYaIWLwDGgGuuLM05Att7ps%2BT2kLQ6sM%2BNJkyfPT9%2FPEn2J69hib0qmHyMMr22sMGOqUB5Wui8aFSGbGTP%2BleGD7ay3dxIJpjT4KP4MRIBu8mp%2FlDR7cSMFMqKr%2B1EDfoWcFNh5zMaYdwTbNG0ce747hcWJxA84zQksDUkm1leCrQ%2FIAtivlMoCrqa9Gt6ZIsYH8wVIcyeU9ld0M1%2B4NSKYfuvwa5pMrjNM%2BVlLLI7WjfUdX%2B%2FhcOYyX5LnV91CFltnoxkdgfLihATUSgbREAlXv91q%2FbyX90&X-Amz-Signature=85a7c955ff3af880ddf93618b2f11ec14d2fc8c8a0d7db04c954d7921d32f6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
