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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM6SX2GD%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDChSANuDcTa83mtMnH00RQgsDZ%2BhrPaWIEbxz1TlwttgIgSCev3fkwxrVG2VDHvE%2FaHhMLtMfAs8NyYdLHaqo%2FsmsqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI11NoMieRKnz8bonyrcA3tblLsI4eG5AeiiOsOuyND5%2B0mNoAAKpPqVl10NXCEl%2FBtn1QXeFUWHdRBYPC%2FrOSYWI2ByhA%2BpLketArLAERwQIa2ChFLjvOG3JSDHhS43pST05CAhOOBt8tBvO%2BKloERBElaD%2FkvTbZfmA73Iv7Pfh%2Bm2fEn87wx7I7FUgzjQSFmLwCvOa86AJ0barwsgpsut7liL%2F8VXWJ8s1XaJLJL1TjbZk3fqiITOkUB6GUC4KFPSS40C4drVKl%2BGww6pAiPTisIPN1JYQ0QUlkyFr%2Fr4YsvVBwtbanrRKzvwg61cqcEOuoDK43%2FGrHZv5PZ0xXBPPGDG2OU6Siz7UikRiYuzNIpRHHMffO4LqIkf0vbjeEY1Bwca3SqpORtDZXim5R8S9eLvOW4%2FYglyJofVkGd2ww6y0kx7mFvmdQeqYHEt44WqdvThrz2OkMn%2FR3sLJQrM4HG8XXXx9DAPfnZ00vVcQ7Z7kf4urG0zhewATWnjQ%2F8Bs9xRTilTG9SlY7fp22EpJ6sGnqEjeheM5K6p7hF0zrZYFElTD7vx6wAQ%2F5zm6ezLERyJSwYVjKDlW82F2xSLwCwPJ2s%2FzUNGCby66LP213a8r3xU4U1Ejf%2Bo5R7UggIBsVphKf%2Fw5oU4ML7A%2FbwGOqUBQvSXCm2zLuErE9xSZDF7gY2rFKX0%2BD%2BZymrB%2BSjnhlw2dELZIgsUhIB%2FfB2s%2Fs8WMW6A7by9k%2FvkUT2S3eRllCO8SlDTmasohsdg5m14eyozVTh2sfogDBhqbT4vRPtw2yLhaomvpuwLjBTQVHSQTzTgmUuhVXB3uDMv5x3foKc5rbhEr9MSACP%2Bt4K8pmOFfYxB5XGYPZ1%2B0nX7R%2FzuFhEtDHwm&X-Amz-Signature=6c8a9f4e2d5b366b1a0c29c62a902bf714121d8f2fbc984124cfb9b1b7168f33&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUICOB6S%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T150408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFOX7VXVTgo4VgbUIoj1XbzPxuksGn%2FQAVZelmAL2wewIhAKhDGiIWaIHx8iHsl8P9TyllvdaslyWojQqsjhaoJZaAKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoGozytBmpwQS56XQq3AM9HEnL03oshtbHbKeLUiL5A9IxhbCjzxwQgdVUfWqiFoW49Rw3RsWwxHiomH4I6sGqqsA0aT362h%2Fe0mlEHKHMLSFdvFE9Ybe07pQ0LP8Cl3oNWPcW5QvZ%2FjyyGNr47kj9IbqHOtP8COBekmrTylH8GeBFQUh059aZa3j5Et5uVxbzLsM8%2FRQhTqWAVXOKcitifDZAsOLJnugUN44zsxN7FdWJANdMA7mpEvBqDyj3QRM0bQ%2FxcW3TWL4aHorkrF6NIpL5Zq8jZruMz%2BfYzVCE3Blde6OT9AlBp4w%2BIvzVebao72vL0svTI8G9GHRkE2clEelH%2BNGBEEzPt8VzWb1JQbKguDxORXKMDKfeZ3aL7yJ53b2KsWUZ5enAE2RNNfVWU1sA7QBfb0YwtZtmKCqNYiFRvCQHZHeR%2BNB3Y4jMXqmKS8iyKNB6TwS%2Fujq4AGNj2QQUyCvNjKYhs8QIhqZNHvqFuJkui4opdmBrrR%2F4cocXlTpCl8OZw7WaKXErZ1yQtJqvbPp5yXfoIr%2BBOYFGOVU5OcNaYz2XDVYq%2FltIu0zUr93kHAnAgFWvH4ZrrK7YB3ekkdE64uRcv%2BXmfTU6II0LXROmm5QAG7B5eiMrthGgBwSo26KLaU5C7TDPwf28BjqkAcWfla%2FRJvc0dkScAMt9GTUTfCC7%2BzPKdV6vvx0tcvxVcqFrdenvRTTtuAUHi2TQavTurFUq9x5dF9RQX86i8X5CyZy%2FUvZxrRNyWnrzbQvIGKexELdwMKzZ9AzRfP9xmyzMQqiVrg3gwulGawwJB08F45GV8TOTca6pFE%2B3ofNyXHABZ3WiWVi9MaZ0TRBzs3OXZaatf0RLKRdItQRqbcwAdNjQ&X-Amz-Signature=3e670a1e2413e7d69a62f59aeba3903fbe1c5d43a75fa6cf237909e066000736&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
