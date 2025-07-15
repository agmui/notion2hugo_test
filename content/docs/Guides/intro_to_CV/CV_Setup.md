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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3YGPGHN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCAvNq7uKezZAkhiVT0DL9HYXCc78mc%2FQsRHNoD8DfM7AIhAKisLulD%2FvaoZWHtMsxjguTo1yOvP3WUdBQYZqUyl%2FfVKv8DCEIQABoMNjM3NDIzMTgzODA1IgwGvt3y%2BoIVfhn7VAEq3APswqgtcvLUlcRNAaFpEBu9OzCRgEqYsLow8tgCH%2BS5q9UyFmidDHKOFUL3WgRGb4L8JvzcFI8EGrL%2FbXGZnsrde6%2FAXhwx3KJVug4tMiSOzFXqRR33CnTjOLDUDZ9rCUSJa1x4q3vKjEI1E55WFEa6LRcsnElHEO6614cOqdCoigiN4xO4m1Xd9Zhk9IbcCS1CM3aZkIq1AwEh11cgfvyRb4bkn1V21%2FUhCkBwmudxEwl534JOtwM2zkdjR7FyeDJQWJbsfB%2BgVsfeZb3kqEEiVGYXxf0xRp6tPcGAcrU92YDedUZWQFvcTizeBkyEkKlLp40w%2B9Nln%2BVPuL5l9x585VfZhppka3Ev%2BSlE%2BKUzAB%2BV5XvNTR%2BKLnBAJaFc1OB8Wz2g3fMJIhBqF0LfOw2%2FgO0%2BaWi%2FUqRKP0cR0aJyr%2B7%2FFfuVPcDZyJHdtttweIJbzDujPoTSGKmugQhsK59MZR76odkbg%2FKOna%2FN%2FPf7WdHdSXcTG%2FU3T7FhejZbI3cms24nSVTvZklqzXbPRnGbQYbyaq8XFI5t6dchOOet0jjv353lMUjGWr4i6TEJRamGgV8xJHhNjdKqdviyLpenuMOvi8e2KItK%2FLY04NRsf4%2BYNxMyX8W0TnNEwDC1sNjDBjqkATJlvMMKBBCGUokCXikkxu9nSHT2OeRtzHDfs7jrktNlq%2BnyZ2Dh3e0ZJLdAh2Uy8rnlVjmjCgZ0CLuCti6nTHKMrXVyRzz8KSoUPcd2o6TGhI4Y4147OcR%2B1roemnGb0TgF45KDm2Li3fStWVYrzfY7bFQfCECOWYcB1B7nXTpsBOsDzjY8EwvWpqmEdniZmTHHCrXlRjMwWqPCZEraG61mvhh0&X-Amz-Signature=89aba5669de7ab35afd81f717c956d1b11d168790e06edce368600e0ac5ed3b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPK2J7HY%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIFIBN3R7aL3gsedJG3%2BDio5e27yiYRx2nnJJxLoStIEmAiB5KqBoOMsAw1JAQI9xH96B1moomgfb7iz0vmYttR0h6Sr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMi59h7S01m%2Bj2rA6JKtwDP%2BofwKjHuAlV9%2B%2F1TOfQKNbNn3RAGqE23KFgv7hFgWROK95sWN9qOjjmKThnDDrDMVQEsQkAEX0TGCY8jM0wuOaEiUzd1N2gxI3yxdfzPY8TG1ybJkdZiUOK3Q6Azo9Q1tWN617PHn7DpsHGUjRTPk38AUgFRSjZRUNtXYrTAXyk%2BVs3XGq61LMXoNmShkIvYnvjU1Ce9QY5QfObA8MFh8Ow2a9GNarYt%2BzURV8pPuxQr9oByYQ23v%2B8AgzcAfWJK33q84kO8KUowvwDIuR92FiZjr8wWKu5cFH6vFSn1c9w2L%2FEGLFGpmUUAf9%2BbvO7pT8xg4Sh%2BTs%2Bznh9dbxy9hjprW3J4yvHGvo8WC%2FkoLYV0O4fFx09sN3Bpu4jfN9ZospKD%2BvA82aCohF9xsBOHEv97piWg8FZPLA26q%2BFwRWLOyrhhYw0KbEooXwiJVLaHv3N8ffn5%2BsCVMgxTsWZfVjDX%2Fiux3bYpz6uGE84CcpLSZGcas5RQ7EGbuAr48wb3ZKikhQlneEMJzxkNEW3nU9qyay0Px7q3jjDdRUEBCLHJoK7WAerFB6GdbK%2BUzXHo4M2H01Bf%2FVaKEgFq4GpIn%2B4jvdLpt6OekqbJMdg5okSuBKtFEPAgKuiMWowprDYwwY6pgGZuSchZK3ElEwFGNndjZAuhStDdHLuRHXeeZ9vp7X72b2OQGAfws2a%2BsgrAtnx7%2BUeXF6aLb3IWdDT9QK3h%2F2%2FUa%2FtBx%2BEtCIfOMWwFSa882UkJ6nuXDYEu5g%2BK2znXr%2BBYUEOpA180AlUZAUaLJZMkz8YhEdOfKXc1%2BO6BESfxXN0%2B0lrqlhXVssPq6a2qUXkX2Cuo9JxnyTVhq8sK2xSd9odZJ%2B3&X-Amz-Signature=19a9e25a48f327b7045a3ae7d0f0f79779237ab83d1386d532a09dc8d9247d44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
