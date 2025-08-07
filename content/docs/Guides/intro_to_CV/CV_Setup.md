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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CWXR2UD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIEMyLPDegJzacBaVP9CRONgpolBCyoA%2FpooqX9qXlYMYAiEAjLuQEFkzwvOMKACtZEXB3y0LJIMyOIpJKfrfMdB38CwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2B2e66GLM6zkomL7CrcA472SxYxjmma39rHrA%2FPyAgFPWoQDJh2TScOQJiLVcpwF%2F%2F9Mz9iHmV8Zo2pcJobOpOQX%2FtQhPG3cHMl5Ig3U8R057NcocB2k4SKqAAoqQBwKOEkcVRvbZGuG%2BEfC%2FxxU1s0G%2Fhd9yWZ3cS5ucsjmwKITpYqgvzNDbD0S7rK7t2FYHZuS%2Bo%2Bm9TsfN1U%2Fj6vfQyIfTJ3w9vOoLxjeu16g8ugt3b3YbxVxvcugE7z0JbYUM1CVSux9Cmnj%2BBJ4zsu%2Be8sQf8xOc1lB41ImlS64yTcEBtcxBPIreuchD3QmEAYcnC2Kh6xeENvTn4pa4vj1%2B4imnd5zH8Y65VYAaQuw%2BrlUO9VJ5G6yWtZJfo8pjw9OR5bx09l95GT28Q8tt2ig%2FfyDEbcXzp5vu1rp9mrW7TI8hGnHPA1BKYXyT4f%2FvAO%2F3rNEBZbKfUTzzqxgud7snlHFTSzsDC9CS21qjXgC5nDk6dbuq%2B19lur%2BY3%2BP28M04A8AeP9HS1uiMHjfrMW%2FoaMUz75fd9NrFC7ZjpPAvyrNxSBz3bbfALmCHfW6cdFL0L4iGqYDbTylBgurmx5%2BnIntLzFQ7OTNqKYkvMaDXQWY00kuluU%2BbiMU1AqkM6V9OI5fCEHo56qPzCAMLDj0cQGOqUB%2BVOYUjo6Y9%2FvZ%2FD%2BLAkuF8L88r%2B181C0dnmBNmxosILANbO4R%2F4h5wQ83oMGLeT3zGyLBMqtT1gwn83UOnIgflsGQt9RF%2BV%2BBHGbPnYlKDfDR4I9vWAfhyKpAOLvFZ85ZZSPvH1oflCgHQzeITKokw8Qf4VPmPRmIgu7AN6pvQRi1iyqu7WUAMX%2FqT52MDXsS1gmOnCeLDxpNrjnekIGn7xRR62T&X-Amz-Signature=bf2cc3fb9e7e5c7890f04241b92a559775bf967265767bfb8a851e846805e144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634KMUWEU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIHPR7I5AQFwggVMsFCe5ttJ67yqTYD8Md0UfKafoluTNAiEAib9D6E4yx%2FBVJJXmXBMtIgl%2FDAirdSIwEmreW0oMkYMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZfAmLEcsMH5uE8BircAxwZ%2BVZndxe8iR8sKFpNj1PByynZBGV%2FCB%2F%2F82rQgCVx6U7SWnTwHA6rYpw%2Fa4AvHY91Xg17sENTeFpTbjgcSgd9zKNVV%2BYv06G1mnobPSWBx9RYAFlwptyYwAsTZREhl5HZUmUq%2By09CvA4Cc0FmPwWA%2BIbvu8wM3cTsXemKgjvWRkfTH7Uq%2F4CtaFC%2FEbKwzAip28lSNu5chKVwLCVT6vbiMNvV2miqR4nQZRT7Hs1BiU9v2EEGWA82YtLUnFtqH9RcUattGzycrRICBMKssTl%2F7WRumcSSDw3L1oQ7wxyxrwrmpVMvU4o4FpvYNVkq8yCxCQM1ntRt5jz3sy%2BIkPOd5DlFmz7EWhnsJIEBXmpJIR%2FYHldlrSVMWa8x8feRuiWLIrWbK%2BVbap0JHILSvEN%2BnKRhn%2FAH9vAlXlKYQvaBpwmO%2F4k9xEhhGbZCW3IC%2BGpR9CR2eZdkyRSxOOETThfZ%2FEzSFgYZO1IXp5D6CXEenHITq7r7DxqJ0Cyh8b%2BlTlXwDAnQe8DEpcJQqzgLZCOIK6kf3E02bntqkJOcMZf0k3wxeT00M8pFmNoGb5JRTSRj2GdGykYoRpZsjHpIgbk%2FhOdwUCRRFooNUfxnC87dR0YdJoqr%2BsxlvMjMN%2Fk0cQGOqUBzmMeg2eLyy8U3Te5TsZEnwO9lgMaJcjgoFqRlx8W7Sq9VA2brfp%2Fuatl92DhYh%2FRRU7aRcIo1wqx7kspj2CQPqcnG%2BaQd1wqADTws7nSVSEvtd3WkfEmxvqbT438GXjjTTxVsdZeLArpgJaCZJBhsk4BaGmuNYoQzv2IFdso0Kce%2FWafA4PxDv3bUa%2FOM00Jls6F%2FlHkHy5Pb3IhRv46mMSjCqTt&X-Amz-Signature=af2b3c2582e451989c6d4147a5b3aac86d7c33e4b2a3cfc672489546b473f09c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
