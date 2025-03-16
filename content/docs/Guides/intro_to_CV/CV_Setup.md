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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5SPFF74%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmuFOZZ3zgz%2BB0hG9AJt%2FbnWMbguK9rJTxtyBWoaPN0AiEAytaPfpDXZF%2BYptZX0HN4msDh3OikNy9M0KzYO58oEAgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDE8EaPWVRpHk9D8w%2FyrcA%2BQhEcelU3g0GKYrRZkawVp42PlnPYM91Q94BYzhwDGgsZT0LzAuwzYle%2FS83LULJfU8mzhPkF8gI0S7hrnTyE%2Fk2HfU8cFmBrqOqMq9MY2%2BqO5yuqXDpvQcCr51k%2FPjYQ%2FZJjEVVGAu2mA9vrtdwqQIsaS4YZ6%2FP2UBGUHJYOfT5KkqXCtKUpu2iFD6stXv4mtD69GhZOHslnXs6Y9FoGbyjzI9f%2BWLVsDSgJcskwSjUqs%2Bmqs8VlE4pUR0PDw3Hc9YEylZt3xbeejd%2B7Z%2BC92IF6TusGHGzkfa4kYz5YJBrBxv3ZT%2FtAr2%2BMuFcIGWtCeI1GlIFPiY2zftveW3QAkxmQweIepPbqoriCdyfq%2BcebRgwFEtWVgXKUValGUSuuDZKEsV9sZobJKkkKP8xSB0gySpxMQZyjwodemujkGPAVqwRM92D89loTDGObztC5%2Fdzakgu9HevPfR11Sp3FJSMaVNwGTIQbzqDMpHuKjHMhXkctNmqKNOfuIlPr8qSneQ%2FyNXf6oIFq%2BzWnDHOColfUqBospu%2FpWQJDQlEh8H%2FTCco9E4q7mgklcBJkjaaaLBWgsutQaPUe3EvZZZ5Y9V%2BIZNHl46xe8NCuRTlCx5hr5zVZpWIgNYnKOjMNyB2L4GOqUB%2BjHAfXi0upfWKCBqWV5M3CeyJIgtQba6OwOoLVeUf95LG%2BNjl0aL0nomokrPFeqjGkfeNhh3%2F7oxrRtL%2F4%2F4iwqsQahyaTWHnwPTP0FkiGY1lYVT0S%2Bz2l3UTVcTmzu5RVge%2BAs%2BxGySMpgIhFBK%2F%2B7UVN72lsh3H29oT1wE4IcKr4ncspT07ZHhDV9N14gxo41pL8sB1Cn%2B7UQcfGIgLe2F6%2F9I&X-Amz-Signature=6d2383c77cfdbb0c2212cdd61688d87443941cff745137a3165e8a2e5e033b4b&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIOSUWA7%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChvQsGYRzuIzaenXYes73OMlWzVXy9d%2FVchHuBjdFAPgIhAKrCwMiFT7EFFEbleinTnL1ceeT1ROrb4aboOVBDC2ikKv8DCCAQABoMNjM3NDIzMTgzODA1IgyCdco9sbkCBFZ4pLUq3APB2tL9iiMO4eNKFG%2FNFCuwVq9cHXs46bCG8cZ23dDl7%2FJPg7p5bQXoR%2BDBIkJnOpYMOWKlPqqNJKLk6cHBwSU2KQ5Vg37npsYdNSlbXrUtVIOvYlCrvX%2FSO9t8RAQySZdK0Zg9rDhcNvGdzytM1NhwwfQHkYpKaifyrprUsfpy1UL3d94wRCf0wdcwsN5tHPvap5dcrbZBi0bqZycmiUEp2uysm7yRusa%2Fcnn53ZF8ElDiGVEDzq%2BusaJDnbCrJw1Zlu%2BwuEHjUklZDRe9sHAQwyi4mbglNbEuj%2BgH8rFmwNC2PBnEMckUKqm1yZ2X79lgxnerhDYa7Pq%2BHLjYYKBeL5W5NjNvZ2WEEOuJ6CZwN7EFQxAQNpHrUHMhQzleAU1%2BbL1CGqqB2txwvbxqbjgI4OZQWdMUKRvJjdltlsri5y2nrW98X6IR1lZJAwitAst%2F%2FmXJTqSoy797gJ9ZSoAqoLHO47WVsygSYMsMUOA0KiscJO5woCezcJPGlQVPSctqMo9DLv5FpBK59vHDAlK43KffSbSTtBBja6ySp0sYx1dV35JKJzRZCBJ6Fxd9CToTpB%2FlfsZUpNfLMwz8BDfUpoiESq0Web0OBa%2Ff35XqqEJp%2BmTZqePBjVI15TCBgti%2BBjqkAUPQSCGY%2BmIb3gjsaXY%2Bdks0xdowLIZbJNtrcf7meVuUnnkjTMJU3neSYV8RI9Xza8ic5po4ZRMCBgOmfqtmeC%2BSukukF4oCron7OTSz8%2Fww08F%2FCzrOTXp%2BDX1dXeWgYjxGNoYcd9bMgn2c%2BjDxo%2FNHK5txPqdfc9s6B1OOIlB9G2AjiZNNDYE%2BzJDheYv7oZ3PWFG448tUBEpACndEy7qgy%2B9A&X-Amz-Signature=8c02583919c313664782ca0ed5eaaa48f2b97079accdcfc6d5ae4ad917fc3eb2&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
