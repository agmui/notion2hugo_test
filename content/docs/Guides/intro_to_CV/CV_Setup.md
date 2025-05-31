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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LJDKZ4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYAFXmrq%2B2ZBfmWDbz3Y9tHyf8OIZtAYcdBYKs7HuX6AIgdAzwNR79Cu5tGziw5n3pWS3TzP%2FDtskiH23j2PoiI94qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqy5DfvUuMQGGRlkyrcA8wz3iNvya4eWhNLakKUWNqKwW3Ts0DEjuhYn4ZljFJav2%2FpY2n2XHQJf%2FcxWfCv4mEWP233tzv1R9OkTYWHOQaY3xlRgvUjBfdb5lKOXdo%2BpCZExq31yTtahlvjkBmHqaQkUhbslSER2TY9DsuOPmL2fHoJT1RD1hDPoxdjeftxMdCY9wB50sFiTdYUKDPWRr3QzH8VGOw99a4mkHiXovvaFLfFmOTd7X6fT4HRduUoCsyT%2Fov%2BkjxY192KZ1AUFLHBHlcZWVymu6ZENkgNLgzjPq77NDp7SyKRh6oAdcw0uPhEul7ls%2FgdwgGVzmObhgvERojMnF7M%2Fys94L5HMvoRk0hhM5ielaDTax1l%2B7CtGDO3l3hC71Z0orFBaa4v0V8myAIa1BMB8eEqyovXryykRF0Ok3tkqOqJJSqIK3LdB4A%2Ftu%2B6jajSKYMPfQW3ryZywESndx2dsdMgFh2hu5btsGUkfjeoMDCF0F625F2ii%2BnIwUi%2FkbPPKaxESEPoG6Ohxqvph9p5nPX9cvENyKzjs0VeToCaHGW3BcswhpeYboNkmfnpT9vrha%2BD4f8ilOPj6HdVDhuX9kJDHV6vAgrKk7q9K6itjCFVXQi2uUgcKzPM23Bp8AGJJLhDMKuz6sEGOqUBhZZLrazxIZIg%2B%2F%2FLTa2dACMt4aZ4fTU0ZCX3tGGtmKSu4xRPCd7LNDsQtmVkJgfBhY0gkRBKPNhQcDcLPvJxNwd3Bsaw0SkeG20oNdeWMv0ooDqUeHORqnvBdIRNXVMHKHmBNy5tj4B%2BPvYEJ3%2FHDCiVNBTWF%2Fly7jT839mGk0keCjtrgSh0NUGo6FgfKbh9Z4bAC%2FyIDn6fVDor010hRpvvGGo6&X-Amz-Signature=38dba9ed60df3a891301f2ea5ed313b61353e4bb5f8824946f5e57608b65d249&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYGWJGSF%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvlizoT1QtC61OzaQfBRjUckIhR9a%2FvzDNWTEfqZdoLgIga8EbzSTSoSVhdGGBSCKBCMcH16ZZAI63hplJFCKKNsEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIM3r5HKfE0KkBp9bircA%2BiqSYUoppovEIcrZal3zaJKgi2L7zfZXC9bUgfH%2BK4wO7pQ5Dwfo5SbH2oKPvG%2FybfYYARHmBcQ4V7Ba1hByO1TDaHZ8KPxC4nnndJzQEB40%2BKYYcCyjpBZx1KJTBsKeLCbg8RWx5crprqw8nAePzN7lXCD0Ep92gZBsBPBbP%2F2hdel84FCBY4JrAEr9pY%2FzRfAyNVAHEsu3kh8%2F0BPPsdRgbUWRUGuYa4boKupNKYAaLChj8zRGPt6%2F3Lu2ynLcL8tlHLNQPVYYiwe%2B5tuDvsZf0EX%2BGUmMaFAr2iYAj1c8myRKbX1giTS4U%2Fn98cqVYxHaGDOk6cHL8FkOwmpMEImTWiP0annOiJltRLtinZoMFIz%2F4EjrY4h9F42niNzgPhftKkiDVESRhfH79avHT4lLpHZR2qr%2BmfmJ4zPdbpZJNdCUVddRQETWgyNxsnCRHwQVifUNosdYPs4sRnI4iIYhxP74XCPPMgeM%2B1HrsA4v7AvcDM%2Bnsu%2Fdl%2BYmR9R6MxgrkWUYBaHHtEAQ69is2oWtamqx%2BDkNoUXyZVKr13w4TwzZr03enIN8rVbWZMrgpn%2Bcj4JNaHAGfHTdLxJGix7qIuGUTbtQqtAeuRvJflMqTcUn%2FIU7Hxrq8P1MKqz6sEGOqUBqYI0ejOp1HHOk9J8SKydZ%2F92HPzKrSI7dKWeIXGoVMU6h3U6IqmXAlLevu8MwSD0AJxZiCDERvok9M9gCDDj%2BTJNAQqO2YpuPy%2BVsWg7zym8Lg%2FRKqzuUGpcUKOnSnG5BlK0jfWuVI1rSObitkMB0wcUpT0D81AE2WNX1xcBTq2uAxUlsbRYW1oM7NbYYACbKeiC61cLYgyt%2B9YNPwPZkYz8qNt0&X-Amz-Signature=6bfe2f19cd5c0e964df8207a6ad1d288dd447b17d74e46eef84085c9961bb07d&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
