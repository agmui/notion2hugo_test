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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPFZP3BZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIDnQT23OlRt16vI5XPNxIiRwuHHO07iYrsC%2FWXY9jw18AiEAspzHhbyBAdjimo0AKR%2BdmFVbLlnJ3jRzjXh0UZm7lSkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDLF0QKj4ZtchKYLOxCrcA0FoVtyO9pygfUq7gr%2B2%2F9QCL31CmoS36fYITPUpL%2BdH9ztJMitPOEJe97eV3gcL3geEVfnppV8PK1tkAejME9y2F8um0TGLOUrTMaoEgAM%2FRqmOWtelDegGnYCAZlp3%2BbfotsLvwVlg29j5cWtwZ2Sl8r7qdbwU90Hq3sBGrYe8Ehqr%2BQsyKzMRysN6XaPbtEHewD%2B48fPbmef1d%2FnteFMWhM45ky9X04whJig08SGxCIn%2FmG%2BEDIPatHdZDWbnWVuMDQ3zqNG1kYAVX04GtalVlbmfejsQ%2FlINzJlLD6lM4X4mHm0tnHNLBqLj4FrOQ%2FXZkSxraLvnKL2IP5TGCraacqQIk6mnviTTyz90tSrnhNkcwx%2BsRFBLVP%2FzD1j7me8VFG5JknJxFTloMTKz9zAdM68oernPGU1g1AovCLFUgu7YQTvP2gznBeTRvipDGzDXiyWR3wvb6RQe9FwwYdkm58VVbwnS0OPQ52%2FNKR0elAGq94k14U6tfSTsV8cZOJFVZ8i3DA2o0NuHSW97LioUFr7qAVBccjbqqH4%2FnOvJOB3Igz%2FiRDr23znO1j3isYZjZ6FVklYulacNCqZGCfl6%2BAmdjwqaEiftMid989kvYqy5SHy9SooIEsT4MMeFusIGOqUB3Ro%2BfuAHN77KCPT211IW20%2FijCkbt66XCHH6oeyjXxDefvNfPuFa%2Bdue%2BXMh9sSL2YSzCPUb8e7lU55yBcGnNFKxNzgxdYp2YZqKD6%2BtmwIROex1lxIEtBj10TzqHitmnnBHbCdwE6DvjKY9RmYngv41t9egX7DSt2znRQdnKimvU%2Bxz9XVhsJ96RpmzipX64771IpthzrNxi8KsRAM219sWKJXf&X-Amz-Signature=6345065ab22179fba88a11096097404d019eb4b38b00f3fd99688d9676fb5cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEDVUAJR%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDbnNe1QGkuK43UuymjjZTqXbVGhezzDVRk49Bb4CIblQIhAKywF7Fc7l%2Bw8tLbY0U4t0eKagKIr68J11ZgyFfqFNtiKv8DCEMQABoMNjM3NDIzMTgzODA1IgwWo7E0dwrd%2FU%2BX5Ecq3ANyKL4xFXq701E%2BqIiJudvE6SoZVEaDWNFUzn7Wx950w%2BX8sIs2z0xnal5mt1AK01VQut0BNs1UB94J0a4JY6IEQyflHjwq6kKL0Gl3sl9JxiL%2Bprn00DwAPmPCDd7yRS4xxhtz201mO7MDJRlwlSGxK2mKPVNgnmNES%2FYcieiv%2FrF4MeJHZaSvZWmp2c8Ry20G3en1AD5CWiWGHlAQYZfWx2KItf9azorpoNE7kVHkvsl%2ByoPLzwuBXZhNWsVjkkY25oKXVdi23u1rUDlVkRX4rp9WHLC62fV%2FAGCQscIYC9izuVo5uwZ%2BdojZNSqEF6jfWsoIJVNaK3GzI8OI7MU5dWnV3x0x9VOlPWt8YEPvgVZj%2BlLS6oIdKPcEEFM5JaEDrY%2BlDznUYrhEiivqb9wurWdxrIsUYVuhLHKkI8qqmxapeg3v2D2ZucUfnhykp%2FEL%2FkB1Uv2Sc9kCIcE3A9SHU6TkGSRS3C50dXiZwaZ16fKy7zNZzQdj8ABCiZAIzQv0sNCpXJNVlnR%2FNhi%2FMYXtaucfXAbFUs1uYW%2BflafvOHOMGRaUwAWzZS8TvQaZc20LxzJ6d0zAhEIUydGhHyuCMqmoa5oKqLG8oRPA%2FvrK4t8f8qRpTJehWSnUhjDYrrrCBjqkAdY3vb7czSLuXTLXcrLHewoEHyaq%2F12fG8krSftmKn%2FSCRmi0ONbIYu7n2XXuq7rj9dJNwi4XTSIyzRh6Ajq5Pjqo5ul%2FmpRfS7lbS%2BT3hVC4XcQYt79OFOfXsUcN7u9aNYYOU1s2QESHBfZCN6YYY46RFQJXy9RxBvKg18djY5YbRZimrIe9BZI7ZmqQkFBThgaLRk4YKNZcAIFrMNQ%2B0VpmCop&X-Amz-Signature=e9827a08b29df9ce87d24d4647280804024c52d44b75dd789087276cd88a61d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
