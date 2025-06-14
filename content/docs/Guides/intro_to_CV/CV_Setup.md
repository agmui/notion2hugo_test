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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSOJJBSB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIDeQZcZY33fCBplGni88p0jrLs6QvxBEiyJy%2B9ohl4gJAiAc0UhZKFtBd8o0%2BJ2J2a4U8lwMD9zO8qsi8spWi%2B4CTCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMSljtFfdv7g85PDtZKtwDlN5EipP1VTpCdiYFZYxUQqtarUzbuIlsZpABCIih4jWO95z%2B49dT%2FHXOqSiR03q1W5cC8daHfGorIqTxvzh44zHHn9EY%2BcPQll9ao7CeJtvvu%2FzcMZZqzIBo1e%2B7VnzP6B0UzMAf%2FCXpiLj%2FqF981HXUgTWw3FJgZSl%2Btvp%2BT6CmSI%2FHUbthTevu7Iq2yQdaumj3WI6sgW1p%2FPvnDUjhjjqUNK5nus4ZYRzrWmvstf%2BCQgjV5XrYzCGNqgsdijyO0hgLCvc4kCIszVdsEjMzhdyaEPCbqqGrijwh6N6bfjPIU%2Bpb0uVKt8a6JbTAyUG%2BPYb5%2FKCuMX3fjdj8uhMUlq7ioTa253ylc8Fjc0Ad54fSlmcUlp6jno73x8DMntuqw47VNDN47ZiqwYM0GSlI9LSYRfwC1kP6TH2zK%2FNy8tqw87FL%2BjNPoE%2F3MON7FmmR%2BrQgp35HPJUyx6dxOExibc7qAv9xt7ML0ztPTuYAtaCNJAtNNTpEmQW7dcdcnovZYl%2BaN3PxrC1LGVvwVQf%2F35xMQg2knXnCkK9q%2Fp4xQJ5upt4BYtmZRucdSFbzeW4nOl2vBDI3j7uQSZFD2vWR5bf34B%2FoeealawVHw7EEALkkg7l5TMFOt1Vyh0ww2KS3wgY6pgEI%2FbNPUEz7GnOhQO9hSkI6ITtgU6QEs8Icux%2Fs97liInA%2BBZG9rILBUwG7Tqt98qxSQBB9H%2FY5Wgqcx0Kz%2FHHop3SeIxTBfz72acWAJmwmHzDEh8bB7eiSdDIK%2B17DvrDDoZHsGledNDGeJnjLzuLSCTNugjHX4Rvu3AcY0hPjMvc4UoKxNAjw9pp4DT4IWPksP9x3EFUrmP5%2BbJK%2BWt1juMF74fz%2F&X-Amz-Signature=99375177316839432e09407941629f368e08d8a70c181d481784e6337b686063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVN2VY7%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC8mJLNvH0G%2FfDYFJjFuCbwM7UnqBcqPT%2FIvS%2FAivZ7wQIhAPlT2hxIae64jUMreSafauMR7h4Dkh2vweWPVFb7kUNMKv8DCDUQABoMNjM3NDIzMTgzODA1Igwv5t16a7OXITcf7s8q3APGUN1TqNlEu4texnPvEjcFTcqYEeM7i5JQ11td2cixH8dPUCsTwVkgeW1AztaurkKVHoWrS2z8BIAEKc9TyMI%2FvIFDU4CnQ6icgRiOI6w3DxH17oOFacCdmIUZfNGU7BFWZTMXVagse4cAE2FesuuvTpLuArQVQtu4e5xjujElmSR0WYEPgTf29QWa29WMiEDsW6GEiPC5VYJ42%2FP4OxPtb9FUxh6rdCet8krtKqBZKbpS1Neuua7FV2VnBk1pgkVDTNpeZkt3pbW7cYup2FoiVm7aBLCIGZaan8eAT%2BexMGWE%2FqXLPpKVbZWeCRmD1KyiZBpS9GzTIGQyAeemksfrFKmsCQxflAviHWvrFFwgEn9pcI5hnI7yMnAMNGw7oxrnzCQwaQt%2F1Ud9zVpm%2BvdgPdcE0JFcA3sAkQ93ppZ3bqPwBlc2hlWgwcKdxRRhVuFHrwzF8m%2FP3xVftdm%2BwsUKU5YoYwjwVNSAAUw36Nl3QAhwSbhiuiYWUfkm7rdU4%2BufExn%2BMDuedx9lYTam0%2BEsfXJxur0siiFmlo6IUfOIh%2F0OESmD2yMeEo%2B06BBHsMknzhGZ1malLYbSLWJoFhK18Ud%2BN4oKdWnXE%2FwBiaFtcBAHwup699q7EdfyYTCkpLfCBjqkAVJh6arSxZ7NkXvFwLwwNNihaLh1lRoVf%2B3KWfQ9fNRlArUjiOBUNTTAFQ5zgNQKEyC20XwPvDbC4Nd22BjZPfaoJRko6duBDrnbivCiiFB%2FqsvjerLsJBjplN%2FS3Wdn0bFERZySjK%2BVhCJSeshBYUQtsZsko%2FapTTbPMNcwx8aiIHJfwvG9CcnL3bcmsOuYi%2BUbdueOQ1lxuNpkBp4rxWI9QPRc&X-Amz-Signature=5ba3761b324ddc5c64a812aafef036b2995b7fcf4c2139cb20ecf863fecea8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
