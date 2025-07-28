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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFIAQARE%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFjgDHCZMpoxSWYfHc5ZQiQigAgo4From%2BsdSGqp%2FXUrAiEAkiLerjTviKCHTpjPjL6AvGJIhc6X%2BuzknVPfA4Bra5cqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMXZUHu7C%2BxPOtlvyrcA0%2Fh5%2FyXsAlTPkZ%2B4AF2OPKUZGiBhExY5Q6QTp8DJ%2Fv6%2Bhe8SLxHp1bAS0Gmmh8F%2BE030hNIWUROr%2Fh7r8SHT3SD6Idpoq4ThjBLF2OUYazaKEBRAwJqRsHNIoKZzbQDCDX%2BtuoSlWTAczwdo42lFQHZ38jmyjAviIDhNJXZP6qr5qgfkpEXc5B7o%2FagRNNP1fXtMUU%2BXOQwwMimx70Xmv4jHpifByZzE3KLtjUmzSNC8d81eCMZPjmHTLPRgZqruZ2x2KZD2up3mmRl%2Bb%2Ft6Scs1EjCzTk2Fejeoesx8t6ERvZMmp8roE7I5wkpLs0a0A8soZ7nrMeAfBgQhApa4IN%2FW7iCpS0Oi8a09CP4DfXEJBJwfhLfnoXmYNIwL0xpZJAggMbnogt33rTkFHg970ye2o%2FhJcn4Ouw9oT4sXUyY6dI9dlvEAlqVEcYt%2BgvDiYapH45HH%2FaX%2B1KSVAplG8sHtKTeyPtpVWGZrXtdU%2Fu9G0T9Zqv7xmtSKCXee0jnnPKvUw7FpCybaQCRVgN31YAVrK9%2F%2BrU3WTUtv%2FK4%2FKdTqCqapupQ0R1%2FE7NH0PBJC%2BNSJkjCIpJgop5HYFgGdRDeT7elTSfCJSGp3yrFL3E%2FeBcBw4aZdf7TQQLgMNqPnMQGOqUB8IHoJNXcNPpby5vSmK2mV5oSAy39Cgplmur72BmZN9EBz9oGQb8LT0W6goF0z3qbi%2BHdFUrlHwAgVR%2Fp6bnMMCvc18W2BBy%2B%2Bg4x5y424irra4l5BXH20i09EM9ZGdXkaU0yxQlIW0M0h3hk7xGTiMaaEZ3ShvX%2BN5DL3jcbOdzg0gfiaiOQBOaIl5gA3JD6bXqs5Uzn7uIM%2Fr46a1mUTHb65uwC&X-Amz-Signature=08e8414d028680e4f1bafb3678991e811b64fdcfe77b758518ccfaeb7d00252e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GJPYDPP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIEPHroAzcTRaDa2B9yDfjebXjNUbbEXbDT%2FCEmyf4sriAiEAth%2BZtEDQkcDrmlfVfdkjGTbSYtcbFvuqCNc2AoVX6MMqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEClwc13fs475KEXyrcAy%2BhgQofvu4rKtyvr2cWQ51zqDHEXTQSEISPogSsdL5gHrnqQAohI82qmoKgZsW7hVoPRxwrvbMu8ovpqun0lWF1d0R5E%2F%2FStPwoFAnis%2FgcoAvXQaRRJYNe4PLcK9ublLo%2Fex8jpXutsIizFVNWnQmQRUzgxutKN8kIkQxo9lIldjKaqtI8bhe3IC3IDp7SbklfihW9jhSaZ8D7qmUBNrwZ3405BPQuT3cZCbAGOEvkULwICERSqaCR23gg%2BhnvM9N2XHjh4jyRMmvMS3NPk9eMkyILuSo4P%2BEfS7TGMPba7ZenXmWAkzdZ5xvbaCx0C5LANmpS5f3MSjihgxpWNk7jGomVMrilXGQ5fK471PSv1PKOVRLVInGK2jVHhPwlzXd4p79EH7WmWSHiTKFJjio5HZ2%2FB%2BtEW8VvS6%2BXR6gZjeLSDVzAStTE1RXewo91x%2BL2egYwgq3kfqaKgOGXappTxrGSdlC51te%2FnD6kiZ8eLggDsptLMUN5lqx94TZ7aDtBcDBXLYVPqFlPfO5On6%2Bccj7CjWJp9Zg8R9EchBgtfBUp36iOtKVnXDg7M%2FcwCbKTByDz2E2TdqsHOnXotQGLE%2FDIrHR4R1qyvQV0iMsJVUqmMltCf47R0hKMMLfGnMQGOqUBu56299r2DgAx%2F%2FGHWYJn3YXC2pd6gSJwsOIbMmEovKCl5zd%2F2Od9FiYVOgOMl7AVm5l%2B6Neyv%2FadTAUzi6X4pl0Fj815RktKpcgj7xRccxSxK%2BJ4YwiDvz0j7iAbbgKTBRpzBl7W61i3BNzGpg%2FLA4GClvW9BMWZSiJTulY0aSffO3aKTus8%2FZqsnE05fDotOD4UOZFsaK3q%2FYCNA4Q1UguNlCrs&X-Amz-Signature=908f1f5f0ab5c2fd669560654184d22ae42d25d960434ebf40ef713531d54095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
