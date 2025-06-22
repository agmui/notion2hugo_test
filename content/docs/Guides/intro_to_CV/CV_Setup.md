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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGHSZHD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIGfPM0whG93w0ut3wxu1lBZ3%2FokmMxPHG06V4FBlJzF3AiEA%2BlqmW0hNqTRaPW%2B1RRSJGrEA6A1heFkzdcXEDa1jCpQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjK675BZzQOJVZJfyrcAybvGTjGJ5YUhXVqda%2F1wwtNn3%2B2i1twnvfxehfn4Hv8xohwK%2BQF05uV056zQPZQKL54a5icN4eDx6cUyaTuRbvR3iUviP%2FLR%2BTQ1AjAhFLnv62RvQowGqPrw83ZzNvmRCyGUbrUMeHqJy%2FjMGRAwcRt%2Bg2LEfwGNwFlZHruIQB8BlbNRGhlmj8FuqaG0%2BGeWbkZUW8Z9YLQ4vhlGDqIogQ0nHzhyCXIGPKs6WqdjQP45O63xIgHXn5l7OKCrL3MpNDDcHVYU8%2Fuh%2BKpmI%2B9vCn9310fRDqUOQKShEJPlfPK%2FyoO7T40nEkrAAwcMnLUBOC61Q8elQlUurFB0EYfUlGCoxqLsNRYfmzt3vUfBrSAx7vhFsk6%2FpiZEzKF8cV3LEKQqS3Z4eOlGYENNgiGN7XiYpBWdRBecnqInS%2BzM1D4zCyIZJKZsN3KmoilmybSIsP6bq%2BTQbNg88fwCjnUSefh1PVnYQsOGQZ66CVsKC%2FnHre9m5epkRsHKDejdP9cNGQ56ONjiA%2Bo2S2W0TE5iWJ6xRdlfx9OHgo2Y2xfcvocxl7WYENmNjkt6jzufuCU0DsdH%2FQnsg%2BTrs1NqKdPmaIvgezp%2BPWuaJqH6Cl43pkNS1LNAAenoxnH2f7TMIjy38IGOqUBlyfJoas4sPO9XRFs8X%2FdD6VhQuqwBGgvl3hy%2FNnpPQbS%2F3Kys4M3nNerVGFqIlJ91og7Eh2ZbxtWArf5K754KuuOzTp%2BV3%2Bb2%2FYiQHYad%2Bx0FNo15negxWgiDVzDUqECtjTr04fnabP5SDReYoGlYCQMg1kc0wh0FFC3Hvn7cOIV491WbtsQrXQ09pdKmfTylkvObhe03%2FMFBTRDm0fChvn1kLut&X-Amz-Signature=0129008fb397ff4a16db667fd1f4e418255dc3bdcd293eed301f68961b40ded6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7B2JMHA%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIBBRyz4o%2FfoW4XFPrCC27m9VmZ%2FT1AFugLep7P131M1ZAiArWTWxbLZOuju2vGpWZQeuIEfPIJSss%2FWKe1AnN3vqzCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRVnx2zbUIKbXaAnFKtwDqVwAFppIXjUEMN%2FYp%2FHJvKmN2H7ARy%2BlVuUhfE1w9knj%2F%2BgP23jksdq%2FosW68srr1v%2FYH1yqs4G%2FcO%2Bj3HGMXpYUUSmtWBSlHOgwZt7eRUM1SIsP2DglmIWkOMw5Zd62%2F%2FqZwFJBtHen05ZI5r65%2BKWmWoXad%2FAqT9jcuF3%2FnqcIDMhbLedmEYzNbufCRrvl7iybOZEzPQvpSBLZO3SAzJnqdhFtM9CTFxXII6EiPEs6S6CeQDYyHmj9Kj1uUObRNMH2wv8oNJpAnyfaw2%2FaAEfRGvjODX%2FnEhOEOKrLNcEWvvy9TSlW7WiWiXtobc8j9Q3GdG3fgWLiBmVkjXLnUfqTlTzwhHZyow1gUWJQLbNq%2Bwd0eAAVF%2FQZB9oImE4SFEU2zaULtEfrQAACiei193e4k9V9cO%2FqaL3e9pkEI3cnYx7bxXKgGPzbE%2BTq%2F5meRs2wIICkBqR3mwV%2BWXuicJqp16yXwe5vuAshTursD98pFeFavBg7ZqJGjJiy6DnWexc%2Ff%2BOzPbyCNMxSZz3fQy4JQdFwj01eZxBHO%2FLtyooR%2BK1Uv4HTWLnnz0B%2BPPtFToMP30rKSRaFSr0zfcVtBoUVFXOaKrKBu%2BOFVG4FVStLmNd43GtmZat0g6Iw4sDfwgY6pgHOTqMg8mQPth5VLxX7zRox2ftd6g%2FTnKSZ37KdsWcXqSy4aIOVR0ruDBRjjHlRz6MttAYB8uCTD3sbQuArfUHks0PC7zobZ3hReRlYFRSma9fCJysOqT5cjjmt074yYYaEm7TuvzTqtavbYICtwH7Z65skJLYanxyhXZz0v622Pe9uN0DRQ%2FPgBuXnJgD%2BuCrFysrQ4zNkAYpZB1%2F0gUqjTIBnfxBt&X-Amz-Signature=c71f29f8cb9ca79ced6320653af5675f07b465abd4973da2b59f6e60a6cf8b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
