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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYX73CUR%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7PN3YJyjSOOtKEshylATpC7ySinq6o2%2BXZETiiH%2BG%2BAIgNMuOH3ffX7o0vBtHVovm9IJhWGIP0jJfTnBzq0WFp0gqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzGPHjGzgi14k8URSrcA3VK7rHhLPdkZLwsRzLeNGhjrZjPkDcmz6PPCPH4tBECAD%2FmiXeSRJUYQy6WR4ETwhGTHWMijPubi68plS228Ej3I0cCVxSQr2o0bomAXt%2FaEBQ6XWOt5xDaXbYvtW3%2BbjZku1kFkEQ1Flngz0DHSAneCk0HPL%2F0nCO0hC%2FRCqduyW1jGHxvR8AuhsphrcFtr6CAKZvJ4J8nYeEupLkWYP%2Be%2BgOirAOkgSNK%2BW6OJgL34wPsR4dVi%2Bi9yvR1S7SGmSh%2BIS7%2BWWHPJ1Ho0BsDKBVyICf6TEKGV5gWzZS4Z720kTyWpLJjD1pVdAPwOQn8itFhu6E%2F5UcRe3GSCe6l4U8ou0A7iuULTuHttFiLgCfgRcELYaFyqwGqD4DsReBRxvx%2Fwl6waRVsp4yLRhXGf0JYXn98c6TNfBM%2Bz2XvbpGQOlStasTC7CBjhFLqKzdC7GgdaHFZe04k22la%2BLYATaN5H9VXJuLVbBijbobyBGif2Lt%2F2Fdy0tg94TT87y7hyPCxLiSPFcDFzELzQOdjgsdKGrrYCGUVul6fTHzfIDj74egqQbX6gZGDDuJIPy3CY1lnAvbV672bd5Oro7whljYttVrh3ulglr2tkudH4N27EjO6D2h2Rc9oqR3JMIKE68EGOqUBLAlWhHNbN9WuvjcNTGgZG0m7fcdRzEHojvBj1F5%2BycZiIR8P1NdxOVryIa%2FfsHECzAayj7SWGYaH2%2FAEkKju4qUx0pxPyShyRP7AGljAbCSXyV8xEGfRZmi%2FZa638OoaXUaJ78jrUQ1QRN5OqWdqF2Usw2N1vS0ocpIWs%2F3%2BY2JLhjEb%2Fp4t3S6ilgmsN2Qn9tW5DyhOcUd1IIJdjk1cKkyfNyFR&X-Amz-Signature=17777c440c3d8da8615c6dd995c887a82dd5777737bfed29f7d96aa04c3f16b8&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVI7YIP%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYPqseIfgf36lNCJa2QYVpdeko6YhuvdBFcpTn6FMoQQIgEPkL59b4wdFOphNQD1VJQnV2RPelRLM5kYqBif9TPKsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJZXPR02R8EDL98ESrcAxrtmWg7LI7P2KX3WToeE9dM%2FTnIk97bIdgTEzyKkJvWPph1D%2BPuLItqurJpw3ni7Xz9kAL58JPzDkdSvqYqCUWcx5CR%2BhXDNWGmqD5Gz7thEv4nDn8j3qt2u407QwBhIq%2BN3u5Pdje9EfHnupQxnz%2BZ4wW6ITsM%2BygNN56YH9gCFPgQiK%2FRfSVUE%2BxHUARDVQvqUZMcVsWhS8wunAcoQIm3mtsA2pz%2BGoOLVvCllRv5kuzKXET0PDpC1mTjjhm16X%2BMA4he%2BQoOM2lAwjiEM4WOLULOWS47BS%2FSv0UZfSqcJi3JVvA6HzzIgKdpDTQlotfyL%2BBKSYjb%2FACTbvx2d0FAXIEZ%2B748UtrQOAoKJ57iOWo3wEyVGEmTO5FquwOOj%2FoBtAW53TeiI55DUQBYlKfmAt%2BqgA63Caguxz2iqdGCGHRha4qPa1sqGHyyFImSMi0W1UjFJ36Od7eSzXGq80V5buE3n%2FxF5uy0j4Jq4vCGq4fe0XdtUHJQQi5D3ZFTxNkHZ1NXcVMncvGsJ7vlavQBYuIZyrvk70R%2BtCF6UXx%2BvxxRFwxkXVTfmgdbuU8ceqNRTV8R49eBZA9MzzhO1xHxxWeFtWdZwR3WykAWniAEtujkqOyh6sJKyr1KMKOE68EGOqUBQc4NLtiFZHBzBcWG6ISGL1WH%2BB2olOpXNiCrFfSjJp3gIQG0VjkH6KCYPWqXlrspHZ40ZV8apJKQRSvZ5ETdN7oQLH6OuGct%2FDx1TuUZrLgjvHY5oSfKytPnYj4%2FJehhp6e4uTsziZDqxQYenF38L8cKZrZ1T6zErNhupH6efsGzHLBBdltzquM2NFlhPvIWKprZgWMWJat7dlWjJY96eNPZoDrQ&X-Amz-Signature=75fddb286a3ca90bc9d4396433cfdeb57a322d15b3c2a4915ef4669ae56cd2b1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
