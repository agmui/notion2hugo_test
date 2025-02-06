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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHFRC4XS%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFtoEhF6XIdzcffS2tIuVd%2Fr%2FULwxsuO3cnxJAAFCE33AiBP3DjhYQAUtqumyh5DB6y07ZYvPNMKWZeaT3i9NRystCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM0syVJiI%2FyBTOlZYZKtwDnxgwRQueHSAH1bv5rKWEAf9YX0huD9yNn5F7BYjqpUn092gX3ujlyi2PWYpYEkBZy1PFe23BrybcesMAhQDUyIQ16MZrQK0%2BkdTgfvzIWfBE9f9RAMK8AJ3oN5dvBVVj0UuNBxGsIOyWeEX8NGBrkDZsglLPCmB8k8zQ%2Fk6f9hzWX8ser2kTW%2FQatZ4P1khSr%2Fza9zkyUjNNeu8KoqvdmGKmih%2BBApDcHRzYgoMFr6w9k9zBJQwhcpsZnsa85bAMH%2BkX3bYsGaLWphLYQ6mHY0X9nhiFPopA3S2p3JLQPt41cfU7%2FifZXoGIr3QyI%2BDYYIrOhf5o1q7Ix8GpofrVR%2FnQPrcAV9GhGFSFXO1V%2FK4kuMfaAXl1gJeR11yARNIV7EzI24UInj2HtCHMLiyEn45m8HDwn8jp8OzmY2H7otTi0%2FZnsTjxFze5TRxuDFZHKBDiEj2f9heV2MuOVLer9grexNrcr%2FGiRxM7xepijoGWa4UMnsnm3hWR%2BzrIcsglIg5sc1BkzbnxFJ1ZvmrWrBnmgGVeTfOYOkJGATVAREvvuPYSss91lIgWTxhD8qnx6XWSi7%2FYLsV49kcvfZMCCt1V%2BbvPTXtBo%2BAM6qJxH%2FRHaEqZS0V2M%2BpOTJAwjtOTvQY6pgEB2RPAUuloDJH0z7pnINgClVmjETlg5BFw2XeYlSFky8cy4WYUAC0gn3U5kPA1vuaBNZxzT0Nh6RFsg8UJZ4cewJxQ%2BiP%2FsIVFfmAODev8OarLgq908ThrTuH5B%2B7M0TMYBOuRUeBR%2FQXdXh9ncLQR94dJA2nydwQZsQLu558xxhe7km7B6Jp%2BwXEm0SeXR%2B2z0k3E%2FnRlX5pXcz2NRwfVoxc1MTdH&X-Amz-Signature=0781386fd0360cf5668d88c70f96342acf7631dcd364242acb64f9ddfa4cae8a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MKGEQQF%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQD2%2B2PE%2FCdEO3AgcFx7kM3TQHuJTJXFVtq0dXLaHBrwBwIhAKtlgjxp4qefKbbMCXvQXHw4ac3D9SkKF9Ze6uXP7UXdKv8DCGIQABoMNjM3NDIzMTgzODA1IgzjvkRW7HVrAUHn93Mq3ANeQsBqVaHXG52CaPBVXlReaDqaM%2FmEr6NavOrxrzQYqZUGu1MZlRXyN4TtM4GEPnqIN3RhOAT6c6uy2ictMEArJJ6yamJ7fsIz1by4JBuU853Lim6JXlCGF7W3sZGpxlHAs0KLuNmASagMd1qYjZDZlMzuIkxBffCvcMcyoecVIlf35VSCYVLFJGm70BR6Q7GmC2oZgcODQGseRRUBp48InsHZMx48wP8gRVb%2F8%2FRIrHgbZx1TlohZy08G1e6Zot7ysF4Y4SGamgQfayxwKGnZ3WYtKvPoQg0ehUQxYF3f4864CfJHSyR%2F92Ql7w47rliCDxhtzSFKG%2FDw1IBLEiqjfitA%2BgfEiEnHXmp4KwFtx3jDdvMd%2Bkr2iKLudfpiLsNjeIvFKm7yQOGH5r3cX6wQZXkQc2DTJPESMKBrYQAHLzs89IpM%2FZZL%2FpLGF7byVlKShKFlWimBzj3%2FGNVl4mONXjhCRTHfN3EBqN92dqI4JO7xjh1DCJJledNwtHh0ESfI6xLCIr4jdOgIOkKBnChQMed08N8RezX2DRhU2xU1BUIKH73cHfMpqdfAHFHsmCXLOldlcY%2F7OY53zlVq5%2F4vMUEfQyi%2BscpiPbN4C7BI6p7x3xhwebclKMfhXjD30pO9BjqkAZ3NSm9TdproqQ9sejWflRExMNOVZBtE0PJUCws7B%2FHbvmaUWr9hQbszYKmWoSEmNODV5C3jfrpiFy19qHMxEnn7JuiEcHfrEU2recLjN2bVUt1Y4DMvz7sd1J5OitqGy%2Fn8RB29oZ2uH%2BLF0bU89e8Sy3PXgTQOAStDzUd09aBiXLC0fAJWkNcOdgWJupURYOavVRTDYPpijiLaK5gP%2F5h0s9AT&X-Amz-Signature=cab945a53212e689f672b81d245a37921276fd7a3d5c517fe7653f8ade44742f&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
