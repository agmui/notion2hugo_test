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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFX3C6L2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO3WSx3Hma8GxxfQiGWDjagNrBi6KUETpyojFm%2BPtrugIhAITrBZtG%2BQbTLKDUCPahnQFx5emf6NJeup%2BTep16Zin5Kv8DCDQQABoMNjM3NDIzMTgzODA1Igy1NORVbja7uKvvbkEq3ANi3tJ4%2FAVg55hzxKlT%2FAzZuYrTZcl0HVkKEQVJtwd9LoeXJgxVhZoju0OSnXpNqofThXRZOVk%2Fys5o3fZVdCZBgMy6XLnzPL9LdGk2EMwdD7ueXNtjbtlNd5d4e1FozjfqvwSn6r0WMIPQB9YQno8l57VlpSzaoFzHSCpiP7pRYapcWvzzt5orVQ8UffXKWUCR%2FvLxqlrRg2g15ZiOpMptMRpjdlJPld4Iuv20i6rwVDF4uoBHtblKYDu5MQBYDOWrzaqc0i46yiWGLLC3zM6ihnCv2atO5MqamabWYqMkXAIUcb6LAvBxM7ZAjHSftuX34sEAw6mmKlBW0q54PaGIuYEp9Cp06MqGDc3adMGALA6FzNUwnB3Xek7U8E8oR0tgm4%2B6cXR6jdUT5ze5SYbuBHhrPJGBJarNLkhFf%2FzE%2FmR9ajA9XmVwq312%2B4znkETGcMnlac8sfvM9ISGUuaYMMywgC3WfiDfOEKMfPPYqM0tPQ8O%2FFyqGwdNg7LQTZXZAq9XnJow1OTEu9bOLL3gc0jYoSQxmG4pSoY9EWfn8eL1chZNZF1%2F8D6Q4l%2B5erKOf1J%2BCl%2FkAMfOgLMBYob2SFagh%2BOxFZc2cGm%2FBOy8vOpKl6zm6QOF8z4oEJDDjlJG%2FBjqkAXC%2Bw7gB3D1mBM6BfXXFLfkHpBzXQrldPEyeH7b7Ad22g%2Bu%2FLAkVdovFJdiPIWk04%2BVJ%2FfsTj4FO7TeGz6nd9BW5jOF%2FKaRO38ImPpyccjXlVbnKnVrd7Ja2IMqiqKQOWTx1BDdFDtKa6D2xnT%2BTpOvOJ44Mw4Sz4%2F%2FBvFdJcukyl61aPZHduPttdxAE%2BygkpOKlAUCW1ESzi6UyB8CMB8o0Q9v1&X-Amz-Signature=fa2e620c8485c86a34d6a6c4677da7c9ac41e6ec6768eb29267b2d9b8218b12f&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRIMB44A%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXvVbXm28yFOT%2BWnu5Xm1egLt0No5frbY1Nl0CgSY7cQIhAJ55mYEXFjIUQV%2FzLtsPtoX7b%2Br8whm2ee0pynJRr8EgKv8DCDQQABoMNjM3NDIzMTgzODA1IgyW7CEpzHU3ZnkBD4wq3APlm%2FBaLD8stm7PZZSNYwOv6kbtlnvLaMtPNmYORoBMSUqV2pnEqfavMmFF5kh16cbzNEzBZprbI4oChXzuxqa%2F1y5zbVFaxu3TQ6SgK0FCgJGgSyEcm%2BiqRmUdrI57wk7eKPVcWmqMJGZBxzUZI7NvOEZLStU8eKl0PXG%2FZYzXBHNlQh5p5KgO3DqaCCvOPq4mEGNhtzHn1OgygBYlc8UtnTfBbF8briJsNQR7gx8GXZ%2FMxxwFXTEQ%2Ba6ghqWScfEMfO8orqHZCL73Lzy5Prez86G0iRqGqweKRTtXWIQYrMkRzaTIaI7a90yrKzj%2FGLeWw%2FAA20drgM8sdxEA8zb5tzbLDBAi8BXomebSDEyI%2Bye8XdIsnvaNhk%2Fynid0iWryizi%2BL9DAsyc2Qv2digcnP7F9ic9SHcAvd16rtRJaVcDG1zV3oNUJ4tIUuQjVbWWsfAAbgDATeoSitgRAxerQKNzGYf%2F%2BuNP%2BAy31ERTtUH5%2FM8G1Wb5A3ZDHV9HMmql%2FQ4gEOwfyk%2BYvRK1%2B56k%2FU5%2FdmVRQbP1Qlqm3jfZkxbjNVlth00J7lYFbU5FUN%2Fy6IIu3EX5lU%2FnJ4LoncOIv%2BnNFWHg3742UWCgGFLrYw5rdPe5OAALy6KmdcjD%2BlJG%2FBjqkAdns6AXHI%2F9AHvvnuCeUdWHBT3DcojwOVlEQBDeQ30zQZzmxvdhAu0bScmRv3ZAIJNEEwOrKSA5Y1iBQwXnxUbPpWSmZ71vXj5AzmlJeVDLloy3oCvXRClWqJzEQ7EK1EXmHEFPo5lJQiGfUaseJlK%2FHoRAeEf%2BCiGO%2BxKbqa6KEEEE%2FzQNpp4QSfq%2FsBCSANCn7UAVWocynvg8jiBKnzr%2B3OY11&X-Amz-Signature=da09d5142b98d74a81a5f80867681ec78e60bd9580108340aad59fdc8b064c75&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
