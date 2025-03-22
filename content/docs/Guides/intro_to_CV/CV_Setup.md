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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFIEUSE%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCU2uek0Jdr6ZkWzChE60OLGijAhojVNmiKdyPe7I2huQIhAMtB2%2FPWMzhFZA8LVbKRFT87j6N4jCEi3caQCWae7RT%2BKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAEpXD3zu%2B9FSP9E4q3APnjO8yX3tBE6fcc%2BtO%2FrwwALC6fsRsqiCXsUmBuArFXIEbHb4v36sQ4%2BMqcWYTg8bRMFmKszie7x6cSUIMcN1hunK5OYRTbkYli2JGlyRagCjMqBCFgEI7R80LikooqBh0Hy8aPUg0GxHJljh0XfaW2ANzbjCm446oqm8sdsCkj24VbrDoMLvVViGozybkKG5AQjkxHmjUsPNSvzLlE%2F%2Fw4SjxDi1fqqsdH7BKtWS%2Bc629lg3tvLTvtiAqVqFCI1rExJ%2BWyK427Zm7aDqFmblB5v6tVcCGz6cb4HdQ1o9dZ9XHzaimT8by%2BPhMkliL6s8YiYZ1mUtlyTVqOEAJptN8TOcrrwZNW656XCbTvR6YnmDIkHgqo2snioh%2BjciCOpu2bdVE1aArE85oTJNDQsEfbMTrtSWeCRKPooAqltXbKCg3gjpWEM7RioTIeT4n0q2aVxD%2BxYYswZDQvOlo4hHl9XjC9q%2BZjdVK5ouvaDvCsIHgQqYYDySQnLz4fzb%2FcqLQjfSS9SMVlBjZ1J35meY6nJ%2FRokDP%2Frm8%2FT31kHGbW8i6yQ1YZS46qwYeC9XhXg4j55UhIimLFy%2FvP711AFfTBdLATw6uP9jay0acfPShiYUkCsaFIQKENr6%2BFDD%2F9fq%2BBjqkAS%2Fwb0nlpLj0GnW8XploBOsXCybOdP1QMGs9RDV7gT9i2jvdnCU4YpGhW0X91wXhbrae%2BJ12aGtydT1tk%2FQULuEr4Ahr0lT3qKlIbY9OirVAIl3NcgL9I30JeIbuetCWXxIUuTtnJxJwh0Xw%2F1LxBYJx8jK7552yfhYe%2FjmnfUh5d5HqmHWEUqdsPCtUD0aXX%2BgDP7XQ68PTSoWHTf5eqybJzqEg&X-Amz-Signature=140ce6148912330767be556c90c0e7cb682aaad58cc0a10b88e1c5f9e25a5dc8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647FEHWJQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIAtTw2spIaJ1oMNLJSBjg2v4NwaMzMC50%2B5ni0DX4RWuAiAZJtj7WirtBbtc2ETUzKXaLdPiBVYeK0rOYUT7J8PfiyqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA31eYcZBDG2jqrxWKtwDrpu7QkS4AW3SZmcj4jQJpYNmrUW0VsxwvDdUktJoEjNCVYeBLa1s4RTHePzXwKyXUmR3DWebvdXAOExtRE9fdu3zUmNLspakKU19Rh5tBgcz1zfnLbLbRJJ5urcSozoGp8YwfqxCmzeExu7c6uq%2FIRn3xNaCMQS7BydYAd3oCMmFflcjHG%2FjReab4Rx4EiCDSNR%2Be%2BncPlugn94FV6a6tIpeYJn65L8cUQQ%2BCMUclKX8uNDuxSVnNqqpEZnylsC43VBya2byQ4akA7IYMlnVlaOF1%2Ft4mJskj4CW1MHeU8zsvySC%2FvsmQr6BMLFNr9JrpXvgNmzFIPhkSYJBaQjvmfeguFpvhPBqQ4TwY3s%2BmS6mEDC9OMUw40zyQD6BpvR2zpRx2SrImCI4%2F4w98qdVVBOja6YgMlgPE%2FlFAQDu5DtB%2FU66L3KvoiLZtb1PIFA1ZF2DoJAwRgGig55MT6F2yucGvMsIFe1%2FtUMlgaIBM9mbEQ19ITFomkStBOkqcj%2BDPIhKdYexuG4gfiYXYY014w9uWT7CM%2FqcLFVaklr1uIHoOyjfwBmdVwa464XzKhJN1SoJQfoMVp3icoHjxDju4cJTYClL%2FjpFL1vYvy%2BDQDiHQML%2FjFWGfn5R8xwwt%2Fb6vgY6pgHXKCwlfZg7szDK%2Buco5eA9GTHcr%2FIUPTAcd0h%2FcTWQfL4HBnEZBir5mjr%2BmIIFWcosW4XjrfRUrlbt%2BbcM%2BOL5AdvSxnTzTWXz6KkDoiTKI7sGBExWYZFZDFOgbvkuZ0CVIoG1s0MHT5LfTqRY15UZC%2BLrF7G2M8DQo%2FP9fcQ83dHIppn5TcPd5%2FTfTf4Uni6qyamKnvrk8%2BwdRuMQtCV1XnYA2HMu&X-Amz-Signature=0bf061e0a2e6ed253ea5307a978c24628e4786b3813013165fe55f153eb248df&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
