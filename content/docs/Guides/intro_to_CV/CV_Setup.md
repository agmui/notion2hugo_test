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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CTTKEWI%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCrwbT6AdDo8mUtNtZd40ySd8bAavWtFKPXZK7TLWvM1gIhAPCQYDxpHXAN%2FHIumW%2BqwqLfMptlNCAy588pzxR1iPtXKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqqM1nZ6gR9Qnuv4wq3AOmIv8zSd%2FL%2BGrdQTQCDM83Ip8KHW2aypOLLoihg5dyFyFP5KZS1UJPgzBXY2NvPndDwBsUlDXu1G8xHek95fQzHRyaOeu9N19j2i1L%2BufzYUhKRVOC9sU%2BDsqaRKKNvT0%2B5O0Af9pH2i4ajpXeYShnOASuzk3ybFfmuSEjan97t%2FemRT7MwZAbAljnsbrtCi6bDEVSqr6k35yQ16yMOgTLJgdLFMVdr%2BAi8J2AYR9%2BrJCACcxrKevS90vN40jy4UxOkR6kRHsRz%2Fzoy8cNP7rycvlZtjVQQ6jtSxVhddS6GlG0h9Fqfpv5of41KjA8D4t426iP54wAu3plKpsJvB3V%2B5KrDv%2FMhwq3V4YLdhcOo5g1REHkOtX7ww6cUo7fN1kHqKSz%2BzTPARGOuygm5fngqf%2BLn%2FLt1J%2FTFDB5ZFrHLzuyp1Ua9a9Rs4LZmmfU4p35kPhrwo24qJb8kbbO0jeKCBeTHf3fzu8F4GugYKwN0ITbHkh6VxsokL1HiOklosacBm%2B92Z2eBbxV3SsYRwQeWku1AQi4iC1zTvdQtXMVtx3BZwtCiu7Ey2mS8ihDIQG38acir2BcSYGwv6oHtw2yIlBHZtOiexI%2B8h5uGqNQWfiZ9gDkTsG%2Bt7w5NTCrwN%2FCBjqkATmU869r0bx5aLjGSVX6ilw83H9Dd%2FazAtAPWm7Q0xZZgoisy%2BEtcaw81qbaVJ2JOF1dvHRPozJ9xX22OdPRf9uNuGMzuLzoUUQ5R64Pg12DT%2FLT4V4BlW%2FHo01WJHZr3x5FV0y2rcXW%2F8%2BIHvnkRBVl14XT3h41QaM5%2FM9%2FRNElOZ0VJO%2BmznrDSaMywiGLeOvDw8jfnuTHxdIxpEHZLGxJIfnc&X-Amz-Signature=345bcdab4e6a82e55ba602a15d41b1332f596f3c8c86a65fa752ac272fcba4b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RVAHG7H%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIH7Ehct67XBRpzl5F%2FUZh3kM8yyujgrVBfMgJnrAK2pzAiEArkmMq4JyZtRZXHn05UxpDBGaMNZDbtrK3H2JU8f3ENsqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJPbRrMR6faGrl4mrSrcA2A24aGrV5P94nR3a4%2BQTYm5zhf2Rdg%2FC9zRaNK6DSWle8anZz3BqxoXnO179UTKHyE6EZlfCyGPjZrcvbmlWzuwvElZoFYryFON1kVhOPe5v4Zvyq1TPjwaS%2BXaSrx8qof3mmXqQ964l9JgeNBmA2SA7L7mc0C46ODTxYonp9GRc%2BTOhApdqlIsv%2BAWKJuSmzCa8Yz82SAYTNcpWptLxmQ2WFJJ46SBHD7md8k9jANmO3jrwcqjF5ZquZFAlaAxvDCFNP35g9gLv0v5IP0VpKTU8vFYJ9FWQZYBK%2B6gGJr3mI%2Fn0yECkMMUyctX1pxTj175H8zFrZiIbV1zg9y83HFCv9Io2GFIj8ZjROAtAUsiszmVYLGIwUzpFUhABNQkUlVL34kzzeXUv9mMy6YW%2BwRMnSDnabWBPZfjqT4CRllgOIFL2bl8kR5nBZgtWqsSqkJjHzFNZDWdkvIwpSP%2FmCheInBTOReObpKR9xAdoFsw2H%2FcJkqDX6NEiv%2BurBSna9W6NzUA8NGKTtkHfLU%2FrynrQkewAJSqRb5RuxQksRPTdpIbIpHfW5oelN%2FdvUz4bcT3fiiYcrC8RUrTdyvsKr6Mvv1gpKMB2Z2iHIu9hZF0DZjn3%2B%2F1kZgfxlTMMK%2F038IGOqUB1jzWBqACK9yaz3Qt%2F47P1qzaLss7C9Hyb52mNZ3lgZFcetiQGY4teYJOKP%2B5zQOwJaTta%2FlCK5Dg0Sn5Z2b0sGBEJd7qfbVEkEhLfK1kPAPeZIQKYYPKXoBCMWF5NIAn%2B%2Fzc37urxzT%2BH0aERzEJfyZIo%2BzQ0BthanYv%2BIW%2BekHJmVliY%2F4qu5r0efhsv%2BIDMc6TWHmZrkMSFDG%2F5KIGrELpkg%2Bb&X-Amz-Signature=fefe4019516ccdb14542f70297516bd311e2aa6e1cafaa39d86a42bb5e27e4ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
