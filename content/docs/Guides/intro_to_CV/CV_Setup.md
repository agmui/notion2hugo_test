---
sys:
  pageId: "17ed3673-5e94-44cf-b817-f54bbaa03c06"
  createdTime: "2024-09-01T00:08:00.000Z"
  lastEditedTime: "2025-08-14T09:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_CV/CV_Setup.md"
title: "CV_Setup"
date: "2025-08-14T09:43:00.000Z"
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

# VSCode install

- [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
- Python Extension

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY4XXUNR%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBpFYAdF8fKBiUz7FXnNRgrB9iHOfKucVobh3d1CjAoJAiEAks4uY66OmECjobkfmByBdqFlXrJH0aTcYEcE%2BtuDVvsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJKyK00wfpUfNhOLwSrcA5fpckoGL6J7aPA%2B1RcUOieasKvLVsFpNYcEb3NDC30Su4JGHUuTLPCrXQ%2F8zob2w8gHMA5tQa5a2V7iUIxalfclZvMwWm4wdGn9jVrZFRVerv6ymUoM5R1uVvpFTuT5RWTobtlrs3A5EBjoMGiAhnMWDxBGGq74hJcEMyZ1BRvNVfy2n0duKc0GytpvsoQ1TmNSJeORFYyeSHiYXLTuHqUqjJRoYSWMBmMqO%2FscTlWT5FFKHsEHnDPTZBZhghR8c6psmSIOrhVJ60vAm0XMgM0UMy5j9Lb7VtozlGWC%2Fw2ESMUI6yhsqOEAi5cu5tXKL%2FvOpnKLD3W4ODWuwOFfh2S%2BQlbYHSIKfbHOgYX488cc89z2R%2FVgV0gJb2HV3cF%2F7M2oTuqafJp6H5FnmnAs6tXt5%2FmYmbaIu1YltkU9VxrNKmKOlVBNqciiBkLtoi0%2Fq5wa7Y1BymdEbsJFgZTeU3hlbowSizrO0gaxgwhVkSBJpZOr7aYT8%2B3bir4Fvu8BFWktOZuKusMiY%2FgiluQKlrfTMHB7eDJcyA1mlb5Q4Swzr5yBbHeJO75VeDxpBR7U6Ini8pMAY4%2FhqBUz6HjzoRXWhQXxxE5Z5XO%2BlViuz%2FmYtkfBrK0%2FMAuuUSvpMIGj%2BsQGOqUBQJn9sgd3C6BGA6hYTbQWkjGAsRB%2FoPRFDK7o%2B87BF9u3oCpjoJWKWobavEk2%2BIqwPAwKSZP0zrudJndSG4KMsaV4opDnGtOl8A5LwCSZFRyEuGBHOPGbwlYvzx0iMvCiEaHNGTgsQs8y27w1Y%2Fr%2F7397NPmkEn1AadlvMs3W029B3OjJOax6iiOQrW9LUFedJdWJSohQLJQmnMsu%2F%2Bn5E1Ip8ifG&X-Amz-Signature=5d02fe28a8562ec77c0d9482d5531a6232aa597d00396bba34dc6e1a55b86ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEE5DZ6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDJRErOmkgRPNj3PXrZgZFviVxf70Rk92pwCH5DHKPrQAiB6Z6sNErwYL0Bkva1U8gtoV3D00CswQXy7OzmD0%2FU%2FpSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMiImuEdm6FRK%2FORwgKtwDI4YQctlOVzhiStq9tqPL1pu%2FmG0rtMSF4i3DN%2FYOM3%2Fn9h%2BU%2FKautMPjw4Qu1Aykbp%2BclnaKFT6WAyKWJjbn8howD1OdniERiDlQqXwUOVKWd4J5JoYq9sd8RdIWusmxZI3NCWVqhXpvfDd4rnVtj2oAEiwCPLQpB58t42TrMWoqajrrPUztD7a7AqBxs7Z86svI44tB85AUSQHxjeo9LoT3QRS3HqXYgnvUw0L7nJX6Nj56J9tQ6E4mnfXlMDmtzsObsrpEgLfifgDmgpUgtkM2eqdTBdQqUxcfI59xRdDDNByJuxA6vjK8rpnxgXYLoutnkjtBY2cVrMUZvdb%2BDI9kKnapBeWumMMFeJklcg7jLDe11btzGuHG9i09VFNUbqu6x%2FPb3Zy887dsYydIryNUydQjjIQBnIk2zCeIbd7vbveop2yh4Dc2eLy2uAm73Q0qgS%2BJ94Ns277K2DCjF%2FJDvY7d5noxHiIu0xEa9XGzmfSgVYiQxm%2BtgZex8N0CLDqZFqES9h6f2rcV3nbvABnPTqnvUhuSfXHA0rbCgdNd%2FD70BnCfcCu1NvqappmYDtDF6C%2BlCFhaUznVtMPyJigsGVXuG5%2B3SINGh84OgEZQM3RbXZl%2FtvFgeEIwqaP6xAY6pgF%2BDeVafh0mQWNu1EKTCMZI9OaejZ3iDg5fO7qCuutgOvWRyEN26dpuUO0vbE2ZRY9dapPbOwqGLFM1mhmQNrM72hJeq9OoxeFtiIgFn8FgNGl6NreHFrL3qyfnnd4l%2FzsLA%2BPuW5vhsTGCM1R2eJDXuzVfnQroxxhFVQF1NBG5F5OuGRIyWkl8NlIakNKFU9LjF41ebCCWp5oRp7eXYum1YXH32yVf&X-Amz-Signature=be1349fdbc5ad39203aa0becfb2a36870036cb12a26c62e826054a1b054085c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
