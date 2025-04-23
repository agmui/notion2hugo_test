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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS63MFFJ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIA2BJ775YFiT2%2F8vPR0vO7mV6vwd6WE%2FrT3qlUjKWkI3AiEAvTAPDJI2gQDHNGo5eSAHJHPPR4pcs%2FqxK9xunzhyhzEqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqHyv7yT0ArS59gJyrcA9T8wFYY1hoDi2Qsgac4o32Y%2BhetoibO6TKQMgIXVvQqLNZyS8Z6Pmvx9ixdaTC6t046jqtYqWCv26UPTEPa%2BmL6tpRrJFPTFzTr2QfVOh1ziCfyXVTqkZc%2Fjs9Wnuul4lwXqHWyPzT7OqJnTmm7hZk0kTTOBO9jdJ6gIgG0OlzaP%2Bf6%2BoJzXuOJpFkaZ21pVDQEXZ7LLcVSqVfc%2FI3xSUEV0S56xDrRmmj7ZnggEayet4vzFh984OVyMQFYnvWly2iOkI4hrAPT7SWnqOucf0qZbR1YzVYMvYPDVjfOWA91ZfeMXo3Sjv%2FA4%2Ftb8hVk789ZaQanBuga%2FpP1b9RtCpJw%2FJjPNyWwcbeNpVlqvbX5YjyKFuhtxBrOunHOxWIr7kIL8pphT%2BT4wDmRYfFgu1rjNCR2CBWk8qjXNAnUYPRvQjNTj3a%2BdQ0EGYN11vxPoZP9ruvDu17iCXiCiGwgkATwt07umkOoFKhFm9%2F%2BWQMYvkWqQz3Qc44q8FeLkJ5N6ZuU829XF3NTbYan%2FtDtErvgovtnG%2BPzizrbz6b%2BCAQS4dPm1BSaFnz7ARNcW5eCPFz%2BpBGKeEXzyTuPtD9F8XD4NHkhF0cAe6NyIr1RB%2FNE2ZoHMe1EQkqasC%2FNMIXuo8AGOqUB21oVXv8YwhPYevHfb9A9DPbRmcnqAxh%2FpIciQ8ag1TDN2PuHuLKtnkNQmRjC3Fn22ymiWT0l41z%2FGywblP9uIt1DLxhOA92o3u0P8UZ7iLZDVeQ%2BwgU9xAqiFGtXXvtLK4ysrhgNc6BPzKI6zBpWEptL256iMLJmVVo94BSSut2Dh%2FYSQzXtquRtfUg0PxlpslTXIYB1vvHLItsrFRRfGEqCEN3j&X-Amz-Signature=6294217bcef1028b98daad78e4be842e606fe7b313aba86e377d3bd3735adb7c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RHBHBAN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIGSsvHLE0jM%2Bnak1gQG8bvYEDBHPvU%2B60CFfGh7Vh%2BG3AiADD7j9HpOjAZ%2BorW5MjabxdIZ4%2BIOa%2F0kJ1LykweQJnSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLGxu9FJH6%2FGd8dRsKtwDdeQwPnUmzgSbHObkTocJyyYCsR39owFLvqoslUMCxBZX6UQKUHALHW0gC056l%2F8YkgxCoK21W6qZ052rDf%2FtD%2BiOE2DmhFJluieOKVYr49J0W4%2FhQMMksRjY2VLmiaclc9Nl4xMkHEgP0edne9lZxCaue1OX09SYfOhlrXKqwmuWWy1xozjjN6rMit2ETfvSn24EXpNcGR9m3o6yjqhiE8UAx6qROswYDSDKEH1KzqAzwvn%2BEB6beEu5VbxMOM4uV%2BbqoZvAJHMvRqiPcSEjiBbG%2FZKmz9Ra%2BmtoWhSvpFNosaxBvII995UZw1ryxAojH4CpazcChPjl42SH2Eua0MQV9E5cNAtPgpV1No1VC2cfxJYCDLQhoDZu8UZNAFjlErHvT16pONqD6b89jkwvBwLPJgXj%2FkUjHFkdph9MPISNwWSXdu4SOjY81948TE5GFLgceV17eX5YbkQJDmsqzzMiaVnX2wV06WY%2FTyezhDqAGJVB62bmr7PxKzTwAOhZsqGVlb0d%2BI51EfO9duTf%2BjRlmtRwL4f4T7ud5Qq98Ksz1vPJGGF6%2Bx%2Fv8QaL9OW5RRF39irhhUH42YGb%2FO%2FZzmzodVQ0dt86p9gvM3xpX%2F8%2FCavTl%2BMs5QDC0AQwxe2jwAY6pgGxkNIMBDP%2BPoDhf6xtpk7GEV21W5GN%2Br%2FtVjWaoAN9dciS7KPRGkyZ%2B0Ypda53zQKwZUOBKl1wAA%2FcfuLlDMornYXX56p1qCg6NSkMCJ0u7VFUDGsDTeJEAju9oAqsQyj%2BKo6lyPrFfal%2BuCwjzkYVBNVVnMUtvhsNPB9JvXW%2BOoGjhOTtIi65hbwLF2UFC%2BIoWzLlVt17R8e0yX8RblW%2Byn%2FsRdJm&X-Amz-Signature=ab99b934d0baca1d5775dd795465f195ba37a6af17027b6fc40838d5de67ec7e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
