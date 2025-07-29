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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4JCWYHQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDI40dQz467TnwpULx%2F35Kkb2gnhsWQ3pWOkgwroO3BoAiEAiQLO3pkrmJVhUbA5JGAv%2BXkl%2FRqXGqziYCdj4aIa1aIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBOoDwQDR7ULv3OlCrcA%2BdApxTbPY6CrXWAXqeJMXUlx25OpeXFn1Y%2FW6yOtqGsa%2FuLv3QcsUggovMEpMeDxQfBNnwnind207L92QThCwzVsY9%2Ftw9qiSykkvelBqTwgSVc1XzTfrWzNCGGE6p8%2BzqU8GjRMSOlvnPlpr826Hhtn%2Fn6aQ%2FVcYNtcqbserU1hcDJoHMmRh%2BtFKyJZqyWm3gmsrFXnqsyvaIH0iimKB9HUQ4qsUyHAuPwWvvG3rg9EAebLbEAJft0eE2GZnfTQCO%2BzlJPYQJ6HRW2Cs7rpVdGDaJ3G9w0inZYxySyvPsDAdESl0X8WzvafbCR%2FsGp7Q3qkFsEOPGUTZLyWisXS6GLJ0LAq9Wbds4c2t%2BC1pUW0gLIX6pmhw5soxioy2sZEyZWrFILmIbzBknoqlDrq%2FT5uioGA355kSJeVLQg6VxNopvQhZgvRdCO8KqMiefNJhVUGnnPx5dbrRmqdsghGUBQasNAoyMNpFDwskSCjVcRHKlmzcKmk6DZxlCkkaYJTv97kdiZrdRuoK%2BgtaKrGr6QgLwPDgKOgTrMaWo%2FC7jPhdi56LYh1vQekcNcEgM7DiN5j0knhw3Z5N35weJPkQOtDwwn0FsyhL7zj5rRJps5I0nsLYUipM8pAmZIMO6xosQGOqUBZR6vD6MIBJv2aes%2B8fuYVzhKgxmK6hJWmrAH374%2F84xI8dzpBBr%2FmaL5iL1xH6at7q%2B%2FriusXS5fBjWa5Zvs5hmkZGO0juaugrEQfVbxMiLuNonQD%2FrhycGXJ2pgGn8zhS1UvBG3r3D7lbHlm%2F3aMjVsF0R9NQyFRjUjQbWVMy8jhhg5RS6C7UtgKRfu1RIBdlERE5DSi2yg52kh84KdyJE3IG%2BO&X-Amz-Signature=72e16c5a56fe75a240b2878f8d29741c421d28a7f238327d56d9c5f4400fc76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDIN76H5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDVjrmuO0%2FBIf21RmeVwtY2IOX6Y5Ma0YRVaVho1EeMywIhANf9wDPQLJjBEetaVWSPT1VOnqQp2kYqKM%2FgSOMfpn8HKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B68WKx2lkmS%2Bm70sq3AOkhKKZynhKU7dFvk3XRXJxhZ8AyuJyn1D1ea7c3Ba5zhDraOG%2BIIGm2vNDOfKIdLiBX7Jc3uXQT8jdhyKSQBqJDRTFF8vaVs4qOwASzk%2Bm0%2B6TMjhlXcLSLJOyxh8v3b5ntZs1rW1kwkS2mnBqvVqJKwje2UgvnsjZegngEfwIT2WWEC2PGxkG%2FurG1njdNrIbbdJcZOyXIlTcdc8VvKiFOXWCDZSmYoegP8LejLHdDwzSAekpbO7fvwM%2F7GhjNRkLqZ2o0YiOSpFYB0zbA%2BJeTWjcI7qdak68qr7blNe5U4hjrxtj3pdyXSBl7EMLS6eHP4I1P5oSCsZtYRmdlZxfRyWBv37%2Bvp%2BycncQAA48fVmy%2B9NRTooAPEGkBsSMOM7nYAtWF07KBhmgaNPw0THjKzrN3%2FFKgf8EP4tSsV0mi7yagU82%2FTDxPrCsqncza7j4J5E05i2aFlOkymch3qXLn7TTZJb9r0rPu%2FGQWoTe0NMsB1%2FjyEOYARtzGUiHnIx1p26M1gu%2BKOxh7mOX%2F9fxtOy%2FoCCT%2BVt1%2BycnKmK3ePL0Am5OxKcGjiPMkA2ACzR%2BRcjcrCYjp5CViWk8TPeqEMiJJqdQxYIT5UvXHNn4lsbn4LdSpUxjekoIWjC8saLEBjqkAUhwSPc8e%2BRq7%2BYdDjxVLuGL6W8VOorCfg2shw3lShzUaGh0L7NM5dv%2BzYWB4ihKURZ5I1%2Bi2qvGdNfHNGKvejK9GxZ2vRCP4sZGGBI3WDyqW09B449%2FH3evZn%2FXSP%2FYfc%2FXo4KiQu4xJuMARJCsuGC%2FAX7hNSizBvX5ebgwn5zxYrhHE1G7sGzNb9om3p9FHkphKwlxtQlAQJZ4amrdCufFjP7I&X-Amz-Signature=0e53f1a9660dc38149d1fe8159757ab427911e5cd62a6c04f8d6f8b164601446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
