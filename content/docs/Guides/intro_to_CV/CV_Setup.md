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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622QGDOQR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIG6pu7YWyiVTkFwsBHAmRZDWD5UDxAvEHh5CdIXEtNeIAiEA9efYxYils1FK1Zo4i5W8GMbX1p22Gwlihqsfnd5F5JUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpg0u8fyZCEaa4ykCrcA%2BEnmquJJ5Z153cgunGENrCbWb%2BeHAS4xa0QxxRDIKx%2B89q39%2BdQFj9eJxdzXFZKAhSbKBdy7m3qw1flge0UtBq4gxVezfyrACQa8T6uwnyhWiuzU9KRt1So%2FAILGnWvlN5zpiCPqrcBOl8PTevhM4Wpb7QvataeX0yxNyFMsAhKZEMDGfRPU8M932io18aHp6Sxch1sWI39ST%2Fec9q4e08nVsEk%2BqSxic%2BcWp50AemptmEqM4JvCdj27cALPWB4FAF7uKY7h4Um4Y2NJhWZ%2FLQO5U2tMypOVvskaH1QErWDOhv6%2Fz5IoJ2IeJZRCOfE%2BKETkILbJx2EgBrkEr0YMZjLZcGL6Wod1VWXEbnjmUcweJQcQSwZ9Y9NCP1z3E2FntIwRsVritgvJfh1M2btTvKdPlBxb8We%2FAm%2F6hpg%2FbhVzBFFV%2BBUk9bdwtZJ9BnuKiTEuc2A4fBxt7alQfCrLVWiS7z6p9xpMGdtr043qJPiPMLd2K66%2FseH2bgJ5ypmu9tbPyIE4gqucoIby0sQA7KTCwKlD1vwjb2u1TPYrMTKsJGQU4g0PTCiniv8vmq7Ofty5XewoAC5ZJl9PPEdkrGy4nck69gXC6BNNLDXOhAIcRdvCEHmX9C6%2BfCYMIrF28QGOqUBrslyGDYZCgDkVZJoNgL01O6PSEYbcZTuPnXq8csO6ot%2FQQqRQOFvrtrM20YYpdcvyQvQXmc8Ge8nCrbMGd9GumtCWoyuGqGPit16iePLM1Xy%2B4Hxsvf1rEsoskFWzmvpXG3JuDHSxWpu25MtVqI5OFhqWxP33OB6%2BMzJw%2BCnFql6uLe%2BbDBap1wVRAmNlJj6FxuqdeYp6suwNhkFvkHRMAih4d2L&X-Amz-Signature=d9c101be875dee7245302589742a0c4ba64baf1ac069693621ad06b9fd17bd31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GWNE2NE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCDI2jrHKg%2BuOPgpMs6FOICfzFoDEsHKrChlT4FIimyGAIhAPmgtzq%2BTNAIksiuXkhHR6TeUUedbRdnHICSuf%2Bff9GJKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4cszL%2F2tXArwPGy4q3AOnedwVJuHRgUxtpBJhooD8EIg3QWaQaKVrouodmmRlTNeKNaE4BSLd%2F4fxCM0C2ordDqJa2Mt%2Br5Cq08VPuvcVJ9wvgFwq8xsYVNLm3kcfYfIVNLH1Nu%2BYkWcaAslUjVyM%2FP0qRvSijNefBzr2ntnjCIHhSt6rAlk6CgFmh7Y12WD%2BmvMEeQkELE9sABgCk6xIq0sje4Atj3QDi5%2Bju%2FWOpBUX8WS1w00t3Yg6NMM76%2Fs4Dyk2HEGuK3wonsIAyuZvnYfJsxdLcMb3WP1ion0HQRQ1isAzoy32ZJLd5dddAWJjUFCNIFULAEoERACR7Uo0A29iqVcRuc%2B%2BI4YC9sk%2FO%2FIpGRv7omxcP2rMzLYljerxDQGuANyA4jKq7AfK0BFsBCEUUdc6nRo1VVxpg875xcVkry1TARIaDWQjfQjhfKtvpTNpZEA93h1oU1UW4Ue241nmqlCdQKYGpw9ga8P0R3iIXDbJKxUcUMjgVOfV6EpgX3GtgrQYude0LwJ%2BfohpPvGbp2%2BbS5mplQ%2Bm3H225ETHyleMxDy%2FV8Zq4SvP9%2FB%2FITJ37gnragW2ChviB5nhQan6kGFL3cR6UC%2FamHdZG6P3aj3qaJa2NDZ5H8iOcY1xAD1VXyYQ1ZeP2DCaxdvEBjqkATi1l7YWutkyx%2FHdkbZPiNKkXCGqQ5MgqKjOUjXdx7KvbIhAff3rlJw0DzV1PbI%2F86wSN5FaH5uFU7e%2BrsMWD95dW9r5xoQ6gWcAm5YupnbDqPQ7yO18i%2BOxeheUPEZXOW7sSHO5Fi8bmxDNU5dJNTQGV7ntCzVe8bYETcAusDGOmDBAyzmxtfcNTuz61u7vJXFyjvxvfIhyfL5qXKUaw0sme%2B%2BY&X-Amz-Signature=57f4ffc7dbeed8ee34a77ca4a5a0dbca27a90c958021b3b11d56318fc3874563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
