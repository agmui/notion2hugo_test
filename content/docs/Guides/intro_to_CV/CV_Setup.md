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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFNIGWE%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCONUTdbv2xxQKMralMt8cQQu%2B5tPf09i1vhJ9gxN0QyQIhAM6f8ucUvR9pCmx90RhlzjuFkCUPdTgcDDkRH6FftwFaKv8DCBQQABoMNjM3NDIzMTgzODA1IgxsyIfLoScK02XWCVAq3AOk3UBtNVVxRDmsWO3Le7KOpyKo0t%2BU4i7vEIkopbfKxLVT4v1QeOVvBMlEq5blTMWoTS33IhBbtD21sUF2YrsorR1M2uJd2lJHKGBfXYV5GmC6XpBCPHpLS3PmQaiRv50a86Zf6FoJ6DVbCH1KdXWkQ7F7TfbEj5J2Bc1TPoALhbxd6Eb3VSkNjtKQHBm%2F8bq6q0Tw%2Bg26q9Z%2F2qwR%2B4VAl3mLaV0wR9Nly%2B2zCWnMIAdD1fhiqPsabiGffpxsP4MqUNXzncNwgipLsvXehRdBqxKG3Arrd580cHFXzs7BEasoEzN0%2B8ng0NjATdxLxVgM2OBx4zKiFV1AFjLjYrpcehhBF4IOkhLhrqMqNLTTdI%2Bdwf%2BRl%2FuIoHECCM8CHrzl2l4mUaYYTbihu4yvnzi%2BI5ZHIZXDmmwLuISWHoIxeAnkBP%2FdPBL9mmBL8vEjSCjdLuwueQZX6JJjrSWZjdywrPCjEK8SOsSW3fpk%2FxknDUdsLIZ%2B51Kdi1o7VxrmNXoFspW85pfo1hXQwcDogb4kY3c%2BNqES2FWtJpV%2Bxc8OjGZuyS7TEiRrhvyqGdfAE%2Fw2aAAftS0hIh5A%2Bb5QmjjwxS9kN0tj1KFYbgn4%2FNG7P8TxZfn4hQDa4zu6tDCrhd3ABjqkAX30Y8Fkx5Wx5C%2FbI8%2BH3a0pMKkTa5HHLYsqo2OYsaxMcbzpCTwnrVeNF7u6Rp1ad0IhoC2TDPzlBxexVLmqD7A8rY8bG5QRmLmCf90LTVqUx2Qt5NRsfbgeAqTpqUz591HorbJ8pnxVH5U3evknZqYoat7xawU3PzO3swVenPZCNPXHwpUgDJSc5qNCeengtQvUk8TFND3oOLg4gnMydre%2BJmin&X-Amz-Signature=42c50ebe577952074b20ae21c648a8d16fc38feded999e016ce468dbb60eb68c&X-Amz-SignedHeaders=host&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCJ75E5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCLgZhbB4CXif8kQXXlSCJJZRIX0HvNuVuuiqvm%2BVYeJwIgIpP%2B1mI7ZZ%2B7c5mrM1QnUbTWjMK3oAQm6G6BePdjWscq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDN1H3DZOeYMQdax1vircAyPcvdzbs0kZQOwm65lfWMBg0%2FJ2Bfpo%2BUHLcHLME2%2FtqcfldLtxt4Plh5nfWW7DXEk3XHHrT5PciLEJ4Ik173QbPS%2BJFjds7o0Uu7rNFzrTxNNhPUfioST2dBbxc%2F4GO5d1viin25TUu9BPs8vcDrA0fZ1nsPJMJykGmJzRbp%2BDKdIXlWGdZDoTsK3vmWqjb3Vm8bKI6HLevpPWurYGYvzRUEiObP7ioTS2Z5jfYaWpHD1MGSSlk5iN7nA1GsUNbgtV2yKE3Wd8jgQAfv4AUEmRQDVCRvB3ol7Av%2FLUd5yCTSG6%2B2a2nks4cptiiHKEy7zLxdFx8rTsOOJCLyW3cNe29uJDxndKQoYqUT08bCQr6b0l879tLhT5dlMLZgXQPHWFxr9inwi%2FOm5%2F4NoFs2FEsp0xFy34pbVC6vGzcrnvFyAOKcs4dME8QBcI3i20z6tfbnOVokIBmiqFpJqFHPnSiOUNWboCSP6y7naRsc0IXkw1lwxcLYWtH4LUIkS%2BGw%2BjbgK5IHaVKz7N%2F61hAMWVV4I2B6AtPSv2TD82oxY70BwAf3SQ9YySIJjVf7Zdt4dIF06aeYLn59DTqN9aR%2BPufSUoN5D%2B9xT2As2nVZa5czXdxiYK6lS6t03HMKnM3cAGOqUBk3Q5WyAGfXVnB2xEa8Jb%2FIL4WXU%2FXQXlEMyeLCKTnN89kNmiJyzhy2xZP2inMouBWg0UuqikLazgushkXLEgaGiUsQI4lS%2F1vr9OJK%2BIrTBoacEQ6W9%2BsBXQrUZtovUQWg5%2FIPglcqRTm26rIniSkjx0Z3%2BXtM9sNH4G6Uwsjk2U9sjn59JW2NaYF6fSq%2B%2Fj6TTcWHlhI4LJkWRMVe96HRFMOjCK&X-Amz-Signature=f511e9717df5be8c3d9cf203d650d1535926c7c230bc6e3dadd3e7269916c743&X-Amz-SignedHeaders=host&x-id=GetObject)

enjoy some pilk!!
