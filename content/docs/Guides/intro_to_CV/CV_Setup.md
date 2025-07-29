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

	![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d82b6650-a5e4-4d3c-b8c9-93d817dae00e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MP4GLNX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIDhtL9PoZyf%2BV4OBeYWWSDu2m8UaCmI9wf7L%2B%2F14fPEoAiApuQjrkfYxG3QFZajiY85%2FPi0GLmto9N9fWLcQECS3RyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgiw0d3UuBW%2B4HSM6KtwDkYVgUkJxERuoAKyWOKNpsFzuEzF8WPCWOX5wKHQLQ8TJn3MHhe%2B%2F1mg5Ct4Lc2u4spZui37ZoJCwwahPOOdZcdWFvIWGUgH1Ze6zpI4grxyD%2B4sX9IEf5Cw%2F20Iozp7ZvMycJftGcBii9R7OVnPAfXSkkeY12dx%2F2Kiq5D0D1SKQkVDA4rVLigHDxd8Qxi0inOiPqY8qcn%2Fv9go3x%2B2W7iDJvY3z0w8a03wDC%2BI1DHv95zechNNEc8r0hkGuzMcRikGw5pyMc7gjhL70V4QZ%2F104GX0ZfzSihhv2KY8jEaGJxX9JpYM2aou66eA2wAaCzM37RhYt8nT1oIAEZB3INpPXRCdRs5c2K70BVvRID5EDNUeN2PJvvAvJrnFAew0HvJNbhLfiYhzcbm%2BvoDkkugiN1F48BxClYPUfzdfpPXkZUY6cjOf9inkA4RPd2PQsWTry0Zymb24c8iPbZVByjcilFqndC0%2BqcNIZpAnRvJS%2FgLFiWgywbEButU0H89YxrQoJgQZ89JidIuWiTdjlVLP0eQN%2FUhFOSY0CestcfxXn%2FRcA7nmB2NCBDIZtWx2gxyvq8TIcEcKs9GSQQaWbBcCU8YHWZJoPLVQax0z6ACqEaofTT2OO%2Fy7HuRkwzZijxAY6pgEvfZ5rwnMRlTnFn9Egd0zLzO3lJjB%2F8eWl8WQsWg9e%2BP7GKrsh0EpbEIOy%2FebjmQNHuIjmAv049ECC0P6gmwfO2Af1z9Tnm43XQo9NfI3vezK3ZxlrdRH9zA7aysc8%2FFtRCX0ZYXn312aWo842yXkZ0E8VBA7rGARqjSMi4nndigBSp2w0RsKbRDZsvce5amhvjh8g1acTaWRxfadn50d%2B9iWVXnu5&X-Amz-Signature=01b51673f54919cfabb5fd866e5bed40190c3f4f1a16444ae3106bb92a571a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![e1bfe78d4c6455985cebb9d6a247088b.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7d1ce04e-65d6-40c8-814d-754280e9515a/e1bfe78d4c6455985cebb9d6a247088b.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBZTZQRX%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIBAHGmK5kqMUxLtIs5qH5tzE8fuutIb6RMaEKxseExZhAiEAtu3535gfQj0Ty3ZKAQHZNzviSwc0ncY0kkdA5sI%2FELUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRGpnKJk0utC6VaCCrcA2SMGopvisnwNYKaNTUTtPUsCSmle26%2BGD8EzHFmt6hN9rygvJAT6J5K9QwoSVFMg793IYpVSLT5bKNlg4PpHq8AQzUfHkhXRZ27JVFhf%2FPSnsbOJGpIMyRRxDOjiAauw033ZIF%2BVxjczc5wtEIdqaj411zK5FYs97JgN76%2B%2ByY1GvuiAafh4JJxRnP9tnYbo71CJ1QTs9aYm%2F18noqcPpbVS3XSTu7fMGoash2AV1240ov%2FwZhp8j3chzRyn%2F3jmjmw2eR4oSGmPf%2Bcd8975eP2XJmlUDAJsuw2q2sPZJyKPyXOv6GLc3VU0MVPAZW5LGKMNatsEPXgzsRv1eTLh8dgOdUO5TWE68TYH3mGSyCC5bDXyqpjN9eXKD8nNDiZtQN9NzGue6b6%2FRLinWqC7RbBW28BYqBBhW3XOjE%2FykPg%2FeNdJcbnmhjxxcJ93YztJUoGx3HetopTy%2F0oPUE6qSD8PufXfkmCWUOamSwq0%2BFebRoPv337Pwd0%2BQrWvTWWFqZl%2FVlwkGZYfgV1jdt%2Fgyjb0sSOKelJxYmlK1cmf%2FWLifXyqDuUxibMgNeHFBE%2FROWS9f%2BCSwdmGOt8DK55Tb%2BAyXGrfLRov8JORuM4IR3npPyt4sjDjLxg78aZMOGXo8QGOqUB6MBa9xE152dqrpHUyGLaAVj6W5EsBnjs4LMHHKK3bVDbpapFcLZ2ErS1pLJD8pPe4EJjUe9fVX3J%2FecwVa01J8a2JVhutzGmmnOmXQTl91mI0Is6k7zDRljHa4mRsS6FjNnItfdJY7MzXhTig10bLrqQ8r7M5olvNhLKp7os8hoIdXHo3VF4f4FA9ygn9kylwJaMgZZ%2FeLqRE18NmxDp0e%2BNu5TY&X-Amz-Signature=79db3d42b66d436f123a61964ea3cff8a41ee2f2bf78f21f277841cd85dba95e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

enjoy some pilk!!
