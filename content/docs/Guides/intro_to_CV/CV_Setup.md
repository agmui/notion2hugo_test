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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466357CT2OW%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIGiv2vxJHlnZ3PmMuzk%2FhUC3VBMn1UKccUGV4o9j11DYAiEA7XFiR64Gx465UjYJapaB6HQjLQp44FAw51fZodo%2FP98qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDB94MIkbSIC%2F5B5CSrcA9LR48opiDdnBCsetsXWnc7NSoD0VMKK%2BB9q%2FFDJ%2FiX1r5pKUpK3KnMzJGmTbm8B6LlP36eoc4FIr3rzYhEbn5xGRtEzbKZe%2FORzqrWCguicbk7O8oahxDzVM2lfCkZUZLlRuOFo4Djwd%2ByNEKihV%2FxZRGyJkHTda%2BQcYm%2BIlQXPgJVw4TLltU3gVWxRG4Zc9Aq7OaGHH%2FoAdOLJ9g%2FXtosS1m3fJ4ZfrE%2F1dJW%2B6VmeOrVbQ4IoDzDLw%2BClXbhsDzUZV47I5zcC9hBUN2LVKAkx32R2XcZIQhR3VxkUG8MybVj3pEvq2FpP4vhpzaGkP%2BRRoUKdCdXOkez4js9A3cs%2FbOA6OFE1bQcETiJHuK7bHchHOtpUFL0KLJCQb%2FOoc%2F%2Bbxr8%2BHCUjwPaBwLCQSFpI03KvyM8Z3YUf%2Bzod6SYIML3L2AS2nb2N4Oh3ddeZXKgN%2BmgwB7vMhLmgnb3Oi4TBYbn492IhC3fxECoNtAHQ7DtpEO%2BY762e%2FRUNNz86OhuTe49LBmdklRGrynG%2BTCXb8X%2FKkjO606cviYyRhk69%2B2j6tXs3ntv54FchGDtazSDidQ1ZYLWBMZs6Zv8YHsIFDQuTsqQBegWLpsq%2B9OMn9y3awK4la7sahBMhMPr61cQGOqUB7qIxZZjNOq5aY3PYAHU57QXgPDruuLX0o5p81gxEMtu9hr%2FheJyKzl0XCg3NIOBDednXEXP%2BI0jxFJqGL%2Bqf6OVqWES5i0UKcxh8aqcR8HBK3Q4NBx8fEKebhb0D1jSiATqcdewsIChh2VtU3Yy5O5m2z5DdAJW4ps3eFMa7OH0n6YlpugB0vBv8ePANXtyARnv2Y6%2BBhAPWWDSPRgHiaC%2F2brex&X-Amz-Signature=d481caf2c0d605650a3bfb7c2895fc320448daa6632260212584834c34588216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW7637IU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBza6tQTbxMiQCM5ej1f16a7rpWthYbrswfaDbKK5W3vAiBvkGd4D%2BbwNwHWYE3ljGLbka3Cuuj7i7sLs8YvZO1jHyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpSRmteV%2B05zE2iq6KtwDT6%2F%2BRsbU6RrqgljYB8cT%2BUuWVCnQgYXZUDzkUZjLa0BFbW%2BMy3sqjKbZoeKmOdCFAVvAxb75lvTnZqUNe8RbbtTCklefCvnmg1iGUGQ%2FJZ%2FVmLNnOcD97VhccUuDLuZVzDGHQiyoERGwUVhp%2BS4vQNhoew1gpB0HfTYWvj9flpLsgdXaunz%2BOLA8JfUHlYMbTC8tt%2FgoW3ng371x6daZ2FvF7rzuivMNrW2HorPqcUB6Rf%2FCe77tnz3Sp43uFwEOoYawMuLOzHXn4UV%2BCW80D29BbrrutElfrIxJN7T2Lyc5HrKfL%2F2%2BK2kBIOdIZthmtKV5DCGUiCKqxh7vb8L6SjaH1KL0Hom5cJ2n%2B%2B90a35yO4UwPVVeM4FWzYuf%2Fm5J%2F39UcIHX7WMUwdl8DYQbX5%2BtFSAnZ0mRkqyeK7g0IvssruQEH%2F%2BN6goqs%2FyGXSm%2BY0APYBhffUgrkXUnBOUKHHwuJGzSnV75hCyLm%2B9HXV0MXX%2FOBoBlxS5JFdODLbn2gQ7N2yW7dtChk2%2BSE0JlfyGKbBAuUuHvpMm%2BMF4fKSYhCkQ9qz3i%2Fj8BexqRJhPYEu%2BrqjRl8YZFWchokdxmIjr0ess0lBdeZ83Dg%2F7BaB3yaHrqgexqspi394Ew6frVxAY6pgEOY3EdZgiR%2Buyl%2BYQF1kC2IWLepcndiHd10OOd50drvbJGDA7XdwnBC7%2FIgtwxDSl%2Bh%2FCsM7R26kuiUA0CNaufuG6FW0P%2F1kBMLWTXtht2iHjtExFq%2F0H6151%2FEiogOi3z2udqAjTvfewEPMRZZ5nI%2Br7xfvwHJyblyEcB86BC3CNJ1OisTBw3mG8oK4uUVfpLicNFz8U1cGoU53%2FvATOVuPVFHD4G&X-Amz-Signature=118937c25160783a40c05b1e89aa499b211c8ddb7949c8ad4067ad17bd664b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
