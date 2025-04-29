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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3JIWJN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FZzoM8rdszt60%2FOnqvhqo5j5c%2B4hGrrKzZSG2Rz07qwIhAJlIdvif8eNjeXGu5Bz4P1BJHDktDrjgZl5%2BlibLaSCXKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAux1lrbjY07HR%2F7kq3AMebQ2IeFzXR%2BKsvx7fZ45PYJHYP4WJoNckuFDXhe3hEveRDmnVWkF2uUc7rnvdgDF1TQ2UWF8mcTAica7Vapkz2XAuI9fY92mrd44s8VR%2FMO9Xwo63u88%2Fd1zkPWfXAHyF8X22tpdZkGGltVC6ziw7RFkcyqk2uv3EJGULbtxwyTCU2FxEmKdZ6ZeRXXdDdYg8BUHllZ41EbnIQ30jbctGtt1PRHgXcvPpp8aUTqCII4D%2BqyN%2BiWF0rFnivRWAFuXItaYlclTVplHoVmnV3l5FQ0w%2FGY%2Fz2Td8Qbvn4r9ArmXrKDYua9UbuLEIpwJGcJ43wjN37gB6rwGoBMI6sXtCl7Ty1BMa3zGEfTyYArmIyvc2dO5r%2BwDFlyUPNgmg6Gddw500PxmtChJlLhy89aha30855AM3iNNCRhgvp56amoi8c%2FGwDA%2B0Nvi4l97WkBQMeIzrq%2FPYMNKHUqcN0%2BCQbjn8QKxpyb1KL556d6aQXIlAtwOy33iMdRECvi7A%2BTexc1TYv2EYgdyrvTYQvUiOEVj3LY1WskzmpkE6FFiygecMQuT4xTMr1PiUfPA8zUf4ge6PGge0ut1Y6t2eH3HMvZR0iWtDnvr5VYTiTnysumSOYn83YAomCszR4TCvmsHABjqkATuSxJfhQFWm1FfJNr6Y%2BSUhJevetBztZYQqOSVGUt71TH9jMSIH3a6i0MPvHXO4DftGmi%2FvOSy2dWgoOo0uX1%2FBQIrSXFNyZzJryJB75%2BCpRa8TuHnnqE7wS4RW%2BMwUlZ9jOLhayi3QYiIYmZK1lyFVspnvzG7Kvm3GnOlPt%2FDxBnJ8HcMD7%2BexsaP0EWS1ntKZVE%2F2lhuh8y0zT76mkm8JVyMM&X-Amz-Signature=b68df1172b77aa8a6ae5fef8712cc2aa7d62cffd896953291e4c762c6cca783c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S26DLTQT%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEyavDi7GVNEqDEmRwwUTbRXgdYrkxv6%2F%2B3TG24ZtFXpAiEA6i1vlJedgdwPYoWdzhwLr26nWQrRoPfL50LlFEGicPEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRH2x05WOchiTOTgyrcA0LxDKXZBlQrEyc87JAq7eL7Mm3cVqT6Wa7ejsmuKDCT%2FOfPD5fJ7b0793lGH2fttavik%2FOZnC7UUqlM%2BLgPQaEJbjFE5IdsO21COL7wPnraJPKFSu4XwTnDD8SvnTo6APneivJ6Aqwlq3yIwk0BEO5VjiQ2meHRQ4ySIwhthdFd1EkwwMriYrTzGh2Khxrp%2BUbmx9hhbs9JOoqsh4LlFyqdQU%2Bes1P1tw3aMfQhiGzEnduRT1dcVw7DFk74QKijXemjiKiwPf2iZgBC%2F3AhVVFsq96MCG2RrFfeqQRG2oxf984%2BC1En7DJCywXtZ%2F7vY%2BR2XSfuty0UxtuVSMftbH9mqDo9hkwN%2Bey8qkEfxhIq%2Bov%2F2J9WnynnmxewubaIH1x5NftQO7x9CQ8haSfdJ5aIgrYk8nFPo7i0g8NEV6Oh%2F9QzgneUxCGS4apCXqqw%2BSbP7B93cX9L%2F1%2FDuhQzXEWyyhujTqe%2FncDhZB5%2BbFeC6KPkfl7U%2Fc6hPc%2F3%2F41NkM3aV8rxr4%2FREmnYuwQybwd%2FKPCK6uiEsxuW7g5R4Y8kGHXLgzcCbOg5U3pimT2yACZzY0ZeI5t%2FAOIH6yLz7v2ReUnR2FEs1NX37DwVxNAFu78muW%2BIr20iJ1gYMKKawcAGOqUBhip7Bk2m7cxbr18P7c7Idzy%2B9ozNHBpmP5iuoD8pKLTIV5L%2BLEdpBUKCRIEv2uxA6RPLI1Kxtcl97%2BkLMU7qW6310QV2Hak8GnWdiC%2B8AlBM2j0OQj0cf8Mg6mtcesCjHjykzT%2B45TLB1Re6Gp%2FsCgio9NwZNwiGjp6%2FGmML9iYQAWb43IUTIQnU1eXyy5W3Ufzb2g0YQsgbNnnO%2BM%2FgAdSOleuD&X-Amz-Signature=43d52456bc7555e8744d6729ccb7d81d9bddd4b2f4c3fe2efe24ac5dec0330c1&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
