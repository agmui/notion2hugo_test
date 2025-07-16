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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EQZTCN3%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGKs5zFotJal52aMVO5QpG1iAt8ng8rz8ygTfdPkIq10AiByPY5M6NwmMd2fwNfxRnOw6RmRD9UnUBj0ltWycQbclSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMLrLbnL9w2%2BFo6k2GKtwD%2BRotZV5dzcnQW%2F6RyxAW2U647NfLF5PK%2BftC1KppC%2B3SetHcczfSGNgfoX41R5wW9AUN07x7e3X2%2Bd3Eikv9Q1qypkws%2Bcp%2FT8bb9%2BAvNIIRDia9X%2FGc69vis%2FaRH0OoB2p81QUCjfk1Rbvovq2yMJNyxpNV9RAHkn6llY%2Fobi2JrSX3AkMb2t5k38J3ztSmtVA6LCDF%2FH%2FKvmcAXnnkTBuEH8I8cDdV6tKGvu3JkcYEhxUtuj0dR4o7FmRpBk%2B7jbJWEKB4elVotDHeJwtKq29yijNEh0T0BtwCu2H7wa6goWE%2Bps9PkBJcGT3Xz%2FKDxlRaN7YTH2a8JtBnPPwmf9MoVLxMPin15Ykr0TqHb7dllCTV4yzfFBoJ9RpGX4VkjwcaFDatKhB3dnnV%2FRIVOYhIpNg4KIPM%2BmJGwCQcSzUS8EST6jLt1MsOSrd5hGnKSj6KRuxkJKFD%2BkxPcktaZphWOAjZvHoQilCQQPxu6ZXcxsHhjG7w7f9WLm0g%2FxPXIY5mV4mH6YomLdLmHtzEO9aY%2B0WzbQCOmGRz5JsjUY62ForQhShgc1C8HBCQQQJyDXuEsarns%2F6A8nfkl3MvJACvwZ6JNd7wNNsPcFPJh%2BBHnRRBTp9b2aWu%2BEQw2JPewwY6pgHXF5N%2BByTGTrBYO%2BE9%2FAbDNOavA%2FHVNjHQnys6VaafFmFkAhgYS8ui52IModOM3N12o8E4mc18swqLNZpvbxOrIMmOyy1ff6fK5tMecreVMWAjh8BV75vyd8TxmqE%2BlGNA7N7G1L3UsZSfBnj5rDcJ1srV3ND6Oqw9Q4A%2B5%2FFqTquLu3x7tyJisioKGMoqVLEGyNF8VvzlSpbsbOdgJwk%2BMmXSv3pV&X-Amz-Signature=14168f7852e3278d1ec7a2425e8a96224b6c34255e26699fcd70ad793d8070dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UGLRKLP%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T151007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIGN9SQndr6lJ37WDWKqp9jd4UlH32wPkFvR1kazoo4g8AiAIvxq%2FJIFWZeOi8y8nldlYYROw1AoZlmv15moqxLpDkyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM8BE8lHij6nomrkKwKtwDVujE%2BVUsYoVJsAXs2PapLgsO%2FFZPhf8ZFEXfgedBN7O6HPIvG97FW46p8sZHtWa2e7jFVxhxF5NVmAbM7EbJI1uqf3bymBcW6IXqgfNKCWRmTCk6LHTQuUx2oqIZerD8H05mX%2FkaWx7Niv9UagoaWsVJSNmoE20VL9RefXkgteOjwNLCv33yslm01B1Dr%2BYDEQoBbMA1AYZgXS79wfsj%2Fur2%2Fj1MvFYdCfv%2FS0m4%2F5WRVOXYL1vtdJtVtt9PURjaFo1KzdvtyJ9Br%2FJ3S1yFzfqXz0vgzQT7bgYx3gHj1k4Wl%2Fofae%2F2ITd%2F4KJV1rHXFgHYrzqeds9tR5KcuuocAQf3hujvEvOpn1xQkPqmfF%2F82vue3bjLlPxyYPcIgfYF3RpQBpyiECtPdXcD6JNKTlszbBByazqcOp2VfKl69PNa6wWxpbwMvJ3TcJAjPqoEbdc6M2tZLXedqIaYOAwoMPFuw%2FKJVHh0oh4yTW%2BcfJPlKf3uJ5FUI2h1s0JZr9%2BFHqt5ZG2RMLd4G5fCWjn3mZJ7BeV2%2B%2BSZr%2FW1zAWb1HgsuUTO89W6pOcsRjim8eKPzicXvY2wIQzxvTl0Hvgc%2B0SpYhJ66VH%2Bjvg9L2yPNsYFV5WsgJJw6F87AcAwsZPewwY6pgHFedzSiYLvBdkEKu7J46MqT6QXW87Z5Jx2mN9v77uAoTeDUBTLxrZu3uNv5qM7CS81v91oAYiyU6nWFMsgkx2mWYCxqVtXPpai42Qvb4evE2UcsGkpnX8BcveuCR5%2F%2Bq4sE9llPDO6DxLHKnvbZ%2BQ1PeJqRbCozlqdlCbq6mpvjLPVOd5lIjJE1MB9avU7Ds40jT%2BIHMd1UTTv6xiuwp7ApbRBRvzm&X-Amz-Signature=cd7402b692ddae660315ce5ebdacd79984c547fc417714559a1e7c37a6afddc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
