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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2HN437B%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIHEYBoYecrfa1wp2yMHTjLZRgrj7UNbEfpTcrmMLSDYXAiEAlMYZyKIxaot4P2a3vOzfnDn%2ByfuVLm4UfD17Gi7h%2BCYq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDAWaxHwrbDe47ZBKPyrcA2CtDvhC%2BZfkKC9Awb45jXAb2cjBImOivv9VUcocUnGI%2FG1FoR35%2B8YPk41n1KIPwIzc961o251GsFCoh28cqIDBHOodmcW3RKX74EVAx5G%2FdJliGqnZ%2FFJbp7q7vfaIRLCIKj7i%2FzKcH0IGzTIizeUn1yCwP76fliR%2FZ%2B%2BlAopItOMaDUNoTzR05fOLaV7qzqQrFig81jvGlPc2ZG%2BSdHNUSiMzO385sSlonRSuUw94ix56QD%2BLP4lWsohCeH0nV7apdbp5KGRY5Pmi17JkTkuUBoO4ynk57ab5ynC2oSEvp4aqiA9ZNYsWb%2FJDwhp0VbQ3TaQLuHVb7XILEEjAhILoJyZE2U5E8ITNbnF0VPbvRxhAke%2B13zcAx2Wy1sdlLc5xKSWxKZZPF9YRCOneNfrdAh1d2F1PkIJ27xodYVWwKqE8pt8z5g4zvIKnHxP8IkVV%2FbxRbmuU2hSoy3zmdWN%2B6mvmv0HrhOd009dObOAaSKLjdN3p5eGnpeXDWqRQvre5l91LxHysFCciKfAjq2Kx6vT%2B8cN9nrkpLqqnp2lv0wMtIsUICAo39vslU3K5slUoMxbfq2zamwopYRyAE1yp1e7%2FKRYzqYv2BtmOBocIcVyi5wH3EYxNVQ%2BOMKKnvMIGOqUBHGbblqYLRslPLWIfb0QK3eZfYFRBGuN0N8YvP%2BGwTJromj9%2FScypQnW4dU%2BA2XpsyAQsmky8jtyx60e0C187L1UNaBSLxMqVO8lbfDkapDr8LpZmv1JgFqKY1hS28i%2BtcS7J3jQH2ux2SVFYB%2F%2BYM2vfY0czrRxl%2BbJxDR41U3bKzqaKhDCIS%2BBv666aYQ%2F5THE5eThkN0wmd6luXEEzz%2BjyUEi4&X-Amz-Signature=cb0c3c79d91816137bc22b9670909dbeb2e1198a029e2b471794d4e59131252a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7CPNUSV%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDDZj9FAEQlCg7cK2KfrvsxRlR%2FuvYC3K5tFz9DTAV36gIhAJt4GJNkDU5A6DzqaVEN3PXLJnbyRIR2uNFQ8McWG7%2FcKv8DCEwQABoMNjM3NDIzMTgzODA1IgzKouIkIM5%2BTJ3rFRMq3APvhbz7hPtnUzF5ZSHz6Jqxcn%2F7TwRIK5Zdw529fzVuBsj79OqBxizOMaEwsLXHEnK6GBDpc%2BUuN5OYEDl8vbyKhyeQCcFDU1vgAysEUwdLeTsWQuxmihN7fjwtzoLR5At42t20hC96kgMsG%2BfcLaSbMexCfBHwCaSsiDVRFYaLhkJyzmXPIbveuY4uZ3TarsxOF5lplS82EUbLrCjfh%2Fichqvp7%2BCvVkxY24rQwebrub%2FiKgvOf%2Br%2BtyvjSG4DutGHWJcS5AU6c%2FXBnjfA6SIB%2BecXeS%2F8qpvORJWE12awjECo%2Fs5NdZE3bfba0pNDO%2FnJ4fP6BnkxKoQ8ztPCNeNsybHH6s%2FlSzkBKv16xHLmUiiMQJdwgOs2KC6J9TO3u848aiOVkOY7rVPTuykRC%2BwpHy6pGBAzCQrRY22july3f50B4at2CEnZ6RfS8LoVGRv9Aw%2FJAEIHKQzdCSEE2uVoY2lRmaNcFbhvB2AkNqkzi13LUjOmW%2Bae26qR0SHYEbgOFo3fznuwIq7TxX%2FuBwTA%2F6R%2FRYCpkmu7337xmCEfOQcU4sqwSaAltZV1XuYTeFJL00aWnJV8Bzu2R5FRGdtbU%2BhCiHyfWFnZPvvFFo%2FdnFgbIRMVCx4aXGT2gzDdprzCBjqkAdHdn%2FgKAyjEazGptXL%2BjwMQgx%2Fj%2BV5kSrDdlC7mSkUU7w1j9Bta31%2Byo5z9EcHtoBo9ST7vkqwv59a7cggS7FfdlXRc8pX3dtS94PzbVY6Sc5BdqjMK8XFLbQL%2Btu0BdNxmYujN%2FiZzGNZcmcBlLqCuar9WmTI2tvbGL%2FQC422Tca7jdZ9qlUu0QbUyEqlOpqflyzTDXH16231KiWr15VuskNBW&X-Amz-Signature=2087fa7812eab334422b4d782ccb672839ce0d08c1123a74035e9bd7991aee76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
