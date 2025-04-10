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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XV7UQI2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQC4wzVClJSSosvMXXKWEUIPtZYHI5KCHPG6fadwQ0FulAIhALJYs3PGrZfcdeTwoF5akDPWvRgsK2w9wX6bVez655J3KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziUTVk2nzrjZvgrDcq3APmxvzFKDKBXJyRDCkBbgW%2BmOC29qu3sIFGP%2FwpQxA32nzXf%2FVu8M%2B2EmR7CtkqqO%2Fh8fAuVwmdAO9sRejvfExhKNfjkTZmlRBnWu9Flrqa6y6FO0TwtmhVbY6LDYJdqzNWbpAJrWwsXoOzo0wl0ufQjq5EVvLlfiYR9C96YG6kj67HXk2jTJTTbqVO56C1jK%2F0JFnjaichJzV1gdS%2BZXcv9xcVGb1g6qS3M7XyGzGBDu2HD1A9u7n74gRot%2F8oOzlFZ0onRxKyAyV7cmQ2%2BSOJAAK2gQrUGoENq%2F65pBScBta%2BUaJRArIwuuiGXtc3hiYuKNG7vSjIMWdtjjGQg5en1FxyHF4wI7f3oZxOtoh4Wr%2Frc%2FmiGj9wg%2BgDP5kqsj3ppDvzxAp%2BUK6wiOkmnnCzURRrDzYSu3xOJC8No7QCIp2eZGOqCvtrGgipJMz05fOeOPBnA57L%2BwyRpPEXnKe4445p3F2xZK%2FiSLi7czu8ghQmUN7uvBZ7VxsoFhuhGnJ0vxFiztpoZSsHoiVkO3t4UV3%2FVWK67VIRTh%2B4kbulrJwX7ZgGsjbCTFwK66cw%2Bn7YxiIvrPoBarkwTcKl0gjvpJikhVaO923Xu3DSNxiRWWRalOneDzMf%2Bo3r1TDVseC%2FBjqkAU5vcr%2FD4E9PcX2%2FZxn6y4GlSuCKYEfVIHLqQERE6zGinDNe1KKj1suIwEIuFVEFCgG%2B4tpAXFHWp67cPWRFx%2FGIPas6xADNXQ0zB2qlC%2F9JyDFs6ShFaV0IZwvmnnjyvL5WHDmc7MdjQ3KwFYM%2BZu4geebiABEGhw5%2Fs32tnc51rcuB8XTCrGj8nzPy9aDOiZYC%2ByLVqtTY7cNoSWsot4E7JVD5&X-Amz-Signature=d3dfa5ee05d280585e5f53e00dadeed49fc91d3d788493315f7b8bab9978aa40&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXNEZPF2%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIG9nDEgzBqnGAXVAmD%2FfmBSUCeRfsfpe6ddLWT1ZznZDAiAbPGtbWh4eQPpC7w0O4HwTWOfG%2BppHwK%2FeCr8kfGj9HCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8hfKQe1in8RiNrH6KtwDfTxrK4vYJjvWMqXC%2F5OjILZtMdqxaUWZO1NIKQflIQ8NsoY5dyMq3DjP%2FBZmBtJwGT%2Bd4yjZ3PmNhLjEUA32tgbpTn%2BGLHZfTWSj3YxE2FTxHvnn72tIZlGMwJAmO8NKizqrd6I1UpKwPJHQbJuftHk3%2FF1lbvGOFbU432q75kcM2hbIOUMkFh47ng6w%2BGUNcxiIsFwwTSaLVj9d8nCXeNNqMBE3jYQSuLG9CSqdsrpkIiB4rzaOcvHJi3YLnV1TFf7Z8rP4ZVK%2BP3VknCp2AoM7EA0h7RyqzZgHxPxTa72e6DHRLfM86LZQx0Re1xdN26vgUxA2Fk0LUyBRf%2F4G%2Fz5ZIsKhDcffZtpQTLmT8otJeU2L5rC%2FHrMGKOZUmUaVscti3WzDJF3Yqhd5Z6wIOqiIeCkjHf6aD5xHg2dYmrkcZ1SKU96qBg3XDfYiotYTxRoy96%2B15BSQD%2BCltIH4xcZmDdaY0m8%2B1APNGkOzG5efcDsDqTK4LJill7gB56%2F2cXm052kO28SNKl2gxskVtvPurobaLIZW7csr2w9U9aBuwt%2FGz6vkyykzemSPgtbCpapNaUfcn%2FoG6VqEKxmEprOHU9uPcPkxqxXSjAaA4rFT%2BhImsamJJK51f6gwrrLgvwY6pgGvJqR1BBvOx9maeSQTaVBgCcXMU8emCaobXCbg%2Fbw3%2FDveS1tuCG35GNS15fVPGfD4hSjgfqCPnGtfmsFrOn3QoDcMupX%2By1Vu5kbaC09LY6ku83owRfJcDBfznURayOJ3j4snXzDSMvFKP%2BvvR3XsAm51RMz6d8nJ6sSFgAn231f9%2FwE4drVlhkoydRPPMzaZmeIIaiRxUDTAzcTAHq55GU3qnjfD&X-Amz-Signature=4d4d9827569b5b661121a8e8a0062061db93b26c034923cc98ba07e699ea8ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
