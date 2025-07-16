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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAFCHG4V%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQD7462gdvlub%2FVo%2FYmrDDNcklqIskxwOPLmeLR0OeJsqQIgEoaizBodgVDAoDz3wyiEW0Mi%2FiLkUBYRYyTm9%2F3N7Aoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFRAh5CIwKdWAf4%2ByyrcAwQbZqdcjj06FqFoQXk6J%2B4KMADswjFrzlyElXuzix8czBxHEZoIph0AjY0Das62OWt8ixX%2BuCGBbkGXq29cbr3BIHM6U6Ky0epa83p0OkkGA7ajQY7NYpa62yNbmvcuo6uc2QyXO7C4Ol6QTZzXOFgrLmhUBjyyR0%2FvJvH63eo0YQ63enMPPBd5cEI%2FPScw5vV42TBQ3qsALOG7JFlL3btLx5f6dSP5Wv90a99SDd6xS%2Bhw4ZiBlZZqhPksAbYe%2B%2Bbd6Xh9SJGnf8R7jhE8YyjynVFhB24ofdoKHcXR8rqqKHvCc7LS%2B1uJOa0J6FIqRkF1pntAhJQ86WeRMZlXXaGtxBJyI7gHE2iYZe7g3sdOszHUN3lgTmhVWJHG49TTjqK00oRDwmg5mN5XlVEnEE5kt0UQ3XnJG5lTlP3XrhfBDlc%2FUQMq1qWdnjD5uZg7gc4QBYU3SyKTnb%2BGa7iJcj34cikzddegKC%2FuyXFYcUUXJbuY3y5UwI7ehfSMZABKC9xSpTWfxhep3jnUIwNY5FzO0o6LRkA%2BwpN7nxOloU3VSdtNnZbgKNSNEYT8eC9uSyKZSR1glJ2pWL%2Fu5hAi702%2B0Gn9MuUX8U8cFwQj0V97I76lKJwIClKqLuKVMIjo3cMGOqUBltMoK2kLvwzeKlg%2BJZhnZsIHSTSKZu%2Ftx8fsGFxA2KDmFthk3Th48TMTTEffkszEx5y%2F%2B5RM2dDuAHnw5Dz77phYGQXKL26nGsp3yuGUyxZNCVZ2Mfl0psBgrBP03H14wMFOvW4xNxSO0MXWWKgkNwx2%2BtDa3eiCVWYm7LzvFNsjGKkacdw3KLWSZcouVeUYbwMpmy4YuRL2nKXPWTIXouZEV9BK&X-Amz-Signature=f8c752c1d795b2b7e290d5c68ad66c86166aca4e046e7a1c5c6e73d5a4b900e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV4SYT73%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIH9ywRaKZirCZpCKYLQ9ehemjoSyx5E5vlgwglcQwXj6AiBch66g20ccwD%2B7saetjLWvpAOlNakXKLCasMhT2oB32yr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMJ8ecrTeizMEzXj9hKtwD2IgqzBasiCyJilO25578sNc6CIN6BAXLMm5MLAYTSy7F5WR%2FF4TSvUXxbd%2FouJ04ClGTUzDe5G6%2BBCztvNT5dOvgewfJx9JlUpLNrBd5sbs%2F4AFi8bTIZrb63agNVxkWlk2BudGFqct7628aM%2BgMG0DJg2HwBwwt8rieS9AkhcU1ChvLCvUG0XOKag9yq9JfpHtTfdOutE66qTsJMdymfisITnCEzR7flfyXDfVqXGLIeAMhmwP7LG647fcnOpgGRT0WbPaL6eIXZwx2PmL%2BtsSxETW%2BYrVBCIuejLYkpp4Mjozrj16SNF8X5rtn27Txc7N4Sr%2Bge0loRMGZVmlqJugWqGoYn0chNg0gR%2Bxl7Td79m%2FP0cZ%2BVjW8jSVR6bK2Ne9EnByfzTCUUkUksmiQpz4T9hd2MUqZ8B4Wu9Q8p1EHlu3oeXjPOMzmikbGgtYESJcuQLXrjhNyxQQIpX2Jm7UwrmCu615b2d7%2FfW8%2FQK3ajgp96nOpnYsP82JGBwo0Z1rkJW4NS9hy9pOsAEe4SSNRrZtuCveR%2BY1cxq23w0pqPPPgN2PEsRPSDE63XKhqATl4dJnuMsEvEHWr0Rhr3sidBjjwqOnuFdYmseq5UKLYI4w%2BxsjxQFhNS%2BAw2%2BjdwwY6pgHFIw66pf0anlyGQEMrktQOMnNflS2glYZmrTL7vGUt34TaHS2HtSJrGVFCHBU8YMDTjZAYomAr1uOvINLD24lbSBQjsii0%2F2oG7pv5HD7367f6T97Lz4esaY%2F2TzP6ZRcucwk2l8mml9I2TJMgl5Yp1xI5iCai8I%2FXArEc7UIPIAMbWd205vh4hhwar1qCUTryK646B4TYIyUG0ofEkmE1UTOTgedJ&X-Amz-Signature=9cec75d2a7b24782b6e40f5aba8978e7654d9f9c64ac998e0f7b7e246f6150a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
