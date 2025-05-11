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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W56K5AUA%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIGzJU3ApZ8Twrz6UH8aIa1S2CEURdiiFAFzQHCI1zIhvAiEA0inX%2B2UKe68Rer2jwD46rT0OkMj1UiFQbdTwEKUwZ9AqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZyvrNSXJCHNtEwMircA%2BnKUbzKoayusvyIDXml35DkZWs4HFisOgzX9d6tVD2sDfC2VSeOW1RqC1fVBkr4MX9sgn2sQoKBRwPQSFonF1%2Byy1nM1XolO3w8Ms7CyufQwW%2BE0F9QJN9BIy3WDJemgn4UkOGqNqt1Xik37j%2BfhwRnO0hr7ylL%2BIG45YvOlApwMcA2Ur%2B%2B5T7TCL8jMzVaG8alJhmUdfGMypJ8DELZ43%2B%2BsCbAqrmad1yggqr6QLTL067OQiez%2FCZEgjOS3xgMC858WMiJ%2FvI%2Fdev3ElFqAejNfkJzrM3tjCPa0JVoSIlOwaZgk6%2B3RpCjHJZSVhcZmYEsG4OdZyjuzbqMwEMxIjEipj0p8eo%2BlDFTxiIJR4fT2ZPW8aL0u7xoIilrJ9eZjoGKtLnybZBTlysRuRhsk%2FjIo7GqaAOZfH3Pe8f3CP5RHeDMTzk5YhGf4YYlmE21W5W1H6WBLxlZE64hJUWYZJhEgf7sg7Ucc4kU5NYSx25SS7D4mmCRgPklrJIC3tAjdjVclOIkJwemRyLXZe2KqiC41GQqqLWDHkiq%2Fo0rbwZvODG87M0fRcuXDgphw4L8ZaYjVBqTJ6zMjM9SWQnYzXFK0JUykW9KQnFBuEEuRufTc4ND3g5PmYBtwVpjMPu4gcEGOqUBmuPfBLTO5gs%2FxmabLit79BEBNZYJJw0F1cxp1yD5RfE%2Fv9YM4Eiuh4eXCbQpwaBdaNbXZ2VAY7XKLwvJlwBxTLSPaVxSzcJzHeGi1YpXz4kSVHkvIf2mWo5yHxIjX6Xh9vJPcjEINrOuzEvZY9CGrSkLPZ03YlN%2Bf9CZ4rWQ5e%2B2Wa%2BUa6OcfZKbYin90vYnj5BMMwJ8YkzbjidWrDHJUit8gVgy&X-Amz-Signature=68a6f91e84f20ab411d298e83891d591c0528d4e5ec1588fc70c3afe27fae078&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S54P3HAR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHoAkiXrx%2BHVau0%2F8W0JcKYXVuSX1%2BkffkHD2tM4zLK2AiEA1OzVvnEn7lQWwtupZFxc6HQVOzeYQsqULt5xpqpYUwEqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLPzwbIjBy%2BxAz9cSrcA7YFOLrrza0S2OlYJBMM3oU8MUjisT%2B%2BSHlODFTtquA5Ke4K7nX51HbKzmFOSOHaNOy0o%2B6%2FUFtndysf0b5jOkgMHbvzVWNBOMokfyVEmu499%2FHLyt7kfo2xDMPyy1GPLnso1qAejurLnTJvUJ0rTRfBQyYuz%2FUX1I4oxrkr3v8NHPskGmtMyAHmi1s7AZ464wNt26cfNnacPkITsmOvcD8Se8lZvkvsODRg%2B8McGVArg%2B7pgJV8a4VvXe%2Fky2jaqLv2uAUwLuuyx4EB6hcFSo5Otont8xq4Ec7E9JdmWU2%2BlPzssOKcFLSenjsx8zVl8gl7q3pDnKK6rwJLt0oA4myrErGRSF9XAxk4i0UmK6g520w4Bsb2ckqNoz5qzS1E0Y5M1RPOy8VxRYC8gJ6bM1%2FUYXrFL1vKFPwQlePLHJqn1Lba%2BkqQsv1wFVDVXsXTv7pLJ9acqJpcECE%2BriX5EKhfxeFyR7MalwXf9uX4%2B4pgDlF89qzy9MDBGn8wJ1UeqyehS7jX5henTsa2ZWf0qkObb7EhiMvlpWT4Yg92vvhfQa%2F8QwPEeqs3WScxLxKavWsIfzWUrRQYEnzhU%2FHX2ujYrgc9276XNM7Khl7o5qa2gSkGkGYPE%2B1PHxVOMJi5gcEGOqUB9SCWvlDR80G%2BI4%2F55Crq4e%2FMvAW1JwrkwtOZbYIqoO3Zle9KTHCX1o0TGeY5nKRct4vTLlLnjswUVfj5UF%2BFitgUV16jM%2Fy8qq06jdMkDF6kE7f5pr02TZaWq7mS9ie1euSThYpRPG0yG9aRPNAVYUGXsexmafei7qLC%2BQPFTjhv9UtcbaX0qdNIR8MBRpzZujHhPKjxV7hnv8F0uC7rvROHHCb2&X-Amz-Signature=e8d2cfac50cff42db22fbfd42c30eef6d6efa3f6dac04353221dfc11289dac59&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
