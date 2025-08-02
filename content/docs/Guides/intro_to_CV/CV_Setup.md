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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRTNBGA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGH8mfRnBvhy8WVd985YTNYW2xoywiZ2%2BQjbSRm64wKBAiBzA3mkPDh9NYJ3YHzIQb3d5JKEFUoqR05kW6SCazbOXir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMHYyBvzvcq6e49J7DKtwDz6pUVaMNcMaZGRNwwOPaWaTxfzF5e8IRHNy5s4kQi38Dz8BJnjAmKXOkvARRQcLOYJszysJwoiT0VxeH2RIGefwfkfMqJeFXN9ZxRHFKnkeYuJp1lkOCpOu56vEFX2%2FScWs0%2BE2UzHlb82gUFV32sjPiU0XkoSdEyQTIVGbY8jMl6DPzGaWZ7H2C6Z3WA4olVfdoWGobgN8BToqIJf4ThUNIPz4Oi3o8avYpv63pAHwf%2Bsg09zVYGNdbXpbLAMoUz9clTxpPtwRMlKiNXN%2Fas%2ByOTy6btdDZzffeO7TcVBelxu5fSGY5MY5g449bAv89P1cfm6272KmC4FdGiRtJqW85SDI9HKwy8fzWJo9FF1Cac2%2FUuMslrZmBqD3ICWWU6EH21eHa5%2BxTBcQZwanovNmEavv45TptbqzB6KNU6dQ35GFhmuk3NCisoiKvYFd1PMXvn6D3%2BY%2BJEfO00d8nVL8wRLHEHxvVKRnNGij1lLhKq2jpbLkf6nhoKagBROHAafup4Z3bZDioQMHKSjmSdIqw86by1rvAC3dKhiYDuuaTRTa8%2FIt%2F0Af%2BbthoGAFs07dnsXps%2BAo0XGBfwIGC2ci2Ckb09NLRZazqJ1OBVn8OJ5DkbaYDmx4%2BGjEwhpC4xAY6pgH1m1UN%2BipE0JGOX12lZMFlOyp58h%2FudnN9Qg8oZLDP1%2FhLuTk7WfgUvGBvvplRU5VS6venNCO02kWpkXNRdU739Ctag0jVpkzeaWQdErRzq9kdgba%2FusElpFYb6QXzlxPd0dZL0xZlQqrvv9uHju40lmclhhqlRCvzit1b5juJU4vzzc21tZMQ6OfxwnQ6Op39OR9An2dxxBEuw3eed23birqezL1g&X-Amz-Signature=631b30956b3753db50e11ed6c478313182ea4eeec385a340f5164ffb132c1989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UHI5ISS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T161006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDafLuM8gB%2BBSpU4%2BvVEubrTa6VO9d9CKhGJZlMuMx%2F2wIgFncjP%2Fr5xjyKTjHYYxHV7a08%2FRH8050TtHUq8Dxgb4Iq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKV%2BNq0ddu9oTR6LEyrcA5Q%2BCri4eqFAVbb%2FRLKABqjRqZaETfha9gEW%2FKBo2jzuI8u5HqCACsPWvdMbhProuPmhrv4BVsWZhwSKUzbTLe%2FY%2Bxqg3fQTQ13t3cHdm%2Bo2lyHQNicOvnqpAebaO2UjhPHGgvKXS2tX0XiXxxwfX97f6HJn0LlDJpFKlGxVDmLkVR5W5hRMXflJS5ItFWBNpIoiDgU1gJgnaoUC6qeZAZCyKOTUSs6end6At%2Bu35spGjqXR4nPTJ5Uw1GNo6MmOED2t%2F0%2BWPbiNtu1CsxGgaFT8PXW5zF78qygHnpZcJVUfvcL%2B3o5vclLPNX74U2tJTPEJQWxD1oTcQmdZPhTOorKvMQPFrNw6uP%2FNp%2FnxiZRNYIh6XjdFNnizWf84nyzccjgMxVoedxiDYn0nR%2BlJqI%2BgE26LIqgjAZVENo4IA%2B987Ki8pr70omNedM1CjciV2UAp6h71gXKCqzOMOlbPwHBqlc7M5VAHYleJRP1qjcRbBTkymwFihTXtZ1nzy9imGug1DPdoTA1LDVEhv6zeRd9FKSI%2FfnG8KY7fHI1H07ri58nJF7wICYLA%2FhjpRWVBCyQX0aDpbx6IdKva8KMNB%2B4KEc7GfCK%2F0KWDV4B5o8J3Iat2JFJ5cU9Cd%2FQXMIONuMQGOqUBknh0jMD%2BJie%2FqeRh5%2F0L6DUUQrx6%2BuG%2BMeRH10eNz%2BHGSzmODf3WWDWmEJRumJbwHuYcOVuFUjozFwYDXbTKucIvLS6M9pwU1gxeuEh82RhcowYpHd6BNpBToR6pvbKqJD24RNX6gxdZolfd8NATmdBYDxdyrlg9u8epu%2BQPGL7wrvKuIgrx9W430AXOxuVtb0K3au33r%2BgEiGY4%2FFmGPgXI%2F%2FLW&X-Amz-Signature=33c24257e62b59f590cb5804944eddbedaeccbb25268c99650e33cf89786a609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
