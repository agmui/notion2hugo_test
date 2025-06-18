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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3DSGII%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9V7qYxgejunUckM1OT74jhoM8fu0tk8e0NtwiU0EtHAiEAh9sp5%2Bxkhrl%2FFrOROdIjEfgv2%2BSKn85XCgDuK9nEoFoqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBpqUcsKzKt8Oh%2FZiSrcA70pS395s3Yy8oebTWEYHJgtnYxn0qET0Tn72eP7SpxA3%2FW3wBuAiJEdsvxoal7mpdqG%2BPmjqPELWHgIj8P%2FaZSyGA%2BT479t6kyYEh6BFYJHPeAUIwVSAZmNCN5lsHVZhQwNeYpfjgtmVW%2BeV%2F4j0vjTwCoydFyDFXY2nyz%2FCDsi%2F8yBZNRutgtqhHKMQqf68VCDSGdxugWGq8DLIG%2BwE1FthBqSMla7IAKkYsNjof1FhGLIO8pyIf8KkRfqzImyCIVYDZ98K2uqSa2jN1Lk66zCao%2FqLgETn3BM2Q704ZGb2t%2FDcVo8KVuz7pCD6qIY3jef7dHjehMFzL3btQZicDysEFS8oWtrADtO0GoJI1tySXtgM5S9QZSIN1OYIVqGo1rqaQ3DpohfG4TbgWN1L2t9tBMqrb4BD7MJ2JHtUwp6j6g%2BcD5fXdOY%2Bap2XSdiOCdXtRFVzLnSy3uBiWwp3A0r0TowUgKi8eKpM40KTseOOuzHVcLvrrzB4M3VSHGYcEIYK9DEIAkVHg37YfX%2FuaCIoUI8n%2Bd01xioIE83%2BjFjCWMmgXGqdcDgF2BwWxPZG7bx%2B143mHSqQGYyW10NBKMMfbjcWaF8Hn4N7CBg7NUYZiB3MPthqGt%2FuegKMLWjycIGOqUBlBBezyzB%2FepeQo5mpACmXaW753DJLYg5F69XFsQrR6ifk80JsNn1a8aoRqTCQQuNeVwQo00kor9w9Q9qXnaHki9u3joOZVgCQutxj%2FOtOhH6zy%2BG7N7sbSKX5jJRbSuZiVWJczfC2SiipOdBUBnODqL1eYFaKeExWrdPnrZZlOPCAQVbW26c2XXUipchoHBPH0guUjgm21X1o%2B9tMHeCS%2FPVnN8R&X-Amz-Signature=4365774fd8a372de80d1d2493ce80beb2bb5a5a021afd5534c567a1bd27f2657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNLVOJJ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeZhkXtjj%2FnyWx%2FzvtqcYsbU0b1KXTIdV7hWJodMRcaAIhAL2xTqVGoXzu3prt3DVbp667Z%2FVbWzFKErU7tfdyxsRPKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwqy4LCrUQBJhcbwPIq3AOdayFfGhNrlICxJjPBpu1ht9DKxJkojhVwzvzRsRwbG7kCXozvBzR8S%2BcOmIyzMPPxZ2DyfzTD24YRblWDub9hY3GgN5fAjWl21wS4V5cFtzBHFMTyYKoleWB8mctakc5xSTspMvFr0lder9vBxIxgs8llRVuzrRa4gX8TvSnWW%2FaSeI%2FQ5tpfcM5yD7N8ljPUEflr4EjLneHQGu9Ze%2Ffi3nUpC009KEX1%2FHRn1t3a8OB6c5rijKvoYanz3n38XGmZRV6RZsS8z2Q%2B6PoydqFcRFI%2B0gT8fnLXuOCLPZxBXXj%2FKFe5qjPcQCh2DOlb4JDMAxT5csajOZ7j67%2FS%2BStyeM1LSbpXf5Ake%2Ff4hsZoB%2F7dahofTCRUv8r5gWXOjic8MdClbm3HApQZRI5cP3gXpOv5jC7jP9ycf8lHStr4vaKsxXqpPWJKl2zA%2BDbgKbIWCY5HN3t8Ah1gqyfOMWkvFryrbCF0BT0%2B16NXxRudFJBb329NH1mfUaToZPmjuhbOggZynDhO7d5jzIJKdhggibDMmSAulxYZqEwVvO2%2FJ3Qza%2FmCrW2HolgVgP8Bo%2FhwarRz5SAs7t%2BRfTANas5wE9Wh0upSMu16neZFAq86S1L6WVyr2soRmp0hUTC2o8nCBjqkAesfQkoL30d9gUm9IOSIELpZAZE44yk9uBoxoBxu9nndXlePphDCF6hYc4iAZSEtl9fDVEImhHbD6c2h9t3jVHt8QUW3%2FxwcNujgQt1iRN0%2FYvUfCBgb2hWAwD5Wf5sk4E83eT0UAP1sqXXjN1pJDghMpHsOoK37fzYCFlMxIZBoe%2F9lbyWwcQyllmGlts7PIRkIW5eaN9YC40Vka4iJL6wVKD3w&X-Amz-Signature=6e54bd337114e340a95047fa09b634eafba59c174f308e6bacf041816decd838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
