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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665665LUZZ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDvWd6P6NNhkEC29fCsdZnmEYXYo7c8fTH3TvLuDUB3PgIhAPo4VhybjEYHTk%2Fu3fdeqD%2BBBZOlnhlEyG4IVYe8JilMKv8DCHQQABoMNjM3NDIzMTgzODA1IgwFG95VPTXYg24rDNIq3APr9ZoYjQ0NjeVqO1AA6hMHuKv1ui%2BsWL%2FzOe7z8pfuld1wY47rfGYKln6pVJWLWzA7dMllkTsAT7%2FJ7N4MBczbCOuVfrOLUyJXHDjO1RfmMuAlZefdB8SeEjIvfFD9tZygPOEvdmjf9Qja0cmBs0p0dp7UVa6fmasT9FgyGVuAywYxdsGTVaQiZMYQ1Eyx17SkmmRhU0XR3pHAOxSvuRqHgGbkJBl%2FdSuINZaU1sDDyQEshlkhryxkaqM1GRyL6KPeh4N35DWmskxQFUSXwCBownuvrKoFQu7ANOnV%2BYtHFTm4kC3%2Be9ZWXB8l1uFo1%2BAkACZN%2BMxXbST%2FW9dUstJ9TZhXaT2pixTTe4mQ%2F7z0Zk52HXI2PGCtV5rq3EI%2Bo3wOVzVV57G0fBaweFo0F%2FXDOG87Hcq4E27XQmalIsxccFc%2FwLV6bbpOyaOHfcr%2FAVSXlQvJ9XS5fyg1baalYOKxY0eD6aQRlOwqziJNopz1QGlyw94FuKiuySerZD2s9ifgqyMkTWCDiJ9rcPrP2DN3tsaQOl4QFQ5pF9G0XFkE%2FKoPWouobLmkeYkzF5rZ5bm3dyZb7i%2BG3mwXNRpfb7hJSav18oDDGcXk75vIhWKUuv44uJQs19grFiku6zCv%2FvnCBjqkAVqisVyMPqGeLYw9hrkaDoGlubSro1%2Bb5TqHI6RNbsQackhhDyviwUN9bHVfRpb6UVO72lcRxd9Na1tBYnfdxlxlWtblV3uvddWvT6fGD%2F2SA6J5TCFmsMS6WRQ0YgGG%2FO5iy1A6qbYXDlwJ6xc%2BmhKY47pJAhj%2BlNFYwM5bXBXuxoUUzwM6N5fv3pq2XpbHrnfWf1npJHI9%2FoY75PgjYgnK5sL0&X-Amz-Signature=27bc5fe7624b26a4ed36f15dab0f08908c52af973b8a0be8ebb5829c10faceaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYOQVNYO%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDsCPDeKnxU0uIsmnjGkX1gRb0d0f%2B%2FfG6k8BkAliddGgIgKLThCQwko94uxNGQTRMhNMM69e5bfFvAgDAfvdASoMYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDDI06LNUqAbqU4j%2BoircA5x1Jk2CNXH8OD%2B3Oi%2BEqb1%2FCkQjwtW4FEOs8OXtSdfq3my2y2bglpwG5pGRhqLD9k9NdsrgG0zo8wW7Q1ACAUU1fWFj9FVWnmOeue104DWcv4OIJHLgwqMmLynWT%2BO6%2FBTEl6J0EOS1atJV5ldL1p%2B6B5UVPkM%2Fjq85WL%2FlDBAcqfaHtWQc8yMYkRPvuGOGdnAvuWt7r%2FBpcw7RzGh0adztAgIj3XXneJoi3b1MlCmWIm1kA05YAJCKojPIvxc6kT9ZY5DUBSoUNn%2FPn3qc36tsMcumM8sSdKbcTmqliF0QoeJFLZlpM3vvpByonXgOp2jKJmJH95Yam%2F3bmFGh4udf4A2l0oR8233WqX2afXlYJpPvxhR%2FvQ3u7oJ3ShJB4AoVSX8v%2F%2F8uHLslNUWKkoGQ8x5iZK80jV9a7jvBN8KeC1RBbaa0ooLnqYLMk3PEpZpqTt4ZY71ImxapgapAUYXJOZ8pCdXpPytJ6D8vJgqVcGBlixLjqVizrjRMFbSgC6f90hNdeO%2B2JI1oDMj%2FCDl0HFT11%2BJM5ZHgUDgFWuZreQg8LXE%2BsfC760bDof18RfzeMn8qfUUL4QDWaaHAynGNGTpweUXHuvcCTAc%2Fl%2F2WV6ydGEJqG7CJm9pGMOj%2B%2BcIGOqUBw0i90OocDXvC9vKhuKGkkO%2F0GKs0w3wP0bx4aioAlofN%2BdqoDjnsDhkKlf5DofLxozj8%2F7DH6IrZD7trhpzY2O5Il473sTp9DPfduC3bvC9ts4fWdol%2F5WxdVdMpbTW1bcSerAqposXNxaG0GTiHRECC60eMfBlQIQZgnlcAxBaltliTJJLaKvfBRxUUjqCxXVC1XNOCf%2B9XBXrtfvIhIUpUbbRp&X-Amz-Signature=0acd9a917b6d6e7e436dbfe8ea76d9ed2fa72c12ce3d068fe39095429dc70625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
