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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDOWRRDH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDljSe8iAAXzADPCPn2S%2BYNq0LZotwTYihQQEL7ry8hUgIgWxmYTtHy%2FHGhUWuCQ96yIvYM%2FzanW29%2Fsdg2n3HbB2kq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEpDwSuRME6Nulv4dSrcAxO7y0DIOWfqDO3vDx9DJzbYR%2FheijhJEK%2BrG2IrVbrS0tr5xHAUhruDCopBtizba%2BumQl57G8RPYh07ehC10Td5UPLY3VI3Z8wpIePcrRHQ8R8rGxAdUSucm%2FMtYZv6G4UgDk7XA%2FS%2BwlxcAw90WO%2Bsfvj73VnPoOxGkqGlYuLOuM2vlt3IEOyX3m3NGsbAUi6wj%2BjDyOAEipc%2FvXBtWOYPd2IEnLFpjI3k%2F4bz78262cLUiifPqk9ZFUhYqIY7B1hytgphxBH%2Bsi%2Bbbc%2FM3JZdLnuzdOxD6HVhhhLozgUPmS%2FifWHLB4ZD55Z4Bl6pQDa8uhq%2B41wuH6grqyjyzRAiGT65zRiStN6TWD7QUSTvTBeyf1mWgPdwniEM1eV8c2sy97g1mFI8FypTAmJLN4XNjj0hrjgwLMC4aa3F6I8esyA72SUmpTPaZn%2Fbs1r4G2vfTKhCqQJqRhO0H0n6w9xvaJeqsdmqOqz4zMUM2lBZSjNMoomBQ4rfoC0hYNQcY3PvLntX1jmbA%2BeWcQcYssr6kSccIfhkfDa4fYY2xzagtnl1n%2FE2gdJAQItkuLCyOzhiprV337AjHhvmlneNEZ1fOZ%2BU4D%2FqZwFZayI31iUBNFb1uyUlx9%2B88dwkMMCMmL0GOqUBMoZcNZkxs9OKiUivrrHR89VTwzxN4FLXsQl4MBXmttmtA4jQoe3hOhMq%2FErFTzgdPxR85Clu5b3YF7bj8JZHauZPF9pdBdqWFVA7hnI8kboVELMR78u%2BPQlCsR4rznjxPKMxqZF28Bb%2FimGXZxWaBYCE5iDIDTjvdM5jARZ8aGzkBIiaGeVWfIJliuQzkATzEffPWMXgF5pVV0028bjVUY21OD2S&X-Amz-Signature=cdc1a2aa2dae3cca4d183f4cbfd4de416c82659229e74b68f60f9c0399daa5fa&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTFSGMO4%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIBIyyRHVLUs%2BfN8YzO0VTUKXLW4u2RlRHJPKfI%2FsT3nXAiAOV1w3%2FC4PCKFruMR%2BMTeTNv8%2BNF3qXmOhrsFtkX9z6Sr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMQJdgrycBzSCnJV%2FjKtwDPLpOYNexCqW7oNsfuM0ctF8PCH7iTAeLu1rwEXZMVsE0tR%2B8PWE%2BfOMRq1y7uqaZv%2By6MZQQotl48FU4RnrafA87oWHaq4mPcBkpWjGg9O9HlbO6F6fHUXj4aOq0eGQiuhNFmrCBQyT5od9tiOAEc4tZuFNMmGt9zZta8FdYwZPteg7BYDy7Zl302M7T2lEq2EEo4iLUAVZk%2BrKes%2FCCfr1uwsob7JGuW0yNQII7MoKzMePjBXEdNO7UKPe9FWEoaNCz18McV5sDo18jO0MG3te%2BT0IeS1%2BQCH9mV5LhUWUXaaWVxb4Nxd6MVr5mS0g7qdQ1%2Bkh7CvA7Wk14TecBCeNagXnh603QhtFm3w3GM0%2FC%2BrB5tpJyXiBVzPdqiU7cOPE8jI3tipBxecDkGsIx5s18SwaCDRjl%2Fib1cFyUoOmNEZ4taHvBx%2Bd59BoZlFzjygAyD0t3JD2aGZj2lR%2FdT%2Fnql5ikFKkWH9jc4tN8X2rINJgZfhT7H%2BEJHrl1Alotw6yxYVxy8wC7Tx3%2BprYDAW3oXc5pgAbOK3CJ1OsLbPGTMlyjG4zX19kwmAzBSVCEQYKyRyKlYKeWRRbVXxczc9inRc%2BRFj9KlK0bATgLpEx6lDNd0ETp1zndeJkwx4yYvQY6pgHZggXHTBd%2BTANkN8fvoScDxLcJ8STuJQoYo0L2RVamRcP9d0ucAxcqtrzfoxrynyVs2B7kZ1E%2BptQubyoPK1D%2BFgDl5tmC97fe0H7rJSdpSDjJYP1p%2BbD%2FqUOUBxkaWga7xzqeG5WKYtqyZXQJ1ppwehSRrXDQo0%2FjdJUo6lHuKMb4rEU8IE%2Bf4447sBk9hNZc9EOIuNcSV9gXxz%2FxKogStHd%2BL4OB&X-Amz-Signature=0e39407365acef6693144bbfe98ec715339b7f08046a0243f05115e4d93bac3d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
