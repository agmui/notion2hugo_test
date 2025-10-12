---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-19T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-19T10:24:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 171
toc: false
icon: ""
---

# Install WSL

## enable virtualization

# INSTALL Python 3.10

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IR5M7PF%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIE%2BvV%2FkBvMWK7O4xNS7umu620nCE02iQa7wn1wNHtgCEAiEAnOzGAkUJ0eCqSTzhhs2YpBa1SQjRSKfHxSTAvEum%2FiMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDLrRKuhMTOFH4TmglCrcA8hAz11J%2B3diMyAfAY9iHJE3z1z38NnwqhxqtCPS%2BVNoJuUbf7dJqt1KEn0aUAES8VTeSJYnSNm0hyOLIOmODUU3lPpsJqi5fe3pLv3rkb%2FxCZTbFivT8BPzunNW4cLKEJZ9TzUNHR8UY8GssLjqsKMIa4WRc1D3zxn9xxF3omrl0wD4nzlqurpzFL2C%2B8zWrhMQ6vB0%2B96pcQr%2Fg97bkrNDwE2JLUGPNyR9Fi6wu073N8XZ%2F0ho3AaTjA332LAY7wZ4Gp0A45klEInjCldztrx0eneFi8xJgDBLI%2F3%2Bwy3hTjv4ZTzgIoX1uIOHPGgmHFNTfi8NSCp9TXOMmBK0yVaxk491RsxaVGS8WKeIk46e0WLBFUG9IYF%2Bscoj6LCRhE4U25%2BJBre0R20GqV4%2BbTP2pqmvEg4dbiHD3c50wVllJVDKsVN%2FsLLPI9Xn45sOt5p0C9xt5zE6JsazFJ0ZVOwr25jOkaStffy9Vt%2FYAf0Kp8xNMD0qfXuoOB%2BCHvCwOawFU9Fqb%2FZFJ6QieEmqYIz2vHAU8vZCDL6HiRESYnlnIazeWIvpdnXS73OlytdQqznvusEGHRMUnSEsPBfhewpCERFMSM6LRGz9qND1pnfru4GaESCt2je%2FrZZlMPa5q8cGOqUBBQ%2F2IMvhjgoNJK%2BbThTD7UZ%2Bm0iPyK8yym%2BJuC56NFRtAdz6hNLsedptfb4HUHhBHCrHDKsYRHXX2noUMk%2Bx%2B4S12AqPvw2yPDA1uMknXRELJ%2BqVdgsnXtEeBifJ1cYENwMNuzferr471GlC74hxX2ZviA6YdPxvOkr6oEeRhZXwfDabKncZuwl4dP99%2FA9t2O7Xbi3XQgv%2BLksuUrBe6MjeZXOE&X-Amz-Signature=e21c6ff5983087653a421a2f5874c07febb77218c144d1f3dfb3913ab2cd9c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIS2FFJM%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCDX1m6MmKh0UWpZwjIlKIuehlKgGckyzOTWeOCWusgNAIgavAWuZAcf0EMkTbbt7rE%2BPnUbc1xRTHMbQAF3Xockdwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDPFzJc4bCOUrxwI5vSrcA9jZkeXzxGZZFzzycHrqylPhyTxpAnPRTLD73YnuihrdOHMGI3RW1ABuMxlRgYx3OuUrw1nCn1rtOFo2%2FgRQA%2FzrXwExpLUIWynXlWTjeahu1ya0y78btTHM1DdKBTuCwNAiqk951W%2Bn%2Fd8uM%2FNcqAV%2Bd2b%2BlBwNILWOFPI6Gdil58YzHTX2GbBngxsrf%2Fv6BuFWiwCrJsdEHaat9XHdYzRnoS2OlPbO6ilSTzF3nPcfQwdgIDPbnBbjDKmSFU64ntxyev6STe30gp31sUS6XrzglhweBELTmSsh7l7xG7%2F37EFpDKXn2nDhEZ%2B76n392peeG8C1tCEjkFxfhc8VB0TG55dLXfRn3eb5byR6aqeUrSnfw3tmqd%2BWAi80lela756iCq5XCyonAJlKMdn1v5m3xK%2BBG1D3HtjwNHgF43nCWm1D%2FC0LoftRO6EO9P21bIHJTwOry5XSDcwgQjZHtLhtu8LQd31Cj72Vq35CBfvBGt%2FWFC29IwUrOPVbF5LcIBviFl7AsowNKiP6eaMbpqDnmfN02hM28F1svdoIG2cdzF%2F9Hyahg8trYVqRq%2Fj7%2BURKaw0i2RIgDZVkWBduTvmkMf11ZO0Lms9jmQ%2B5yvn5sZXLGPWq6DxAbr92MLK5q8cGOqUBgr%2BCufElxX4xPCOsCDlfi5TEHJxDzvyLQJmqRLZlOr8yRSYXK1cneHh1Sq9iCjzJc5z7WB%2BDUSTOFdZSQkiXlcNDUTGZ2CV3UE662F0nGq5EuqjWmhVjayUSE4t9tTPeeBilQ4tG7S9LeqXES%2BHs%2FKUsyPYqoce0ubKkHspcahy2VcbZUcit%2BH%2Fqe3kSTqUPXp%2FLBZdRrM6L170ZQ9RsNi9FXc%2BZ&X-Amz-Signature=c22d93c07d4f804153951d14b4f83591736943269261970a32ff41456f824085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
