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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZHDPYFT%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIB2dpUpKev8nwJXRHLt33gBaQz5t1GnD%2FYcS92DvLi9XAiEA2dLPgm4w4jBZBul9tPkxQLO5bVUeQa9FOMefNtEWZ2kq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAlRnBJJMafXqWIcGCrcA6cdyvDqzebo32MOsFPPyHKwN%2BcTdOGNXuX3q1%2BVSYeXim0OTSaAtuL0WHxWr23hWk%2BcDoPmwF%2F4WQkJVzgfE6%2F9nVr3hxI309qmSxgmertZhtaY9%2B404NQGccCrq2bYXIi26NJhHQOcyJ%2FvTI%2Fv2qLfhx1z0W2zmUkMhdfmWSlE6y8eTGTjdzz9IJZymBRaw%2FB5ZnkkTN4GuBVJbviF8WdI5%2BWx4B7XHRkOyN6MCZVOHaDRFkGjocsgUc3l%2Bg27uiqLfJU08yLL58RLF4S4jr4O51KkOqoLVS9PiFY4BUEy21UOfWCjNnBUT%2FQ8siw4XhkAhIa8p5lYvvolDyzaRgpMFcIJZj2ZtUcAo92pfhqv4cfY4VAqDONJaSVpM9wi%2FzubKp9T%2B9qWL1Qbaby7XGJFaaNSZIHc5cEdhU2nSq9iVFFBzz5T4Bk9bjcQugc2r3fOsB%2FcZcDJcvPAlUY%2F8V%2F%2F6z1GDfhNGN2WO1pNJFt%2FndesQxcABCoCQ2kwcmNl%2FmSnlk%2BJKgmDLyQYJpnQgU5%2BukbpaVzlGDzj166wBEncE%2BRhfoQ5TxYLeW9a86iqI%2F2dDAKt1GxWrWzVPNm5sfrGSQQu%2B85AnCqW0p%2BCuEHPVFWqKHvCfL9LlXWLMPLw1b8GOqUBXTn7vnncOAO4a%2BKcocqA554gVyFvr4bCyDVn2Txy1t7m%2BAFEeVqOz%2FuFapfjWUUS1zKjBeWTHjuxgmHnRorge4hKIXYos2l18A2lkfBQvkFe1rR5W%2BI7QffOLIJVIYHf2xHQsuY9ycQ88cN5rW1S2t%2FMws%2FrESvbOQblJDjwuo0P82CvfJIRMl3VijawMpaY1mymAxCRCqdOpUYdNWG7Eb87g%2FDX&X-Amz-Signature=3c1a6b57976b5c37f12778aed3ea1bcf75e4610eb9734e9dc18e94aa0bea961a&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRWNZWLJ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIDnpn%2FEN45uUJo9Rzt1ADVnJK%2FDlTdBzff6v8OFMN7taAiEApxjkStINcLLAm7kL27fOEru%2FrfRSeutmVePYnxcgdMoq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKA0hLMptzadpu3IIircA7IAkL9pPx6KldeueP6w9DZOGaJEOYaKDZPhSYjz0W7FvNjUqVvhQeY48VQ6c1Q7rbNr4bhDqhTNLrztzRPPGRa%2FMN7PHc%2BAYckh%2FXOs6L3yYqyRu9vCLBIG4zwLTrdZzgWG2EC3djwPnHlvDDcXn88Nbt8H7KL4wFP1uPzLyLe8RAhbT6sOIuddtNDpO4y1viI7WFJMFY6H6nMwBWzrGk5JSoaKX%2F2JS3UG37kJ5XAEUvXTU3sxXIogWevs9xCEiSVBrb00ETeyMKTtpHYDgBRIQj7TTBrC5SGD%2FiY5E6aI3tMI9K3jje4mdtvodDkLEvBewzW34x9nhHUIoH8dx258odK93ix%2BjpukNCizn2zu%2F80K0KCu8f9Aqt%2FkAtQKe4FCmqz7MI8%2BrluZACFRXN8s0lCWm5NtFnSb5JmCiBzbZLGqsn3xbXAX6mwNiA4YYoFaJWfGPimMNbfmyhxwSa55mBu9vYj2Nuz5852NXOPG8iRvaqpJWPo4S27iXckgAvcxP6VIf%2FfMoJBm%2BfZC5iCxhhX2whAUpOO8%2BIbmDV%2FaOPDnCE%2FMCDXPhjH53Td91%2FGzjsUVjWnMvy5p7ZOKgMEnDsyEDqSZFYyYmCBfTmsTaIo4EFBLq2Zaa1AfMMnv1b8GOqUB1Nhi7WjgzSNgHsdFPWfMSnfcXMcSpV9r1WXkgB8MUX66q0n78HauRS6rzEQU2h1YK6y2SAkuGucZUK7SWdb%2F3mn7YYz6slCzruBM3Tiiyclfy9tSgNOv%2BkLB3%2BCN23cCRg3KGTKGfw3KTnWq651mqc8xraW0WkgyRWoyx6cnag3%2FLXizdjH%2FNJVORo%2BQkZdkeXQnMJ6XA9IpOawQGH7wKEsKksNE&X-Amz-Signature=e8d6cf3e0aaa36f726ed4dce209565ed76352051cfc3e4cdc0d3a52225d3986e&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
